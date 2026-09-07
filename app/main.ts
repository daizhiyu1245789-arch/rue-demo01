import '../style.css'
import { useApp } from '@rue-js/rue'
import RootApp from './app'
import router from './router'
import { installRueRenderDebugger, takeRueRenderBreakpoint } from './rue-render-debug'

installRueRenderDebugger()
// [01 应用入口] 调用链：main.ts -> useApp(RootApp) -> mount('#app')。
// oxlint-disable-next-line no-debugger -- Rue 源码调试模式的第一个自动断点。
if (takeRueRenderBreakpoint('01.app-entry')) debugger
useApp(RootApp).use(router).mount('#app')
