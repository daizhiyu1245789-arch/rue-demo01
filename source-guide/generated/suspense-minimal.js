rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["suspense"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：这是服务端提前返回的独立分支；客户端执行同一组件时不会走 shortcut，而是进入 Suspense() 的 useSetup() 初始化执行后继续到「Suspense() → useSetup()」。",
    "code": "function suspenseStep001_suspenseServerShortcut(ctx) {\n  if (!ctx.match(\"Suspense(): server shortcut\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"Suspense() → useSetup()\", value)\n  return value\n}",
    "watch": "手写时先盯住：isServerRendering()。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：setup 安装 watchEffect()；effect 把 children 传给 renderBetween()，但目标是隐藏 staging range，尚不直接显示执行后继续到「建立内容 effect，隐式订阅 retry」。",
    "code": "function suspenseStep002_suspenseUseSetup(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"建立内容 effect，隐式订阅 retry\", value)\n  })\n}",
    "watch": "手写时先盯住：status、generation、pendingThenables、contentRoot。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：ctx.effect = watchEffect(执行后继续到「useSetup(factory)：在持久 Hook scope 调用 factory」。",
    "code": "function suspenseStep003_effectRetry(ctx) {\n  const value = ctx.run(\"建立内容 effect，隐式订阅 retry\")\n  ctx.next(\"useSetup(factory)：在持久 Hook scope 调用 factory\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：组件传入的 setup 箭头函数就是 factory。首次调用经 withHookSlot、runInPersistentHookScope、runUntracked(factory) 执行；后续读取缓存 slot.value。执行后继续到「watchEffect() → renderBetween()」。",
    "code": "function suspenseStep004_useSetupFactoryHookScope(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"watchEffect() → renderBetween()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：渲染碰到 useComponent 懒组件时执行 loader()；未解决的 slot 保存 promise，并把 thenable 交给 Suspense 边界执行后继续到「withSuspenseBoundary → runOwned → renderBetween」。",
    "code": "function suspenseStep005_watchEffectRenderBetween(ctx, items) {\n  for (const item of items) {\n    ctx.runCurrentStep(item)\n  }\n  ctx.next(\"withSuspenseBoundary → runOwned → renderBetween\", items)\n  return items\n}",
    "watch": "手写时先盯住：contentMounted、retrySig、current boundary。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：withSuspenseBoundary(ctx.boundary执行后继续到「useComponent loader()」。",
    "code": "function suspenseStep006_withSuspenseBoundaryRunOwnedRenderBetween(ctx) {\n  const value = ctx.run(\"withSuspenseBoundary → runOwned → renderBetween\")\n  ctx.next(\"useComponent loader()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：promise 未完成时 useComponent 调用 registerSuspenseDependency(thenable)，寻找当前或 DOM 祖先中的 boundary执行后继续到「registerSuspenseDependency()」。",
    "code": "function suspenseStep007_useComponentLoader(ctx) {\n  const value = ctx.run(\"useComponent loader()\")\n  ctx.next(\"registerSuspenseDependency()\", value)\n  return value\n}",
    "watch": "手写时先盯住：loadId、slot.promise、component、err。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：找到边界后直接调用 boundary.register()；边界内部以 trackThenable() 去重并加入 pendingThenables执行后继续到「当前 boundary 的 register 调用处」。",
    "code": "function suspenseStep008_registerSuspenseDependency(ctx) {\n  const value = ctx.run(\"registerSuspenseDependency()\")\n  ctx.next(\"当前 boundary 的 register 调用处\", value)\n  return value\n}",
    "watch": "手写时先盯住：currentBoundary、pendingSuspenseCheck。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：currentBoundary.register(thenable)执行后继续到「boundary.register() / trackThenable()」。",
    "code": "function suspenseStep009_boundaryRegister(ctx) {\n  const value = ctx.run(\"当前 boundary 的 register 调用处\")\n  ctx.next(\"boundary.register() / trackThenable()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：pending 从 0 变为非零时调用 scheduleFallback()；依据 timeout 立即或定时进入 renderFallback()执行后继续到「registerParentDependency()」。",
    "code": "function suspenseStep010_boundaryRegisterTrackThenable(ctx) {\n  if (!ctx.match(\"boundary.register() / trackThenable()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"registerParentDependency()\", value)\n  return value\n}",
    "watch": "手写时先盯住：pendingThenables、status、generation。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：pending 时把同一个 thenable 交给父 boundary.register()，父边界跟随 Promise 自行 settle；卸载时当前 boundary 的 onBeforeUnmount 令 generation 失效并清理本地 effect、timer、pending 集合和两个范围。执行后继续到「卸载使 generation 失效」。",
    "code": "function suspenseStep011_registerParentDependency(ctx) {\n  const value = ctx.run(\"registerParentDependency()\")\n  ctx.next(\"卸载使 generation 失效\", value)\n  return value\n}",
    "watch": "手写时先盯住：parentBoundary、suspensible。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：onBeforeUnmount(() =>执行后继续到「scheduleFallback() / renderFallback()」。",
    "code": "function suspenseStep012_generation(ctx) {\n  const value = ctx.run(\"卸载使 generation 失效\")\n  ctx.next(\"scheduleFallback() / renderFallback()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：每个已跟踪 promise 的 settle handler 都会调用 triggerRetry()，移除该 thenable 并推动内容 effect 重跑执行后继续到「thenable settle 分别处理成功/失败」。",
    "code": "function suspenseStep013_scheduleFallbackRenderFallback(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"thenable settle 分别处理成功/失败\", value)\n  })\n}",
    "watch": "手写时先盯住：hadContent、fallbackTimer、timeout。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：Promise.resolve(thenable).then(执行后继续到「promise settle → triggerRetry()」。",
    "code": "function suspenseStep014_thenableSettle(ctx) {\n  const value = ctx.run(\"thenable settle 分别处理成功/失败\")\n  ctx.next(\"promise settle → triggerRetry()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：effect 重跑后若本轮不再产生 pending thenable，边界调用 scheduleShowContent()，等待同批微任务稳定再 showContent()执行后继续到「retry signal 驱动 effect，并安排 show」。",
    "code": "function suspenseStep015_promiseSettleTriggerRetry(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"retry signal 驱动 effect，并安排 show\", value)\n  })\n}",
    "watch": "手写时先盯住：ctx.generation、retrySig、pendingThenables。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：scheduleShowContent(curProps)执行后继续到「scheduleShowContent() / showContent()」。",
    "code": "function suspenseStep016_retrySignalEffectShow(ctx) {\n  const value = ctx.run(\"retry signal 驱动 effect，并安排 show\")\n  ctx.next(\"scheduleShowContent() / showContent()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "17": {
    "title": "17 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 17 步的最小手写版，只保留当前节点的核心动作。对应源码线索：scheduleShowContent() 经过两个微任务进入 showContent()；只有 active、generation 相同且 pending 为空才显示。下一阅读步骤的 registerParentDependency() 实际发生在更早的 boundary.register/捕获 thenable 阶段，不是 showContent 完成后调用。执行后继续到「showContent 的真正调用处（双微任务）」。",
    "code": "function suspenseStep017_scheduleShowContentShowContent(ctx) {\n  const value = ctx.run(\"scheduleShowContent() / showContent()\")\n  ctx.next(\"showContent 的真正调用处（双微任务）\", value)\n  return value\n}",
    "watch": "手写时先盯住：contentVisible、contentNodes、status。"
  },
  "18": {
    "title": "18 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 18 步的最小手写版，只保留当前节点的核心动作。对应源码线索：showContent(curProps, generation)执行后继续到「父依赖注册在 pending 时，不在显示之后」。",
    "code": "function suspenseStep018_showContent(ctx) {\n  const value = ctx.run(\"showContent 的真正调用处（双微任务）\")\n  ctx.next(\"父依赖注册在 pending 时，不在显示之后\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "19": {
    "title": "19 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 19 步的最小手写版，只保留当前节点的核心动作。对应源码线索：registerParentDependency(thenable, curProps)执行后继续到「onBeforeUnmount()」。",
    "code": "function suspenseStep019_pending(ctx) {\n  const value = ctx.run(\"父依赖注册在 pending 时，不在显示之后\")\n  ctx.next(\"onBeforeUnmount()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "20": {
    "title": "20 · 最小实现",
    "intro": "这是「Suspense 异步边界」第 20 步的最小手写版，只保留当前节点的核心动作。对应源码线索：卸载清空当前边界的 pending 集合与 DOM 范围，迟到回调因 active/generation 检查而失效；不会取消原始 Promise。父边界已经登记的同一 thenable 仍由父级自己的 settle handler 处理。执行后回到本主题的外层调用者。",
    "code": "function suspenseStep020_onBeforeUnmount(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先盯住：active、generation、fallbackTimer、contentRoot。"
  }
};
