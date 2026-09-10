rueSourceGuide.explanations["tracking"] = {
  "1": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「ReactiveRuntime.createEffect()」。这是「依赖追踪」的第一个源码节点，先从这里建立本主题的入口视角。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:72，它对应直线图第 1 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：createEffect(callback, options = {}) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：createEffect() → #insertEffect() 保存 record / runner / scope。lazy=true 只登记；非 lazy 且有 custom scheduler 时调用 scheduler(record.runner)，由它决定何时运行；否则立即 runEffect(id)。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-76；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「首次运行：custom scheduler 或 runEffect」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「首次运行：custom scheduler 或 runEffect」。",
    "watch": "断点停在这里时，重点看 id、node、scopeId、options.lazy、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:72、下一步是否进入「首次运行：custom scheduler 或 runEffect」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "2": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「首次运行：custom scheduler 或 runEffect」。上一节点是「ReactiveRuntime.createEffect()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:76，它对应直线图第 2 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：if (!options.lazy) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：if (!options.lazy)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-76；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「#insertEffect()：保存 callback，创建 runner」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「#insertEffect()：保存 callback，创建 runner」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:76、下一步是否进入「#insertEffect()：保存 callback，创建 runner」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "3": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「#insertEffect()：保存 callback，创建 runner」。上一节点是「首次运行：custom scheduler 或 runEffect」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:210，它对应直线图第 3 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：#insertEffect(id, node, callback, options, computed) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：runner = () => this.runEffect(id)；record.callback 保存传入业务函数。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-77；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「ReactiveRuntime.runEffect()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「ReactiveRuntime.runEffect()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:210、下一步是否进入「ReactiveRuntime.runEffect()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "4": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「ReactiveRuntime.runEffect()」。上一节点是「#insertEffect()：保存 callback，创建 runner」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:90，它对应直线图第 4 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：runEffect(id) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：依赖版本检查确认需要执行后，runEffect() 直接把 effect record 交给私有 #runEffectBody()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-78；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「进入 effect body」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「进入 effect body」。",
    "watch": "断点停在这里时，重点看 record、pendingComputedEffects、subscriberNeedsRun、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:90、下一步是否进入「进入 effect body」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "5": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「进入 effect body」。上一节点是「ReactiveRuntime.runEffect()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:111，它对应直线图第 5 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：this.#runEffectBody(record);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.#runEffectBody(record)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-78；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「#runEffectBody()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「#runEffectBody()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:111、下一步是否进入「#runEffectBody()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "6": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「#runEffectBody()」。上一节点是「进入 effect body」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:247，它对应直线图第 6 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：#runEffectBody(record) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：清理完成后，#runEffectBody() 以当前 effect 图节点调用 graph.beginTracking()，把它设为本轮 subscriber",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-79；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「开始依赖收集」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「开始依赖收集」。",
    "watch": "断点停在这里时，重点看 record.cleanups、record.node、record.scopeId、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:247、下一步是否进入「开始依赖收集」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "7": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「开始依赖收集」。上一节点是「#runEffectBody()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:251，它对应直线图第 7 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：const tracking = this.graph.beginTracking(record.node);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：const tracking = this.graph.beginTracking",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-79；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「ReactiveGraph.beginTracking()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「ReactiveGraph.beginTracking()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:251、下一步是否进入「ReactiveGraph.beginTracking()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "8": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「ReactiveGraph.beginTracking()」。上一节点是「开始依赖收集」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js:108，它对应直线图第 8 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：beginTracking(subscriber) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：beginTracking() 返回旧 subscriber 状态后，#runEffectBody() 调 state.runWithEffect(record.id, runner) 设置 currentEffectId；无 scope 直接 record.callback()，有 scope 则 scopes.run(scopeId, record.callback)。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-80；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「跟踪窗口内设置 currentEffectId」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「跟踪窗口内设置 currentEffectId」。",
    "watch": "断点停在这里时，重点看 currentSubscriber、dependenciesTail、trackingCycle、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js:108、下一步是否进入「跟踪窗口内设置 currentEffectId」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "9": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「跟踪窗口内设置 currentEffectId」。上一节点是「ReactiveGraph.beginTracking()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:255，它对应直线图第 9 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return this.state.runWithEffect(record.id, () => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：return this.state.runWithEffect",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-81；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runWithEffect(effectId, callback)：真正调用 callback()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runWithEffect(effectId, callback)：真正调用 callback()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:255、下一步是否进入「runWithEffect(effectId, callback)：真正调用 callback()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "10": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「runWithEffect(effectId, callback)：真正调用 callback()」。上一节点是「跟踪窗口内设置 currentEffectId」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/runtime-state.js:72，它对应直线图第 10 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这里真正执行前面传入的回调，调用栈会进入业务函数或渲染函数内部。",
      "当前片段先看这一行：runWithEffect(effectId, callback) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：保存旧 currentEffectId → 当前 id 入栈 → callback() → finally 恢复。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-82；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「state.runWithEffect()：执行 effect 内层回调」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「state.runWithEffect()：执行 effect 内层回调」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/runtime-state.js:72、下一步是否进入「state.runWithEffect()：执行 effect 内层回调」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "11": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「state.runWithEffect()：执行 effect 内层回调」。上一节点是「runWithEffect(effectId, callback)：真正调用 callback()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:255，它对应直线图第 11 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：return this.state.runWithEffect(record.id, () => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：先设置 effect id；无 scope 调 record.callback，有 scope 进入 scopes.run。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-81；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「scopes.run(scopeId, record.callback)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「scopes.run(scopeId, record.callback)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:255、下一步是否进入「scopes.run(scopeId, record.callback)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "12": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「scopes.run(scopeId, record.callback)」。上一节点是「state.runWithEffect()：执行 effect 内层回调」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scope.js:47，它对应直线图第 12 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：run(scopeId, callback) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：带 scope 分支通过 withScope(scopeId, callback) 执行同一个 callback；结束后恢复 scope。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-83；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「record.callback()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「record.callback()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scope.js:47、下一步是否进入「record.callback()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "13": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「record.callback()」。上一节点是「scopes.run(scopeId, record.callback)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:257，它对应直线图第 13 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：return record.callback();。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：callback 求值表达式时读取 ref/computed，属性读取最终进入对应 SignalHandle.get()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-81；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「有 scope 时由 scopes.run 执行 callback」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「有 scope 时由 scopes.run 执行 callback」。",
    "watch": "断点停在这里时，重点看 state.currentEffectId、callback 内条件分支、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:257、下一步是否进入「有 scope 时由 scopes.run 执行 callback」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "14": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「有 scope 时由 scopes.run 执行 callback」。上一节点是「record.callback()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:258，它对应直线图第 14 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return this.scopes.run(record.scopeId, record.callback);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：return this.scopes.run(record.scopeId, record.callback)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-81；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「SignalHandle.get()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「SignalHandle.get()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:258、下一步是否进入「SignalHandle.get()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "15": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「SignalHandle.get()」。上一节点是「有 scope 时由 scopes.run 执行 callback」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:133，它对应直线图第 15 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：get() {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：get() 返回值之前同步调用 runtime.trackDependency(this.node)，把这次读取报告给当前 effect",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-84；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「get() 上报当前 dependency」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「get() 上报当前 dependency」。",
    "watch": "断点停在这里时，重点看 this.node、this.readCachedValue()、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:133、下一步是否进入「get() 上报当前 dependency」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "16": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「get() 上报当前 dependency」。上一节点是「SignalHandle.get()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:127，它对应直线图第 16 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：this.runtime.trackDependency(this.node);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.runtime.trackDependency(this.node)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-85；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「ReactiveRuntime.trackDependency()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「ReactiveRuntime.trackDependency()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js:127、下一步是否进入「ReactiveRuntime.trackDependency()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "17": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「ReactiveRuntime.trackDependency()」。上一节点是「get() 上报当前 dependency」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:180，它对应直线图第 17 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：trackDependency(node) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：runtime 确认存在 active effect 后，将 dependency node 原样传给 graph.trackDependency() 建边",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-86；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runtime 转交 graph」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runtime 转交 graph」。",
    "watch": "断点停在这里时，重点看 currentEffectId、record.owner、currentRenderDebugOwner、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:180、下一步是否进入「runtime 转交 graph」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "18": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「runtime 转交 graph」。上一节点是「ReactiveRuntime.trackDependency()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:188，它对应直线图第 18 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return this.graph.trackDependency(node);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：return this.graph.trackDependency(node)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-86；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「ReactiveGraph.trackDependency()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「ReactiveGraph.trackDependency()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:188、下一步是否进入「ReactiveGraph.trackDependency()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "19": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「ReactiveGraph.trackDependency()」。上一节点是「runtime 转交 graph」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js:132，它对应直线图第 19 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：trackDependency(dependency) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：callback 的所有读取结束并返回后，#runEffectBody() 的 finally 调用 graph.endTracking() 收尾本轮依赖集合",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-87；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「返回 effect 的 finally 清理过期依赖」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「返回 effect 的 finally 清理过期依赖」。",
    "watch": "断点停在这里时，重点看 dependency、subscriber、observedVersion、linkCount、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js:132、下一步是否进入「返回 effect 的 finally 清理过期依赖」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "20": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「返回 effect 的 finally 清理过期依赖」。上一节点是「ReactiveGraph.trackDependency()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:262，它对应直线图第 20 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：this.graph.endTracking(record.node, tracking);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：this.graph.endTracking(record.node, tracking)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-79；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「ReactiveGraph.endTracking()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「ReactiveGraph.endTracking()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js:262、下一步是否进入「ReactiveGraph.endTracking()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "21": {
    "context": "这条链专门看读取响应式值时怎样把当前 effect 与依赖节点关联起来。 当前节点是「ReactiveGraph.endTracking()」。上一节点是「返回 effect 的 finally 清理过期依赖」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js:121，它对应直线图第 21 / 21 个节点。",
      "它属于「effect 创建与首次依赖收集」这一段；这一段的目标是把同一类调用集中看完。",
      "这是完成节点，当前阶段收尾并把结果、DOM 状态或生命周期状态交给外层流程。",
      "当前片段先看这一行：endTracking(subscriber, state) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：旧分支遗留的订阅边被裁掉，外层 tracking 状态恢复，一次完整依赖收集结束",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-88；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，这个主题的主线结束，控制权回到触发这个主题的外层调用。"
    ],
    "result": "本主题执行链到这里收束；后续只剩调用者拿到结果或等待下一次外部事件触发。",
    "watch": "断点停在这里时，重点看 dependenciesTail、stale links、previous subscriber、node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js:121。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  }
};
