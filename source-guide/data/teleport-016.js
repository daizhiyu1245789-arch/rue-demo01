rueSourceGuide.data["teleport"].rows.push(...[
  {
    "title": "onUnmounted()",
    "file": "node_modules/@rue-js/runtime/src/components/Teleport.ts",
    "line": 220,
    "code": "  onUnmounted(() => {\n    cancelDeferredRender()\n    if (ctx.effect) {\n      ctx.effect.dispose()\n      ctx.effect = null\n    }\n    ctx.started = false\n",
    "kind": "完成",
    "note": "本地容器和目标双锚点之间的内容都被释放，Teleport 生命周期结束",
    "watch": "effect、deferVersion、target",
    "section": "卸载时由生命周期调度器调用",
    "originalStep": 8,
    "sectionStart": true,
    "definitionId": "fn-200"
  }
]);
