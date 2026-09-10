rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["tracking"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「依赖追踪」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：createEffect() → #insertEffect() 保存 record / runner / scope。lazy=true 只登记；非 lazy 且有 custom scheduler 时调用 scheduler(record.runner)，由它决定何时运行；否则立即 runEffect(id)。执行后继续到「首次运行：custom scheduler 或 runEffect」。",
    "code": "function trackingStep001_reactiveRuntimeCreateEffect(ctx) {\n  if (!ctx.match(\"ReactiveRuntime.createEffect()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"首次运行：custom scheduler 或 runEffect\", value)\n  return value\n}",
    "watch": "手写时先盯住：id、node、scopeId、options.lazy。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「依赖追踪」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：if (!options.lazy)执行后继续到「#insertEffect()：保存 callback，创建 runner」。",
    "code": "function trackingStep002_customSchedulerRunEffect(ctx) {\n  const value = ctx.run(\"首次运行：custom scheduler 或 runEffect\")\n  ctx.next(\"#insertEffect()：保存 callback，创建 runner\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「依赖追踪」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：runner = () => this.runEffect(id)；record.callback 保存传入业务函数。执行后继续到「ReactiveRuntime.runEffect()」。",
    "code": "function trackingStep003_insertEffectCallbackRunner(ctx) {\n  const value = ctx.run(\"#insertEffect()：保存 callback，创建 runner\")\n  ctx.next(\"ReactiveRuntime.runEffect()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「依赖追踪」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：依赖版本检查确认需要执行后，runEffect() 直接把 effect record 交给私有 #runEffectBody()执行后继续到「进入 effect body」。",
    "code": "function trackingStep004_reactiveRuntimeRunEffect(ctx) {\n  const value = ctx.run(\"ReactiveRuntime.runEffect()\")\n  ctx.next(\"进入 effect body\", value)\n  return value\n}",
    "watch": "手写时先盯住：record、pendingComputedEffects、subscriberNeedsRun。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「依赖追踪」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.#runEffectBody(record)执行后继续到「#runEffectBody()」。",
    "code": "function trackingStep005_effectBody(ctx) {\n  const value = ctx.run(\"进入 effect body\")\n  ctx.next(\"#runEffectBody()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「依赖追踪」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：清理完成后，#runEffectBody() 以当前 effect 图节点调用 graph.beginTracking()，把它设为本轮 subscriber执行后继续到「开始依赖收集」。",
    "code": "function trackingStep006_runEffectBody(ctx) {\n  const value = ctx.run(\"#runEffectBody()\")\n  ctx.next(\"开始依赖收集\", value)\n  return value\n}",
    "watch": "手写时先盯住：record.cleanups、record.node、record.scopeId。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「依赖追踪」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const tracking = this.graph.beginTracking执行后继续到「ReactiveGraph.beginTracking()」。",
    "code": "function trackingStep007(ctx) {\n  const value = ctx.run(\"开始依赖收集\")\n  ctx.next(\"ReactiveGraph.beginTracking()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「依赖追踪」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：beginTracking() 返回旧 subscriber 状态后，#runEffectBody() 调 state.runWithEffect(record.id, runner) 设置 currentEffectId；无 scope 直接 record.callback()，有 scope 则 scopes.run(scopeId, record.callback)。执行后继续到「跟踪窗口内设置 currentEffectId」。",
    "code": "function trackingStep008_reactiveGraphBeginTracking(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"跟踪窗口内设置 currentEffectId\", value)\n  return value\n}",
    "watch": "手写时先盯住：currentSubscriber、dependenciesTail、trackingCycle。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「依赖追踪」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：return this.state.runWithEffect执行后继续到「runWithEffect(effectId, callback)：真正调用 callback()」。",
    "code": "function trackingStep009_currentEffectId(ctx) {\n  const value = ctx.run(\"跟踪窗口内设置 currentEffectId\")\n  ctx.next(\"runWithEffect(effectId, callback)：真正调用 callback()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「依赖追踪」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：保存旧 currentEffectId → 当前 id 入栈 → callback() → finally 恢复。执行后继续到「state.runWithEffect()：执行 effect 内层回调」。",
    "code": "function trackingStep010_runWithEffectEffectIdCallbackCallback(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"state.runWithEffect()：执行 effect 内层回调\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「依赖追踪」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：先设置 effect id；无 scope 调 record.callback，有 scope 进入 scopes.run。执行后继续到「scopes.run(scopeId, record.callback)」。",
    "code": "function trackingStep011_stateRunWithEffectEffect(ctx) {\n  const value = ctx.run(\"state.runWithEffect()：执行 effect 内层回调\")\n  ctx.next(\"scopes.run(scopeId, record.callback)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「依赖追踪」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：带 scope 分支通过 withScope(scopeId, callback) 执行同一个 callback；结束后恢复 scope。执行后继续到「record.callback()」。",
    "code": "function trackingStep012_scopesRunScopeIdRecord(ctx) {\n  const value = ctx.run(\"scopes.run(scopeId, record.callback)\")\n  ctx.next(\"record.callback()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「依赖追踪」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：callback 求值表达式时读取 ref/computed，属性读取最终进入对应 SignalHandle.get()执行后继续到「有 scope 时由 scopes.run 执行 callback」。",
    "code": "function trackingStep013_recordCallback(ctx) {\n  const value = ctx.run(\"record.callback()\")\n  ctx.next(\"有 scope 时由 scopes.run 执行 callback\", value)\n  return value\n}",
    "watch": "手写时先盯住：state.currentEffectId、callback 内条件分支。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「依赖追踪」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：return this.scopes.run(record.scopeId, record.callback)执行后继续到「SignalHandle.get()」。",
    "code": "function trackingStep014_scopeScopesRunCallback(ctx) {\n  const value = ctx.run(\"有 scope 时由 scopes.run 执行 callback\")\n  ctx.next(\"SignalHandle.get()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「依赖追踪」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：get() 返回值之前同步调用 runtime.trackDependency(this.node)，把这次读取报告给当前 effect执行后继续到「get() 上报当前 dependency」。",
    "code": "function trackingStep015_signalHandleGet(ctx) {\n  const value = ctx.run(\"SignalHandle.get()\")\n  ctx.next(\"get() 上报当前 dependency\", value)\n  return value\n}",
    "watch": "手写时先盯住：this.node、this.readCachedValue()。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「依赖追踪」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.runtime.trackDependency(this.node)执行后继续到「ReactiveRuntime.trackDependency()」。",
    "code": "function trackingStep016_getDependency(ctx) {\n  const value = ctx.run(\"get() 上报当前 dependency\")\n  ctx.next(\"ReactiveRuntime.trackDependency()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "17": {
    "title": "17 · 最小实现",
    "intro": "这是「依赖追踪」第 17 步的最小手写版，只保留当前节点的核心动作。对应源码线索：runtime 确认存在 active effect 后，将 dependency node 原样传给 graph.trackDependency() 建边执行后继续到「runtime 转交 graph」。",
    "code": "function trackingStep017_reactiveRuntimeTrackDependency(ctx) {\n  const value = ctx.run(\"ReactiveRuntime.trackDependency()\")\n  ctx.next(\"runtime 转交 graph\", value)\n  return value\n}",
    "watch": "手写时先盯住：currentEffectId、record.owner、currentRenderDebugOwner。"
  },
  "18": {
    "title": "18 · 最小实现",
    "intro": "这是「依赖追踪」第 18 步的最小手写版，只保留当前节点的核心动作。对应源码线索：return this.graph.trackDependency(node)执行后继续到「ReactiveGraph.trackDependency()」。",
    "code": "function trackingStep018_runtimeGraph(ctx) {\n  const value = ctx.run(\"runtime 转交 graph\")\n  ctx.next(\"ReactiveGraph.trackDependency()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "19": {
    "title": "19 · 最小实现",
    "intro": "这是「依赖追踪」第 19 步的最小手写版，只保留当前节点的核心动作。对应源码线索：callback 的所有读取结束并返回后，#runEffectBody() 的 finally 调用 graph.endTracking() 收尾本轮依赖集合执行后继续到「返回 effect 的 finally 清理过期依赖」。",
    "code": "function trackingStep019_reactiveGraphTrackDependency(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"返回 effect 的 finally 清理过期依赖\", value)\n  return value\n}",
    "watch": "手写时先盯住：dependency、subscriber、observedVersion、linkCount。"
  },
  "20": {
    "title": "20 · 最小实现",
    "intro": "这是「依赖追踪」第 20 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.graph.endTracking(record.node, tracking)执行后继续到「ReactiveGraph.endTracking()」。",
    "code": "function trackingStep020_effectFinally(ctx) {\n  const value = ctx.run(\"返回 effect 的 finally 清理过期依赖\")\n  ctx.next(\"ReactiveGraph.endTracking()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "21": {
    "title": "21 · 最小实现",
    "intro": "这是「依赖追踪」第 21 步的最小手写版，只保留当前节点的核心动作。对应源码线索：旧分支遗留的订阅边被裁掉，外层 tracking 状态恢复，一次完整依赖收集结束执行后回到本主题的外层调用者。",
    "code": "function trackingStep021_reactiveGraphEndTracking(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先盯住：dependenciesTail、stale links、previous subscriber。"
  }
};
