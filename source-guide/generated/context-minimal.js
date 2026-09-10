rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["context"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：业务 JSX 使用 Context.Provider 时，编译后的 h/createElement 以该 Provider 函数创建普通 component input执行后继续到「createElement(Context.Provider)」。",
    "code": "function contextStep001_createContext(ctx) {\n  const value = ctx.run(\"createContext()\")\n  ctx.next(\"createElement(Context.Provider)\", value)\n  return value\n}",
    "watch": "手写时先盯住：context、ProviderImpl。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：createElement 在构造 Provider props 时调用 withParentContextProps()，把当前组件身份作为隐藏 parent 元数据附加进去执行后继续到「withParentContextProps()」。",
    "code": "function contextStep002_createElementContextProvider(ctx) {\n  const value = ctx.run(\"createElement(Context.Provider)\")\n  ctx.next(\"withParentContextProps()\", value)\n  return value\n}",
    "watch": "手写时先盯住：resolvedType、contextualProps、children。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：该 props 随 Provider component input 一起被挂载；组件执行阶段调用闭包中的 ProviderImpl()执行后继续到「父指针如何参与组件执行」。",
    "code": "function contextStep003_withParentContextProps(ctx) {\n  const value = ctx.run(\"withParentContextProps()\")\n  ctx.next(\"父指针如何参与组件执行\", value)\n  return value\n}",
    "watch": "手写时先盯住：__rue_context_parent_instance__、parentInstance。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const propsParent =执行后继续到「Provider handle → mountInput(component)」。",
    "code": "function contextStep004(ctx) {\n  const value = ctx.run(\"父指针如何参与组件执行\")\n  ctx.next(\"Provider handle → mountInput(component)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：组件输入携带 Provider 的函数引用；mountComponent 经 renderComponent 调用它。执行后继续到「renderComponent → input.type.component(props)」。",
    "code": "function contextStep005_providerHandleMountInputComponent(ctx) {\n  const value = ctx.run(\"Provider handle → mountInput(component)\")\n  ctx.next(\"renderComponent → input.type.component(props)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：当前 input.type.component 为 ProviderImpl；返回的 ProviderBoundary handle 再次走同样的挂载入口。执行后继续到「ProviderImpl()」。",
    "code": "function contextStep006_renderComponentInputTypeComponent(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"ProviderImpl()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：ProviderImpl() 返回的 component handle 被统一挂载器继续执行，于是进入真正拥有 runtime instance 的 ProviderBoundary()执行后继续到「返回内层 ProviderBoundary 组件」。",
    "code": "function contextStep007_providerImpl(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"返回内层 ProviderBoundary 组件\", value)\n  return value\n}",
    "watch": "手写时先盯住：providerValue、boundaryProps。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：return h(ProviderBoundary执行后继续到「ProviderBoundary()」。",
    "code": "function contextStep008_providerBoundary(ctx) {\n  const value = ctx.run(\"返回内层 ProviderBoundary 组件\")\n  ctx.next(\"ProviderBoundary()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：ProviderBoundary 调用 getContextValueStore(currentInstance) 创建或取得当前 owner 的 context Map执行后继续到「获得 store 并写入 value」。",
    "code": "function contextStep009_providerBoundary(ctx) {\n  const value = ctx.run(\"ProviderBoundary()\")\n  ctx.next(\"获得 store 并写入 value\", value)\n  return value\n}",
    "watch": "手写时先盯住：instance、store、providerValue。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const store = getContextValueStore(instance, true)执行后继续到「getContextValueStore()」。",
    "code": "function contextStep010_storeValue(ctx) {\n  const value = ctx.run(\"获得 store 并写入 value\")\n  ctx.next(\"getContextValueStore()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：值写入 store 后，ProviderBoundary 调用 bindProviderChildrenToCurrentInstance()，把可见 children 的父链重绑到该 owner执行后继续到「store 写好后重新绑定 children 父链」。",
    "code": "function contextStep011_getContextValueStore(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"store 写好后重新绑定 children 父链\", value)\n  return value\n}",
    "watch": "手写时先盯住：existing、linkedCarrier、nextStore。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：bindProviderChildrenToCurrentInstance(boundaryProps.children)执行后继续到「bindProviderChildrenToCurrentInstance()」。",
    "code": "function contextStep012_storeChildren(ctx) {\n  const value = ctx.run(\"store 写好后重新绑定 children 父链\")\n  ctx.next(\"bindProviderChildrenToCurrentInstance()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：后代组件稍后执行 useContext(context) 时，从自己的 current instance 沿这条 owner/parent 链向上查找执行后继续到「useContext()」。",
    "code": "function contextStep013_bindProviderChildrenToCurrentInstance(ctx, items) {\n  for (const item of items) {\n    ctx.runCurrentStep(item)\n  }\n  ctx.next(\"useContext()\", items)\n  return items\n}",
    "watch": "手写时先盯住：handle.props、nestedChildren、current instance。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：遍历命中 store 中的 context key 就立即返回最近值；若走到链顶仍未命中，才进入默认值出口执行后继续到「遍历父候选，走到尽头返回默认值」。",
    "code": "function contextStep014_useContext(ctx) {\n  if (!ctx.match(\"useContext()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"遍历父候选，走到尽头返回默认值\", value)\n  return value\n}",
    "watch": "手写时先盯住：pendingInstances、visited、store.has(context)。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const parents = getParentContextCandidates执行后继续到「return context.defaultValue」。",
    "code": "function contextStep015(ctx) {\n  const value = ctx.run(\"遍历父候选，走到尽头返回默认值\")\n  ctx.next(\"return context.defaultValue\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「上下文与依赖注入」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：Provider 命中与默认值两条读取分支在这里收敛，Context 传递链完成执行后回到本主题的外层调用者。",
    "code": "function contextStep016_returnContextDefaultValue(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先盯住：context.defaultValue。"
  }
};
