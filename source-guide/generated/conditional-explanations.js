rueSourceGuide.explanations["conditional"] = {
  "1": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「createComment()」。这是「条件渲染」的第一个源码节点，先从这里建立本主题的入口视角。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/compiled-dom.ts:71，它对应直线图第 1 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是时序节点，用来标明先后关系；它说明当前代码在整体流程中排在哪个时刻发生。",
      "当前片段先看这一行：export const createComment = (data: string): Node => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：锚点被 append 到父节点并由 effect 闭包长期持有；分支首次求值或变化时作为第三个参数传入 renderAnchor()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-128；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「分支值提交给公共 renderAnchor」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「分支值提交给公共 renderAnchor」。",
    "watch": "断点停在这里时，重点看 anchor.parentNode、anchor.previousSibling、node_modules/@rue-js/runtime/src/compiled-dom.ts:71、下一步是否进入「分支值提交给公共 renderAnchor」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "2": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「分支值提交给公共 renderAnchor」。上一节点是「createComment()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/rue.ts:1492，它对应直线图第 2 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：export const renderAnchor = (value: RenderableInput, parent: DomElementLike, anchor: DomNodeLike) =>。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：export const renderAnchor =",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-129；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「condition effect」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「condition effect」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/rue.ts:1492、下一步是否进入「condition effect」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "3": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「condition effect」。上一节点是「分支值提交给公共 renderAnchor」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "这是第 3 / 19 个边界节点，用来标出本地源码之外的执行入口或返回点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是初始化节点，当前函数会创建运行时对象、缓存结构或默认状态，后续节点会复用这些对象。",
      "这里没有本地逐行源码，页面把它标为边界：浏览器 DevTools > Sources 中的转换模块",
      "节点说明给出的直接线索是：生成代码初始化时先调用 createComment() 建立稳定锚点；effect 每次求出 next 后，才以同一个 anchor 调用 renderAnchor()",
      "因为这是边界节点，调试时不用继续强行 F11 进入不可见实现；应该先确认传入和返回的数据形状。",
      "如果没有完整函数展开，说明这个节点本身就是别名、边界或短片段；重点看它和上下节点的连接关系。",
      "执行完本节点后，直线图继续到「创建稳定 comment anchor」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「创建稳定 comment anchor」。",
    "watch": "断点停在这里时，重点看 condition、anchor、next branch handle、下一步是否进入「创建稳定 comment anchor」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "4": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「创建稳定 comment anchor」。上一节点是「condition effect」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/compiled-dom.ts:71，它对应直线图第 4 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：export const createComment = (data: string): Node => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：export const createComment =",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-128；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「renderAnchor()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「renderAnchor()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/compiled-dom.ts:71、下一步是否进入「renderAnchor()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "5": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「renderAnchor()」。上一节点是「创建稳定 comment anchor」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/rue.ts:1492，它对应直线图第 5 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：export const renderAnchor = (value: RenderableInput, parent: DomElementLike, anchor: DomNodeLike) =>。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：公共 renderAnchor() 只负责隔离额外依赖收集，然后在 untrack 回调里直接调用 renderAnchorUntracked()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-129；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「reactiveUntrack 中进入内部函数」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「reactiveUntrack 中进入内部函数」。",
    "watch": "断点停在这里时，重点看 value、parent、anchor、node_modules/@rue-js/runtime/src/rue.ts:1492、下一步是否进入「reactiveUntrack 中进入内部函数」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "6": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「reactiveUntrack 中进入内部函数」。上一节点是「renderAnchor()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/rue.ts:1493，它对应直线图第 6 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：reactiveUntrack(() => renderAnchorUntracked(value, parent, anchor))。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：reactiveUntrack(() => renderAnchorUntracked",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-130；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「untrack 回调 → renderAnchorUntracked」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「untrack 回调 → renderAnchorUntracked」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/rue.ts:1493、下一步是否进入「untrack 回调 → renderAnchorUntracked」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "7": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「untrack 回调 → renderAnchorUntracked」。上一节点是「reactiveUntrack 中进入内部函数」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/rue.ts:1492，它对应直线图第 7 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这里真正执行前面传入的回调，调用栈会进入业务函数或渲染函数内部。",
      "当前片段先看这一行：export const renderAnchor = (value: RenderableInput, parent: DomElementLike, anchor: DomNodeLike) =>。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：传入的回调在隔离依赖收集期间执行；下面进入实际 anchor 逻辑。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-129；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「renderAnchorUntracked()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「renderAnchorUntracked()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/rue.ts:1492、下一步是否进入「renderAnchorUntracked()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "8": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「renderAnchorUntracked()」。上一节点是「untrack 回调 → renderAnchorUntracked」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/rue.ts:1277，它对应直线图第 8 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：const renderAnchorUntracked = (。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：先 withRenderEntryGuard()、adaptRenderableForBackend() 和 owner/key 判断。等价组件可跳过，KeepAlive 可只更新 props；可保留分支直接 renderOwnedAnchorMount() 交底层 patch。只有需要重挂载等分支才进入下一步的 clearOwnedAnchorNodes()。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-131；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「可复用 handle 直接 return」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「可复用 handle 直接 return」。",
    "watch": "断点停在这里时，重点看 normalizedValue、prevOwner、lastMountHandleValue、node_modules/@rue-js/runtime/src/rue.ts:1277、下一步是否进入「可复用 handle 直接 return」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "9": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「可复用 handle 直接 return」。上一节点是「renderAnchorUntracked()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/rue.ts:1389，它对应直线图第 9 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：if (shouldSkipComponentHandleRender) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：if (shouldSkipComponentHandleRender)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-132；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「可保留的分支直接渲染/patch」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「可保留的分支直接渲染/patch」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/rue.ts:1389、下一步是否进入「可保留的分支直接渲染/patch」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "10": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「可保留的分支直接渲染/patch」。上一节点是「可复用 handle 直接 return」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/rue.ts:1394，它对应直线图第 10 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：if (!shouldRemountComponentChildren) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：if (!shouldRemountComponentChildren)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-132；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「clearOwnedAnchorNodes()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「clearOwnedAnchorNodes()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/rue.ts:1394、下一步是否进入「clearOwnedAnchorNodes()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "11": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「clearOwnedAnchorNodes()」。上一节点是「可保留的分支直接渲染/patch」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/rue.ts:230，它对应直线图第 11 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是顺序节点，当前代码按源码顺序继续执行，重点看它接在上一句之后改变了什么状态。",
      "当前片段先看这一行：const clearOwnedAnchorNodes = (parent: DomElementLike, anchor: DomNodeLike) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：Rue 自己追踪的节点移除后，再调用底层 anchorRuntime.renderAnchor(null, ...) 释放对应 mounted record 与 scope",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-133；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「强制重挂载的清理调用」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「强制重挂载的清理调用」。",
    "watch": "断点停在这里时，重点看 mountedNodesByAnchor、ownedNodes、node_modules/@rue-js/runtime/src/rue.ts:230、下一步是否进入「强制重挂载的清理调用」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "12": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「强制重挂载的清理调用」。上一节点是「clearOwnedAnchorNodes()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/rue.ts:1430，它对应直线图第 12 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：clearOwnedAnchorNodes(targetParent, anchor)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：clearOwnedAnchorNodes(targetParent, anchor)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-132；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「anchorRuntime.renderAnchor(null)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「anchorRuntime.renderAnchor(null)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/rue.ts:1430、下一步是否进入「anchorRuntime.renderAnchor(null)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "13": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「anchorRuntime.renderAnchor(null)」。上一节点是「强制重挂载的清理调用」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/rue.ts:1431，它对应直线图第 13 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：anchorRuntime.renderAnchor(null, targetParent, anchor)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：旧 handle 清空后，非空 next 会交给 renderOwnedAnchorMount()，在同一锚点前挂载并登记新节点所有权",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-132；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「renderOwnedAnchorMount()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「renderOwnedAnchorMount()」。",
    "watch": "断点停在这里时，重点看 mountHandleOwnerByAnchor、runtimeByAnchor、node_modules/@rue-js/runtime/src/rue.ts:1431、下一步是否进入「renderOwnedAnchorMount()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "14": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「renderOwnedAnchorMount()」。上一节点是「anchorRuntime.renderAnchor(null)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/rue.ts:196，它对应直线图第 14 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是完成节点，当前阶段收尾并把结果、DOM 状态或生命周期状态交给外层流程。",
      "当前片段先看这一行：const renderOwnedAnchorMount = (。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：renderOwnedAnchorMount() → runWithRuntime(runtime, runner) → runtime.renderAnchor() → withCurrentContainer() → recordInput()/normalizeMountInput() → runRenderEntry() → 底层 render/anchor.js。包装器比较前后节点，保存 owned nodes；下轮据此清理或复用。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-134；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「包装器把输入转交 runtime.renderAnchor」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「包装器把输入转交 runtime.renderAnchor」。",
    "watch": "断点停在这里时，重点看 before、after、added、mountedNodesByAnchor、node_modules/@rue-js/runtime/src/rue.ts:196、下一步是否进入「包装器把输入转交 runtime.renderAnchor」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "15": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「包装器把输入转交 runtime.renderAnchor」。上一节点是「renderOwnedAnchorMount()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/rue.ts:206，它对应直线图第 15 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：const result = runtime.renderAnchor(value, parent, anchor)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：const result = runtime.renderAnchor(value, parent, anchor)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-135；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runtime 规范化并进入底层 anchor renderer」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runtime 规范化并进入底层 anchor renderer」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/rue.ts:206、下一步是否进入「runtime 规范化并进入底层 anchor renderer」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "16": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「runtime 规范化并进入底层 anchor renderer」。上一节点是「包装器把输入转交 runtime.renderAnchor」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:176，它对应直线图第 16 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：runRenderEntry(() => renderAnchor(state, mountController, input, parent, anchor));。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：runRenderEntry(() => renderAnchor(",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-136；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runWithRuntime(runtime, runner)」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runWithRuntime(runtime, runner)」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:176、下一步是否进入「runWithRuntime(runtime, runner)」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "17": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「runWithRuntime(runtime, runner)」。上一节点是「runtime 规范化并进入底层 anchor renderer」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/runtime-context.ts:32，它对应直线图第 17 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：export const runWithRuntime = <T>(runtime: unknown, runner: () => T): T => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：切换活动 runtime → runner() → finally 恢复。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-25；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「runtime.renderAnchor 包装入口」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「runtime.renderAnchor 包装入口」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/runtime-context.ts:32、下一步是否进入「runtime.renderAnchor 包装入口」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "18": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「runtime.renderAnchor 包装入口」。上一节点是「runWithRuntime(runtime, runner)」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/runtime-entry-wrap.js:141，它对应直线图第 18 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：const wrappedRuntimeEntry = function wrappedRuntimeEntry(...args) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：Reflect.apply(original, this, args) 进入原始 runtime.renderAnchor。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-27；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「原始 runtime.renderAnchor」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「原始 runtime.renderAnchor」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/runtime-entry-wrap.js:141、下一步是否进入「原始 runtime.renderAnchor」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "19": {
    "context": "这条链专门看条件分支怎样清理旧 anchor、挂载新分支，并把 owned nodes 记回锚点。 当前节点是「原始 runtime.renderAnchor」。上一节点是「runtime.renderAnchor 包装入口」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:173，它对应直线图第 19 / 19 个节点。",
      "它属于「初始化锚点，之后执行条件 effect」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：renderAnchor(value, parent, anchor) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：容器上下文内 recordInput，再 runRenderEntry 调底层 anchor renderer。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-137；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，这个主题的主线结束，控制权回到触发这个主题的外层调用。"
    ],
    "result": "本主题执行链到这里收束；后续只剩调用者拿到结果或等待下一次外部事件触发。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js:173。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  }
};
