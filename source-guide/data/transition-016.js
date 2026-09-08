rueSourceGuide.data["transition"].rows.push(...[
  {
    "title": "out-in / in-out branches",
    "file": "node_modules/@rue-js/runtime/src/components/Transition.ts",
    "line": 251,
    "code": "          } else if (mode === 'out-in') {\n            const leavingSnapshot = leavingEl.cloneNode(true) as HTMLElement\n            renderTransition([])\n            ctx.container.insertBefore(leavingSnapshot, ctx.endEl as any)\n            ctx.snapshots.add(leavingSnapshot)\n            leaveSnapshot(leavingSnapshot, () => {\n              if (ctx.renderVersion !== renderVersion) return\n              renderChild()",
    "kind": "时序",
    "note": "任一分支完成会删除 snapshot 和 phase；新一轮变化或组件卸载时统一调用 cancelActiveTransitions() 防止旧回调生效",
    "watch": "mode、renderVersion、leavingSnapshot",
    "section": "互斥模式：out-in / in-out",
    "originalStep": 8,
    "sectionStart": true,
    "definitionId": "fn-227"
  },
  {
    "title": "out-in 的 leave 完成回调才 renderChild",
    "file": "node_modules/@rue-js/runtime/src/components/Transition.ts",
    "line": 256,
    "code": "            leaveSnapshot(leavingSnapshot, () => {\n              if (ctx.renderVersion !== renderVersion) return\n              renderChild()\n              queueEnter('enter')\n            })\n          } else if (mode === 'in-out') {\n            renderChild()",
    "kind": "衔接代码",
    "note": "leaveSnapshot(leavingSnapshot, () =>",
    "section": "互斥模式：out-in / in-out",
    "originalStep": 8,
    "sectionStart": false,
    "definitionId": "fn-235"
  },
  {
    "title": "in-out 的 enter 完成后才 leave",
    "file": "node_modules/@rue-js/runtime/src/components/Transition.ts",
    "line": 275,
    "code": "                  leaveSnapshot(leavingSnapshot)\n                },\n              )\n            } else {\n              leaveSnapshot(leavingSnapshot)\n            }\n          } else {",
    "kind": "衔接代码",
    "note": "leaveSnapshot(leavingSnapshot)",
    "section": "互斥模式：out-in / in-out",
    "originalStep": 8,
    "sectionStart": false,
    "definitionId": "fn-236"
  },
  {
    "title": "cancelActiveTransitions() / onUnmounted()",
    "file": "node_modules/@rue-js/runtime/src/components/Transition.ts",
    "line": 171,
    "code": "  function cancelActiveTransitions() {\n    ctx.activePhases.forEach(phase => phase.cancel())\n    ctx.activePhases.clear()\n    ctx.snapshots.forEach(el => el.remove())\n    ctx.snapshots.clear()\n  }\n\n  onMounted(() => {",
    "kind": "完成",
    "note": "版本令牌使迟到的 frame/transitionend 失效，所有克隆节点和 listener 被释放，Transition 流程结束",
    "watch": "activePhases、snapshots、effect",
    "section": "取消或卸载",
    "originalStep": 9,
    "sectionStart": true,
    "definitionId": "fn-237"
  },
  {
    "title": "卸载使旧回调和动画失效",
    "file": "node_modules/@rue-js/runtime/src/components/Transition.ts",
    "line": 307,
    "code": "  onUnmounted(() => {\n    ctx.renderVersion = null\n    cancelActiveTransitions()\n    if (ctx.effect) {\n      ctx.effect.dispose()\n      ctx.effect = null\n    }",
    "kind": "衔接代码",
    "note": "onUnmounted(() =>",
    "section": "取消或卸载",
    "originalStep": 9,
    "sectionStart": false,
    "definitionId": "fn-238"
  }
]);
