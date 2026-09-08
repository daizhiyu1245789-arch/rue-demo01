rueSourceGuide.data["compile"] = {
  "title": "编译过程：TSX 如何变成 Vapor setup",
  "rows": []
};
rueSourceGuide.data["compile"].rows.push(...[
  {
    "title": "VitePluginRue.transform(code, id, transformOptions)",
    "file": "node_modules/@rue-js/vite-plugin-rue/index.mjs",
    "line": 3655,
    "code": "    async transform(code, id, transformOptions) {\n      // RSC server graphs need to preserve server-component/client-reference boundaries.\n      // Browser and SSR environments still receive the normal Rue Vapor transform.\n      if (this.environment?.name === 'rsc') return null\n\n      // 选择 wasm 插件路径：优先环境变量回退到默认路径\n      if (!process.env.RUE_SWC_PLUGIN) {\n        process.env.RUE_SWC_PLUGIN = requireFromHere.resolve('@rue-js/swc-plugin-rue')\n      }\n\n      // 匹配处理的文件类型：仅 TSX/JSX\n      const isTsx = /(\\.(tsx|jsx))(\\?.*)?$/.test(id)\n      if (!isTsx) return null\n      // include/exclude 规则过滤\n      if (!isIncluded(id)) return null\n      // 少数 rue-design 组件仍处于去除遗留头标记的迁移中，先按路径跳过二次转换\n      if (isRueDesignComponentSource(id)) return null\n      // 已包含 RUE 头标记则直接跳过\n      if (code.startsWith(RUE_TRANSFORM_HEADER)) return null\n      const base = code\n      const environmentName = this.environment?.name\n      const serverGraph =\n        transformOptions?.ssr === true || environmentName === 'ssr' || environmentName === 'server'",
    "note": "Vite 加载 TSX 模块时调用已注册的 transform hook。先检查 rsc、扩展名、include/exclude 与转换标记。",
    "kind": "外部触发",
    "section": "Vite 主线程：登记转换任务",
    "sectionStart": true,
    "originalStep": 2,
    "definitionId": "fn-0"
  },
  {
    "title": "transform() → await transformWithSwcPlugin(base, id, …)",
    "file": "node_modules/@rue-js/vite-plugin-rue/index.mjs",
    "line": 3682,
    "code": "        out = await transformWithSwcPlugin(base, id, process.env.RUE_SWC_PLUGIN, serverGraph)\n      }\n\n      // 无输出或无变化时跳过\n      if (!out || out.code === code) return null\n      updateIslandManifest(id, out.islands)\n      updateServerIslandRegistry(id, out.serverIslands)\n",
    "note": "base = 原模块代码；id = 模块路径；pluginPath = 环境中解析的 Wasm 插件路径。",
    "kind": "调用",
    "section": "Vite 主线程：登记转换任务",
    "sectionStart": false,
    "originalStep": 2,
    "definitionId": "fn-0"
  },
  {
    "title": "transformWithSwcPlugin(code, id, pluginPath, serverGraph)",
    "file": "node_modules/@rue-js/vite-plugin-rue/index.mjs",
    "line": 3523,
    "code": "  const transformWithSwcPlugin = async (code, id, pluginPath, serverGraph) => {\n    let loweredModel\n    let islands = []\n    let serverIslands = []\n    try {\n      // 第一阶段先把 JSX parser 无法识别的指令属性改写成安全属性名，\n      // 第二阶段借助 SWC AST 将 v-model 安全属性降级成普通 JSX 属性。\n      const serverDirectiveResult = transformServerDirectiveAttributes(code, id, serverGraph)\n      serverIslands = serverDirectiveResult.serverIslands\n      const clientDirectiveResult = transformClientDirectiveAttributes(\n        serverDirectiveResult.code,\n        id,\n      )\n      islands = clientDirectiveResult.islands\n      loweredModel = preprocessRueSource(clientDirectiveResult.code, id)\n    } catch (error) {\n      throw createStageError({\n        id,",
    "note": "先处理 server/client 指令，再 preprocessRueSource。",
    "kind": "调用",
    "section": "Vite 主线程：登记转换任务",
    "sectionStart": false,
    "originalStep": 3,
    "definitionId": "fn-1"
  },
  {
    "title": "scheduleTransform(任务回调)",
    "file": "node_modules/@rue-js/vite-plugin-rue/index.mjs",
    "line": 3549,
    "code": "      const out = await scheduleTransform(() =>\n        withTransformTimeout(\n          activeTransformExecutor({\n            code: loweredModel,\n            id,\n            pluginPath,\n            timeoutMs: transformTimeoutMs,\n            isProduction: isProductionTransform,\n            staticTemplates: isProductionTransform && !serverGraph,\n          }),\n          { id, timeoutMs: transformTimeoutMs },\n        ),\n      )\n      const normalizedOut = preserveRscDirectivePrologue(code, out)\n      // 输出标记用于幂等判断；响应式 props 解构标记用于测试和诊断。",
    "note": "任务回调调用 withTransformTimeout(activeTransformExecutor(payload), timeoutOptions)。",
    "kind": "传回调",
    "section": "Vite 主线程：登记转换任务",
    "sectionStart": false,
    "originalStep": 3,
    "definitionId": "fn-2"
  },
  {
    "title": "activeTransformExecutor：默认绑定 runSwcTransformInWorker",
    "file": "node_modules/@rue-js/vite-plugin-rue/index.mjs",
    "line": 3352,
    "code": "  let activeTransformExecutor = transformExecutor",
    "note": "默认执行器使用 worker；显式传入 transformExecutor 时由其实现决定。",
    "kind": "绑定",
    "section": "Vite 主线程：登记转换任务",
    "sectionStart": false,
    "originalStep": 3,
    "definitionId": "fn-3"
  },
  {
    "title": "runSwcTransformInWorker(payload) → new Promise",
    "file": "node_modules/@rue-js/vite-plugin-rue/index.mjs",
    "line": 3249,
    "code": "const runSwcTransformInWorker = ({\n  code,\n  id,\n  pluginPath,\n  timeoutMs,\n  isProduction,\n  staticTemplates,\n}) =>\n  new Promise((resolve, reject) => {\n    let settled = false\n    let timer = null\n\n    const settle = callback => {\n      if (settled) {\n        return\n      }\n\n      settled = true\n      if (timer) {\n        clearTimeout(timer)\n      }",
    "note": "executor 回调同步登记 worker 事件，然后返回等待结果的 Promise。",
    "kind": "异步登记",
    "section": "Vite 主线程：登记转换任务",
    "sectionStart": false,
    "originalStep": 3,
    "definitionId": "fn-4"
  },
  {
    "title": "new Worker(TRANSFORM_WORKER_PATH, { workerData })",
    "file": "node_modules/@rue-js/vite-plugin-rue/index.mjs",
    "line": 3275,
    "code": "      worker = new Worker(TRANSFORM_WORKER_PATH, {\n        type: 'module',\n        workerData: {\n          code,\n          pluginPath,\n          isProduction: isProduction ?? process.env.NODE_ENV === 'production',\n          staticTemplates,\n        },\n      })\n    } catch (error) {",
    "note": "workerData 携带 code、pluginPath、isProduction、staticTemplates。",
    "kind": "异步登记",
    "section": "Vite 主线程：登记转换任务",
    "sectionStart": false,
    "originalStep": 3,
    "definitionId": "fn-5"
  },
  {
    "title": "worker 入口读取 workerData → swc.transformSync()",
    "file": "node_modules/@rue-js/vite-plugin-rue/transform-worker.mjs",
    "line": 31,
    "code": "  const { code, pluginPath, isProduction, staticTemplates } = workerData\n  const out = swc.transformSync(\n    code,\n    createSwcTransformOptions({ pluginPath, isProduction, staticTemplates }),\n  )\n  parentPort?.postMessage({ code: out.code })\n} catch (error) {",
    "note": "这里在 worker 线程执行；先 createSwcTransformOptions，再调用 swc.transformSync。",
    "kind": "异步继续",
    "section": "Worker 线程：执行 SWC",
    "sectionStart": true,
    "originalStep": 3
  },
  {
    "title": "createSwcTransformOptions()：把 Rue Wasm 插件交给 SWC",
    "file": "node_modules/@rue-js/vite-plugin-rue/transform-worker.mjs",
    "line": 4,
    "code": "const createSwcTransformOptions = ({ pluginPath, isProduction, staticTemplates = false }) => ({\n  filename: 'rue.tsx',\n  jsc: {\n    parser: { syntax: 'typescript', tsx: true },\n    target: 'es2020',\n    transform: {\n      [['re', 'act'].join('')]: {\n        runtime: 'automatic',\n        importSource: '@rue-js',\n        development: !isProduction,\n        throwIfNamespace: false,\n      },\n    },\n    experimental: {\n      plugins: [[pluginPath, { staticTemplates }]],\n    },\n  },\n  minify: isProduction,\n})\n\nconst serializeError = error => ({\n  name: error?.name || 'Error',\n  message: error?.message || String(error),\n  stack: error?.stack,\n})",
    "note": "jsc.experimental.plugins 指定插件路径与 staticTemplates。SWC/Wasm 内部属于二进制边界，本地发布包不提供逐行 Rust 源码。",
    "kind": "调用",
    "section": "Worker 线程：执行 SWC",
    "sectionStart": false,
    "originalStep": 3,
    "definitionId": "fn-6"
  },
  {
    "title": "swc.transformSync 返回 → parentPort.postMessage",
    "file": "node_modules/@rue-js/vite-plugin-rue/transform-worker.mjs",
    "line": 36,
    "code": "  parentPort?.postMessage({ code: out.code })\n} catch (error) {\n  parentPort?.postMessage({ error: serializeError(error) })",
    "note": "转换结果发回主线程；错误则发回序列化 error。",
    "kind": "返回",
    "section": "Worker 线程：执行 SWC",
    "sectionStart": false,
    "originalStep": 4
  },
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
    "title": "浏览器挂载阶段：wrappedSetup → 编译生成的 setup",
    "file": "node_modules/@rue-js/runtime/src/vapor-core.ts",
    "line": 60,
    "code": "      return withDOMHostOperations(parentContext, () => setup(parentContext))\n    } finally {\n      bridge?.endVaporScope(didPush)\n    }\n  }",
    "note": "浏览器的组件调用构造 handle；挂载器调用 wrappedSetup，后者在 DOM host 上下文真正执行生成的 setup。完整运行入口见“首次渲染”主题。",
    "kind": "运行阶段",
    "section": "浏览器：运行转换产物",
    "sectionStart": true,
    "originalStep": 5,
    "definitionId": "fn-9"
  }
]);
