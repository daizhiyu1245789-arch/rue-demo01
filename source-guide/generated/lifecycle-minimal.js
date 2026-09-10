rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["lifecycle"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「生命周期」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：mountComponent() 拿到新 instance 后立即进入 renderSubtree()，renderComponent() 再通过 components.render() 建立当前实例上下文执行后继续到「mountComponent 创建 instance」。",
    "code": "function lifecycleStep001_stateComponentsCreate(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"mountComponent 创建 instance\", value)\n  return value\n}",
    "watch": "手写时先盯住：instance.host、propsRO、hookScopeDisposed。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「生命周期」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const instance = state.components.create(input)执行后继续到「components.render()」。",
    "code": "function lifecycleStep002_mountComponentInstance(ctx) {\n  const value = ctx.run(\"mountComponent 创建 instance\")\n  ctx.next(\"components.render()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「生命周期」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：components.render() 在实例上下文中执行传入回调；当组件源码调用 onMounted(callback) 时，便进入公共生命周期 Hook执行后继续到「renderHooks → 组件回调」。",
    "code": "function lifecycleStep003_componentsRender(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"renderHooks → 组件回调\", value)\n  return value\n}",
    "watch": "手写时先盯住：carrier、instance.host、propsRO。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「生命周期」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：carrier.renderHooks(instance.host执行后继续到「renderComponent → input.type.component(props)」。",
    "code": "function lifecycleStep004_renderHooks(ctx) {\n  const value = ctx.run(\"renderHooks → 组件回调\")\n  ctx.next(\"renderComponent → input.type.component(props)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「生命周期」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：Hook 注册发生在业务组件函数实际执行期间。执行后继续到「onMounted(callback)」。",
    "code": "function lifecycleStep005_renderComponentInputTypeComponent(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"onMounted(callback)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「生命周期」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：rue.ts 直接导出 onMounted = lifecycleCore.onMounted；这两个名字指向同一个函数引用，F11 会直接到 client-mount-core.ts 的实现，不会经过一个额外包装函数。执行后继续到「lifecycleCore.onMounted()」。",
    "code": "function lifecycleStep006_onMountedCallback(ctx) {\n  const value = ctx.run(\"onMounted(callback)\")\n  ctx.next(\"lifecycleCore.onMounted()\", value)\n  return value\n}",
    "watch": "手写时先盯住：callback、lifecycleCore。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「生命周期」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：lifecycleCore 从当前客户端上下文取到 runtime，然后直接执行 runtime.onMounted(callback)执行后继续到「runtime.onMounted()」。",
    "code": "function lifecycleStep007_lifecycleCoreOnMounted(ctx) {\n  const value = ctx.run(\"lifecycleCore.onMounted()\")\n  ctx.next(\"runtime.onMounted()\", value)\n  return value\n}",
    "watch": "手写时先盯住：options.getRuntime()、callback。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「生命周期」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：runtime.onMounted = registerLifecycle(lifecycle.onMounted)。调用时先 assertActive，再调用 lifecycle.onMounted(callback)；后者调用 register('mounted', callback) 把函数放入 Hook Map。执行后继续到「runtime 的 registerLifecycle 包装」。",
    "code": "function lifecycleStep008_runtimeOnMounted(ctx) {\n  const value = ctx.run(\"runtime.onMounted()\")\n  ctx.next(\"runtime 的 registerLifecycle 包装\", value)\n  return value\n}",
    "watch": "手写时先盯住：callback、components.current()。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「生命周期」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const registerLifecycle =执行后继续到「mounted 阶段真正调用 register」。",
    "code": "function lifecycleStep009_runtimeRegisterLifecycle(ctx) {\n  const value = ctx.run(\"runtime 的 registerLifecycle 包装\")\n  ctx.next(\"mounted 阶段真正调用 register\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「生命周期」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：onMounted:执行后继续到「lifecycle.register()」。",
    "code": "function lifecycleStep010_mountedRegister(ctx) {\n  const value = ctx.run(\"mounted 阶段真正调用 register\")\n  ctx.next(\"lifecycle.register()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「生命周期」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：register() 保存回调并返回 disposer 后，控制流回到组件函数；组件继续返回子树，随后 renderComponent() 处理该返回值执行后继续到「组件调用返回后继续处理 value」。",
    "code": "function lifecycleStep011_lifecycleRegister(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"组件调用返回后继续处理 value\", value)\n  return value\n}",
    "watch": "手写时先盯住：instance、hooks、list。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「生命周期」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const value = input.type.component(props)执行后继续到「renderComponent()」。",
    "code": "function lifecycleStep012_value(ctx) {\n  const value = ctx.run(\"组件调用返回后继续处理 value\")\n  ctx.next(\"renderComponent()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「生命周期」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：组件函数返回后，renderComponent() 调用 mountSubtree(normalizeComponentResult(...))，把返回值交给统一挂载器执行后继续到「mountSubtree()」。",
    "code": "function lifecycleStep013_renderComponent(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"mountSubtree()\", value)\n  return value\n}",
    "watch": "手写时先盯住：updating、value、instance.isMounted。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「生命周期」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：mountSubtree() 同步返回 mounted subtree；renderComponent() 随即把 instance、阶段名和 subtree 压入 pendingLifecycle执行后继续到「子树返回后开始排队」。",
    "code": "function lifecycleStep014_mountSubtree(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"子树返回后开始排队\", value)\n  return value\n}",
    "watch": "手写时先盯住：value、subtree.host。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「生命周期」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：pendingLifecycle.push(执行后继续到「pendingLifecycle.push()」。",
    "code": "function lifecycleStep015(ctx) {\n  const value = ctx.run(\"子树返回后开始排队\")\n  ctx.next(\"pendingLifecycle.push()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「生命周期」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：生命周期先排队而不立即执行；根组件调用栈继续返回 renderContainer()，由 commitMountedContainer() 先提交 DOM执行后继续到「挂载返回到根容器提交」。",
    "code": "function lifecycleStep016_pendingLifecyclePush(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"挂载返回到根容器提交\", value)\n  return value\n}",
    "watch": "手写时先盯住：name、subtree、pendingLifecycle。"
  },
  "17": {
    "title": "17 · 最小实现",
    "intro": "这是「生命周期」第 17 步的最小手写版，只保留当前节点的核心动作。对应源码线索：commitMountedContainer(host, container, mounted)执行后继续到「commitMountedContainer()」。",
    "code": "function lifecycleStep017(ctx) {\n  const value = ctx.run(\"挂载返回到根容器提交\")\n  ctx.next(\"commitMountedContainer()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "18": {
    "title": "18 · 最小实现",
    "intro": "这是「生命周期」第 18 步的最小手写版，只保留当前节点的核心动作。对应源码线索：DOM 提交后 renderContainer() 返回到 runRenderEntry()；最外层 renderDepth 降为 0 时触发生命周期 flush执行后继续到「最外层 render 退出才 flush」。",
    "code": "function lifecycleStep018_commitMountedContainer(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"最外层 render 退出才 flush\", value)\n  return value\n}",
    "watch": "手写时先盯住：mounted.host、container.children。"
  },
  "19": {
    "title": "19 · 最小实现",
    "intro": "这是「生命周期」第 19 步的最小手写版，只保留当前节点的核心动作。对应源码线索：if (state.renderDepth === 0)执行后继续到「runRenderEntry()」。",
    "code": "function lifecycleStep019_renderFlush(ctx) {\n  const value = ctx.run(\"最外层 render 退出才 flush\")\n  ctx.next(\"runRenderEntry()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "20": {
    "title": "20 · 最小实现",
    "intro": "这是「生命周期」第 20 步的最小手写版，只保留当前节点的核心动作。对应源码线索：runRenderEntry() 的 finally 检测到最外层渲染结束，直接调用 flushPendingComponentLifecycle()执行后继续到「调用 flushPendingComponentLifecycle」。",
    "code": "function lifecycleStep020_runRenderEntry(ctx) {\n  const value = ctx.run(\"runRenderEntry()\")\n  ctx.next(\"调用 flushPendingComponentLifecycle\", value)\n  return value\n}",
    "watch": "手写时先盯住：state.renderDepth。"
  },
  "21": {
    "title": "21 · 最小实现",
    "intro": "这是「生命周期」第 21 步的最小手写版，只保留当前节点的核心动作。对应源码线索：flushPendingComponentLifecycle(state)执行后继续到「runRenderEntry 的 finally」。",
    "code": "function lifecycleStep021_flushPendingComponentLifecycle(ctx) {\n  const value = ctx.run(\"调用 flushPendingComponentLifecycle\")\n  ctx.next(\"runRenderEntry 的 finally\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "22": {
    "title": "22 · 最小实现",
    "intro": "这是「生命周期」第 22 步的最小手写版，只保留当前节点的核心动作。对应源码线索：最外层 renderDepth 归零才刷 pending；组件子树返回还不是立即执行 mounted。执行后继续到「flushPendingComponentLifecycle()」。",
    "code": "function lifecycleStep022_runRenderEntryFinally(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"flushPendingComponentLifecycle()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "23": {
    "title": "23 · 最小实现",
    "intro": "这是「生命周期」第 23 步的最小手写版，只保留当前节点的核心动作。对应源码线索：flush 逐条切换到 entry.instance，并以 host 和 mounted/updated 阶段名调用 lifecycle.call()执行后继续到「实例切换后派发生命周期」。",
    "code": "function lifecycleStep023_flushPendingComponentLifecycle(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"实例切换后派发生命周期\", value)\n  return value\n}",
    "watch": "手写时先盯住：pending、instance、name。"
  },
  "24": {
    "title": "24 · 最小实现",
    "intro": "这是「生命周期」第 24 步的最小手写版，只保留当前节点的核心动作。对应源码线索：state.lifecycle.call(instance.host, name)执行后继续到「lifecycle.call() → invoke()」。",
    "code": "function lifecycleStep024(ctx) {\n  const value = ctx.run(\"实例切换后派发生命周期\")\n  ctx.next(\"lifecycle.call() → invoke()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "25": {
    "title": "25 · 最小实现",
    "intro": "这是「生命周期」第 25 步的最小手写版，只保留当前节点的核心动作。对应源码线索：首次挂载链在回调执行后结束；以后 props 或依赖变化命中同一组件时，会从 patchComponent() 开启更新分支执行后继续到「以后同身份组件更新的入口」。",
    "code": "function lifecycleStep025_lifecycleCallInvoke(ctx) {\n  const value = ctx.run(\"lifecycle.call() → invoke()\")\n  ctx.next(\"以后同身份组件更新的入口\", value)\n  return value\n}",
    "watch": "手写时先盯住：hooks、name、callback。"
  },
  "26": {
    "title": "26 · 最小实现",
    "intro": "这是「生命周期」第 26 步的最小手写版，只保留当前节点的核心动作。对应源码线索：return patchComponent(执行后继续到「patchComponent()」。",
    "code": "function lifecycleStep026(ctx) {\n  const value = ctx.run(\"以后同身份组件更新的入口\")\n  ctx.next(\"patchComponent()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "27": {
    "title": "27 · 最小实现",
    "intro": "这是「生命周期」第 27 步的最小手写版，只保留当前节点的核心动作。对应源码线索：需区分分支：fine-grained 且无 renderEffect 时，先 components.update() 写 props，再调用 before_update 并排入 updated；rerender 走 renderComponent()，在执行组件函数之前调用 before_update。updated 最终由渲染出口刷新。执行后继续到「细粒度分支的 props / Hook 顺序」。",
    "code": "function lifecycleStep027_patchComponent(ctx) {\n  if (!ctx.match(\"patchComponent()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"细粒度分支的 props / Hook 顺序\", value)\n  return value\n}",
    "watch": "手写时先盯住：updateMode、mounted.renderEffect、input.key。"
  },
  "28": {
    "title": "28 · 最小实现",
    "intro": "这是「生命周期」第 28 步的最小手写版，只保留当前节点的核心动作。对应源码线索：state.components.update(mounted.instance, input)执行后回到本主题的外层调用者。",
    "code": "function lifecycleStep028_propsHook(ctx) {\n  const value = ctx.run(\"细粒度分支的 props / Hook 顺序\")\n  ctx.next(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  }
};
