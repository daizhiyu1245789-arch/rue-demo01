import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'

const projectRoot = new URL('../', import.meta.url).pathname.replace(/^\/(.:\/)/, '$1')
const guideRoot = path.join(projectRoot, 'source-guide')
const dataRoot = path.join(guideRoot, 'data')
const generatedRoot = path.join(guideRoot, 'generated')

const order = [
  'compile',
  'mount',
  'lifecycle',
  'cleanup',
  'tracking',
  'update',
  'derived',
  'domBinding',
  'conditional',
  'keyedList',
  'componentPatch',
  'router',
  'context',
  'errors',
  'extensions',
  'teleport',
  'suspense',
  'keepAlive',
  'transition',
  'ssr',
]

const labels = {
  compile: '编译过程',
  mount: '应用挂载',
  lifecycle: '生命周期',
  cleanup: '卸载与清理',
  tracking: '依赖追踪',
  update: '响应式更新',
  derived: '计算属性与侦听',
  domBinding: 'DOM 绑定',
  conditional: '条件渲染',
  keyedList: '列表与 Key 更新',
  componentPatch: '组件更新',
  router: '路由',
  context: '上下文与依赖注入',
  errors: '错误处理',
  extensions: '扩展机制',
  teleport: 'Teleport 传送',
  suspense: 'Suspense 异步边界',
  keepAlive: 'KeepAlive 缓存',
  transition: 'Transition 过渡',
  ssr: '服务端渲染与水合',
}

function loadGuideData() {
  const context = vm.createContext({ console })
  context.globalThis = context
  const initPath = path.join(dataRoot, 'init.js')
  vm.runInContext(fs.readFileSync(initPath, 'utf8'), context, { filename: initPath })

  for (const key of order) {
    const files = fs
      .readdirSync(dataRoot)
      .filter((name) => name.startsWith(`${key}-`) && name.endsWith('.js'))
      .sort((a, b) => {
        const left = Number(a.match(/-(\d+)\.js$/)?.[1] ?? 0)
        const right = Number(b.match(/-(\d+)\.js$/)?.[1] ?? 0)
        return left - right
      })
    for (const name of files) {
      const filePath = path.join(dataRoot, name)
      vm.runInContext(fs.readFileSync(filePath, 'utf8'), context, { filename: filePath })
    }
  }

  return context.rueSourceGuide.data
}

function fnName(key, index, title) {
  const cleaned = String(title)
    .replace(/['"`]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .slice(0, 4)
    .map((part, partIndex) =>
      partIndex === 0
        ? part.charAt(0).toLowerCase() + part.slice(1)
        : part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join('')

  return `${key}Step${String(index + 1).padStart(3, '0')}${cleaned ? `_${cleaned}` : ''}`
}

function compact(value = '') {
  return String(value).replace(/\s+/g, ' ').trim()
}

function literal(value) {
  return JSON.stringify(value)
}

function nextTitle(rows, index) {
  return rows[index + 1]?.title || '调用者'
}

function makeCode(key, flow, row, index) {
  const name = fnName(key, index, row.title)
  const next = nextTitle(flow.rows, index)
  const title = compact(row.title)
  const note = compact(row.note)
  const watch = compact(row.watch)

  if (row.boundary || /Wasm|原生|JS → 原生|原生 → JS|运行边界/.test(row.kind || row.title)) {
    return `function ${name}(ctx) {
  const input = ctx.input
  const output = ctx.runOutsideJavaScript(input)
  ctx.next(${literal(next)}, output)
  return output
}`
  }

  if (/分支|条件|另一路径/.test(row.kind)) {
    return `function ${name}(ctx) {
  if (!ctx.match(${literal(title)})) return ctx.skip()
  const value = ctx.runCurrentBranch()
  ctx.next(${literal(next)}, value)
  return value
}`
  }

  if (/异步|调度|事件/.test(row.kind)) {
    return `function ${name}(ctx) {
  ctx.schedule(() => {
    const value = ctx.runCurrentStep()
    ctx.next(${literal(next)}, value)
  })
}`
  }

  if (/回调|传回调|执行回调|业务调用/.test(row.kind)) {
    return `function ${name}(ctx) {
  const callback = ctx.getCallback()
  const value = callback(ctx.input)
  ctx.next(${literal(next)}, value)
  return value
}`
  }

  if (/返回|完成/.test(row.kind)) {
    return `function ${name}(ctx) {
  const value = ctx.finishCurrentStep()
  ctx.returnTo(${literal(next)}, value)
  return value
}`
  }

  if (/登记|绑定|赋值|初始化|定义/.test(row.kind)) {
    return `function ${name}(ctx) {
  const value = ctx.createValue(${literal(title)})
  ctx.store(${literal(title)}, value)
  ctx.next(${literal(next)}, value)
  return value
}`
  }

  if (/递归/.test(row.kind)) {
    return `function ${name}(ctx, items) {
  for (const item of items) {
    ctx.runCurrentStep(item)
  }
  ctx.next(${literal(next)}, items)
  return items
}`
  }

  return `function ${name}(ctx) {
  const value = ctx.run(${literal(title)})
  ctx.next(${literal(next)}, value)
  return value
}`
}

function makeIntro(key, flow, row, index) {
  const next = nextTitle(flow.rows, index)
  const source = row.file ? `${row.file}:${row.line}` : '外部边界'
  const base = `这是「${labels[key]}」第 ${index + 1} 步的最小手写版，只保留当前节点的核心动作。`
  const detail = row.note
    ? `对应源码线索：${compact(row.note)}`
    : `对应源码位置：${source}。`
  const flowText = flow.rows[index + 1]
    ? `执行后继续到「${next}」。`
    : '执行后回到本主题的外层调用者。'
  return `${base}${detail}${flowText}`
}

function buildFlow(key, flow) {
  const result = {}
  flow.rows.forEach((row, index) => {
    result[String(index + 1)] = {
      title: `${String(index + 1).padStart(2, '0')} · 最小实现`,
      intro: makeIntro(key, flow, row, index),
      code: makeCode(key, flow, row, index),
      watch: row.watch ? `手写时先盯住：${compact(row.watch)}。` : '手写时先确认输入、返回值和下一步调用。'
    }
  })
  return result
}

function writeGenerated(data) {
  fs.mkdirSync(generatedRoot, { recursive: true })
  for (const key of order) {
    const output =
      'rueSourceGuide.minimalImplementations ||= {};\n' +
      `rueSourceGuide.minimalImplementations[${JSON.stringify(key)}] = ` +
      `${JSON.stringify(buildFlow(key, data[key]), null, 2)};\n`
    fs.writeFileSync(path.join(generatedRoot, `${key}-minimal.js`), output)
  }
}

const data = loadGuideData()
writeGenerated(data)

const total = order.reduce((sum, key) => sum + data[key].rows.length, 0)
console.log(`added ${total} minimal implementations for ${order.length} flows`)
