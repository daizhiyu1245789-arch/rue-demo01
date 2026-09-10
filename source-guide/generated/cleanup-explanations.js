rueSourceGuide.explanations["cleanup"] = {
  "1": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「useApp.unmount()」。这是「卸载与清理」的第一个源码节点，先从这里建立本主题的入口视角。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/hooks/useApp.ts:145，它对应直线图第 1 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：},。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：useApp.unmount() 把 () => appRue.unmount(mountedContainer) 作为 runner 传给 runWithClientRuntime()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-19；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「卸载 runner 在 useApp 中定义」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「卸载 runner 在 useApp 中定义」。",
    "watch": "断点停在这里时，重点看 mountedContainer、containerRef、node_modules/@rue-js/runtime/src/hooks/useApp.ts:145、下一步是否进入「卸载 runner 在 useApp 中定义」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "2": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「卸载 runner 在 useApp 中定义」。上一节点是「useApp.unmount()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/hooks/useApp.ts:156，它对应直线图第 2 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：appRue.unmount(mountedContainer)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：appRue.unmount(mountedContainer)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-255；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runWithClientRuntime()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runWithClientRuntime()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/hooks/useApp.ts:156、下一步是否进入「runWithClientRuntime()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "3": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「runWithClientRuntime()」。上一节点是「卸载 runner 在 useApp 中定义」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/client-runtime.ts:173，它对应直线图第 3 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：export const runWithClientRuntime = <T>(runtime: Rue, runner: () => T, container?: unknown): T => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：上下文入栈后直接执行 runner()；appRue.unmount 就是当前 JavaScript runtime 的 unmount 方法",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-22；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「执行传入 runner」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「执行传入 runner」。",
    "watch": "断点停在这里时，重点看 runtime、container、bridge、node_modules/@rue-js/runtime/src/client-runtime.ts:173、下一步是否进入「执行传入 runner」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "4": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「执行传入 runner」。上一节点是「runWithClientRuntime()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/client-runtime.ts:190，它对应直线图第 4 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return runner()。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：return runner()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-24；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runWithRuntime(runtime, contextRunner)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runWithRuntime(runtime, contextRunner)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/client-runtime.ts:190、下一步是否进入「runWithRuntime(runtime, contextRunner)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "5": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「runWithRuntime(runtime, contextRunner)」。上一节点是「执行传入 runner」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/runtime-context.ts:32，它对应直线图第 5 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这里真正执行前面传入的回调，调用栈会进入业务函数或渲染函数内部。",
      "当前片段先看这一行：export const runWithRuntime = <T>(runtime: unknown, runner: () => T): T => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：当前 runner 是容器包装回调；容器包装回调再执行 useApp 的卸载箭头函数。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-25；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runtime.unmount()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runtime.unmount()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/runtime-context.ts:32、下一步是否进入「runtime.unmount()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "6": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「runtime.unmount()」。上一节点是「runWithRuntime(runtime, contextRunner)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:195，它对应直线图第 6 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：},。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：runtime.unmount(container) 调用 appController.unmount(container, disposeCallback)。dispose 是第二个参数，回调里依次 before_unmount → dropRenderEntriesWithin → unmountContainer → 全局 unmounted，没有 runRenderEntry 包装。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-256；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「dispose 是第二个参数」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「dispose 是第二个参数」。",
    "watch": "断点停在这里时，重点看 container、state.containerMounts、node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:195、下一步是否进入「dispose 是第二个参数」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "7": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「dispose 是第二个参数」。上一节点是「runtime.unmount()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:197，它对应直线图第 7 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return appController.unmount(container, () => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：return appController.unmount(container, () =>",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-257；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「appController.unmount()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「appController.unmount()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:197、下一步是否进入「appController.unmount()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "8": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「appController.unmount()」。上一节点是「dispose 是第二个参数」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/app.js:122，它对应直线图第 8 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：unmount(container, dispose) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：appController 在 withCurrentContainer() 中执行传入的 dispose()；dispose 函数体第一步调用全局 before_unmount",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-258；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「在容器上下文直接执行 dispose」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「在容器上下文直接执行 dispose」。",
    "watch": "断点停在这里时，重点看 transaction、transaction.status、node_modules/@rue-js/runtime-vapor/dist/js-runtime/app.js:122、下一步是否进入「在容器上下文直接执行 dispose」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "9": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「在容器上下文直接执行 dispose」。上一节点是「appController.unmount()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/app.js:126，它对应直线图第 9 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return withCurrentContainer(container, dispose);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：return withCurrentContainer(container, dispose)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-258；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「withCurrentContainer(container, dispose)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「withCurrentContainer(container, dispose)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/app.js:126、下一步是否进入「withCurrentContainer(container, dispose)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "10": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「withCurrentContainer(container, dispose)」。上一节点是「在容器上下文直接执行 dispose」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/app.js:29，它对应直线图第 10 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这里真正执行前面传入的回调，调用栈会进入业务函数或渲染函数内部。",
      "当前片段先看这一行：const withCurrentContainer = (container, run) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：把当前容器切换为 container，执行传入的 dispose，再恢复容器。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-259；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「lifecycle.callGlobal('before_unmount')」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「lifecycle.callGlobal('before_unmount')」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/app.js:29、下一步是否进入「lifecycle.callGlobal('before_unmount')」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "11": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「lifecycle.callGlobal('before_unmount')」。上一节点是「withCurrentContainer(container, dispose)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:197，它对应直线图第 11 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是顺序节点，当前代码按源码顺序继续执行，重点看它接在上一句之后改变了什么状态。",
      "当前片段先看这一行：return appController.unmount(container, () => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：全局 before_unmount 返回后，dispose 回调直接执行 dropRenderEntriesWithin(state, container)。这里没有 renderDepth / runRenderEntry 这一层。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-257；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「before_unmount 后直接清理范围」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「before_unmount 后直接清理范围」。",
    "watch": "断点停在这里时，重点看 globalHooks、node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:197、下一步是否进入「before_unmount 后直接清理范围」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "12": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「before_unmount 后直接清理范围」。上一节点是「lifecycle.callGlobal('before_unmount')」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:199，它对应直线图第 12 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：dropRenderEntriesWithin(state, container);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：dropRenderEntriesWithin(state, container)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-257；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「dropRenderEntriesWithin()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「dropRenderEntriesWithin()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:199、下一步是否进入「dropRenderEntriesWithin()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "13": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「dropRenderEntriesWithin()」。上一节点是「before_unmount 后直接清理范围」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/helpers.js:85，它对应直线图第 13 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：export const dropRenderEntriesWithin = (state, container) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：dropRenderEntriesWithin 遍历 anchor/range 记录并 dispose；返回 runtime.unmount 的 dispose 回调后，下一行直接调用 unmountContainer(state, container)。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-260；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「范围清理之后直接 unmountContainer」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「范围清理之后直接 unmountContainer」。",
    "watch": "断点停在这里时，重点看 state.anchorMounts、state.rangeMounts、entry.mounted、node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/helpers.js:85、下一步是否进入「范围清理之后直接 unmountContainer」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "14": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「范围清理之后直接 unmountContainer」。上一节点是「dropRenderEntriesWithin()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:200，它对应直线图第 14 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：unmountContainer(state, container);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：unmountContainer(state, container)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-257；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「unmountContainer()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「unmountContainer()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:200、下一步是否进入「unmountContainer()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "15": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「unmountContainer()」。上一节点是「范围清理之后直接 unmountContainer」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:62，它对应直线图第 15 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：export const unmountContainer = (state, container) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：clearContainer() 在清空 innerHTML 前先取得 containerMounts 中的根记录并调用 componentRecord.dispose() 递归释放组件树",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-261；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「clearContainer 先 dispose 根 mounted」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「clearContainer 先 dispose 根 mounted」。",
    "watch": "断点停在这里时，重点看 state.containerMounts.get(container)、node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:62、下一步是否进入「clearContainer 先 dispose 根 mounted」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "16": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「clearContainer 先 dispose 根 mounted」。上一节点是「unmountContainer()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:3，它对应直线图第 16 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：state.containerMounts.get(container)?.dispose?.();。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：state.containerMounts.get(container)?.dispose?.()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-262；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「clearContainer(host, state, container)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「clearContainer(host, state, container)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:3、下一步是否进入「clearContainer(host, state, container)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "17": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「clearContainer(host, state, container)」。上一节点是「clearContainer 先 dispose 根 mounted」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:2，它对应直线图第 17 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：const clearContainer = (host, state, container) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：先取根 mounted record 并 dispose，再清空 DOM、删除 containerMounts。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-262；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「componentRecord.dispose()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「componentRecord.dispose()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:2、下一步是否进入「componentRecord.dispose()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "18": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「componentRecord.dispose()」。上一节点是「clearContainer(host, state, container)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:107，它对应直线图第 18 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：dispose() {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：dispose() 有幂等保护；确认首次执行后，第一项是 renderEffect.dispose()，阻止卸载期间再发生重渲染",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-263；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「renderEffect.dispose()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「renderEffect.dispose()」。",
    "watch": "断点停在这里时，重点看 disposed、renderEffect、instance、subtree、node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:107、下一步是否进入「renderEffect.dispose()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "19": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「renderEffect.dispose()」。上一节点是「componentRecord.dispose()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:111，它对应直线图第 19 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是顺序节点，当前代码按源码顺序继续执行，重点看它接在上一句之后改变了什么状态。",
      "当前片段先看这一行：this.renderEffect?.dispose();。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：渲染 effect 停止后，componentRecord.dispose() 同步调用 lifecycle.call(before_unmount)，此时 DOM 和子树仍存在",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-263；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「停止 effect 后调用 before_unmount」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「停止 effect 后调用 before_unmount」。",
    "watch": "断点停在这里时，重点看 renderEffect、effect id、node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:111、下一步是否进入「停止 effect 后调用 before_unmount」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "20": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「停止 effect 后调用 before_unmount」。上一节点是「renderEffect.dispose()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:114，它对应直线图第 20 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：state.lifecycle.call(instance.host, 'before_unmount');。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：state.lifecycle.call(instance.host, 'before_unmount')",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-264；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「lifecycle.call('before_unmount')」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「lifecycle.call('before_unmount')」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:114、下一步是否进入「lifecycle.call('before_unmount')」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "21": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「lifecycle.call('before_unmount')」。上一节点是「停止 effect 后调用 before_unmount」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:113，它对应直线图第 21 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：state.components.withCurrent(instance, () => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：父 before_unmount 回调完成后，dispose() 调用 components.disposeScope(instance) 清理该实例拥有的 Hook effects 和 cleanup",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-264；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「Hook 后 disposeScope」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「Hook 后 disposeScope」。",
    "watch": "断点停在这里时，重点看 instance.host、生命周期 Hook Map、node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:113、下一步是否进入「Hook 后 disposeScope」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "22": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「Hook 后 disposeScope」。上一节点是「lifecycle.call('before_unmount')」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:116，它对应直线图第 22 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：state.components.disposeScope(instance);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：state.components.disposeScope(instance)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-263；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「components.disposeScope()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「components.disposeScope()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:116、下一步是否进入「components.disposeScope()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "23": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「components.disposeScope()」。上一节点是「Hook 后 disposeScope」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:144，它对应直线图第 23 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是递归节点，当前函数会再次处理同类子结构；断点时要看递归参数是否缩小或换到下一层节点。",
      "当前片段先看这一行：const disposeScope = (instance) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：实例 Hook scope 标记并释放后，父记录继续调用 subtree.dispose()，把清理递归传向已挂载子树",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-265；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「subtree.dispose()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「subtree.dispose()」。",
    "watch": "断点停在这里时，重点看 hookScopeDisposed、disposeHooks、node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:144、下一步是否进入「subtree.dispose()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "24": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「subtree.dispose()」。上一节点是「components.disposeScope()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:117，它对应直线图第 24 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：this.subtree?.dispose?.();。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：若子树是 vapor mounted record，递归会命中 mountVapor() 返回对象上的 dispose()，清 cleanup bucket 和 effect scope",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-263；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「Vapor 子树销毁入口」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「Vapor 子树销毁入口」。",
    "watch": "断点停在这里时，重点看 this.subtree、cleanupBucket、effectScopeId、node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:117、下一步是否进入「Vapor 子树销毁入口」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "25": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「Vapor 子树销毁入口」。上一节点是「subtree.dispose()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:100，它对应直线图第 25 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：disposeVaporResources(state, cleanupBucket, effectScopeId);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：disposeVaporResources(state, cleanupBucket, effectScopeId)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-266；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「mountVapor().dispose()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「mountVapor().dispose()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:100、下一步是否进入「mountVapor().dispose()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "26": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「mountVapor().dispose()」。上一节点是「Vapor 子树销毁入口」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:94，它对应直线图第 26 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：dispose() {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：子树全部 dispose 返回父 componentRecord 后，父级调用 unmounted，再用 components.release() 删除实例和 host 映射",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-266；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「子树返回后调用父 unmounted」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「子树返回后调用父 unmounted」。",
    "watch": "断点停在这里时，重点看 disposed、renderEntryRoots、cleanupBucket、effectScopeId、node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:94、下一步是否进入「子树返回后调用父 unmounted」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "27": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「子树返回后调用父 unmounted」。上一节点是「mountVapor().dispose()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:119，它对应直线图第 27 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：state.lifecycle.call(instance.host, 'unmounted');。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：state.lifecycle.call(instance.host, 'unmounted')",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-267；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「disposeVaporResources → cleanup + disposeEffectScope」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「disposeVaporResources → cleanup + disposeEffectScope」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:119、下一步是否进入「disposeVaporResources → cleanup + disposeEffectScope」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "28": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「disposeVaporResources → cleanup + disposeEffectScope」。上一节点是「子树返回后调用父 unmounted」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:34，它对应直线图第 28 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：const disposeVaporResources = (state, cleanupBucket, scopeId) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：先 invokeCleanupBucket；scopeId 存在时才释放 effect scope，并从集合删除。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-268；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「unmounted → components.release()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「unmounted → components.release()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:34、下一步是否进入「unmounted → components.release()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "29": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「unmounted → components.release()」。上一节点是「disposeVaporResources → cleanup + disposeEffectScope」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:118，它对应直线图第 29 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：state.components.withCurrent(instance, () => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：根记录递归释放完成后回到 clearContainer()，清空 HTML/containerMounts；再回到 appController finally 释放 appMount 事务",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-267；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「应用 unmounted 在根卸载之后」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「应用 unmounted 在根卸载之后」。",
    "watch": "断点停在这里时，重点看 instances、instancesByHost、isMounted、node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:118、下一步是否进入「应用 unmounted 在根卸载之后」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "30": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「应用 unmounted 在根卸载之后」。上一节点是「unmounted → components.release()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:201，它对应直线图第 30 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：lifecycle.callGlobal('unmounted');。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：lifecycle.callGlobal('unmounted')",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-257；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「clearContainer() + releaseAppMount()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「clearContainer() + releaseAppMount()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:201、下一步是否进入「clearContainer() + releaseAppMount()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "31": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「clearContainer() + releaseAppMount()」。上一节点是「应用 unmounted 在根卸载之后」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:2，它对应直线图第 31 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是另一条执行路径，通常由不同条件、不同入口或不同运行环境触发。",
      "当前片段先看这一行：const clearContainer = (host, state, container) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：清空 containerMounts 后返回 runtime.unmount 回调执行全局 unmounted，再到 appController.unmount 的 finally。仅 transaction.owner===state 且 status!=failed 才 releaseAppMount；失败事务会保留。之后可选的 runtime.free() 是独立入口。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-262；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「释放事务有 owner 与 failed 条件」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「释放事务有 owner 与 failed 条件」。",
    "watch": "断点停在这里时，重点看 container.innerHTML、containerMounts、appMounts、node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js:2、下一步是否进入「释放事务有 owner 与 failed 条件」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "32": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「释放事务有 owner 与 failed 条件」。上一节点是「clearContainer() + releaseAppMount()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/app.js:129，它对应直线图第 32 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：if (transaction?.owner === state && transaction.status !== 'failed') {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：transaction?.owner === state && transaction.status !== 'failed'",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-258；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runWithClientRuntime finally → popCurrentContainer」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runWithClientRuntime finally → popCurrentContainer」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/app.js:129、下一步是否进入「runWithClientRuntime finally → popCurrentContainer」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "33": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「runWithClientRuntime finally → popCurrentContainer」。上一节点是「释放事务有 owner 与 failed 条件」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/client-runtime.ts:193，它对应直线图第 33 / 36 个节点。",
      "它属于「应用卸载：停止 effect、释放子树、清空容器」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：bridge?.popCurrentContainer?.()。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：返回 runWithRuntime 后恢复 __rue_active，再回 useApp.unmount 的 finally 释放容器归属。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-24；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runtime.free()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runtime.free()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/client-runtime.ts:193、下一步是否进入「runtime.free()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "34": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「runtime.free()」。上一节点是「runWithClientRuntime finally → popCurrentContainer」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:213，它对应直线图第 34 / 36 个节点。",
      "它属于「另一个显式入口：runtime.free()」这一段；这一段的目标是把同一类调用集中看完。",
      "这是核验节点，当前逻辑会检查参数、状态或环境是否满足继续执行的条件。",
      "当前片段先看这一行：},。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：free() 走全 runtime 清理路径；下一步 bridge.disposeComponent() 是源码核验点，不是当前发布版已确认由 free/unmount 直接调用的下一层",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-269；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「free 清理范围及记录（并列生命周期入口）」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「free 清理范围及记录（并列生命周期入口）」。",
    "watch": "断点停在这里时，重点看 state.disposed、effectScopeIds、components、ownedMounts、node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:213、下一步是否进入「free 清理范围及记录（并列生命周期入口）」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "35": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「free 清理范围及记录（并列生命周期入口）」。上一节点是「runtime.free()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:214，它对应直线图第 35 / 36 个节点。",
      "它属于「另一个显式入口：runtime.free()」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：free() {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：free() {",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-270；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「bridge.disposeComponent()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「bridge.disposeComponent()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:214、下一步是否进入「bridge.disposeComponent()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "36": {
    "context": "这条链专门看 unmount 怎样从应用入口一路释放容器、组件实例、DOM 节点、effect 与生命周期回调。 当前节点是「bridge.disposeComponent()」。上一节点是「free 清理范围及记录（并列生命周期入口）」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/vapor-bridge.js:101，它对应直线图第 36 / 36 个节点。",
      "它属于「独立定义：当前调用边未确认」这一段；这一段的目标是把同一类调用集中看完。",
      "这是核验节点，当前逻辑会检查参数、状态或环境是否满足继续执行的条件。",
      "当前片段先看这一行：disposeComponent(instance) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：当前 dist 只确认该桥方法存在，未确认 componentRecord.dispose() 对它的调用边；应以断点和 effectScopeCount 实测，不能把它画成确定调用链",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-271；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，这个主题的主线结束，控制权回到触发这个主题的外层调用。"
    ],
    "result": "本主题执行链到这里收束；后续只剩调用者拿到结果或等待下一次外部事件触发。",
    "watch": "断点停在这里时，重点看 __rue_shared_render_scope_id、effectScopeCount()、node_modules/@rue-js/runtime-vapor/dist/vapor-bridge.js:101。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  }
};
