rueSourceGuide.compileExplanations = {
  "1": {
    "context": "Vite 在 Node.js 开发服务器中读取一个 TSX/JSX 模块后，调用 Rue 插件的 transform hook。",
    "steps": [
      "先排除 RSC 图、非 TSX/JSX 文件、exclude 路径和已经带转换头的代码。",
      "requireFromHere.resolve(\"@rue-js/swc-plugin-rue\") 解析到包导出的 swc-plugin-rue.wasm 绝对路径。",
      "base 保存原始模块文本；serverGraph 决定这次是否保留服务端组件边界。"
    ],
    "result": "得到本次编译的 JavaScript 输入、模块路径和 Wasm 插件路径；此时尚未创建 Worker，也尚未执行 WebAssembly。",
    "watch": "看 code、id、process.env.RUE_SWC_PLUGIN 与 serverGraph。确认这一段运行在 Vite 的 Node.js 进程，而不是浏览器。"
  },
  "2": {
    "context": "入口检查通过后，transform 把源码与 Wasm 路径交给内部转换函数并等待结果。",
    "steps": [
      "调用参数按从左到右顺序求值。",
      "await 会暂停当前 transform；Vite 可以继续处理其他任务。",
      "返回后若代码没有变化就返回 null，否则更新 island 清单。"
    ],
    "result": "控制权进入 transformWithSwcPlugin；最终生成的代码仍会沿这个 await 返回。",
    "watch": "在调用处比较 base 与 out.code，并确认 pluginPath 的末尾是 swc-plugin-rue.wasm。"
  },
  "3": {
    "context": "进入 Rue 编译管线的 JavaScript 预处理阶段。",
    "steps": [
      "先改写 server/client 指令属性，收集 island 元数据。",
      "再处理 client 指令与 v-model 等 SWC parser 前置语法。",
      "preprocessRueSource 的结果保存到 loweredModel。"
    ],
    "result": "loweredModel 成为送进 SWC/Wasm 的源码；这几步仍完全在 JavaScript 中执行。",
    "watch": "观察每个中间 code 字符串，区分“JS 预处理改变”和“Wasm AST 改变”。"
  },
  "4": {
    "context": "Rue 把真正的 SWC 转换包进并发限制器和超时保护。",
    "steps": [
      "scheduleTransform 接收一个尚未执行的箭头函数。",
      "轮到该任务时，箭头函数调用 activeTransformExecutor。",
      "withTransformTimeout 负责让长时间没有返回的任务失败。"
    ],
    "result": "任务进入执行队列，当前函数等待执行器返回代码。",
    "watch": "看任务何时从排队变为执行，以及 timeoutMs 是否为 5000。"
  },
  "5": {
    "context": "插件初始化时把默认 transformExecutor 保存为 activeTransformExecutor。",
    "steps": [
      "默认参数是 runSwcTransformInWorker。",
      "用户显式传入 transformExecutor 时才会替换它。",
      "这里只保存函数引用，真正调用发生在调度回调中。"
    ],
    "result": "后续 payload 默认交给 Worker 版本执行。",
    "watch": "比较 activeTransformExecutor === runSwcTransformInWorker；不要把函数绑定误当成 Wasm 已执行。"
  },
  "6": {
    "context": "主线程开始建立一次可等待、可超时的 Worker 转换事务。",
    "steps": [
      "new Promise 的执行器立即运行，初始化 settled 和 timer。",
      "settle 保证 message、error、exit、timeout 只有一个能结束 Promise。",
      "随后创建 Worker 并注册事件监听。"
    ],
    "result": "返回一个尚未完成的 Promise，transformWithSwcPlugin 继续等待。",
    "watch": "看 settled、timer 和 Promise 状态；此时结果 code 还不存在。"
  },
  "7": {
    "context": "Vite 主线程启动 transform-worker.mjs，并把转换参数复制到 Worker。",
    "steps": [
      "TRANSFORM_WORKER_PATH 指向 vite-plugin-rue/transform-worker.mjs。",
      "workerData 包含源码字符串、Wasm 绝对路径、生产模式和 staticTemplates。",
      "传递的是结构化克隆数据，并没有把 Wasm 字节直接放进 workerData。"
    ],
    "result": "新的 Node Worker 线程开始从入口模块执行。",
    "watch": "看 Worker 的 threadId 和 workerData.pluginPath，确认 Wasm 文件由 Worker 内的 SWC 加载。"
  },
  "8": {
    "context": "Worker 线程第一次直接调用 @swc/core 的 JavaScript API。",
    "steps": [
      "从 workerData 解构四个参数。",
      "createSwcTransformOptions 先生成完整 SWC 配置。",
      "swc.transformSync(code, options) 是同步调用，Worker 会在这里等待原生 SWC 和 Wasm 完成。"
    ],
    "result": "控制权从 Rue 的 Worker JavaScript 进入 @swc/core 包装层。",
    "watch": "在第 32 行步入调用，调用栈下一层应是 @swc/core 的 transformSync。"
  },
  "9": {
    "context": "这一函数描述 SWC 应该怎样解析 TSX，以及应该加载哪个插件。",
    "steps": [
      "parser 选择 TypeScript + TSX，target 为 es2020。",
      "automatic runtime 的 importSource 指向 @rue-js。",
      "jsc.experimental.plugins 放入 [pluginPath, { staticTemplates }]。"
    ],
    "result": "配置对象返回给 swc.transformSync；配置出现插件路径并不代表 Wasm 已经执行。",
    "watch": "展开 options.jsc.experimental.plugins，确认第一个元素是 .wasm 路径、第二个元素是传给插件的配置。"
  },
  "10": {
    "context": "@swc/core 的 JavaScript 包装层规范化参数，然后调用平台原生绑定。",
    "steps": [
      "src 是字符串，所以 isModule 为 false。",
      "newOptions 保留 jsc.experimental.plugins。",
      "toBuffer(newOptions) 把配置编码成原生绑定需要的字节。",
      "bindings.transformSync 跨过 Node N-API 边界。"
    ],
    "result": "JavaScript 调用栈停在同步原生调用上；SWC 原生层开始解析源码并处理插件。",
    "watch": "看 bindings 是否存在以及传入的 src、isModule、newOptions；下一层无法再用普通 JS 单步。"
  },
  "11": {
    "context": "SWC 原生插件宿主根据 pluginPath 打开 Rue 的 WebAssembly 二进制。",
    "steps": [
      "文件来自 @rue-js/swc-plugin-rue 0.8.21，大小为 6,529,262 字节。",
      "宿主编译/实例化模块并提供 env 与 WASI 导入。",
      "模块导出的 memory、__alloc 和 __free 用于 ABI 内存交换。"
    ],
    "result": "Rue Wasm 实例准备好，SWC 可以把解析后的 AST 交给插件入口。",
    "watch": "在文件系统确认 pluginPath；用 WebAssembly.Module.exports 可看到五个真实导出。"
  },
  "12": {
    "context": "SWC 宿主调用 Rue 插件的核心 Wasm 导出函数。",
    "steps": [
      "SWC 已把 TSX 源码解析成 AST。",
      "AST 与插件元数据按 SWC 插件 ABI 序列化并写入 Wasm 内存。",
      "__transform_plugin_process_impl 在 Wasm 中运行 Rust 编译后的转换逻辑。",
      "插件把 JSX 结构改写成 Vapor setup 和 helper 调用所需的 AST。"
    ],
    "result": "Wasm 产生改写后的 AST 表示；它不会操作 #app，也不会在浏览器中创建 DOM。",
    "watch": "普通 JS 调试器只能看到进入/返回边界；需要 Wasm 调试信息或 Rust 源码才能逐行看内部算法。"
  },
  "13": {
    "context": "Rue Wasm 通过宿主导入函数与 SWC 原生宿主交换配置、结果和诊断。",
    "steps": [
      "__get_transform_plugin_config 让插件取得 staticTemplates 配置。",
      "__set_transform_result 把改写结果登记回宿主。",
      "__emit_diagnostics 用于报告编译诊断。",
      "WASI 导入提供时钟、环境和文件描述符等基础能力。"
    ],
    "result": "转换后的 AST 回到 SWC 宿主，WebAssembly 这一段执行结束。",
    "watch": "检查 WebAssembly.Module.imports 的 env 项；返回通道是宿主函数，不是 window.postMessage。"
  },
  "14": {
    "context": "SWC 原生层接回插件 AST 后继续完成代码生成，并把结果返回 JavaScript。",
    "steps": [
      "SWC 打印转换后的 AST，得到 JavaScript code。",
      "原生 TransformOutput 穿过 N-API 返回 @swc/core。",
      "@swc/core 再把对象返回 transform-worker.mjs。"
    ],
    "result": "Worker 中的 out 现在包含 out.code；JS → 原生 → Wasm → 原生 → JS 已闭环。",
    "watch": "在 bindings.transformSync 返回前后观察调用耗时和 out.code 的出现。"
  },
  "15": {
    "context": "Worker 已取得转换后的 JavaScript 字符串，准备交还 Vite 主线程。",
    "steps": [
      "成功路径读取 out.code。",
      "parentPort.postMessage 对消息做结构化克隆。",
      "异常路径则序列化 name、message、stack。"
    ],
    "result": "主线程的 message 监听器随后被触发。",
    "watch": "确认消息只有 code 或 error 之一；这里传回的是字符串，不是 AST 或 Wasm 内存。"
  },
  "16": {
    "context": "Vite 主线程收到 Worker 的一次性结果消息。",
    "steps": [
      "settle 先阻止重复完成并清理超时 timer。",
      "message.error 存在时反序列化并 reject。",
      "成功时 resolve(String(message.code))。"
    ],
    "result": "runSwcTransformInWorker 的 Promise 完成，先前暂停的 await 可以继续。",
    "watch": "看 settled 从 false 变 true，以及 resolve 的字符串是否带 Rue 生成 helper。"
  },
  "17": {
    "context": "控制权回到等待转换结果的 Rue 编译函数。",
    "steps": [
      "out 已是 Worker 返回的 JavaScript。",
      "preserveRscDirectivePrologue 恢复需要保留的指令序言。",
      "随后添加 Rue 转换头，用于避免二次转换。"
    ],
    "result": "得到可返回给 Vite 的最终代码及 island 元数据。",
    "watch": "比较 loweredModel、out、normalizedOut，能清楚看到每一阶段分别改了什么。"
  },
  "18": {
    "context": "最外层 Vite hook 接回转换结果。",
    "steps": [
      "没有变化时返回 null。",
      "有变化时更新 client/server island 清单。",
      "最后返回 { code: out.code, map: null }。"
    ],
    "result": "Vite 把这段生成后的 JavaScript 纳入模块图，并在浏览器请求时提供。",
    "watch": "看 transform 返回值；到此 Node/Worker/SWC/Wasm 编译链全部结束。"
  },
  "19": {
    "context": "页面开始运行时，浏览器加载的是 Wasm 已经转换好的 JavaScript。",
    "steps": [
      "package.json 明确标注 JavaScript runtime。",
      "响应式图内核为 strict TypeScript reactive graph kernel。",
      "runtime-vapor 发布目录里没有运行时 .wasm。"
    ],
    "result": "因此首次挂载流程不会再次进入 swc-plugin-rue.wasm。",
    "watch": "在浏览器 Network 面板中可验证：开发时编译由服务器完成，页面不会请求 swc-plugin-rue.wasm。"
  },
  "20": {
    "context": "浏览器模块初始化时创建一份共享的 TypeScript 响应式内核。",
    "steps": [
      "createReactiveKernel 建立 effect、signal、scope 和 scheduler 的状态。",
      "installSharedBridge 把内核接到稳定的全局桥。",
      "createReactiveFacade 在同一内核上提供 API 与 hooks。"
    ],
    "result": "后续 runtime.mount 中的 kernel.createEffectScope 等操作会落到这份 JavaScript 对象。",
    "watch": "观察 reactiveKernel 的方法实现；它们来自 dist/reactive-kernel/*.js，而不是 WebAssembly exports。"
  },
  "21": {
    "context": "组件真正挂载时，Rue 执行编译产物里的 setup 函数。",
    "steps": [
      "wrappedSetup 建立 DOM host 上下文。",
      "setup(parentContext) 执行 Wasm 在编译期生成的 JavaScript。",
      "helper 调用通过 DOM adapter 创建或更新真实节点。"
    ],
    "result": "生成的 DOM 提交到 #app；这是编译结果的运行，不是 WebAssembly 再运行。",
    "watch": "断点放在 setup 和 DOM helper 上；调用栈应全部是浏览器 JavaScript。"
  }
};
