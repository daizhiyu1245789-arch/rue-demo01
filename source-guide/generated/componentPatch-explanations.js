rueSourceGuide.explanations["componentPatch"] = {
  "1": {
    "context": "这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。 当前节点是「patchMountedInput()：调用 isSameComponent」。这是「组件更新」的第一个源码节点，先从这里建立本主题的入口视角。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:138，它对应直线图第 1 / 14 个节点。",
      "它属于「同身份组件的 patch 入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：const patchMountedInput = (preserveCompatibleTree, state, host, mounted, input, parentContext) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：身份一致才进入 patchComponent；其它分支重新挂载。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-142；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「isSameComponent()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「isSameComponent()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:138、下一步是否进入「isSameComponent()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "2": {
    "context": "这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。 当前节点是「isSameComponent()」。上一节点是「patchMountedInput()：调用 isSameComponent」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:158，它对应直线图第 2 / 14 个节点。",
      "它属于「同身份组件的 patch 入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：export const isSameComponent = (mounted, input) => mounted?.kind === 'component' &&。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：mount.js 的 patchMountedInput() 同时检查 isComponentMountInput(input) 和 isSameComponent(mounted, input)；命中才把 patch 子树的闭包传给 patchComponent()。类型/key/updateMode 不同则释放旧树，重新 controller.mountInput()。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-143；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「同身份才进入 patchComponent」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「同身份才进入 patchComponent」。",
    "watch": "断点停在这里时，重点看 mounted.type、input.type.component、key、node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:158、下一步是否进入「同身份才进入 patchComponent」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "3": {
    "context": "这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。 当前节点是「同身份才进入 patchComponent」。上一节点是「isSameComponent()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:140，它对应直线图第 3 / 14 个节点。",
      "它属于「同身份组件的 patch 入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：return patchComponent(state, mounted, input, next => patchMountedInput(true, state, host, mounted.subtree, next, parentContext));。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：return patchComponent(",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-73；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「patchComponent(): fine-grained」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「patchComponent(): fine-grained」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js:140、下一步是否进入「patchComponent(): fine-grained」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "4": {
    "context": "这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。 当前节点是「patchComponent(): fine-grained」。上一节点是「同身份才进入 patchComponent」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:243，它对应直线图第 4 / 14 个节点。",
      "它属于「同身份组件的 patch 入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：if (input.type.updateMode === 'fine-grained' && !mounted.renderEffect) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：条件是 updateMode=fine-grained 且没有 mounted.renderEffect：在 runComponentRenderEntry 中先同步 props，再调用 before_update、排入 updated，最后恢复焦点并 return。其余情况才检查下一步的输入控件保护。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-74；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「components.update() → syncProps()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「components.update() → syncProps()」。",
    "watch": "断点停在这里时，重点看 updateMode、pendingLifecycle、propsRO signals、node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:243、下一步是否进入「components.update() → syncProps()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "5": {
    "context": "这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。 当前节点是「components.update() → syncProps()」。上一节点是「patchComponent(): fine-grained」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:199，它对应直线图第 5 / 14 个节点。",
      "它属于「同身份组件的 patch 入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：update(instance, input) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：components.update() → prepare(instance, input) → syncProps(propsRO, copyProps(input))。它是 patchComponent 多个分支共用的工具；下一步回到 fine-grained 分支看谁调用它，并非 update() 调用 patchComponent()。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-144；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「实际 props 同步」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「实际 props 同步」。",
    "watch": "断点停在这里时，重点看 instance.propsRO、next、deleted keys、node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:199、下一步是否进入「实际 props 同步」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "6": {
    "context": "这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。 当前节点是「实际 props 同步」。上一节点是「components.update() → syncProps()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:106，它对应直线图第 6 / 14 个节点。",
      "它属于「同身份组件的 patch 入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：syncProps(instance.propsRO, copyProps(input));。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：syncProps(instance.propsRO, copyProps(input))",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-145；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「prepare(instance, input) → syncProps()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「prepare(instance, input) → syncProps()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:106、下一步是否进入「prepare(instance, input) → syncProps()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "7": {
    "context": "这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。 当前节点是「prepare(instance, input) → syncProps()」。上一节点是「实际 props 同步」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:104，它对应直线图第 7 / 14 个节点。",
      "它属于「同身份组件的 patch 入口」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：const prepare = (instance, input) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：copyProps(input) 后同步到 instance.propsRO，并保留 owner 链。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-145；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「preserveUncontrolledTextControl」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「preserveUncontrolledTextControl」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js:104、下一步是否进入「preserveUncontrolledTextControl」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "8": {
    "context": "这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。 当前节点是「preserveUncontrolledTextControl」。上一节点是「prepare(instance, input) → syncProps()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:263，它对应直线图第 8 / 14 个节点。",
      "它属于「后续条件：未走 fine-grained 提前返回」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：const preserveUncontrolledTextControl = (() => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：命中文本控件保护时直接保留现有 subtree；否则 rerender 模式进入 mounted.renderEffect 分支显式调度 renderSubtree",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-146；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「mounted.renderEffect branch」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「mounted.renderEffect branch」。",
    "watch": "断点停在这里时，重点看 activeElement、hasActiveUncontrolledTextControlWithin、node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:263、下一步是否进入「mounted.renderEffect branch」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "9": {
    "context": "这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。 当前节点是「mounted.renderEffect branch」。上一节点是「preserveUncontrolledTextControl」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:283，它对应直线图第 9 / 14 个节点。",
      "它属于「renderEffect 存在时的分支」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：if (mounted.renderEffect) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：有 renderEffect 时先同步 props，rerender 模式显式 renderEffect.rerender() → renderSubtree()；fine-grained 模式依靠 props 订阅驱动。此分支随后 return。下一步源码第 296 行是没有 renderEffect 且未命中保护时的兜底直调分支。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-74；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「有 effect 时显式 rerender 的调用」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「有 effect 时显式 rerender 的调用」。",
    "watch": "断点停在这里时，重点看 mounted.renderEffect、input.type.updateMode、node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:283、下一步是否进入「有 effect 时显式 rerender 的调用」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "10": {
    "context": "这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。 当前节点是「有 effect 时显式 rerender 的调用」。上一节点是「mounted.renderEffect branch」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:289，它对应直线图第 10 / 14 个节点。",
      "它属于「renderEffect 存在时的分支」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：mounted.renderEffect.rerender();。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：mounted.renderEffect.rerender()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-74；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「renderComponent() + patchSubtree()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「renderComponent() + patchSubtree()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:289、下一步是否进入「renderComponent() + patchSubtree()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "11": {
    "context": "这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。 当前节点是「renderComponent() + patchSubtree()」。上一节点是「有 effect 时显式 rerender 的调用」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:296，它对应直线图第 11 / 14 个节点。",
      "它属于「兜底分支：没有 renderEffect 且未命中保护」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：const subtree = renderComponent(state, mounted.instance, input, patchSubtree);。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：renderComponent() 在执行组件前同步发出 before_update，patchSubtree 完成后把 updated entry 放入 pending 生命周期队列",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-74；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「renderComponent 中 before_update / mountSubtree」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「renderComponent 中 before_update / mountSubtree」。",
    "watch": "断点停在这里时，重点看 mounted.instance、subtree、patchSubtree、node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:296、下一步是否进入「renderComponent 中 before_update / mountSubtree」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "12": {
    "context": "这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。 当前节点是「renderComponent 中 before_update / mountSubtree」。上一节点是「renderComponent() + patchSubtree()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:27，它对应直线图第 12 / 14 个节点。",
      "它属于「兜底分支：没有 renderEffect 且未命中保护」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：state.lifecycle.call(instance.host, 'before_update');。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：state.lifecycle.call(instance.host, 'before_update')",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-50；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「before_update → updated queue」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「before_update → updated queue」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:27、下一步是否进入「before_update → updated queue」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "13": {
    "context": "这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。 当前节点是「before_update → updated queue」。上一节点是「renderComponent 中 before_update / mountSubtree」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:24，它对应直线图第 13 / 14 个节点。",
      "它属于「兜底分支：没有 renderEffect 且未命中保护」这一段；这一段的目标是把同一类调用集中看完。",
      "这是完成节点，当前阶段收尾并把结果、DOM 状态或生命周期状态交给外层流程。",
      "当前片段先看这一行：export const renderComponent = (state, instance, input, mountSubtree) => state.components.render(instance, input, props => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：最外层 runRenderEntry 退出时执行 updated 回调；组件身份与 Hook 槽位在整个更新过程中保持不变，本主题完成",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-45；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「渲染出口刷新生命周期」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「渲染出口刷新生命周期」。",
    "watch": "断点停在这里时，重点看 updating、pendingLifecycle、renderDepth、node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js:24、下一步是否进入「渲染出口刷新生命周期」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "14": {
    "context": "这条链专门看父组件更新以后，子组件怎样接收新 props、重新渲染并 patch 子树。 当前节点是「渲染出口刷新生命周期」。上一节点是「before_update → updated queue」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:132，它对应直线图第 14 / 14 个节点。",
      "它属于「兜底分支：没有 renderEffect 且未命中保护」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：state.flushPendingComponentLifecycle?.();。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：state.flushPendingComponentLifecycle?.()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-43；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，这个主题的主线结束，控制权回到触发这个主题的外层调用。"
    ],
    "result": "本主题执行链到这里收束；后续只剩调用者拿到结果或等待下一次外部事件触发。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js:132。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  }
};
