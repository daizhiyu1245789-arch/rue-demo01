rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["errors"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「错误处理」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：onErrorCaptured 先登记 owner handlers。组件渲染异常的常见入口是 instance.js 的 render() catch → errors.capture() → bridge.dispatchErrorCaptured()；显式 runtime.handleError 和 reactive effect 的 #captureError 是另外两类入口，下面分别展示。执行后继续到「组件渲染抛错的真正入口」。",
    "code": "function errorsStep001_onErrorCaptured(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"组件渲染抛错的真正入口\", value)\n  })\n}",
    "watch": "手写时先盯住：slot.handler、slot.registered、owners。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「错误处理」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const captured = state?.errors?.capture执行后继续到「runtime.handleError()」。",
    "code": "function errorsStep002(ctx) {\n  const value = ctx.run(\"组件渲染抛错的真正入口\")\n  ctx.next(\"runtime.handleError()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「错误处理」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：普通组件错误可直接走边界派发；若异常来自 reactive effect，effect 的 catch 先进入 ReactiveRuntime.#captureError() 并携带 record.owner执行后继续到「ReactiveRuntime.#captureError()」。",
    "code": "function errorsStep003_runtimeHandleError(ctx) {\n  if (!ctx.match(\"runtime.handleError()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"ReactiveRuntime.#captureError()\", value)\n  return value\n}",
    "watch": "手写时先盯住：error、instance、handlingExplicitError。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「错误处理」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：#captureError() 调用共享 bridge.dispatchErrorCaptured(error, owner)，把 JS reactive kernel 的错误交回 Rue TypeScript 层执行后继续到「reactive effect 注入的错误处理回调」。",
    "code": "function errorsStep004_reactiveRuntimeCaptureError(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"reactive effect 注入的错误处理回调\", value)\n  return value\n}",
    "watch": "手写时先盯住：record.owner、info = reactive effect。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「错误处理」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：this.state.runWithErrorCaptureEffect执行后继续到「bridge.dispatchErrorCaptured()」。",
    "code": "function errorsStep005_reactiveEffect(ctx) {\n  const value = ctx.run(\"reactive effect 注入的错误处理回调\")\n  ctx.next(\"bridge.dispatchErrorCaptured()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「错误处理」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：bridge 解析 owner 后直接调用全局安装的 dispatchErrorCaptured()，开始沿组件 owner 链冒泡执行后继续到「dispatchErrorCaptured()」。",
    "code": "function errorsStep006_bridgeDispatchErrorCaptured(ctx) {\n  const value = ctx.run(\"bridge.dispatchErrorCaptured()\")\n  ctx.next(\"dispatchErrorCaptured()\", value)\n  return value\n}",
    "watch": "手写时先盯住：error、instance、info。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「错误处理」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：dispatchErrorCaptured() 进入时先 rememberDispatchedError(error)，再遍历 owner/linked owner/parent 并去重 handlers；handler 返回 false 表示消费，派发器返回 true。全局包装函数随后可用 wasErrorCapturedDispatched() 防重复进入。执行后继续到「先标记再遍历 owner 链」。",
    "code": "function errorsStep007_dispatchErrorCaptured(ctx) {\n  const value = ctx.run(\"dispatchErrorCaptured()\")\n  ctx.next(\"先标记再遍历 owner 链\", value)\n  return value\n}",
    "watch": "手写时先盯住：visitedOwners、invokedHandlers、current。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「错误处理」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：rememberDispatchedError(error)执行后继续到「wasErrorCapturedDispatched()」。",
    "code": "function errorsStep008_owner(ctx) {\n  const value = ctx.run(\"先标记再遍历 owner 链\")\n  ctx.next(\"wasErrorCapturedDispatched()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「错误处理」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：这只是去重检查，不负责转发。组件 render 错误未消费时：markPropagating → __rueHandleComponentError 抛出 → wrappedRuntimeEntry catch → dispatchCaughtError。显式 handleError 另走 originalHandleError / notifyGlobal 路径。执行后继续到「全局派发函数的去重门」。",
    "code": "function errorsStep009_wasErrorCapturedDispatched(ctx) {\n  if (!ctx.match(\"wasErrorCapturedDispatched()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"全局派发函数的去重门\", value)\n  return value\n}",
    "watch": "手写时先盯住：dispatchedErrors。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「错误处理」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：wasErrorCapturedDispatched(error) ? false执行后继续到「组件未消费时标记并交回入口」。",
    "code": "function errorsStep010(ctx) {\n  const value = ctx.run(\"全局派发函数的去重门\")\n  ctx.next(\"组件未消费时标记并交回入口\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「错误处理」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：state?.errors?.markPropagating(error)执行后继续到「createErrorController().notifyGlobal()」。",
    "code": "function errorsStep011(ctx) {\n  const value = ctx.run(\"组件未消费时标记并交回入口\")\n  ctx.next(\"createErrorController().notifyGlobal()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「错误处理」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：notifyGlobal() 调用底层 handlers，其中 forwardError() 在活动入口内会先保存 pending error；wrappedRuntimeEntry 返回前或 catch 中调用 dispatchCaughtError 再抛出。组件 render 也可直接抛到该入口，跳过 notifyGlobal。执行后继续到「notifyGlobal → forwardError，入口内先缓存」。",
    "code": "function errorsStep012_createErrorControllerNotifyGlobal(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"notifyGlobal → forwardError，入口内先缓存\", value)\n  return value\n}",
    "watch": "手写时先盯住：globalHandlers、lastError。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「错误处理」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const forwardError =执行后继续到「wrappedRuntimeEntry()」。",
    "code": "function errorsStep013_notifyGlobalForwardError(ctx) {\n  const value = ctx.run(\"notifyGlobal → forwardError，入口内先缓存\")\n  ctx.next(\"wrappedRuntimeEntry()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「错误处理」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：wrapCreateRue() 安装该包装器。每次入口调用以 Reflect.apply(original, this, args) 执行底层函数；catch 通知 handlers 后重新抛出，finally 递减深度。源码没有“仅 depth=0 才派发”的判断，不能保证所有嵌套入口都只派发一次。执行后继续到「入口 catch 通知 handlers 后重新抛出」。",
    "code": "function errorsStep014_wrappedRuntimeEntry(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"入口 catch 通知 handlers 后重新抛出\", value)\n  return value\n}",
    "watch": "手写时先盯住：__rue_pending_entry_error__、__rue_active_entry_depth__。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「错误处理」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：if (!rethrowingPendingEntryError执行后回到本主题的外层调用者。",
    "code": "function errorsStep015_catchHandlers(ctx) {\n  const value = ctx.run(\"入口 catch 通知 handlers 后重新抛出\")\n  ctx.next(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  }
};
