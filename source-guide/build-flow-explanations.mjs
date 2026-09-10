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

const themeHints = {
  lifecycle: '这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。',
  cleanup: '这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。',
  tracking: '这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。',
  update: '这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。',
  derived: '这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。',
  domBinding: '这条链专门看属性、事件、style、class 和文本怎样从渲染结果落到真实 DOM。',
  conditional: '这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。',
  keyedList: '这条链专门看带 key 列表怎样比对旧项和新项，并决定复用、移动、创建或删除。',
  componentPatch: '这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。',
  router: '这条链专门看路由对象怎样注册、响应地址变化，并把当前匹配结果驱动到 RouterView。',
  context: '这条链专门看 provide/inject 怎样沿组件 owner 链保存和查找上下文值。',
  errors: '这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。',
  extensions: '这条链专门看运行时扩展点怎样注册能力，并被渲染、组件或应用入口调用。',
  teleport: '这条链专门看子树怎样脱离当前容器，挂载到目标 DOM，同时保留原位置锚点。',
  suspense: '这条链专门看异步依赖怎样进入 pending、fallback、resolved 状态，并协调父级边界。',
  keepAlive: '这条链专门看组件实例怎样被缓存、停用、重新激活，而不是每次重新创建。',
  transition: '这条链专门看进入和离开阶段怎样加类名、等待过渡结束，并回调渲染流程继续。',
  ssr: '这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。',
}

const kindExplain = {
  绑定: '这是绑定节点，当前逻辑会把数据、DOM、实例或回调关系挂到运行时可查的位置。',
  调用: '这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。',
  回调: '这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。',
  执行回调: '这里真正执行前面传入的回调，调用栈会进入业务函数或渲染函数内部。',
  衔接代码: '这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。',
  返回: '这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。',
  分支: '这是条件分支节点，只有条件成立时才会沿这条路径继续执行。',
  条件: '这里先判断条件，再决定是否进入后续调用；断点时要先看条件表达式的真假。',
  异步: '这是异步边界，当前调用会先返回 Promise、任务或回调，真正后续执行发生在另一个时机。',
  别名: '这是导出别名或函数引用转发，名字变了，但最终进入的是同一个实现函数。',
  初始化: '这是初始化节点，当前函数会创建运行时对象、缓存结构或默认状态，后续节点会复用这些对象。',
  传回调: '这是传递回调的节点，当前代码重点不是马上执行函数体，而是把回调交给下一层保存或稍后调用。',
  登记: '这是登记节点，当前代码会把插件、Hook、依赖或处理函数记录到运行时容器里。',
  递归: '这是递归节点，当前函数会再次处理同类子结构；断点时要看递归参数是否缩小或换到下一层节点。',
  调度: '这是调度节点，当前代码会把后续工作放进队列、微任务、effect scheduler 或异步执行器。',
  定义: '这是定义节点，当前代码建立函数、对象或配置形状，后续节点会真正调用或读取它。',
  赋值: '这是赋值节点，当前语句会更新运行时状态，后面的判断和渲染会读取这个新值。',
  核验: '这是核验节点，当前逻辑会检查参数、状态或环境是否满足继续执行的条件。',
  阶段: '这是阶段节点，表示流程进入一个新的执行阶段，后面的节点会围绕这一阶段的状态继续展开。',
  另一路径: '这是另一条执行路径，通常由不同条件、不同入口或不同运行环境触发。',
  内部调用: '这是内部调用节点，控制权仍在当前模块内部，只是拆到更小的辅助函数继续执行。',
  时序: '这是时序节点，用来标明先后关系；它说明当前代码在整体流程中排在哪个时刻发生。',
  事件: '这是事件节点，当前流程由 DOM 事件、路由事件或运行时事件触发，而不是同步主线直接调用。',
  顺序: '这是顺序节点，当前代码按源码顺序继续执行，重点看它接在上一句之后改变了什么状态。',
  外部触发: '这是外部触发节点，入口来自浏览器、用户操作、服务端请求或宿主环境。',
  完成: '这是完成节点，当前阶段收尾并把结果、DOM 状态或生命周期状态交给外层流程。',
  业务递归: '这是业务层递归节点，说明框架正在按业务返回的子树或列表继续向下处理。',
  业务调用: '这是业务层调用节点，运行时正在进入用户组件、用户 Hook 或业务提供的函数。',
  异步登记: '这是异步登记节点，当前代码会保存 Promise、thenable、监听器或延迟任务，等待未来继续。',
  异步继续: '这是异步恢复节点，前面登记的异步任务完成后，控制权从这里继续往下走。',
  阅读顺序: '这是阅读顺序节点，用来把源码中分散的位置接回同一条直线执行链。',
  运行边界: '这是运行边界节点，说明控制权跨过了浏览器、Node、Worker、原生绑定或框架内部模块。',
  运行阶段: '这是运行阶段节点，当前逻辑已经进入一个明确的运行时阶段，后续状态变化都属于这一阶段。',
  'JS → 原生': '这是 JavaScript 进入原生绑定的边界，JS 负责准备参数，原生层负责执行更底层的转换或调度。',
  '原生 → JS': '这是原生层返回 JavaScript 的边界，结果已经从底层实现转换成 JS 可以继续处理的数据。',
  'Wasm → 原生': '这是 Wasm 与宿主原生层交互的边界，重点看导入导出函数怎样传递配置、诊断和结果。',
  'Wasm 边界': '这是 WebAssembly 模块边界，源码内部不可直接逐行阅读，只能通过导入、导出和输入输出观察。',
  'Wasm 执行': '这是 Wasm 插件真正执行转换逻辑的节点，控制权进入编译产物内部处理 AST。',
  'JS 运行时': '这是浏览器 JavaScript 运行时节点，说明当前逻辑已经从编译阶段回到页面实际运行阶段。',
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

function compactLine(value = '') {
  return String(value).replace(/\s+/g, ' ').trim()
}

function firstExecutableLine(code = '') {
  const lines = String(code)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith('//') && !line.startsWith('*') && !line.startsWith('/*'))
  return lines[0] || ''
}

function codeFocus(row) {
  const first = firstExecutableLine(row.code)
  if (!first) {
    return row.boundary
      ? `这里没有本地逐行源码，页面把它标为边界：${compactLine(row.boundary)}`
      : '这一节点没有源码片段，主要根据标题和说明理解控制权转移。'
  }
  return `当前片段先看这一行：${first}。它是本节点进入后最直接改变调用方向或状态的语句。`
}

function transitionText(rows, index, key) {
  const prev = rows[index - 1]
  const next = rows[index + 1]
  const from = prev
    ? `上一节点是「${prev.title}」，所以这里不是孤立代码，而是接着它的调用栈往下走。`
    : `这是「${labels[key]}」的第一个源码节点，先从这里建立本主题的入口视角。`
  const to = next
    ? `执行完本节点后，直线图继续到「${next.title}」。`
    : '执行完本节点后，这个主题的主线结束，控制权回到触发这个主题的外层调用。'
  return { from, to }
}

function nextResult(rows, index) {
  const next = rows[index + 1]
  if (!next) return '本主题执行链到这里收束；后续只剩调用者拿到结果或等待下一次外部事件触发。'
  return `当前节点把状态、返回值或回调关系准备好以后，下一步进入「${next.title}」。`
}

function makeWatch(row, rows, index) {
  const parts = []
  if (row.watch) parts.push(row.watch)
  if (row.file) parts.push(`${row.file}:${row.line}`)
  const next = rows[index + 1]
  if (next) parts.push(`下一步是否进入「${next.title}」`)
  return `断点停在这里时，重点看 ${parts.join('、')}。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。`
}

function makeExplanation(key, flow, row, index) {
  const total = flow.rows.length
  const number = index + 1
  const transitions = transitionText(flow.rows, index, key)
  const kind = kindExplain[row.kind] || `这是「${row.kind || '源码'}」节点，按当前标题和源码片段判断它在调用链中的位置。`
  const location = row.file
    ? `源码位置是 ${row.file}:${row.line}，它对应直线图第 ${number} / ${total} 个节点。`
    : `这是第 ${number} / ${total} 个边界节点，用来标出本地源码之外的执行入口或返回点。`
  const note = row.note ? `节点说明给出的直接线索是：${compactLine(row.note)}` : '这个节点没有额外 note，主要以源码片段和上下节点判断执行含义。'
  const section = row.section ? `它属于「${row.section}」这一段；这一段的目标是把同一类调用集中看完。` : ''
  const themeHint = themeHints[key] || `这条链专门看「${labels[key]}」相关的源码怎样从入口一步步传到最终效果。`

  return {
    context: `${themeHint} 当前节点是「${row.title}」。${transitions.from}`,
    steps: [
      location,
      section,
      kind,
      codeFocus(row),
      note,
      row.boundary
        ? '因为这是边界节点，调试时不用继续强行 F11 进入不可见实现；应该先确认传入和返回的数据形状。'
        : '如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。',
      row.definitionId
        ? `页面里的完整函数源码来自 ${row.definitionId}；展开后可以对照当前片段前后的 if、try、return 和回调定义。`
        : '如果没有完整函数展开，说明这个节点本身就是别名、边界或短片段；重点看它和上下节点的连接关系。',
      transitions.to,
    ].filter(Boolean),
    result: nextResult(flow.rows, index),
    watch: makeWatch(row, flow.rows, index),
  }
}

function buildFlowExplanations(data, key) {
  const flow = data[key]
  const result = {}
  flow.rows.forEach((row, index) => {
    result[String(index + 1)] = makeExplanation(key, flow, row, index)
  })
  return result
}

function writeGeneratedExplanations(data) {
  const keys = order.filter((key) => key !== 'compile' && key !== 'mount')
  fs.mkdirSync(generatedRoot, { recursive: true })

  for (const key of keys) {
    const explanations = buildFlowExplanations(data, key)
    const output =
      `rueSourceGuide.explanations[${JSON.stringify(key)}] = ` +
      `${JSON.stringify(explanations, null, 2)};\n`
    fs.writeFileSync(path.join(generatedRoot, `${key}-explanations.js`), output)
  }

  return keys
}

function updateInit() {
  const initPath = path.join(dataRoot, 'init.js')
  const next = 'globalThis.rueSourceGuide = {data:{definitions:{}}, mountExplanations:{}, compileExplanations:{}, explanations:{}, minimalImplementations:{}, handwrittenImplementations:{}};\n'
  fs.writeFileSync(initPath, next)
}

function updateReader() {
  const readerPath = path.join(guideRoot, 'reader.js')
  const source = fs.readFileSync(readerPath, 'utf8')
  const oldBlock = `  const explanationsByFlow = {
    compile: globalThis.rueSourceGuide.compileExplanations,
    mount: globalThis.rueSourceGuide.mountExplanations,
  };`
  const newBlock = `  const explanationsByFlow = Object.assign({}, globalThis.rueSourceGuide.explanations, {
    compile: globalThis.rueSourceGuide.compileExplanations,
    mount: globalThis.rueSourceGuide.mountExplanations,
  });`
  if (!source.includes(oldBlock) && !source.includes(newBlock)) {
    throw new Error('reader.js explanation map block not found')
  }
  fs.writeFileSync(readerPath, source.replace(oldBlock, newBlock))
}

function updateHtml(keys) {
  const htmlPath = path.join(projectRoot, 'RUE_SOURCE_GUIDE.html')
  let html = fs.readFileSync(htmlPath, 'utf8')
  const generatedTags = keys
    .map((key) => `<script defer src="./source-guide/generated/${key}-explanations.js"></script>`)
    .join('\n')
  const marker = '<script defer src="./source-guide/mindmap.js"></script>'
  html = html.replace(
    /<script defer src="\.\/source-guide\/generated\/(?!compile-explanations|mount-explanations)[^"]+-explanations\.js"><\/script>\n/g,
    '',
  )
  if (!html.includes(generatedTags)) {
    html = html.replace(marker, `${generatedTags}\n${marker}`)
  }
  fs.writeFileSync(htmlPath, html)
}

function updateReadme(keys, data) {
  const readmePath = path.join(guideRoot, 'README.md')
  let readme = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf8') : ''
  const summary = keys.map((key) => `- ${key}: ${data[key].rows.length} 条执行解读`).join('\n')
  const block = `\n\n## 执行解读\n\nmount 和 compile 保留手写解释；其它主题由 build-flow-explanations.mjs 根据节点源码、note、watch 与上下游节点生成右侧执行解读。\n\n${summary}\n`
  readme = readme.replace(/\n\n## 执行解读\n[\s\S]*$/, '')
  fs.writeFileSync(readmePath, `${readme.trimEnd()}${block}`)
}

const data = loadGuideData()
const keys = writeGeneratedExplanations(data)
updateInit()
updateReader()
updateHtml(keys)
updateReadme(keys, data)

const total = keys.reduce((sum, key) => sum + data[key].rows.length, 0)
console.log(`added ${total} explanations for ${keys.length} flows`)
