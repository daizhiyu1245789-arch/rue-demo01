rueSourceGuide.explanations["lifecycle"] = {
  "1": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「state.components.create()」。这是「生命周期」的第一个源码节点，先从这里建立本主题的入口视角。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:77，它对应直线图第 1 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：const create = (input) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：mountComponent() 拿到新 instance 后立即进入 renderSubtree()，renderComponent() 再通过 components.render() 建立当前实例上下文",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-66；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「mountComponent 创建 instance」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「mountComponent 创建 instance」。",
    "watch": "断点停在这里时，重点看 instance.host、propsRO、hookScopeDisposed、node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:77、下一步是否进入「mountComponent 创建 instance」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "2": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「mountComponent 创建 instance」。上一节点是「state.components.create()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:171，它对应直线图第 2 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：const instance = state.components.create(input);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：const instance = state.components.create(input)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-41；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「components.render()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「components.render()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:171、下一步是否进入「components.render()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "3": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「components.render()」。上一节点是「mountComponent 创建 instance」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:118，它对应直线图第 3 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：const render = (instance, input, run) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：components.render() 在实例上下文中执行传入回调；当组件源码调用 onMounted(callback) 时，便进入公共生命周期 Hook",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-46；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「renderHooks → 组件回调」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「renderHooks → 组件回调」。",
    "watch": "断点停在这里时，重点看 carrier、instance.host、propsRO、node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:118、下一步是否进入「renderHooks → 组件回调」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "4": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「renderHooks → 组件回调」。上一节点是「components.render()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:127，它对应直线图第 4 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return runWithOwningRuntime(state?.runtime, () => carrier.renderHooks(instance.host, () => run(instance.propsRO)));。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：carrier.renderHooks(instance.host",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-47；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「renderComponent → input.type.component(props)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「renderComponent → input.type.component(props)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:127、下一步是否进入「renderComponent → input.type.component(props)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "5": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「renderComponent → input.type.component(props)」。上一节点是「renderHooks → 组件回调」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:28，它对应直线图第 5 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这里真正执行前面传入的回调，调用栈会进入业务函数或渲染函数内部。",
      "当前片段先看这一行：const value = input.type.component(props);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：Hook 注册发生在业务组件函数实际执行期间。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-50；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「onMounted(callback)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「onMounted(callback)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:28、下一步是否进入「onMounted(callback)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "6": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「onMounted(callback)」。上一节点是「renderComponent → input.type.component(props)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/rue.ts:1547，它对应直线图第 6 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是导出别名或函数引用转发，名字变了，但最终进入的是同一个实现函数。",
      "当前片段先看这一行：export const onMounted = lifecycleCore.onMounted。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：rue.ts 直接导出 onMounted = lifecycleCore.onMounted；这两个名字指向同一个函数引用，F11 会直接到 client-mount-core.ts 的实现，不会经过一个额外包装函数。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "如果没有完整函数展开，说明这个节点本身就是别名、边界或短片段；重点看它和上下节点的连接关系。",
      "执行完本节点后，直线图继续到「lifecycleCore.onMounted()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「lifecycleCore.onMounted()」。",
    "watch": "断点停在这里时，重点看 callback、lifecycleCore、node_modules/@rue-js/runtime/src/rue.ts:1547、下一步是否进入「lifecycleCore.onMounted()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "7": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「lifecycleCore.onMounted()」。上一节点是「onMounted(callback)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/client-mount-core.ts:554，它对应直线图第 7 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：onMounted: (fn: () => void) => options.getRuntime().onMounted(fn),。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：lifecycleCore 从当前客户端上下文取到 runtime，然后直接执行 runtime.onMounted(callback)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-67；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runtime.onMounted()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runtime.onMounted()」。",
    "watch": "断点停在这里时，重点看 options.getRuntime()、callback、node_modules/@rue-js/runtime/src/client-mount-core.ts:554、下一步是否进入「runtime.onMounted()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "8": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「runtime.onMounted()」。上一节点是「lifecycleCore.onMounted()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:157，它对应直线图第 8 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：onError: registerLifecycle(errors.onError),。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：runtime.onMounted = registerLifecycle(lifecycle.onMounted)。调用时先 assertActive，再调用 lifecycle.onMounted(callback)；后者调用 register('mounted', callback) 把函数放入 Hook Map。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-68；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runtime 的 registerLifecycle 包装」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runtime 的 registerLifecycle 包装」。",
    "watch": "断点停在这里时，重点看 callback、components.current()、node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:157、下一步是否进入「runtime 的 registerLifecycle 包装」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "9": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「runtime 的 registerLifecycle 包装」。上一节点是「runtime.onMounted()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:83，它对应直线图第 9 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：const registerLifecycle = (register) => callback => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：const registerLifecycle =",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-69；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「mounted 阶段真正调用 register」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「mounted 阶段真正调用 register」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:83、下一步是否进入「mounted 阶段真正调用 register」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "10": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「mounted 阶段真正调用 register」。上一节点是「runtime 的 registerLifecycle 包装」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/lifecycle.js:104，它对应直线图第 10 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：onMounted: callback => register('mounted', callback),。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：onMounted:",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-70；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「lifecycle.register()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「lifecycle.register()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/lifecycle.js:104、下一步是否进入「lifecycle.register()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "11": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「lifecycle.register()」。上一节点是「mounted 阶段真正调用 register」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/lifecycle.js:42，它对应直线图第 11 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：const register = (name, callback) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：register() 保存回调并返回 disposer 后，控制流回到组件函数；组件继续返回子树，随后 renderComponent() 处理该返回值",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-71；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「组件调用返回后继续处理 value」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「组件调用返回后继续处理 value」。",
    "watch": "断点停在这里时，重点看 instance、hooks、list、node_modules/@rue-js/runtime-vapor/dist/js-runtime/lifecycle.js:42、下一步是否进入「组件调用返回后继续处理 value」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "12": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「组件调用返回后继续处理 value」。上一节点是「lifecycle.register()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:28，它对应直线图第 12 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：const value = input.type.component(props);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：const value = input.type.component(props)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-50；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「renderComponent()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「renderComponent()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:28、下一步是否进入「renderComponent()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "13": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「renderComponent()」。上一节点是「组件调用返回后继续处理 value」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:24，它对应直线图第 13 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：export const renderComponent = (state, instance, input, mountSubtree) => state.components.render(instance, input, props => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：组件函数返回后，renderComponent() 调用 mountSubtree(normalizeComponentResult(...))，把返回值交给统一挂载器",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-45；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「mountSubtree()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「mountSubtree()」。",
    "watch": "断点停在这里时，重点看 updating、value、instance.isMounted、node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:24、下一步是否进入「mountSubtree()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "14": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「mountSubtree()」。上一节点是「renderComponent()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:34，它对应直线图第 14 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：const subtree = mountSubtree(normalizeComponentResult(state, value));。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：mountSubtree() 同步返回 mounted subtree；renderComponent() 随即把 instance、阶段名和 subtree 压入 pendingLifecycle",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-50；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「子树返回后开始排队」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「子树返回后开始排队」。",
    "watch": "断点停在这里时，重点看 value、subtree.host、node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:34、下一步是否进入「子树返回后开始排队」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "15": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「子树返回后开始排队」。上一节点是「mountSubtree()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:36，它对应直线图第 15 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：pendingLifecycle.push({。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：pendingLifecycle.push(",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-50；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「pendingLifecycle.push()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「pendingLifecycle.push()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:36、下一步是否进入「pendingLifecycle.push()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "16": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「pendingLifecycle.push()」。上一节点是「子树返回后开始排队」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:35，它对应直线图第 16 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：const pendingLifecycle = state.ownedMounts?.currentLifecycleEntries?.() ?? state.pendingComponentLifecycle;。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：生命周期先排队而不立即执行；根组件调用栈继续返回 renderContainer()，由 commitMountedContainer() 先提交 DOM",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-50；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「挂载返回到根容器提交」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「挂载返回到根容器提交」。",
    "watch": "断点停在这里时，重点看 name、subtree、pendingLifecycle、node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:35、下一步是否进入「挂载返回到根容器提交」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "17": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「挂载返回到根容器提交」。上一节点是「pendingLifecycle.push()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:58，它对应直线图第 17 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：commitMountedContainer(host, container, mounted);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：commitMountedContainer(host, container, mounted)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-37；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「commitMountedContainer()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「commitMountedContainer()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:58、下一步是否进入「commitMountedContainer()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "18": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「commitMountedContainer()」。上一节点是「挂载返回到根容器提交」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:7，它对应直线图第 18 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：const commitMountedContainer = (host, container, mounted) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：DOM 提交后 renderContainer() 返回到 runRenderEntry()；最外层 renderDepth 降为 0 时触发生命周期 flush",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-59；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「最外层 render 退出才 flush」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「最外层 render 退出才 flush」。",
    "watch": "断点停在这里时，重点看 mounted.host、container.children、node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:7、下一步是否进入「最外层 render 退出才 flush」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "19": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「最外层 render 退出才 flush」。上一节点是「commitMountedContainer()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:79，它对应直线图第 19 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：if (state.renderDepth === 0)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：if (state.renderDepth === 0)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-36；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runRenderEntry()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runRenderEntry()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:79、下一步是否进入「runRenderEntry()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "20": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「runRenderEntry()」。上一节点是「最外层 render 退出才 flush」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:72，它对应直线图第 20 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：const runRenderEntry = (render) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：runRenderEntry() 的 finally 检测到最外层渲染结束，直接调用 flushPendingComponentLifecycle()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-36；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「调用 flushPendingComponentLifecycle」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「调用 flushPendingComponentLifecycle」。",
    "watch": "断点停在这里时，重点看 state.renderDepth、node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:72、下一步是否进入「调用 flushPendingComponentLifecycle」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "21": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「调用 flushPendingComponentLifecycle」。上一节点是「runRenderEntry()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:80，它对应直线图第 21 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：flushPendingComponentLifecycle(state);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：flushPendingComponentLifecycle(state)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-36；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runRenderEntry 的 finally」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runRenderEntry 的 finally」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:80、下一步是否进入「runRenderEntry 的 finally」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "22": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「runRenderEntry 的 finally」。上一节点是「调用 flushPendingComponentLifecycle」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:78，它对应直线图第 22 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：state.renderDepth -= 1;。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：最外层 renderDepth 归零才刷 pending；组件子树返回还不是立即执行 mounted。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-36；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「flushPendingComponentLifecycle()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「flushPendingComponentLifecycle()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:78、下一步是否进入「flushPendingComponentLifecycle()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "23": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「flushPendingComponentLifecycle()」。上一节点是「runRenderEntry 的 finally」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:65，它对应直线图第 23 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：export const flushPendingComponentLifecycle = (state) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：flush 逐条切换到 entry.instance，并以 host 和 mounted/updated 阶段名调用 lifecycle.call()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-61；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「实例切换后派发生命周期」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「实例切换后派发生命周期」。",
    "watch": "断点停在这里时，重点看 pending、instance、name、node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:65、下一步是否进入「实例切换后派发生命周期」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "24": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「实例切换后派发生命周期」。上一节点是「flushPendingComponentLifecycle()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:72，它对应直线图第 24 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：state.lifecycle.call(instance.host, name);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：state.lifecycle.call(instance.host, name)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-72；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「lifecycle.call() → invoke()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「lifecycle.call() → invoke()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:72、下一步是否进入「lifecycle.call() → invoke()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "25": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「lifecycle.call() → invoke()」。上一节点是「实例切换后派发生命周期」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/lifecycle.js:58，它对应直线图第 25 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是时序节点，用来标明先后关系；它说明当前代码在整体流程中排在哪个时刻发生。",
      "当前片段先看这一行：const call = (instance, name) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：首次挂载链在回调执行后结束；以后 props 或依赖变化命中同一组件时，会从 patchComponent() 开启更新分支",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-62；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「以后同身份组件更新的入口」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「以后同身份组件更新的入口」。",
    "watch": "断点停在这里时，重点看 hooks、name、callback、node_modules/@rue-js/runtime-vapor/dist/js-runtime/lifecycle.js:58、下一步是否进入「以后同身份组件更新的入口」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "26": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「以后同身份组件更新的入口」。上一节点是「lifecycle.call() → invoke()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:140，它对应直线图第 26 / 28 个节点。",
      "它属于「首次挂载：创建实例与登记 Hook」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return patchComponent(state, mounted, input, next => patchMountedInput(true, state, host, mounted.subtree, next, parentContext));。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：return patchComponent(",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-73；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「patchComponent()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「patchComponent()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:140、下一步是否进入「patchComponent()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "27": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「patchComponent()」。上一节点是「以后同身份组件更新的入口」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:242，它对应直线图第 27 / 28 个节点。",
      "它属于「后续更新：同一组件进入 patch」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：export const patchComponent = (state, mounted, input, patchSubtree) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：需区分分支：fine-grained 且无 renderEffect 时，先 components.update() 写 props，再调用 before_update 并排入 updated；rerender 走 renderComponent()，在执行组件函数之前调用 before_update。updated 最终由渲染出口刷新。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-74；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「细粒度分支的 props / Hook 顺序」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「细粒度分支的 props / Hook 顺序」。",
    "watch": "断点停在这里时，重点看 updateMode、mounted.renderEffect、input.key、node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:242、下一步是否进入「细粒度分支的 props / Hook 顺序」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "28": {
    "context": "这条链专门看组件实例上的 Hook 怎样注册、保存、触发，并在更新或卸载时回到同一个实例上下文。 当前节点是「细粒度分支的 props / Hook 顺序」。上一节点是「patchComponent()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:246，它对应直线图第 28 / 28 个节点。",
      "它属于「后续更新：同一组件进入 patch」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：state.components.update(mounted.instance, input);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：state.components.update(mounted.instance, input)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-75；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，这个主题的主线结束，控制权回到触发这个主题的外层调用。"
    ],
    "result": "本主题执行链到这里收束；后续只剩调用者拿到结果或等待下一次外部事件触发。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:246。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  }
};
