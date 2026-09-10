rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["keepAlive"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：setup 在 onMounted() 中启动 watchEffect()；child、include/exclude 或 max 变化都会让 effect 调用 reconcile()执行后继续到「挂载后 watchEffect 调用 reconcile」。",
    "code": "function keepAliveStep001_keepAliveUseSetup(ctx) {\n  const value = ctx.run(\"KeepAlive() → useSetup()\")\n  ctx.next(\"挂载后 watchEffect 调用 reconcile\", value)\n  return value\n}",
    "watch": "手写时先盯住：storage、cache、activeEntry、propsSig。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：reconcile(ctx.propsSig.get())执行后继续到「useSetup(factory)：在持久 Hook scope 调用 factory」。",
    "code": "function keepAliveStep002_watchEffectReconcile(ctx) {\n  const value = ctx.run(\"挂载后 watchEffect 调用 reconcile\")\n  ctx.next(\"useSetup(factory)：在持久 Hook scope 调用 factory\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：组件传入的 setup 箭头函数就是 factory。首次调用经 withHookSlot、runInPersistentHookScope、runUntracked(factory) 执行；后续读取缓存 slot.value。执行后继续到「onMounted() → watchEffect() → reconcile()」。",
    "code": "function keepAliveStep003_useSetupFactoryHookScope(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"onMounted() → watchEffect() → reconcile()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：缓存 miss 时 reconcile() 调用 createEntry() 创建带 start/end anchors 的条目；命中则直接复用已有 entry执行后继续到「缓存 miss 创建 entry」。",
    "code": "function keepAliveStep004_onMountedWatchEffectReconcile(ctx) {\n  if (!ctx.match(\"onMounted() → watchEffect() → reconcile()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"缓存 miss 创建 entry\", value)\n  return value\n}",
    "watch": "手写时先盯住：descriptor.key、cacheable、max。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：nextEntry = createEntry(descriptor, cacheable)执行后继续到「resolveChildDescriptor() / shouldCache()」。",
    "code": "function keepAliveStep005_missEntry(ctx) {\n  const value = ctx.run(\"缓存 miss 创建 entry\")\n  ctx.next(\"resolveChildDescriptor() / shouldCache()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：该解析器由 KeepAlive 的 reconcile() 每轮调用；组件本身先通过 useSetup() 建立可跨轮次保存的缓存上下文执行后继续到「reconcile 调用 descriptor/shouldCache」。",
    "code": "function keepAliveStep006_resolveChildDescriptorShouldCache(ctx) {\n  const value = ctx.run(\"resolveChildDescriptor() / shouldCache()\")\n  ctx.next(\"reconcile 调用 descriptor/shouldCache\", value)\n  return value\n}",
    "watch": "手写时先盯住：explicitKey、DEFAULT_CACHE_KEY、name。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const descriptor = resolveChildDescriptor(child)执行后继续到「createEntry()」。",
    "code": "function keepAliveStep007_reconcileDescriptorShouldCache(ctx) {\n  const value = ctx.run(\"reconcile 调用 descriptor/shouldCache\")\n  ctx.next(\"createEntry()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：新 entry 首次需要内容时进入 renderEntry()，在该条目的双锚点范围内挂载 child执行后继续到「新条目首次渲染」。",
    "code": "function keepAliveStep008_createEntry(ctx) {\n  const value = ctx.run(\"createEntry()\")\n  ctx.next(\"新条目首次渲染\", value)\n  return value\n}",
    "watch": "手写时先盯住：entry.start、entry.end、entry.state。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：renderEntry(nextEntry, descriptor.child)执行后继续到「renderEntry()」。",
    "code": "function keepAliveStep009(ctx) {\n  const value = ctx.run(\"新条目首次渲染\")\n  ctx.next(\"renderEntry()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：新建条目：reconcile() → renderEntry(nextEntry, child) → 直接设置 state=1、justActivated=true → notifyActivated()。缓存命中条目才通过 transitionEntry(entry, 1) 移回活动范围；两条激活路径需分开看。执行后继续到「新条目直接标 active；缓存命中才 transitionEntry」。",
    "code": "function keepAliveStep010_renderEntry(ctx) {\n  if (!ctx.match(\"renderEntry()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"新条目直接标 active；缓存命中才 transitionEntry\", value)\n  return value\n}",
    "watch": "手写时先盯住：prevHookTarget、ownedMountContinuation。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：if (!reusedCachedEntry)执行后继续到「transitionEntry(entry, 1)」。",
    "code": "function keepAliveStep011_activeTransitionEntry(ctx) {\n  const value = ctx.run(\"新条目直接标 active；缓存命中才 transitionEntry\")\n  ctx.next(\"transitionEntry(entry, 1)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：切换到其他 key 或规则不再允许缓存时，旧活动项进入 transitionEntry(entry, 0/2)：0 缓存，2 最终销毁执行后继续到「旧条目失活 / 最终销毁的调用」。",
    "code": "function keepAliveStep012_transitionEntryEntry1(ctx) {\n  const value = ctx.run(\"transitionEntry(entry, 1)\")\n  ctx.next(\"旧条目失活 / 最终销毁的调用\", value)\n  return value\n}",
    "watch": "手写时先盯住：state、justActivated、container。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：transitionEntry(ctx.activeEntry, ctx.activeEntry.cacheable ? 0 : 2)执行后继续到「transitionEntry(entry, 0/2)」。",
    "code": "function keepAliveStep013(ctx) {\n  const value = ctx.run(\"旧条目失活 / 最终销毁的调用\")\n  ctx.next(\"transitionEntry(entry, 0/2)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：缓存 state=0 时移入 storage 并异步 notifyDeactivated；最终销毁 state=2 时，若原来 active，要先同步 runDeactivated()，再 renderBetween(null) 卸载，最后双微任务移除 anchors。执行后继续到「最终销毁先同步 deactivate」。",
    "code": "function keepAliveStep014_transitionEntryEntry02(ctx) {\n  if (!ctx.match(\"transitionEntry(entry, 0/2)\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"最终销毁先同步 deactivate\", value)\n  return value\n}",
    "watch": "手写时先盯住：previousState、cacheable、range marker。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：runDeactivated(entry)执行后继续到「cacheEntry() / pruneOldestEntries()」。",
    "code": "function keepAliveStep015_deactivate(ctx) {\n  const value = ctx.run(\"最终销毁先同步 deactivate\")\n  ctx.next(\"cacheEntry() / pruneOldestEntries()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：正常运行继续由 reconcile() 使用该 Map；KeepAlive 自身卸载时调用 disposeAllEntries() 统一释放活动项和离线项执行后继续到「LRU 超限淘汰调用 transitionEntry(2)」。",
    "code": "function keepAliveStep016_cacheEntryPruneOldestEntries(ctx) {\n  const value = ctx.run(\"cacheEntry() / pruneOldestEntries()\")\n  ctx.next(\"LRU 超限淘汰调用 transitionEntry(2)\", value)\n  return value\n}",
    "watch": "手写时先盯住：cache.size、oldest、activeEntry。"
  },
  "17": {
    "title": "17 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 17 步的最小手写版，只保留当前节点的核心动作。对应源码线索：transitionEntry(entry, 2)执行后继续到「notifyActivated() / notifyDeactivated()」。",
    "code": "function keepAliveStep017_lRUTransitionEntry2(ctx) {\n  const value = ctx.run(\"LRU 超限淘汰调用 transitionEntry(2)\")\n  ctx.next(\"notifyActivated() / notifyDeactivated()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "18": {
    "title": "18 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 18 步的最小手写版，只保留当前节点的核心动作。对应源码线索：notifyActivated/notifyDeactivated 在微任务执行 Hook。cacheEntry/pruneOldestEntries 则由 reconcile() 同步调用，不是 Hook 触发；阅读下一步需返回 reconcile() 的 LRU 维护位置。执行后继续到「LRU 在 reconcile 内同步维护」。",
    "code": "function keepAliveStep018_notifyActivatedNotifyDeactivated(ctx) {\n  const value = ctx.run(\"notifyActivated() / notifyDeactivated()\")\n  ctx.next(\"LRU 在 reconcile 内同步维护\", value)\n  return value\n}",
    "watch": "手写时先盯住：activatedHooks、deactivatedHooks、rangeMounts。"
  },
  "19": {
    "title": "19 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 19 步的最小手写版，只保留当前节点的核心动作。对应源码线索：pruneOldestEntries(max)执行后继续到「disposeAllEntries()」。",
    "code": "function keepAliveStep019_lRUReconcile(ctx) {\n  const value = ctx.run(\"LRU 在 reconcile 内同步维护\")\n  ctx.next(\"disposeAllEntries()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "20": {
    "title": "20 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 20 步的最小手写版，只保留当前节点的核心动作。对应源码线索：storage fragment、LRU Map、范围节点和组件实例全部清空，KeepAlive 生命周期结束执行后继续到「卸载 Hook 登记 disposeAllEntries」。",
    "code": "function keepAliveStep020_disposeAllEntries(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"卸载 Hook 登记 disposeAllEntries\", value)\n  return value\n}",
    "watch": "手写时先盯住：effect、activeEntry、entries。"
  },
  "21": {
    "title": "21 · 最小实现",
    "intro": "这是「KeepAlive 缓存」第 21 步的最小手写版，只保留当前节点的核心动作。对应源码线索：onBeforeUnmount(disposeAllEntries)执行后回到本主题的外层调用者。",
    "code": "function keepAliveStep021_hookDisposeAllEntries(ctx) {\n  const value = ctx.run(\"卸载 Hook 登记 disposeAllEntries\")\n  ctx.next(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  }
};
