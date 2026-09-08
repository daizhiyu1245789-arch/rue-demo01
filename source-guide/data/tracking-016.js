rueSourceGuide.data["tracking"].rows.push(...[
  {
    "title": "get() 上报当前 dependency",
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/signal.js",
    "line": 127,
    "code": "            this.runtime.trackDependency(this.node);\n        return this.#value;\n    }\n    set value(next) {\n        this.set(next);\n    }\n    get() {",
    "kind": "衔接代码",
    "note": "this.runtime.trackDependency(this.node)",
    "section": "effect 创建与首次依赖收集",
    "originalStep": 6,
    "sectionStart": false,
    "definitionId": "fn-85"
  },
  {
    "title": "ReactiveRuntime.trackDependency()",
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 180,
    "code": "    trackDependency(node) {\n        const effectId = this.state.currentEffectId;\n        if (effectId === undefined || !this.#effects.has(effectId))\n            return false;\n        const owner = this.state.currentRenderDebugOwner;\n        const record = this.#effects.get(effectId);\n        if (record !== undefined && owner !== undefined)\n            record.owner = owner;",
    "kind": "调用",
    "note": "runtime 确认存在 active effect 后，将 dependency node 原样传给 graph.trackDependency() 建边",
    "watch": "currentEffectId、record.owner、currentRenderDebugOwner",
    "section": "effect 创建与首次依赖收集",
    "originalStep": 7,
    "sectionStart": false,
    "definitionId": "fn-86"
  },
  {
    "title": "runtime 转交 graph",
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 188,
    "code": "        return this.graph.trackDependency(node);\n    }\n    triggerDependency(node, event) {\n        this.#scheduleEffects(this.graph.triggerDependency(node), event);\n    }\n    triggerDependencies(nodes, event) {\n        const effectIds = new Set();",
    "kind": "衔接代码",
    "note": "return this.graph.trackDependency(node)",
    "section": "effect 创建与首次依赖收集",
    "originalStep": 7,
    "sectionStart": false,
    "definitionId": "fn-86"
  },
  {
    "title": "ReactiveGraph.trackDependency()",
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js",
    "line": 132,
    "code": "    trackDependency(dependency) {\n        const subscriber = this.#activeSubscriber;\n        if (subscriber === undefined ||\n            sameId(dependency, subscriber) ||\n            !this.contains(dependency) ||\n            !this.contains(subscriber)) {\n            return false;\n        }",
    "kind": "返回",
    "note": "callback 的所有读取结束并返回后，#runEffectBody() 的 finally 调用 graph.endTracking() 收尾本轮依赖集合",
    "watch": "dependency、subscriber、observedVersion、linkCount",
    "section": "effect 创建与首次依赖收集",
    "originalStep": 8,
    "sectionStart": false,
    "definitionId": "fn-87"
  },
  {
    "title": "返回 effect 的 finally 清理过期依赖",
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/effect.js",
    "line": 262,
    "code": "            this.graph.endTracking(record.node, tracking);\n        }\n    }\n    #scheduleEffects(effectIds, event) {\n        for (const id of effectIds) {\n            const record = this.#effects.get(id);\n            if (record === undefined)",
    "kind": "衔接代码",
    "note": "this.graph.endTracking(record.node, tracking)",
    "section": "effect 创建与首次依赖收集",
    "originalStep": 8,
    "sectionStart": false,
    "definitionId": "fn-79"
  },
  {
    "title": "ReactiveGraph.endTracking()",
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive-kernel/graph.js",
    "line": 121,
    "code": "    endTracking(subscriber, state) {\n        const node = this.#node(subscriber);\n        if (node !== undefined) {\n            this.#purgeStaleDependencies(subscriber);\n            node.flags = removeFlags(node.flags, RECURSED_CHECK | RECURSED | PENDING);\n            if (node.kind.type === 'effect')\n                node.flags |= WATCHING;\n        }",
    "kind": "完成",
    "note": "旧分支遗留的订阅边被裁掉，外层 tracking 状态恢复，一次完整依赖收集结束",
    "watch": "dependenciesTail、stale links、previous subscriber",
    "section": "effect 创建与首次依赖收集",
    "originalStep": 9,
    "sectionStart": false,
    "definitionId": "fn-88"
  }
]);
