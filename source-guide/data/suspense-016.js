rueSourceGuide.data["suspense"].rows.push(...[
  {
    "title": "retry signal 驱动 effect，并安排 show",
    "file": "node_modules/@rue-js/runtime/src/components/Suspense.ts",
    "line": 389,
    "code": "          scheduleShowContent(curProps)\n        } catch (thrown) {\n          if (!isSuspenseThenable(thrown)) {\n            ;(rue as any).handleError?.(thrown, null)\n            throw thrown\n          }\n",
    "kind": "衔接代码",
    "note": "scheduleShowContent(curProps)",
    "section": "Promise settle 后的重试",
    "originalStep": 8,
    "sectionStart": false,
    "definitionId": "fn-202"
  },
  {
    "title": "scheduleShowContent() / showContent()",
    "file": "node_modules/@rue-js/runtime/src/components/Suspense.ts",
    "line": 328,
    "code": "    const scheduleShowContent = (curProps: SuspenseProps) => {\n      const generation = ctx.generation\n      queueMicrotask(() => {\n        queueMicrotask(() => {\n          showContent(curProps, generation)\n        })\n      })\n    }",
    "kind": "阅读顺序",
    "note": "scheduleShowContent() 经过两个微任务进入 showContent()；只有 active、generation 相同且 pending 为空才显示。下一阅读步骤的 registerParentDependency() 实际发生在更早的 boundary.register/捕获 thenable 阶段，不是 showContent 完成后调用。",
    "watch": "contentVisible、contentNodes、status",
    "section": "Promise settle 后的重试",
    "originalStep": 9,
    "sectionStart": false,
    "definitionId": "fn-213"
  },
  {
    "title": "showContent 的真正调用处（双微任务）",
    "file": "node_modules/@rue-js/runtime/src/components/Suspense.ts",
    "line": 332,
    "code": "          showContent(curProps, generation)\n        })\n      })\n    }\n\n    const scheduleFallback = (curProps: SuspenseProps, generation: number, hadContent: boolean) => {\n      clearFallbackTimer()",
    "kind": "衔接代码",
    "note": "showContent(curProps, generation)",
    "section": "Promise settle 后的重试",
    "originalStep": 9,
    "sectionStart": false,
    "definitionId": "fn-214"
  },
  {
    "title": "父依赖注册在 pending 时，不在显示之后",
    "file": "node_modules/@rue-js/runtime/src/components/Suspense.ts",
    "line": 356,
    "code": "        registerParentDependency(thenable, curProps)\n      }\n      if (!tracked) {\n        return\n      }\n\n      if (ctx.status !== 'pending' && ctx.status !== 'fallback') {",
    "kind": "衔接代码",
    "note": "registerParentDependency(thenable, curProps)",
    "section": "Promise settle 后的重试",
    "originalStep": 9,
    "sectionStart": false,
    "definitionId": "fn-207"
  },
  {
    "title": "onBeforeUnmount()",
    "file": "node_modules/@rue-js/runtime/src/components/Suspense.ts",
    "line": 410,
    "code": "    onBeforeUnmount(() => {\n      ctx.active = false\n      ctx.generation += 1\n      clearFallbackTimer()\n      delete (ctx.container as any)[RUE_SUSPENSE_BOUNDARY_KEY]\n      delete (ctx.contentContainer as any)[RUE_SUSPENSE_BOUNDARY_KEY]\n      ctx.effect?.dispose?.()\n      ctx.effect = null",
    "kind": "完成",
    "note": "卸载清空当前边界的 pending 集合与 DOM 范围，迟到回调因 active/generation 检查而失效；不会取消原始 Promise。父边界已经登记的同一 thenable 仍由父级自己的 settle handler 处理。",
    "watch": "active、generation、fallbackTimer、contentRoot",
    "section": "卸载阶段",
    "originalStep": 11,
    "sectionStart": true,
    "definitionId": "fn-209"
  }
]);
