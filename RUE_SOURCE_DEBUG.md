# Rue 源码调试路线

[打开交互式 Rue 源码学习地图（20 个主题 / 200 个源码步骤）](RUE_SOURCE_GUIDE.html)

地图里的源码路径可以直接点击，会通过本机 `trae://file/...:行号` 协议在 Trae 中打开文件并跳到对应行；浏览器第一次调用 Trae 时可能会询问是否允许。

## 优先看：如何找到“谁调用谁”

交互地图的 20 个主题、200 个步骤已补充衔接类型与说明，并提供 219 个中间源码定位入口。位置按本项目当前安装的 Rue 0.8.21 源码核对；不是对整个 Rue 仓库所有调用关系的自动索引。

- **到下一步怎么走**：先读衔接说明，再点击“当前步骤 / 实际调用处 / 回调入口 / 下一阅读步骤”的源码卡片。卡片展示真实文件和行号，可直接在 Trae 定位。
- **从上一步到这里**：展开后能回看上一步的说明和调用两端。在第 6 步同样能找到第 5 步的 `render(app)`，不用退回再找。
- **★ 关键节点速查**：可跨主题直达 26 个关键节点；步骤按钮也带 ★。说明按“重要 / 很重要 / 特别重要”标记阅读优先级，不代表错误严重程度。重点解释回调身份、参数对应、条件分支、异步恢复与断点观察。
- **不要把下一步按钮当作 F11**：地图明确区分直接调用、回调、返回、分支、异步和阅读顺序。并列分支不会在一次执行中全部经过；浏览器生成代码与 Wasm 二进制也不会伪造可跳转的源码行。

尤其注意首次挂载 **5→6**：`app.js:87` 的 `render(app)` 调用的是 `create-rue-base.js:130` 传入的第三个参数。回调形参 `root` 接收 `app`，再经 `recordInput()` 和 `runRenderEntry()` 到 `renderContainer()`。地图已分别链接调用处、回调入口、中间处理和目标定义。

其他容易误读的节点也有说明：同步 / 异步路由提交走不同路径；computed 的计算与版本提交分层；KeepAlive 的缓存失活不等于最终卸载；卸载控制器的 `dispose` 是第二个参数，且这条回调没有 `runRenderEntry()` 包装。未确认的调用边标为“核验”，不画成确定调用。

在项目目录运行 `pnpm check:source-guide` 可检查脚本语法、源文件 / 行号、中间调用位置的匹配文本，并用 DOM 测试夹具遍历全部步骤、前后导航、回看链接和重点跳转。此检查不验证浏览器布局，也不启动 Trae；依赖升级后应重新核对源码行号和调用语义。

## 怎么用

1. 运行 `pnpm dev:rue`。
2. 打开 `http://127.0.0.1:5173/#/debug-rue`。
3. 浏览器停在 `debugger` 后，按 **F11** 进入函数，按 **Shift+F11** 返回上层；遇到异步接力，在恢复回调另下断点，并结合 Call Stack 查看。
4. 在本文件中按住 **Ctrl** 点击步骤名称，可以直接打开对应源码。

## 源码思维导图

[打开应用挂载思维导图](RUE_SOURCE_GUIDE.html#flow=mount&view=map)。页面顶部可切换「导读结构」「思维导图」与「完整源码顺序图」；原有层级导读保留在「导读结构」，真正的图使用中心主题、左右分支和 SVG 连线，并支持拖动、滚轮缩放与分支折叠。

导图按以下层级整理完整挂载过程，默认只显示主干和分支摘要，点击分支展开函数，再点击函数进入对应源码节点与核心解释：

- **第一段：应用进入 Rue**：运行时准备 → 容器预留 → 上下文 → Runtime 入口 → 应用控制器与根回调 → 渲染输入。
- **第二段：页面变成 HTML**：根容器分派 → 组件与 Hook → 返回值标准化 → Vapor setup → 子树返回 → DOM 提交。
- **第三段：生命周期与返回收尾**：保存根记录与 mounted 通知 → 事务结束 → 恢复上下文与确认容器。

应用挂载导图包含 15 个阅读分支、105 个完整源码节点；其他主题按现有执行段生成导图，20 个主题共覆盖 492 个节点。分支编号属于导图目录，叶子编号与完整源码顺序图一致。树形连接表示阅读层级，不表示所有条件分支都会执行；生成 setup 内部的 DOM helper 顺序需结合实际编译结果查看。

运行 `node scripts/check-source-mindmap.mjs` 可检查导图节点覆盖、顺序与脚本语法。

## 第一段：应用进入 Rue

以下是精简导读，编号与交互地图的完整步骤不同；完整衔接与关键说明以地图为准。

1. [01 应用入口](app/main.ts#L11)  
   `main.ts -> useApp(RootApp) -> mount('#app')`

2. [02 应用挂载](node_modules/@rue-js/runtime/src/hooks/useApp.ts#L86)  
   `useApp.mount() -> runWithClientRuntime() -> appRue.mount()`

3. [03 绑定运行时上下文](node_modules/@rue-js/runtime/src/client-runtime.ts#L173)  
   `runWithClientRuntime() -> runWithRuntime() -> runner()`

4. [04 Runtime 挂载入口](node_modules/@rue-js/runtime-vapor/dist/js-runtime/create-rue-base.js#L122)  
   `appRue.mount() -> runtime.mount() -> appController.mount()`

5. [05 应用控制器](node_modules/@rue-js/runtime-vapor/dist/js-runtime/app.js#L57)  
   `appController.mount() -> plugins.flush() -> render(app)`

   这里的 `render` 是 `appController.mount(app, container, render)` 的第三个形参，不是公共 `render()` API。它实际指向第 4 步在 `create-rue-base.js#L130-L145` 传入的 `root => { ... }` 回调：

   `render(app) -> 回到 root => 回调 -> createElementMountInput() -> recordInput() -> runRenderEntry() -> renderContainer()`

6. [06 渲染根容器](node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js#L31)  
   `renderContainer() -> controller.mountInput()`

7. [07 执行组件](node_modules/@rue-js/runtime-vapor/dist/js-runtime/patch/component.js#L163)  
   `mountInput(component) -> mountComponent() -> renderComponent()`

8. [组件执行入口](node_modules/@rue-js/runtime-vapor/dist/js-runtime/component.js#L24)  
   `renderComponent() -> components.render() -> prepare() -> runWithOwningRuntime() -> carrier.renderHooks() -> input.type.component(props)`；返回值规范化后交给 `mountSubtree()`。

9. [08 执行 Vapor setup](node_modules/@rue-js/runtime/src/vapor-core.ts#L50)  
   `runVaporSetup() -> wrappedSetup() -> SWC 生成的 setup()`

## 第二段：页面变成 HTML

1. [09 调用调试页面组件](app/pages/RueSourceDebug.tsx#L9)  
   `renderComponent() -> RueSourceDebug() -> 返回 TSX/Vapor`

2. [Vapor 类型分派](node_modules/@rue-js/runtime-vapor/dist/js-runtime/mount.js#L167)  
   `mountInput(vapor) -> mountVapor() -> runVaporSetup()`

3. [10 创建 HTML 元素](node_modules/@rue-js/runtime/src/dom.ts#L1749)  
   `setup() -> createElement() -> document.createElement()`

4. [11 组装 DOM 树](node_modules/@rue-js/runtime/src/dom.ts#L1815)  
   `setup() -> appendChild() -> parent.appendChild()`

5. [12 写入文本](node_modules/@rue-js/runtime/src/dom.ts#L1786)  
   `setup()/响应式更新 -> settextContent() -> el.textContent`

6. [13 写入 HTML 属性](node_modules/@rue-js/runtime/src/dom.ts#L1851)  
   `setup() -> setAttribute() -> el.setAttribute()`

7. [14 提交到 #app](node_modules/@rue-js/runtime-vapor/dist/js-runtime/render/container.js#L9)  
   `commitMountedContainer() -> host.appendChild() -> #app`

## 只记这一条主线

`main.ts -> useApp.mount -> runtime.mount -> renderContainer -> mountComponent -> renderComponent -> Vapor setup -> DOM 函数 -> #app`

> 若在 `node_modules` 中添加中文注释或断点，重新安装依赖后可能被覆盖。本次调用链说明保存在 `RUE_SOURCE_GUIDE.html` 与本文件中，不依赖修改依赖包。
