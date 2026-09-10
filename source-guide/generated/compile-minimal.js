rueSourceGuide.minimalImplementations ||= {};
rueSourceGuide.minimalImplementations["compile"] = {
  "1": {
    "title": "01 · 最小实现",
    "intro": "这是「编译过程」第 1 步的最小手写版，只保留当前节点的核心动作。对应源码线索：Vite 加载 TSX 模块时调用已注册的 transform hook。先检查 rsc、扩展名、include/exclude 与转换标记。执行后继续到「transform() → await transformWithSwcPlugin(base, id, …)」。",
    "code": "function compileStep001_vitePluginRueTransformCodeId(ctx) {\n  const value = ctx.run(\"VitePluginRue.transform(code, id, transformOptions)\")\n  ctx.next(\"transform() → await transformWithSwcPlugin(base, id, …)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "2": {
    "title": "02 · 最小实现",
    "intro": "这是「编译过程」第 2 步的最小手写版，只保留当前节点的核心动作。对应源码线索：base = 原模块代码；id = 模块路径；pluginPath = 环境中解析的 Wasm 插件路径。执行后继续到「transformWithSwcPlugin(code, id, pluginPath, serverGraph)」。",
    "code": "function compileStep002_transformAwaitTransformWithSwcPluginBase(ctx) {\n  const value = ctx.run(\"transform() → await transformWithSwcPlugin(base, id, …)\")\n  ctx.next(\"transformWithSwcPlugin(code, id, pluginPath, serverGraph)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "3": {
    "title": "03 · 最小实现",
    "intro": "这是「编译过程」第 3 步的最小手写版，只保留当前节点的核心动作。对应源码线索：先处理 server/client 指令，再 preprocessRueSource。执行后继续到「scheduleTransform(任务回调)」。",
    "code": "function compileStep003_transformWithSwcPluginCodeIdPluginPath(ctx) {\n  const value = ctx.run(\"transformWithSwcPlugin(code, id, pluginPath, serverGraph)\")\n  ctx.next(\"scheduleTransform(任务回调)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "4": {
    "title": "04 · 最小实现",
    "intro": "这是「编译过程」第 4 步的最小手写版，只保留当前节点的核心动作。对应源码线索：任务回调调用 withTransformTimeout(activeTransformExecutor(payload), timeoutOptions)。执行后继续到「activeTransformExecutor：默认绑定 runSwcTransformInWorker」。",
    "code": "function compileStep004_scheduleTransform(ctx) {\n  const callback = ctx.getCallback()\n  const value = callback(ctx.input)\n  ctx.next(\"activeTransformExecutor：默认绑定 runSwcTransformInWorker\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "5": {
    "title": "05 · 最小实现",
    "intro": "这是「编译过程」第 5 步的最小手写版，只保留当前节点的核心动作。对应源码线索：默认执行器使用 worker；显式传入 transformExecutor 时由其实现决定。执行后继续到「runSwcTransformInWorker(payload) → new Promise」。",
    "code": "function compileStep005_activeTransformExecutorRunSwcTransformInWorker(ctx) {\n  const value = ctx.createValue(\"activeTransformExecutor：默认绑定 runSwcTransformInWorker\")\n  ctx.store(\"activeTransformExecutor：默认绑定 runSwcTransformInWorker\", value)\n  ctx.next(\"runSwcTransformInWorker(payload) → new Promise\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "6": {
    "title": "06 · 最小实现",
    "intro": "这是「编译过程」第 6 步的最小手写版，只保留当前节点的核心动作。对应源码线索：executor 回调同步登记 worker 事件，然后返回等待结果的 Promise。执行后继续到「new Worker(TRANSFORM_WORKER_PATH, { workerData })」。",
    "code": "function compileStep006_runSwcTransformInWorkerPayloadNewPromise(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"new Worker(TRANSFORM_WORKER_PATH, { workerData })\", value)\n  })\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "7": {
    "title": "07 · 最小实现",
    "intro": "这是「编译过程」第 7 步的最小手写版，只保留当前节点的核心动作。对应源码线索：workerData 携带 code、pluginPath、isProduction、staticTemplates。执行后继续到「worker 入口读取 workerData → swc.transformSync()」。",
    "code": "function compileStep007_newWorkerTRANSFORMWORKER(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"worker 入口读取 workerData → swc.transformSync()\", value)\n  })\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "8": {
    "title": "08 · 最小实现",
    "intro": "这是「编译过程」第 8 步的最小手写版，只保留当前节点的核心动作。对应源码线索：这里在 worker 线程执行；先 createSwcTransformOptions，再调用 swc.transformSync。执行后继续到「createSwcTransformOptions()：把 Rue Wasm 插件交给 SWC」。",
    "code": "function compileStep008_workerWorkerDataSwcTransformSync(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"createSwcTransformOptions()：把 Rue Wasm 插件交给 SWC\", value)\n  })\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "9": {
    "title": "09 · 最小实现",
    "intro": "这是「编译过程」第 9 步的最小手写版，只保留当前节点的核心动作。对应源码线索：jsc.experimental.plugins 指定插件路径与 staticTemplates。SWC/Wasm 内部属于二进制边界，本地发布包不提供逐行 Rust 源码。执行后继续到「@swc/core Compiler.transformSync() → bindings.transformSync()」。",
    "code": "function compileStep009_createSwcTransformOptionsRueWasmSWC(ctx) {\n  const value = ctx.run(\"createSwcTransformOptions()：把 Rue Wasm 插件交给 SWC\")\n  ctx.next(\"@swc/core Compiler.transformSync() → bindings.transformSync()\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "10": {
    "title": "10 · 最小实现",
    "intro": "这是「编译过程」第 10 步的最小手写版，只保留当前节点的核心动作。对应源码线索：Worker 中的 JavaScript 调进 @swc/core 包装层；toBuffer(newOptions) 序列化配置，bindings.transformSync 跨过 Node N-API 进入 SWC 原生实现。执行后继续到「SWC 原生层：读取并实例化 swc-plugin-rue.wasm」。",
    "code": "function compileStep010_swcCoreCompilerTransformSync(ctx) {\n  const input = ctx.input\n  const output = ctx.runOutsideJavaScript(input)\n  ctx.next(\"SWC 原生层：读取并实例化 swc-plugin-rue.wasm\", output)\n  return output\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "11": {
    "title": "11 · 最小实现",
    "intro": "这是「编译过程」第 11 步的最小手写版，只保留当前节点的核心动作。对应源码线索：pluginPath 指向 6,529,262 字节的 swc-plugin-rue.wasm。实例化工作由 SWC 插件宿主完成，并注入 env 与 wasi_snapshot_preview1 所需函数。执行后继续到「WebAssembly.__transform_plugin_process_impl：改写 SWC AST」。",
    "code": "function compileStep011_sWCSwcPluginRue(ctx) {\n  const input = ctx.input\n  const output = ctx.runOutsideJavaScript(input)\n  ctx.next(\"WebAssembly.__transform_plugin_process_impl：改写 SWC AST\", output)\n  return output\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "12": {
    "title": "12 · 最小实现",
    "intro": "这是「编译过程」第 12 步的最小手写版，只保留当前节点的核心动作。对应源码线索：SWC 插件协议把解析后的程序 AST 和元数据交给 Rue Wasm。Rust 编译出的插件遍历 AST，把 TSX/JSX 改写为 Rue Vapor setup 与运行时 helper 调用。执行后继续到「Wasm → SWC Host：读取配置、回传 AST 与诊断」。",
    "code": "function compileStep012_webAssemblyTransformPluginProcess(ctx) {\n  const input = ctx.input\n  const output = ctx.runOutsideJavaScript(input)\n  ctx.next(\"Wasm → SWC Host：读取配置、回传 AST 与诊断\", output)\n  return output\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "13": {
    "title": "13 · 最小实现",
    "intro": "这是「编译过程」第 13 步的最小手写版，只保留当前节点的核心动作。对应源码线索：Wasm 通过宿主导入函数取得 { staticTemplates } 配置，并把转换结果或诊断交回 SWC。宿主随后继续 SWC 自身的代码生成。执行后继续到「bindings.transformSync() 返回 TransformOutput → Worker JavaScript」。",
    "code": "function compileStep013_wasmSWCHostAST(ctx) {\n  const input = ctx.input\n  const output = ctx.runOutsideJavaScript(input)\n  ctx.next(\"bindings.transformSync() 返回 TransformOutput → Worker JavaScript\", output)\n  return output\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "14": {
    "title": "14 · 最小实现",
    "intro": "这是「编译过程」第 14 步的最小手写版，只保留当前节点的核心动作。对应源码线索：Rue Wasm 返回的是改写后的 AST；SWC 原生层完成打印/代码生成后，@swc/core 的 JavaScript 调用才拿到包含 code 的 TransformOutput。执行后继续到「swc.transformSync 返回 → parentPort.postMessage」。",
    "code": "function compileStep014_bindingsTransformSyncTransformOutputWorker(ctx) {\n  const input = ctx.input\n  const output = ctx.runOutsideJavaScript(input)\n  ctx.next(\"swc.transformSync 返回 → parentPort.postMessage\", output)\n  return output\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "15": {
    "title": "15 · 最小实现",
    "intro": "这是「编译过程」第 15 步的最小手写版，只保留当前节点的核心动作。对应源码线索：转换结果发回主线程；错误则发回序列化 error。执行后继续到「worker.once(\"message\", message => …) → resolve(code)」。",
    "code": "function compileStep015_swcTransformSyncParentPortPostMessage(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"worker.once(\\\"message\\\", message => …) → resolve(code)\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "16": {
    "title": "16 · 最小实现",
    "intro": "这是「编译过程」第 16 步的最小手写版，只保留当前节点的核心动作。对应源码线索：主线程 message 事件执行回调。settle 防止重复完成，清 timer；resolve 解除等待。执行后继续到「await scheduleTransform 完成 → normalizedOut」。",
    "code": "function compileStep016_workerOnceMessageMessage(ctx) {\n  ctx.schedule(() => {\n    const value = ctx.runCurrentStep()\n    ctx.next(\"await scheduleTransform 完成 → normalizedOut\", value)\n  })\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "17": {
    "title": "17 · 最小实现",
    "intro": "这是「编译过程」第 17 步的最小手写版，只保留当前节点的核心动作。对应源码线索：恢复等待中的 transformWithSwcPlugin；加转换头，返回 code/islands/serverIslands。执行后继续到「回到 transform()：更新 manifest → 返回代码给 Vite」。",
    "code": "function compileStep017_awaitScheduleTransformNormalizedOut(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"回到 transform()：更新 manifest → 返回代码给 Vite\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "18": {
    "title": "18 · 最小实现",
    "intro": "这是「编译过程」第 18 步的最小手写版，只保留当前节点的核心动作。对应源码线索：Vite 收到转换后的 JavaScript；浏览器稍后加载它。执行后继续到「浏览器运行时边界：runtime-vapor 0.8.21 使用 TypeScript kernel」。",
    "code": "function compileStep018_transformManifestVite(ctx) {\n  const value = ctx.finishCurrentStep()\n  ctx.returnTo(\"浏览器运行时边界：runtime-vapor 0.8.21 使用 TypeScript kernel\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "19": {
    "title": "19 · 最小实现",
    "intro": "这是「编译过程」第 19 步的最小手写版，只保留当前节点的核心动作。对应源码线索：Wasm 编译任务在开发服务器中已经结束。浏览器收到的是转换后的 JavaScript；当前版本的运行时包没有运行时 .wasm。执行后继续到「createReactiveKernel()：浏览器建立共享 TypeScript 响应式内核」。",
    "code": "function compileStep019_runtimeVapor08(ctx) {\n  const input = ctx.input\n  const output = ctx.runOutsideJavaScript(input)\n  ctx.next(\"createReactiveKernel()：浏览器建立共享 TypeScript 响应式内核\", output)\n  return output\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "20": {
    "title": "20 · 最小实现",
    "intro": "这是「编译过程」第 20 步的最小手写版，只保留当前节点的核心动作。对应源码线索：signal、effect、scope 和 scheduler 都落在 JavaScript/TypeScript 实现中；应用挂载里的 kernel.createEffectScope() 调用的是这套内核。执行后继续到「浏览器挂载阶段：wrappedSetup → 编译生成的 setup」。",
    "code": "function compileStep020_createReactiveKernelTypeScript(ctx) {\n  const value = ctx.run(\"createReactiveKernel()：浏览器建立共享 TypeScript 响应式内核\")\n  ctx.next(\"浏览器挂载阶段：wrappedSetup → 编译生成的 setup\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  },
  "21": {
    "title": "21 · 最小实现",
    "intro": "这是「编译过程」第 21 步的最小手写版，只保留当前节点的核心动作。对应源码线索：浏览器的组件调用构造 handle；挂载器调用 wrappedSetup，后者在 DOM host 上下文真正执行生成的 setup。完整运行入口见“首次渲染”主题。执行后回到本主题的外层调用者。",
    "code": "function compileStep021_wrappedSetupSetup(ctx) {\n  const value = ctx.run(\"浏览器挂载阶段：wrappedSetup → 编译生成的 setup\")\n  ctx.next(\"调用者\", value)\n  return value\n}",
    "watch": "手写时先确认输入、返回值和下一步调用。"
  }
};
