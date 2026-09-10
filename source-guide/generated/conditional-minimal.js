rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["conditional"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「条件渲染」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：锚点被 append 到父节点并由 effect 闭包长期持有；分支首次求值或变化时作为第三个参数传入 renderAnchor()执行后继续到「分支值提交给公共 renderAnchor」。",
    "code": "function conditionalStep001_createComment(ctx) {\n  const value = ctx.run(\"createComment()\")\n  ctx.next(\"分支值提交给公共 renderAnchor\", value)\n  return value\n}",
    "watch": "手写时先盯住：anchor.parentNode、anchor.previousSibling。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「条件渲染」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：export const renderAnchor =执行后继续到「condition effect」。",
    "code": "function conditionalStep002_renderAnchor(ctx) {\n  const value = ctx.run(\"分支值提交给公共 renderAnchor\")\n  ctx.next(\"condition effect\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「条件渲染」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：生成代码初始化时先调用 createComment() 建立稳定锚点；effect 每次求出 next 后，才以同一个 anchor 调用 renderAnchor()执行后继续到「创建稳定 comment anchor」。",
    "code": "function conditionalStep003_conditionEffect(ctx) {\n  const input = ctx.input\n  const output = ctx.runOutsideJavaScript(input)\n  ctx.next(\"创建稳定 comment anchor\", output)\n  return output\n}",
    "watch": "手写时先盯住：condition、anchor、next branch handle。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「条件渲染」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：export const createComment =执行后继续到「renderAnchor()」。",
    "code": "function conditionalStep004_commentAnchor(ctx) {\n  const value = ctx.run(\"创建稳定 comment anchor\")\n  ctx.next(\"renderAnchor()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「条件渲染」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：公共 renderAnchor() 只负责隔离额外依赖收集，然后在 untrack 回调里直接调用 renderAnchorUntracked()执行后继续到「reactiveUntrack 中进入内部函数」。",
    "code": "function conditionalStep005_renderAnchor(ctx) {\n  const value = ctx.run(\"renderAnchor()\")\n  ctx.next(\"reactiveUntrack 中进入内部函数\", value)\n  return value\n}",
    "watch": "手写时先盯住：value、parent、anchor。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「条件渲染」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：reactiveUntrack(() => renderAnchorUntracked执行后继续到「untrack 回调 → renderAnchorUntracked」。",
    "code": "function conditionalStep006_reactiveUntrack(ctx) {\n  const value = ctx.run(\"reactiveUntrack 中进入内部函数\")\n  ctx.next(\"untrack 回调 → renderAnchorUntracked\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「条件渲染」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：传入的回调在隔离依赖收集期间执行；下面进入实际 anchor 逻辑。执行后继续到「renderAnchorUntracked()」。",
    "code": "function conditionalStep007_untrackRenderAnchorUntracked(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"renderAnchorUntracked()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「条件渲染」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：先 withRenderEntryGuard()、adaptRenderableForBackend() 和 owner/key 判断。等价组件可跳过，KeepAlive 可只更新 props；可保留分支直接 renderOwnedAnchorMount() 交底层 patch。只有需要重挂载等分支才进入下一步的 clearOwnedAnchorNodes()。执行后继续到「可复用 handle 直接 return」。",
    "code": "function conditionalStep008_renderAnchorUntracked(ctx) {\n  if (!ctx.match(\"renderAnchorUntracked()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"可复用 handle 直接 return\", value)\n  return value\n}",
    "watch": "手写时先盯住：normalizedValue、prevOwner、lastMountHandleValue。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「条件渲染」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：if (shouldSkipComponentHandleRender)执行后继续到「可保留的分支直接渲染/patch」。",
    "code": "function conditionalStep009_handleReturn(ctx) {\n  const value = ctx.run(\"可复用 handle 直接 return\")\n  ctx.next(\"可保留的分支直接渲染/patch\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「条件渲染」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：if (!shouldRemountComponentChildren)执行后继续到「clearOwnedAnchorNodes()」。",
    "code": "function conditionalStep010_patch(ctx) {\n  const value = ctx.run(\"可保留的分支直接渲染/patch\")\n  ctx.next(\"clearOwnedAnchorNodes()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「条件渲染」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：Rue 自己追踪的节点移除后，再调用底层 anchorRuntime.renderAnchor(null, ...) 释放对应 mounted record 与 scope执行后继续到「强制重挂载的清理调用」。",
    "code": "function conditionalStep011_clearOwnedAnchorNodes(ctx) {\n  const value = ctx.run(\"clearOwnedAnchorNodes()\")\n  ctx.next(\"强制重挂载的清理调用\", value)\n  return value\n}",
    "watch": "手写时先盯住：mountedNodesByAnchor、ownedNodes。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「条件渲染」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：clearOwnedAnchorNodes(targetParent, anchor)执行后继续到「anchorRuntime.renderAnchor(null)」。",
    "code": "function conditionalStep012(ctx) {\n  const value = ctx.run(\"强制重挂载的清理调用\")\n  ctx.next(\"anchorRuntime.renderAnchor(null)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「条件渲染」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：旧 handle 清空后，非空 next 会交给 renderOwnedAnchorMount()，在同一锚点前挂载并登记新节点所有权执行后继续到「renderOwnedAnchorMount()」。",
    "code": "function conditionalStep013_anchorRuntimeRenderAnchorNull(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"renderOwnedAnchorMount()\", value)\n  return value\n}",
    "watch": "手写时先盯住：mountHandleOwnerByAnchor、runtimeByAnchor。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「条件渲染」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：renderOwnedAnchorMount() → runWithRuntime(runtime, runner) → runtime.renderAnchor() → withCurrentContainer() → recordInput()/normalizeMountInput() → runRenderEntry() → 底层 render/anchor.js。包装器比较前后节点，保存 owned nodes；下轮据此清理或复用。执行后继续到「包装器把输入转交 runtime.renderAnchor」。",
    "code": "function conditionalStep014_renderOwnedAnchorMount(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"包装器把输入转交 runtime.renderAnchor\", value)\n  return value\n}",
    "watch": "手写时先盯住：before、after、added、mountedNodesByAnchor。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「条件渲染」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const result = runtime.renderAnchor(value, parent, anchor)执行后继续到「runtime 规范化并进入底层 anchor renderer」。",
    "code": "function conditionalStep015_runtimeRenderAnchor(ctx) {\n  const value = ctx.run(\"包装器把输入转交 runtime.renderAnchor\")\n  ctx.next(\"runtime 规范化并进入底层 anchor renderer\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「条件渲染」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：runRenderEntry(() => renderAnchor(执行后继续到「runWithRuntime(runtime, runner)」。",
    "code": "function conditionalStep016_runtimeAnchorRenderer(ctx) {\n  const value = ctx.run(\"runtime 规范化并进入底层 anchor renderer\")\n  ctx.next(\"runWithRuntime(runtime, runner)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "17": {
    "title": "17 · 最小实现",
    "intro": "这是「条件渲染」第 17 步的最小手写版，只保留当前节点的核心动作。对应源码线索：切换活动 runtime → runner() → finally 恢复。执行后继续到「runtime.renderAnchor 包装入口」。",
    "code": "function conditionalStep017_runWithRuntimeRuntimeRunner(ctx) {\n  const value = ctx.run(\"runWithRuntime(runtime, runner)\")\n  ctx.next(\"runtime.renderAnchor 包装入口\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "18": {
    "title": "18 · 最小实现",
    "intro": "这是「条件渲染」第 18 步的最小手写版，只保留当前节点的核心动作。对应源码线索：Reflect.apply(original, this, args) 进入原始 runtime.renderAnchor。执行后继续到「原始 runtime.renderAnchor」。",
    "code": "function conditionalStep018_runtimeRenderAnchor(ctx) {\n  const value = ctx.run(\"runtime.renderAnchor 包装入口\")\n  ctx.next(\"原始 runtime.renderAnchor\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "19": {
    "title": "19 · 最小实现",
    "intro": "这是「条件渲染」第 19 步的最小手写版，只保留当前节点的核心动作。对应源码线索：容器上下文内 recordInput，再 runRenderEntry 调底层 anchor renderer。执行后回到本主题的外层调用者。",
    "code": "function conditionalStep019_runtimeRenderAnchor(ctx) {\n  const value = ctx.run(\"原始 runtime.renderAnchor\")\n  ctx.next(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  }
};
