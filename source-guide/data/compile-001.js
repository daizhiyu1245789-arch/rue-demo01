rueSourceGuide.data["compile"] = {
  "title": "Rue.js 与 WebAssembly：TSX 编译到浏览器运行",
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
    "title": "@swc/core Compiler.transformSync() → bindings.transformSync()",
    "file": "node_modules/.pnpm/@swc+core@1.15.33/node_modules/@swc/core/index.js",
    "line": 233,
    "code": "    transformSync(src, options) {\n        var _a, _b, _c;\n        const isModule = typeof src !== \"string\";\n        options = options || {};\n        if ((_a = options === null || options === void 0 ? void 0 : options.jsc) === null || _a === void 0 ? void 0 : _a.parser) {\n            options.jsc.parser.syntax =\n                (_b = options.jsc.parser.syntax) !== null && _b !== void 0 ? _b : \"ecmascript\";\n        }\n        const { plugin } = options, newOptions = __rest(options, [\"plugin\"]);\n        if (bindings) {\n            if (plugin) {\n                const m = typeof src === \"string\"\n                    ? this.parseSync(src, (_c = options === null || options === void 0 ? void 0 : options.jsc) === null || _c === void 0 ? void 0 : _c.parser, options.filename)\n                    : src;\n                return this.transformSync(plugin(m), newOptions);\n            }\n            return bindings.transformSync(isModule ? JSON.stringify(src) : src, isModule, toBuffer(newOptions));",
    "note": "Worker 中的 JavaScript 调进 @swc/core 包装层；toBuffer(newOptions) 序列化配置，bindings.transformSync 跨过 Node N-API 进入 SWC 原生实现。",
    "kind": "JS → 原生",
    "section": "JS Worker → SWC 原生层",
    "sectionStart": true,
    "originalStep": 3
  },
  {
    "title": "SWC 原生层：读取并实例化 swc-plugin-rue.wasm",
    "note": "pluginPath 指向 6,529,262 字节的 swc-plugin-rue.wasm。实例化工作由 SWC 插件宿主完成，并注入 env 与 wasi_snapshot_preview1 所需函数。",
    "kind": "Wasm 边界",
    "section": "SWC 原生层 → Rue WebAssembly",
    "sectionStart": true,
    "originalStep": 3,
    "boundary": "这里没有 Rue JavaScript 逐行源码。@swc/core 的原生绑定根据 jsc.experimental.plugins 中的 pluginPath 加载 WebAssembly 模块。该二进制导出 memory、__alloc、__free、__get_transform_plugin_core_pkg_diag 和 __transform_plugin_process_impl。"
  },
  {
    "title": "WebAssembly.__transform_plugin_process_impl：改写 SWC AST",
    "note": "SWC 插件协议把解析后的程序 AST 和元数据交给 Rue Wasm。Rust 编译出的插件遍历 AST，把 TSX/JSX 改写为 Rue Vapor setup 与运行时 helper 调用。",
    "kind": "Wasm 执行",
    "section": "SWC 原生层 → Rue WebAssembly",
    "sectionStart": false,
    "originalStep": 3,
    "boundary": "SWC 插件宿主调用 Wasm 导出的 __transform_plugin_process_impl。输入与输出采用 SWC 插件 ABI 的序列化表示，不是把 JavaScript 字符串直接传给浏览器 WebAssembly API。发布包只有 .wasm 二进制，因此此处以真实导出函数作为可观察边界。"
  },
  {
    "title": "Wasm → SWC Host：读取配置、回传 AST 与诊断",
    "note": "Wasm 通过宿主导入函数取得 { staticTemplates } 配置，并把转换结果或诊断交回 SWC。宿主随后继续 SWC 自身的代码生成。",
    "kind": "Wasm → 原生",
    "section": "SWC 原生层 → Rue WebAssembly",
    "sectionStart": false,
    "originalStep": 3,
    "boundary": "该 Wasm 实际导入 env.__get_transform_plugin_config、env.__set_transform_result、env.__emit_diagnostics、env.__set_transform_plugin_core_pkg_diagnostics 与 env.__add_pure_comment_proxy。__set_transform_result 是 Rue Wasm 把改写后 AST 交还 SWC 宿主的返回通道。"
  },
  {
    "title": "bindings.transformSync() 返回 TransformOutput → Worker JavaScript",
    "file": "node_modules/.pnpm/@swc+core@1.15.33/node_modules/@swc/core/index.js",
    "line": 249,
    "code": "            return bindings.transformSync(isModule ? JSON.stringify(src) : src, isModule, toBuffer(newOptions));",
    "note": "Rue Wasm 返回的是改写后的 AST；SWC 原生层完成打印/代码生成后，@swc/core 的 JavaScript 调用才拿到包含 code 的 TransformOutput。",
    "kind": "原生 → JS",
    "section": "Wasm → SWC → Worker JavaScript",
    "sectionStart": true,
    "originalStep": 4
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
  }
]);
