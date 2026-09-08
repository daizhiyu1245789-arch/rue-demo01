Object.assign(rueSourceGuide.data.definitions, {
  "fn-260": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/helpers.js",
    "line": 85,
    "code": "dropRenderEntriesWithin = (state, container) => {\n    const host = hostForRender(state);\n    if (!host)\n        return;\n    for (const [anchor, entry] of state.anchorMounts) {\n        if (anchor === container || host.contains(container, anchor)) {\n            state.anchorMounts.delete(anchor);\n            const mounted = entry.mounted;\n            entry.mounted = undefined;\n            const parent = host.getParentNode(anchor);\n            if (parent)\n                removeMounted(host, parent, mounted);\n            else\n                mounted?.dispose?.();\n        }\n    }\n    for (const [start, entry] of state.rangeMounts) {\n        if (entryBelongsTo(host, container, entry, 'start')) {\n            state.rangeMounts.delete(start);\n            const mounted = entry.mounted;\n            entry.mounted = undefined;\n            const parent = host.getParentNode(entry.end) ?? host.getParentNode(entry.start);\n            if (parent)\n                removeMounted(host, parent, mounted);\n            else\n                mounted?.dispose?.();\n        }\n    }\n}"
  },
  "fn-261": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js",
    "line": 62,
    "code": "unmountContainer = (state, container) => {\n    const host = createHost(state.adapter);\n    if (host)\n        clearContainer(host, state, container);\n    else\n        state.containerMounts.delete(container);\n}"
  },
  "fn-262": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js",
    "line": 2,
    "code": "clearContainer = (host, state, container) => {\n    state.containerMounts.get(container)?.dispose?.();\n    host.setInnerHTML(container, '');\n    state.containerMounts.delete(container);\n}"
  },
  "fn-263": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js",
    "line": 107,
    "code": "dispose() {\n        if (this.disposed)\n            return;\n        this.disposed = true;\n        this.renderEffect?.dispose();\n        delete instance.host.__rue_component_render_invalidate__;\n        state.components.withCurrent(instance, () => {\n            state.lifecycle.call(instance.host, 'before_unmount');\n        });\n        state.components.disposeScope(instance);\n        this.subtree?.dispose?.();\n        state.components.withCurrent(instance, () => {\n            state.lifecycle.call(instance.host, 'unmounted');\n        });\n        state.components.release(instance);\n    }"
  },
  "fn-264": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js",
    "line": 113,
    "code": "() => {\n            state.lifecycle.call(instance.host, 'before_unmount');\n        }"
  },
  "fn-265": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/instance.js",
    "line": 144,
    "code": "disposeScope = (instance) => {\n        if (!instance || instance.hookScopeDisposed)\n            return false;\n        instance.hookScopeDisposed = true;\n        const disposeHooks = carrier.__rueDisposeHookScopeForInstance;\n        if (typeof disposeHooks === 'function')\n            disposeHooks.call(carrier, instance.host);\n        return true;\n    }"
  },
  "fn-266": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js",
    "line": 94,
    "code": "dispose() {\n            if (disposed)\n                return;\n            disposed = true;\n            for (const root of renderEntryRoots)\n                dropRenderEntriesWithin(state, root);\n            disposeVaporResources(state, cleanupBucket, effectScopeId);\n        }"
  },
  "fn-267": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js",
    "line": 118,
    "code": "() => {\n            state.lifecycle.call(instance.host, 'unmounted');\n        }"
  },
  "fn-268": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js",
    "line": 34,
    "code": "disposeVaporResources = (state, cleanupBucket, scopeId) => {\n    invokeCleanupBucket(cleanupBucket);\n    if (scopeId === undefined)\n        return;\n    state.kernel.disposeEffectScope(scopeId);\n    state.effectScopeIds.delete(scopeId);\n}"
  },
  "fn-269": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js",
    "line": 206,
    "code": "vapor(setup) {\n            assertRuntimeActive(state);\n            const input = createVaporMountInput(setup, kernel);\n            if (input.mountEffectScopeId !== undefined) {\n                state.effectScopeIds.add(input.mountEffectScopeId);\n            }\n            return storeMountInput(state, input);\n        }"
  },
  "fn-270": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js",
    "line": 214,
    "code": "free() {\n            if (state.disposed)\n                return;\n            state.disposed = true;\n            for (const scopeId of state.effectScopeIds) {\n                kernel.disposeEffectScope(scopeId);\n            }\n            ownedMounts.free();\n            components.free();\n            lifecycle.clear();\n            errors.clear();\n            appController.clear();\n            state.effectScopeIds.clear();\n            state.anchorMounts.clear();\n            state.mountInputs.clear();\n            state.pendingInputs.length = 0;\n            state.pendingComponentLifecycle.length = 0;\n            state.containerMounts.clear();\n            state.rangeMounts.clear();\n            state.adapter = undefined;\n        }"
  },
  "fn-271": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/vapor-bridge.js",
    "line": 101,
    "code": "disposeComponent(instance) {\n            const target = asBridgeOwner(instance);\n            if (!target) {\n                return;\n            }\n            disposeHookScopeForInstance(target);\n            forgetScopeOwner(target, RUE_SHARED_RENDER_SCOPE_KEY);\n            disposeScopeKey(getSharedRuntime(), target, RUE_SHARED_RENDER_SCOPE_KEY);\n        }"
  }
});
