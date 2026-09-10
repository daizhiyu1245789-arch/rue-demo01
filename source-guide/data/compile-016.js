rueSourceGuide.data["compile"].rows.push(...[
  {
    "title": "worker.once(\"message\", message => …) → resolve(code)",
    "file": "node_modules/@rue-js/vite-plugin-rue/index.mjs",
    "line": 3289,
    "code": "    worker.once('message', message => {\n      settle(() => {\n        if (message?.error) {\n          reject(deserializeWorkerError(message.error))\n          return\n        }\n\n        resolve(String(message?.code ?? ''))\n      })\n    })\n",
    "note": "主线程 message 事件执行回调。settle 防止重复完成，清 timer；resolve 解除等待。",
    "kind": "异步继续",
    "section": "Vite 主线程：接收结果",
    "sectionStart": true,
    "originalStep": 4,
    "definitionId": "fn-7"
  },
  {
    "title": "await scheduleTransform 完成 → normalizedOut",
    "file": "node_modules/@rue-js/vite-plugin-rue/index.mjs",
    "line": 3123,
    "code": "    const normalizedOut = preserveRscDirectivePrologue(code, out)\n    if (!includeHeader) {\n      return normalizedOut\n    }\n    const headers = [RUE_TRANSFORM_HEADER]\n    if (hasReactivePropsDestructureRewrite(normalizedOut)) {\n      headers.push(RUE_REACTIVE_PROPS_DESTRUCTURE_HEADER)\n    }\n    return `${headers.join('\\n')}\\n${normalizedOut}`\n  } catch (error) {\n    throw createStageError({\n      id,",
    "note": "恢复等待中的 transformWithSwcPlugin；加转换头，返回 code/islands/serverIslands。",
    "kind": "返回",
    "section": "Vite 主线程：接收结果",
    "sectionStart": false,
    "originalStep": 4,
    "definitionId": "fn-8"
  },
  {
    "title": "回到 transform()：更新 manifest → 返回代码给 Vite",
    "file": "node_modules/@rue-js/vite-plugin-rue/index.mjs",
    "line": 3686,
    "code": "      if (!out || out.code === code) return null\n      updateIslandManifest(id, out.islands)\n      updateServerIslandRegistry(id, out.serverIslands)\n\n      // 调试日志：提示已转换模块\n      if (debug && out.code && out.code !== code) {\n        console.log(`[rue-vapor] transformed: ${id}`)\n      }\n      // 返回转换后的代码与空映射\n      return { code: out.code, map: null }\n    },\n    /** Vite 配置解析完成钩子：默认执行器保持 worker 隔离，避免 build 阶段同步卡住。 */",
    "note": "Vite 收到转换后的 JavaScript；浏览器稍后加载它。",
    "kind": "返回",
    "section": "Vite 主线程：接收结果",
    "sectionStart": false,
    "originalStep": 4,
    "definitionId": "fn-0"
  },
  {
    "title": "浏览器运行时边界：runtime-vapor 0.8.21 使用 TypeScript kernel",
    "file": "node_modules/@rue-js/runtime-vapor/package.json",
    "line": 2,
    "code": "  \"name\": \"@rue-js/runtime-vapor\",\n  \"version\": \"0.8.21\",\n  \"description\": \"Rue JavaScript runtime backed by a strict TypeScript reactive graph kernel\",",
    "note": "Wasm 编译任务在开发服务器中已经结束。浏览器收到的是转换后的 JavaScript；当前版本的运行时包没有运行时 .wasm。",
    "kind": "运行边界",
    "section": "浏览器：运行转换产物",
    "sectionStart": true,
    "originalStep": 5
  },
  {
    "title": "createReactiveKernel()：浏览器建立共享 TypeScript 响应式内核",
    "file": "node_modules/@rue-js/runtime-vapor/dist/reactive.shared.js",
    "line": 1,
    "code": "import { createReactiveFacade } from './js-reactive/facade.js';\nimport { createReactiveKernel } from './reactive-kernel/index.js';\nimport { installSharedBridge } from './vapor-bridge.js';\nconst reactiveKernel = createReactiveKernel({\n    onErrorCaptured: (error, owner, info) => globalThis.__rue_runtime_vapor_shared_bridge?.dispatchErrorCaptured?.(error, owner, info) ===\n        true,\n});\n// The bridge exists before facade construction because debug hooks register\n// against its stable global object during facade initialization.\ninstallSharedBridge(reactiveKernel);\nconst facade = createReactiveFacade(reactiveKernel);",
    "note": "signal、effect、scope 和 scheduler 都落在 JavaScript/TypeScript 实现中；应用挂载里的 kernel.createEffectScope() 调用的是这套内核。",
    "kind": "JS 运行时",
    "section": "浏览器：运行转换产物",
    "sectionStart": false,
    "originalStep": 5
  },
  {
    "title": "浏览器挂载阶段：wrappedSetup → 编译生成的 setup",
    "file": "node_modules/@rue-js/runtime/src/vapor-core.ts",
    "line": 60,
    "code": "      return withDOMHostOperations(parentContext, () => setup(parentContext))\n    } finally {\n      bridge?.endVaporScope(didPush)\n    }\n  }",
    "note": "浏览器的组件调用构造 handle；挂载器调用 wrappedSetup，后者在 DOM host 上下文真正执行生成的 setup。完整运行入口见“首次渲染”主题。",
    "kind": "运行阶段",
    "section": "浏览器：运行转换产物",
    "sectionStart": false,
    "originalStep": 5,
    "definitionId": "fn-9"
  }
]);
