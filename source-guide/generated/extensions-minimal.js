rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["extensions"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「扩展机制」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：useApp 的 use() 在客户端上下文中直接调用 appRue.use(plugin, ...options)，底层由 plugins.use() 接收并排队执行后继续到「useApp 内调用 appRue.use」。",
    "code": "function extensionsStep001_useAppAppUsePlugin(ctx) {\n  const value = ctx.run(\"useApp(App).use(plugin)\")\n  ctx.next(\"useApp 内调用 appRue.use\", value)\n  return value\n}",
    "watch": "手写时先盯住：appRue、plugin、options。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「扩展机制」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：appRue.use(plugin, ...options)执行后继续到「runWithClientRuntime → runWithRuntime」。",
    "code": "function extensionsStep002_useAppAppRueUse(ctx) {\n  const value = ctx.run(\"useApp 内调用 appRue.use\")\n  ctx.next(\"runWithClientRuntime → runWithRuntime\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「扩展机制」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：内部 runner 是 () => appRue.use(plugin, ...options)。执行后继续到「plugins.use()」。",
    "code": "function extensionsStep003_runWithClientRuntimeRunWithRuntime(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"plugins.use()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「扩展机制」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：use() 不立即安装；稍后 appController.mount() 在根 render 之前调用 plugins.flush() 消费 pending 队列执行后继续到「挂载阶段消费待安装插件」。",
    "code": "function extensionsStep004_pluginsUse(ctx) {\n  const value = ctx.run(\"plugins.use()\")\n  ctx.next(\"挂载阶段消费待安装插件\", value)\n  return value\n}",
    "watch": "手写时先盯住：pending、state.disposed。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「扩展机制」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：plugins.flush()执行后继续到「plugins.flush()」。",
    "code": "function extensionsStep005(ctx) {\n  const value = ctx.run(\"挂载阶段消费待安装插件\")\n  ctx.next(\"plugins.flush()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「扩展机制」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：flush() 遍历本批 plugin records，对带 install 方法的对象用 Reflect.apply(plugin.install, ...) 执行安装执行后继续到「Reflect.apply(plugin.install)」。",
    "code": "function extensionsStep006_pluginsFlush(ctx) {\n  const value = ctx.run(\"plugins.flush()\")\n  ctx.next(\"Reflect.apply(plugin.install)\", value)\n  return value\n}",
    "watch": "手写时先盯住：transaction.status、pending。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「扩展机制」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：插件安装链到此结束；下一步切换到组件注册的并列入口 app.component()，插件或业务代码都可调用它执行后继续到「app.component()」。",
    "code": "function extensionsStep007_reflectApplyPluginInstall(ctx) {\n  if (!ctx.match(\"Reflect.apply(plugin.install)\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"app.component()\", value)\n  return value\n}",
    "watch": "手写时先盯住：install、options、catch 分支。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「扩展机制」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：app.component(name, component) 把 appRue、name 和实现直接传给 registerRuntimeComponent()执行后继续到「app.component 转交注册表」。",
    "code": "function extensionsStep008_appComponent(ctx) {\n  const value = ctx.run(\"app.component()\")\n  ctx.next(\"app.component 转交注册表\", value)\n  return value\n}",
    "watch": "手写时先盯住：name、component、appRue。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「扩展机制」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：registerRuntimeComponent(appRue, name, component)执行后继续到「registerRuntimeComponent()」。",
    "code": "function extensionsStep009_appComponent(ctx) {\n  const value = ctx.run(\"app.component 转交注册表\")\n  ctx.next(\"registerRuntimeComponent()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「扩展机制」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：注册表等待动态组件读取；以后编译器遇到小写 component 标签时，会把它映射成内置 DynamicComponent handle执行后继续到「<component is=\"Foo\"> mapping」。",
    "code": "function extensionsStep010_registerRuntimeComponent(ctx) {\n  const value = ctx.run(\"registerRuntimeComponent()\")\n  ctx.next(\"<component is=\\\"Foo\\\"> mapping\", value)\n  return value\n}",
    "watch": "手写时先盯住：runtimeComponentRegistry、globalComponentRegistry。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「扩展机制」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：该 handle 挂载执行时，DynamicComponent 从 is prop 调用 resolveDynamicComponentType() 解析真正类型执行后继续到「执行 DynamicComponent 时解析 props.is」。",
    "code": "function extensionsStep011_componentIsFooMapping(ctx) {\n  const value = ctx.run(\"<component is=\\\"Foo\\\"> mapping\")\n  ctx.next(\"执行 DynamicComponent 时解析 props.is\", value)\n  return value\n}",
    "watch": "手写时先盯住：type、resolvedType、props.is。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「扩展机制」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const resolvedType = resolveDynamicComponentType(props.is)执行后继续到「resolveDynamicComponentType()」。",
    "code": "function extensionsStep012_dynamicComponentPropsIs(ctx) {\n  const value = ctx.run(\"执行 DynamicComponent 时解析 props.is\")\n  ctx.next(\"resolveDynamicComponentType()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「扩展机制」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：is 是字符串时解析器调用 resolveCurrentRuntimeComponent(name)，优先从当前 runtime 局部表查找执行后继续到「字符串查当前 runtime 注册表」。",
    "code": "function extensionsStep013_resolveDynamicComponentType(ctx) {\n  if (!ctx.match(\"resolveDynamicComponentType()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"字符串查当前 runtime 注册表\", value)\n  return value\n}",
    "watch": "手写时先盯住：is、resolvedType。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「扩展机制」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：resolveCurrentRuntimeComponent(执行后继续到「resolveCurrentRuntimeComponent()」。",
    "code": "function extensionsStep014_runtime(ctx) {\n  const value = ctx.run(\"字符串查当前 runtime 注册表\")\n  ctx.next(\"resolveCurrentRuntimeComponent()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「扩展机制」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：查找结果返回 resolveDynamicComponentType()；它选定注册组件或原生 tag 后，DynamicComponent 调用 h(resolvedType, forwardedProps)执行后继续到「h(resolvedType, forwardedProps)」。",
    "code": "function extensionsStep015_resolveCurrentRuntimeComponent(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"h(resolvedType, forwardedProps)\", value)\n  return value\n}",
    "watch": "手写时先盯住：getCurrentRuntime()、registered。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「扩展机制」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：返回的 handle 重新进入统一 MountInput 分派器，随后按 component 或 element 正常挂载，插件与动态组件链完成执行后回到本主题的外层调用者。",
    "code": "function extensionsStep016_hResolvedTypeForwardedProps(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先盯住：forwardedProps、forwardedChildren。"
  }
};
