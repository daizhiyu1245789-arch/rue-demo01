rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["router"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「路由」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：createRouter() 返回 router 对象；useApp().use(router) 先排队，appController.mount() → plugins.flush() 才执行 router.install() → attachRouter(router)。执行后继续到「use 排队，mount 才 flush」。",
    "code": "function routerStep001_createRouter(ctx) {\n  const value = ctx.run(\"createRouter()\")\n  ctx.next(\"use 排队，mount 才 flush\", value)\n  return value\n}",
    "watch": "手写时先盯住：routeByName、branches、options.routes。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「路由」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：plugins.flush()执行后继续到「useApp.use(router) → appRue.use(router)」。",
    "code": "function routerStep002_useMountFlush(ctx) {\n  const value = ctx.run(\"use 排队，mount 才 flush\")\n  ctx.next(\"useApp.use(router) → appRue.use(router)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「路由」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：插件先排队；安装发生在随后 appController.mount 调 plugins.flush 时。执行后继续到「plugins.flush → Reflect.apply(install, plugin, …)」。",
    "code": "function routerStep003_useAppUseRouterAppRue(ctx) {\n  const value = ctx.createValue(\"useApp.use(router) → appRue.use(router)\")\n  ctx.store(\"useApp.use(router) → appRue.use(router)\", value)\n  ctx.next(\"plugins.flush → Reflect.apply(install, plugin, …)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「路由」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：install 此时是 router.install；传入 [undefined, options]。执行后继续到「router.install() → attachRouter()」。",
    "code": "function routerStep004_pluginsFlushReflectApply(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"router.install() → attachRouter()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「路由」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：安装阶段至此结束；用户之后点击 RouterLink 时，RouterLinkImpl 的 click handler 通过 useRouter() 取得同一实例执行后继续到「RouterLink 初始化时取得 r」。",
    "code": "function routerStep005_routerInstallAttachRouter(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"RouterLink 初始化时取得 r\", value)\n  })\n}",
    "watch": "手写时先盯住：getCurrentContainer()、__routerByContainer、__activeRouter。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「路由」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const r = useRouter()执行后继续到「RouterLinkImpl.click()」。",
    "code": "function routerStep006_routerLinkR(ctx) {\n  const value = ctx.run(\"RouterLink 初始化时取得 r\")\n  ctx.next(\"RouterLinkImpl.click()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「路由」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：click() 从已捕获的 r 选出 replace ? r.replace : r.push，然后 nav(to)。公开方法 push(p) → navigate(p, 'push')，replace(p) → navigate(p, 'replace')，第二个参数是方法名字符串。执行后继续到「点击调用 nav(to)」。",
    "code": "function routerStep007_routerLinkImplClick(ctx) {\n  const value = ctx.run(\"RouterLinkImpl.click()\")\n  ctx.next(\"点击调用 nav(to)\", value)\n  return value\n}",
    "watch": "手写时先盯住：event.defaultPrevented、to、replace、r。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「路由」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：void nav(to)执行后继续到「实际调用处」。",
    "code": "function routerStep008_navTo(ctx) {\n  const value = ctx.run(\"点击调用 nav(to)\")\n  ctx.next(\"实际调用处\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「路由」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：navigate(p, 'push')执行后继续到「push / replace → navigate」。",
    "code": "function routerStep009(ctx) {\n  const value = ctx.run(\"实际调用处\")\n  ctx.next(\"push / replace → navigate\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「路由」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：RouterLink 的 nav 是从 r.push/r.replace 取出的函数；rawPath 接收 to。执行后继续到「navigate()」。",
    "code": "function routerStep010_pushReplaceNavigate(ctx) {\n  const value = ctx.run(\"push / replace → navigate\")\n  ctx.next(\"navigate()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「路由」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：navigate() 先 match(resolveLocation(rawPath).path) 供 before-navigation 事件使用，再选择 resolveNavigationSync() 快路径或 await resolveNavigation(rawPath, from, requestId)。两者内部会重新 match，并处理 redirect 后的新目标。执行后继续到「同步导航快路径」。",
    "code": "function routerStep011_navigate(ctx) {\n  if (!ctx.match(\"navigate()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"同步导航快路径\", value)\n  return value\n}",
    "watch": "手写时先盯住：from、requestId、navigationRequestId。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「路由」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const syncResolution = resolveNavigationSync执行后继续到「异步守卫路径」。",
    "code": "function routerStep012(ctx) {\n  const value = ctx.run(\"同步导航快路径\")\n  ctx.next(\"异步守卫路径\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「路由」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const resolution = await resolveNavigation(执行后继续到「match()」。",
    "code": "function routerStep013(ctx) {\n  const value = ctx.run(\"异步守卫路径\")\n  ctx.next(\"match()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「路由」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：match() 把 Route 返回它的调用者。resolveNavigationSync/resolveNavigation 使用匹配结果处理 redirect 和守卫；不是把一次 match 的 Route 直接传进 resolveNavigation，它的第一个参数是原始地址 rawPath。执行后继续到「resolveNavigation()」。",
    "code": "function routerStep014_match(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"resolveNavigation()\", value)\n  return value\n}",
    "watch": "手写时先盯住：normalizedPath、m、params、matched、meta。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「路由」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：守卫允许继续后，导航事务调用 loadRouteComponents(to) 解析 matched 记录里的懒加载页面执行后继续到「允许且非重复后加载懒组件」。",
    "code": "function routerStep015_resolveNavigation(ctx) {\n  if (!ctx.match(\"resolveNavigation()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"允许且非重复后加载懒组件\", value)\n  return value\n}",
    "watch": "手写时先盯住：targetRoute、decision、redirectDepth。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「路由」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：await loadRouteComponents(resolution.route)执行后继续到「loadRouteComponents()」。",
    "code": "function routerStep016(ctx) {\n  const value = ctx.run(\"允许且非重复后加载懒组件\")\n  ctx.next(\"loadRouteComponents()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "17": {
    "title": "17 · 最小实现",
    "intro": "这是「路由」第 17 步的最小手写版，只保留当前节点的核心动作。对应源码线索：异步路径 await loadRouteComponents() 后再次检查 requestId，直接创建 pendingNavigation、调用 options.history[method](href) 并主动 settlePendingNavigation()。下一步 commitHistoryNavigation() 则是同步快路径使用的 helper；异步路径不调用它。执行后继续到「异步路径直接写入 history」。",
    "code": "function routerStep017_loadRouteComponents(ctx) {\n  if (!ctx.match(\"loadRouteComponents()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"异步路径直接写入 history\", value)\n  return value\n}",
    "watch": "手写时先盯住：__rue_route_pending、__rue_route_resolved。"
  },
  "18": {
    "title": "18 · 最小实现",
    "intro": "这是「路由」第 18 步的最小手写版，只保留当前节点的核心动作。对应源码线索：options.history[method](resolution.href)执行后继续到「commitHistoryNavigation()」。",
    "code": "function routerStep018_history(ctx) {\n  const value = ctx.run(\"异步路径直接写入 history\")\n  ctx.next(\"commitHistoryNavigation()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "19": {
    "title": "19 · 最小实现",
    "intro": "这是「路由」第 19 步的最小手写版，只保留当前节点的核心动作。对应源码线索：同步 helper 先登记 pending，再 options.history[method](href)。history listener 可调用 settle；返回后 pending 若仍属于本请求，helper 也会主动 settle。若依旧未认领，还有直接 commitNavigation() 的兜底。执行后继续到「同步 helper 写入 history 后主动 settle」。",
    "code": "function routerStep019_commitHistoryNavigation(ctx) {\n  if (!ctx.match(\"commitHistoryNavigation()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"同步 helper 写入 history 后主动 settle\", value)\n  return value\n}",
    "watch": "手写时先盯住：pendingNavigation、committedHistoryHref。"
  },
  "20": {
    "title": "20 · 最小实现",
    "intro": "这是「路由」第 20 步的最小手写版，只保留当前节点的核心动作。对应源码线索：options.history[method](href)执行后继续到「settlePendingNavigation()」。",
    "code": "function routerStep020_helperHistorySettle(ctx) {\n  const value = ctx.run(\"同步 helper 写入 history 后主动 settle\")\n  ctx.next(\"settlePendingNavigation()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "21": {
    "title": "21 · 最小实现",
    "intro": "这是「路由」第 21 步的最小手写版，只保留当前节点的核心动作。对应源码线索：pending 的目标与 history location 一致时，settlePendingNavigation() 直接调用 commitNavigation() 提交响应式路由状态执行后继续到「settle → commitNavigation」。",
    "code": "function routerStep021_settlePendingNavigation(ctx) {\n  const value = ctx.run(\"settlePendingNavigation()\")\n  ctx.next(\"settle → commitNavigation\", value)\n  return value\n}",
    "watch": "手写时先盯住：currentLocation、nextPending.path、source。"
  },
  "22": {
    "title": "22 · 最小实现",
    "intro": "这是「路由」第 22 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const commitPromise = nextPending.notify执行后继续到「commitNavigation()」。",
    "code": "function routerStep022_settleCommitNavigation(ctx) {\n  const value = ctx.run(\"settle → commitNavigation\")\n  ctx.next(\"commitNavigation()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "23": {
    "title": "23 · 最小实现",
    "intro": "这是「路由」第 23 步的最小手写版，只保留当前节点的核心动作。对应源码线索：commitNavigation() → runViewTransition(callback) → currentPath.set / route.set。写 route 会通过响应式调度触发 RouterView 的 watchEffect；该回调的发生时机由 view-transition 与 reactive scheduler 决定。执行后继续到「runViewTransition 中写 signal」。",
    "code": "function routerStep023_commitNavigation(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"runViewTransition 中写 signal\", value)\n  })\n}",
    "watch": "手写时先盯住：currentPath、route、afterEachHooks。"
  },
  "24": {
    "title": "24 · 最小实现",
    "intro": "这是「路由」第 24 步的最小手写版，只保留当前节点的核心动作。对应源码线索：runViewTransition(() => {执行后继续到「RouterView watchEffect()」。",
    "code": "function routerStep024_runViewTransitionSignal(ctx) {\n  const value = ctx.run(\"runViewTransition 中写 signal\")\n  ctx.next(\"RouterView watchEffect()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "25": {
    "title": "25 · 最小实现",
    "intro": "这是「路由」第 25 步的最小手写版，只保留当前节点的核心动作。对应源码线索：RouterView 取得 record 后先调用 createRouteParamsState()，为该 routeKey 准备稳定的 params Proxy 再构造页面 props执行后继续到「按 routeKey 查找 / 创建 paramsState」。",
    "code": "function routerStep025_routerViewWatchEffect(ctx) {\n  const value = ctx.run(\"RouterView watchEffect()\")\n  ctx.next(\"按 routeKey 查找 / 创建 paramsState\", value)\n  return value\n}",
    "watch": "手写时先盯住：data、depth、record、resolvedComponent。"
  },
  "26": {
    "title": "26 · 最小实现",
    "intro": "这是「路由」第 26 步的最小手写版，只保留当前节点的核心动作。对应源码线索：paramsState = createRouteParamsState(recordParams)执行后继续到「createRouteParamsState()」。",
    "code": "function routerStep026_routeKeyParamsState(ctx) {\n  const value = ctx.run(\"按 routeKey 查找 / 创建 paramsState\")\n  ctx.next(\"createRouteParamsState()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "27": {
    "title": "27 · 最小实现",
    "intro": "这是「路由」第 27 步的最小手写版，只保留当前节点的核心动作。对应源码线索：页面 handle 生成后，若路由配置要求缓存，RouterView 把它包装进 KeepAlive；否则直接作为 renderedContent执行后继续到「用 params Proxy 构造 RouteViewContent」。",
    "code": "function routerStep027_createRouteParamsState(ctx) {\n  if (!ctx.match(\"createRouteParamsState()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"用 params Proxy 构造 RouteViewContent\", value)\n  return value\n}",
    "watch": "手写时先盯住：routeKey、source、proxy、paramsByRouteKey。"
  },
  "28": {
    "title": "28 · 最小实现",
    "intro": "这是「路由」第 28 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const routeContent = h(Component执行后继续到「optional KeepAlive」。",
    "code": "function routerStep028_paramsProxyRouteViewContent(ctx) {\n  const value = ctx.run(\"用 params Proxy 构造 RouteViewContent\")\n  ctx.next(\"optional KeepAlive\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "29": {
    "title": "29 · 最小实现",
    "intro": "这是「路由」第 29 步的最小手写版，只保留当前节点的核心动作。对应源码线索：最终 renderedContent 被传给 renderAnchor()，始终在 RouterView 的同一个 comment anchor 前更新页面块执行后继续到「renderAnchor()」。",
    "code": "function routerStep029_optionalKeepAlive(ctx) {\n  const value = ctx.run(\"optional KeepAlive\")\n  ctx.next(\"renderAnchor()\", value)\n  return value\n}",
    "watch": "手写时先盯住：contentByRouteKey、persistKeys、disposeKeepAlive。"
  },
  "30": {
    "title": "30 · 最小实现",
    "intro": "这是「路由」第 30 步的最小手写版，只保留当前节点的核心动作。对应源码线索：renderAnchor() 经 Rue 公共包装器和底层 anchor renderer 挂载/更新页面。导航 Promise 跟随 commitNavigation 完成；懒组件自己的 Promise、Suspense 显示和帧调度可以继续进行，不保证等待所有异步页面内容。执行后继续到「公共 renderAnchor 转内部渲染」。",
    "code": "function routerStep030_renderAnchor(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"公共 renderAnchor 转内部渲染\", value)\n  return value\n}",
    "watch": "手写时先盯住：previousRecord、previousResolvedComponent、anchorEl。"
  },
  "31": {
    "title": "31 · 最小实现",
    "intro": "这是「路由」第 31 步的最小手写版，只保留当前节点的核心动作。对应源码线索：export const renderAnchor =执行后回到本主题的外层调用者。",
    "code": "function routerStep031_renderAnchor(ctx) {\n  const value = ctx.run(\"公共 renderAnchor 转内部渲染\")\n  ctx.next(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  }
};
