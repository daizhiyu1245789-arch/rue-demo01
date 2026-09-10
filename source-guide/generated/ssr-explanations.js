rueSourceGuide.explanations["ssr"] = {
  "1": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「createRueIslandDescriptor()」。这是「服务端渲染与水合」的第一个源码节点，先从这里建立本主题的入口视角。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island-protocol.ts:72，它对应直线图第 1 / 24 个节点。",
      "它属于「服务端：descriptor → 字符串」这一段；这一段的目标是把同一类调用集中看完。",
      "这是阶段节点，表示流程进入一个新的执行阶段，后面的节点会围绕这一阶段的状态继续展开。",
      "当前片段先看这一行：export const createRueIslandDescriptor = (。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：服务端 renderer 识别 descriptor 上的协议 marker 后，调用 createServerNodeFromIslandDescriptor() 构造 island 服务端子树",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-239；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「服务端协议归一化时构造 island 节点」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「服务端协议归一化时构造 island 节点」。",
    "watch": "断点停在这里时，重点看 metadata.hydrate、component、props、node_modules/@rue-js/runtime/src/island-protocol.ts:72、下一步是否进入「服务端协议归一化时构造 island 节点」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "2": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「服务端协议归一化时构造 island 节点」。上一节点是「createRueIslandDescriptor()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/server.ts:836，它对应直线图第 2 / 24 个节点。",
      "它属于「服务端：descriptor → 字符串」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return createServerNodeFromIslandDescriptor(value)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：createServerNodeFromIslandDescriptor(value)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-240；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「renderToString()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「renderToString()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/server.ts:836、下一步是否进入「renderToString()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "3": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「renderToString()」。上一节点是「服务端协议归一化时构造 island 节点」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/server.ts:1108，它对应直线图第 3 / 24 个节点。",
      "它属于「服务端：descriptor → 字符串」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：export const renderToString = async (。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：renderToString() 在 ServerDOMAdapter 下生成/归一化输入，循环 render 并等待异步依赖；最后先调用 serializeServerNodeChildren(adapter.root, options)，由它逐节点调用 serializeServerNode()。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-241；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「真正先调用 serializeServerNodeChildren」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「真正先调用 serializeServerNodeChildren」。",
    "watch": "断点停在这里时，重点看 shouldRender、pendingAsyncComponents、node_modules/@rue-js/runtime/src/server.ts:1108、下一步是否进入「真正先调用 serializeServerNodeChildren」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "4": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「真正先调用 serializeServerNodeChildren」。上一节点是「renderToString()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/server.ts:1151，它对应直线图第 4 / 24 个节点。",
      "它属于「服务端：descriptor → 字符串」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return serializeServerNodeChildren(adapter.root, options)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：return serializeServerNodeChildren(adapter.root, options)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-241；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「createServerNodeFromIslandDescriptor()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「createServerNodeFromIslandDescriptor()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/server.ts:1151、下一步是否进入「createServerNodeFromIslandDescriptor()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "5": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「createServerNodeFromIslandDescriptor()」。上一节点是「真正先调用 serializeServerNodeChildren」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/server.ts:707，它对应直线图第 5 / 24 个节点。",
      "它属于「服务端：descriptor → 字符串」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：function createServerNodeFromIslandDescriptor(descriptor: RueIslandDescriptor): unknown {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：该 ServerNode 作为普通服务端树节点返回上层 renderToString()，与页面其他节点一起完成异步渲染轮次",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-242；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「renderToString 中调用协议归一化」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「renderToString 中调用协议归一化」。",
    "watch": "断点停在这里时，重点看 hydrate、content、data-rue-*、node_modules/@rue-js/runtime/src/server.ts:707、下一步是否进入「renderToString 中调用协议归一化」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "6": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「renderToString 中调用协议归一化」。上一节点是「createServerNodeFromIslandDescriptor()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/server.ts:710，它对应直线图第 6 / 24 个节点。",
      "它属于「服务端：descriptor → 字符串」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return normalizeServerProtocolRenderable(createElement(descriptor.component, descriptor.props))。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：return normalizeServerProtocolRenderable(",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-242；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「serializeServerNode()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「serializeServerNode()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/server.ts:710、下一步是否进入「serializeServerNode()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "7": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「serializeServerNode()」。上一节点是「renderToString 中调用协议归一化」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/server.ts:1068，它对应直线图第 7 / 24 个节点。",
      "它属于「服务端：descriptor → 字符串」这一段；这一段的目标是把同一类调用集中看完。",
      "这是阶段节点，表示流程进入一个新的执行阶段，后面的节点会围绕这一阶段的状态继续展开。",
      "当前片段先看这一行：const serializeServerNode = (node: ServerNode, options: RenderToStringOptions = {}): string => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：HTML 被发送并解析到浏览器后，客户端 startRueIslandLoader() 扫描其中的 rue-island 元素；这是跨网络/页面加载的阶段切换",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-243；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「startRueIslandLoader()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「startRueIslandLoader()」。",
    "watch": "断点停在这里时，重点看 transparent、rawInnerHTML、includeComments、node_modules/@rue-js/runtime/src/server.ts:1068、下一步是否进入「startRueIslandLoader()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "8": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「startRueIslandLoader()」。上一节点是「serializeServerNode()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:1254，它对应直线图第 8 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：export const startRueIslandLoader = (options: RueIslandLoaderOptions = {}) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：初始扫描和 observer 回调都对每个未处理元素调用 registerRueIsland()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-244；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「canRegister 阻止尚未就绪父 island 下的子项」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「canRegister 阻止尚未就绪父 island 下的子项」。",
    "watch": "断点停在这里时，重点看 registered、terminalStatuses、canRegister、node_modules/@rue-js/runtime/src/island.ts:1254、下一步是否进入「canRegister 阻止尚未就绪父 island 下的子项」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "9": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「canRegister 阻止尚未就绪父 island 下的子项」。上一节点是「startRueIslandLoader()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:1279，它对应直线图第 9 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：const canRegister = (island: Element) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：const canRegister =",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-245；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「registerCandidate → registerRueIsland」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「registerCandidate → registerRueIsland」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/island.ts:1279、下一步是否进入「registerCandidate → registerRueIsland」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "10": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「registerCandidate → registerRueIsland」。上一节点是「canRegister 阻止尚未就绪父 island 下的子项」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:1299，它对应直线图第 10 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：const cleanup = registerRueIsland(island, { ...options, root })。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：const cleanup = registerRueIsland(",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-246；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「registerRueIsland()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「registerRueIsland()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/island.ts:1299、下一步是否进入「registerRueIsland()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "11": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「registerRueIsland()」。上一节点是「registerCandidate → registerRueIsland」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:1169，它对应直线图第 11 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：export const registerRueIsland = (。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：注册信息有效后直接传给 scheduleIslandHydration()，由 strategy 决定立即、空闲、可见或交互触发",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-247；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「把 runHydration 回调交给策略调度器」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「把 runHydration 回调交给策略调度器」。",
    "watch": "断点停在这里时，重点看 active、hydrated、strategy、scheduleCleanup、node_modules/@rue-js/runtime/src/island.ts:1169、下一步是否进入「把 runHydration 回调交给策略调度器」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "12": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「把 runHydration 回调交给策略调度器」。上一节点是「registerRueIsland()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:1236，它对应直线图第 12 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：scheduleCleanup = scheduleIslandHydration(island, strategy, manifest, runHydration)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：scheduleCleanup = scheduleIslandHydration(",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-247；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「scheduleIslandHydration()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「scheduleIslandHydration()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/island.ts:1236、下一步是否进入「scheduleIslandHydration()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "13": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「scheduleIslandHydration()」。上一节点是「把 runHydration 回调交给策略调度器」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:1113，它对应直线图第 13 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调度节点，当前代码会把后续工作放进队列、微任务、effect scheduler 或异步执行器。",
      "当前片段先看这一行：const scheduleIslandHydration = (。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：策略条件满足时统一调用 runHydration()；它动态 import 模块、读取 props script 并构造 mount context",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-248；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runHydration(): load module/props」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runHydration(): load module/props」。",
    "watch": "断点停在这里时，重点看 timeout、rootMargin、interaction events、node_modules/@rue-js/runtime/src/island.ts:1113、下一步是否进入「runHydration(): load module/props」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "14": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「runHydration(): load module/props」。上一节点是「scheduleIslandHydration()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:1189，它对应直线图第 14 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是异步边界，当前调用会先返回 Promise、任务或回调，真正后续执行发生在另一个时机。",
      "当前片段先看这一行：const runHydration = (replayEvent?: Event) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：模块与 props 同时就绪后，runHydration() 调用 mountRueIsland(module, context) 选择具体客户端入口",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-249；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「load().then → mountRueIsland」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「load().then → mountRueIsland」。",
    "watch": "断点停在这里时，重点看 resolveModule、props、replayEvent、node_modules/@rue-js/runtime/src/island.ts:1189、下一步是否进入「load().then → mountRueIsland」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "15": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「load().then → mountRueIsland」。上一节点是「runHydration(): load module/props」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:1203，它对应直线图第 15 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return mountRueIsland(。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：return mountRueIsland(",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-250；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「mountRueIsland()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「mountRueIsland()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/island.ts:1203、下一步是否进入「mountRueIsland()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "16": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「mountRueIsland()」。上一节点是「load().then → mountRueIsland」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:948，它对应直线图第 16 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：export const mountRueIsland = async (。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：先检查 module.mount，再检查非 only 的 module.hydrate；命中就直接调用模块自定义函数并 return。只有 component export 兜底且非 only 才调用 hydrateRootImpl(island, vnode, {adoptComponents: module.adopt===true, replace:false})；only 用普通 render。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-251；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「仅组件 export 的非 only 分支进入 hydrateRootImpl」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「仅组件 export 的非 only 分支进入 hydrateRootImpl」。",
    "watch": "断点停在这里时，重点看 module.mount、module.adopt、strategy、node_modules/@rue-js/runtime/src/island.ts:948、下一步是否进入「仅组件 export 的非 only 分支进入 hydrateRootImpl」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "17": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「仅组件 export 的非 only 分支进入 hydrateRootImpl」。上一节点是「mountRueIsland()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:976，它对应直线图第 17 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return hydrateRootImpl(island, vnode as RenderableInput, {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：return hydrateRootImpl(",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-251；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「hydrateRoot()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「hydrateRoot()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/island.ts:976、下一步是否进入「hydrateRoot()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "18": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「hydrateRoot()」。上一节点是「仅组件 export 的非 only 分支进入 hydrateRootImpl」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:822，它对应直线图第 18 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：export const hydrateRoot = (。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：replace=false 且有 SSR 子节点时：adoptComponents=true 或 element-head 输入走 tryAdoptHydrationRootWithRenderer；否则走 tryAdoptHydrationRoot。adoption 返回 null 才落回 render；renderer 路径抛异常则继续向上抛，不是所有失败都自动重渲染。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-252；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「renderer adoption / 普通 adoption 分流」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「renderer adoption / 普通 adoption 分流」。",
    "watch": "断点停在这里时，重点看 adoptComponents、onMismatch、replace、node_modules/@rue-js/runtime/src/island.ts:822、下一步是否进入「renderer adoption / 普通 adoption 分流」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "19": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「renderer adoption / 普通 adoption 分流」。上一节点是「hydrateRoot()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:828，它对应直线图第 19 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：if (options.adoptComponents === true || getElementHeadRecord(value)) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：if (options.adoptComponents === true",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-252；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「另一条普通 adoption 路径」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「另一条普通 adoption 路径」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/island.ts:828、下一步是否进入「另一条普通 adoption 路径」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "20": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「另一条普通 adoption 路径」。上一节点是「renderer adoption / 普通 adoption 分流」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:834，它对应直线图第 20 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：const adopted = tryAdoptHydrationRoot(container, value, options)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：const adopted = tryAdoptHydrationRoot(container",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-252；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「tryAdoptHydrationRootWithRenderer()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「tryAdoptHydrationRootWithRenderer()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/island.ts:834、下一步是否进入「tryAdoptHydrationRootWithRenderer()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "21": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「tryAdoptHydrationRootWithRenderer()」。上一节点是「另一条普通 adoption 路径」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:788，它对应直线图第 21 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：const tryAdoptHydrationRootWithRenderer = (。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：renderer adoption 临时换 adapter → renderAnchor → commitStatus。成功返回 RueRootHandle；不匹配则 cleanup + onMismatch 并返回 null，hydrateRoot 随后 render。若渲染抛错，cleanup 后重抛，由外层 hydration Promise 的 catch 写 error 状态。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-253；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「adoption 未命中后回到普通 render」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「adoption 未命中后回到普通 render」。",
    "watch": "断点停在这里时，重点看 adoptedRoot、adoptedNodes、failureMessage、node_modules/@rue-js/runtime/src/island.ts:788、下一步是否进入「adoption 未命中后回到普通 render」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "22": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「adoption 未命中后回到普通 render」。上一节点是「tryAdoptHydrationRootWithRenderer()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:841，它对应直线图第 22 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：render(value, container as unknown as DomElementLike)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：render(value, container as unknown as DomElementLike)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-252；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「hydration completion」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「hydration completion」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/island.ts:841、下一步是否进入「hydration completion」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "23": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「hydration completion」。上一节点是「adoption 未命中后回到普通 render」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:1216，它对应直线图第 23 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是完成节点，当前阶段收尾并把结果、DOM 状态或生命周期状态交给外层流程。",
      "当前片段先看这一行：.then(() => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：元素状态和事件重放完成，observer/策略资源按需释放，服务端 HTML 到客户端可交互 island 的链路结束",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-254；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「完成 / 异常 Promise 分支」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「完成 / 异常 Promise 分支」。",
    "watch": "断点停在这里时，重点看 data-rue-status、rue:hydrate、replayEvent.target、node_modules/@rue-js/runtime/src/island.ts:1216、下一步是否进入「完成 / 异常 Promise 分支」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "24": {
    "context": "这条链专门看服务端字符串输出和浏览器水合怎样共用组件结果，并在 DOM 上恢复运行时关系。 当前节点是「完成 / 异常 Promise 分支」。上一节点是「hydration completion」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/island.ts:1218，它对应直线图第 24 / 24 个节点。",
      "它属于「浏览器：收到 HTML 后启动 Island loader」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：island.setAttribute('data-rue-status', 'hydrated')。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：island.setAttribute('data-rue-status', 'hydrated')",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-254；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，这个主题的主线结束，控制权回到触发这个主题的外层调用。"
    ],
    "result": "本主题执行链到这里收束；后续只剩调用者拿到结果或等待下一次外部事件触发。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/island.ts:1218。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  }
};
