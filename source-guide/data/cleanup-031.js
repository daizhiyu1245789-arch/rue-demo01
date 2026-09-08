rueSourceGuide.data["cleanup"].rows.push(...[
  {
    "title": "clearContainer() + releaseAppMount()",
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js",
    "line": 2,
    "code": "const clearContainer = (host, state, container) => {\n    state.containerMounts.get(container)?.dispose?.();\n    host.setInnerHTML(container, '');\n    state.containerMounts.delete(container);\n};\nconst commitMountedContainer = (host, container, mounted) => {\n    /*\n     * [14 提交到 #app]",
    "kind": "另一路径",
    "note": "清空 containerMounts 后返回 runtime.unmount 回调执行全局 unmounted，再到 appController.unmount 的 finally。仅 transaction.owner===state 且 status!=failed 才 releaseAppMount；失败事务会保留。之后可选的 runtime.free() 是独立入口。",
    "watch": "container.innerHTML、containerMounts、appMounts",
    "section": "应用卸载：停止 effect、释放子树、清空容器",
    "originalStep": 15,
    "sectionStart": false,
    "definitionId": "fn-262"
  },
  {
    "title": "释放事务有 owner 与 failed 条件",
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/app.js",
    "line": 129,
    "code": "            if (transaction?.owner === state && transaction.status !== 'failed') {\n                releaseAppMount(state, transaction);\n            }\n        }\n    },\n    withCurrentContainer(container, run) {\n        assertActive();",
    "kind": "衔接代码",
    "note": "transaction?.owner === state && transaction.status !== 'failed'",
    "section": "应用卸载：停止 effect、释放子树、清空容器",
    "originalStep": 15,
    "sectionStart": false,
    "definitionId": "fn-258"
  },
  {
    "title": "runWithClientRuntime finally → popCurrentContainer",
    "file": "node_modules/@rue-js/runtime/src/client-runtime.ts",
    "line": 193,
    "code": "        bridge?.popCurrentContainer?.()",
    "note": "返回 runWithRuntime 后恢复 __rue_active，再回 useApp.unmount 的 finally 释放容器归属。",
    "kind": "返回",
    "section": "应用卸载：停止 effect、释放子树、清空容器",
    "originalStep": 15,
    "sectionStart": false,
    "definitionId": "fn-24"
  },
  {
    "title": "runtime.free()",
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js",
    "line": 213,
    "code": "        },\n        free() {\n            if (state.disposed)\n                return;\n            state.disposed = true;\n            for (const scopeId of state.effectScopeIds) {\n                kernel.disposeEffectScope(scopeId);\n            }",
    "kind": "核验",
    "note": "free() 走全 runtime 清理路径；下一步 bridge.disposeComponent() 是源码核验点，不是当前发布版已确认由 free/unmount 直接调用的下一层",
    "watch": "state.disposed、effectScopeIds、components、ownedMounts",
    "section": "另一个显式入口：runtime.free()",
    "originalStep": 16,
    "sectionStart": true,
    "definitionId": "fn-269"
  },
  {
    "title": "free 清理范围及记录（并列生命周期入口）",
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js",
    "line": 214,
    "code": "        free() {\n            if (state.disposed)\n                return;\n            state.disposed = true;\n            for (const scopeId of state.effectScopeIds) {\n                kernel.disposeEffectScope(scopeId);\n            }",
    "kind": "衔接代码",
    "note": "free() {",
    "section": "另一个显式入口：runtime.free()",
    "originalStep": 16,
    "sectionStart": false,
    "definitionId": "fn-270"
  },
  {
    "title": "bridge.disposeComponent()",
    "file": "node_modules/@rue-js/runtime-vapor/dist/vapor-bridge.js",
    "line": 101,
    "code": "        disposeComponent(instance) {\n            const target = asBridgeOwner(instance);\n            if (!target) {\n                return;\n            }\n            disposeHookScopeForInstance(target);\n            forgetScopeOwner(target, RUE_SHARED_RENDER_SCOPE_KEY);\n            disposeScopeKey(getSharedRuntime(), target, RUE_SHARED_RENDER_SCOPE_KEY);",
    "kind": "核验",
    "note": "当前 dist 只确认该桥方法存在，未确认 componentRecord.dispose() 对它的调用边；应以断点和 effectScopeCount 实测，不能把它画成确定调用链",
    "watch": "__rue_shared_render_scope_id、effectScopeCount()",
    "section": "独立定义：当前调用边未确认",
    "originalStep": 17,
    "sectionStart": true,
    "definitionId": "fn-271"
  }
]);
