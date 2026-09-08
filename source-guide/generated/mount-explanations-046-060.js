Object.assign(rueSourceGuide.mountExplanations, {
  "46": {
    "context": "host 是渲染系统使用的一组 DOM 操作函数，底层能力来自 adapter。这里对应源码节点 46 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 46 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 46 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "hasDOMHostAdapter(adapter) 先检查必需的宿主能力，不满足时返回 undefined。",
      "遍历 requiredHostMethods，给每个方法名调用 bindRequired(adapter, name)，获得绑定到 adapter 的闭包。",
      "Object.fromEntries 把这些名字与函数组成对象，再补入 getParentNode，作为 host 返回。",
      "本节点编号 46，类型是「调用」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/host.js:44。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「createHost(state.adapter) 与 previous 检查」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：export const createHost = (adapter) => { if (!hasDOMHostAdapter(adapter)) { return undefined; } const bound = Object.fromEntries(requiredHostMethods.map(name => [name, bindRequired(adapter, name)]));。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「bindRequired(adapter, name)：保存 adapter 上的方法」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "渲染器后续调用 host.appendChild 等方法时，会通过这些闭包落到 adapter。此处还没有追加任何节点。执行完这一站后，调用栈继续按直线图向下走：下一节点是「bindRequired(adapter, name)：保存 adapter 上的方法」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「bindRequired(adapter, name)：保存 adapter 上的方法」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「bindRequired(adapter, name)：保存 adapter 上的方法」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "看 requiredHostMethods 中的方法名，以及 host.appendChild 与 adapter.appendChild 的函数引用区别。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/host.js:44 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/host.js:44 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/host.js:44 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  },
  "47": {
    "context": "bindRequired 为单个宿主方法建立转发闭包，确保调用时 this 仍是适配器。这里对应源码节点 47 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 47 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 47 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "Reflect.get(adapter, name) 读取原方法；如果不是函数，立即抛出缺失 DOM 操作的错误。",
      "返回 (...args) => Reflect.apply(method, adapter, args)，闭包保存 method 和 adapter。",
      "未来 host.appendChild(container, child) 进入这个闭包时，args 才接收到具体容器和子节点。",
      "本节点编号 47，类型是「定义」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/host.js:31。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「createHost(adapter)：为各 DOM 操作建立闭包」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：const bindRequired = (adapter, name) => { const method = Reflect.get(adapter, name); if (typeof method !== 'function') { throw new Error(`Rue runtime: dom-adapter.${name} not found`); }。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「controller.mountInput(state, host, input, container)」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "host 获得一个可直接调用的转发方法。原方法不会因取出后调用而丢失 adapter 作为 this。执行完这一站后，调用栈继续按直线图向下走：下一节点是「controller.mountInput(state, host, input, container)」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「controller.mountInput(state, host, input, container)」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「controller.mountInput(state, host, input, container)」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "看 name、method 与 adapter；在真正追加节点时再观察闭包里的 args。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/host.js:31 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/host.js:31 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/host.js:31 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  },
  "48": {
    "context": "首次渲染路径已通过前面的检查，现在正式分派根输入。这里对应源码节点 48 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 48 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 48 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "调用 controller.mountInput(state, host, input, container)。",
      "container 作为第四个参数传入 mountInput，在其内部称作 parentContext。",
      "mountInput 根据 input.type.kind 选择具体挂载函数；函数返回之前，这一行的 mounted 尚未赋值。",
      "本节点编号 48，类型是「调用」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:55。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「bindRequired(adapter, name)：保存 adapter 上的方法」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：const mounted = controller.mountInput(state, host, input, container);。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「mountInput()：component 分支 → mountComponent()」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "根输入是 component，下一步进入组件分支；返回后才回到容器层提交结果。执行完这一站后，调用栈继续按直线图向下走：下一节点是「mountInput()：component 分支 → mountComponent()」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「mountInput()：component 分支 → mountComponent()」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「mountInput()：component 分支 → mountComponent()」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "确认 parentContext 与 container 是同一对象，并观察 input.type.component 指向根包装函数。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:55 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:55 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:55 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  },
  "49": {
    "context": "mountInput 是分派入口，当前输入种类为 component，所以调用 mountComponent。这里对应源码节点 49 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 49 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 49 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "先校验组件输入形态，不符合时进入 invalidMountInput 抛错。",
      "把 state、host、input、parentContext 传给 mountComponent。",
      "还传入 controller.mountInput 作为递归挂载能力，以及一个调用 patchMountedInput 的更新回调。它们此刻只是函数参数。",
      "本节点编号 49，类型是「调用」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:171。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「controller.mountInput(state, host, input, container)」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：case 'component': if (!isComponentMountInput(input)) return invalidMountInput(input); return mountComponent(state, host, input, parentContext, controller.mountInput, (mounted, next, currentParent) => patchMountedInput(true, state, host, mounted, next, currentParent));。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「mountComponent()：创建 instance」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "进入 mountComponent 创建组件实例。之后组件返回的子树，还会用传入的 mountInput 再走一次分派。执行完这一站后，调用栈继续按直线图向下走：下一节点是「mountComponent()：创建 instance」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「mountComponent()：创建 instance」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「mountComponent()：创建 instance」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "检查 mountComponent 的第五个形参 mountInput，确认它是函数，而不是这次根 input 对象。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:171 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:171 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:171 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  },
  "50": {
    "context": "mountComponent 先建立稳定的组件实例，之后才执行组件函数。这里对应源码节点 50 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 50 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 50 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "state.components.create(input) 创建并登记 instance，保存 input、组件类型、props、Hook 宿主和实例编号等。",
      "instance 初始 isMounted 为 false；instance.host 是承载 Hook 和组件状态的对象，不等于后面生成的真实 DOM 根节点。",
      "局部 record、subtree 先为空，initialRender 设为 true，用于选择首次挂载或后续 patch。",
      "本节点编号 50，类型是「调用」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:171。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「mountInput()：component 分支 → mountComponent()」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：const instance = state.components.create(input); let record; let subtree; let initialRender = true;。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「定义 renderSubtree()，里面将调用 renderComponent」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "组件的身份与状态容器已准备好，RootApp 的业务函数还没有执行。执行完这一站后，调用栈继续按直线图向下走：下一节点是「定义 renderSubtree()，里面将调用 renderComponent」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「定义 renderSubtree()，里面将调用 renderComponent」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「定义 renderSubtree()，里面将调用 renderComponent」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "观察 instance.index、instance.host.__hooks、instance.propsRO、instance.isMounted 和 initialRender。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:171 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:171 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:171 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  },
  "51": {
    "context": "renderSubtree 是当前组件每次渲染子树时执行的闭包，首次挂载和后续重渲染共用它。这里对应源码节点 51 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 51 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 51 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "闭包执行时从 instance.input 取本轮输入，确保后续更新使用新的 props 输入。",
      "更新时会读取旧子树、插入位置和焦点信息；首次 initialRender 为 true，没有旧子树可恢复。",
      "闭包最终调用 renderComponent，并传入 next 回调，根据 initialRender 决定新建子树或 patch 旧子树。",
      "本节点编号 51，类型是「定义」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:176。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「mountComponent()：创建 instance」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：const renderSubtree = () => runComponentRenderEntry(state, () => { const currentInput = instance.input; const focusSnapshot = initialRender ? undefined : captureFocusSnapshot(subtree?.host);。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「保存 renderSubtree 并选择首次执行方式」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "此处先完成函数定义。只有下一步真正调用 renderSubtree，内部语句才开始执行。执行完这一站后，调用栈继续按直线图向下走：下一节点是「保存 renderSubtree 并选择首次执行方式」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「保存 renderSubtree 并选择首次执行方式」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「保存 renderSubtree 并选择首次执行方式」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "区分 renderSubtree 的函数对象与执行结果；看它捕获的 instance、subtree、initialRender。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:176 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:176 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:176 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  },
  "52": {
    "context": "渲染闭包已经定义好，运行时根据组件上的响应式标记选择首次执行方式。这里对应源码节点 52 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 52 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 52 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "把 renderSubtree 保存到 instance.host.__rue_component_render_invalidate__，供之后使组件重新渲染时使用。",
      "检查 input.type.component.__rue_component_render_reactive_factory__ 是否严格为 true。成立时由 createComponentRenderEffect 建立渲染 effect。",
      "本图的根包装函数没有这个标记，先直接执行 renderSubtree()。返回后还会检查实例上的 reactive 标记，必要时再建立 effect。",
      "本节点编号 52，类型是「条件」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:220。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「定义 renderSubtree()，里面将调用 renderComponent」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：instance.host.__rue_component_render_invalidate__ = renderSubtree; const renderReactiveFactory = input.type.component.__rue_component_render_reactive_factory__ === true; let renderEffect; if (renderReactiveFactory) { renderEffect = createComponentRenderEffect(state, renderSubtree);。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「renderSubtree() → runComponentRenderEntry()」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "当前先进入一次同步 renderSubtree。其他组件的标记不同，可能走另一条执行分支。执行完这一站后，调用栈继续按直线图向下走：下一节点是「renderSubtree() → runComponentRenderEntry()」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「renderSubtree() → runComponentRenderEntry()」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「renderSubtree() → runComponentRenderEntry()」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "看 renderReactiveFactory 和实例上的 __rue_component_render_reactive__，不要默认所有组件都只直接运行一次。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:220 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:220 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:220 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  },
  "53": {
    "context": "renderSubtree 首先经过组件级的渲染入口包装，和外层 runRenderEntry 一起维护嵌套深度。这里对应源码节点 53 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 53 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 53 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "runComponentRenderEntry 先增加 state.renderDepth，再执行传入的渲染回调。",
      "回调内部才开始读取 currentInput、调用 renderComponent 和挂载子树。",
      "退出时 finally 减少深度；只有归零才请求刷新生命周期。当前外层根渲染还在执行，组件层退出通常尚未归零。",
      "本节点编号 53，类型是「调用」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:124。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「保存 renderSubtree 并选择首次执行方式」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：const runComponentRenderEntry = (state, render) => { state.renderDepth += 1; try { return render(); }。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「renderComponent(..., next => …)」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "进入当前组件的实际渲染逻辑，组件 mounted 的通知仍会被延后到合适的刷新时机。执行完这一站后，调用栈继续按直线图向下走：下一节点是「renderComponent(..., next => …)」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「renderComponent(..., next => …)」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「renderComponent(..., next => …)」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "对比外层和组件层 renderDepth 的值，注意二者操作的是同一个 state。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:124 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:124 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:124 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  },
  "54": {
    "context": "renderComponent 需要一个“拿到组件返回值后如何挂载”的回调，这里通过 next => … 提供。这里对应源码节点 54 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 54 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 54 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "currentInput 是 instance.input，包含当前组件函数与 props。",
      "第四个参数 next 回调暂时只是定义；next 将来接收标准化后的组件返回值。",
      "initialRender 为 true 时调用 mountInput(state, host, next, parentContext)；以后为 false 时用 patchSubtree 更新已有 subtree。",
      "本节点编号 54，类型是「传回调」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:193。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「renderSubtree() → runComponentRenderEntry()」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：subtree = renderComponent(state, instance, currentInput, next => initialRender ? mountInput(state, host, next, parentContext) : patchSubtree(subtree, next, patchParent));。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「renderComponent() → state.components.render()」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "回调以 mountSubtree 参数名进入 renderComponent。必须先运行组件，才有 next 可传入这个回调。执行完这一站后，调用栈继续按直线图向下走：下一节点是「renderComponent() → state.components.render()」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「renderComponent() → state.components.render()」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「renderComponent() → state.components.render()」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "看 initialRender，以及 currentInput（组件自身输入）与未来 next（组件输出子树）的区别。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:193 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:193 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:193 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  },
  "55": {
    "context": "renderComponent 把组件业务执行包在实例管理器提供的渲染上下文中。这里对应源码节点 55 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 55 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 55 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "mountSubtree 保存上一步 next 回调，等组件返回结果后再调用。",
      "另一个 props => { … } 回调被传给 state.components.render；它包含调用组件、触发生命周期、挂载返回值等步骤。",
      "state.components.render 先准备实例和 Hook 上下文，之后才会将 instance.propsRO 传给这个 props 回调。",
      "本节点编号 55，类型是「调用」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:24。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「renderComponent(..., next => …)」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：export const renderComponent = (state, instance, input, mountSubtree) => state.components.render(instance, input, props => {。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「components.render(instance, input, run) → prepare()」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "先进入实例管理器。这里的 props 回调与原始 mount 中包装 RootApp 的 props 回调也不是同一个函数。执行完这一站后，调用栈继续按直线图向下走：下一节点是「components.render(instance, input, run) → prepare()」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「components.render(instance, input, run) → prepare()」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「components.render(instance, input, run) → prepare()」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "按文件位置区分 component.js 的 props 回调与 create-rue-base.js 的根包装函数。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:24 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:24 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:24 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  },
  "56": {
    "context": "实例管理器在运行组件之前同步输入与父组件关系，确保 Hook 和上下文读取有正确归属。这里对应源码节点 56 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 56 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 56 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "prepare(instance, input) 更新 instance.input，把新 props 同步到稳定的 propsRO 对象，并解析父 owner。",
      "如果 bridge 提供 beginComponentRender，先以 instance.host 开始一轮组件渲染上下文。",
      "有有效 parentOwner 时，把父关系标记写入 instance.host，随后进入 try 中的运行时与 Hook 包装。",
      "本节点编号 56，类型是「调用」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:118。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「renderComponent() → state.components.render()」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：const render = (instance, input, run) => { prepare(instance, input); const bridge = globalThis.__rue_runtime_vapor_shared_bridge; bridge?.beginComponentRender?.(instance.host); if (isObjectLike(instance.parentOwner) && instance.parentOwner !== instance.host) {。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「runWithOwningRuntime(..., () => carrier.renderHooks(...))」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "props 和组件归属已就绪，但 run 回调仍未调用。下一步先进入所属 runtime 的作用范围。执行完这一站后，调用栈继续按直线图向下走：下一节点是「runWithOwningRuntime(..., () => carrier.renderHooks(...))」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「runWithOwningRuntime(..., () => carrier.renderHooks(...))」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「runWithOwningRuntime(..., () => carrier.renderHooks(...))」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "检查 instance.input、instance.propsRO、instance.parentOwner，以及 instance.host 上的父关系标记。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:118 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:118 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:118 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  },
  "57": {
    "context": "这一行有嵌套的两个箭头函数，需要按“外层先调用、内层稍后执行”理解。这里对应源码节点 57 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 57 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 57 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "把 state?.runtime 和外层箭头函数传给 runWithOwningRuntime，先处理实例所属运行时。",
      "外层箭头函数执行时才调用 carrier.renderHooks(instance.host, 内层箭头函数)。",
      "内层箭头函数执行时才调用 run(instance.propsRO)，其中 run 是 component.js 传入的 props 回调。",
      "本节点编号 57，类型是「传回调」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:127。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「components.render(instance, input, run) → prepare()」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：return runWithOwningRuntime(state?.runtime, () => carrier.renderHooks(instance.host, () => run(instance.propsRO)));。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「runWithOwningRuntime()：切换 runtime 后执行 run()」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "调用顺序是所属 runtime → Hook frame → props 回调。虽然写在一行，三层函数不是同时执行。执行完这一站后，调用栈继续按直线图向下走：下一节点是「runWithOwningRuntime()：切换 runtime 后执行 run()」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「runWithOwningRuntime()：切换 runtime 后执行 run()」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「runWithOwningRuntime()：切换 runtime 后执行 run()」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "按调用栈区分两个箭头函数，观察各层断点进入的文件与位置。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:127 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:127 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:127 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  },
  "58": {
    "context": "runWithOwningRuntime 保证当前组件在自己所属的 runtime 上下文中执行，特别是嵌套或多实例场景。这里对应源码节点 58 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 58 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 58 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "runtime 不是可用对象时，直接执行 run()，跳过全局切换。",
      "正常情况下保存旧 __rue_active 和属性是否存在，再将活动值设为当前 runtime。",
      "执行 run()，即上一步包含 carrier.renderHooks 的外层回调；finally 会在返回或抛错时恢复原活动值。",
      "本节点编号 58，类型是「调用」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:11。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「runWithOwningRuntime(..., () => carrier.renderHooks(...))」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：const runWithOwningRuntime = (runtime, run) => { if (!isObjectLike(runtime)) return run(); const runtimeGlobal = globalThis; const hadActiveRuntime = Object.prototype.hasOwnProperty.call(runtimeGlobal, '__rue_active');。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「carrier.renderHooks(instance.host, () => run(instance.propsRO))」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "下一步建立 Hook 上下文。此层的 run 参数是外层箭头函数，不是 component.js 的 props 回调。执行完这一站后，调用栈继续按直线图向下走：下一节点是「carrier.renderHooks(instance.host, () => run(instance.propsRO))」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「carrier.renderHooks(instance.host, () => run(instance.propsRO))」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「carrier.renderHooks(instance.host, () => run(instance.propsRO))」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "比较 state.runtime、__rue_active 与 previousRuntime；查看 run 的具体函数位置。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:11 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:11 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:11 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  },
  "59": {
    "context": "所属 runtime 的外层回调已经开始运行，现在交给 carrier 创建 Hook 调用环境。这里对应源码节点 59 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 59 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 59 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "第一个参数 instance.host 用于识别 Hook 状态属于哪个组件。",
      "第二个参数 () => run(instance.propsRO) 仍是一个待执行函数，它捕获 component.js 传入的 run。",
      "carrier.renderHooks 会先压入 Hook frame，然后再执行这个内层回调。",
      "本节点编号 59，类型是「执行回调」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:127。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「runWithOwningRuntime()：切换 runtime 后执行 run()」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：return runWithOwningRuntime(state?.runtime, () => carrier.renderHooks(instance.host, () => run(instance.propsRO)));。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「renderHooks(instance, render)：压入 Hook frame」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "控制流先进入 renderHooks，暂时还没有调用 input.type.component。执行完这一站后，调用栈继续按直线图向下走：下一节点是「renderHooks(instance, render)：压入 Hook frame」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「renderHooks(instance, render)：压入 Hook frame」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「renderHooks(instance, render)：压入 Hook frame」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "检查 instance.host.__hooks 和第二个参数的函数位置，区分 Hook 宿主与 DOM host。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:127 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:127 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:127 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  },
  "60": {
    "context": "renderHooks 维护当前正在执行组件的 Hook frame，使 Hook 能定位到正确实例和状态槽。这里对应源码节点 60 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 60 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。这里对应源码节点 60 / 105，不是孤立代码，而是整条应用挂载同步调用链中的一站。",
    "steps": [
      "ensureHookContainer(instance) 取得 Hook 容器；检查是否已经有同实例的活动 frame，必要时保存旧 index 以支持嵌套恢复。",
      "把 hooks.index 设为 0，再 frames.push({ instance, hooks })，让本次 Hook 调用从当前组件的起始槽位计算。",
      "执行 try 中的 render()，就是 instance.js 传入的内层箭头函数；finally 将在它结束后弹出 frame。",
      "本节点编号 60，类型是「执行回调」，所在执行段是「D · 根容器 → 组件调用 → RootApp」。源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-reactive/hooks/context.js:35。读这一格时先确定它是在调用、定义、传回调、执行回调、条件分支，还是返回路径。",
      "上一节点「carrier.renderHooks(instance.host, () => run(instance.propsRO))」把控制权交到这里。若上一节点只是“传回调”或“定义”，这里通常还没有执行真正业务；只有出现“执行回调”或明确调用语句时，调用栈才继续进入下一层。",
      "代码片段的关键执行语句是：const renderHooks = (instance, render) => { const hooks = ensureHookContainer(instance); const hasActiveFrameForInstance = frames.some(frame => frame.instance === instance); const restoreIndex = hasActiveFrameForInstance ? hooks?.index : undefined; if (hooks)。如果片段中包含 if、try、finally、return 或箭头函数，要先按 JavaScript 求值顺序判断哪些语句当场执行，哪些只是保存为稍后执行的函数。",
      "本节点完成后控制流去向是：下一节点是「render() → run(instance.propsRO) → component.js props 回调」，它位于「D · 根容器 → 组件调用 → RootApp」。 如果当前节点是 return/finally，下一步多半是在调用栈外层继续执行；如果当前节点是传入回调，下一步要等接收方显式调用这个回调。"
    ],
    "result": "现在 Hook 环境已建立，接下来执行 run(instance.propsRO) 进入组件渲染回调。执行完这一站后，调用栈继续按直线图向下走：下一节点是「render() → run(instance.propsRO) → component.js props 回调」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「render() → run(instance.propsRO) → component.js props 回调」，它位于「D · 根容器 → 组件调用 → RootApp」。执行完这一站后，调用栈继续按直线图向下走：下一节点是「render() → run(instance.propsRO) → component.js props 回调」，它位于「D · 根容器 → 组件调用 → RootApp」。",
    "watch": "看 frames 栈顶、hooks.index 和 restoreIndex，确认 Hook 归属于当前 instance.host。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-reactive/hooks/context.js:35 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-reactive/hooks/context.js:35 进入，以及当前函数是正在执行，还是只是被创建并传递。同时建议看调用栈顶部是否从 node_modules/@rue-js/runtime-vapor/dist/js-reactive/hooks/context.js:35 进入，以及当前函数是正在执行，还是只是被创建并传递。"
  }
});
