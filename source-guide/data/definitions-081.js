Object.assign(rueSourceGuide.data.definitions, {
  "fn-80": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js",
    "line": 108,
    "code": "beginTracking(subscriber) {\n        const node = this.#node(subscriber);\n        if (node === undefined)\n            return undefined;\n        this.#cycle = nextCycle(this.#cycle);\n        const previous = this.#activeSubscriber;\n        node.dependenciesTail = undefined;\n        node.flags |= RECURSED_CHECK;\n        if (node.kind.type === 'effect')\n            node.flags |= WATCHING;\n        this.#activeSubscriber = subscriber;\n        return { previous };\n    }"
  },
  "fn-81": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 255,
    "code": "() => {\n                if (record.scopeId === undefined)\n                    return record.callback();\n                return this.scopes.run(record.scopeId, record.callback);\n            }"
  },
  "fn-82": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/runtime-state.js",
    "line": 72,
    "code": "runWithEffect(effectId, callback) {\n        const previous = this.#currentEffectId;\n        const stackIndex = this.#activeEffectIds.length;\n        this.#currentEffectId = effectId;\n        this.#activeEffectIds.push(effectId);\n        try {\n            return callback();\n        }\n        finally {\n            this.#activeEffectIds.splice(stackIndex, 1);\n            this.#currentEffectId = previous;\n        }\n    }"
  },
  "fn-83": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scope.js",
    "line": 47,
    "code": "run(scopeId, callback) {\n        if (!this.#scopes.has(scopeId))\n            return undefined;\n        return this.state.runWithScope(scopeId, callback);\n    }"
  },
  "fn-84": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js",
    "line": 133,
    "code": "get() {\n        this.beforeRead();\n        this.runtime.trackDependency(this.node);\n        return this.#value;\n    }"
  },
  "fn-85": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js",
    "line": 124,
    "code": "get value() {\n        this.beforeRead();\n        if (this.shouldTrackValueRead())\n            this.runtime.trackDependency(this.node);\n        return this.#value;\n    }"
  },
  "fn-86": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 180,
    "code": "trackDependency(node) {\n        const effectId = this.state.currentEffectId;\n        if (effectId === undefined || !this.#effects.has(effectId))\n            return false;\n        const owner = this.state.currentRenderDebugOwner;\n        const record = this.#effects.get(effectId);\n        if (record !== undefined && owner !== undefined)\n            record.owner = owner;\n        return this.graph.trackDependency(node);\n    }"
  },
  "fn-87": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js",
    "line": 132,
    "code": "trackDependency(dependency) {\n        const subscriber = this.#activeSubscriber;\n        if (subscriber === undefined ||\n            sameId(dependency, subscriber) ||\n            !this.contains(dependency) ||\n            !this.contains(subscriber)) {\n            return false;\n        }\n        this.#link(dependency, subscriber, this.#cycle);\n        return true;\n    }"
  },
  "fn-88": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js",
    "line": 121,
    "code": "endTracking(subscriber, state) {\n        const node = this.#node(subscriber);\n        if (node !== undefined) {\n            this.#purgeStaleDependencies(subscriber);\n            node.flags = removeFlags(node.flags, RECURSED_CHECK | RECURSED | PENDING);\n            if (node.kind.type === 'effect')\n                node.flags |= WATCHING;\n        }\n        this.#activeSubscriber =\n            state.previous !== undefined && this.contains(state.previous) ? state.previous : undefined;\n    }"
  },
  "fn-89": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/computed.js",
    "line": 67,
    "code": "beforeRead() {\n        if (!this.#evaluating)\n            this.runtime.runEffect(this.#effect.id);\n    }"
  },
  "fn-90": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 233,
    "code": "#runComputed(record) {\n        const binding = record.computed;\n        if (binding === undefined || !binding.beginEvaluation())\n            return;\n        try {\n            const value = this.#runEffectBody(record);\n            this.graph.commitComputed(record.node, binding.commit(value));\n        }\n        catch (error) {\n            binding.abort();\n            this.#captureError(record, error);\n            this.graph.commitComputed(record.node, binding.commit(undefined));\n        }\n    }"
  },
  "fn-91": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/computed.js",
    "line": 56,
    "code": "commit(value) {\n        const next = value;\n        const changed = !this.#initialized || !Object.is(this.readCachedValue(), next);\n        this.replaceCachedValue(next);\n        this.#initialized = true;\n        this.#evaluating = false;\n        return changed;\n    }"
  },
  "fn-92": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js",
    "line": 223,
    "code": "commitComputed(id, changed) {\n        const node = this.#node(id);\n        if (node !== undefined && changed)\n            node.valueVersion = nextCycle(node.valueVersion);\n        this.markNodeClean(id);\n    }"
  },
  "fn-93": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js",
    "line": 125,
    "code": "export function watch(runtime, source, handler, options) {\n    const resolvedHandler = handler;\n    const resolvedOptions = options;\n    if (Array.isArray(source)) {\n        const getter = () => source.map(resolveSource);\n        return createWatcher(runtime, getter, resolvedHandler, (resolvedOptions ?? {}), shallowArrayEqual);\n    }\n    if (isSignalLike(source)) {\n        return createWatcher(runtime, () => readSignalLike(source), resolvedHandler, resolvedOptions ?? {});\n    }\n    if (typeof source === 'function') {\n        return createWatcher(runtime, () => Reflect.apply(source, undefined, []), resolvedHandler, resolvedOptions ?? {});\n    }\n    return createWatcher(runtime, () => resolveSource(source), resolvedHandler, resolvedOptions ?? {});\n}"
  },
  "fn-94": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js",
    "line": 69,
    "code": "createWatcher = (runtime, getter, handler, options, fallbackEquals = Object.is) => {\n    let first = true;\n    let previous;\n    let handle;\n    const equals = options.equals ?? fallbackEquals;\n    const callback = () => {\n        const next = getter();\n        const changed = first || !equals(previous, next);\n        if (first) {\n            if (options.immediate) {\n                runtime.runWatcherHandler(handle.id, () => handler(next, undefined));\n            }\n            first = false;\n        }\n        else if (changed) {\n            runtime.runWatcherHandler(handle.id, () => handler(next, previous));\n        }\n        previous = next;\n    };\n    handle = runtime.createEffect(callback, {\n        lazy: true,\n        scheduler: resolveScheduler(options),\n        watcher: true,\n    });\n    // The first run is synchronous even with a custom scheduler so dependencies\n    // exist before createWatcher returns.\n    runtime.runEffect(handle.id);\n    return handle;\n}"
  },
  "fn-95": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js",
    "line": 74,
    "code": "callback = () => {\n        const next = getter();\n        const changed = first || !equals(previous, next);\n        if (first) {\n            if (options.immediate) {\n                runtime.runWatcherHandler(handle.id, () => handler(next, undefined));\n            }\n            first = false;\n        }\n        else if (changed) {\n            runtime.runWatcherHandler(handle.id, () => handler(next, previous));\n        }\n        previous = next;\n    }"
  },
  "fn-96": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js",
    "line": 84,
    "code": "() => handler(next, previous)"
  },
  "fn-97": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 159,
    "code": "runWatcherHandler(id, callback) {\n        if (!this.#effects.get(id)?.watcher)\n            return this.untrack(callback);\n        const stackIndex = this.#watcherHandlerEffectIds.length;\n        this.#watcherHandlerEffectIds.push(id);\n        try {\n            return this.untrack(callback);\n        }\n        finally {\n            this.#watcherHandlerEffectIds.splice(stackIndex, 1);\n        }\n    }"
  },
  "fn-98": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 144,
    "code": "onWatcherCleanup(cleanup, failSilently = false) {\n        // Watch handlers run untracked, but their synchronous cleanup registrations\n        // still belong to the watcher that invoked them.\n        const id = this.state.currentEffectId ??\n            this.#watcherHandlerEffectIds[this.#watcherHandlerEffectIds.length - 1];\n        const record = id === undefined ? undefined : this.#effects.get(id);\n        if (record?.watcher) {\n            record.cleanups.push(cleanup);\n            return true;\n        }\n        if (!failSilently) {\n            this.#warn('onWatcherCleanup() is called when there is no active watcher.');\n        }\n        return false;\n    }"
  },
  "fn-99": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/watch.js",
    "line": 99,
    "code": "watchEffect = (runtime, callback, options) => {\n    const normalized = options ?? {};\n    const handle = runtime.createEffect(callback, {\n        lazy: true,\n        scheduler: resolveScheduler(normalized),\n        watcher: true,\n    });\n    runtime.runEffect(handle.id);\n    return handle;\n}"
  }
});
