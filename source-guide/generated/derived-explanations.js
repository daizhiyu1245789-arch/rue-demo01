rueSourceGuide.explanations["derived"] = {
  "1": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「new ComputedHandle()」。这是「计算属性与侦听」的第一个源码节点，先从这里建立本主题的入口视角。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/computed.js:19，它对应直线图第 1 / 21 个节点。",
      "它属于「computed：创建、读取与缓存提交」这一段；这一段的目标是把同一类调用集中看完。",
      "这是时序节点，用来标明先后关系；它说明当前代码在整体流程中排在哪个时刻发生。",
      "当前片段先看这一行：constructor(runtime, input) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：调用方读取 computed.value/get() 时，SignalHandle 的 beforeRead 钩子同步进入 ComputedHandle.beforeRead()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "如果没有完整函数展开，说明这个节点本身就是别名、边界或短片段；重点看它和上下节点的连接关系。",
      "执行完本节点后，直线图继续到「computed 注册隐藏 effect」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「computed 注册隐藏 effect」。",
    "watch": "断点停在这里时，重点看 #getter、#setter、node、#effect、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/computed.js:19、下一步是否进入「computed 注册隐藏 effect」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "2": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「computed 注册隐藏 effect」。上一节点是「new ComputedHandle()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/computed.js:25，它对应直线图第 2 / 21 个节点。",
      "它属于「computed：创建、读取与缓存提交」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：this.#effect = runtime.createComputedEffect(node, this.#getter, this);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.#effect = runtime.createComputedEffect",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "如果没有完整函数展开，说明这个节点本身就是别名、边界或短片段；重点看它和上下节点的连接关系。",
      "执行完本节点后，直线图继续到「SignalHandle.get()：先 beforeRead，再读取缓存」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「SignalHandle.get()：先 beforeRead，再读取缓存」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/computed.js:25、下一步是否进入「SignalHandle.get()：先 beforeRead，再读取缓存」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "3": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「SignalHandle.get()：先 beforeRead，再读取缓存」。上一节点是「computed 注册隐藏 effect」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:133，它对应直线图第 3 / 21 个节点。",
      "它属于「computed：创建、读取与缓存提交」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：get() {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：computed 继承信号读取入口；beforeRead 指向 ComputedHandle 的方法。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-84；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「ComputedHandle.beforeRead()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「ComputedHandle.beforeRead()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:133、下一步是否进入「ComputedHandle.beforeRead()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "4": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「ComputedHandle.beforeRead()」。上一节点是「SignalHandle.get()：先 beforeRead，再读取缓存」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/computed.js:67，它对应直线图第 4 / 21 个节点。",
      "它属于「computed：创建、读取与缓存提交」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：beforeRead() {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：beforeRead() → runtime.runEffect(hiddenId) → 检查 computed 的 nodeNeedsUpdate → #runComputed(record) → beginEvaluation() → #runEffectBody(record) 执行 getter → binding.commit(value)。返回 changed 后再由 graph.commitComputed(node, changed) 更新版本。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-89；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runEffect 中 computed 专用分支」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runEffect 中 computed 专用分支」。",
    "watch": "断点停在这里时，重点看 #evaluating、#initialized、#effect.id、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/computed.js:67、下一步是否进入「runEffect 中 computed 专用分支」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "5": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「runEffect 中 computed 专用分支」。上一节点是「ComputedHandle.beforeRead()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:96，它对应直线图第 5 / 21 个节点。",
      "它属于「computed：创建、读取与缓存提交」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：this.#runComputed(record);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.#runComputed(record)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-78；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「getter 返回后 commit，并更新图版本」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「getter 返回后 commit，并更新图版本」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:96、下一步是否进入「getter 返回后 commit，并更新图版本」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "6": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「getter 返回后 commit，并更新图版本」。上一节点是「runEffect 中 computed 专用分支」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:239，它对应直线图第 6 / 21 个节点。",
      "它属于「computed：创建、读取与缓存提交」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：this.graph.commitComputed(record.node, binding.commit(value));。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.graph.commitComputed(record.node, binding.commit(value))",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-90；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「#runComputed(record) → #runEffectBody(record)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「#runComputed(record) → #runEffectBody(record)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:239、下一步是否进入「#runComputed(record) → #runEffectBody(record)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "7": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「#runComputed(record) → #runEffectBody(record)」。上一节点是「getter 返回后 commit，并更新图版本」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:233，它对应直线图第 7 / 21 个节点。",
      "它属于「computed：创建、读取与缓存提交」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：#runComputed(record) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：beginEvaluation 通过后，执行隐藏 effect 的 getter；getter 返回才调用 commit。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-90；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「ComputedHandle.commit()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「ComputedHandle.commit()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:233、下一步是否进入「ComputedHandle.commit()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "8": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「ComputedHandle.commit()」。上一节点是「#runComputed(record) → #runEffectBody(record)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/computed.js:56，它对应直线图第 8 / 21 个节点。",
      "它属于「computed：创建、读取与缓存提交」这一段；这一段的目标是把同一类调用集中看完。",
      "这是另一条执行路径，通常由不同条件、不同入口或不同运行环境触发。",
      "当前片段先看这一行：commit(value) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：ComputedHandle.commit() 只更新缓存并返回 changed。调用它的 #runComputed() 接着执行 graph.commitComputed(node, changed)，控制版本传播。computed 分支到此结束；下一阅读步骤 watch() 是共享这套内核的另一入口。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-91；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「真正提交 graph.valueVersion」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「真正提交 graph.valueVersion」。",
    "watch": "断点停在这里时，重点看 cached value、changed、valueVersion、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/computed.js:56、下一步是否进入「真正提交 graph.valueVersion」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "9": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「真正提交 graph.valueVersion」。上一节点是「ComputedHandle.commit()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js:223，它对应直线图第 9 / 21 个节点。",
      "它属于「computed：创建、读取与缓存提交」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：commitComputed(id, changed) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：commitComputed(id, changed)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-92；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「watch()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「watch()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js:223、下一步是否进入「watch()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "10": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「watch()」。上一节点是「真正提交 graph.valueVersion」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:125，它对应直线图第 10 / 21 个节点。",
      "它属于「watch：另一个公开入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：export function watch(runtime, source, handler, options) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：watch() 规范化单源、多源、deep 和 equals 规则后，直接把统一 getter 与 handler 传给 createWatcher()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-93；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「createWatcher()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「createWatcher()」。",
    "watch": "断点停在这里时，重点看 source、resolvedHandler、shallowArrayEqual、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:125、下一步是否进入「createWatcher()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "11": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「createWatcher()」。上一节点是「watch()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:69，它对应直线图第 11 / 21 个节点。",
      "它属于「watch：另一个公开入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：const createWatcher = (runtime, getter, handler, options, fallbackEquals = Object.is) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：watcher effect 虽以 lazy 创建，但 createWatcher() 会在返回前立即调用 runtime.runEffect(handle.id) 建立初始订阅",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-94；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runtime.runEffect(handle.id)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runtime.runEffect(handle.id)」。",
    "watch": "断点停在这里时，重点看 first、previous、equals、options.immediate、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:69、下一步是否进入「runtime.runEffect(handle.id)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "12": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「runtime.runEffect(handle.id)」。上一节点是「createWatcher()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:95，它对应直线图第 12 / 21 个节点。",
      "它属于「watch：另一个公开入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：runtime.runEffect(handle.id);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：runEffect() 执行的 record.callback 正是 createWatcher 内部的 watcher callback，进入首次值或后续值比较",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-94；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「watcher callback 读取 getter」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「watcher callback 读取 getter」。",
    "watch": "断点停在这里时，重点看 handle.id、first、previous、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:95、下一步是否进入「watcher callback 读取 getter」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "13": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「watcher callback 读取 getter」。上一节点是「runtime.runEffect(handle.id)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:75，它对应直线图第 13 / 21 个节点。",
      "它属于「watch：另一个公开入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：const next = getter();。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：const next = getter()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-95；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「watcher callback()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「watcher callback()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:75、下一步是否进入「watcher callback()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "14": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「watcher callback()」。上一节点是「watcher callback 读取 getter」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:74，它对应直线图第 14 / 21 个节点。",
      "它属于「watch：另一个公开入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：const callback = () => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：满足 immediate 或检测到变化时，watcher callback 不直接裸调业务函数，而是交给 runWatcherHandler()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-95；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「比较变化后执行业务 handler」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「比较变化后执行业务 handler」。",
    "watch": "断点停在这里时，重点看 changed、first、next、previous、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:74、下一步是否进入「比较变化后执行业务 handler」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "15": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「比较变化后执行业务 handler」。上一节点是「watcher callback()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:84，它对应直线图第 15 / 21 个节点。",
      "它属于「watch：另一个公开入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：runtime.runWatcherHandler(handle.id, () => handler(next, previous));。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：runtime.runWatcherHandler(handle.id, () => handler(next, previous))",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-96；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runWatcherHandler()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runWatcherHandler()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:84、下一步是否进入「runWatcherHandler()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "16": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「runWatcherHandler()」。上一节点是「比较变化后执行业务 handler」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:159，它对应直线图第 16 / 21 个节点。",
      "它属于「watch：另一个公开入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：runWatcherHandler(id, callback) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：handler 执行期间若调用 onWatcherCleanup(fn)，运行时利用当前 watcher id 把 fn 登记到同一个 effect record",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-97；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「不收集 handler 依赖，但保存 watcher id」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「不收集 handler 依赖，但保存 watcher id」。",
    "watch": "断点停在这里时，重点看 #watcherHandlerEffectIds、state.currentEffectId、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:159、下一步是否进入「不收集 handler 依赖，但保存 watcher id」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "17": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「不收集 handler 依赖，但保存 watcher id」。上一节点是「runWatcherHandler()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:163，它对应直线图第 17 / 21 个节点。",
      "它属于「watch：另一个公开入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：this.#watcherHandlerEffectIds.push(id);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.#watcherHandlerEffectIds.push(id)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-97；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「onWatcherCleanup()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「onWatcherCleanup()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:163、下一步是否进入「onWatcherCleanup()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "18": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「onWatcherCleanup()」。上一节点是「不收集 handler 依赖，但保存 watcher id」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:144，它对应直线图第 18 / 21 个节点。",
      "它属于「watch：另一个公开入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是另一条执行路径，通常由不同条件、不同入口或不同运行环境触发。",
      "当前片段先看这一行：onWatcherCleanup(cleanup, failSilently = false) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：这是普通 watch 的清理出口；下一步展示同一 watcher 基础设施的另一入口 watchEffect()，不是 cleanup 自动调用它",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-98；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「下轮或销毁时清理」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「下轮或销毁时清理」。",
    "watch": "断点停在这里时，重点看 record.watcher、record.cleanups、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:144、下一步是否进入「下轮或销毁时清理」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "19": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「下轮或销毁时清理」。上一节点是「onWatcherCleanup()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:250，它对应直线图第 19 / 21 个节点。",
      "它属于「watch：另一个公开入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：this.#runCleanups(cleanups);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.#runCleanups(cleanups)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-79；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「watchEffect()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「watchEffect()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:250、下一步是否进入「watchEffect()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "20": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「watchEffect()」。上一节点是「下轮或销毁时清理」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:99，它对应直线图第 20 / 21 个节点。",
      "它属于「watchEffect：自动依赖入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是完成节点，当前阶段收尾并把结果、DOM 状态或生命周期状态交给外层流程。",
      "当前片段先看这一行：export const watchEffect = (runtime, callback, options) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：callback 每次重跑前执行上轮 cleanup，并重新收集实际读取的依赖，computed 与 watch 主题至此闭环",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-99；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「watchEffect 首轮显式 runEffect」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「watchEffect 首轮显式 runEffect」。",
    "watch": "断点停在这里时，重点看 callback、scheduler、handle.dispose()、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:99、下一步是否进入「watchEffect 首轮显式 runEffect」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "21": {
    "context": "这条链专门看 computed/watchEffect/watch 怎样建立派生值、缓存脏标记和副作用重新执行。 当前节点是「watchEffect 首轮显式 runEffect」。上一节点是「watchEffect()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:106，它对应直线图第 21 / 21 个节点。",
      "它属于「watchEffect：自动依赖入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：runtime.runEffect(handle.id);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：runtime.runEffect(handle.id)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-99；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，这个主题的主线结束，控制权回到触发这个主题的外层调用。"
    ],
    "result": "本主题执行链到这里收束；后续只剩调用者拿到结果或等待下一次外部事件触发。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js:106。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  }
};
