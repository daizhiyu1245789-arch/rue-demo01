rueSourceGuide.data["keepAlive"].rows.push(...[
  {
    "title": "cacheEntry() / pruneOldestEntries()",
    "file": "node_modules/@rue-js/runtime/src/components/KeepAlive.ts",
    "line": 477,
    "code": "  const cacheEntry = (entry: CacheEntry) => {\n    ctx.cache.delete(entry.key)\n    if (!entry.cacheable) {\n      return\n    }\n    ctx.cache.set(entry.key, entry)\n  }\n",
    "kind": "时序",
    "note": "正常运行继续由 reconcile() 使用该 Map；KeepAlive 自身卸载时调用 disposeAllEntries() 统一释放活动项和离线项",
    "watch": "cache.size、oldest、activeEntry",
    "section": "切换 key 时处理旧活动 entry",
    "originalStep": 9,
    "sectionStart": false,
    "definitionId": "fn-222"
  },
  {
    "title": "LRU 超限淘汰调用 transitionEntry(2)",
    "file": "node_modules/@rue-js/runtime/src/components/KeepAlive.ts",
    "line": 499,
    "code": "      transitionEntry(entry, 2)\n    }\n  }\n\n  const disposeAllEntries = () => {\n    ctx.effect?.dispose()\n    ctx.effect = null",
    "kind": "衔接代码",
    "note": "transitionEntry(entry, 2)",
    "section": "切换 key 时处理旧活动 entry",
    "originalStep": 9,
    "sectionStart": false,
    "definitionId": "fn-223"
  },
  {
    "title": "notifyActivated() / notifyDeactivated()",
    "file": "node_modules/@rue-js/runtime/src/components/KeepAlive.ts",
    "line": 402,
    "code": "  const notifyActivated = (entry: CacheEntry) => {\n    queueMicrotask(() => {\n      queueMicrotask(() => {\n        if (entry.state === 1) {\n          for (const hook of entry.activatedHooks) {\n            hook()\n          }\n          if (entry.activatedHooks.size === 0) {",
    "kind": "阅读顺序",
    "note": "notifyActivated/notifyDeactivated 在微任务执行 Hook。cacheEntry/pruneOldestEntries 则由 reconcile() 同步调用，不是 Hook 触发；阅读下一步需返回 reconcile() 的 LRU 维护位置。",
    "watch": "activatedHooks、deactivatedHooks、rangeMounts",
    "section": "微任务中的 activated / deactivated 通知",
    "originalStep": 8,
    "sectionStart": true,
    "definitionId": "fn-224"
  },
  {
    "title": "LRU 在 reconcile 内同步维护",
    "file": "node_modules/@rue-js/runtime/src/components/KeepAlive.ts",
    "line": 611,
    "code": "    pruneOldestEntries(max)\n  }\n\n  onMounted(() => {\n    if (ctx.effect) {\n      return\n    }",
    "kind": "衔接代码",
    "note": "pruneOldestEntries(max)",
    "section": "微任务中的 activated / deactivated 通知",
    "originalStep": 8,
    "sectionStart": false,
    "definitionId": "fn-217"
  },
  {
    "title": "disposeAllEntries()",
    "file": "node_modules/@rue-js/runtime/src/components/KeepAlive.ts",
    "line": 503,
    "code": "  const disposeAllEntries = () => {\n    ctx.effect?.dispose()\n    ctx.effect = null\n\n    const entries = new Set<CacheEntry>(ctx.cache.values())\n    const activeEntry = ctx.activeEntry\n    ctx.activeEntry = null\n",
    "kind": "完成",
    "note": "storage fragment、LRU Map、范围节点和组件实例全部清空，KeepAlive 生命周期结束",
    "watch": "effect、activeEntry、entries",
    "section": "KeepAlive 自身卸载",
    "originalStep": 10,
    "sectionStart": true,
    "definitionId": "fn-225"
  },
  {
    "title": "卸载 Hook 登记 disposeAllEntries",
    "file": "node_modules/@rue-js/runtime/src/components/KeepAlive.ts",
    "line": 624,
    "code": "  onBeforeUnmount(disposeAllEntries)\n\n  return vapor(() => {\n    prepareContainerForRender()\n    registerKeepAlivePropsUpdater(props, ctx.updateProps)\n    ctx.updateProps(props)\n    return ctx.container as any",
    "kind": "衔接代码",
    "note": "onBeforeUnmount(disposeAllEntries)",
    "section": "KeepAlive 自身卸载",
    "originalStep": 10,
    "sectionStart": false,
    "definitionId": "fn-215"
  }
]);
