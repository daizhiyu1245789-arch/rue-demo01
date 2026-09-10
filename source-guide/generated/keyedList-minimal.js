rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["keyedList"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「列表与 Key 更新」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：入口先处理空列表、重复 key、双元素交换和通用 diff 等分支；items 为空时直接进入 clearContiguousRows()执行后继续到「空列表快路径的调用处」。",
    "code": "function keyedListStep001_reconcileKeyed(ctx) {\n  if (!ctx.match(\"_$reconcileKeyed()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"空列表快路径的调用处\", value)\n  return value\n}",
    "watch": "手写时先盯住：previous、items、keys。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「列表与 Key 更新」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：if (!clearContiguousRows(执行后继续到「clearContiguousRows()」。",
    "code": "function keyedListStep002(ctx) {\n  const value = ctx.run(\"空列表快路径的调用处\")\n  ctx.next(\"clearContiguousRows()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「列表与 Key 更新」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：空列表分支到此返回；非空列表不会先清空，而是从 getKey() 生成本轮 keys 并检查重复项执行后继续到「getKey() + duplicate detection」。",
    "code": "function keyedListStep003_clearContiguousRows(ctx) {\n  if (!ctx.match(\"clearContiguousRows()\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"getKey() + duplicate detection\", value)\n  return value\n}",
    "watch": "手写时先盯住：range、rows、before。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「列表与 Key 更新」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：先计算新 keys。新旧任一列表有重复 key 时，会 dispose 旧行并逐行重建；key 唯一且满足两位置互换才进入 swap 快路径。其余情况才继续 head/tail 扫描，不能把重复 key 接到通用 Map 复用路径。执行后继续到「重复 key 单独重建分支」。",
    "code": "function keyedListStep004_getKeyDuplicateDetection(ctx) {\n  if (!ctx.match(\"getKey() + duplicate detection\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"重复 key 单独重建分支\", value)\n  return value\n}",
    "watch": "手写时先盯住：seen、hasDuplicateKeys、hadDuplicateKeys。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「列表与 Key 更新」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：if (hasDuplicateKeys || hadDuplicateKeys)执行后继续到「two-position swap」。",
    "code": "function keyedListStep005_key(ctx) {\n  const value = ctx.run(\"重复 key 单独重建分支\")\n  ctx.next(\"two-position swap\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「列表与 Key 更新」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：交换快路径直接返回结果；不符合快路径时才进入下面的 head/tail scan，它是并列分支而非继续调用执行后继续到「head/tail scan」。",
    "code": "function keyedListStep006_twoPositionSwap(ctx) {\n  if (!ctx.match(\"two-position swap\")) return ctx.skip()\n  const value = ctx.runCurrentBranch()\n  ctx.next(\"head/tail scan\", value)\n  return value\n}",
    "watch": "手写时先盯住：firstMismatch、secondMismatch、domOrderIsStable。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「列表与 Key 更新」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：两端扫描停止后，为剩余旧行建立 oldIndexByKey，并逐个匹配新中间区执行后继续到「oldIndexByKey」。",
    "code": "function keyedListStep007_headTailScan(ctx) {\n  const value = ctx.run(\"head/tail scan\")\n  ctx.next(\"oldIndexByKey\", value)\n  return value\n}",
    "watch": "手写时先盯住：oldStart、oldEnd、nextStart、nextEnd。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「列表与 Key 更新」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：中间区得到旧位置序列后，把 middleOldIndexes 传给 stableIndexes() 求 LIS，识别已经保持相对顺序的行执行后继续到「调用 LIS 的实际位置」。",
    "code": "function keyedListStep008_oldIndexByKey(ctx) {\n  const value = ctx.run(\"oldIndexByKey\")\n  ctx.next(\"调用 LIS 的实际位置\", value)\n  return value\n}",
    "watch": "手写时先盯住：oldIndex、row.patch、reusedOldIndexes。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「列表与 Key 更新」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：const stable = stableIndexes(执行后继续到「stableIndexes() / LIS」。",
    "code": "function keyedListStep009_lIS(ctx) {\n  const value = ctx.run(\"调用 LIS 的实际位置\")\n  ctx.next(\"stableIndexes() / LIS\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「列表与 Key 更新」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：协调器从右向左遍历中间区：缺失 key 调 mountRow()，不在 LIS 的旧行用 insertBefore() 移动，稳定行保持不动执行后继续到「从右到左挂载缺失行」。",
    "code": "function keyedListStep010_stableIndexesLIS(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"从右到左挂载缺失行\", value)\n  return value\n}",
    "watch": "手写时先盯住：predecessors、tails、stable。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「列表与 Key 更新」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：row = mountRow(index, cursor)执行后继续到「mountRow() / insertBefore()」。",
    "code": "function keyedListStep011(ctx) {\n  const value = ctx.run(\"从右到左挂载缺失行\")\n  ctx.next(\"mountRow() / insertBefore()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「列表与 Key 更新」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：新 rows 数组与真实 DOM 顺序同步返回，下一轮以它作为 previous rows，keyed diff 完成执行后回到本主题的外层调用者。",
    "code": "function keyedListStep012_mountRowInsertBefore(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先盯住：row、detached、cursor、next。"
  }
};
