/**
 * Rue 页面渲染调试控制器。
 *
 * 每个阶段只允许暂停一次，避免 createElement/appendChild 等高频函数不断打断调试。
 * 这里保存阶段说明和命中状态；对应 debugger 与中文注释直接写在
 * node_modules/@rue-js/runtime 和 runtime-vapor 的相关源码函数中。
 */
export const rueRenderStages = [
  ['01.app-entry', '应用入口', 'app/main.ts', '准备调用 useApp(...).mount()。', '观察 RootApp、router 和挂载选择器 #app。'],
  ['02.use-app-mount', '应用挂载', 'runtime/src/hooks/useApp.ts', '查找根容器、清理旧内容，并调用底层 runtime.mount。', '观察 el、appRue、containerRef。'],
  ['03.runtime-context', '绑定运行时上下文', 'runtime/src/client-runtime.ts', '把 Rue runtime 与当前 DOM 容器压入执行上下文。', '观察 runtime、container、bridge。'],
  ['04.runtime-mount', 'Runtime 挂载入口', 'runtime-vapor/dist/js-runtime/create-rue-base.js', '把根组件包装成渲染输入，进入容器渲染流程。', '观察 app、container、root、input。'],
  ['05.app-controller', '应用控制器', 'runtime-vapor/dist/js-runtime/app.js', '管理插件执行、挂载事务和失败回滚。', '观察 transaction、state.appMounts。'],
  ['06.render-container', '渲染根容器', 'runtime-vapor/dist/js-runtime/render/container.js', '判断首次挂载还是更新，并把输入交给 mountInput。', '观察 input.type、previous、container。'],
  ['07.mount-component', '执行组件', 'runtime-vapor/dist/js-runtime/patch/component.js', '创建组件实例，执行组件函数并取得 subtree。', '观察 input.type.component、instance、subtree。'],
  ['08.vapor-setup', '执行 Vapor setup', 'runtime/src/vapor-core.ts', '运行 SWC 从 TSX 生成的原生 DOM setup 函数。', '观察 setup、parentContext、owner。'],
  ['09.page-component', '进入调试页面', 'app/pages/RueSourceDebug.tsx', '开始执行当前页面组件的状态与渲染逻辑。', '观察 count、doubled、traces。'],
  ['10.dom-create-element', '创建 HTML 元素', 'runtime/src/dom.ts', '最终调用 document.createElement() 创建真实元素。', '观察 tag、resolvedParent、element。'],
  ['11.dom-append-child', '组装 DOM 树', 'runtime/src/dom.ts', '把子节点追加到父元素或 DocumentFragment。', '观察 parent、child 及其 nodeType。'],
  ['12.dom-set-text', '写入文本', 'runtime/src/dom.ts', '把动态值转换为字符串并写入 textContent。', '观察 el、val 和最终 textContent。'],
  ['13.dom-set-attribute', '写入 HTML 属性', 'runtime/src/dom.ts', '设置 class、ARIA、data-* 等元素属性。', '观察 name、value 和目标 el。'],
  ['14.commit-html', '提交到 #app', 'runtime-vapor/dist/js-runtime/render/container.js', '把组装完成的节点或 Fragment 追加进根容器。', '观察 mounted.host、fragmentNodes、container.children。'],
] as const

type RueRenderDebugController = {
  enabled: boolean
  hits: Set<string>
  reset(): void
  take(stage: string): boolean
}

declare global {
  var __RUE_RENDER_DEBUG__: RueRenderDebugController | undefined
}

/** 安装本次页面加载使用的断点控制器；只有 rue-debug 模式的调试页会启用。 */
export const installRueRenderDebugger = () => {
  const enabled = import.meta.env.MODE === 'rue-debug' && location.hash.includes('/debug-rue')
  const controller: RueRenderDebugController = {
    enabled,
    hits: new Set(),
    reset() {
      this.hits.clear()
    },
    take(stage) {
      if (!this.enabled || this.hits.has(stage)) return false
      this.hits.add(stage)
      return true
    },
  }
  globalThis.__RUE_RENDER_DEBUG__ = controller
  return controller
}

export const takeRueRenderBreakpoint = (stage: string) =>
  globalThis.__RUE_RENDER_DEBUG__?.take(stage) ?? false

/** 清空已命中的阶段并刷新页面，从应用入口重新播放整条渲染链。 */
export const replayRueRenderBreakpoints = () => {
  const controller = globalThis.__RUE_RENDER_DEBUG__
  if (controller) {
    controller.enabled = true
    controller.reset()
  }
  location.reload()
}
