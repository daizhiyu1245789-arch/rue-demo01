rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["componentPatch"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「组件更新」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：身份一致才进入 patchComponent；其它分支重新挂载。执行后继续到「isSameComponent()」。",
    "code": "function componentPatchStep001_patchMountedInputIsSameComponent(ctx) {\n  if (!ctx.match(\"patchMountedInput()：调用 isSameComponent\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"isSameComponent()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「组件更新」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：mount.js 的 patchMountedInput() 同时检查 isComponentMountInput(input) 和 isSameComponent(mounted, input)；命中才把 patch 子树的闭包传给 patchComponent()。类型/key/updateMode 不同则释放旧树，重新 controller.mountInput()。执行后继续到「同身份才进入 patchComponent」。",
    "code": "function componentPatchStep002_isSameComponent(ctx) {\n  if (!ctx.match(\"isSameComponent()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"同身份才进入 patchComponent\", value)\n  return value\n}",
    "watch": "手写时先盯住：mounted.type、input.type.component、key。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「组件更新」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：return patchComponent(执行后继续到「patchComponent(): fine-grained」。",
    "code": "function componentPatchStep003_patchComponent(ctx) {\n  const value = ctx.run(\"同身份才进入 patchComponent\")\n  ctx.next(\"patchComponent(): fine-grained\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「组件更新」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：条件是 updateMode=fine-grained 且没有 mounted.renderEffect：在 runComponentRenderEntry 中先同步 props，再调用 before_update、排入 updated，最后恢复焦点并 return。其余情况才检查下一步的输入控件保护。执行后继续到「components.update() → syncProps()」。",
    "code": "function componentPatchStep004_patchComponentFineGrained(ctx) {\n  if (!ctx.match(\"patchComponent(): fine-grained\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"components.update() → syncProps()\", value)\n  return value\n}",
    "watch": "手写时先盯住：updateMode、pendingLifecycle、propsRO signals。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「组件更新」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：components.update() → prepare(instance, input) → syncProps(propsRO, copyProps(input))。它是 patchComponent 多个分支共用的工具；下一步回到 fine-grained 分支看谁调用它，并非 update() 调用 patchComponent()。执行后继续到「实际 props 同步」。",
    "code": "function componentPatchStep005_componentsUpdateSyncProps(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"实际 props 同步\", value)\n  return value\n}",
    "watch": "手写时先盯住：instance.propsRO、next、deleted keys。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「组件更新」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：syncProps(instance.propsRO, copyProps(input))执行后继续到「prepare(instance, input) → syncProps()」。",
    "code": "function componentPatchStep006_props(ctx) {\n  const value = ctx.run(\"实际 props 同步\")\n  ctx.next(\"prepare(instance, input) → syncProps()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「组件更新」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：copyProps(input) 后同步到 instance.propsRO，并保留 owner 链。执行后继续到「preserveUncontrolledTextControl」。",
    "code": "function componentPatchStep007_prepareInstanceInputSyncProps(ctx) {\n  const value = ctx.run(\"prepare(instance, input) → syncProps()\")\n  ctx.next(\"preserveUncontrolledTextControl\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「组件更新」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：命中文本控件保护时直接保留现有 subtree；否则 rerender 模式进入 mounted.renderEffect 分支显式调度 renderSubtree执行后继续到「mounted.renderEffect branch」。",
    "code": "function componentPatchStep008_preserveUncontrolledTextControl(ctx) {\n  if (!ctx.match(\"preserveUncontrolledTextControl\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"mounted.renderEffect branch\", value)\n  return value\n}",
    "watch": "手写时先盯住：activeElement、hasActiveUncontrolledTextControlWithin。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「组件更新」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：有 renderEffect 时先同步 props，rerender 模式显式 renderEffect.rerender() → renderSubtree()；fine-grained 模式依靠 props 订阅驱动。此分支随后 return。下一步源码第 296 行是没有 renderEffect 且未命中保护时的兜底直调分支。执行后继续到「有 effect 时显式 rerender 的调用」。",
    "code": "function componentPatchStep009_mountedRenderEffectBranch(ctx) {\n  if (!ctx.match(\"mounted.renderEffect branch\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"有 effect 时显式 rerender 的调用\", value)\n  return value\n}",
    "watch": "手写时先盯住：mounted.renderEffect、input.type.updateMode。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「组件更新」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：mounted.renderEffect.rerender()执行后继续到「renderComponent() + patchSubtree()」。",
    "code": "function componentPatchStep010_effectRerender(ctx) {\n  const value = ctx.run(\"有 effect 时显式 rerender 的调用\")\n  ctx.next(\"renderComponent() + patchSubtree()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「组件更新」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：renderComponent() 在执行组件前同步发出 before_update，patchSubtree 完成后把 updated entry 放入 pending 生命周期队列执行后继续到「renderComponent 中 before_update / mountSubtree」。",
    "code": "function componentPatchStep011_renderComponentPatchSubtree(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"renderComponent 中 before_update / mountSubtree\", value)\n  return value\n}",
    "watch": "手写时先盯住：mounted.instance、subtree、patchSubtree。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「组件更新」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：state.lifecycle.call(instance.host, 'before_update')执行后继续到「before_update → updated queue」。",
    "code": "function componentPatchStep012_renderComponentBeforeUpdateMountSubtree(ctx) {\n  const value = ctx.run(\"renderComponent 中 before_update / mountSubtree\")\n  ctx.next(\"before_update → updated queue\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「组件更新」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：最外层 runRenderEntry 退出时执行 updated 回调；组件身份与 Hook 槽位在整个更新过程中保持不变，本主题完成执行后继续到「渲染出口刷新生命周期」。",
    "code": "function componentPatchStep013_beforeUpdateUpdatedQueue(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"渲染出口刷新生命周期\", value)\n  return value\n}",
    "watch": "手写时先盯住：updating、pendingLifecycle、renderDepth。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「组件更新」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：state.flushPendingComponentLifecycle?.()执行后回到本主题的外层调用者。",
    "code": "function componentPatchStep014(ctx) {\n  const value = ctx.run(\"渲染出口刷新生命周期\")\n  ctx.next(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  }
};
