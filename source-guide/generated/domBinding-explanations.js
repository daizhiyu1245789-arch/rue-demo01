rueSourceGuide.explanations["domBinding"] = {
  "1": {
    "context": "这条链专门看属性、事件、style、class 和文本怎样从渲染结果落到真实 DOM。 当前节点是「_$ DOM helper aliases」。这是「DOM 绑定」的第一个源码节点，先从这里建立本主题的入口视角。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/vapor.ts:35，它对应直线图第 1 / 12 个节点。",
      "它属于「编译别名绑定」这一段；这一段的目标是把同一类调用集中看完。",
      "这是导出别名或函数引用转发，名字变了，但最终进入的是同一个实现函数。",
      "当前片段先看这一行：export {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：转换模块执行时会直接调用这些别名；创建标签的 _$createElement 首先落到 runtime 的 createElement()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "如果没有完整函数展开，说明这个节点本身就是别名、边界或短片段；重点看它和上下节点的连接关系。",
      "执行完本节点后，直线图继续到「编译 helper 导出别名」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「编译 helper 导出别名」。",
    "watch": "断点停在这里时，重点看 转换结果顶部的 _$ imports、node_modules/@rue-js/runtime/src/vapor.ts:35、下一步是否进入「编译 helper 导出别名」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "2": {
    "context": "这条链专门看属性、事件、style、class 和文本怎样从渲染结果落到真实 DOM。 当前节点是「编译 helper 导出别名」。上一节点是「_$ DOM helper aliases」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/vapor.ts:38，它对应直线图第 2 / 12 个节点。",
      "它属于「编译别名绑定」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：createElement as _$createElement,。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：createElement as _$createElement",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "如果没有完整函数展开，说明这个节点本身就是别名、边界或短片段；重点看它和上下节点的连接关系。",
      "执行完本节点后，直线图继续到「createElement()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「createElement()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/vapor.ts:38、下一步是否进入「createElement()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "3": {
    "context": "这条链专门看属性、事件、style、class 和文本怎样从渲染结果落到真实 DOM。 当前节点是「createElement()」。上一节点是「编译 helper 导出别名」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/dom.ts:1747，它对应直线图第 3 / 12 个节点。",
      "它属于「创建元素」这一段；这一段的目标是把同一类调用集中看完。",
      "这是顺序节点，当前代码按源码顺序继续执行，重点看它接在上一句之后改变了什么状态。",
      "当前片段先看这一行：export const createElement = (tag: string, parent?: DomElementLike | null) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：元素返回给编译产物后，后续生成指令按属性类型选择 setAttribute、setProperty 或 spreadAttributes；下一步先看普通 attribute 分支",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-119；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「setAttribute()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「setAttribute()」。",
    "watch": "断点停在这里时，重点看 tag、resolvedParent、activeDOMHostOperationContext、node_modules/@rue-js/runtime/src/dom.ts:1747、下一步是否进入「setAttribute()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "4": {
    "context": "这条链专门看属性、事件、style、class 和文本怎样从渲染结果落到真实 DOM。 当前节点是「setAttribute()」。上一节点是「createElement()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/dom.ts:1849，它对应直线图第 4 / 12 个节点。",
      "它属于「普通 attribute 绑定」这一段；这一段的目标是把同一类调用集中看完。",
      "这是另一条执行路径，通常由不同条件、不同入口或不同运行环境触发。",
      "当前片段先看这一行：export const setAttribute = (el: DomElementLike, name: string, value: any) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：setAttribute 分支到此结束；property 绑定走并列的 setProperty() 路径，并不是 setAttribute 再调用它",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-120；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「setProperty()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「setProperty()」。",
    "watch": "断点停在这里时，重点看 name、value、el.attributes、node_modules/@rue-js/runtime/src/dom.ts:1849、下一步是否进入「setProperty()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "5": {
    "context": "这条链专门看属性、事件、style、class 和文本怎样从渲染结果落到真实 DOM。 当前节点是「setProperty()」。上一节点是「setAttribute()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/dom.ts:1901，它对应直线图第 5 / 12 个节点。",
      "它属于「property 绑定」这一段；这一段的目标是把同一类调用集中看完。",
      "这是另一条执行路径，通常由不同条件、不同入口或不同运行环境触发。",
      "当前片段先看这一行：export const setProperty = (el: DomElementLike, name: string, value: any) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：单个 property 分支结束；遇到对象展开时，编译产物改调 spreadAttributes()，由它批量比较并分派每个键",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-121；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「spreadAttributes() → setSpreadAttribute()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「spreadAttributes() → setSpreadAttribute()」。",
    "watch": "断点停在这里时，重点看 target[name]、notifyCustomElementPropertyChanged、node_modules/@rue-js/runtime/src/dom.ts:1901、下一步是否进入「spreadAttributes() → setSpreadAttribute()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "6": {
    "context": "这条链专门看属性、事件、style、class 和文本怎样从渲染结果落到真实 DOM。 当前节点是「spreadAttributes() → setSpreadAttribute()」。上一节点是「setProperty()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/dom.ts:2215，它对应直线图第 6 / 12 个节点。",
      "它属于「对象展开绑定」这一段；这一段的目标是把同一类调用集中看完。",
      "这是另一条执行路径，通常由不同条件、不同入口或不同运行环境触发。",
      "当前片段先看这一行：export const spreadAttributes = (。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：spreadAttributes() 经 applySpreadAttributes() / setSpreadAttribute() 比较属性。事件键直接调用 addEventListener(el, eventName, value)，不会调用 vaporWithEventModifiers()。下一步的修饰符包装由编译生成代码另行使用；两条路径在 addEventListener 处汇合。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-122；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「spread 的事件分支直接注册 handler」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「spread 的事件分支直接注册 handler」。",
    "watch": "断点停在这里时，重点看 state.merged、record.keys、previous、value、node_modules/@rue-js/runtime/src/dom.ts:2215、下一步是否进入「spread 的事件分支直接注册 handler」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "7": {
    "context": "这条链专门看属性、事件、style、class 和文本怎样从渲染结果落到真实 DOM。 当前节点是「spread 的事件分支直接注册 handler」。上一节点是「spreadAttributes() → setSpreadAttribute()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/dom.ts:2043，它对应直线图第 7 / 12 个节点。",
      "它属于「对象展开绑定」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：addEventListener(el, eventName, value)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：addEventListener(el, eventName, value)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-123；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「vaporWithEventModifiers()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「vaporWithEventModifiers()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/dom.ts:2043、下一步是否进入「vaporWithEventModifiers()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "8": {
    "context": "这条链专门看属性、事件、style、class 和文本怎样从渲染结果落到真实 DOM。 当前节点是「vaporWithEventModifiers()」。上一节点是「spread 的事件分支直接注册 handler」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/vapor-helpers.ts:284，它对应直线图第 8 / 12 个节点。",
      "它属于「带修饰符的事件绑定」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个回调边界，当前函数先把函数引用保存或传入，随后由运行时在合适时机调用它。",
      "当前片段先看这一行：export const vaporWithEventModifiers = (。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：包装后的 handler 传给 addEventListener helper；在真正注册前，bindEventHandlerToCurrentRuntime() 先捕获当前 Rue runtime",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-124；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「公共 addEventListener 的绑定入口」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「公共 addEventListener 的绑定入口」。",
    "watch": "断点停在这里时，重点看 modifiers、event、__rue_options、node_modules/@rue-js/runtime/src/vapor-helpers.ts:284、下一步是否进入「公共 addEventListener 的绑定入口」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "9": {
    "context": "这条链专门看属性、事件、style、class 和文本怎样从渲染结果落到真实 DOM。 当前节点是「公共 addEventListener 的绑定入口」。上一节点是「vaporWithEventModifiers()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/dom.ts:820，它对应直线图第 9 / 12 个节点。",
      "它属于「带修饰符的事件绑定」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：const boundListener = bindEventHandlerToCurrentRuntime(listener)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：bindEventHandlerToCurrentRuntime(listener)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-125；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「bindEventHandlerToCurrentRuntime()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「bindEventHandlerToCurrentRuntime()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/dom.ts:820、下一步是否进入「bindEventHandlerToCurrentRuntime()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "10": {
    "context": "这条链专门看属性、事件、style、class 和文本怎样从渲染结果落到真实 DOM。 当前节点是「bindEventHandlerToCurrentRuntime()」。上一节点是「公共 addEventListener 的绑定入口」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/dom.ts:2301，它对应直线图第 10 / 12 个节点。",
      "它属于「带修饰符的事件绑定」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：const bindEventHandlerToCurrentRuntime = (listener: DOMEventHandler): DOMEventHandler => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：绑定上下文后的 listener 与解析出的 capture/once/passive options 一起传给 addNativeDOMEventListener()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-126；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「实际调用处」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「实际调用处」。",
    "watch": "断点停在这里时，重点看 __rue_runtime、runtimeBoundEventHandlers、node_modules/@rue-js/runtime/src/dom.ts:2301、下一步是否进入「实际调用处」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "11": {
    "context": "这条链专门看属性、事件、style、class 和文本怎样从渲染结果落到真实 DOM。 当前节点是「实际调用处」。上一节点是「bindEventHandlerToCurrentRuntime()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/dom.ts:1330，它对应直线图第 11 / 12 个节点。",
      "它属于「带修饰符的事件绑定」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：addNativeDOMEventListener(el as any, eventName, listener)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：addNativeDOMEventListener(el as any, eventName, listener)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-127；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「addNativeDOMEventListener()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「addNativeDOMEventListener()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/dom.ts:1330、下一步是否进入「addNativeDOMEventListener()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "12": {
    "context": "这条链专门看属性、事件、style、class 和文本怎样从渲染结果落到真实 DOM。 当前节点是「addNativeDOMEventListener()」。上一节点是「实际调用处」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/dom.ts:819，它对应直线图第 12 / 12 个节点。",
      "它属于「带修饰符的事件绑定」这一段；这一段的目标是把同一类调用集中看完。",
      "这是完成节点，当前阶段收尾并把结果、DOM 状态或生命周期状态交给外层流程。",
      "当前片段先看这一行：const addNativeDOMEventListener = (el: any, eventName: string, listener: DOMEventHandler) => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：浏览器原生 listener 注册完成；事件触发时包装函数重新进入 Rue runtime，再执行用户 handler，本主题完成",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-125；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，这个主题的主线结束，控制权回到触发这个主题的外层调用。"
    ],
    "result": "本主题执行链到这里收束；后续只剩调用者拿到结果或等待下一次外部事件触发。",
    "watch": "断点停在这里时，重点看 eventName、boundListener、options、node_modules/@rue-js/runtime/src/dom.ts:819。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  }
};
