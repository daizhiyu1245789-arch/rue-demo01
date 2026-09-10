rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["transition"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「Transition 过渡」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：setup 在 onMounted() 中启动 watchEffect()；children 或 identity 变化时 effect 选择 appear、enter、leave 或替换流程执行后继续到「onMounted 中建立 watcher」。",
    "code": "function transitionStep001_transitionUseSetup(ctx) {\n  const value = ctx.run(\"Transition() → useSetup()\")\n  ctx.next(\"onMounted 中建立 watcher\", value)\n  return value\n}",
    "watch": "手写时先盯住：firstRender、activePhases、snapshots、renderVersion。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「Transition 过渡」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：ctx.effect = watchEffect(执行后继续到「useSetup(factory)：在持久 Hook scope 调用 factory」。",
    "code": "function transitionStep002_onMountedWatcher(ctx) {\n  const value = ctx.run(\"onMounted 中建立 watcher\")\n  ctx.next(\"useSetup(factory)：在持久 Hook scope 调用 factory\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「Transition 过渡」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：组件传入的 setup 箭头函数就是 factory。首次调用经 withHookSlot、runInPersistentHookScope、runUntracked(factory) 执行；后续读取缓存 slot.value。执行后继续到「onMounted() → watchEffect()」。",
    "code": "function transitionStep003_useSetupFactoryHookScope(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"onMounted() → watchEffect()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「Transition 过渡」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：需要显示新 child 时先调用 renderTransition() patch 真实树并取得第一个 Element，随后才安排动画执行后继续到「首次进入分支 renderChild → queueEnter」。",
    "code": "function transitionStep004_onMountedWatchEffect(ctx) {\n  if (!ctx.match(\"onMounted() → watchEffect()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"首次进入分支 renderChild → queueEnter\", value)\n  return value\n}",
    "watch": "手写时先盯住：prevShown、childChanged、renderVersion。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「Transition 过渡」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：if (!prevShown)执行后继续到「resolve child / identity」。",
    "code": "function transitionStep005_renderChildQueueEnter(ctx) {\n  const value = ctx.run(\"首次进入分支 renderChild → queueEnter\")\n  ctx.next(\"resolve child / identity\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「Transition 过渡」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：身份解析由 Transition effect 每轮使用；组件入口先通过 useSetup() 创建跨轮次保存的范围、phase 和 snapshot 状态执行后继续到「effect 里解析 child 和 identity」。",
    "code": "function transitionStep006_resolveChildIdentity(ctx) {\n  const value = ctx.run(\"resolve child / identity\")\n  ctx.next(\"effect 里解析 child 和 identity\", value)\n  return value\n}",
    "watch": "手写时先盯住：currentIdentity、nextIdentity、child。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「Transition 过渡」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const nextIdentity =执行后继续到「renderTransition()」。",
    "code": "function transitionStep007_effectChildIdentity(ctx) {\n  const value = ctx.run(\"effect 里解析 child 和 identity\")\n  ctx.next(\"renderTransition()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「Transition 过渡」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：新 Element 就位后，trackPhase()/queueEnter() 登记可取消的 enter phase，并在微任务中确认版本仍有效执行后继续到「renderChild 包装 renderTransition」。",
    "code": "function transitionStep008_renderTransition(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"renderChild 包装 renderTransition\", value)\n  return value\n}",
    "watch": "手写时先盯住：startEl、endEl、firstElementBetween。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「Transition 过渡」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const renderChild =执行后继续到「trackPhase() / queueEnter()」。",
    "code": "function transitionStep009_renderChildRenderTransition(ctx) {\n  const value = ctx.run(\"renderChild 包装 renderTransition\")\n  ctx.next(\"trackPhase() / queueEnter()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「Transition 过渡」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：微任务启动时调用 createTransitionRunner().runPhase()，由 runner 实际切换 CSS class、帧和结束监听执行后继续到「queueEnter → trackPhase → runEnter」。",
    "code": "function transitionStep010_trackPhaseQueueEnter(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"queueEnter → trackPhase → runEnter\", value)\n  return value\n}",
    "watch": "手写时先盯住：activePhases、version、onDone。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「Transition 过渡」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：trackPhase(done => runEnter执行后继续到「createTransitionRunner().runPhase()」。",
    "code": "function transitionStep011_queueEnterTrackPhaseRunEnter(ctx) {\n  const value = ctx.run(\"queueEnter → trackPhase → runEnter\")\n  ctx.next(\"createTransitionRunner().runPhase()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「Transition 过渡」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：单次 enter/leave runner 返回控制句柄；发生身份替换且 mode 为默认时，Transition 进入新 live DOM 与旧 snapshot leave 并发分支执行后继续到「替换时按 mode 分流」。",
    "code": "function transitionStep012_createTransitionRunnerRunPhase(ctx) {\n  if (!ctx.match(\"createTransitionRunner().runPhase()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"替换时按 mode 分流\", value)\n  return value\n}",
    "watch": "手写时先盯住：cls、css、timeout、userHook、stopEnd。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「Transition 过渡」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：} else if (childChanged)执行后继续到「concurrent enter + snapshot leave」。",
    "code": "function transitionStep013_mode(ctx) {\n  const value = ctx.run(\"替换时按 mode 分流\")\n  ctx.next(\"concurrent enter + snapshot leave\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「Transition 过渡」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：默认并发分支到此运行；mode=out-in 或 in-out 时改走下一步的时序分支，两者不是在并发分支后继续调用执行后继续到「默认并发 leaveSnapshot / queueEnter」。",
    "code": "function transitionStep014_concurrentEnterSnapshotLeave(ctx) {\n  if (!ctx.match(\"concurrent enter + snapshot leave\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"默认并发 leaveSnapshot / queueEnter\", value)\n  return value\n}",
    "watch": "手写时先盯住：leavingSnapshot、enteringEl。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「Transition 过渡」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const leavingSnapshot = swapToSnapshot(leavingEl)执行后继续到「out-in / in-out branches」。",
    "code": "function transitionStep015_leaveSnapshotQueueEnter(ctx) {\n  const value = ctx.run(\"默认并发 leaveSnapshot / queueEnter\")\n  ctx.next(\"out-in / in-out branches\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「Transition 过渡」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：任一分支完成会删除 snapshot 和 phase；新一轮变化或组件卸载时统一调用 cancelActiveTransitions() 防止旧回调生效执行后继续到「out-in 的 leave 完成回调才 renderChild」。",
    "code": "function transitionStep016_outInInOut(ctx) {\n  const value = ctx.run(\"out-in / in-out branches\")\n  ctx.next(\"out-in 的 leave 完成回调才 renderChild\", value)\n  return value\n}",
    "watch": "手写时先盯住：mode、renderVersion、leavingSnapshot。"
  },
  "17": {
    "title": "17 · 最小实现",
    "intro": "这是「Transition 过渡」第 17 步的最小手写版，只保留当前节点的核心动作。对应源码线索：leaveSnapshot(leavingSnapshot, () =>执行后继续到「in-out 的 enter 完成后才 leave」。",
    "code": "function transitionStep017_outInLeaveRenderChild(ctx) {\n  const value = ctx.run(\"out-in 的 leave 完成回调才 renderChild\")\n  ctx.next(\"in-out 的 enter 完成后才 leave\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "18": {
    "title": "18 · 最小实现",
    "intro": "这是「Transition 过渡」第 18 步的最小手写版，只保留当前节点的核心动作。对应源码线索：leaveSnapshot(leavingSnapshot)执行后继续到「cancelActiveTransitions() / onUnmounted()」。",
    "code": "function transitionStep018_inOutEnterLeave(ctx) {\n  const value = ctx.run(\"in-out 的 enter 完成后才 leave\")\n  ctx.next(\"cancelActiveTransitions() / onUnmounted()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "19": {
    "title": "19 · 最小实现",
    "intro": "这是「Transition 过渡」第 19 步的最小手写版，只保留当前节点的核心动作。对应源码线索：版本令牌使迟到的 frame/transitionend 失效，所有克隆节点和 listener 被释放，Transition 流程结束执行后继续到「卸载使旧回调和动画失效」。",
    "code": "function transitionStep019_cancelActiveTransitionsOnUnmounted(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"卸载使旧回调和动画失效\", value)\n  return value\n}",
    "watch": "手写时先盯住：activePhases、snapshots、effect。"
  },
  "20": {
    "title": "20 · 最小实现",
    "intro": "这是「Transition 过渡」第 20 步的最小手写版，只保留当前节点的核心动作。对应源码线索：onUnmounted(() =>执行后回到本主题的外层调用者。",
    "code": "function transitionStep020(ctx) {\n  const value = ctx.run(\"卸载使旧回调和动画失效\")\n  ctx.next(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  }
};
