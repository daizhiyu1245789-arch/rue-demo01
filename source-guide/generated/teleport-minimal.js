rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["teleport"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「Teleport 传送」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：setup 返回本地容器供组件树挂载，并在 onMounted() 中启动 watchEffect()，让 DOM 就绪后再应用传送状态执行后继续到「DOM 挂载后启动 watcher」。",
    "code": "function teleportStep001_teleportUseSetup(ctx) {\n  const value = ctx.run(\"Teleport() → useSetup()\")\n  ctx.next(\"DOM 挂载后启动 watcher\", value)\n  return value\n}",
    "watch": "手写时先盯住：container、targetStart、targetEnd、target。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「Teleport 传送」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：ctx.effect = watchEffect(执行后继续到「useSetup(factory)：在持久 Hook scope 调用 factory」。",
    "code": "function teleportStep002_dOMWatcher(ctx) {\n  const value = ctx.run(\"DOM 挂载后启动 watcher\")\n  ctx.next(\"useSetup(factory)：在持久 Hook scope 调用 factory\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「Teleport 传送」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：组件传入的 setup 箭头函数就是 factory。首次调用经 withHookSlot、runInPersistentHookScope、runUntracked(factory) 执行；后续读取缓存 slot.value。执行后继续到「onMounted() → watchEffect()」。",
    "code": "function teleportStep003_useSetupFactoryHookScope(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"onMounted() → watchEffect()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「Teleport 传送」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：onMounted 建立的 watcher 先读 propsSig；defer && !disabled 时调用 scheduleDeferredRender 并 return，其余情况先 cancelDeferredRender，再 applyTeleportState()。apply 内才按 disabled/target 分流。执行后继续到「defer 判断在 watcher，先于 applyTeleportState」。",
    "code": "function teleportStep004_onMountedWatchEffect(ctx) {\n  if (!ctx.match(\"onMounted() → watchEffect()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"defer 判断在 watcher，先于 applyTeleportState\", value)\n  return value\n}",
    "watch": "手写时先盯住：started、effect、propsSig.get()。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「Teleport 传送」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：if (curProps.defer执行后继续到「resolveTarget()」。",
    "code": "function teleportStep005_deferWatcherApplyTeleportState(ctx) {\n  const value = ctx.run(\"defer 判断在 watcher，先于 applyTeleportState\")\n  ctx.next(\"resolveTarget()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「Teleport 传送」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：resolveTarget 是 Teleport 状态应用时使用的目标解析器；组件入口先通过 useSetup() 创建持久 TeleportContext，后续 effect 才反复调用它执行后继续到「状态应用时才解析 target」。",
    "code": "function teleportStep006_resolveTarget(ctx) {\n  const value = ctx.run(\"resolveTarget()\")\n  ctx.next(\"状态应用时才解析 target\", value)\n  return value\n}",
    "watch": "手写时先盯住：to、document.querySelector(to)、nextTarget。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「Teleport 传送」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const nextTarget =执行后继续到「applyTeleportState(): disabled」。",
    "code": "function teleportStep007_target(ctx) {\n  const value = ctx.run(\"状态应用时才解析 target\")\n  ctx.next(\"applyTeleportState(): disabled\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「Teleport 传送」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：disabled 分支到此稳定；props 以后切回 enabled 时，同一个 effect 重跑并转入 applyTeleportState 的 enabled 分支执行后继续到「disabled 在本地调用 render」。",
    "code": "function teleportStep008_applyTeleportStateDisabled(ctx) {\n  const value = ctx.run(\"applyTeleportState(): disabled\")\n  ctx.next(\"disabled 在本地调用 render\", value)\n  return value\n}",
    "watch": "手写时先盯住：ctx.target、container、props.children。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「Teleport 传送」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：render(toRenderable(curProps.children)执行后继续到「applyTeleportState(): enabled」。",
    "code": "function teleportStep009_disabledRender(ctx) {\n  const value = ctx.run(\"disabled 在本地调用 render\")\n  ctx.next(\"applyTeleportState(): enabled\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「Teleport 传送」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：目标可用且不 defer 时，enabled 分支调用 ensureTargetAnchors()，随后用 renderTargetChildren()/renderBetween() 填充双锚点区间执行后继续到「enabled 调用 renderTargetChildren」。",
    "code": "function teleportStep010_applyTeleportStateEnabled(ctx) {\n  const value = ctx.run(\"applyTeleportState(): enabled\")\n  ctx.next(\"enabled 调用 renderTargetChildren\", value)\n  return value\n}",
    "watch": "手写时先盯住：nextTarget !== ctx.target、targetStart.parentNode。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「Teleport 传送」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：renderTargetChildren(ctx.target执行后继续到「ensureTargetAnchors() + renderTargetChildren()」。",
    "code": "function teleportStep011_enabledRenderTargetChildren(ctx) {\n  const value = ctx.run(\"enabled 调用 renderTargetChildren\")\n  ctx.next(\"ensureTargetAnchors() + renderTargetChildren()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「Teleport 传送」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：立即路径由 renderTargetChildren() → ensureTargetAnchors() → runOwned(() => renderBetween(...))。defer 由上层 watcher 在调用 applyTeleportState 之前分流到 scheduleDeferredRender()，并非 applyTeleportState 内部调用它。执行后继续到「runOwned → renderBetween 的实际调用」。",
    "code": "function teleportStep012_ensureTargetAnchorsRenderTargetChildren(ctx) {\n  if (!ctx.match(\"ensureTargetAnchors() + renderTargetChildren()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"runOwned → renderBetween 的实际调用\", value)\n  return value\n}",
    "watch": "手写时先盯住：block、hasContentBetween()、targetStart、targetEnd。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「Teleport 传送」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：renderBetween(toRenderable(children)执行后继续到「scheduleDeferredRender()」。",
    "code": "function teleportStep013_runOwnedRenderBetween(ctx) {\n  const value = ctx.run(\"runOwned → renderBetween 的实际调用\")\n  ctx.next(\"scheduleDeferredRender()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「Teleport 传送」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：微任务确认版本仍有效后再次调用 applyTeleportState()；组件卸载则由 onUnmounted() 取消版本、effect 和所有范围执行后继续到「微任务版本检查后 apply」。",
    "code": "function teleportStep014_scheduleDeferredRender(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"微任务版本检查后 apply\", value)\n  })\n}",
    "watch": "手写时先盯住：deferVersion、started。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「Teleport 传送」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：applyTeleportState(curProps)执行后继续到「onUnmounted()」。",
    "code": "function teleportStep015_apply(ctx) {\n  const value = ctx.run(\"微任务版本检查后 apply\")\n  ctx.next(\"onUnmounted()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「Teleport 传送」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：本地容器和目标双锚点之间的内容都被释放，Teleport 生命周期结束执行后回到本主题的外层调用者。",
    "code": "function teleportStep016_onUnmounted(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先盯住：effect、deferVersion、target。"
  }
};
