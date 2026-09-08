Object.assign(rueSourceGuide.data.definitions, {
  "fn-180": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/errors.js",
    "line": 27,
    "code": "notifyGlobal = (error, instance) => {\n        lastError = error;\n        for (const handler of globalHandlers) {\n            try {\n                handler(error, instance);\n            }\n            catch { }\n        }\n    }"
  },
  "fn-181": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/runtime-entry-wrap.js",
    "line": 52,
    "code": "forwardError = (error, instance) => {\n        if (handlingExplicitError) {\n            return;\n        }\n        if ((runtime[RUE_ACTIVE_ENTRY_DEPTH_KEY] ?? 0) > 0) {\n            if (runtime[RUE_PENDING_ENTRY_ERROR_KEY] !== undefined) {\n                return;\n            }\n            runtime[RUE_PENDING_ENTRY_ERROR_KEY] = error;\n            return;\n        }\n        handlers.forEach(handler => {\n            try {\n                handler(error, instance);\n            }\n            catch { }\n        });\n    }"
  },
  "fn-182": {
    "file": "node_modules/@rue-js/runtime/src/hooks/useApp.ts",
    "line": 75,
    "code": "() => {\n        appRue.use(plugin, ...options)\n      }"
  },
  "fn-183": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-runtime/plugins.js",
    "line": 58,
    "code": "use(plugin, options) {\n            assertActive();\n            pending.push({ plugin, options: Array.isArray(options) ? Array.from(options) : [] });\n            return undefined;\n        }"
  },
  "fn-184": {
    "file": "node_modules/@rue-js/runtime/src/hooks/useApp.ts",
    "line": 81,
    "code": "component(name: string, component: ComponentInstance) {\n      registerRuntimeComponent(appRue, name, component)\n      return this\n    }"
  },
  "fn-185": {
    "file": "node_modules/@rue-js/runtime/src/component-registry.ts",
    "line": 21,
    "code": "registerRuntimeComponent = (\n  runtime: unknown,\n  name: string,\n  component: ComponentInstance<any>,\n) => {\n  if (!name) {\n    return\n  }\n\n  globalComponentRegistry.set(name, component)\n\n  if (!canTrackRuntime(runtime)) {\n    return\n  }\n\n  const registry =\n    runtimeComponentRegistry.get(runtime) ?? new Map<string, ComponentInstance<any>>()\n  registry.set(name, component)\n  runtimeComponentRegistry.set(runtime, registry)\n}"
  },
  "fn-186": {
    "file": "node_modules/@rue-js/runtime/src/rue.ts",
    "line": 1014,
    "code": "resolveCreateElementType = <P = {}>(type: string | ComponentInstance<P>) =>\n  type === 'component' ? (DynamicComponent as ComponentInstance<P>) : type"
  },
  "fn-187": {
    "file": "node_modules/@rue-js/runtime/src/components/Component.ts",
    "line": 67,
    "code": "Component: FC<DynamicComponentProps> = props => {\n  const resolvedType = resolveDynamicComponentType(props.is)\n\n  if (!resolvedType || resolvedType === BUILTIN_COMPONENT_TAG || resolvedType === Component) {\n    return null as any\n  }\n\n  const { forwardedProps, forwardedChildren } = splitForwardedProps(props)\n\n  return h(\n    resolvedType as any,\n    withParentContextProps(resolvedType as any, forwardedProps) as ComponentProps,\n    ...(forwardedChildren as any[]),\n  )\n}"
  },
  "fn-188": {
    "file": "node_modules/@rue-js/runtime/src/components/Component.ts",
    "line": 21,
    "code": "resolveDynamicComponentType = (value: DynamicComponentProps['is']) => {\n  if (value == null) {\n    return null\n  }\n\n  if (typeof value !== 'string') {\n    return value\n  }\n\n  return resolveCurrentRuntimeComponent(value) ?? value\n}"
  },
  "fn-189": {
    "file": "node_modules/@rue-js/runtime/src/component-registry.ts",
    "line": 59,
    "code": "resolveCurrentRuntimeComponent = (name: string) =>\n  resolveRuntimeComponent(getCurrentRuntime(), name)"
  },
  "fn-190": {
    "file": "node_modules/@rue-js/runtime/src/components/Teleport.ts",
    "line": 78,
    "code": "Teleport: FC<TeleportProps> = props => {\n  const ctx = useSetup(() => {\n    const ownedMountContinuation = captureOwnedMountContinuation()\n    const container = createElement('span') as HTMLElement\n    setStyle(container, { display: 'contents' })\n\n    return {\n      container,\n      targetStart: createComment('rue-teleport-start'),\n      targetEnd: createComment('rue-teleport-end'),\n      propsSig: signal(snapshotTeleportProps(props), {}, true),\n      target: null as HTMLElement | null,\n      started: false,\n      deferVersion: 0,\n      effect: null as { dispose: () => void } | null,\n      ownedMountContinuation,\n    }\n  })\n  const runOwned = (run: () => void) =>\n    ctx.ownedMountContinuation ? ctx.ownedMountContinuation.run(run) : (run(), true)\n  registerAsyncExternalPropsUpdater(props, next => {\n    ctx.propsSig.set(snapshotTeleportProps((next ?? {}) as TeleportProps))\n  })\n\n  const clearLocalRange = () => {\n    render([], ctx.container)\n  }\n\n  const clearTargetRange = (target: HTMLElement | null) => {\n    if (!target) return\n    runOwned(() => renderBetween([], target, ctx.targetStart, ctx.targetEnd))\n  }\n\n  const detachTargetAnchors = () => {\n    const parent = getParentNode(ctx.targetStart) as HTMLElement | null\n    if (!parent) return\n    if (contains(parent, ctx.targetStart)) removeChild(parent, ctx.targetStart)\n    if (contains(parent, ctx.targetEnd)) removeChild(parent, ctx.targetEnd)\n  }\n\n  const hasContentBetween = (): boolean => {\n    let node: DomNodeLike | null = (ctx.targetStart as any).nextSibling || null\n    while (node && node !== ctx.targetEnd) {\n      if ((node as any).nodeType !== 8) return true\n      node = (node as any).nextSibling || null\n    }\n    return false\n  }\n\n  const ensureTargetAnchors = (target: HTMLElement) => {\n    if (contains(target, ctx.targetStart)) {\n      return\n    }\n\n    const block = createDocumentFragment()\n    let node: DomNodeLike | null = (ctx.targetStart as any).nextSibling || null\n    while (node && node !== ctx.targetEnd) {\n      const next = (node as any).nextSibling as DomNodeLike | null\n      appendChild(block, node)\n      node = next\n    }\n\n    detachTargetAnchors()\n    appendChild(target, ctx.targetStart)\n    appendChild(target, ctx.targetEnd)\n    insertBefore(target, block, ctx.targetEnd)\n  }\n\n  const renderTargetChildren = (target: HTMLElement | null, children: unknown) => {\n    if (!target) return\n\n    ensureTargetAnchors(target)\n    runOwned(() =>\n      renderBetween(toRenderable(children) as any, target, ctx.targetStart, ctx.targetEnd),\n    )\n\n    if (!hasContentBetween()) {\n      const fallback = createElement('span') as DomElementLike\n      settextContent(fallback, '[Teleport] fallback: empty region after renderBetween')\n      setStyle(fallback, { display: 'contents' })\n      insertBefore(target, fallback, ctx.targetEnd)\n    }\n  }\n\n  const cancelDeferredRender = () => {\n    ctx.deferVersion += 1\n  }\n\n  const applyTeleportState = (curProps: TeleportProps) => {\n    const disabled = !!curProps.disabled\n    const nextTarget = disabled ? null : resolveTarget(curProps.to)\n\n    if (disabled) {\n      if (ctx.target) {\n        clearTargetRange(ctx.target)\n        detachTargetAnchors()\n        ctx.target = null\n      }\n      render(toRenderable(curProps.children) as any, ctx.container)\n      return\n    }\n\n    clearLocalRange()\n\n    if (nextTarget !== ctx.target) {\n      if (ctx.target) {\n        clearTargetRange(ctx.target)\n        detachTargetAnchors()\n      }\n      ctx.target = nextTarget\n    }\n\n    renderTargetChildren(ctx.target, curProps.children)\n  }\n\n  const scheduleDeferredRender = (curProps: TeleportProps) => {\n    clearLocalRange()\n    const version = ++ctx.deferVersion\n\n    queueMicrotask(() => {\n      if (!ctx.started || version !== ctx.deferVersion) return\n      applyTeleportState(curProps)\n    })\n  }\n\n  onMounted(() => {\n    if (ctx.started) return\n    ctx.started = true\n\n    ctx.effect = watchEffect(() => {\n      const curProps = ctx.propsSig.get()\n\n      if (curProps.defer && !curProps.disabled) {\n        scheduleDeferredRender(curProps)\n        return\n      }\n\n      cancelDeferredRender()\n      applyTeleportState(curProps)\n    })\n  })\n\n  onUnmounted(() => {\n    cancelDeferredRender()\n    if (ctx.effect) {\n      ctx.effect.dispose()\n      ctx.effect = null\n    }\n    ctx.started = false\n\n    clearLocalRange()\n    if (ctx.target) {\n      clearTargetRange(ctx.target)\n      detachTargetAnchors()\n      ctx.target = null\n    }\n  })\n\n  return vapor(() => {\n    ctx.propsSig.set(snapshotTeleportProps(props))\n    return ctx.container\n  })\n}"
  },
  "fn-191": {
    "file": "node_modules/@rue-js/runtime/src/components/Teleport.ts",
    "line": 207,
    "code": "() => {\n      const curProps = ctx.propsSig.get()\n\n      if (curProps.defer && !curProps.disabled) {\n        scheduleDeferredRender(curProps)\n        return\n      }\n\n      cancelDeferredRender()\n      applyTeleportState(curProps)\n    }"
  },
  "fn-192": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/js-reactive/hooks/index.js",
    "line": 70,
    "code": "useSetup = (factory) => {\n        const instance = context.getCurrentInstance();\n        if (instance == null) {\n            return factory();\n        }\n        // 空依赖数组：只会在首次执行时调用 factory 并缓存结果\n        const slot = context.withHookSlot(() => ({\n            type: setupSlot,\n            initialized: false,\n            value: undefined,\n        }));\n        if (!slot.initialized) {\n            // Setup is an initialization boundary. Reads performed while creating its cached value\n            // must not subscribe an enclosing component render effect; effects created by the factory\n            // establish their own tracking contexts and continue to collect dependencies normally.\n            const value = runInPersistentHookScope(instance, () => runUntracked(factory));\n            slot.value = value;\n            slot.initialized = true;\n        }\n        return slot.value;\n    }"
  },
  "fn-193": {
    "file": "node_modules/@rue-js/runtime/src/components/Teleport.ts",
    "line": 203,
    "code": "() => {\n    if (ctx.started) return\n    ctx.started = true\n\n    ctx.effect = watchEffect(() => {\n      const curProps = ctx.propsSig.get()\n\n      if (curProps.defer && !curProps.disabled) {\n        scheduleDeferredRender(curProps)\n        return\n      }\n\n      cancelDeferredRender()\n      applyTeleportState(curProps)\n    })\n  }"
  },
  "fn-194": {
    "file": "node_modules/@rue-js/runtime/src/components/Teleport.ts",
    "line": 52,
    "code": "resolveTarget = (to?: string | HTMLElement): HTMLElement | null => {\n  if (!to) return null\n  if (typeof to === 'string') {\n    if (to === 'body') return querySelector('body') as HTMLElement\n    return querySelector(to) as HTMLElement | null\n  }\n  return to as HTMLElement\n}"
  },
  "fn-195": {
    "file": "node_modules/@rue-js/runtime/src/components/Teleport.ts",
    "line": 166,
    "code": "applyTeleportState = (curProps: TeleportProps) => {\n    const disabled = !!curProps.disabled\n    const nextTarget = disabled ? null : resolveTarget(curProps.to)\n\n    if (disabled) {\n      if (ctx.target) {\n        clearTargetRange(ctx.target)\n        detachTargetAnchors()\n        ctx.target = null\n      }\n      render(toRenderable(curProps.children) as any, ctx.container)\n      return\n    }\n\n    clearLocalRange()\n\n    if (nextTarget !== ctx.target) {\n      if (ctx.target) {\n        clearTargetRange(ctx.target)\n        detachTargetAnchors()\n      }\n      ctx.target = nextTarget\n    }\n\n    renderTargetChildren(ctx.target, curProps.children)\n  }"
  },
  "fn-196": {
    "file": "node_modules/@rue-js/runtime/src/components/Teleport.ts",
    "line": 127,
    "code": "ensureTargetAnchors = (target: HTMLElement) => {\n    if (contains(target, ctx.targetStart)) {\n      return\n    }\n\n    const block = createDocumentFragment()\n    let node: DomNodeLike | null = (ctx.targetStart as any).nextSibling || null\n    while (node && node !== ctx.targetEnd) {\n      const next = (node as any).nextSibling as DomNodeLike | null\n      appendChild(block, node)\n      node = next\n    }\n\n    detachTargetAnchors()\n    appendChild(target, ctx.targetStart)\n    appendChild(target, ctx.targetEnd)\n    insertBefore(target, block, ctx.targetEnd)\n  }"
  },
  "fn-197": {
    "file": "node_modules/@rue-js/runtime/src/components/Teleport.ts",
    "line": 150,
    "code": "() =>\n      renderBetween(toRenderable(children) as any, target, ctx.targetStart, ctx.targetEnd)"
  },
  "fn-198": {
    "file": "node_modules/@rue-js/runtime/src/components/Teleport.ts",
    "line": 193,
    "code": "scheduleDeferredRender = (curProps: TeleportProps) => {\n    clearLocalRange()\n    const version = ++ctx.deferVersion\n\n    queueMicrotask(() => {\n      if (!ctx.started || version !== ctx.deferVersion) return\n      applyTeleportState(curProps)\n    })\n  }"
  },
  "fn-199": {
    "file": "node_modules/@rue-js/runtime/src/components/Teleport.ts",
    "line": 197,
    "code": "() => {\n      if (!ctx.started || version !== ctx.deferVersion) return\n      applyTeleportState(curProps)\n    }"
  }
});
