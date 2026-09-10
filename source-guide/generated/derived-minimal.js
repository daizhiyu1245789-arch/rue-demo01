rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["derived"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「计算属性与侦听」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：调用方读取 computed.value/get() 时，SignalHandle 的 beforeRead 钩子同步进入 ComputedHandle.beforeRead()执行后继续到「computed 注册隐藏 effect」。",
    "code": "function derivedStep001_newComputedHandle(ctx) {\n  const value = ctx.run(\"new ComputedHandle()\")\n  ctx.next(\"computed 注册隐藏 effect\", value)\n  return value\n}",
    "watch": "手写时先盯住：#getter、#setter、node、#effect。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「计算属性与侦听」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.#effect = runtime.createComputedEffect执行后继续到「SignalHandle.get()：先 beforeRead，再读取缓存」。",
    "code": "function derivedStep002_computedEffect(ctx) {\n  const value = ctx.run(\"computed 注册隐藏 effect\")\n  ctx.next(\"SignalHandle.get()：先 beforeRead，再读取缓存\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「计算属性与侦听」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：computed 继承信号读取入口；beforeRead 指向 ComputedHandle 的方法。执行后继续到「ComputedHandle.beforeRead()」。",
    "code": "function derivedStep003_signalHandleGetBeforeRead(ctx) {\n  const value = ctx.run(\"SignalHandle.get()：先 beforeRead，再读取缓存\")\n  ctx.next(\"ComputedHandle.beforeRead()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「计算属性与侦听」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：beforeRead() → runtime.runEffect(hiddenId) → 检查 computed 的 nodeNeedsUpdate → #runComputed(record) → beginEvaluation() → #runEffectBody(record) 执行 getter → binding.commit(value)。返回 changed 后再由 graph.commitComputed(node, changed) 更新版本。执行后继续到「runEffect 中 computed 专用分支」。",
    "code": "function derivedStep004_computedHandleBeforeRead(ctx) {\n  const value = ctx.run(\"ComputedHandle.beforeRead()\")\n  ctx.next(\"runEffect 中 computed 专用分支\", value)\n  return value\n}",
    "watch": "手写时先盯住：#evaluating、#initialized、#effect.id。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「计算属性与侦听」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.#runComputed(record)执行后继续到「getter 返回后 commit，并更新图版本」。",
    "code": "function derivedStep005_runEffectComputed(ctx) {\n  const value = ctx.run(\"runEffect 中 computed 专用分支\")\n  ctx.next(\"getter 返回后 commit，并更新图版本\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「计算属性与侦听」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.graph.commitComputed(record.node, binding.commit(value))执行后继续到「#runComputed(record) → #runEffectBody(record)」。",
    "code": "function derivedStep006_getterCommit(ctx) {\n  const value = ctx.run(\"getter 返回后 commit，并更新图版本\")\n  ctx.next(\"#runComputed(record) → #runEffectBody(record)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「计算属性与侦听」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：beginEvaluation 通过后，执行隐藏 effect 的 getter；getter 返回才调用 commit。执行后继续到「ComputedHandle.commit()」。",
    "code": "function derivedStep007_runComputedRecordRunEffectBodyRecord(ctx) {\n  const value = ctx.run(\"#runComputed(record) → #runEffectBody(record)\")\n  ctx.next(\"ComputedHandle.commit()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「计算属性与侦听」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：ComputedHandle.commit() 只更新缓存并返回 changed。调用它的 #runComputed() 接着执行 graph.commitComputed(node, changed)，控制版本传播。computed 分支到此结束；下一阅读步骤 watch() 是共享这套内核的另一入口。执行后继续到「真正提交 graph.valueVersion」。",
    "code": "function derivedStep008_computedHandleCommit(ctx) {\n  if (!ctx.match(\"ComputedHandle.commit()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"真正提交 graph.valueVersion\", value)\n  return value\n}",
    "watch": "手写时先盯住：cached value、changed、valueVersion。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「计算属性与侦听」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：commitComputed(id, changed)执行后继续到「watch()」。",
    "code": "function derivedStep009_graphValueVersion(ctx) {\n  const value = ctx.run(\"真正提交 graph.valueVersion\")\n  ctx.next(\"watch()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「计算属性与侦听」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：watch() 规范化单源、多源、deep 和 equals 规则后，直接把统一 getter 与 handler 传给 createWatcher()执行后继续到「createWatcher()」。",
    "code": "function derivedStep010_watch(ctx) {\n  const value = ctx.run(\"watch()\")\n  ctx.next(\"createWatcher()\", value)\n  return value\n}",
    "watch": "手写时先盯住：source、resolvedHandler、shallowArrayEqual。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「计算属性与侦听」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：watcher effect 虽以 lazy 创建，但 createWatcher() 会在返回前立即调用 runtime.runEffect(handle.id) 建立初始订阅执行后继续到「runtime.runEffect(handle.id)」。",
    "code": "function derivedStep011_createWatcher(ctx) {\n  const value = ctx.run(\"createWatcher()\")\n  ctx.next(\"runtime.runEffect(handle.id)\", value)\n  return value\n}",
    "watch": "手写时先盯住：first、previous、equals、options.immediate。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「计算属性与侦听」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：runEffect() 执行的 record.callback 正是 createWatcher 内部的 watcher callback，进入首次值或后续值比较执行后继续到「watcher callback 读取 getter」。",
    "code": "function derivedStep012_runtimeRunEffectHandleId(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"watcher callback 读取 getter\", value)\n  return value\n}",
    "watch": "手写时先盯住：handle.id、first、previous。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「计算属性与侦听」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const next = getter()执行后继续到「watcher callback()」。",
    "code": "function derivedStep013_watcherCallbackGetter(ctx) {\n  const value = ctx.run(\"watcher callback 读取 getter\")\n  ctx.next(\"watcher callback()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「计算属性与侦听」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：满足 immediate 或检测到变化时，watcher callback 不直接裸调业务函数，而是交给 runWatcherHandler()执行后继续到「比较变化后执行业务 handler」。",
    "code": "function derivedStep014_watcherCallback(ctx) {\n  if (!ctx.match(\"watcher callback()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"比较变化后执行业务 handler\", value)\n  return value\n}",
    "watch": "手写时先盯住：changed、first、next、previous。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「计算属性与侦听」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：runtime.runWatcherHandler(handle.id, () => handler(next, previous))执行后继续到「runWatcherHandler()」。",
    "code": "function derivedStep015_handler(ctx) {\n  const value = ctx.run(\"比较变化后执行业务 handler\")\n  ctx.next(\"runWatcherHandler()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「计算属性与侦听」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：handler 执行期间若调用 onWatcherCleanup(fn)，运行时利用当前 watcher id 把 fn 登记到同一个 effect record执行后继续到「不收集 handler 依赖，但保存 watcher id」。",
    "code": "function derivedStep016_runWatcherHandler(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"不收集 handler 依赖，但保存 watcher id\", value)\n  return value\n}",
    "watch": "手写时先盯住：#watcherHandlerEffectIds、state.currentEffectId。"
  },
  "17": {
    "title": "17 · 最小实现",
    "intro": "这是「计算属性与侦听」第 17 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.#watcherHandlerEffectIds.push(id)执行后继续到「onWatcherCleanup()」。",
    "code": "function derivedStep017_handlerWatcherId(ctx) {\n  const value = ctx.run(\"不收集 handler 依赖，但保存 watcher id\")\n  ctx.next(\"onWatcherCleanup()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "18": {
    "title": "18 · 最小实现",
    "intro": "这是「计算属性与侦听」第 18 步的最小手写版，只保留当前节点的核心动作。对应源码线索：这是普通 watch 的清理出口；下一步展示同一 watcher 基础设施的另一入口 watchEffect()，不是 cleanup 自动调用它执行后继续到「下轮或销毁时清理」。",
    "code": "function derivedStep018_onWatcherCleanup(ctx) {\n  if (!ctx.match(\"onWatcherCleanup()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"下轮或销毁时清理\", value)\n  return value\n}",
    "watch": "手写时先盯住：record.watcher、record.cleanups。"
  },
  "19": {
    "title": "19 · 最小实现",
    "intro": "这是「计算属性与侦听」第 19 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.#runCleanups(cleanups)执行后继续到「watchEffect()」。",
    "code": "function derivedStep019(ctx) {\n  const value = ctx.run(\"下轮或销毁时清理\")\n  ctx.next(\"watchEffect()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "20": {
    "title": "20 · 最小实现",
    "intro": "这是「计算属性与侦听」第 20 步的最小手写版，只保留当前节点的核心动作。对应源码线索：callback 每次重跑前执行上轮 cleanup，并重新收集实际读取的依赖，computed 与 watch 主题至此闭环执行后继续到「watchEffect 首轮显式 runEffect」。",
    "code": "function derivedStep020_watchEffect(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"watchEffect 首轮显式 runEffect\", value)\n  return value\n}",
    "watch": "手写时先盯住：callback、scheduler、handle.dispose()。"
  },
  "21": {
    "title": "21 · 最小实现",
    "intro": "这是「计算属性与侦听」第 21 步的最小手写版，只保留当前节点的核心动作。对应源码线索：runtime.runEffect(handle.id)执行后回到本主题的外层调用者。",
    "code": "function derivedStep021_watchEffectRunEffect(ctx) {\n  const value = ctx.run(\"watchEffect 首轮显式 runEffect\")\n  ctx.next(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  }
};
