import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

export const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const decode = text => text.replace(/&(?:quot|#x27|gt|lt|amp);/g,
  entity => ({ '&quot;': '"', '&#x27;': "'", '&gt;': '>', '&lt;': '<', '&amp;': '&' })[entity]);

export function readGuide() {
  const raw = fs.readFileSync(path.join(projectRoot, 'RUE_SOURCE_GUIDE.html'), 'utf8');
  const doc = decode(raw.match(/srcdoc="([\s\S]*?)"/)[1]);
  const scripts = [...doc.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  scripts.forEach(script => new vm.Script(script));
  const script = scripts.find(s => s.includes('const flows ='));
  const source = script.slice(script.indexOf('const flows =') + 13, script.indexOf('const byId')).trim().replace(/;$/, '');
  const flows = vm.runInNewContext('(' + source + ')');
  return { doc, script, flows };
}
const sourceCache = new Map();
export function sourceLines(source) {
  const match = source.match(/^(.*?)(?::(\d+))?$/);
  if (!/^(app|node_modules)\//.test(match[1])) return null;
  const resolved = path.resolve(projectRoot, match[1]);
  if (!resolved.startsWith(projectRoot + path.sep)) throw new Error('Source escapes project: ' + source);
  if (!fs.existsSync(resolved)) throw new Error('Missing source: ' + source);
  if (resolved.endsWith('.wasm')) return null;
  if (!sourceCache.has(resolved)) sourceCache.set(resolved, fs.readFileSync(resolved, 'utf8').split(/\r?\n/));
  const lines = sourceCache.get(resolved);
  const line = Number(match[2] ?? 1);
  if (line < 1 || line > lines.length) throw new Error('Invalid line: ' + source);
  return { lines, line };
}
// Execute the real render/event code against a small DOM fixture.
// This verifies navigation, not browser layout or the OS Trae protocol handler.
function checkNavigation({ doc, script, flows }) {
  class Element {
    constructor(tag = 'div') {
      Object.assign(this, { tagName: tag, children: [], dataset: {}, style: {}, attributes: {}, listeners: {}, hidden: false, disabled: false, value: '', text: '', offsetWidth: 1000, offsetHeight: 3090, clientWidth: 800, clientHeight: 600, scrollLeft: 0, scrollTop: 0 });
    }
    set textContent(value) { this.text = String(value); this.children = []; }
    get textContent() { return this.text + this.children.map(child => child.textContent).join(''); }
    append(...children) { this.children.push(...children); }
    appendChild(child) { this.append(child); return child; }
    replaceChildren(...children) { this.text = ''; this.children = children; }
    setAttribute(name, value) { this.attributes[name] = String(value); }
    removeAttribute(name) { delete this.attributes[name]; delete this[name]; }
    addEventListener(name, handler) { (this.listeners[name] ??= []).push(handler); }
    emit(name) { if (!this.disabled) (this.listeners[name] ?? []).forEach(handler => handler({ target: this })); }
    scrollTo(options) { this.lastScroll = options; if (options.left !== undefined) this.scrollLeft = options.left; if (options.top !== undefined) this.scrollTop = options.top; }
    scrollIntoView(options) { this.lastScrollIntoView = options; }
  }
  const ids = new Map([...doc.matchAll(/id="([^"]+)"/g)].map(m => [m[1], new Element()]));
  const get = id => { assert.ok(ids.has(id), 'Missing UI element: ' + id); return ids.get(id); };
  get('rue-source-explorer').querySelector = selector => get(selector.slice(1));
  const fakeWindow = { parent: { location: { hash: '#flow=tracking&step=4' }, history: {} } };
  fakeWindow.parent.history.replaceState = (_state, _title, hash) => { fakeWindow.parent.location.hash = hash; };
  vm.runInNewContext(script, { document: { getElementById: get, createElement: tag => new Element(tag) }, window: fakeWindow, URLSearchParams });
  assert.equal(get('rse-flow-select').value, 'tracking');
  assert.equal(get('rse-function').textContent, flows.tracking.steps[3].fn);
  assert.equal(fakeWindow.parent.location.hash, '#flow=tracking&step=4');
  const refsFor = (step, next) => [step.source, ...(step.handoffRefs ?? []).map(ref => ref.source), ...(next ? [next.source] : [])];
  const checkLinks = (list, sources) => {
    assert.equal(list.children.length, sources.length);
    list.children.forEach((li, index) => {
      const card = li.children[0], source = sources[index];
      assert.equal(card.children[1].textContent, source);
      if (/^(app|node_modules)\//.test(source) && !/\.wasm(?::\d+)?$/.test(source)) {
        assert.equal(card.tagName, 'a');
        assert.equal(card.href, 'trae://file/E:/ruejsProject/rue-demo01/' + source);
        assert.equal(card.target, '_top');
      } else {
        assert.equal(card.tagName, 'div');
        assert.equal(card.href, undefined);
      }
    });
  };
  for (const [key, flow] of Object.entries(flows)) {
    get('rse-flow-select').value = key;
    get('rse-flow-select').emit('change');
    assert.equal(get('rse-count').textContent, '1 / ' + flow.steps.length);
    assert.equal(get('rse-step-grid').children.length, flow.steps.length);
    flow.steps.forEach((step, index) => {
      get('rse-step-grid').children[index].emit('click');
      assert.equal(get('rse-function').textContent, step.fn);
      assert.equal(get('rse-count').textContent, (index + 1) + ' / ' + flow.steps.length);
      assert.equal(get('rse-handoff-how').textContent, step.handoff);
      assert.equal(get('rse-handoff-kind').textContent, step.handoffKind);
      assert.equal(get('rse-handoff-to').textContent, flow.steps[index + 1]?.fn ?? '本主题完成');
      assert.equal(get('rse-prev-button').disabled, index === 0);
      assert.equal(get('rse-next-button').disabled, index === flow.steps.length - 1);
      assert.equal(get('rse-incoming').hidden, index === 0);
      assert.equal(get('rse-key-note').hidden, !step.note);
      assert.equal(get('rse-key-explain').textContent, step.note || '');
      assert.equal(get('rse-step-grid').children[index].attributes['aria-pressed'], 'true');
      checkLinks(get('rse-handoff-links'), refsFor(step, flow.steps[index + 1]));
      if (index === 0) {
        const labLinks = get('rse-lab-actions').children;
        assert.equal(labLinks.length, 3);
        labLinks.forEach(link => {
          assert.equal(link.target, '_top');
          assert.ok(fs.existsSync(path.resolve(projectRoot, link.href)), 'Missing lab link: ' + link.href);
        });
      }
      if (index) {
        const incoming = get('rse-incoming-content');
        assert.equal(incoming.children[1].textContent, flow.steps[index - 1].handoff);
        checkLinks(incoming.children[3], refsFor(flow.steps[index - 1], step));
        if (flow.steps[index - 1].note) assert.ok(incoming.textContent.includes(flow.steps[index - 1].note));
        get('rse-prev-button').emit('click');
        assert.equal(get('rse-function').textContent, flow.steps[index - 1].fn);
        get('rse-next-button').emit('click');
        assert.equal(get('rse-function').textContent, step.fn);
      }
    });
  }
  const important = get('rse-important-select');
  const options = important.children.flatMap(group => group.children);
  const expected = Object.values(flows).flatMap(flow => flow.steps).filter(step => step.importance).length;
  assert.equal(options.length, expected);
  options.forEach(option => {
    important.value = option.value;
    important.emit('change');
    const [key, index] = option.value.split(':');
    assert.equal(get('rse-flow-select').value, key);
    assert.equal(get('rse-function').textContent, flows[key].steps[Number(index)].fn);
    assert.equal(get('rse-key-note').hidden, false);
  });
  const hotspots = get('rse-architecture-hotspots').children;
  assert.equal(hotspots.length, 29);
  hotspots.forEach(hotspot => {
    hotspot.emit('click');
    assert.equal(get('rse-architecture-detail').hidden, false);
    assert.equal(hotspot.attributes['aria-pressed'], 'true');
    assert.ok(get('rse-architecture-detail-title').textContent);
    assert.ok(get('rse-architecture-detail-text').textContent.includes('关键观察'));
    assert.ok(get('rse-architecture-related').children.length > 0);
  });
  get('rse-architecture-related').children[0].emit('click');
  assert.ok(get('rse-flow-select').lastScrollIntoView);
  get('rse-architecture-zoom-in').emit('click');
  assert.equal(get('rse-architecture-zoom').textContent, '125%');
  assert.equal(get('rse-architecture-stage').style.width, '125%');
  get('rse-architecture-zoom-out').emit('click');
  assert.equal(get('rse-architecture-zoom').textContent, '100%');
  get('rse-architecture-section').value = '5';
  get('rse-architecture-section').emit('change');
  assert.ok(get('rse-architecture-viewport').scrollTop > 2300);
  get('rse-architecture-reset').emit('click');
  assert.equal(get('rse-architecture-section').value, '0');
  assert.equal(get('rse-architecture-zoom').textContent, '100%');
  get('rse-architecture-detail-close').emit('click');
  assert.equal(get('rse-architecture-detail').hidden, true);
  return expected;
}
const guide = readGuide();
const { flows } = guide;
if (process.argv.includes('--sources')) {
  for (const [key, flow] of Object.entries(flows)) {
    flow.steps.forEach((s, i) => {
      const source = sourceLines(s.source);
      console.log(key + '.' + (i + 1) + ' ' + s.fn + ' | ' + (source ? source.line + ': ' + source.lines[source.line - 1].trim() : s.source));
    });
  }
} else {
  let steps = 0, transitions = 0, links = 0;
  for (const [key, flow] of Object.entries(flows)) {
    transitions += flow.steps.length - 1;
    for (const [index, step] of flow.steps.entries()) {
      if (!step.handoff?.trim()) throw new Error('Missing handoff: ' + key + '.' + (index + 1));
      if (!step.handoffKind?.trim()) throw new Error('Missing relation type: ' + key + '.' + (index + 1));
      if (Boolean(step.importance) !== Boolean(step.note)) throw new Error('Incomplete key note: ' + key + '.' + (index + 1));
      sourceLines(step.source);
      for (const ref of step.handoffRefs ?? []) {
        const result = sourceLines(ref.source);
        if (result && ref.match && !result.lines[result.line - 1].includes(ref.match)) {
          throw new Error('Source moved: ' + key + '.' + (index + 1) + ' ' + ref.source);
        }
        links++;
      }
      steps++;
    }
  }
  const keyNotes = checkNavigation(guide);
  console.log(JSON.stringify({ themes: Object.keys(flows).length, steps, transitions, intermediateSourceLinks: links, practiceAndReferenceLinks: Object.keys(flows).length * 3, keyNotes, architectureHotspots: 29, syntax: 'OK', sources: 'OK', navigation: 'OK (DOM fixture)', deepLinks: 'OK', architectureInteractions: 'OK (DOM fixture)' }, null, 2));
}
