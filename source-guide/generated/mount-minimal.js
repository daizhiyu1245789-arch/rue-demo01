rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["mount"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「应用挂载」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：useApp 返回的是应用控制对象；appRue 是它闭包里保存的底层运行时。AppOrOptions 为 RootApp 函数，因此后面 App 就是 RootApp。执行后继续到「getClientRuntime()：查找当前 DOM bridge 的缓存」。",
    "code": "function mountStep001_useAppRootAppAppRue(ctx) {\n  const value = ctx.run(\"useApp(RootApp)：取得并保存 appRue\")\n  ctx.next(\"getClientRuntime()：查找当前 DOM bridge 的缓存\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「应用挂载」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：有缓存或已有 __rue 时复用；只有两者都没有，才执行下面 A03–A08 的创建过程。执行后继续到「createClientRuntime() → createRueRuntime(bridge)」。",
    "code": "function mountStep002_getClientRuntimeDOMBridge(ctx) {\n  if (!ctx.match(\"getClientRuntime()：查找当前 DOM bridge 的缓存\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"createClientRuntime() → createRueRuntime(bridge)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「应用挂载」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：以下创建步骤仅在创建新 runtime 时发生。这里调用的 createRueRuntime 是从 @rue-js/runtime-vapor 导入的工厂，它在模块加载时已由 createRuntimeEntry(...) 生成。执行后继续到「模块加载时：createRuntimeEntry() 先生成 createRueRuntime 工厂」。",
    "code": "function mountStep003_createClientRuntimeCreateRueRuntimeBridge(ctx) {\n  const value = ctx.run(\"createClientRuntime() → createRueRuntime(bridge)\")\n  ctx.next(\"模块加载时：createRuntimeEntry() 先生成 createRueRuntime 工厂\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「应用挂载」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：这一步不是从 createClientRuntime 函数体里临时调用过来的；runtime-vapor/index.js 在模块初始化时先执行 createRuntimeEntry(...)，导出的 createRueRuntime 已经是 wrapCreateRue 包装后的工厂。执行后继续到「createRue() → createRueBase()」。",
    "code": "function mountStep004_createRuntimeEntryCreateRueRuntime(ctx) {\n  const value = ctx.run(\"模块加载时：createRuntimeEntry() 先生成 createRueRuntime 工厂\")\n  ctx.next(\"createRue() → createRueBase()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「应用挂载」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：createCompatMountController() 创建分派器；createRueBase() 创建 runtime 对象。执行后继续到「createRueBase()：对象里的原始 mount」。",
    "code": "function mountStep005_createRueCreateRueBase(ctx) {\n  const value = ctx.run(\"createRue() → createRueBase()\")\n  ctx.next(\"createRueBase()：对象里的原始 mount\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「应用挂载」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：originalMount 指的就是此处定义的方法。此时仅定义函数；挂载逻辑尚未执行。执行后继续到「wrapCreateRue()：逐个包装 mount / render 等入口」。",
    "code": "function mountStep006_createRueBaseMount(ctx) {\n  const value = ctx.createValue(\"createRueBase()：对象里的原始 mount\")\n  ctx.store(\"createRueBase()：对象里的原始 mount\", value)\n  ctx.next(\"wrapCreateRue()：逐个包装 mount / render 等入口\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「应用挂载」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：rawCreateRue 返回对象后，循环把 mount 交给 wrapRuntimeEntryMethod。执行后继续到「wrapRuntimeEntryMethod()：保存原方法 original」。",
    "code": "function mountStep007_wrapCreateRueMountRender(ctx) {\n  const value = ctx.run(\"wrapCreateRue()：逐个包装 mount / render 等入口\")\n  ctx.next(\"wrapRuntimeEntryMethod()：保存原方法 original\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「应用挂载」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：methodName 为 mount；original 保存上一行的原始 mount。包装函数通过闭包一直持有 original。执行后继续到「Reflect.set()：把 runtime.mount 替换成包装函数」。",
    "code": "function mountStep008_wrapRuntimeEntryMethodOriginal(ctx) {\n  const value = ctx.createValue(\"wrapRuntimeEntryMethod()：保存原方法 original\")\n  ctx.store(\"wrapRuntimeEntryMethod()：保存原方法 original\", value)\n  ctx.next(\"Reflect.set()：把 runtime.mount 替换成包装函数\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「应用挂载」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：之后 appRue.mount 指向 wrappedRuntimeEntry；original 仍指向 create-rue-base.js 的 mount。执行后继续到「getClientRuntime() 返回同一个对象 → appRue 接住」。",
    "code": "function mountStep009_reflectSetRuntimeMount(ctx) {\n  const value = ctx.createValue(\"Reflect.set()：把 runtime.mount 替换成包装函数\")\n  ctx.store(\"Reflect.set()：把 runtime.mount 替换成包装函数\", value)\n  ctx.next(\"getClientRuntime() 返回同一个对象 → appRue 接住\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「应用挂载」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：因此 appRue 是 runtime 对象；appRue.mount 是包装函数。已有缓存时，上面的对象创建和包装已经发生过。执行后继续到「useApp() 返回应用控制对象；.use(router) 返回 this」。",
    "code": "function mountStep010_getClientRuntimeAppRue(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"useApp() 返回应用控制对象；.use(router) 返回 this\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「应用挂载」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：main.ts 的链式表达式接着调用此应用对象的 mount(\"#app\")。这里的 mount(container) 与 appRue.mount(app, container) 是两个不同方法。执行后继续到「main.ts → 应用对象.mount(\"#app\")」。",
    "code": "function mountStep011_useAppUseRouterThis(ctx) {\n  const value = ctx.run(\"useApp() 返回应用控制对象；.use(router) 返回 this\")\n  ctx.next(\"main.ts → 应用对象.mount(\\\"#app\\\")\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「应用挂载」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：下面按首次挂载成功路径展开；#app 存在，容器尚未归属其它应用。执行后继续到「useApp 返回对象的 mount(container)」。",
    "code": "function mountStep012_mainTsMountApp(ctx) {\n  const value = ctx.run(\"main.ts → 应用对象.mount(\\\"#app\\\")\")\n  ctx.next(\"useApp 返回对象的 mount(container)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「应用挂载」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：形参 container = \"#app\"；闭包中 App = RootApp，appRue = 前面保存的 runtime。执行后继续到「normalizeContainer(container)」。",
    "code": "function mountStep013_useAppMountContainer(ctx) {\n  const value = ctx.run(\"useApp 返回对象的 mount(container)\")\n  ctx.next(\"normalizeContainer(container)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「应用挂载」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：字符串选择器交给 querySelector(container)，得到真实 DOM 元素 el；如果传入的已经是元素，则直接返回。执行后继续到「回到 mount：el 检查、重复挂载检查」。",
    "code": "function mountStep014_normalizeContainerContainer(ctx) {\n  const value = ctx.run(\"normalizeContainer(container)\")\n  ctx.next(\"回到 mount：el 检查、重复挂载检查\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「应用挂载」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：el 为真实 #app；没有元素则结束，同一应用重复挂载同一容器也直接结束。当前首次挂载继续向下。执行后继续到「reserveAppContainer(el, containerOwner)」。",
    "code": "function mountStep015_mountEl(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"reserveAppContainer(el, containerOwner)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「应用挂载」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：container = el，owner = 当前 useApp 闭包的 containerOwner。记录临时占用并返回 reservation。执行后继续到「回到 mount：保存临时容器与事务标记」。",
    "code": "function mountStep016_reserveAppContainerElContainerOwner(ctx) {\n  const value = ctx.run(\"reserveAppContainer(el, containerOwner)\")\n  ctx.next(\"回到 mount：保存临时容器与事务标记\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "17": {
    "title": "17 · 最小实现",
    "intro": "这是「应用挂载」第 17 步的最小手写版，只保留当前节点的核心动作。对应源码线索：reservation 有效 → pendingContainerRef = el。执行后继续到「settextContent(el, \"\")：先清空根容器」。",
    "code": "function mountStep017_mount(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"settextContent(el, \\\"\\\")：先清空根容器\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "18": {
    "title": "18 · 最小实现",
    "intro": "这是「应用挂载」第 18 步的最小手写版，只保留当前节点的核心动作。对应源码线索：首次挂载前先清空 #app 原有内容。此调用结束后继续同一个 mount 函数。执行后继续到「runWithClientRuntime(appRue, 箭头函数, el)」。",
    "code": "function mountStep018_settextContentEl(ctx) {\n  const value = ctx.run(\"settextContent(el, \\\"\\\")：先清空根容器\")\n  ctx.next(\"runWithClientRuntime(appRue, 箭头函数, el)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "19": {
    "title": "19 · 最小实现",
    "intro": "这是「应用挂载」第 19 步的最小手写版，只保留当前节点的核心动作。对应源码线索：第二个参数是 () => { appRue.mount(App, el) }。现在只把函数传进去，尚未执行它。为便于区分，下文称它为 mountRunner；这是说明用名称。执行后继续到「runWithClientRuntime(runtime, runner, container)」。",
    "code": "function mountStep019_runWithClientRuntimeAppRueEl(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"runWithClientRuntime(runtime, runner, container)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "20": {
    "title": "20 · 最小实现",
    "intro": "这是「应用挂载」第 20 步的最小手写版，只保留当前节点的核心动作。对应源码线索：参数对应：runtime = appRue；runner = mountRunner；container = el。执行后继续到「ensureRuntimeDOMBridge(runtime)」。",
    "code": "function mountStep020_runWithClientRuntimeRuntimeRunnerContainer(ctx) {\n  const value = ctx.run(\"runWithClientRuntime(runtime, runner, container)\")\n  ctx.next(\"ensureRuntimeDOMBridge(runtime)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "21": {
    "title": "21 · 最小实现",
    "intro": "这是「应用挂载」第 21 步的最小手写版，只保留当前节点的核心动作。对应源码线索：确认 runtime 绑定当前 DOM bridge。已绑定同一 bridge 则直接返回；否则 setDOMAdapter 并登记绑定。执行后继续到「runWithRuntime(runtime, 内部箭头函数)」。",
    "code": "function mountStep021_ensureRuntimeDOMBridgeRuntime(ctx) {\n  const value = ctx.run(\"ensureRuntimeDOMBridge(runtime)\")\n  ctx.next(\"runWithRuntime(runtime, 内部箭头函数)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "22": {
    "title": "22 · 最小实现",
    "intro": "这是「应用挂载」第 22 步的最小手写版，只保留当前节点的核心动作。对应源码线索：又传入一个函数：它负责容器入栈并调用外层 runner。下文称它为 contextRunner。它与 mountRunner 是两个函数。执行后继续到「runWithRuntime()：保存旧活动 runtime，设置新值」。",
    "code": "function mountStep022_runWithRuntimeRuntime(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"runWithRuntime()：保存旧活动 runtime，设置新值\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "23": {
    "title": "23 · 最小实现",
    "intro": "这是「应用挂载」第 23 步的最小手写版，只保留当前节点的核心动作。对应源码线索：这里 runWithRuntime 的形参 runner = contextRunner，和 runWithClientRuntime 的 runner 不是同一个函数。执行后继续到「runWithRuntime 中的 runner() → contextRunner」。",
    "code": "function mountStep023_runWithRuntimeRuntime(ctx) {\n  const value = ctx.run(\"runWithRuntime()：保存旧活动 runtime，设置新值\")\n  ctx.next(\"runWithRuntime 中的 runner() → contextRunner\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "24": {
    "title": "24 · 最小实现",
    "intro": "这是「应用挂载」第 24 步的最小手写版，只保留当前节点的核心动作。对应源码线索：返回到 client-runtime.ts 的内部箭头函数，满足 didPush 条件时先把 el 压入当前容器栈。执行后继续到「runWithClientRuntime 中的 runner() → mountRunner」。",
    "code": "function mountStep024_runWithRuntimeRunnerContextRunner(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"runWithClientRuntime 中的 runner() → mountRunner\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "25": {
    "title": "25 · 最小实现",
    "intro": "这是「应用挂载」第 25 步的最小手写版，只保留当前节点的核心动作。对应源码线索：这次 runner 是 useApp.ts 传入的那个箭头函数。下一行回到它的函数体。执行后继续到「回到 useApp.ts：执行 appRue.mount(App, el)」。",
    "code": "function mountStep025_runWithClientRuntimeRunnerMountRunner(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"回到 useApp.ts：执行 appRue.mount(App, el)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "26": {
    "title": "26 · 最小实现",
    "intro": "这是「应用挂载」第 26 步的最小手写版，只保留当前节点的核心动作。对应源码线索：实际参数为 [RootApp, el]。从 appRue 对象读取 mount 属性，拿到 wrappedRuntimeEntry。执行后继续到「wrappedRuntimeEntry(...args)」。",
    "code": "function mountStep026_useAppTsAppRueMount(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"wrappedRuntimeEntry(...args)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "27": {
    "title": "27 · 最小实现",
    "intro": "这是「应用挂载」第 27 步的最小手写版，只保留当前节点的核心动作。对应源码线索：args = [App, el]；this = appRue。original 是创建时保存的原始 mount。执行后继续到「Reflect.apply(original, this, args)」。",
    "code": "function mountStep027_wrappedRuntimeEntryArgs(ctx) {\n  const value = ctx.run(\"wrappedRuntimeEntry(...args)\")\n  ctx.next(\"Reflect.apply(original, this, args)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "28": {
    "title": "28 · 最小实现",
    "intro": "这是「应用挂载」第 28 步的最小手写版，只保留当前节点的核心动作。对应源码线索：等价于用 appRue 作 this，调用 original(App, el)。这里才真正进入你贴出的 mount(app, container)。执行后继续到「create-rue-base.js：原始 mount(app, container)」。",
    "code": "function mountStep028_reflectApplyOriginalThis(ctx) {\n  const value = ctx.run(\"Reflect.apply(original, this, args)\")\n  ctx.next(\"create-rue-base.js：原始 mount(app, container)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "29": {
    "title": "29 · 最小实现",
    "intro": "这是「应用挂载」第 29 步的最小手写版，只保留当前节点的核心动作。对应源码线索：app = App = RootApp；container = el。这里不是又创建一个 runtime。执行后继续到「appController.mount(app, container, root => { … })」。",
    "code": "function mountStep029_createRueBaseJs(ctx) {\n  const value = ctx.run(\"create-rue-base.js：原始 mount(app, container)\")\n  ctx.next(\"appController.mount(app, container, root => { … })\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "30": {
    "title": "30 · 最小实现",
    "intro": "这是「应用挂载」第 30 步的最小手写版，只保留当前节点的核心动作。对应源码线索：第三个参数是根渲染回调，下面称它为 renderRoot。现在传入而不执行；root 是这个回调的形参。执行后继续到「appController.mount(app, container, render)」。",
    "code": "function mountStep030_appControllerMountAppContainer(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"appController.mount(app, container, render)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "31": {
    "title": "31 · 最小实现",
    "intro": "这是「应用挂载」第 31 步的最小手写版，只保留当前节点的核心动作。对应源码线索：app 和 container 原样传入；形参 render = renderRoot。这里的 render 只是回调参数名。执行后继续到「检查 runtime 与容器事务」。",
    "code": "function mountStep031_appControllerMountAppContainer(ctx) {\n  const value = ctx.run(\"appController.mount(app, container, render)\")\n  ctx.next(\"检查 runtime 与容器事务\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "32": {
    "title": "32 · 最小实现",
    "intro": "这是「应用挂载」第 32 步的最小手写版，只保留当前节点的核心动作。对应源码线索：检查旧事务失败状态与 owner。后续源码进入首次挂载的事务创建。执行后继续到「记录 transaction 与 activeAppMount」。",
    "code": "function mountStep032_runtime(ctx) {\n  const value = ctx.run(\"检查 runtime 与容器事务\")\n  ctx.next(\"记录 transaction 与 activeAppMount\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "33": {
    "title": "33 · 最小实现",
    "intro": "这是「应用挂载」第 33 步的最小手写版，只保留当前节点的核心动作。对应源码线索：transaction.status = \"mounting\"。保存之前的 activeAppMount，最后要在 finally 恢复。执行后继续到「plugins.flush()：先安装待处理插件」。",
    "code": "function mountStep033_transactionActiveAppMount(ctx) {\n  const value = ctx.run(\"记录 transaction 与 activeAppMount\")\n  ctx.next(\"plugins.flush()：先安装待处理插件\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "34": {
    "title": "34 · 最小实现",
    "intro": "这是「应用挂载」第 34 步的最小手写版，只保留当前节点的核心动作。对应源码线索：逐个读取 plugin.install 并 Reflect.apply(install, plugin, [undefined, options])；插件内部调用依其实现而定，执行返回后才继续 render(app)。执行后继续到「回到 appController：render(app)」。",
    "code": "function mountStep034_pluginsFlush(ctx) {\n  const value = ctx.run(\"plugins.flush()：先安装待处理插件\")\n  ctx.next(\"回到 appController：render(app)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "35": {
    "title": "35 · 最小实现",
    "intro": "这是「应用挂载」第 35 步的最小手写版，只保留当前节点的核心动作。对应源码线索：render = renderRoot。把 app 作为实参调用；下一行回到 create-rue-base.js 的 root 回调。执行后继续到「进入 renderRoot(root)：root 接收 app」。",
    "code": "function mountStep035_appControllerRenderApp(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"进入 renderRoot(root)：root 接收 app\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "36": {
    "title": "36 · 最小实现",
    "intro": "这是「应用挂载」第 36 步的最小手写版，只保留当前节点的核心动作。对应源码线索：root === app === RootApp。先创建 (props) => { … } 包装组件；此处还没有执行 RootApp。执行后继续到「createElementMountInput()：包装组件变成 component 输入」。",
    "code": "function mountStep036_renderRootRootRootApp(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"createElementMountInput()：包装组件变成 component 输入\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "37": {
    "title": "37 · 最小实现",
    "intro": "这是「应用挂载」第 37 步的最小手写版，只保留当前节点的核心动作。对应源码线索：typeTag = 上一步的 props 箭头函数；propsValue = {}；strictComponentReturns = true。type.component 保存这个函数。执行后继续到「createInput()：建立标准 MountInput」。",
    "code": "function mountStep037_createElementMountInputComponent(ctx) {\n  const value = ctx.run(\"createElementMountInput()：包装组件变成 component 输入\")\n  ctx.next(\"createInput()：建立标准 MountInput\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "38": {
    "title": "38 · 最小实现",
    "intro": "这是「应用挂载」第 38 步的最小手写版，只保留当前节点的核心动作。对应源码线索：复制 props、提取 key/scope/cleanup 等元数据，返回 { type, props, children, … }。此时 type.kind = \"component\"。执行后继续到「storeMountInput(state, input)：保存输入并返回 handle」。",
    "code": "function mountStep038_createInputMountInput(ctx) {\n  const value = ctx.run(\"createInput()：建立标准 MountInput\")\n  ctx.next(\"storeMountInput(state, input)：保存输入并返回 handle\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "39": {
    "title": "39 · 最小实现",
    "intro": "这是「应用挂载」第 39 步的最小手写版，只保留当前节点的核心动作。对应源码线索：内层 createElementMountInput 返回之后，才调用外层 storeMountInput。返回值 value 是带 mount id 的 handle。执行后继续到「回到 renderRoot：recordInput(\"render\", value, [container])」。",
    "code": "function mountStep039_storeMountInputStateInputHandle(ctx) {\n  const value = ctx.run(\"storeMountInput(state, input)：保存输入并返回 handle\")\n  ctx.next(\"回到 renderRoot：recordInput(\\\"render\\\", value, [container])\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "40": {
    "title": "40 · 最小实现",
    "intro": "这是「应用挂载」第 40 步的最小手写版，只保留当前节点的核心动作。对应源码线索：把刚得到的 handle 交给 recordInput，接下来解析回标准输入。执行后继续到「recordInput() → normalizeMountInput() → 记录输入」。",
    "code": "function mountStep040_renderRootRecordInputRenderValue(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"recordInput() → normalizeMountInput() → 记录输入\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "41": {
    "title": "41 · 最小实现",
    "intro": "这是「应用挂载」第 41 步的最小手写版，只保留当前节点的核心动作。对应源码线索：normalizeMountInput 识别 handle，从 state.mountInputs 取回标准输入；随后压入 pendingInputs，并调用 kernel.recordRuntimeInput，最后返回 input。执行后继续到「runRenderEntry(箭头函数)」。",
    "code": "function mountStep041_recordInputNormalizeMountInput(ctx) {\n  const value = ctx.run(\"recordInput() → normalizeMountInput() → 记录输入\")\n  ctx.next(\"runRenderEntry(箭头函数)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "42": {
    "title": "42 · 最小实现",
    "intro": "这是「应用挂载」第 42 步的最小手写版，只保留当前节点的核心动作。对应源码线索：再传入一个回调：() => renderContainer(state, mountController, input, container)。执行后继续到「runRenderEntry()：renderDepth++ → render()」。",
    "code": "function mountStep042_runRenderEntry(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"runRenderEntry()：renderDepth++ → render()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "43": {
    "title": "43 · 最小实现",
    "intro": "这是「应用挂载」第 43 步的最小手写版，只保留当前节点的核心动作。对应源码线索：render = 刚传入的箭头函数。执行 render() 后才进入 renderContainer；finally 要等整个渲染回调返回后才执行。执行后继续到「renderContainer(state, controller, input, container)」。",
    "code": "function mountStep043_runRenderEntryRenderDepthRender(ctx) {\n  const value = ctx.run(\"runRenderEntry()：renderDepth++ → render()\")\n  ctx.next(\"renderContainer(state, controller, input, container)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "44": {
    "title": "44 · 最小实现",
    "intro": "这是「应用挂载」第 44 步的最小手写版，只保留当前节点的核心动作。对应源码线索：controller = mountController；input.kind 在 input.type.kind 上，此时是 component。执行后继续到「createHost(state.adapter) 与 previous 检查」。",
    "code": "function mountStep044_renderContainerStateControllerInput(ctx) {\n  const value = ctx.run(\"renderContainer(state, controller, input, container)\")\n  ctx.next(\"createHost(state.adapter) 与 previous 检查\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "45": {
    "title": "45 · 最小实现",
    "intro": "这是「应用挂载」第 45 步的最小手写版，只保留当前节点的核心动作。对应源码线索：host 提供绑定到 DOM adapter 的操作。首次挂载 previous 不存在，因此跳过 patch 分支。执行后继续到「createHost(adapter)：为各 DOM 操作建立闭包」。",
    "code": "function mountStep045_createHostStateAdapterPrevious(ctx) {\n  if (!ctx.match(\"createHost(state.adapter) 与 previous 检查\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"createHost(adapter)：为各 DOM 操作建立闭包\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "46": {
    "title": "46 · 最小实现",
    "intro": "这是「应用挂载」第 46 步的最小手写版，只保留当前节点的核心动作。对应源码线索：requiredHostMethods.map(name => [name, bindRequired(adapter, name)]) 返回绑定后的 host。执行后继续到「bindRequired(adapter, name)：保存 adapter 上的方法」。",
    "code": "function mountStep046_createHostAdapterDOM(ctx) {\n  const value = ctx.run(\"createHost(adapter)：为各 DOM 操作建立闭包\")\n  ctx.next(\"bindRequired(adapter, name)：保存 adapter 上的方法\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "47": {
    "title": "47 · 最小实现",
    "intro": "这是「应用挂载」第 47 步的最小手写版，只保留当前节点的核心动作。对应源码线索：返回 (...args) => Reflect.apply(method, adapter, args)。因此后面的 host.appendChild 会调用这个绑定闭包。执行后继续到「controller.mountInput(state, host, input, container)」。",
    "code": "function mountStep047_bindRequiredAdapterNameAdapter(ctx) {\n  const value = ctx.createValue(\"bindRequired(adapter, name)：保存 adapter 上的方法\")\n  ctx.store(\"bindRequired(adapter, name)：保存 adapter 上的方法\", value)\n  ctx.next(\"controller.mountInput(state, host, input, container)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "48": {
    "title": "48 · 最小实现",
    "intro": "这是「应用挂载」第 48 步的最小手写版，只保留当前节点的核心动作。对应源码线索：container 作为 mountInput 的 parentContext 传进去。执行后继续到「mountInput()：component 分支 → mountComponent()」。",
    "code": "function mountStep048_controllerMountInputStateHost(ctx) {\n  const value = ctx.run(\"controller.mountInput(state, host, input, container)\")\n  ctx.next(\"mountInput()：component 分支 → mountComponent()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "49": {
    "title": "49 · 最小实现",
    "intro": "这是「应用挂载」第 49 步的最小手写版，只保留当前节点的核心动作。对应源码线索：第五个参数 controller.mountInput 也是函数，稍后作为 mountInput 形参用于挂载组件返回的子树。执行后继续到「mountComponent()：创建 instance」。",
    "code": "function mountStep049_mountInputComponentMountComponent(ctx) {\n  const value = ctx.run(\"mountInput()：component 分支 → mountComponent()\")\n  ctx.next(\"mountComponent()：创建 instance\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "50": {
    "title": "50 · 最小实现",
    "intro": "这是「应用挂载」第 50 步的最小手写版，只保留当前节点的核心动作。对应源码线索：创建稳定实例；initialRender = true。RootApp 本身仍未执行。执行后继续到「定义 renderSubtree()，里面将调用 renderComponent」。",
    "code": "function mountStep050_mountComponentInstance(ctx) {\n  const value = ctx.run(\"mountComponent()：创建 instance\")\n  ctx.next(\"定义 renderSubtree()，里面将调用 renderComponent\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "51": {
    "title": "51 · 最小实现",
    "intro": "这是「应用挂载」第 51 步的最小手写版，只保留当前节点的核心动作。对应源码线索：这里先定义闭包。renderSubtree 内还会把 next => … 传给 renderComponent。执行后继续到「保存 renderSubtree 并选择首次执行方式」。",
    "code": "function mountStep051_renderSubtreeRenderComponent(ctx) {\n  const value = ctx.createValue(\"定义 renderSubtree()，里面将调用 renderComponent\")\n  ctx.store(\"定义 renderSubtree()，里面将调用 renderComponent\", value)\n  ctx.next(\"保存 renderSubtree 并选择首次执行方式\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "52": {
    "title": "52 · 最小实现",
    "intro": "这是「应用挂载」第 52 步的最小手写版，只保留当前节点的核心动作。对应源码线索：根包装函数未设置 reactive factory 标记，先走 else 的 renderSubtree()。其他组件可能走 createComponentRenderEffect 分支。执行后继续到「renderSubtree() → runComponentRenderEntry()」。",
    "code": "function mountStep052_renderSubtree(ctx) {\n  if (!ctx.match(\"保存 renderSubtree 并选择首次执行方式\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"renderSubtree() → runComponentRenderEntry()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "53": {
    "title": "53 · 最小实现",
    "intro": "这是「应用挂载」第 53 步的最小手写版，只保留当前节点的核心动作。对应源码线索：组件级 renderDepth++，再执行 render 回调。返回时减深度；最外层仍在渲染时不会提前刷 mounted。执行后继续到「renderComponent(..., next => …)」。",
    "code": "function mountStep053_renderSubtreeRunComponentRenderEntry(ctx) {\n  const value = ctx.run(\"renderSubtree() → runComponentRenderEntry()\")\n  ctx.next(\"renderComponent(..., next => …)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "54": {
    "title": "54 · 最小实现",
    "intro": "这是「应用挂载」第 54 步的最小手写版，只保留当前节点的核心动作。对应源码线索：initialRender = true，所以传入的 mountSubtree 回调稍后会执行 mountInput(state, host, next, parentContext)。执行后继续到「renderComponent() → state.components.render()」。",
    "code": "function mountStep054_renderComponentNext(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"renderComponent() → state.components.render()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "55": {
    "title": "55 · 最小实现",
    "intro": "这是「应用挂载」第 55 步的最小手写版，只保留当前节点的核心动作。对应源码线索：第四个参数 mountSubtree 是上一步的 next 回调。此处又传入一个 props 回调给 components.render。执行后继续到「components.render(instance, input, run) → prepare()」。",
    "code": "function mountStep055_renderComponentStateComponentsRender(ctx) {\n  const value = ctx.run(\"renderComponent() → state.components.render()\")\n  ctx.next(\"components.render(instance, input, run) → prepare()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "56": {
    "title": "56 · 最小实现",
    "intro": "这是「应用挂载」第 56 步的最小手写版，只保留当前节点的核心动作。对应源码线索：run = component.js 中的 props 回调。prepare 同步 props 和父 owner；beginComponentRender 建立组件渲染上下文。执行后继续到「runWithOwningRuntime(..., () => carrier.renderHooks(...))」。",
    "code": "function mountStep056_componentsRenderInstanceInput(ctx) {\n  const value = ctx.run(\"components.render(instance, input, run) → prepare()\")\n  ctx.next(\"runWithOwningRuntime(..., () => carrier.renderHooks(...))\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "57": {
    "title": "57 · 最小实现",
    "intro": "这是「应用挂载」第 57 步的最小手写版，只保留当前节点的核心动作。对应源码线索：这层回调先进入 runWithOwningRuntime，然后才调用 carrier.renderHooks。执行后继续到「runWithOwningRuntime()：切换 runtime 后执行 run()」。",
    "code": "function mountStep057_runWithOwningRuntimeCarrierRenderHooks(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"runWithOwningRuntime()：切换 runtime 后执行 run()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "58": {
    "title": "58 · 最小实现",
    "intro": "这是「应用挂载」第 58 步的最小手写版，只保留当前节点的核心动作。对应源码线索：这里的 run 是上一行传入的外层箭头函数，执行后会调用 carrier.renderHooks。执行后继续到「carrier.renderHooks(instance.host, () => run(instance.propsRO))」。",
    "code": "function mountStep058_runWithOwningRuntimeRuntimeRun(ctx) {\n  const value = ctx.run(\"runWithOwningRuntime()：切换 runtime 后执行 run()\")\n  ctx.next(\"carrier.renderHooks(instance.host, () => run(instance.propsRO))\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "59": {
    "title": "59 · 最小实现",
    "intro": "这是「应用挂载」第 59 步的最小手写版，只保留当前节点的核心动作。对应源码线索：Hook 上下文执行内层箭头函数，再把 instance.propsRO 传给 component.js 的 props 回调。执行后继续到「renderHooks(instance, render)：压入 Hook frame」。",
    "code": "function mountStep059_carrierRenderHooksInstanceHost(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"renderHooks(instance, render)：压入 Hook frame\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "60": {
    "title": "60 · 最小实现",
    "intro": "这是「应用挂载」第 60 步的最小手写版，只保留当前节点的核心动作。对应源码线索：render 是 instance.js 传入的 () => run(instance.propsRO)。frames.push 后的 render() 才执行它。执行后继续到「render() → run(instance.propsRO) → component.js props 回调」。",
    "code": "function mountStep060_renderHooksInstanceRenderHook(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"render() → run(instance.propsRO) → component.js props 回调\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "61": {
    "title": "61 · 最小实现",
    "intro": "这是「应用挂载」第 61 步的最小手写版，只保留当前节点的核心动作。对应源码线索：run = components.render 第三个参数；instance.propsRO 作为 props 实参传入。执行后继续到「回到 component.js 的 props 回调」。",
    "code": "function mountStep061_renderRunInstancePropsRO(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"回到 component.js 的 props 回调\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "62": {
    "title": "62 · 最小实现",
    "intro": "这是「应用挂载」第 62 步的最小手写版，只保留当前节点的核心动作。对应源码线索：首次 updating = false。执行 input.type.component(props)；这里 component 是先前在原始 mount 中创建的包装函数。执行后继续到「进入根包装组件：(props) => Reflect.apply(root, …)」。",
    "code": "function mountStep062_componentJsProps(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"进入根包装组件：(props) => Reflect.apply(root, …)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "63": {
    "title": "63 · 最小实现",
    "intro": "这是「应用挂载」第 63 步的最小手写版，只保留当前节点的核心动作。对应源码线索：root = RootApp。这句才真正调用业务根组件 RootApp(props)。执行后继续到「RootApp(props)：执行业务根组件」。",
    "code": "function mountStep063_propsReflectApplyRoot(ctx) {\n  const value = ctx.run(\"进入根包装组件：(props) => Reflect.apply(root, …)\")\n  ctx.next(\"RootApp(props)：执行业务根组件\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "64": {
    "title": "64 · 最小实现",
    "intro": "这是「应用挂载」第 64 步的最小手写版，只保留当前节点的核心动作。对应源码线索：此处展示原始 TSX。浏览器执行的是编译后的组件；JSX 经编译创建 Vapor 描述。RootApp 包含 SiteLayout 和 RouterView，业务子树随路由变化。执行后继续到「RootApp 返回 → 根包装函数返回 → value 接住」。",
    "code": "function mountStep064_rootAppProps(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"RootApp 返回 → 根包装函数返回 → value 接住\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "65": {
    "title": "65 · 最小实现",
    "intro": "这是「应用挂载」第 65 步的最小手写版，只保留当前节点的核心动作。对应源码线索：顺序退出 RootApp 与 Reflect.apply，value 收到组件返回的描述。返回描述还要继续挂载，尚未提交到 #app。执行后继续到「首次生命周期：before_create → created → before_mount」。",
    "code": "function mountStep065_rootAppValue(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"首次生命周期：before_create → created → before_mount\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "66": {
    "title": "66 · 最小实现",
    "intro": "这是「应用挂载」第 66 步的最小手写版，只保留当前节点的核心动作。对应源码线索：按源码顺序逐次调用 lifecycle.call；内部执行当前实例上已注册的对应 Hook，返回后继续。执行后继续到「normalizeComponentResult(state, value)」。",
    "code": "function mountStep066_beforeCreateCreatedBefore(ctx) {\n  const value = ctx.run(\"首次生命周期：before_create → created → before_mount\")\n  ctx.next(\"normalizeComponentResult(state, value)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "67": {
    "title": "67 · 最小实现",
    "intro": "这是「应用挂载」第 67 步的最小手写版，只保留当前节点的核心动作。对应源码线索：null 保留为空；字符串/数字转 text；其余交给 normalizeMountInput。当前编译组件返回的 Vapor handle 走标准化路径。执行后继续到「mountSubtree(标准化后的输入)」。",
    "code": "function mountStep067_normalizeComponentResultStateValue(ctx) {\n  const value = ctx.run(\"normalizeComponentResult(state, value)\")\n  ctx.next(\"mountSubtree(标准化后的输入)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "68": {
    "title": "68 · 最小实现",
    "intro": "这是「应用挂载」第 68 步的最小手写版，只保留当前节点的核心动作。对应源码线索：mountSubtree 是 patch/component.js 传入的 next 箭头函数。执行后继续到「回到 next 回调：mountInput(..., next, parentContext)」。",
    "code": "function mountStep068_mountSubtree(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"回到 next 回调：mountInput(..., next, parentContext)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "69": {
    "title": "69 · 最小实现",
    "intro": "这是「应用挂载」第 69 步的最小手写版，只保留当前节点的核心动作。对应源码线索：首次 initialRender 为 true，于是再进入同一个 mountInput 分派器，这次 input 来自 RootApp 返回值。执行后继续到「mountInput()：vapor 分支 → mountVapor()」。",
    "code": "function mountStep069_nextMountInputNextParentContext(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"mountInput()：vapor 分支 → mountVapor()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "70": {
    "title": "70 · 最小实现",
    "intro": "这是「应用挂载」第 70 步的最小手写版，只保留当前节点的核心动作。对应源码线索：本段展开编译产物为 Vapor 的路径。若返回 text / element / component，则在同一个 switch 进入对应分支；不会依次执行所有分支。执行后继续到「mountVapor() → runVaporSetup()」。",
    "code": "function mountStep070_mountInputVaporMountVapor(ctx) {\n  if (!ctx.match(\"mountInput()：vapor 分支 → mountVapor()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"mountVapor() → runVaporSetup()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "71": {
    "title": "71 · 最小实现",
    "intro": "这是「应用挂载」第 71 步的最小手写版，只保留当前节点的核心动作。对应源码线索：parentContext 延续当前父容器。runVaporSetup 必须返回后，才计算 effectScopeId 与 vaporHost。执行后继续到「runVaporSetup()：取出 setup、建立 effect scope」。",
    "code": "function mountStep071_mountVaporRunVaporSetup(ctx) {\n  const value = ctx.run(\"mountVapor() → runVaporSetup()\")\n  ctx.next(\"runVaporSetup()：取出 setup、建立 effect scope\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "72": {
    "title": "72 · 最小实现",
    "intro": "这是「应用挂载」第 72 步的最小手写版，只保留当前节点的核心动作。对应源码线索：setup = input.type.setup，即 vapor-core.ts 的 wrappedSetup。先压入 effect scope，然后调用 setup(parentContext)。执行后继续到「setup(parentContext) → wrappedSetup(parentContext)」。",
    "code": "function mountStep072_runVaporSetupSetupEffectScope(ctx) {\n  const value = ctx.run(\"runVaporSetup()：取出 setup、建立 effect scope\")\n  ctx.next(\"setup(parentContext) → wrappedSetup(parentContext)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "73": {
    "title": "73 · 最小实现",
    "intro": "这是「应用挂载」第 73 步的最小手写版，只保留当前节点的核心动作。对应源码线索：beginVaporScope(owner) 后，传入 () => setup(parentContext)。这里的 setup 是编译生成的函数，与外层 runVaporSetup 里的 setup 不是同一个函数。执行后继续到「withDOMHostOperations(parentContext, 生成的 setup 回调)」。",
    "code": "function mountStep073_setupParentContextWrappedSetupParentContext(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"withDOMHostOperations(parentContext, 生成的 setup 回调)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "74": {
    "title": "74 · 最小实现",
    "intro": "这是「应用挂载」第 74 步的最小手写版，只保留当前节点的核心动作。对应源码线索：在 DOM host 上下文执行传入的回调；编译生成的 setup 在这里真正创建节点、绑定属性/事件并挂载子组件。执行后继续到「withDOMHostOperations 的 run() → 生成 setup(parentContext)」。",
    "code": "function mountStep074_withDOMHostOperationsParentContextSetup(ctx) {\n  const value = ctx.run(\"withDOMHostOperations(parentContext, 生成的 setup 回调)\")\n  ctx.next(\"withDOMHostOperations 的 run() → 生成 setup(parentContext)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "75": {
    "title": "75 · 最小实现",
    "intro": "这是「应用挂载」第 75 步的最小手写版，只保留当前节点的核心动作。对应源码线索：已有宿主上下文时直接 run()；否则保存旧上下文并建立新上下文，try 中 run()，finally 恢复。执行后继续到「编译 setup：递归执行 SiteLayout / RouterView 等业务子树」。",
    "code": "function mountStep075_withDOMHostOperationsRunSetupParentContext(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"编译 setup：递归执行 SiteLayout / RouterView 等业务子树\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "76": {
    "title": "76 · 最小实现",
    "intro": "这是「应用挂载」第 76 步的最小手写版，只保留当前节点的核心动作。对应源码线索：此处是随页面而变的递归调用段，不伪造一个固定的 DOM helper 顺序。子组件会再次经过组件/挂载入口；它们的同步工作结束后才返回当前 setup。懒路由 Promise 的后续回调属于另一条执行线。执行后继续到「生成的 setup 返回节点 → wrappedSetup finally」。",
    "code": "function mountStep076_setupSiteLayoutRouterView(ctx, items) {\n  for (const item of items) {\n    ctx.runCurrentStep(item)\n  }\n  ctx.next(\"生成的 setup 返回节点 → wrappedSetup finally\", items)\n  return items\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "77": {
    "title": "77 · 最小实现",
    "intro": "这是「应用挂载」第 77 步的最小手写版，只保留当前节点的核心动作。对应源码线索：DOM host 上下文先恢复，再执行 endVaporScope(didPush)，把节点返回给 runVaporSetup。执行后继续到「runVaporSetup finally：恢复 effect scope」。",
    "code": "function mountStep077_setupWrappedSetupFinally(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"runVaporSetup finally：恢复 effect scope\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "78": {
    "title": "78 · 最小实现",
    "intro": "这是「应用挂载」第 78 步的最小手写版，只保留当前节点的核心动作。对应源码线索：setup 结果已经准备好，先弹出 effect scope，再把 { host, scopeId } 返回 mountVapor。执行后继续到「mountVapor()：构造 mounted record」。",
    "code": "function mountStep078_runVaporSetupFinallyEffectScope(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"mountVapor()：构造 mounted record\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "79": {
    "title": "79 · 最小实现",
    "intro": "这是「应用挂载」第 79 步的最小手写版，只保留当前节点的核心动作。对应源码线索：host = setup 返回的节点；还保存 fragmentNodes、cleanupBucket、effectScopeId 等。dispose 在这里只是定义，挂载时不会执行它。执行后继续到「mountInput(vapor) 返回 → mountSubtree 返回 → subtree 接住」。",
    "code": "function mountStep079_mountVaporMountedRecord(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"mountInput(vapor) 返回 → mountSubtree 返回 → subtree 接住\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "80": {
    "title": "80 · 最小实现",
    "intro": "这是「应用挂载」第 80 步的最小手写版，只保留当前节点的核心动作。对应源码线索：当前组件的 mounted 先排入 pendingLifecycle；这一步只入队，没有执行 mounted Hook。执行后继续到「props 回调 return subtree」。",
    "code": "function mountStep080_mountInputVaporMountSubtreeSubtree(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"props 回调 return subtree\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "81": {
    "title": "81 · 最小实现",
    "intro": "这是「应用挂载」第 81 步的最小手写版，只保留当前节点的核心动作。对应源码线索：依次退回 Hook 调用、runWithOwningRuntime、components.render；这些包装层的 finally 恢复上下文。执行后继续到「renderHooks finally：frames.pop()，恢复 Hook index」。",
    "code": "function mountStep081_propsReturnSubtree(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"renderHooks finally：frames.pop()，恢复 Hook index\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "82": {
    "title": "82 · 最小实现",
    "intro": "这是「应用挂载」第 82 步的最小手写版，只保留当前节点的核心动作。对应源码线索：props 回调返回后，先执行此 finally，再退回 runWithOwningRuntime 的 finally 恢复活动 runtime。执行后继续到「components.render finally：endComponentRender()」。",
    "code": "function mountStep082_renderHooksFinallyFramesPop(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"components.render finally：endComponentRender()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "83": {
    "title": "83 · 最小实现",
    "intro": "这是「应用挂载」第 83 步的最小手写版，只保留当前节点的核心动作。对应源码线索：组件渲染上下文结束，renderComponent 把 subtree 返回 patch/component.js 中的 renderSubtree。执行后继续到「回到 renderSubtree：initialRender = false」。",
    "code": "function mountStep083_componentsRenderFinallyEndComponentRender(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"回到 renderSubtree：initialRender = false\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "84": {
    "title": "84 · 最小实现",
    "intro": "这是「应用挂载」第 84 步的最小手写版，只保留当前节点的核心动作。对应源码线索：首次 record 还未赋值，所以跳过 if(record)。退出 renderSubtree，再执行 runComponentRenderEntry 的 finally 减少 renderDepth。执行后继续到「回到 mountComponent：标记已挂载，返回组件 record」。",
    "code": "function mountStep084_renderSubtreeInitialRenderFalse(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"回到 mountComponent：标记已挂载，返回组件 record\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "85": {
    "title": "85 · 最小实现",
    "intro": "这是「应用挂载」第 85 步的最小手写版，只保留当前节点的核心动作。对应源码线索：检查组件 reactive 标志后，创建 componentRecord；它的 host/fragmentNodes 指向刚挂载的 subtree。根包装器走这里返回根 record。执行后继续到「mountInput(component) 返回 → renderContainer 的 mounted」。",
    "code": "function mountStep085_mountComponentRecord(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"mountInput(component) 返回 → renderContainer 的 mounted\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "86": {
    "title": "86 · 最小实现",
    "intro": "这是「应用挂载」第 86 步的最小手写版，只保留当前节点的核心动作。对应源码线索：拿到根 mounted record。现在才调用 commitMountedContainer(host, container, mounted)。执行后继续到「commitMountedContainer()：清空容器并判定 fragment」。",
    "code": "function mountStep086_mountInputComponentRenderContainerMounted(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"commitMountedContainer()：清空容器并判定 fragment\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "87": {
    "title": "87 · 最小实现",
    "intro": "这是「应用挂载」第 87 步的最小手写版，只保留当前节点的核心动作。对应源码线索：fragment 为 true 时循环 appendChild 各子节点；否则只追加 mounted.host。两者是互斥分支。执行后继续到「普通根节点：host.appendChild(container, mounted.host)」。",
    "code": "function mountStep087_commitMountedContainerFragment(ctx) {\n  if (!ctx.match(\"commitMountedContainer()：清空容器并判定 fragment\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"普通根节点：host.appendChild(container, mounted.host)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "88": {
    "title": "88 · 最小实现",
    "intro": "这是「应用挂载」第 88 步的最小手写版，只保留当前节点的核心动作。对应源码线索：DOM adapter 将生成的根节点放进真实 #app；如果是 fragment，则执行上一步循环中的 appendChild。执行后继续到「host.appendChild 的绑定闭包 → adapter.appendChild」。",
    "code": "function mountStep088_hostAppendChildContainerMounted(ctx) {\n  const value = ctx.run(\"普通根节点：host.appendChild(container, mounted.host)\")\n  ctx.next(\"host.appendChild 的绑定闭包 → adapter.appendChild\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "89": {
    "title": "89 · 最小实现",
    "intro": "这是「应用挂载」第 89 步的最小手写版，只保留当前节点的核心动作。对应源码线索：method 是 createHost 时读取的 adapter.appendChild；args = [container, mounted.host]。执行后继续到「回到 renderContainer：保存根挂载记录」。",
    "code": "function mountStep089_hostAppendChildAdapterAppendChild(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"回到 renderContainer：保存根挂载记录\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "90": {
    "title": "90 · 最小实现",
    "intro": "这是「应用挂载」第 90 步的最小手写版，只保留当前节点的核心动作。对应源码线索：记录 container → mounted，供下一次更新或卸载使用。这里采用首次挂载分支末尾的保存位置。执行后继续到「回到 runRenderEntry finally：减深度并刷新组件生命周期」。",
    "code": "function mountStep090_renderContainer(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"回到 runRenderEntry finally：减深度并刷新组件生命周期\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "91": {
    "title": "91 · 最小实现",
    "intro": "这是「应用挂载」第 91 步的最小手写版，只保留当前节点的核心动作。对应源码线索：最外层深度归零后调用 flushPendingComponentLifecycle(state)。此时根 DOM 已提交。执行后继续到「flushPendingComponentLifecycle()：排序并遍历队列」。",
    "code": "function mountStep091_runRenderEntryFinally(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"flushPendingComponentLifecycle()：排序并遍历队列\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "92": {
    "title": "92 · 最小实现",
    "intro": "这是「应用挂载」第 92 步的最小手写版，只保留当前节点的核心动作。对应源码线索：orderPendingLifecycle 排序，再 withCurrent(instance, 回调)，回调内执行 lifecycle.call(instance.host, name)。执行后继续到「lifecycle.call(instance, \"mounted\") → invoke(hooks)」。",
    "code": "function mountStep092_flushPendingComponentLifecycle(ctx) {\n  const value = ctx.run(\"flushPendingComponentLifecycle()：排序并遍历队列\")\n  ctx.next(\"lifecycle.call(instance, \\\"mounted\\\") → invoke(hooks)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "93": {
    "title": "93 · 最小实现",
    "intro": "这是「应用挂载」第 93 步的最小手写版，只保留当前节点的核心动作。对应源码线索：读取对应实例的 mounted Hook 列表；invoke 同步逐个执行 Hook。Hook 自己触发的额外工作按业务决定。执行后继续到「invoke(hooks)：逐个执行 hook()」。",
    "code": "function mountStep093_lifecycleCallInstanceMounted(ctx) {\n  const value = ctx.run(\"lifecycle.call(instance, \\\"mounted\\\") → invoke(hooks)\")\n  ctx.next(\"invoke(hooks)：逐个执行 hook()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "94": {
    "title": "94 · 最小实现",
    "intro": "这是「应用挂载」第 94 步的最小手写版，只保留当前节点的核心动作。对应源码线索：当前列表执行完返回 lifecycle.call，所有 pending 执行完返回 flushPendingComponentLifecycle。执行后继续到「回到 renderRoot：lifecycle.callGlobal(\"mounted\")」。",
    "code": "function mountStep094_invokeHooksHook(ctx) {\n  const value = ctx.run(\"invoke(hooks)：逐个执行 hook()\")\n  ctx.next(\"回到 renderRoot：lifecycle.callGlobal(\\\"mounted\\\")\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "95": {
    "title": "95 · 最小实现",
    "intro": "这是「应用挂载」第 95 步的最小手写版，只保留当前节点的核心动作。对应源码线索：组件 mounted 队列刷新完成后，才调用应用级全局 mounted。执行后继续到「callGlobal(name) → invoke(globalHooks.get(name))」。",
    "code": "function mountStep095_renderRootLifecycleCallGlobalMounted(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"callGlobal(name) → invoke(globalHooks.get(name))\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "96": {
    "title": "96 · 最小实现",
    "intro": "这是「应用挂载」第 96 步的最小手写版，只保留当前节点的核心动作。对应源码线索：执行全局 Hook 后，renderRoot 回调结束；它没有显式 return，所以 render(app) 的结果为 undefined。执行后继续到「回到 appController：transaction.status = \"mounted\"」。",
    "code": "function mountStep096_callGlobalNameInvokeGlobalHooks(ctx) {\n  const value = ctx.run(\"callGlobal(name) → invoke(globalHooks.get(name))\")\n  ctx.next(\"回到 appController：transaction.status = \\\"mounted\\\"\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "97": {
    "title": "97 · 最小实现",
    "intro": "这是「应用挂载」第 97 步的最小手写版，只保留当前节点的核心动作。对应源码线索：挂载未失败，标记事务成功，准备返回 result。执行后继续到「appController finally：恢复 activeAppMount」。",
    "code": "function mountStep097_appControllerTransactionStatusMounted(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"appController finally：恢复 activeAppMount\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "98": {
    "title": "98 · 最小实现",
    "intro": "这是「应用挂载」第 98 步的最小手写版，只保留当前节点的核心动作。对应源码线索：finally 完成后，返回原始 runtime.mount，再回到 wrappedRuntimeEntry 的 Reflect.apply 后面。执行后继续到「回到 wrappedRuntimeEntry：检查 pending error」。",
    "code": "function mountStep098_appControllerFinallyActiveAppMount(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"回到 wrappedRuntimeEntry：检查 pending error\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "99": {
    "title": "99 · 最小实现",
    "intro": "这是「应用挂载」第 99 步的最小手写版，只保留当前节点的核心动作。对应源码线索：正常路径 pending 为空，return result；异常路径会派发错误再抛出。执行后继续到「wrappedRuntimeEntry finally：入口深度减一」。",
    "code": "function mountStep099_wrappedRuntimeEntryPendingError(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"wrappedRuntimeEntry finally：入口深度减一\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "100": {
    "title": "100 · 最小实现",
    "intro": "这是「应用挂载」第 100 步的最小手写版，只保留当前节点的核心动作。对应源码线索：包装函数返回后，useApp.ts 的 mountRunner 函数体结束；控制权回到 runWithClientRuntime 的 runner() 调用处。执行后继续到「runWithClientRuntime finally：popCurrentContainer()」。",
    "code": "function mountStep100_wrappedRuntimeEntryFinally(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"runWithClientRuntime finally：popCurrentContainer()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "101": {
    "title": "101 · 最小实现",
    "intro": "这是「应用挂载」第 101 步的最小手写版，只保留当前节点的核心动作。对应源码线索：若先前确实入栈，这里弹出 el。随后 contextRunner 返回到 runWithRuntime。执行后继续到「runWithRuntime finally：恢复原活动 runtime」。",
    "code": "function mountStep101_runWithClientRuntimeFinallyPopCurrentContainer(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"runWithRuntime finally：恢复原活动 runtime\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "102": {
    "title": "102 · 最小实现",
    "intro": "这是「应用挂载」第 102 步的最小手写版，只保留当前节点的核心动作。对应源码线索：恢复 previousRuntime；原先没有该属性则删除。再返回 runWithClientRuntime，最终回到 useApp.mount。执行后继续到「useApp.mount 继续：标记容器、确认归属」。",
    "code": "function mountStep102_runWithRuntimeFinallyRuntime(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"useApp.mount 继续：标记容器、确认归属\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "103": {
    "title": "103 · 最小实现",
    "intro": "这是「应用挂载」第 103 步的最小手写版，只保留当前节点的核心动作。对应源码线索：runWithClientRuntime 已经全部执行完，才写 data-rue-app、调用 confirmAppContainer 并保存 containerRef = el。执行后继续到「confirmAppContainer(reservation)」。",
    "code": "function mountStep103_useAppMount(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"confirmAppContainer(reservation)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "104": {
    "title": "104 · 最小实现",
    "intro": "这是「应用挂载」第 104 步的最小手写版，只保留当前节点的核心动作。对应源码线索：验证 reservation 仍有效，再设置 current.confirmed = true。返回后由 useApp.mount 保存 containerRef。执行后继续到「useApp.mount finally：清除 pendingContainerRef，返回 main.ts」。",
    "code": "function mountStep104_confirmAppContainerReservation(ctx) {\n  const value = ctx.run(\"confirmAppContainer(reservation)\")\n  ctx.next(\"useApp.mount finally：清除 pendingContainerRef，返回 main.ts\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "105": {
    "title": "105 · 最小实现",
    "intro": "这是「应用挂载」第 105 步的最小手写版，只保留当前节点的核心动作。对应源码线索：本次同步首次挂载结束。后续点击、微任务、懒路由加载另起执行线；不会接在这里冒充当前同步调用。执行后回到本主题的外层调用者。",
    "code": "function mountStep105_useAppMountFinallyPendingContainerRef(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  }
};
