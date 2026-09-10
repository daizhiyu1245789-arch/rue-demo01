rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["ssr"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：服务端 renderer 识别 descriptor 上的协议 marker 后，调用 createServerNodeFromIslandDescriptor() 构造 island 服务端子树执行后继续到「服务端协议归一化时构造 island 节点」。",
    "code": "function ssrStep001_createRueIslandDescriptor(ctx) {\n  const value = ctx.run(\"createRueIslandDescriptor()\")\n  ctx.next(\"服务端协议归一化时构造 island 节点\", value)\n  return value\n}",
    "watch": "手写时先盯住：metadata.hydrate、component、props。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：createServerNodeFromIslandDescriptor(value)执行后继续到「renderToString()」。",
    "code": "function ssrStep002_island(ctx) {\n  const value = ctx.run(\"服务端协议归一化时构造 island 节点\")\n  ctx.next(\"renderToString()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：renderToString() 在 ServerDOMAdapter 下生成/归一化输入，循环 render 并等待异步依赖；最后先调用 serializeServerNodeChildren(adapter.root, options)，由它逐节点调用 serializeServerNode()。执行后继续到「真正先调用 serializeServerNodeChildren」。",
    "code": "function ssrStep003_renderToString(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"真正先调用 serializeServerNodeChildren\", value)\n  return value\n}",
    "watch": "手写时先盯住：shouldRender、pendingAsyncComponents。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：return serializeServerNodeChildren(adapter.root, options)执行后继续到「createServerNodeFromIslandDescriptor()」。",
    "code": "function ssrStep004_serializeServerNodeChildren(ctx) {\n  const value = ctx.run(\"真正先调用 serializeServerNodeChildren\")\n  ctx.next(\"createServerNodeFromIslandDescriptor()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：该 ServerNode 作为普通服务端树节点返回上层 renderToString()，与页面其他节点一起完成异步渲染轮次执行后继续到「renderToString 中调用协议归一化」。",
    "code": "function ssrStep005_createServerNodeFromIslandDescriptor(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"renderToString 中调用协议归一化\", value)\n  return value\n}",
    "watch": "手写时先盯住：hydrate、content、data-rue-*。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：return normalizeServerProtocolRenderable(执行后继续到「serializeServerNode()」。",
    "code": "function ssrStep006_renderToString(ctx) {\n  const value = ctx.run(\"renderToString 中调用协议归一化\")\n  ctx.next(\"serializeServerNode()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：HTML 被发送并解析到浏览器后，客户端 startRueIslandLoader() 扫描其中的 rue-island 元素；这是跨网络/页面加载的阶段切换执行后继续到「startRueIslandLoader()」。",
    "code": "function ssrStep007_serializeServerNode(ctx) {\n  const value = ctx.run(\"serializeServerNode()\")\n  ctx.next(\"startRueIslandLoader()\", value)\n  return value\n}",
    "watch": "手写时先盯住：transparent、rawInnerHTML、includeComments。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：初始扫描和 observer 回调都对每个未处理元素调用 registerRueIsland()执行后继续到「canRegister 阻止尚未就绪父 island 下的子项」。",
    "code": "function ssrStep008_startRueIslandLoader(ctx) {\n  const value = ctx.run(\"startRueIslandLoader()\")\n  ctx.next(\"canRegister 阻止尚未就绪父 island 下的子项\", value)\n  return value\n}",
    "watch": "手写时先盯住：registered、terminalStatuses、canRegister。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const canRegister =执行后继续到「registerCandidate → registerRueIsland」。",
    "code": "function ssrStep009_canRegisterIsland(ctx) {\n  const value = ctx.run(\"canRegister 阻止尚未就绪父 island 下的子项\")\n  ctx.next(\"registerCandidate → registerRueIsland\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const cleanup = registerRueIsland(执行后继续到「registerRueIsland()」。",
    "code": "function ssrStep010_registerCandidateRegisterRueIsland(ctx) {\n  const value = ctx.run(\"registerCandidate → registerRueIsland\")\n  ctx.next(\"registerRueIsland()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：注册信息有效后直接传给 scheduleIslandHydration()，由 strategy 决定立即、空闲、可见或交互触发执行后继续到「把 runHydration 回调交给策略调度器」。",
    "code": "function ssrStep011_registerRueIsland(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"把 runHydration 回调交给策略调度器\", value)\n  return value\n}",
    "watch": "手写时先盯住：active、hydrated、strategy、scheduleCleanup。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：scheduleCleanup = scheduleIslandHydration(执行后继续到「scheduleIslandHydration()」。",
    "code": "function ssrStep012_runHydration(ctx) {\n  const value = ctx.run(\"把 runHydration 回调交给策略调度器\")\n  ctx.next(\"scheduleIslandHydration()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：策略条件满足时统一调用 runHydration()；它动态 import 模块、读取 props script 并构造 mount context执行后继续到「runHydration(): load module/props」。",
    "code": "function ssrStep013_scheduleIslandHydration(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"runHydration(): load module/props\", value)\n  })\n}",
    "watch": "手写时先盯住：timeout、rootMargin、interaction events。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：模块与 props 同时就绪后，runHydration() 调用 mountRueIsland(module, context) 选择具体客户端入口执行后继续到「load().then → mountRueIsland」。",
    "code": "function ssrStep014_runHydrationLoadModuleProps(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"load().then → mountRueIsland\", value)\n  })\n}",
    "watch": "手写时先盯住：resolveModule、props、replayEvent。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：return mountRueIsland(执行后继续到「mountRueIsland()」。",
    "code": "function ssrStep015_loadThenMountRueIsland(ctx) {\n  const value = ctx.run(\"load().then → mountRueIsland\")\n  ctx.next(\"mountRueIsland()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：先检查 module.mount，再检查非 only 的 module.hydrate；命中就直接调用模块自定义函数并 return。只有 component export 兜底且非 only 才调用 hydrateRootImpl(island, vnode, {adoptComponents: module.adopt===true, replace:false})；only 用普通 render。执行后继续到「仅组件 export 的非 only 分支进入 hydrateRootImpl」。",
    "code": "function ssrStep016_mountRueIsland(ctx) {\n  if (!ctx.match(\"mountRueIsland()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"仅组件 export 的非 only 分支进入 hydrateRootImpl\", value)\n  return value\n}",
    "watch": "手写时先盯住：module.mount、module.adopt、strategy。"
  },
  "17": {
    "title": "17 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 17 步的最小手写版，只保留当前节点的核心动作。对应源码线索：return hydrateRootImpl(执行后继续到「hydrateRoot()」。",
    "code": "function ssrStep017_exportOnlyHydrateRootImpl(ctx) {\n  const value = ctx.run(\"仅组件 export 的非 only 分支进入 hydrateRootImpl\")\n  ctx.next(\"hydrateRoot()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "18": {
    "title": "18 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 18 步的最小手写版，只保留当前节点的核心动作。对应源码线索：replace=false 且有 SSR 子节点时：adoptComponents=true 或 element-head 输入走 tryAdoptHydrationRootWithRenderer；否则走 tryAdoptHydrationRoot。adoption 返回 null 才落回 render；renderer 路径抛异常则继续向上抛，不是所有失败都自动重渲染。执行后继续到「renderer adoption / 普通 adoption 分流」。",
    "code": "function ssrStep018_hydrateRoot(ctx) {\n  if (!ctx.match(\"hydrateRoot()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"renderer adoption / 普通 adoption 分流\", value)\n  return value\n}",
    "watch": "手写时先盯住：adoptComponents、onMismatch、replace。"
  },
  "19": {
    "title": "19 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 19 步的最小手写版，只保留当前节点的核心动作。对应源码线索：if (options.adoptComponents === true执行后继续到「另一条普通 adoption 路径」。",
    "code": "function ssrStep019_rendererAdoptionAdoption(ctx) {\n  const value = ctx.run(\"renderer adoption / 普通 adoption 分流\")\n  ctx.next(\"另一条普通 adoption 路径\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "20": {
    "title": "20 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 20 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const adopted = tryAdoptHydrationRoot(container执行后继续到「tryAdoptHydrationRootWithRenderer()」。",
    "code": "function ssrStep020_adoption(ctx) {\n  const value = ctx.run(\"另一条普通 adoption 路径\")\n  ctx.next(\"tryAdoptHydrationRootWithRenderer()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "21": {
    "title": "21 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 21 步的最小手写版，只保留当前节点的核心动作。对应源码线索：renderer adoption 临时换 adapter → renderAnchor → commitStatus。成功返回 RueRootHandle；不匹配则 cleanup + onMismatch 并返回 null，hydrateRoot 随后 render。若渲染抛错，cleanup 后重抛，由外层 hydration Promise 的 catch 写 error 状态。执行后继续到「adoption 未命中后回到普通 render」。",
    "code": "function ssrStep021_tryAdoptHydrationRootWithRenderer(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"adoption 未命中后回到普通 render\", value)\n  return value\n}",
    "watch": "手写时先盯住：adoptedRoot、adoptedNodes、failureMessage。"
  },
  "22": {
    "title": "22 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 22 步的最小手写版，只保留当前节点的核心动作。对应源码线索：render(value, container as unknown as DomElementLike)执行后继续到「hydration completion」。",
    "code": "function ssrStep022_adoptionRender(ctx) {\n  const value = ctx.run(\"adoption 未命中后回到普通 render\")\n  ctx.next(\"hydration completion\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "23": {
    "title": "23 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 23 步的最小手写版，只保留当前节点的核心动作。对应源码线索：元素状态和事件重放完成，observer/策略资源按需释放，服务端 HTML 到客户端可交互 island 的链路结束执行后继续到「完成 / 异常 Promise 分支」。",
    "code": "function ssrStep023_hydrationCompletion(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"完成 / 异常 Promise 分支\", value)\n  return value\n}",
    "watch": "手写时先盯住：data-rue-status、rue:hydrate、replayEvent.target。"
  },
  "24": {
    "title": "24 · 最小实现",
    "intro": "这是「服务端渲染与水合」第 24 步的最小手写版，只保留当前节点的核心动作。对应源码线索：island.setAttribute('data-rue-status', 'hydrated')执行后回到本主题的外层调用者。",
    "code": "function ssrStep024_promise(ctx) {\n  const value = ctx.run(\"完成 / 异常 Promise 分支\")\n  ctx.next(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  }
};
