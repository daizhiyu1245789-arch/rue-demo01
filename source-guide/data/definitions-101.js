Object.assign(rueSourceGuide.data.definitions, {
  "fn-100": {
    "file": "app/pages/RueSourceDebug.tsx",
    "line": 33,
    "code": "() => {\n      count.value += 1\n      count.value += 1\n      count.value += 1\n    }"
  },
  "fn-101": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js",
    "line": 130,
    "code": "set value(next) {\n        this.set(next);\n    }"
  },
  "fn-102": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js",
    "line": 142,
    "code": "set(next) {\n        this.write(next);\n    }"
  },
  "fn-103": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js",
    "line": 254,
    "code": "write(next, changedPath) {\n        const previous = this.#value;\n        this.#value = next;\n        let equal = false;\n        try {\n            equal = this.#equals(previous, next);\n        }\n        catch {\n            // The Rust oracle treats a failing custom comparator as \"not equal\" so\n            // the write remains observable instead of stranding the new value.\n        }\n        if (!this.#disposed && !equal) {\n            this.runtime.triggerDependencies(this.#affectedNodes(changedPath), {\n                key: changedPath?.[changedPath.length - 1] ?? 'value',\n                newValue: changedPath === undefined ? next : getAtPath(next, changedPath),\n                oldValue: changedPath === undefined ? previous : getAtPath(previous, changedPath),\n                path: changedPath ?? [],\n                target: this,\n                type: 'set',\n            });\n        }\n    }"
  },
  "fn-104": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js",
    "line": 184,
    "code": "triggerPath(path) {\n        if (this.#disposed)\n            return;\n        const normalized = normalizeSignalPath(path);\n        const value = getAtPath(this.#value, normalized);\n        this.runtime.triggerDependencies(this.#affectedNodes(normalized), {\n            key: normalized[normalized.length - 1] ?? 'value',\n            newValue: value,\n            oldValue: value,\n            path: normalized,\n            target: this,\n            type: 'set',\n        });\n    }"
  },
  "fn-105": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 193,
    "code": "triggerDependencies(nodes, event) {\n        const effectIds = new Set();\n        for (const node of nodes) {\n            for (const effectId of this.graph.triggerDependency(node))\n                effectIds.add(effectId);\n        }\n        this.#scheduleEffects([...effectIds], event);\n    }"
  },
  "fn-106": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js",
    "line": 197,
    "code": "triggerDependency(id) {\n        const node = this.#node(id);\n        if (node === undefined)\n            return [];\n        node.valueVersion = nextCycle(node.valueVersion);\n        return this.propagate(id);\n    }"
  },
  "fn-107": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js",
    "line": 159,
    "code": "propagate(dependency) {\n        if (!this.contains(dependency))\n            return [];\n        const queue = [dependency];\n        const effects = [];\n        let queueIndex = 0;\n        while (queueIndex < queue.length) {\n            const currentDependency = queue[queueIndex];\n            queueIndex += 1;\n            if (currentDependency === undefined)\n                break;\n            let linkId = this.#node(currentDependency)?.subscribersHead;\n            while (linkId !== undefined) {\n                const edge = this.#linkById(linkId);\n                if (edge === undefined)\n                    break;\n                linkId = edge.nextSubscriber;\n                const subscriber = this.#node(edge.subscriber);\n                if (subscriber === undefined || hasFlags(subscriber.flags, DIRTY | PENDING))\n                    continue;\n                subscriber.flags |= PENDING;\n                switch (subscriber.kind.type) {\n                    case 'dependency':\n                        break;\n                    case 'computed':\n                        queue.push(edge.subscriber);\n                        break;\n                    case 'effect':\n                        if (hasFlags(subscriber.flags, WATCHING)) {\n                            subscriber.flags = removeFlags(subscriber.flags, WATCHING);\n                            effects.push(subscriber.kind.effectId);\n                        }\n                        break;\n                }\n            }\n        }\n        return effects;\n    }"
  },
  "fn-108": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 265,
    "code": "#scheduleEffects(effectIds, event) {\n        for (const id of effectIds) {\n            const record = this.#effects.get(id);\n            if (record === undefined)\n                continue;\n            if (record.computed !== undefined) {\n                this.invalidateComputed(record.node, event);\n                continue;\n            }\n            if (event !== undefined) {\n                this.#onRenderTriggered?.(id, {\n                    ...event,\n                    effect: id,\n                }, record.owner);\n            }\n            if (record.scheduler !== undefined) {\n                this.scheduler.cancel(id);\n                record.scheduler(record.runner);\n                // A custom scheduler is a notification boundary and may omit its runner.\n                // Re-arm the graph so a later source change can notify it again.\n                this.graph.markNodeClean(record.node);\n            }\n            else {\n                this.scheduler.schedule(id, record.runner, () => this.#effects.has(id));\n            }\n        }\n    }"
  },
  "fn-109": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js",
    "line": 30,
    "code": "schedule(id, run, isActive = alwaysActive) {\n        if (!isActive())\n            return false;\n        if (this.state.batchDepth > 0)\n            return this.#enqueue({ id, isActive, run });\n        if (this.state.schedulingMode === 'sync') {\n            if (this.state.isScheduledJobActive(id) ||\n                this.state.isEffectActive(id) ||\n                this.state.isErrorCaptureEffect(id)) {\n                const inserted = this.#enqueue({ id, isActive, run });\n                this.#scheduleMicrotaskDrain();\n                return inserted;\n            }\n            this.#runJob({ id, isActive, run });\n            return true;\n        }\n        const inserted = this.#enqueue({ id, isActive, run });\n        this.#scheduleDefaultDrain();\n        return inserted;\n    }"
  },
  "fn-110": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js",
    "line": 124,
    "code": "#drain() {\n        this.#frameGeneration += 1;\n        this.#drainScheduled = false;\n        if (this.#pending.size === 0) {\n            if (this.#flushing || this.#flushWaiters.length > 0)\n                this.#finishFlush();\n            return;\n        }\n        this.#flushing = true;\n        const jobs = [...this.#pending.values()];\n        this.#pending.clear();\n        let firstError;\n        for (const job of jobs) {\n            try {\n                this.#runJob(job);\n            }\n            catch (error) {\n                firstError ??= error;\n            }\n        }\n        if (this.#pending.size > 0)\n            this.#scheduleDefaultDrain();\n        else\n            this.#finishFlush();\n        if (firstError !== undefined)\n            throw firstError;\n    }"
  },
  "fn-111": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 212,
    "code": "runner = () => this.runEffect(id)"
  },
  "fn-112": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js",
    "line": 75,
    "code": "#enqueue(job) {\n        if (this.#pending.has(job.id))\n            return false;\n        this.#pending.set(job.id, job);\n        return true;\n    }"
  },
  "fn-113": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js",
    "line": 89,
    "code": "#scheduleDefaultDrain() {\n        if (this.#drainScheduled)\n            return;\n        if (this.state.schedulingMode === 'frame')\n            this.#scheduleFrameDrain();\n        else\n            this.#scheduleMicrotaskDrain();\n    }"
  },
  "fn-114": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js",
    "line": 97,
    "code": "#scheduleMicrotaskDrain() {\n        if (this.#drainScheduled)\n            return;\n        this.#drainScheduled = true;\n        Promise.resolve().then(() => this.#drain());\n    }"
  },
  "fn-115": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js",
    "line": 103,
    "code": "#scheduleFrameDrain() {\n        const host = typeof window === 'undefined' ? globalThis : window;\n        const requestFrame = Reflect.get(host, 'requestAnimationFrame');\n        if (typeof requestFrame !== 'function') {\n            this.#scheduleMicrotaskDrain();\n            return;\n        }\n        this.#drainScheduled = true;\n        const generation = ++this.#frameGeneration;\n        let didDrain = false;\n        const drainOnce = () => {\n            if (didDrain || generation !== this.#frameGeneration)\n                return;\n            didDrain = true;\n            this.#drain();\n        };\n        Reflect.apply(requestFrame, host, [drainOnce]);\n        const setTimeout = Reflect.get(host, 'setTimeout');\n        if (typeof setTimeout === 'function')\n            Reflect.apply(setTimeout, host, [drainOnce, 34]);\n    }"
  },
  "fn-116": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/scheduler.js",
    "line": 151,
    "code": "#runJob(job) {\n        if (!job.isActive())\n            return;\n        this.state.runScheduledJob(job.id, job.run);\n    }"
  },
  "fn-117": {
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/runtime-state.js",
    "line": 105,
    "code": "runScheduledJob(jobId, callback) {\n        const stackIndex = this.#activeJobIds.length;\n        this.#activeJobIds.push(jobId);\n        try {\n            return callback();\n        }\n        finally {\n            this.#activeJobIds.splice(stackIndex, 1);\n        }\n    }"
  },
  "fn-118": {
    "file": "node_modules/@rue-js/runtime/src/dom.ts",
    "line": 1784,
    "code": "settextContent = (el: DomNodeLike, val: any) => {\n  /*\n   * [12 写入文本]\n   * 调用链：setup()/响应式更新 -> _$settextContent() -> settextContent() -> el.textContent。\n   * 观察：el、val、el.textContent。\n   */\n  // oxlint-disable-next-line no-debugger -- Rue 源码学习用自动断点。\n  if ((globalThis as any).__RUE_RENDER_DEBUG__?.take('12.dom-set-text')) debugger\n  if (activeDOMHostOperationContext?.freshBrowser) {\n    ;(el as any).textContent = val == null || typeof val === 'boolean' ? '' : String(val)\n    return\n  }\n  getDOMAdapterForOperation().settextContent(el, val)\n}"
  },
  "fn-119": {
    "file": "node_modules/@rue-js/runtime/src/dom.ts",
    "line": 1747,
    "code": "createElement = (tag: string, parent?: DomElementLike | null) => {\n  /*\n   * [10 创建 HTML 元素]\n   * 调用链：setup() -> _$createElement() -> createElement() -> document.createElement()。\n   * 观察：tag、resolvedParent、返回的 Element。\n   */\n  // oxlint-disable-next-line no-debugger -- Rue 源码学习用自动断点。\n  if ((globalThis as any).__RUE_RENDER_DEBUG__?.take('10.dom-create-element')) debugger\n  const resolvedParent = resolveCreateElementParent(parent)\n  if (!activeDOMHostOperationContext?.freshBrowser) {\n    const element = getDOMAdapterForOperation().createElement(tag, resolvedParent)\n    if (activeDOMHostOperationContext && element != null && typeof element === 'object') {\n      domHostOperationContexts.set(element as object, activeDOMHostOperationContext)\n    }\n    return element\n  }\n  const element =\n    SVG_TAGS.has(tag) || (SVG_CONTEXTUAL_TAGS.has(tag) && isSVGNamespaceParent(resolvedParent))\n      ? document.createElementNS(SVG_NS, tag)\n      : document.createElement(tag)\n  freshDomParents.add(element)\n  domHostOperationContexts.set(element, activeDOMHostOperationContext)\n  return element as any\n}"
  }
});
