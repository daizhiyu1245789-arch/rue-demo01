rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["domBinding"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「DOM 绑定」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：转换模块执行时会直接调用这些别名；创建标签的 _$createElement 首先落到 runtime 的 createElement()执行后继续到「编译 helper 导出别名」。",
    "code": "function domBindingStep001_dOMHelperAliases(ctx) {\n  const value = ctx.run(\"_$ DOM helper aliases\")\n  ctx.next(\"编译 helper 导出别名\", value)\n  return value\n}",
    "watch": "手写时先盯住：转换结果顶部的 _$ imports。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「DOM 绑定」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：createElement as _$createElement执行后继续到「createElement()」。",
    "code": "function domBindingStep002_helper(ctx) {\n  const value = ctx.run(\"编译 helper 导出别名\")\n  ctx.next(\"createElement()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「DOM 绑定」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：元素返回给编译产物后，后续生成指令按属性类型选择 setAttribute、setProperty 或 spreadAttributes；下一步先看普通 attribute 分支执行后继续到「setAttribute()」。",
    "code": "function domBindingStep003_createElement(ctx) {\n  const value = ctx.run(\"createElement()\")\n  ctx.next(\"setAttribute()\", value)\n  return value\n}",
    "watch": "手写时先盯住：tag、resolvedParent、activeDOMHostOperationContext。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「DOM 绑定」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：setAttribute 分支到此结束；property 绑定走并列的 setProperty() 路径，并不是 setAttribute 再调用它执行后继续到「setProperty()」。",
    "code": "function domBindingStep004_setAttribute(ctx) {\n  if (!ctx.match(\"setAttribute()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"setProperty()\", value)\n  return value\n}",
    "watch": "手写时先盯住：name、value、el.attributes。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「DOM 绑定」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：单个 property 分支结束；遇到对象展开时，编译产物改调 spreadAttributes()，由它批量比较并分派每个键执行后继续到「spreadAttributes() → setSpreadAttribute()」。",
    "code": "function domBindingStep005_setProperty(ctx) {\n  if (!ctx.match(\"setProperty()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"spreadAttributes() → setSpreadAttribute()\", value)\n  return value\n}",
    "watch": "手写时先盯住：target[name]、notifyCustomElementPropertyChanged。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「DOM 绑定」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：spreadAttributes() 经 applySpreadAttributes() / setSpreadAttribute() 比较属性。事件键直接调用 addEventListener(el, eventName, value)，不会调用 vaporWithEventModifiers()。下一步的修饰符包装由编译生成代码另行使用；两条路径在 addEventListener 处汇合。执行后继续到「spread 的事件分支直接注册 handler」。",
    "code": "function domBindingStep006_spreadAttributesSetSpreadAttribute(ctx) {\n  if (!ctx.match(\"spreadAttributes() → setSpreadAttribute()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"spread 的事件分支直接注册 handler\", value)\n  return value\n}",
    "watch": "手写时先盯住：state.merged、record.keys、previous、value。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「DOM 绑定」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：addEventListener(el, eventName, value)执行后继续到「vaporWithEventModifiers()」。",
    "code": "function domBindingStep007_spreadHandler(ctx) {\n  const value = ctx.run(\"spread 的事件分支直接注册 handler\")\n  ctx.next(\"vaporWithEventModifiers()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「DOM 绑定」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：包装后的 handler 传给 addEventListener helper；在真正注册前，bindEventHandlerToCurrentRuntime() 先捕获当前 Rue runtime执行后继续到「公共 addEventListener 的绑定入口」。",
    "code": "function domBindingStep008_vaporWithEventModifiers(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"公共 addEventListener 的绑定入口\", value)\n  return value\n}",
    "watch": "手写时先盯住：modifiers、event、__rue_options。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「DOM 绑定」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：bindEventHandlerToCurrentRuntime(listener)执行后继续到「bindEventHandlerToCurrentRuntime()」。",
    "code": "function domBindingStep009_addEventListener(ctx) {\n  const value = ctx.run(\"公共 addEventListener 的绑定入口\")\n  ctx.next(\"bindEventHandlerToCurrentRuntime()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「DOM 绑定」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：绑定上下文后的 listener 与解析出的 capture/once/passive options 一起传给 addNativeDOMEventListener()执行后继续到「实际调用处」。",
    "code": "function domBindingStep010_bindEventHandlerToCurrentRuntime(ctx) {\n  const value = ctx.run(\"bindEventHandlerToCurrentRuntime()\")\n  ctx.next(\"实际调用处\", value)\n  return value\n}",
    "watch": "手写时先盯住：__rue_runtime、runtimeBoundEventHandlers。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「DOM 绑定」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：addNativeDOMEventListener(el as any, eventName, listener)执行后继续到「addNativeDOMEventListener()」。",
    "code": "function domBindingStep011(ctx) {\n  const value = ctx.run(\"实际调用处\")\n  ctx.next(\"addNativeDOMEventListener()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「DOM 绑定」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：浏览器原生 listener 注册完成；事件触发时包装函数重新进入 Rue runtime，再执行用户 handler，本主题完成执行后回到本主题的外层调用者。",
    "code": "function domBindingStep012_addNativeDOMEventListener(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先盯住：eventName、boundListener、options。"
  }
};
