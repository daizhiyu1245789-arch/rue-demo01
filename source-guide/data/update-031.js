rueSourceGuide.data["update"].rows.push(...[
  {
    "title": "settextContent()",
    "file": "node_modules/@rue-js/runtime/src/dom.ts",
    "line": 1784,
    "code": "export const settextContent = (el: DomNodeLike, val: any) => {\n  /*\n   * [12 写入文本]\n   * 调用链：setup()/响应式更新 -> _$settextContent() -> settextContent() -> el.textContent。\n   * 观察：el、val、el.textContent。\n   */\n  // oxlint-disable-next-line no-debugger -- Rue 源码学习用自动断点。\n  if ((globalThis as any).__RUE_RENDER_DEBUG__?.take('12.dom-set-text')) debugger",
    "kind": "完成",
    "note": "原生 textContent 写入完成，浏览器显示新值，本次响应式局部更新结束",
    "watch": "el、val、el.textContent",
    "section": "事件触发：count.value 写入到 DOM 更新",
    "originalStep": 9,
    "sectionStart": false,
    "definitionId": "fn-118"
  }
]);
