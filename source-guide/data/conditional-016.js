rueSourceGuide.data["conditional"].rows.push(...[
  {
    "title": "runtime 规范化并进入底层 anchor renderer",
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js",
    "line": 176,
    "code": "                runRenderEntry(() => renderAnchor(state, mountController, input, parent, anchor));\n            });\n        },\n        renderBetween(value, parent, start, end) {\n            return appController.withCurrentContainer(parent, () => {\n                const input = recordInput('renderBetween', value, [parent, start, end]);\n                runRenderEntry(() => renderBetween(state, mountController, input, parent, start, end));",
    "kind": "衔接代码",
    "note": "runRenderEntry(() => renderAnchor(",
    "section": "初始化锚点，之后执行条件 effect",
    "originalStep": 7,
    "sectionStart": false,
    "definitionId": "fn-136"
  },
  {
    "title": "runWithRuntime(runtime, runner)",
    "file": "node_modules/@rue-js/runtime/src/runtime-context.ts",
    "line": 32,
    "code": "export const runWithRuntime = <T>(runtime: unknown, runner: () => T): T => {\n  if (!canTrackRuntime(runtime)) {\n    return runner()\n  }\n\n  const hadActiveRuntime = Object.prototype.hasOwnProperty.call(runtimeGlobal, '__rue_active')\n  const previousRuntime = runtimeGlobal.__rue_active\n  runtimeGlobal.__rue_active = runtime\n  try {\n    console.log('dzy第一个打印出来')\n    return runner()\n  } finally {\n    if (hadActiveRuntime) {\n      runtimeGlobal.__rue_active = previousRuntime\n    } else {\n      delete runtimeGlobal.__rue_active\n    }\n  }\n}",
    "note": "切换活动 runtime → runner() → finally 恢复。",
    "kind": "调用",
    "section": "初始化锚点，之后执行条件 effect",
    "originalStep": 7,
    "sectionStart": false,
    "definitionId": "fn-25"
  },
  {
    "title": "runtime.renderAnchor 包装入口",
    "file": "node_modules/@rue-js/runtime-vapor/dist/runtime-entry-wrap.js",
    "line": 141,
    "code": "    const wrappedRuntimeEntry = function wrappedRuntimeEntry(...args) {\n        runtime[RUE_PENDING_ENTRY_ERROR_KEY] = undefined;\n        runtime[RUE_ACTIVE_ENTRY_DEPTH_KEY] = (runtime[RUE_ACTIVE_ENTRY_DEPTH_KEY] ?? 0) + 1;\n        let rethrowingPendingEntryError = false;\n        try {\n            const result = Reflect.apply(original, this, args);\n            const pending = runtime[RUE_PENDING_ENTRY_ERROR_KEY];\n            runtime[RUE_PENDING_ENTRY_ERROR_KEY] = undefined;\n            if (pending !== undefined && pending !== null) {",
    "note": "Reflect.apply(original, this, args) 进入原始 runtime.renderAnchor。",
    "kind": "调用",
    "section": "初始化锚点，之后执行条件 effect",
    "originalStep": 7,
    "sectionStart": false,
    "definitionId": "fn-27"
  },
  {
    "title": "原始 runtime.renderAnchor",
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js",
    "line": 173,
    "code": "        renderAnchor(value, parent, anchor) {\n            return appController.withCurrentContainer(parent, () => {\n                const input = recordInput('renderAnchor', value, [parent, anchor]);\n                runRenderEntry(() => renderAnchor(state, mountController, input, parent, anchor));\n            });\n        },\n        renderBetween(value, parent, start, end) {",
    "note": "容器上下文内 recordInput，再 runRenderEntry 调底层 anchor renderer。",
    "kind": "调用",
    "section": "初始化锚点，之后执行条件 effect",
    "originalStep": 7,
    "sectionStart": false,
    "definitionId": "fn-137"
  }
]);
