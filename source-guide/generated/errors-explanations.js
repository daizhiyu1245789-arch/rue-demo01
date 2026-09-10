rueSourceGuide.explanations["errors"] = {
  "1": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「onErrorCaptured()」。这是「错误处理」的第一个源码节点，先从这里建立本主题的入口视角。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/error-capture.ts:118，它对应直线图第 1 / 15 个节点。",
      "它属于「先注册 owner 错误处理函数」这一段；这一段的目标是把同一类调用集中看完。",
      "这是事件节点，当前流程由 DOM 事件、路由事件或运行时事件触发，而不是同步主线直接调用。",
      "当前片段先看这一行：export const onErrorCaptured = (fn: ErrorCapturedHook) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：onErrorCaptured 先登记 owner handlers。组件渲染异常的常见入口是 instance.js 的 render() catch → errors.capture() → bridge.dispatchErrorCaptured()；显式 runtime.handleError 和 reactive effect 的 #captureError 是另外两类入口，下面分别展示。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-172；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「组件渲染抛错的真正入口」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「组件渲染抛错的真正入口」。",
    "watch": "断点停在这里时，重点看 slot.handler、slot.registered、owners、node_modules/@rue-js/runtime/src/error-capture.ts:118、下一步是否进入「组件渲染抛错的真正入口」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "2": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「组件渲染抛错的真正入口」。上一节点是「onErrorCaptured()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:132，它对应直线图第 2 / 15 个节点。",
      "它属于「先注册 owner 错误处理函数」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：const captured = state?.errors?.capture(error, instance.host, 'component render') === true;。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：const captured = state?.errors?.capture",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-46；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runtime.handleError()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runtime.handleError()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:132、下一步是否进入「runtime.handleError()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "3": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「runtime.handleError()」。上一节点是「组件渲染抛错的真正入口」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/runtime-entry-wrap.js:82，它对应直线图第 3 / 15 个节点。",
      "它属于「入口 A：显式 runtime.handleError」这一段；这一段的目标是把同一类调用集中看完。",
      "这是另一条执行路径，通常由不同条件、不同入口或不同运行环境触发。",
      "当前片段先看这一行：runtime.handleError = (error, instance) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：普通组件错误可直接走边界派发；若异常来自 reactive effect，effect 的 catch 先进入 ReactiveRuntime.#captureError() 并携带 record.owner",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-173；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「ReactiveRuntime.#captureError()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「ReactiveRuntime.#captureError()」。",
    "watch": "断点停在这里时，重点看 error、instance、handlingExplicitError、node_modules/@rue-js/runtime-vapor/dist/runtime-entry-wrap.js:82、下一步是否进入「ReactiveRuntime.#captureError()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "4": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「ReactiveRuntime.#captureError()」。上一节点是「runtime.handleError()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:292，它对应直线图第 4 / 15 个节点。",
      "它属于「入口 B：reactive effect 抛出异常」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：#captureError(record, error) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：#captureError() 调用共享 bridge.dispatchErrorCaptured(error, owner)，把 JS reactive kernel 的错误交回 Rue TypeScript 层",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-174；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「reactive effect 注入的错误处理回调」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「reactive effect 注入的错误处理回调」。",
    "watch": "断点停在这里时，重点看 record.owner、info = reactive effect、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:292、下一步是否进入「reactive effect 注入的错误处理回调」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "5": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「reactive effect 注入的错误处理回调」。上一节点是「ReactiveRuntime.#captureError()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:295，它对应直线图第 5 / 15 个节点。",
      "它属于「入口 B：reactive effect 抛出异常」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return this.state.runWithErrorCaptureEffect(record.id, () => this.#onErrorCaptured?.(error, record.owner, 'reactive effect') === true);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.state.runWithErrorCaptureEffect",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-175；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「bridge.dispatchErrorCaptured()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「bridge.dispatchErrorCaptured()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:295、下一步是否进入「bridge.dispatchErrorCaptured()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "6": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「bridge.dispatchErrorCaptured()」。上一节点是「reactive effect 注入的错误处理回调」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/vapor-bridge.js:207，它对应直线图第 6 / 15 个节点。",
      "它属于「入口 B：reactive effect 抛出异常」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：dispatchErrorCaptured(error, instance, info) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：bridge 解析 owner 后直接调用全局安装的 dispatchErrorCaptured()，开始沿组件 owner 链冒泡",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-176；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「dispatchErrorCaptured()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「dispatchErrorCaptured()」。",
    "watch": "断点停在这里时，重点看 error、instance、info、node_modules/@rue-js/runtime-vapor/dist/vapor-bridge.js:207、下一步是否进入「dispatchErrorCaptured()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "7": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「dispatchErrorCaptured()」。上一节点是「bridge.dispatchErrorCaptured()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/error-capture.ts:169，它对应直线图第 7 / 15 个节点。",
      "它属于「入口 B：reactive effect 抛出异常」这一段；这一段的目标是把同一类调用集中看完。",
      "这是顺序节点，当前代码按源码顺序继续执行，重点看它接在上一句之后改变了什么状态。",
      "当前片段先看这一行：export const dispatchErrorCaptured = (。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：dispatchErrorCaptured() 进入时先 rememberDispatchedError(error)，再遍历 owner/linked owner/parent 并去重 handlers；handler 返回 false 表示消费，派发器返回 true。全局包装函数随后可用 wasErrorCapturedDispatched() 防重复进入。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-177；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「先标记再遍历 owner 链」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「先标记再遍历 owner 链」。",
    "watch": "断点停在这里时，重点看 visitedOwners、invokedHandlers、current、node_modules/@rue-js/runtime/src/error-capture.ts:169、下一步是否进入「先标记再遍历 owner 链」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "8": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「先标记再遍历 owner 链」。上一节点是「dispatchErrorCaptured()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/error-capture.ts:180，它对应直线图第 8 / 15 个节点。",
      "它属于「入口 B：reactive effect 抛出异常」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：rememberDispatchedError(error)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：rememberDispatchedError(error)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-177；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「wasErrorCapturedDispatched()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「wasErrorCapturedDispatched()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/error-capture.ts:180、下一步是否进入「wasErrorCapturedDispatched()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "9": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「wasErrorCapturedDispatched()」。上一节点是「先标记再遍历 owner 链」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/error-capture.ts:114，它对应直线图第 9 / 15 个节点。",
      "它属于「入口 B：reactive effect 抛出异常」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：export const wasErrorCapturedDispatched = (error: unknown) =>。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：这只是去重检查，不负责转发。组件 render 错误未消费时：markPropagating → __rueHandleComponentError 抛出 → wrappedRuntimeEntry catch → dispatchCaughtError。显式 handleError 另走 originalHandleError / notifyGlobal 路径。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-178；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「全局派发函数的去重门」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「全局派发函数的去重门」。",
    "watch": "断点停在这里时，重点看 dispatchedErrors、node_modules/@rue-js/runtime/src/error-capture.ts:114、下一步是否进入「全局派发函数的去重门」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "10": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「全局派发函数的去重门」。上一节点是「wasErrorCapturedDispatched()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/error-capture.ts:226，它对应直线图第 10 / 15 个节点。",
      "它属于「入口 B：reactive effect 抛出异常」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：wasErrorCapturedDispatched(error) ? false : dispatchErrorCaptured(error, instance, info)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：wasErrorCapturedDispatched(error) ? false",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-179；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「组件未消费时标记并交回入口」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「组件未消费时标记并交回入口」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/error-capture.ts:226、下一步是否进入「组件未消费时标记并交回入口」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "11": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「组件未消费时标记并交回入口」。上一节点是「全局派发函数的去重门」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:135，它对应直线图第 11 / 15 个节点。",
      "它属于「入口 B：reactive effect 抛出异常」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：state?.errors?.markPropagating(error);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：state?.errors?.markPropagating(error)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-46；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「createErrorController().notifyGlobal()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「createErrorController().notifyGlobal()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:135、下一步是否进入「createErrorController().notifyGlobal()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "12": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「createErrorController().notifyGlobal()」。上一节点是「组件未消费时标记并交回入口」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/errors.js:27，它对应直线图第 12 / 15 个节点。",
      "它属于「未消费错误的全局通知」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：const notifyGlobal = (error, instance) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：notifyGlobal() 调用底层 handlers，其中 forwardError() 在活动入口内会先保存 pending error；wrappedRuntimeEntry 返回前或 catch 中调用 dispatchCaughtError 再抛出。组件 render 也可直接抛到该入口，跳过 notifyGlobal。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-180；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「notifyGlobal → forwardError，入口内先缓存」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「notifyGlobal → forwardError，入口内先缓存」。",
    "watch": "断点停在这里时，重点看 globalHandlers、lastError、node_modules/@rue-js/runtime-vapor/dist/js-runtime/errors.js:27、下一步是否进入「notifyGlobal → forwardError，入口内先缓存」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "13": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「notifyGlobal → forwardError，入口内先缓存」。上一节点是「createErrorController().notifyGlobal()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/runtime-entry-wrap.js:52，它对应直线图第 13 / 15 个节点。",
      "它属于「未消费错误的全局通知」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：const forwardError = (error, instance) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：const forwardError =",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-181；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「wrappedRuntimeEntry()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「wrappedRuntimeEntry()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/runtime-entry-wrap.js:52、下一步是否进入「wrappedRuntimeEntry()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "14": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「wrappedRuntimeEntry()」。上一节点是「notifyGlobal → forwardError，入口内先缓存」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/runtime-entry-wrap.js:141，它对应直线图第 14 / 15 个节点。",
      "它属于「渲染入口包装器的 catch / finally」这一段；这一段的目标是把同一类调用集中看完。",
      "这是完成节点，当前阶段收尾并把结果、DOM 状态或生命周期状态交给外层流程。",
      "当前片段先看这一行：const wrappedRuntimeEntry = function wrappedRuntimeEntry(...args) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：wrapCreateRue() 安装该包装器。每次入口调用以 Reflect.apply(original, this, args) 执行底层函数；catch 通知 handlers 后重新抛出，finally 递减深度。源码没有“仅 depth=0 才派发”的判断，不能保证所有嵌套入口都只派发一次。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-27；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「入口 catch 通知 handlers 后重新抛出」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「入口 catch 通知 handlers 后重新抛出」。",
    "watch": "断点停在这里时，重点看 __rue_pending_entry_error__、__rue_active_entry_depth__、node_modules/@rue-js/runtime-vapor/dist/runtime-entry-wrap.js:141、下一步是否进入「入口 catch 通知 handlers 后重新抛出」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "15": {
    "context": "这条链专门看错误怎样被捕获、冒泡到组件或全局处理器，并决定吞掉还是继续抛出。 当前节点是「入口 catch 通知 handlers 后重新抛出」。上一节点是「wrappedRuntimeEntry()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/runtime-entry-wrap.js:158，它对应直线图第 15 / 15 个节点。",
      "它属于「渲染入口包装器的 catch / finally」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：if (!rethrowingPendingEntryError && shouldDispatchCaughtError(runtime)) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：if (!rethrowingPendingEntryError",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-27；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，这个主题的主线结束，控制权回到触发这个主题的外层调用。"
    ],
    "result": "本主题执行链到这里收束；后续只剩调用者拿到结果或等待下一次外部事件触发。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/runtime-entry-wrap.js:158。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  }
};
