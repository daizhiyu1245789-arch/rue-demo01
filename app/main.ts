import '../style.css'
import { useApp } from '@rue-js/rue'
import RootApp from './app'
import router from './router'
import { installRueRenderDebugger, takeRueRenderBreakpoint } from './rue-render-debug'

installRueRenderDebugger()
// [01 应用入口] 调用链：main.ts -> useApp(RootApp) -> mount('#app')。
// oxlint-disable-next-line no-debugger -- Rue 源码调试模式的第一个自动断点。
if (takeRueRenderBreakpoint('01.app-entry')) debugger
/*
 * [RUE-MOUNT-012] 应用挂载 · 步骤 12：main.ts → 应用对象.mount("#app")
 * 对应指南：RUE_SOURCE_GUIDE.html#flow=mount&view=sequence&node=12
 * 所在阶段：B · 开始挂载：解析容器 → 执行 runner；节点类型：调用。
 *   1. 读取 .use(router) 返回对象上的 mount 属性，然后用字符串 '#app' 调用它。
 *   2. 这条图接下来展开首次挂载成功路径：页面存在对应容器，当前应用尚未占用别的容器。
 *   3. 这里是同步调用。mount 没有返回前，当前 main.ts 这一行还没有执行结束。
 * 执行结果：控制流进入 useApp 返回对象中的 mount(container)，形参 container 接收到 '#app'。
 * 衔接说明：下面按首次挂载成功路径展开；#app 存在，容器尚未归属其它应用。
 * 断点观察：在 app/main.ts 这一行进入函数，确认跳到 useApp.ts，而不是直接跳到 create-rue-base.js。
 */
useApp(RootApp).use(router).mount('#app')
