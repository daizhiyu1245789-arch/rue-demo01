rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["cleanup"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「卸载与清理」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：useApp.unmount() 把 () => appRue.unmount(mountedContainer) 作为 runner 传给 runWithClientRuntime()执行后继续到「卸载 runner 在 useApp 中定义」。",
    "code": "function cleanupStep001_useAppUnmount(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"卸载 runner 在 useApp 中定义\", value)\n  return value\n}",
    "watch": "手写时先盯住：mountedContainer、containerRef。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「卸载与清理」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：appRue.unmount(mountedContainer)执行后继续到「runWithClientRuntime()」。",
    "code": "function cleanupStep002_runnerUseApp(ctx) {\n  const value = ctx.run(\"卸载 runner 在 useApp 中定义\")\n  ctx.next(\"runWithClientRuntime()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「卸载与清理」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：上下文入栈后直接执行 runner()；appRue.unmount 就是当前 JavaScript runtime 的 unmount 方法执行后继续到「执行传入 runner」。",
    "code": "function cleanupStep003_runWithClientRuntime(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"执行传入 runner\", value)\n  return value\n}",
    "watch": "手写时先盯住：runtime、container、bridge。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「卸载与清理」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：return runner()执行后继续到「runWithRuntime(runtime, contextRunner)」。",
    "code": "function cleanupStep004_runner(ctx) {\n  const value = ctx.run(\"执行传入 runner\")\n  ctx.next(\"runWithRuntime(runtime, contextRunner)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「卸载与清理」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：当前 runner 是容器包装回调；容器包装回调再执行 useApp 的卸载箭头函数。执行后继续到「runtime.unmount()」。",
    "code": "function cleanupStep005_runWithRuntimeRuntimeContextRunner(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"runtime.unmount()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「卸载与清理」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：runtime.unmount(container) 调用 appController.unmount(container, disposeCallback)。dispose 是第二个参数，回调里依次 before_unmount → dropRenderEntriesWithin → unmountContainer → 全局 unmounted，没有 runRenderEntry 包装。执行后继续到「dispose 是第二个参数」。",
    "code": "function cleanupStep006_runtimeUnmount(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"dispose 是第二个参数\", value)\n  return value\n}",
    "watch": "手写时先盯住：container、state.containerMounts。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「卸载与清理」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：return appController.unmount(container, () =>执行后继续到「appController.unmount()」。",
    "code": "function cleanupStep007_dispose(ctx) {\n  const value = ctx.run(\"dispose 是第二个参数\")\n  ctx.next(\"appController.unmount()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「卸载与清理」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：appController 在 withCurrentContainer() 中执行传入的 dispose()；dispose 函数体第一步调用全局 before_unmount执行后继续到「在容器上下文直接执行 dispose」。",
    "code": "function cleanupStep008_appControllerUnmount(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"在容器上下文直接执行 dispose\", value)\n  return value\n}",
    "watch": "手写时先盯住：transaction、transaction.status。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「卸载与清理」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：return withCurrentContainer(container, dispose)执行后继续到「withCurrentContainer(container, dispose)」。",
    "code": "function cleanupStep009_dispose(ctx) {\n  const value = ctx.run(\"在容器上下文直接执行 dispose\")\n  ctx.next(\"withCurrentContainer(container, dispose)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「卸载与清理」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：把当前容器切换为 container，执行传入的 dispose，再恢复容器。执行后继续到「lifecycle.callGlobal('before_unmount')」。",
    "code": "function cleanupStep010_withCurrentContainerContainerDispose(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"lifecycle.callGlobal('before_unmount')\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「卸载与清理」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：全局 before_unmount 返回后，dispose 回调直接执行 dropRenderEntriesWithin(state, container)。这里没有 renderDepth / runRenderEntry 这一层。执行后继续到「before_unmount 后直接清理范围」。",
    "code": "function cleanupStep011_lifecycleCallGlobalBeforeUnmount(ctx) {\n  const value = ctx.run(\"lifecycle.callGlobal('before_unmount')\")\n  ctx.next(\"before_unmount 后直接清理范围\", value)\n  return value\n}",
    "watch": "手写时先盯住：globalHooks。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「卸载与清理」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：dropRenderEntriesWithin(state, container)执行后继续到「dropRenderEntriesWithin()」。",
    "code": "function cleanupStep012_beforeUnmount(ctx) {\n  const value = ctx.run(\"before_unmount 后直接清理范围\")\n  ctx.next(\"dropRenderEntriesWithin()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「卸载与清理」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：dropRenderEntriesWithin 遍历 anchor/range 记录并 dispose；返回 runtime.unmount 的 dispose 回调后，下一行直接调用 unmountContainer(state, container)。执行后继续到「范围清理之后直接 unmountContainer」。",
    "code": "function cleanupStep013_dropRenderEntriesWithin(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"范围清理之后直接 unmountContainer\", value)\n  return value\n}",
    "watch": "手写时先盯住：state.anchorMounts、state.rangeMounts、entry.mounted。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「卸载与清理」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：unmountContainer(state, container)执行后继续到「unmountContainer()」。",
    "code": "function cleanupStep014_unmountContainer(ctx) {\n  const value = ctx.run(\"范围清理之后直接 unmountContainer\")\n  ctx.next(\"unmountContainer()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「卸载与清理」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：clearContainer() 在清空 innerHTML 前先取得 containerMounts 中的根记录并调用 componentRecord.dispose() 递归释放组件树执行后继续到「clearContainer 先 dispose 根 mounted」。",
    "code": "function cleanupStep015_unmountContainer(ctx) {\n  const value = ctx.run(\"unmountContainer()\")\n  ctx.next(\"clearContainer 先 dispose 根 mounted\", value)\n  return value\n}",
    "watch": "手写时先盯住：state.containerMounts.get(container)。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「卸载与清理」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：state.containerMounts.get(container)?.dispose?.()执行后继续到「clearContainer(host, state, container)」。",
    "code": "function cleanupStep016_clearContainerDisposeMounted(ctx) {\n  const value = ctx.run(\"clearContainer 先 dispose 根 mounted\")\n  ctx.next(\"clearContainer(host, state, container)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "17": {
    "title": "17 · 最小实现",
    "intro": "这是「卸载与清理」第 17 步的最小手写版，只保留当前节点的核心动作。对应源码线索：先取根 mounted record 并 dispose，再清空 DOM、删除 containerMounts。执行后继续到「componentRecord.dispose()」。",
    "code": "function cleanupStep017_clearContainerHostStateContainer(ctx) {\n  const value = ctx.run(\"clearContainer(host, state, container)\")\n  ctx.next(\"componentRecord.dispose()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "18": {
    "title": "18 · 最小实现",
    "intro": "这是「卸载与清理」第 18 步的最小手写版，只保留当前节点的核心动作。对应源码线索：dispose() 有幂等保护；确认首次执行后，第一项是 renderEffect.dispose()，阻止卸载期间再发生重渲染执行后继续到「renderEffect.dispose()」。",
    "code": "function cleanupStep018_componentRecordDispose(ctx) {\n  const value = ctx.run(\"componentRecord.dispose()\")\n  ctx.next(\"renderEffect.dispose()\", value)\n  return value\n}",
    "watch": "手写时先盯住：disposed、renderEffect、instance、subtree。"
  },
  "19": {
    "title": "19 · 最小实现",
    "intro": "这是「卸载与清理」第 19 步的最小手写版，只保留当前节点的核心动作。对应源码线索：渲染 effect 停止后，componentRecord.dispose() 同步调用 lifecycle.call(before_unmount)，此时 DOM 和子树仍存在执行后继续到「停止 effect 后调用 before_unmount」。",
    "code": "function cleanupStep019_renderEffectDispose(ctx) {\n  const value = ctx.run(\"renderEffect.dispose()\")\n  ctx.next(\"停止 effect 后调用 before_unmount\", value)\n  return value\n}",
    "watch": "手写时先盯住：renderEffect、effect id。"
  },
  "20": {
    "title": "20 · 最小实现",
    "intro": "这是「卸载与清理」第 20 步的最小手写版，只保留当前节点的核心动作。对应源码线索：state.lifecycle.call(instance.host, 'before_unmount')执行后继续到「lifecycle.call('before_unmount')」。",
    "code": "function cleanupStep020_effectBeforeUnmount(ctx) {\n  const value = ctx.run(\"停止 effect 后调用 before_unmount\")\n  ctx.next(\"lifecycle.call('before_unmount')\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "21": {
    "title": "21 · 最小实现",
    "intro": "这是「卸载与清理」第 21 步的最小手写版，只保留当前节点的核心动作。对应源码线索：父 before_unmount 回调完成后，dispose() 调用 components.disposeScope(instance) 清理该实例拥有的 Hook effects 和 cleanup执行后继续到「Hook 后 disposeScope」。",
    "code": "function cleanupStep021_lifecycleCallBeforeUnmount(ctx) {\n  const value = ctx.run(\"lifecycle.call('before_unmount')\")\n  ctx.next(\"Hook 后 disposeScope\", value)\n  return value\n}",
    "watch": "手写时先盯住：instance.host、生命周期 Hook Map。"
  },
  "22": {
    "title": "22 · 最小实现",
    "intro": "这是「卸载与清理」第 22 步的最小手写版，只保留当前节点的核心动作。对应源码线索：state.components.disposeScope(instance)执行后继续到「components.disposeScope()」。",
    "code": "function cleanupStep022_hookDisposeScope(ctx) {\n  const value = ctx.run(\"Hook 后 disposeScope\")\n  ctx.next(\"components.disposeScope()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "23": {
    "title": "23 · 最小实现",
    "intro": "这是「卸载与清理」第 23 步的最小手写版，只保留当前节点的核心动作。对应源码线索：实例 Hook scope 标记并释放后，父记录继续调用 subtree.dispose()，把清理递归传向已挂载子树执行后继续到「subtree.dispose()」。",
    "code": "function cleanupStep023_componentsDisposeScope(ctx, items) {\n  for (const item of items) {\n    ctx.runCurrentStep(item)\n  }\n  ctx.next(\"subtree.dispose()\", items)\n  return items\n}",
    "watch": "手写时先盯住：hookScopeDisposed、disposeHooks。"
  },
  "24": {
    "title": "24 · 最小实现",
    "intro": "这是「卸载与清理」第 24 步的最小手写版，只保留当前节点的核心动作。对应源码线索：若子树是 vapor mounted record，递归会命中 mountVapor() 返回对象上的 dispose()，清 cleanup bucket 和 effect scope执行后继续到「Vapor 子树销毁入口」。",
    "code": "function cleanupStep024_subtreeDispose(ctx) {\n  if (!ctx.match(\"subtree.dispose()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"Vapor 子树销毁入口\", value)\n  return value\n}",
    "watch": "手写时先盯住：this.subtree、cleanupBucket、effectScopeId。"
  },
  "25": {
    "title": "25 · 最小实现",
    "intro": "这是「卸载与清理」第 25 步的最小手写版，只保留当前节点的核心动作。对应源码线索：disposeVaporResources(state, cleanupBucket, effectScopeId)执行后继续到「mountVapor().dispose()」。",
    "code": "function cleanupStep025_vapor(ctx) {\n  const value = ctx.run(\"Vapor 子树销毁入口\")\n  ctx.next(\"mountVapor().dispose()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "26": {
    "title": "26 · 最小实现",
    "intro": "这是「卸载与清理」第 26 步的最小手写版，只保留当前节点的核心动作。对应源码线索：子树全部 dispose 返回父 componentRecord 后，父级调用 unmounted，再用 components.release() 删除实例和 host 映射执行后继续到「子树返回后调用父 unmounted」。",
    "code": "function cleanupStep026_mountVaporDispose(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"子树返回后调用父 unmounted\", value)\n  return value\n}",
    "watch": "手写时先盯住：disposed、renderEntryRoots、cleanupBucket、effectScopeId。"
  },
  "27": {
    "title": "27 · 最小实现",
    "intro": "这是「卸载与清理」第 27 步的最小手写版，只保留当前节点的核心动作。对应源码线索：state.lifecycle.call(instance.host, 'unmounted')执行后继续到「disposeVaporResources → cleanup + disposeEffectScope」。",
    "code": "function cleanupStep027_unmounted(ctx) {\n  const value = ctx.run(\"子树返回后调用父 unmounted\")\n  ctx.next(\"disposeVaporResources → cleanup + disposeEffectScope\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "28": {
    "title": "28 · 最小实现",
    "intro": "这是「卸载与清理」第 28 步的最小手写版，只保留当前节点的核心动作。对应源码线索：先 invokeCleanupBucket；scopeId 存在时才释放 effect scope，并从集合删除。执行后继续到「unmounted → components.release()」。",
    "code": "function cleanupStep028_disposeVaporResourcesCleanupDisposeEffectScope(ctx) {\n  const value = ctx.run(\"disposeVaporResources → cleanup + disposeEffectScope\")\n  ctx.next(\"unmounted → components.release()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "29": {
    "title": "29 · 最小实现",
    "intro": "这是「卸载与清理」第 29 步的最小手写版，只保留当前节点的核心动作。对应源码线索：根记录递归释放完成后回到 clearContainer()，清空 HTML/containerMounts；再回到 appController finally 释放 appMount 事务执行后继续到「应用 unmounted 在根卸载之后」。",
    "code": "function cleanupStep029_unmountedComponentsRelease(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"应用 unmounted 在根卸载之后\", value)\n  return value\n}",
    "watch": "手写时先盯住：instances、instancesByHost、isMounted。"
  },
  "30": {
    "title": "30 · 最小实现",
    "intro": "这是「卸载与清理」第 30 步的最小手写版，只保留当前节点的核心动作。对应源码线索：lifecycle.callGlobal('unmounted')执行后继续到「clearContainer() + releaseAppMount()」。",
    "code": "function cleanupStep030_unmounted(ctx) {\n  const value = ctx.run(\"应用 unmounted 在根卸载之后\")\n  ctx.next(\"clearContainer() + releaseAppMount()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "31": {
    "title": "31 · 最小实现",
    "intro": "这是「卸载与清理」第 31 步的最小手写版，只保留当前节点的核心动作。对应源码线索：清空 containerMounts 后返回 runtime.unmount 回调执行全局 unmounted，再到 appController.unmount 的 finally。仅 transaction.owner===state 且 status!=failed 才 releaseAppMount；失败事务会保留。之后可选的 runtime.free() 是独立入口。执行后继续到「释放事务有 owner 与 failed 条件」。",
    "code": "function cleanupStep031_clearContainerReleaseAppMount(ctx) {\n  if (!ctx.match(\"clearContainer() + releaseAppMount()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"释放事务有 owner 与 failed 条件\", value)\n  return value\n}",
    "watch": "手写时先盯住：container.innerHTML、containerMounts、appMounts。"
  },
  "32": {
    "title": "32 · 最小实现",
    "intro": "这是「卸载与清理」第 32 步的最小手写版，只保留当前节点的核心动作。对应源码线索：transaction?.owner === state && transaction.status !== 'failed'执行后继续到「runWithClientRuntime finally → popCurrentContainer」。",
    "code": "function cleanupStep032_ownerFailed(ctx) {\n  const value = ctx.run(\"释放事务有 owner 与 failed 条件\")\n  ctx.next(\"runWithClientRuntime finally → popCurrentContainer\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "33": {
    "title": "33 · 最小实现",
    "intro": "这是「卸载与清理」第 33 步的最小手写版，只保留当前节点的核心动作。对应源码线索：返回 runWithRuntime 后恢复 __rue_active，再回 useApp.unmount 的 finally 释放容器归属。执行后继续到「runtime.free()」。",
    "code": "function cleanupStep033_runWithClientRuntimeFinallyPopCurrentContainer(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"runtime.free()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "34": {
    "title": "34 · 最小实现",
    "intro": "这是「卸载与清理」第 34 步的最小手写版，只保留当前节点的核心动作。对应源码线索：free() 走全 runtime 清理路径；下一步 bridge.disposeComponent() 是源码核验点，不是当前发布版已确认由 free/unmount 直接调用的下一层执行后继续到「free 清理范围及记录（并列生命周期入口）」。",
    "code": "function cleanupStep034_runtimeFree(ctx) {\n  const value = ctx.run(\"runtime.free()\")\n  ctx.next(\"free 清理范围及记录（并列生命周期入口）\", value)\n  return value\n}",
    "watch": "手写时先盯住：state.disposed、effectScopeIds、components、ownedMounts。"
  },
  "35": {
    "title": "35 · 最小实现",
    "intro": "这是「卸载与清理」第 35 步的最小手写版，只保留当前节点的核心动作。对应源码线索：free() {执行后继续到「bridge.disposeComponent()」。",
    "code": "function cleanupStep035_free(ctx) {\n  const value = ctx.run(\"free 清理范围及记录（并列生命周期入口）\")\n  ctx.next(\"bridge.disposeComponent()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "36": {
    "title": "36 · 最小实现",
    "intro": "这是「卸载与清理」第 36 步的最小手写版，只保留当前节点的核心动作。对应源码线索：当前 dist 只确认该桥方法存在，未确认 componentRecord.dispose() 对它的调用边；应以断点和 effectScopeCount 实测，不能把它画成确定调用链执行后回到本主题的外层调用者。",
    "code": "function cleanupStep036_bridgeDisposeComponent(ctx) {\n  const value = ctx.run(\"bridge.disposeComponent()\")\n  ctx.next(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先盯住：__rue_shared_render_scope_id、effectScopeCount()。"
  }
};
