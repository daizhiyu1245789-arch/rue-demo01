rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["update"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「响应式更新」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：赋值表达式先读取再写回 count.value；写回操作命中 SignalHandle.value setter执行后继续到「SignalHandle.value setter」。",
    "code": "function updateStep001_onClickHandler(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"SignalHandle.value setter\", value)\n  })\n}",
    "watch": "手写时先盯住：count.value 写入前后。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「响应式更新」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：value setter 调用 set(next)，set 再进入 write(next) 执行真正的 Object.is 比较与版本更新执行后继续到「set 转到 write」。",
    "code": "function updateStep002_signalHandleValueSetter(ctx) {\n  const value = ctx.run(\"SignalHandle.value setter\")\n  ctx.next(\"set 转到 write\", value)\n  return value\n}",
    "watch": "手写时先盯住：next、previous。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「响应式更新」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.write(next执行后继续到「SignalHandle.set(next) → this.write(next)」。",
    "code": "function updateStep003_setWrite(ctx) {\n  const value = ctx.run(\"set 转到 write\")\n  ctx.next(\"SignalHandle.set(next) → this.write(next)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「响应式更新」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：value setter 转入 set；set 再把 next 传入 write。执行后继续到「SignalHandle.write()」。",
    "code": "function updateStep004_signalHandleSetNextThis(ctx) {\n  const value = ctx.run(\"SignalHandle.set(next) → this.write(next)\")\n  ctx.next(\"SignalHandle.write()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「响应式更新」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：write() 比较旧值、收集受影响的 signal/path 节点；不变则返回。变化时调用 runtime.triggerDependencies(affectedNodes, event)，内部逐个 graph.triggerDependency(node) → propagate(node) 得到需要调度的 effect id。执行后继续到「write 传入受影响节点集合」。",
    "code": "function updateStep005_signalHandleWrite(ctx) {\n  const value = ctx.run(\"SignalHandle.write()\")\n  ctx.next(\"write 传入受影响节点集合\", value)\n  return value\n}",
    "watch": "手写时先盯住：equal、changedPath、affectedNodes。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「响应式更新」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.runtime.triggerDependencies(执行后继续到「triggerDependencies 逐节点调用 graph.triggerDependency」。",
    "code": "function updateStep006_write(ctx) {\n  const value = ctx.run(\"write 传入受影响节点集合\")\n  ctx.next(\"triggerDependencies 逐节点调用 graph.triggerDependency\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「响应式更新」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.graph.triggerDependency(node)执行后继续到「runtime.triggerDependencies(nodes, event)」。",
    "code": "function updateStep007_triggerDependenciesGraphTriggerDependency(ctx) {\n  const value = ctx.run(\"triggerDependencies 逐节点调用 graph.triggerDependency\")\n  ctx.next(\"runtime.triggerDependencies(nodes, event)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「响应式更新」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：逐个 graph.triggerDependency，合并 effectIds；图传播结束后再 #scheduleEffects。执行后继续到「graph.triggerDependency(id) → propagate(id)」。",
    "code": "function updateStep008_runtimeTriggerDependenciesNodesEvent(ctx) {\n  const value = ctx.run(\"runtime.triggerDependencies(nodes, event)\")\n  ctx.next(\"graph.triggerDependency(id) → propagate(id)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「响应式更新」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：版本更新后传播；不是 SignalHandle.write 直接调用 propagate。执行后继续到「ReactiveGraph.propagate()」。",
    "code": "function updateStep009_graphTriggerDependencyIdPropagate(ctx) {\n  const value = ctx.run(\"graph.triggerDependency(id) → propagate(id)\")\n  ctx.next(\"ReactiveGraph.propagate()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「响应式更新」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：propagate() 把受影响的 effect id 集合返回 triggerDependencies()，由后者合并当前批次执行后继续到「triggerDependency 调用 propagate」。",
    "code": "function updateStep010_reactiveGraphPropagate(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"triggerDependency 调用 propagate\", value)\n  return value\n}",
    "watch": "手写时先盯住：queue、subscriber、effects。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「响应式更新」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.propagate(id)执行后继续到「triggerDependencies()」。",
    "code": "function updateStep011_triggerDependencyPropagate(ctx) {\n  const value = ctx.run(\"triggerDependency 调用 propagate\")\n  ctx.next(\"triggerDependencies()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「响应式更新」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：#scheduleEffects() 逐个查看 record：自定义调度器先 cancel 默认队列，再调用 record.scheduler(record.runner)；没有自定义调度器才进入 ReactiveScheduler.schedule(id, runner, isActive)。执行后继续到「custom scheduler 与默认调度器分流」。",
    "code": "function updateStep012_triggerDependencies(ctx) {\n  if (!ctx.match(\"triggerDependencies()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"custom scheduler 与默认调度器分流\", value)\n  return value\n}",
    "watch": "手写时先盯住：effectIds、event。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「响应式更新」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：if (record.scheduler !== undefined)执行后继续到「#scheduleEffects(effectIds, event)」。",
    "code": "function updateStep013_customScheduler(ctx) {\n  const value = ctx.run(\"custom scheduler 与默认调度器分流\")\n  ctx.next(\"#scheduleEffects(effectIds, event)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「响应式更新」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：按 record 选择 computed / custom scheduler / 默认 scheduler；自定义 scheduler 获得 record.runner。执行后继续到「ReactiveScheduler.schedule()」。",
    "code": "function updateStep014_scheduleEffectsEffectIdsEvent(ctx) {\n  if (!ctx.match(\"#scheduleEffects(effectIds, event)\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"ReactiveScheduler.schedule()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「响应式更新」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：普通 sync 分支直接 #runJob(job)；若当前任务/当前 effect/错误捕获发生重入，则入队到微任务。batch 先入队，离开最外层 batch 才刷新；microtask/frame 路径由 #drain() → #runJob() → state.runScheduledJob() → runner() → runEffect(id)。执行后继续到「sync 直接执行 #runJob（重入时例外）」。",
    "code": "function updateStep015_reactiveSchedulerSchedule(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"sync 直接执行 #runJob（重入时例外）\", value)\n  })\n}",
    "watch": "手写时先盯住：batchDepth、schedulingMode、pending。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「响应式更新」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.#runJob({ id, isActive, run })执行后继续到「异步队列取任务执行」。",
    "code": "function updateStep016_syncRunJob(ctx) {\n  const value = ctx.run(\"sync 直接执行 #runJob（重入时例外）\")\n  ctx.next(\"异步队列取任务执行\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "17": {
    "title": "17 · 最小实现",
    "intro": "这是「响应式更新」第 17 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.#runJob(job)执行后继续到「runner 实际回调 runEffect(id)」。",
    "code": "function updateStep017(ctx) {\n  const value = ctx.run(\"异步队列取任务执行\")\n  ctx.next(\"runner 实际回调 runEffect(id)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "18": {
    "title": "18 · 最小实现",
    "intro": "这是「响应式更新」第 18 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const runner = () => this.runEffect(id)执行后继续到「异步分支：#enqueue(job)」。",
    "code": "function updateStep018_runnerRunEffectId(ctx) {\n  const value = ctx.run(\"runner 实际回调 runEffect(id)\")\n  ctx.next(\"异步分支：#enqueue(job)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "19": {
    "title": "19 · 最小实现",
    "intro": "这是「响应式更新」第 19 步的最小手写版，只保留当前节点的核心动作。对应源码线索：按 job.id 去重，存入 pending Map。sync 且不重入时跳过入队，直接 #runJob。执行后继续到「#scheduleDefaultDrain()：frame / microtask」。",
    "code": "function updateStep019_enqueueJob(ctx) {\n  if (!ctx.match(\"异步分支：#enqueue(job)\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"#scheduleDefaultDrain()：frame / microtask\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "20": {
    "title": "20 · 最小实现",
    "intro": "这是「响应式更新」第 20 步的最小手写版，只保留当前节点的核心动作。对应源码线索：按 schedulingMode 选择回调登记方式。执行后继续到「#scheduleMicrotaskDrain()：登记 Promise.then」。",
    "code": "function updateStep020_scheduleDefaultDrainFrameMicrotask(ctx) {\n  if (!ctx.match(\"#scheduleDefaultDrain()：frame / microtask\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"#scheduleMicrotaskDrain()：登记 Promise.then\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "21": {
    "title": "21 · 最小实现",
    "intro": "这是「响应式更新」第 21 步的最小手写版，只保留当前节点的核心动作。对应源码线索：当前同步栈返回后，由微任务队列执行 () => this.#drain()。执行后继续到「#scheduleFrameDrain()：登记 drainOnce」。",
    "code": "function updateStep021_scheduleMicrotaskDrainPromiseThen(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"#scheduleFrameDrain()：登记 drainOnce\", value)\n  })\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "22": {
    "title": "22 · 最小实现",
    "intro": "这是「响应式更新」第 22 步的最小手写版，只保留当前节点的核心动作。对应源码线索：frame 路径由 requestAnimationFrame 或后备 timer 执行 drainOnce；generation/didDrain 防重复。执行后继续到「#drain()：回调触发后逐个取 job」。",
    "code": "function updateStep022_scheduleFrameDrainDrainOnce(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"#drain()：回调触发后逐个取 job\", value)\n  })\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "23": {
    "title": "23 · 最小实现",
    "intro": "这是「响应式更新」第 23 步的最小手写版，只保留当前节点的核心动作。对应源码线索：只在异步/批处理分支进入；从 pending 取本轮 jobs 并逐个 #runJob。执行后继续到「#runJob(job) → state.runScheduledJob(job.id, job.run)」。",
    "code": "function updateStep023_drainJob(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"#runJob(job) → state.runScheduledJob(job.id, job.run)\", value)\n  })\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "24": {
    "title": "24 · 最小实现",
    "intro": "这是「响应式更新」第 24 步的最小手写版，只保留当前节点的核心动作。对应源码线索：sync 快路径也在这里汇合。job.run = record.runner = () => this.runEffect(id)。执行后继续到「runner() → this.runEffect(id)」。",
    "code": "function updateStep024_runJobJobStateRunScheduledJob(ctx) {\n  const value = ctx.run(\"#runJob(job) → state.runScheduledJob(job.id, job.run)\")\n  ctx.next(\"runner() → this.runEffect(id)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "25": {
    "title": "25 · 最小实现",
    "intro": "这是「响应式更新」第 25 步的最小手写版，只保留当前节点的核心动作。对应源码线索：runner 创建时捕获 id；调度器不会重新查找一个同名业务函数。执行后继续到「state.runScheduledJob(jobId, callback)」。",
    "code": "function updateStep025_runnerThisRunEffectId(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"state.runScheduledJob(jobId, callback)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "26": {
    "title": "26 · 最小实现",
    "intro": "这是「响应式更新」第 26 步的最小手写版，只保留当前节点的核心动作。对应源码线索：callback = job.run = record.runner；执行 callback() 后进入 runner 内的 this.runEffect(id)。执行后继续到「runEffect()」。",
    "code": "function updateStep026_stateRunScheduledJobJobIdCallback(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"runEffect()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "27": {
    "title": "27 · 最小实现",
    "intro": "这是「响应式更新」第 27 步的最小手写版，只保留当前节点的核心动作。对应源码线索：该 effect 的 callback 就是编译器为动态表达式生成的更新闭包，因此 runEffect() 直接执行 compiled DOM effect执行后继续到「执行保存的 effect callback」。",
    "code": "function updateStep027_runEffect(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"执行保存的 effect callback\", value)\n  return value\n}",
    "watch": "手写时先盯住：record、pendingComputedEffects。"
  },
  "28": {
    "title": "28 · 最小实现",
    "intro": "这是「响应式更新」第 28 步的最小手写版，只保留当前节点的核心动作。对应源码线索：return record.callback()执行后继续到「#runEffectBody(record) → record.callback()」。",
    "code": "function updateStep028_effectCallback(ctx) {\n  const value = ctx.run(\"执行保存的 effect callback\")\n  ctx.next(\"#runEffectBody(record) → record.callback()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "29": {
    "title": "29 · 最小实现",
    "intro": "这是「响应式更新」第 29 步的最小手写版，只保留当前节点的核心动作。对应源码线索：清理旧资源，建立跟踪上下文，执行最初登记的编译更新闭包；finally 收尾依赖。执行后继续到「compiled DOM effect」。",
    "code": "function updateStep029_runEffectBodyRecordRecordCallback(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"compiled DOM effect\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "30": {
    "title": "30 · 最小实现",
    "intro": "这是「响应式更新」第 30 步的最小手写版，只保留当前节点的核心动作。对应源码线索：更新闭包重新求值后，把目标 Element 和新字符串传给 settextContent()，不重建整棵组件树执行后继续到「settextContent()」。",
    "code": "function updateStep030_compiledDOMEffect(ctx) {\n  const input = ctx.input\n  const output = ctx.runOutsideJavaScript(input)\n  ctx.next(\"settextContent()\", output)\n  return output\n}",
    "watch": "手写时先盯住：effect callback、表达式结果。"
  },
  "31": {
    "title": "31 · 最小实现",
    "intro": "这是「响应式更新」第 31 步的最小手写版，只保留当前节点的核心动作。对应源码线索：原生 textContent 写入完成，浏览器显示新值，本次响应式局部更新结束执行后回到本主题的外层调用者。",
    "code": "function updateStep031_settextContent(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先盯住：el、val、el.textContent。"
  }
};
