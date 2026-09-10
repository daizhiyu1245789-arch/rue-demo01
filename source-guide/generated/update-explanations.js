rueSourceGuide.explanations["update"] = {
  "1": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「onClick handler」。这是「响应式更新」的第一个源码节点，先从这里建立本主题的入口视角。",
    "steps": [
      "源码位置是 app/pages/RueSourceDebug.tsx:34，它对应直线图第 1 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是事件节点，当前流程由 DOM 事件、路由事件或运行时事件触发，而不是同步主线直接调用。",
      "当前片段先看这一行：count.value += 1。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：赋值表达式先读取再写回 count.value；写回操作命中 SignalHandle.value setter",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-100；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「SignalHandle.value setter」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「SignalHandle.value setter」。",
    "watch": "断点停在这里时，重点看 count.value 写入前后、app/pages/RueSourceDebug.tsx:34、下一步是否进入「SignalHandle.value setter」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "2": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「SignalHandle.value setter」。上一节点是「onClick handler」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:130，它对应直线图第 2 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：set value(next) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：value setter 调用 set(next)，set 再进入 write(next) 执行真正的 Object.is 比较与版本更新",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-101；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「set 转到 write」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「set 转到 write」。",
    "watch": "断点停在这里时，重点看 next、previous、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:130、下一步是否进入「set 转到 write」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "3": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「set 转到 write」。上一节点是「SignalHandle.value setter」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:143，它对应直线图第 3 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：this.write(next);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.write(next",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-102；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「SignalHandle.set(next) → this.write(next)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「SignalHandle.set(next) → this.write(next)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:143、下一步是否进入「SignalHandle.set(next) → this.write(next)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "4": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「SignalHandle.set(next) → this.write(next)」。上一节点是「set 转到 write」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:142，它对应直线图第 4 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：set(next) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：value setter 转入 set；set 再把 next 传入 write。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-102；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「SignalHandle.write()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「SignalHandle.write()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:142、下一步是否进入「SignalHandle.write()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "5": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「SignalHandle.write()」。上一节点是「SignalHandle.set(next) → this.write(next)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:254，它对应直线图第 5 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：write(next, changedPath) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：write() 比较旧值、收集受影响的 signal/path 节点；不变则返回。变化时调用 runtime.triggerDependencies(affectedNodes, event)，内部逐个 graph.triggerDependency(node) → propagate(node) 得到需要调度的 effect id。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-103；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「write 传入受影响节点集合」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「write 传入受影响节点集合」。",
    "watch": "断点停在这里时，重点看 equal、changedPath、affectedNodes、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:254、下一步是否进入「write 传入受影响节点集合」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "6": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「write 传入受影响节点集合」。上一节点是「SignalHandle.write()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:189，它对应直线图第 6 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：this.runtime.triggerDependencies(this.#affectedNodes(normalized), {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.runtime.triggerDependencies(",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-104；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「triggerDependencies 逐节点调用 graph.triggerDependency」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「triggerDependencies 逐节点调用 graph.triggerDependency」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:189、下一步是否进入「triggerDependencies 逐节点调用 graph.triggerDependency」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "7": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「triggerDependencies 逐节点调用 graph.triggerDependency」。上一节点是「write 传入受影响节点集合」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:196，它对应直线图第 7 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：for (const effectId of this.graph.triggerDependency(node))。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.graph.triggerDependency(node)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-105；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runtime.triggerDependencies(nodes, event)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runtime.triggerDependencies(nodes, event)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:196、下一步是否进入「runtime.triggerDependencies(nodes, event)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "8": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「runtime.triggerDependencies(nodes, event)」。上一节点是「triggerDependencies 逐节点调用 graph.triggerDependency」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:193，它对应直线图第 8 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：triggerDependencies(nodes, event) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：逐个 graph.triggerDependency，合并 effectIds；图传播结束后再 #scheduleEffects。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-105；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「graph.triggerDependency(id) → propagate(id)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「graph.triggerDependency(id) → propagate(id)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:193、下一步是否进入「graph.triggerDependency(id) → propagate(id)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "9": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「graph.triggerDependency(id) → propagate(id)」。上一节点是「runtime.triggerDependencies(nodes, event)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js:197，它对应直线图第 9 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：triggerDependency(id) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：版本更新后传播；不是 SignalHandle.write 直接调用 propagate。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-106；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「ReactiveGraph.propagate()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「ReactiveGraph.propagate()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js:197、下一步是否进入「ReactiveGraph.propagate()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "10": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「ReactiveGraph.propagate()」。上一节点是「graph.triggerDependency(id) → propagate(id)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js:159，它对应直线图第 10 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：propagate(dependency) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：propagate() 把受影响的 effect id 集合返回 triggerDependencies()，由后者合并当前批次",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-107；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「triggerDependency 调用 propagate」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「triggerDependency 调用 propagate」。",
    "watch": "断点停在这里时，重点看 queue、subscriber、effects、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js:159、下一步是否进入「triggerDependency 调用 propagate」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "11": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「triggerDependency 调用 propagate」。上一节点是「ReactiveGraph.propagate()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js:202，它对应直线图第 11 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return this.propagate(id);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.propagate(id)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-106；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「triggerDependencies()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「triggerDependencies()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js:202、下一步是否进入「triggerDependencies()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "12": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「triggerDependencies()」。上一节点是「triggerDependency 调用 propagate」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:193，它对应直线图第 12 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：triggerDependencies(nodes, event) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：#scheduleEffects() 逐个查看 record：自定义调度器先 cancel 默认队列，再调用 record.scheduler(record.runner)；没有自定义调度器才进入 ReactiveScheduler.schedule(id, runner, isActive)。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-105；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「custom scheduler 与默认调度器分流」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「custom scheduler 与默认调度器分流」。",
    "watch": "断点停在这里时，重点看 effectIds、event、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:193、下一步是否进入「custom scheduler 与默认调度器分流」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "13": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「custom scheduler 与默认调度器分流」。上一节点是「triggerDependencies()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:280，它对应直线图第 13 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：if (record.scheduler !== undefined) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：if (record.scheduler !== undefined)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-108；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「#scheduleEffects(effectIds, event)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「#scheduleEffects(effectIds, event)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:280、下一步是否进入「#scheduleEffects(effectIds, event)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "14": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「#scheduleEffects(effectIds, event)」。上一节点是「custom scheduler 与默认调度器分流」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:265，它对应直线图第 14 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：#scheduleEffects(effectIds, event) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：按 record 选择 computed / custom scheduler / 默认 scheduler；自定义 scheduler 获得 record.runner。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-108；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「ReactiveScheduler.schedule()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「ReactiveScheduler.schedule()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:265、下一步是否进入「ReactiveScheduler.schedule()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "15": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「ReactiveScheduler.schedule()」。上一节点是「#scheduleEffects(effectIds, event)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:30，它对应直线图第 15 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调度节点，当前代码会把后续工作放进队列、微任务、effect scheduler 或异步执行器。",
      "当前片段先看这一行：schedule(id, run, isActive = alwaysActive) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：普通 sync 分支直接 #runJob(job)；若当前任务/当前 effect/错误捕获发生重入，则入队到微任务。batch 先入队，离开最外层 batch 才刷新；microtask/frame 路径由 #drain() → #runJob() → state.runScheduledJob() → runner() → runEffect(id)。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-109；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「sync 直接执行 #runJob（重入时例外）」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「sync 直接执行 #runJob（重入时例外）」。",
    "watch": "断点停在这里时，重点看 batchDepth、schedulingMode、pending、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:30、下一步是否进入「sync 直接执行 #runJob（重入时例外）」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "16": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「sync 直接执行 #runJob（重入时例外）」。上一节点是「ReactiveScheduler.schedule()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:43，它对应直线图第 16 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：this.#runJob({ id, isActive, run });。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.#runJob({ id, isActive, run })",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-109；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「异步队列取任务执行」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「异步队列取任务执行」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:43、下一步是否进入「异步队列取任务执行」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "17": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「异步队列取任务执行」。上一节点是「sync 直接执行 #runJob（重入时例外）」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:138，它对应直线图第 17 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：this.#runJob(job);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.#runJob(job)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-110；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runner 实际回调 runEffect(id)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runner 实际回调 runEffect(id)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:138、下一步是否进入「runner 实际回调 runEffect(id)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "18": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「runner 实际回调 runEffect(id)」。上一节点是「异步队列取任务执行」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:212，它对应直线图第 18 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：const runner = () => this.runEffect(id);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：const runner = () => this.runEffect(id)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-111；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「异步分支：#enqueue(job)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「异步分支：#enqueue(job)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:212、下一步是否进入「异步分支：#enqueue(job)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "19": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「异步分支：#enqueue(job)」。上一节点是「runner 实际回调 runEffect(id)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:75，它对应直线图第 19 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：#enqueue(job) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：按 job.id 去重，存入 pending Map。sync 且不重入时跳过入队，直接 #runJob。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-112；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「#scheduleDefaultDrain()：frame / microtask」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「#scheduleDefaultDrain()：frame / microtask」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:75、下一步是否进入「#scheduleDefaultDrain()：frame / microtask」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "20": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「#scheduleDefaultDrain()：frame / microtask」。上一节点是「异步分支：#enqueue(job)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:89，它对应直线图第 20 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：#scheduleDefaultDrain() {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：按 schedulingMode 选择回调登记方式。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-113；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「#scheduleMicrotaskDrain()：登记 Promise.then」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「#scheduleMicrotaskDrain()：登记 Promise.then」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:89、下一步是否进入「#scheduleMicrotaskDrain()：登记 Promise.then」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "21": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「#scheduleMicrotaskDrain()：登记 Promise.then」。上一节点是「#scheduleDefaultDrain()：frame / microtask」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:97，它对应直线图第 21 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是异步登记节点，当前代码会保存 Promise、thenable、监听器或延迟任务，等待未来继续。",
      "当前片段先看这一行：#scheduleMicrotaskDrain() {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：当前同步栈返回后，由微任务队列执行 () => this.#drain()。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-114；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「#scheduleFrameDrain()：登记 drainOnce」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「#scheduleFrameDrain()：登记 drainOnce」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:97、下一步是否进入「#scheduleFrameDrain()：登记 drainOnce」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "22": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「#scheduleFrameDrain()：登记 drainOnce」。上一节点是「#scheduleMicrotaskDrain()：登记 Promise.then」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:103，它对应直线图第 22 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是异步登记节点，当前代码会保存 Promise、thenable、监听器或延迟任务，等待未来继续。",
      "当前片段先看这一行：#scheduleFrameDrain() {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：frame 路径由 requestAnimationFrame 或后备 timer 执行 drainOnce；generation/didDrain 防重复。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-115；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「#drain()：回调触发后逐个取 job」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「#drain()：回调触发后逐个取 job」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:103、下一步是否进入「#drain()：回调触发后逐个取 job」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "23": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「#drain()：回调触发后逐个取 job」。上一节点是「#scheduleFrameDrain()：登记 drainOnce」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:124，它对应直线图第 23 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是异步恢复节点，前面登记的异步任务完成后，控制权从这里继续往下走。",
      "当前片段先看这一行：#drain() {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：只在异步/批处理分支进入；从 pending 取本轮 jobs 并逐个 #runJob。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-110；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「#runJob(job) → state.runScheduledJob(job.id, job.run)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「#runJob(job) → state.runScheduledJob(job.id, job.run)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:124、下一步是否进入「#runJob(job) → state.runScheduledJob(job.id, job.run)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "24": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「#runJob(job) → state.runScheduledJob(job.id, job.run)」。上一节点是「#drain()：回调触发后逐个取 job」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:151，它对应直线图第 24 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：#runJob(job) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：sync 快路径也在这里汇合。job.run = record.runner = () => this.runEffect(id)。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-116；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runner() → this.runEffect(id)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runner() → this.runEffect(id)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js:151、下一步是否进入「runner() → this.runEffect(id)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "25": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「runner() → this.runEffect(id)」。上一节点是「#runJob(job) → state.runScheduledJob(job.id, job.run)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:212，它对应直线图第 25 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这里真正执行前面传入的回调，调用栈会进入业务函数或渲染函数内部。",
      "当前片段先看这一行：const runner = () => this.runEffect(id);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：runner 创建时捕获 id；调度器不会重新查找一个同名业务函数。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-111；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「state.runScheduledJob(jobId, callback)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「state.runScheduledJob(jobId, callback)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:212、下一步是否进入「state.runScheduledJob(jobId, callback)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "26": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「state.runScheduledJob(jobId, callback)」。上一节点是「runner() → this.runEffect(id)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/runtime-state.js:105，它对应直线图第 26 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这里真正执行前面传入的回调，调用栈会进入业务函数或渲染函数内部。",
      "当前片段先看这一行：runScheduledJob(jobId, callback) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：callback = job.run = record.runner；执行 callback() 后进入 runner 内的 this.runEffect(id)。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-117；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runEffect()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runEffect()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/runtime-state.js:105、下一步是否进入「runEffect()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "27": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「runEffect()」。上一节点是「state.runScheduledJob(jobId, callback)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:90，它对应直线图第 27 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：runEffect(id) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：该 effect 的 callback 就是编译器为动态表达式生成的更新闭包，因此 runEffect() 直接执行 compiled DOM effect",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-78；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「执行保存的 effect callback」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「执行保存的 effect callback」。",
    "watch": "断点停在这里时，重点看 record、pendingComputedEffects、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:90、下一步是否进入「执行保存的 effect callback」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "28": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「执行保存的 effect callback」。上一节点是「runEffect()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:257，它对应直线图第 28 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return record.callback();。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：return record.callback()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-81；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「#runEffectBody(record) → record.callback()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「#runEffectBody(record) → record.callback()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:257、下一步是否进入「#runEffectBody(record) → record.callback()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "29": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「#runEffectBody(record) → record.callback()」。上一节点是「执行保存的 effect callback」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:247，它对应直线图第 29 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这里真正执行前面传入的回调，调用栈会进入业务函数或渲染函数内部。",
      "当前片段先看这一行：#runEffectBody(record) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：清理旧资源，建立跟踪上下文，执行最初登记的编译更新闭包；finally 收尾依赖。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-79；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「compiled DOM effect」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「compiled DOM effect」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:247、下一步是否进入「compiled DOM effect」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "30": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「compiled DOM effect」。上一节点是「#runEffectBody(record) → record.callback()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "这是第 30 / 31 个边界节点，用来标出本地源码之外的执行入口或返回点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "这里没有本地逐行源码，页面把它标为边界：浏览器 DevTools > Sources 中的转换模块",
      "节点说明给出的直接线索是：更新闭包重新求值后，把目标 Element 和新字符串传给 settextContent()，不重建整棵组件树",
      "因为这是边界节点，调试时不用继续强行 F11 进入不可见实现；应该先确认传入和返回的数据形状。",
      "如果没有完整函数展开，说明这个节点本身就是别名、边界或短片段；重点看它和上下节点的连接关系。",
      "执行完本节点后，直线图继续到「settextContent()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「settextContent()」。",
    "watch": "断点停在这里时，重点看 effect callback、表达式结果、下一步是否进入「settextContent()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "31": {
    "context": "这条链专门看写入响应式值以后怎样找到受影响 effect、排队、刷新，并重新 patch DOM。 当前节点是「settextContent()」。上一节点是「compiled DOM effect」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/dom.ts:1784，它对应直线图第 31 / 31 个节点。",
      "它属于「事件触发：count.value 写入到 DOM 更新」这一段；这一段的目标是把同一类调用集中看完。",
      "这是完成节点，当前阶段收尾并把结果、DOM 状态或生命周期状态交给外层流程。",
      "当前片段先看这一行：export const settextContent = (el: DomNodeLike, val: any) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：原生 textContent 写入完成，浏览器显示新值，本次响应式局部更新结束",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-118；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，这个主题的主线结束，控制权回到触发这个主题的外层调用。"
    ],
    "result": "本主题执行链到这里收束；后续只剩调用者拿到结果或等待下一次外部事件触发。",
    "watch": "断点停在这里时，重点看 el、val、el.textContent、node_modules/@rue-js/runtime/src/dom.ts:1784。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  }
};
