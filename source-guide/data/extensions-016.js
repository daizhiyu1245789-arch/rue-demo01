rueSourceGuide.data["extensions"].rows.push(...[
  {
    "title": "h(resolvedType, forwardedProps)",
    "file": "node_modules/@rue-js/runtime/src/components/Component.ts",
    "line": 76,
    "code": "  return h(\n    resolvedType as any,\n    withParentContextProps(resolvedType as any, forwardedProps) as ComponentProps,\n    ...(forwardedChildren as any[]),\n  )\n}\n",
    "kind": "完成",
    "note": "返回的 handle 重新进入统一 MountInput 分派器，随后按 component 或 element 正常挂载，插件与动态组件链完成",
    "watch": "forwardedProps、forwardedChildren",
    "section": "使用动态组件时读取注册表",
    "originalStep": 10,
    "sectionStart": false,
    "definitionId": "fn-187"
  }
]);
