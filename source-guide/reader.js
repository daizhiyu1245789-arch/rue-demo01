
(() => {
  'use strict';
  const data = globalThis.rueSourceGuide.data;
  const explanationsByFlow = Object.assign({}, globalThis.rueSourceGuide.explanations, {
    compile: globalThis.rueSourceGuide.compileExplanations,
    mount: globalThis.rueSourceGuide.mountExplanations,
  });
  const minimalByFlow = globalThis.rueSourceGuide.minimalImplementations || {};
  const handwrittenByFlow = globalThis.rueSourceGuide.handwrittenImplementations || {};
  const select = document.getElementById('flow');
  const track = document.getElementById('track');
  const sections = document.getElementById('sections');
  const scroller = document.getElementById('flow-scroll');
  const featureNav = document.getElementById('feature-nav');
  const search = document.getElementById('feature-search');
  const outlineScroller=document.getElementById('outline-scroll');
  const outline=document.getElementById('outline');
  const mapScroller=document.getElementById('mindmap-scroll');
  const mindmap=document.getElementById('mindmap');
  const handwrittenScroller=document.createElement('section');
  handwrittenScroller.id='handwritten-scroll';
  handwrittenScroller.className='handwritten-scroll';
  handwrittenScroller.hidden=true;
  scroller.before(handwrittenScroller);
  let currentView='map';
  let outlineKey='';
  let graph;
  const sequencePositions=new Map();
  function renderOutline(key){
    if(outlineKey===key)return;
    outlineKey=key;
    const phases=globalThis.rueSourceGuide.buildMindmap(key);
    outline.innerHTML='<div class="map-root"><span>RUE / SOURCE MAP</span><h2>'+esc(labels[key])+'</h2><p>'+data[key].rows.length+' 个源码节点 · '+phases.reduce((sum,phase)=>sum+phase.groups.length,0)+' 个阅读分支</p></div><div class="map-phases">'+phases.map((phase,index)=>'<section class="map-phase"><div class="map-phase-title"><span>'+String(index+1).padStart(2,'0')+'</span><div><h3>'+esc(phase.title)+'</h3><p>'+esc(phase.summary)+'</p></div></div><div class="map-branches">'+phase.groups.map(group=>'<details class="map-branch"><summary><span class="map-branch-title">'+esc(group.title)+'</span><span class="map-count">'+group.nodes.length+' 节点</span><small>'+esc(group.summary)+'</small></summary><ol class="map-leaves">'+group.nodes.map(({row,number})=>'<li><a href="#flow='+key+'&view=sequence&node='+number+'"><span class="map-leaf-number">'+String(number).padStart(2,'0')+'</span><span><b>'+esc(row.title)+'</b><small>'+esc(row.kind)+' · '+esc(row.file?row.file+':'+row.line:'外部 / 编译边界')+'</small></span><span aria-hidden="true">↗</span></a></li>').join('')+'</ol></details>').join('')+'</div></section>').join('')+'</div>';
    outlineScroller.scrollTop=0;
  }
  document.getElementById('outline-expand').addEventListener('click',()=>outline.querySelectorAll('details').forEach(item=>{item.open=true;}));
  document.getElementById('outline-collapse').addEventListener('click',()=>{outline.querySelectorAll('details').forEach(item=>{item.open=false;});outlineScroller.scrollTop=0;});
  const codeSources = new Map();
  let nextCodeId = 0;
  let toastTimer;
  const settingsKey='rue-source-reader';
  let settings={theme:'system',fontSize:13,wrap:false,explain:true};
  try {
    const saved=JSON.parse(localStorage.getItem(settingsKey));
    if(saved && typeof saved==='object'){
      if(['system','light','dark'].includes(saved.theme))settings.theme=saved.theme;
      if(Number.isInteger(saved.fontSize))settings.fontSize=Math.max(11,Math.min(18,saved.fontSize));
      settings.wrap=saved.wrap===true;
      settings.explain=saved.explain!==false;
    }
  } catch {}
  function announce(message){
    const toast=document.getElementById('toast');
    clearTimeout(toastTimer);toast.textContent=message;toast.hidden=false;
    toastTimer=setTimeout(()=>{toast.hidden=true;},2500);
  }
  function applySettings(){
    const readingTop=scroller.getBoundingClientRect().top+20;
    const anchor=scroller.scrollTop>0?[...track.querySelectorAll('.node')].find(node=>node.getBoundingClientRect().bottom>readingTop):undefined;
    const offset=anchor?Math.max(0,readingTop-anchor.getBoundingClientRect().top):0;
    document.documentElement.dataset.theme=settings.theme;
    document.documentElement.style.setProperty('--code-size',settings.fontSize+'px');
    document.body.classList.toggle('wrap-code',settings.wrap);
    document.body.classList.toggle('brief-explanations',!settings.explain);
    document.getElementById('explain-toggle').setAttribute('aria-pressed',String(settings.explain));
    document.getElementById('theme').value=settings.theme;
    document.getElementById('font-size').textContent=settings.fontSize+'px';
    document.getElementById('font-down').disabled=settings.fontSize<=11;
    document.getElementById('font-up').disabled=settings.fontSize>=18;
    document.getElementById('wrap-code').setAttribute('aria-pressed',String(settings.wrap));
    if(anchor){
      const nextOffset=Math.min(offset,Math.max(0,anchor.clientHeight-40));
      scroller.scrollTop+=anchor.getBoundingClientRect().top-scroller.getBoundingClientRect().top-20+nextOffset;
    }
    try{localStorage.setItem(settingsKey,JSON.stringify(settings));}catch{}
    
  }
  document.getElementById('theme').addEventListener('change',event=>{settings.theme=event.target.value;applySettings();});
  document.getElementById('font-down').addEventListener('click',()=>{settings.fontSize=Math.max(11,settings.fontSize-1);applySettings();});
  document.getElementById('font-up').addEventListener('click',()=>{settings.fontSize=Math.min(18,settings.fontSize+1);applySettings();});
  document.getElementById('wrap-code').addEventListener('click',()=>{settings.wrap=!settings.wrap;applySettings();});
  document.getElementById('explain-toggle').addEventListener('click',()=>{settings.explain=!settings.explain;applySettings();});
  document.addEventListener('keydown',event=>{
    if(event.ctrlKey||event.metaKey||event.altKey||event.target.closest('input,select,textarea,[contenteditable="true"]'))return;
    if(event.key==='/'&&search.getClientRects().length){event.preventDefault();search.focus();}
  });
  async function copyText(value,message){

    try{
      if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(value);

      announce(message);
    }catch{announce('未能访问剪贴板，请选中文本后手动复制。');}
  }
  function scrollToNode(element) {
    if (!element) return;
    scroller.scrollTo({top:scroller.scrollTop + element.getBoundingClientRect().top - scroller.getBoundingClientRect().top - 20});
  }
  const root = 'E:/ruejsProject/rue-demo01/';
  const order = ['compile','mount','lifecycle','cleanup','tracking','update','derived','domBinding','conditional','keyedList','componentPatch','router','context','errors','extensions','teleport','suspense','keepAlive','transition','ssr'];
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function highlightCode(text){
    const token=/\/\*[\s\S]*?(?:\*\/|$)|\/\/[^\n]*|"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|`(?:\\[\s\S]|[^`\\])*`|\b(?:async|await|break|case|catch|class|const|continue|default|delete|else|export|false|finally|for|from|function|if|import|in|instanceof|let|new|null|of|return|static|super|switch|this|throw|true|try|typeof|undefined|var|void|while|yield)\b|\b\d+(?:\.\d+)?\b/g;
    let result='',offset=0;
    for(const match of text.matchAll(token)){
      result+=esc(text.slice(offset,match.index));
      const value=match[0];
      const kind=value.startsWith('/')?'comment':/^["'`]/.test(value)?'string':/^\d/.test(value)?'number':'keyword';
      result+=value.split('\n').map(line=>'<span class="token-'+kind+'">'+esc(line)+'</span>').join('\n');
      offset=match.index+value.length;
    }
    return result+esc(text.slice(offset));
  }
  function codeHtml(text, firstLine) {
    const lines = text.split('\n');
    const indentation = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^\s*/)[0].length), 40);
    const id=String(nextCodeId++);
    codeSources.set(id,text);
    const highlighted=highlightCode(lines.map(line=>line.slice(indentation)).join('\n')).split('\n');
    return '<div class="code-block"><div class="code-tools"><span>SOURCE · L'+firstLine+'–'+(firstLine+lines.length-1)+'</span><button class="tool-button copy-code" type="button" data-copy="'+id+'" aria-label="复制代码，第 '+firstLine+' 行起">复制代码</button></div><pre class="code">' + highlighted.map((line,index) => '<span class="code-line"><span class="line-no">' + (firstLine+index) + '</span><code>' + line + '</code></span>').join('') + '</pre></div>';
  }
  function standaloneCodeHtml(text) {
    const id=String(nextCodeId++);
    codeSources.set(id,text);
    const highlighted=highlightCode(text).split('\n');
    return '<div class="code-block standalone-code-block"><div class="code-tools"><span>HANDWRITTEN IMPLEMENTATION</span><button class="tool-button copy-code" type="button" data-copy="'+id+'" aria-label="复制手写完整实现">复制代码</button></div><pre class="code standalone-code">' + highlighted.map(line => '<span class="code-line"><code>' + line + '</code></span>').join('') + '</pre></div>';
  }
  function renderHandwritten(key){
    const item=handwrittenByFlow[key];
    if(!item){
      handwrittenScroller.innerHTML='<div class="handwritten-empty"><h2>'+esc(labels[key])+' · 手写完整实现</h2><p>这个主题的完整手写实现还没有补上。当前可以先看完整源码顺序图里的执行解读。</p></div>';
      return;
    }
    handwrittenScroller.innerHTML='<article class="handwritten"><header class="handwritten-head"><p>HANDWRITTEN RUNTIME</p><h2>'+esc(item.title)+'</h2><span>'+esc(item.summary)+'</span></header><div class="handwritten-layout"><nav class="handwritten-nav">'+item.sections.map((section,index)=>'<a href="#handwritten-section-'+index+'">'+esc(section.title)+'</a>').join('')+'</nav><div class="handwritten-content">'+item.sections.map((section,index)=>'<section id="handwritten-section-'+index+'" class="handwritten-section"><h3>'+esc(section.title)+'</h3><p>'+esc(section.text)+'</p>'+standaloneCodeHtml(section.code)+'</section>').join('')+'<section class="handwritten-section full-handwritten"><h3>完整手写版代码</h3><p>这一段可以从上到下连续读，完整串起应用挂载主链路。</p>'+standaloneCodeHtml(item.fullCode)+'</section></div></div></article>';
    handwrittenScroller.scrollTop=0;
  }
  function explanationHtml(detail){
    if(!detail)return '';
    return '<section class="explanation" aria-label="执行解读"><h4 class="explanation-heading">执行解读</h4><p class="explanation-context">'+esc(detail.context)+'</p><ol class="explanation-steps">'+detail.steps.map(step=>'<li>'+esc(step)+'</li>').join('')+'</ol><p class="explanation-result"><b>执行之后</b>'+esc(detail.result)+'</p><p class="explanation-watch"><b>断点观察</b>'+esc(detail.watch)+'</p></section>';
  }
  function simpleCodeHtml(text) {
    const id=String(nextCodeId++);
    codeSources.set(id,text);
    const highlighted=highlightCode(text).split('\n');
    return '<div class="code-block mini-code-block"><div class="code-tools"><span>MINI IMPLEMENTATION</span><button class="tool-button copy-code" type="button" data-copy="'+id+'" aria-label="复制最小实现代码">复制代码</button></div><pre class="code mini-code">' + highlighted.map(line => '<span class="code-line"><code>' + line + '</code></span>').join('') + '</pre></div>';
  }
  function minimalHtml(detail){
    if(!detail)return '';
    return '<section class="minimal" aria-label="最小实现"><h4 class="minimal-heading">'+esc(detail.title || '最小实现')+'</h4><p class="minimal-intro">'+esc(detail.intro)+'</p>'+simpleCodeHtml(detail.code)+'<p class="minimal-watch">'+esc(detail.watch)+'</p></section>';
  }
  handwrittenScroller.addEventListener('click',event=>{
    const copy=event.target.closest('[data-copy]');
    if(copy){const value=codeSources.get(copy.dataset.copy);if(value!==undefined)copyText(value,'手写代码已复制');}
  });
  track.addEventListener('click',event=>{
    const copy=event.target.closest('[data-copy]');
    if(copy){const value=codeSources.get(copy.dataset.copy);if(value!==undefined)copyText(value,'源码已复制');}
    const link=event.target.closest('[data-copy-node]');
    if(link){
      const url=new URL(location.href);url.hash='flow='+active+'&node='+link.dataset.copyNode;
      copyText(url.href,'节点链接已复制');
    }
  });
  function loadDefinition(details){
    if(details.dataset.loaded)return;
    const definition=data.definitions[details.dataset.definition];
    details.querySelector('.full-source').innerHTML=codeHtml(definition.code,definition.line);
    details.dataset.loaded='true';
  }
  function updateExpandButton(){
    const all=[...track.querySelectorAll('details[data-definition]')];
    const expanded=all.length>0&&all.every(details=>details.open);
    const button=document.getElementById('expand-all');
    button.disabled=all.length===0;
    button.textContent=expanded?'收起全部函数':'展开全部函数';
    button.setAttribute('aria-pressed',String(expanded));
  }
  document.getElementById('expand-all').addEventListener('click',()=>{
    const all=[...track.querySelectorAll('details[data-definition]')];
    const expand=!all.every(details=>details.open);
    all.forEach(details=>{if(expand)loadDefinition(details);details.open=expand;});
    updateExpandButton();
  });

  for (const [i,key] of order.entries()) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = String(i+1).padStart(2,'0') + ' · ' + data[key].title;
    select.append(option);
  }
  let active = '';
  const groups = [
    {title:'编译与应用',keys:order.slice(0,4)},
    {title:'响应式与渲染',keys:order.slice(4,11)},
    {title:'应用能力',keys:order.slice(11,15)},
    {title:'内置组件与服务端',keys:order.slice(15)},
  ];
  const labels = {
    compile:'编译过程',mount:'应用挂载',lifecycle:'生命周期',cleanup:'卸载与清理',
    tracking:'依赖追踪',update:'响应式更新',derived:'计算属性与侦听',domBinding:'DOM 绑定',
    conditional:'条件渲染',keyedList:'列表与 Key 更新',componentPatch:'组件更新',
    router:'路由',context:'上下文与依赖注入',errors:'错误处理',extensions:'扩展机制',
    teleport:'Teleport 传送',suspense:'Suspense 异步边界',keepAlive:'KeepAlive 缓存',
    transition:'Transition 过渡',ssr:'服务端渲染与水合',
  };
  graph=globalThis.rueSourceGuide.createSourceGraph({viewport:mindmap,zoomOutput:document.getElementById('map-zoom')});
  document.getElementById('map-zoom-out').addEventListener('click',()=>graph.zoom(-.12));
  document.getElementById('map-zoom-in').addEventListener('click',()=>graph.zoom(.12));
  document.getElementById('map-fit').addEventListener('click',()=>graph.fit());
  document.getElementById('map-expand').addEventListener('click',()=>graph.expandAll());
  document.getElementById('map-collapse').addEventListener('click',()=>graph.collapseAll());
  const searchText = new Map(order.map(key => [key,
    [labels[key],data[key].title,...data[key].rows.map(row=>row.title)].join(' ').toLowerCase()
  ]));
  function renderDirectory() {
    const query=search.value.trim().toLowerCase();
    let count=0;
    featureNav.innerHTML=groups.map(group=>{
      const keys=group.keys.filter(key=>searchText.get(key).includes(query));
      count+=keys.length;
      if(!keys.length)return '';
      return '<section class="feature-group"><h3>'+group.title+'</h3>'+keys.map(key=>
        '<a class="feature-link" data-flow="'+key+'" href="#flow='+key+'&view='+currentView+'"'+(key===active?' aria-current="page"':'')+' title="'+esc(data[key].title)+'"><span class="feature-number">'+String(order.indexOf(key)+1).padStart(2,'0')+'</span><span>'+esc(labels[key])+'</span><span class="feature-count" aria-label="'+data[key].rows.length+' 个源码节点">'+data[key].rows.length+'</span></a>'
      ).join('')+'</section>';
    }).join('') || '<p class="empty-state" role="status">没有匹配的源码功能，请换个关键词。</p>';
    document.getElementById('feature-total').textContent=count+' / '+order.length+' 个功能';
  }
  search.addEventListener('input',renderDirectory);
  renderDirectory();
  function render(key, step, shouldScroll=false, node=0, view='map') {
    if (!order.includes(key)) key='mount';
    const previousActive=active;
    if(active&&currentView==='sequence')sequencePositions.set(active,scroller.scrollTop);
    currentView=view;
    document.body.classList.toggle('map-view',view!=='sequence');
    outlineScroller.hidden=view!=='outline';
    mapScroller.hidden=view!=='map';
    scroller.hidden=view!=='sequence';
    handwrittenScroller.hidden=view!=='handwritten';
    for(const name of ['outline','map','sequence','handwritten']){
      const link=document.getElementById('view-'+name);
      link.href='#flow='+key+'&view='+name;
      if(name===view)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
    }
    renderOutline(key);
    graph.render(key,labels[key]);
    renderHandwritten(key);

    const previousScrollTop=scroller.scrollTop;
    active=key;
    select.value=key;
    featureNav.querySelectorAll('[data-flow]').forEach(link=>{
      link.href='#flow='+link.dataset.flow+'&view='+view;
      if(link.dataset.flow===key)link.setAttribute('aria-current','page');
      else link.removeAttribute('aria-current');
    });
    const flow=data[key];
    const flowExplanations=explanationsByFlow[key];
    const flowMinimal=minimalByFlow[key];
    document.getElementById('explain-toggle').hidden=!flowExplanations;
    codeSources.clear();
    document.title='Rue · 查看源码 · ' + flow.title;
    document.getElementById('title').textContent=flow.title;
    document.getElementById('subtitle').textContent=flow.rows.length + ' 个源码节点  /  '+new Set(flow.rows.filter(row=>row.file).map(row=>row.file)).size+' 个文件  /  函数调用、回调与返回逐步展开';
    sections.replaceChildren();
    let lastSection='';
    let group=0;
    track.innerHTML=flow.rows.map((row,index) => {
      let heading='';
      if(row.section!==lastSection) {
        lastSection=row.section;
        const id='section-'+group++;
        const button=document.createElement('button');
        button.type='button'; button.textContent=row.section;
        button.addEventListener('click',()=>scrollToNode(document.getElementById(id)));
        sections.append(button);
        heading='<h2 class="segment" id="'+id+'">'+esc(row.section)+'</h2>';
      }
      const number=String(index+1).padStart(2,'0');
      const source=row.file?'<a class="source" href="trae://file/'+root+esc(row.file)+':'+row.line+'">'+esc(row.file)+':'+row.line+' ↗</a>':'';
      const full=row.definitionId?'<details class="full" data-definition="'+row.definitionId+'"><summary>展开所在函数的完整源码（含中间语句与回调）</summary><p class="full-caption">这是本节点所在函数的完整定义。具体执行哪一分支，以代码条件为准。</p><div class="full-source"></div></details>':'';
      const boundary=row.boundary?'<p class="boundary">'+esc(row.boundary)+'<br>此处为外部执行 / 编译产物边界；页面不把它伪装成可逐行阅读的本地函数。</p>':'';
      const last=index===flow.rows.length-1||flow.rows[index+1].section!==row.section;
      const detail=flowExplanations?.[index+1];
      const minimal=flowMinimal?.[index+1];
      return heading+'<article class="node'+(last?' last':'')+'" id="node-'+(index+1)+'" data-original-step="'+row.originalStep+'" data-kind="'+esc(row.kind)+'"><span class="number">'+number+'</span><div class="node-card'+(detail?' has-explanation':'')+'"><button class="tool-button node-link" type="button" data-copy-node="'+(index+1)+'" aria-label="复制第 '+(index+1)+' 个节点链接" title="复制此节点链接">↗</button><div class="nodehead"><span class="kind">'+esc(row.kind)+'</span><h3>'+esc(row.title)+'</h3></div>'+source+'<div class="node-body"><div class="source-pane">'+(row.code?codeHtml(row.code,row.line):'')+boundary+'<p class="note">'+esc(row.note)+'</p>'+full+'</div><div class="explain-pane">'+explanationHtml(detail)+'</div><div class="minimal-pane">'+minimalHtml(minimal)+'</div></div></div></article>';
    }).join('');
    track.querySelectorAll('details[data-definition]').forEach(details=>details.addEventListener('toggle',()=>{
      if(details.open)loadDefinition(details);
      updateExpandButton();
    }));
    document.getElementById('end').textContent='● '+flow.title+' · 本主题展开结束';
    if(view!=='sequence'){
      // Overview views keep their own expansion, zoom and scroll state.
    }else if(node){
      scrollToNode(document.getElementById('node-'+node));
    }else if(shouldScroll&&step>1){
      const element=track.querySelector('[data-original-step="'+step+'"]');
      scrollToNode(element);
    }else if(previousActive===key){
      scroller.scrollTop=sequencePositions.get(key)??previousScrollTop;
    }else if(previousActive){
      scroller.scrollTo({top:0});
    }else{

    }
    updateExpandButton();
  }
  function readLocation(){
    const params=new URLSearchParams(location.hash.slice(1));
    const raw=Number(params.get('step'));
    const rawNode=Number(params.get('node'));
    const explicitView=params.get('view');
    const view=(explicitView==='outline'||explicitView==='map'||explicitView==='sequence'||explicitView==='handwritten')?explicitView:(params.has('node')||params.has('step')?'sequence':'map');
    return {key:params.get('flow')||'mount',step:Number.isInteger(raw)&&raw>0?raw:1,node:Number.isInteger(rawNode)&&rawNode>0?rawNode:0,view};
  }
  select.addEventListener('change',()=>{
    history.replaceState(null,'','#flow='+select.value+'&view='+currentView);
    render(select.value,1,false,0,currentView);
    scroller.scrollTo({top:0});
  });
  window.addEventListener('hashchange',()=>{const {key,step,node,view}=readLocation();render(key,step,true,node,view);});
  applySettings();
  const initial=readLocation();render(initial.key,initial.step,initial.step>1,initial.node,initial.view);
})();
