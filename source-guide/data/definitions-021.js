Object.assign(rueSourceGuide.data.definitions, {
  "fn-20": {
    "file": "node_modules/@rue-js/runtime/src/hooks/useApp.ts",
    "line": 64,
    "code": "normalizeContainer = (container: string | DomElementLike): DomElementLike | null => {\n    if (typeof container === 'string') {\n      const el = querySelector(container)\n      return (el as DomElementLike) || null\n    }\n    return container as DomElementLike\n  }"
  },
  "fn-21": {
    "file": "node_modules/@rue-js/runtime/src/hooks/app-container-ownership.ts",
    "line": 18,
    "code": "export function reserveAppContainer(\n  container: DomElementLike,\n  owner: AppContainerOwner,\n): AppContainerReservation | null {\n  const current = containerOwnership.get(container)\n  if (current?.owner === owner) return null\n  if (current) throw new Error('Rue container is already mounted by another app.')\n\n  const reservation = { container, owner }\n  containerOwnership.set(container, {\n    confirmed: false,\n    owner,\n    reservation,\n  })\n  return reservation\n}"
  },
  "fn-22": {
    "file": "node_modules/@rue-js/runtime/src/client-runtime.ts",
    "line": 173,
    "code": "runWithClientRuntime = <T>(runtime: Rue, runner: () => T, container?: unknown): T => {\n  /*\n   * [03 绑定运行时上下文]\n   * 调用链：useApp.mount() -> runWithClientRuntime() -> runWithRuntime() -> runner()。\n   * 观察：runtime、container、bridge、didPush。\n   */\n  // oxlint-disable-next-line no-debugger -- Rue 源码学习用自动断点。\n  if ((globalThis as any).__RUE_RENDER_DEBUG__?.take('03.runtime-context')) debugger\n  ensureRuntimeDOMBridge(runtime)\n  return runWithRuntime(runtime, () => {\n    const bridge = clientRuntimeGlobal.__rue_runtime_vapor_shared_bridge\n    const didPush = container != null && typeof bridge?.pushCurrentContainer === 'function'\n    if (didPush) {\n      bridge.pushCurrentContainer!(container)\n    }\n    try {\n      console.log('第二个打印出来')\n      return runner()\n    } finally {\n      if (didPush) {\n        bridge?.popCurrentContainer?.()\n      }\n    }\n  })\n}"
  },
  "fn-23": {
    "file": "node_modules/@rue-js/runtime/src/client-runtime.ts",
    "line": 130,
    "code": "ensureRuntimeDOMBridge = (runtime: unknown) => {\n  const runtimeWithDOM = runtime as { setDOMAdapter?: (bridge: unknown) => void } | null | undefined\n  if (typeof runtimeWithDOM?.setDOMAdapter !== 'function') {\n    return\n  }\n  const bridge = getClientDOMBridge()\n  if (getMarkedRuntimeDOMBridge(runtime) === bridge) {\n    return\n  }\n  runtimeWithDOM.setDOMAdapter(bridge)\n  markRuntimeDOMBridge(runtime, bridge)\n}"
  },
  "fn-24": {
    "file": "node_modules/@rue-js/runtime/src/client-runtime.ts",
    "line": 182,
    "code": "() => {\n    const bridge = clientRuntimeGlobal.__rue_runtime_vapor_shared_bridge\n    const didPush = container != null && typeof bridge?.pushCurrentContainer === 'function'\n    if (didPush) {\n      bridge.pushCurrentContainer!(container)\n    }\n    try {\n      console.log('第二个打印出来')\n      return runner()\n    } finally {\n      if (didPush) {\n        bridge?.popCurrentContainer?.()\n      }\n    }\n  }"
  },
  "fn-25": {
    "file": "node_modules/@rue-js/runtime/src/runtime-context.ts",
    "line": 32,
    "code": "runWithRuntime = <T>(runtime: unknown, runner: () => T): T => {\n  if (!canTrackRuntime(runtime)) {\n    return runner()\n  }\n\n  const hadActiveRuntime = Object.prototype.hasOwnProperty.call(runtimeGlobal, '__rue_active')\n  const previousRuntime = runtimeGlobal.__rue_active\n  runtimeGlobal.__rue_active = runtime\n  try {\n    console.log('dzy第一个打印出来')\n    return runner()\n  } finally {\n    if (hadActiveRuntime) {\n      runtimeGlobal.__rue_active = previousRuntime\n    } else {\n      delete runtimeGlobal.__rue_active\n    }\n  }\n}"
  },
  "fn-26": {
    "file": "node_modules/@rue-js/runtime/src/hooks/useApp.ts",
    "line": 117,
    "code": "() => {\n             console.trace('11111111111')\n            appRue.mount(App, el)\n             console.trace('222222222222')\n          }"
  },
  "fn-27": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/runtime-entry-wrap.js",
    "line": 141,
    "code": "wrappedRuntimeEntry = function wrappedRuntimeEntry(...args) {\n        runtime[RUE_PENDING_ENTRY_ERROR_KEY] = undefined;\n        runtime[RUE_ACTIVE_ENTRY_DEPTH_KEY] = (runtime[RUE_ACTIVE_ENTRY_DEPTH_KEY] ?? 0) + 1;\n        let rethrowingPendingEntryError = false;\n        try {\n            const result = Reflect.apply(original, this, args);\n            const pending = runtime[RUE_PENDING_ENTRY_ERROR_KEY];\n            runtime[RUE_PENDING_ENTRY_ERROR_KEY] = undefined;\n            if (pending !== undefined && pending !== null) {\n                dispatchCaughtError(runtime, pending);\n                rethrowingPendingEntryError = true;\n                throw pending;\n            }\n            return result;\n        }\n        catch (error) {\n            runtime[RUE_PENDING_ENTRY_ERROR_KEY] = undefined;\n            if (!rethrowingPendingEntryError && shouldDispatchCaughtError(runtime)) {\n                dispatchCaughtError(runtime, error);\n            }\n            throw error;\n        }\n        finally {\n            runtime[RUE_ACTIVE_ENTRY_DEPTH_KEY] = Math.max(0, (runtime[RUE_ACTIVE_ENTRY_DEPTH_KEY] ?? 1) - 1);\n        }\n    }"
  },
  "fn-28": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js",
    "line": 131,
    "code": "root => {\n                const value = typeof root === 'function'\n                    ? storeMountInput(state, createElementMountInput(state, (props) => {\n                        try {\n                            return Reflect.apply(root, undefined, [props]);\n                        }\n                        catch (error) {\n                            appController.recordMountError(error);\n                            throw error;\n                        }\n                    }, {}, undefined, {\n                        strictComponentReturns: true,\n                    }))\n                    : root;\n                const input = recordInput('render', value, [container]);\n                runRenderEntry(() => renderContainer(state, mountController, input, container));\n                lifecycle.callGlobal('mounted');\n            }"
  },
  "fn-29": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/app.js",
    "line": 57,
    "code": "mount(app, container, render) {\n        /*\n         * [05 应用控制器]\n         * 调用链：runtime.mount() -> appController.mount() -> plugins.flush() -> render(app)。\n         * 观察：existing、transaction、transaction.status。\n         */\n        // oxlint-disable-next-line no-debugger -- Rue 源码学习用自动断点。\n        if (globalThis.__RUE_RENDER_DEBUG__?.take('05.app-controller')) debugger;\n        assertActive();\n        state.lastContainer = container;\n        const existing = getAppMount(state, container);\n        if (existing?.status === 'failed') {\n            throw existing.error;\n        }\n        if (existing && existing.owner !== state) {\n            throw new Error('Rue container is already mounted by another app.');\n        }\n        const transaction = existing ?? {\n            container,\n            error: undefined,\n            owner: state,\n            status: 'mounting',\n        };\n        transaction.error = undefined;\n        transaction.status = 'mounting';\n        trackAppMount(state, transaction);\n        const previousActiveMount = state.activeAppMount;\n        state.activeAppMount = transaction;\n        try {\n            plugins.flush();\n            const result = render(app);\n            if (appMountFailed(transaction)) {\n                throw transaction.error;\n            }\n            transaction.status = 'mounted';\n            return result;\n        }\n        catch (error) {\n            if (appMountFailed(transaction)) {\n                throw transaction.error;\n            }\n            releaseAppMount(state, transaction);\n            throw error;\n        }\n        finally {\n            state.activeAppMount = previousActiveMount;\n            state.lastContainer = container;\n        }\n    }"
  },
  "fn-30": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/plugins.js",
    "line": 43,
    "code": "flush() {\n            const installing = pending;\n            pending = [];\n            for (const { plugin, options } of installing) {\n                const install = readInstall(plugin);\n                if (!install)\n                    continue;\n                try {\n                    Reflect.apply(install, plugin, [undefined, options]);\n                }\n                catch {\n                    // Plugin installation is a best-effort deferred task.\n                }\n            }\n        }"
  },
  "fn-31": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount-input.js",
    "line": 117,
    "code": "createElementMountInput = (state, typeTag, propsValue, childrenValue, options = {}) => {\n    const props = copyProps(propsValue);\n    if (Array.isArray(childrenValue)) {\n        props.children = childrenValue;\n    }\n    else if (childrenValue != null) {\n        props.children = [childrenValue];\n    }\n    const children = normalizeChildren(state, effectiveChildren(props, childrenValue));\n    let type;\n    if (typeof typeTag === 'function') {\n        type = {\n            kind: 'component',\n            component: typeTag,\n            updateMode: 'rerender',\n        };\n    }\n    else if (typeTag === 'fragment') {\n        type = { kind: 'fragment' };\n    }\n    else if (typeTag === 'vapor') {\n        const setup = typeof props.setup === 'function' ? props.setup : undefined;\n        type = setup ? { kind: 'vapor', setup } : { kind: 'vapor' };\n    }\n    else {\n        type = { kind: 'element', tag: typeof typeTag === 'string' ? typeTag : 'div' };\n    }\n    return createInput({\n        type,\n        props,\n        children,\n        strictComponentReturns: options.strictComponentReturns === true,\n    });\n}"
  },
  "fn-32": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount-input.js",
    "line": 76,
    "code": "createInput = ({ type, props = {}, children = [], source, strictComponentReturns = false, mountEffectScopeId, }) => {\n    const normalizedProps = copyProps(props);\n    const metadata = extractMetadata(source, normalizedProps);\n    return {\n        type,\n        props: normalizedProps,\n        children,\n        key: metadata.key,\n        strictComponentReturns,\n        mountCleanupBucket: metadata.mountCleanupBucket,\n        mountEffectScopeId: mountEffectScopeId ?? metadata.mountEffectScopeId,\n        elHint: undefined,\n        ...(source ? { portable: copyPortableKeys(source) } : {}),\n    };\n}"
  },
  "fn-33": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount-input.js",
    "line": 158,
    "code": "storeMountInput = (state, input) => {\n    const id = state.nextMountInputId++;\n    state.mountInputs.set(id, input);\n    const handle = { [RUE_MOUNT_ID_KEY]: id };\n    if (input.key !== undefined) {\n        handle.key = input.key;\n    }\n    return handle;\n}"
  },
  "fn-34": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js",
    "line": 88,
    "code": "recordInput = (entry, value, args) => {\n        assertRuntimeActive(state);\n        const input = normalizeMountInput(state, value, entry);\n        state.pendingInputs.push({ entry, input, args });\n        kernel.recordRuntimeInput(entry, input, args);\n        return input;\n    }"
  },
  "fn-35": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js",
    "line": 146,
    "code": "() => renderContainer(state, mountController, input, container)"
  },
  "fn-36": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js",
    "line": 72,
    "code": "runRenderEntry = (render) => {\n        state.renderDepth += 1;\n        try {\n            return render();\n        }\n        finally {\n            state.renderDepth -= 1;\n            if (state.renderDepth === 0)\n                flushPendingComponentLifecycle(state);\n        }\n    }"
  },
  "fn-37": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js",
    "line": 31,
    "code": "renderContainer = (state, controller, input, container) => {\n    /*\n     * [06 渲染根容器]\n     * 调用链：runtime.mount() -> renderContainer() -> controller.mountInput()。\n     * 观察：input.type、previous、container、mounted。\n     */\n    // oxlint-disable-next-line no-debugger -- Rue 源码学习用自动断点。\n    if (globalThis.__RUE_RENDER_DEBUG__?.take('06.render-container')) debugger;\n    const host = createHost(state.adapter);\n    if (!host)\n        return;\n    if (!input) {\n        clearContainer(host, state, container);\n        return;\n    }\n    const previous = state.containerMounts.get(container);\n    if (previous) {\n        const mounted = controller.patchMountedInput(state, host, previous, input, container);\n        if (mounted)\n            commitMountedContainer(host, container, mounted);\n        if (mounted)\n            state.containerMounts.set(container, mounted);\n        return;\n    }\n    const mounted = controller.mountInput(state, host, input, container);\n    if (!mounted)\n        return;\n    commitMountedContainer(host, container, mounted);\n    state.containerMounts.set(container, mounted);\n}"
  },
  "fn-38": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/host.js",
    "line": 44,
    "code": "createHost = (adapter) => {\n    if (!hasDOMHostAdapter(adapter)) {\n        return undefined;\n    }\n    const bound = Object.fromEntries(requiredHostMethods.map(name => [name, bindRequired(adapter, name)]));\n    return {\n        ...bound,\n        getParentNode: readParentNode,\n    };\n}"
  },
  "fn-39": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/host.js",
    "line": 31,
    "code": "bindRequired = (adapter, name) => {\n    const method = Reflect.get(adapter, name);\n    if (typeof method !== 'function') {\n        throw new Error(`Rue runtime: dom-adapter.${name} not found`);\n    }\n    return ((...args) => Reflect.apply(method, adapter, args));\n}"
  }
});
