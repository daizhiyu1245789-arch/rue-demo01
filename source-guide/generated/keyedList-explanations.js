rueSourceGuide.explanations["keyedList"] = {
  "1": {
    "context": "这条链专门看带 key 列表怎样比对旧项和新项，并决定复用、移动、创建或删除。 当前节点是「_$reconcileKeyed()」。这是「列表与 Key 更新」的第一个源码节点，先从这里建立本主题的入口视角。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:90，它对应直线图第 1 / 12 个节点。",
      "它属于「协调入口与条件分派」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：export const _$reconcileKeyed = <T, K>(。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：入口先处理空列表、重复 key、双元素交换和通用 diff 等分支；items 为空时直接进入 clearContiguousRows()",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-138；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「空列表快路径的调用处」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「空列表快路径的调用处」。",
    "watch": "断点停在这里时，重点看 previous、items、keys、node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:90、下一步是否进入「空列表快路径的调用处」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "2": {
    "context": "这条链专门看带 key 列表怎样比对旧项和新项，并决定复用、移动、创建或删除。 当前节点是「空列表快路径的调用处」。上一节点是「_$reconcileKeyed()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:108，它对应直线图第 2 / 12 个节点。",
      "它属于「协调入口与条件分派」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：if (!clearContiguousRows(parent, before, previous)) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：if (!clearContiguousRows(",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-139；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「clearContiguousRows()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「clearContiguousRows()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:108、下一步是否进入「clearContiguousRows()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "3": {
    "context": "这条链专门看带 key 列表怎样比对旧项和新项，并决定复用、移动、创建或删除。 当前节点是「clearContiguousRows()」。上一节点是「空列表快路径的调用处」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:35，它对应直线图第 3 / 12 个节点。",
      "它属于「分支 A：新列表为空」这一段；这一段的目标是把同一类调用集中看完。",
      "这是另一条执行路径，通常由不同条件、不同入口或不同运行环境触发。",
      "当前片段先看这一行：const clearContiguousRows = <T, K>(。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：空列表分支到此返回；非空列表不会先清空，而是从 getKey() 生成本轮 keys 并检查重复项",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-140；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「getKey() + duplicate detection」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「getKey() + duplicate detection」。",
    "watch": "断点停在这里时，重点看 range、rows、before、node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:35、下一步是否进入「getKey() + duplicate detection」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "4": {
    "context": "这条链专门看带 key 列表怎样比对旧项和新项，并决定复用、移动、创建或删除。 当前节点是「getKey() + duplicate detection」。上一节点是「clearContiguousRows()」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:114，它对应直线图第 4 / 12 个节点。",
      "它属于「分支 B：非空列表，计算 key」这一段；这一段的目标是把同一类调用集中看完。",
      "这是条件分支节点，只有条件成立时才会沿这条路径继续执行。",
      "当前片段先看这一行：const keys: K[] = []。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：先计算新 keys。新旧任一列表有重复 key 时，会 dispose 旧行并逐行重建；key 唯一且满足两位置互换才进入 swap 快路径。其余情况才继续 head/tail 扫描，不能把重复 key 接到通用 Map 复用路径。",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-139；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「重复 key 单独重建分支」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「重复 key 单独重建分支」。",
    "watch": "断点停在这里时，重点看 seen、hasDuplicateKeys、hadDuplicateKeys、node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:114、下一步是否进入「重复 key 单独重建分支」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "5": {
    "context": "这条链专门看带 key 列表怎样比对旧项和新项，并决定复用、移动、创建或删除。 当前节点是「重复 key 单独重建分支」。上一节点是「getKey() + duplicate detection」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:222，它对应直线图第 5 / 12 个节点。",
      "它属于「分支 B：非空列表，计算 key」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：if (hasDuplicateKeys || hadDuplicateKeys) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：if (hasDuplicateKeys || hadDuplicateKeys)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-139；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「two-position swap」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「two-position swap」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:222、下一步是否进入「two-position swap」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "6": {
    "context": "这条链专门看带 key 列表怎样比对旧项和新项，并决定复用、移动、创建或删除。 当前节点是「two-position swap」。上一节点是「重复 key 单独重建分支」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:125，它对应直线图第 6 / 12 个节点。",
      "它属于「分支 C：两位置交换快路径」这一段；这一段的目标是把同一类调用集中看完。",
      "这是另一条执行路径，通常由不同条件、不同入口或不同运行环境触发。",
      "当前片段先看这一行：if (!hasDuplicateKeys && previous.length === items.length) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：交换快路径直接返回结果；不符合快路径时才进入下面的 head/tail scan，它是并列分支而非继续调用",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-139；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「head/tail scan」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「head/tail scan」。",
    "watch": "断点停在这里时，重点看 firstMismatch、secondMismatch、domOrderIsStable、node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:125、下一步是否进入「head/tail scan」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "7": {
    "context": "这条链专门看带 key 列表怎样比对旧项和新项，并决定复用、移动、创建或删除。 当前节点是「head/tail scan」。上一节点是「two-position swap」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:234，它对应直线图第 7 / 12 个节点。",
      "它属于「分支 D：通用 diff（未命中前述快路径）」这一段；这一段的目标是把同一类调用集中看完。",
      "这是顺序节点，当前代码按源码顺序继续执行，重点看它接在上一句之后改变了什么状态。",
      "当前片段先看这一行：let oldEnd = previous.length - 1。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：两端扫描停止后，为剩余旧行建立 oldIndexByKey，并逐个匹配新中间区",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-139；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「oldIndexByKey」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「oldIndexByKey」。",
    "watch": "断点停在这里时，重点看 oldStart、oldEnd、nextStart、nextEnd、node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:234、下一步是否进入「oldIndexByKey」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "8": {
    "context": "这条链专门看带 key 列表怎样比对旧项和新项，并决定复用、移动、创建或删除。 当前节点是「oldIndexByKey」。上一节点是「head/tail scan」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:275，它对应直线图第 8 / 12 个节点。",
      "它属于「分支 D：通用 diff（未命中前述快路径）」这一段；这一段的目标是把同一类调用集中看完。",
      "这是一个主动函数调用节点，调用者把当前参数压进这个函数，由这个函数决定继续调用谁。",
      "当前片段先看这一行：const oldIndexByKey = new Map<K, number>()。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：中间区得到旧位置序列后，把 middleOldIndexes 传给 stableIndexes() 求 LIS，识别已经保持相对顺序的行",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-139；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「调用 LIS 的实际位置」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「调用 LIS 的实际位置」。",
    "watch": "断点停在这里时，重点看 oldIndex、row.patch、reusedOldIndexes、node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:275、下一步是否进入「调用 LIS 的实际位置」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "9": {
    "context": "这条链专门看带 key 列表怎样比对旧项和新项，并决定复用、移动、创建或删除。 当前节点是「调用 LIS 的实际位置」。上一节点是「oldIndexByKey」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:297，它对应直线图第 9 / 12 个节点。",
      "它属于「分支 D：通用 diff（未命中前述快路径）」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：const stable = stableIndexes(middleOldIndexes)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：const stable = stableIndexes(",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-139；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「stableIndexes() / LIS」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「stableIndexes() / LIS」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:297、下一步是否进入「stableIndexes() / LIS」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "10": {
    "context": "这条链专门看带 key 列表怎样比对旧项和新项，并决定复用、移动、创建或删除。 当前节点是「stableIndexes() / LIS」。上一节点是「调用 LIS 的实际位置」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:57，它对应直线图第 10 / 12 个节点。",
      "它属于「分支 D：通用 diff（未命中前述快路径）」这一段；这一段的目标是把同一类调用集中看完。",
      "这是返回节点，函数完成当前工作后把结果交回调用者，调用者再继续执行后续语句。",
      "当前片段先看这一行：const stableIndexes = (oldIndexes: number[]): Set<number> => {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：协调器从右向左遍历中间区：缺失 key 调 mountRow()，不在 LIS 的旧行用 insertBefore() 移动，稳定行保持不动",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-141；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「从右到左挂载缺失行」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「从右到左挂载缺失行」。",
    "watch": "断点停在这里时，重点看 predecessors、tails、stable、node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:57、下一步是否进入「从右到左挂载缺失行」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "11": {
    "context": "这条链专门看带 key 列表怎样比对旧项和新项，并决定复用、移动、创建或删除。 当前节点是「从右到左挂载缺失行」。上一节点是「stableIndexes() / LIS」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:302，它对应直线图第 11 / 12 个节点。",
      "它属于「分支 D：通用 diff（未命中前述快路径）」这一段；这一段的目标是把同一类调用集中看完。",
      "这是调用链中的衔接语句，用来说明上一层函数在哪里把控制权交给下一层函数。",
      "当前片段先看这一行：row = mountRow(index, cursor)。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：row = mountRow(index, cursor)",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-139；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，直线图继续到「mountRow() / insertBefore()」。"
    ],
    "result": "当前节点把状态、返回值或回调关系准备好以后，下一步进入「mountRow() / insertBefore()」。",
    "watch": "断点停在这里时，重点看 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:302、下一步是否进入「mountRow() / insertBefore()」。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  },
  "12": {
    "context": "这条链专门看带 key 列表怎样比对旧项和新项，并决定复用、移动、创建或删除。 当前节点是「mountRow() / insertBefore()」。上一节点是「从右到左挂载缺失行」，所以这里不是孤立代码，而是接着它的调用栈往下走。",
    "steps": [
      "源码位置是 node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:299，它对应直线图第 12 / 12 个节点。",
      "它属于「分支 D：通用 diff（未命中前述快路径）」这一段；这一段的目标是把同一类调用集中看完。",
      "这是完成节点，当前阶段收尾并把结果、DOM 状态或生命周期状态交给外层流程。",
      "当前片段先看这一行：for (let index = nextEnd; index >= nextStart; index -= 1) {。它是本节点进入后最直接改变调用方向或状态的语句。",
      "节点说明给出的直接线索是：新 rows 数组与真实 DOM 顺序同步返回，下一轮以它作为 previous rows，keyed diff 完成",
      "如果从调试器进入本函数，先按 JavaScript 的求值顺序看参数，再看函数体里第一条会改变状态或继续调用的语句。",
      "页面里的完整函数源码来自 fn-139；展开后可以对照当前片段前后的 if、try、return 和回调定义。",
      "执行完本节点后，这个主题的主线结束，控制权回到触发这个主题的外层调用。"
    ],
    "result": "本主题执行链到这里收束；后续只剩调用者拿到结果或等待下一次外部事件触发。",
    "watch": "断点停在这里时，重点看 row、detached、cursor、next、node_modules/@rue-js/runtime/src/compiled-keyed-list.ts:299。同时确认当前函数是真的被调用，还是只是函数引用被保存后等待稍后执行。"
  }
};
