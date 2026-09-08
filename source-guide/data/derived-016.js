rueSourceGuide.data["derived"].rows.push(...[
  {
    "title": "runWatcherHandler()",
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 159,
    "code": "    runWatcherHandler(id, callback) {\n        if (!this.#effects.get(id)?.watcher)\n            return this.untrack(callback);\n        const stackIndex = this.#watcherHandlerEffectIds.length;\n        this.#watcherHandlerEffectIds.push(id);\n        try {\n            return this.untrack(callback);\n        }",
    "kind": "回调",
    "note": "handler 执行期间若调用 onWatcherCleanup(fn)，运行时利用当前 watcher id 把 fn 登记到同一个 effect record",
    "watch": "#watcherHandlerEffectIds、state.currentEffectId",
    "section": "watch：另一个公开入口",
    "originalStep": 8,
    "sectionStart": false,
    "definitionId": "fn-97"
  },
  {
    "title": "不收集 handler 依赖，但保存 watcher id",
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 163,
    "code": "        this.#watcherHandlerEffectIds.push(id);\n        try {\n            return this.untrack(callback);\n        }\n        finally {\n            this.#watcherHandlerEffectIds.splice(stackIndex, 1);\n        }",
    "kind": "衔接代码",
    "note": "this.#watcherHandlerEffectIds.push(id)",
    "section": "watch：另一个公开入口",
    "originalStep": 8,
    "sectionStart": false,
    "definitionId": "fn-97"
  },
  {
    "title": "onWatcherCleanup()",
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 144,
    "code": "    onWatcherCleanup(cleanup, failSilently = false) {\n        // Watch handlers run untracked, but their synchronous cleanup registrations\n        // still belong to the watcher that invoked them.\n        const id = this.state.currentEffectId ??\n            this.#watcherHandlerEffectIds[this.#watcherHandlerEffectIds.length - 1];\n        const record = id === undefined ? undefined : this.#effects.get(id);\n        if (record?.watcher) {\n            record.cleanups.push(cleanup);",
    "kind": "另一路径",
    "note": "这是普通 watch 的清理出口；下一步展示同一 watcher 基础设施的另一入口 watchEffect()，不是 cleanup 自动调用它",
    "watch": "record.watcher、record.cleanups",
    "section": "watch：另一个公开入口",
    "originalStep": 9,
    "sectionStart": false,
    "definitionId": "fn-98"
  },
  {
    "title": "下轮或销毁时清理",
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 250,
    "code": "        this.#runCleanups(cleanups);\n        const tracking = this.graph.beginTracking(record.node);\n        if (tracking === undefined)\n            return undefined;\n        try {\n            return this.state.runWithEffect(record.id, () => {\n                if (record.scopeId === undefined)",
    "kind": "衔接代码",
    "note": "this.#runCleanups(cleanups)",
    "section": "watch：另一个公开入口",
    "originalStep": 9,
    "sectionStart": false,
    "definitionId": "fn-79"
  },
  {
    "title": "watchEffect()",
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js",
    "line": 99,
    "code": "export const watchEffect = (runtime, callback, options) => {\n    const normalized = options ?? {};\n    const handle = runtime.createEffect(callback, {\n        lazy: true,\n        scheduler: resolveScheduler(normalized),\n        watcher: true,\n    });\n    runtime.runEffect(handle.id);",
    "kind": "完成",
    "note": "callback 每次重跑前执行上轮 cleanup，并重新收集实际读取的依赖，computed 与 watch 主题至此闭环",
    "watch": "callback、scheduler、handle.dispose()",
    "section": "watchEffect：自动依赖入口",
    "originalStep": 10,
    "sectionStart": true,
    "definitionId": "fn-99"
  },
  {
    "title": "watchEffect 首轮显式 runEffect",
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js",
    "line": 106,
    "code": "    runtime.runEffect(handle.id);\n    return handle;\n};\nexport const watchSignal = (runtime, source, handler, options) => createWatcher(runtime, () => source.get(), handler, options ?? {});\nexport const watchDeepSignal = (runtime, source, handler, options) => createWatcher(runtime, () => source.get(), handler, options ?? {}, deepEqual);\nexport const watchPath = (runtime, source, path, handler, options) => createWatcher(runtime, () => source.getPath(path), handler, options ?? {});\nconst resolveSource = (source) => {",
    "kind": "衔接代码",
    "note": "runtime.runEffect(handle.id)",
    "section": "watchEffect：自动依赖入口",
    "originalStep": 10,
    "sectionStart": false,
    "definitionId": "fn-99"
  }
]);
