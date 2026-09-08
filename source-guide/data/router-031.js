rueSourceGuide.data["router"].rows.push(...[
  {
    "title": "公共 renderAnchor 转内部渲染",
    "file": "node_modules/@rue-js/runtime/src/rue.ts",
    "line": 1492,
    "code": "export const renderAnchor = (value: RenderableInput, parent: DomElementLike, anchor: DomNodeLike) =>\n  reactiveUntrack(() => renderAnchorUntracked(value, parent, anchor))\n\n/** 在单个临时锚点前执行一次性静态渲染，完成后可移除锚点。 */\nexport const renderStatic = (\n  value: RenderableInput,\n  parent: DomElementLike,",
    "kind": "衔接代码",
    "note": "export const renderAnchor =",
    "section": "响应式 route 变化后执行视图 watcher",
    "originalStep": 14,
    "sectionStart": false,
    "definitionId": "fn-129"
  }
]);
