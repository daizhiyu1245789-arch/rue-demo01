rueSourceGuide.handwrittenImplementations.mount = {
  "title": "应用挂载：手写完整实现",
  "summary": "用最小代码串起 useApp、运行时上下文、runtime.mount、appController.mount、renderContainer 和 mounted 生命周期。",
  "sections": [
    {
      "title": "1. 应用入口",
      "text": "业务只调用 useApp(RootApp).mount(\"#app\")。RootApp 可以是函数，mount 会先找到真实 DOM 容器，再取得当前页面对应的 runtime。",
      "code": "function RootApp() {\n  return { type: 'div', children: ['hello rue mount'] }\n}\n\nuseApp(RootApp).mount('#app')"
    },
    {
      "title": "2. useApp 保存应用对象",
      "text": "useApp 的核心是闭包。appRue 和 mountedContainer 不放到全局，而是保存在 useApp 返回对象内部，后续 mount/unmount 都能拿到同一份状态。",
      "code": "function useApp(App) {\n  let appRue = null\n  let mountedContainer = null\n\n  return {\n    mount(selector) {\n      const container = document.querySelector(selector)\n      appRue = appRue || getClientRuntime(container)\n      mountedContainer = container\n      return runWithClientRuntime(appRue, () => appRue.mount(App, container), container)\n    },\n  }\n}"
    },
    {
      "title": "3. runWithClientRuntime 建立当前运行时",
      "text": "这一步只负责把当前 runtime 放到可读取的位置，然后执行 runner。源码里的 bridge/container 栈也是为了解决“当前这次渲染属于哪个容器、哪个 runtime”。",
      "code": "function runWithRuntime(runtime, runner) {\n  const previous = runtime.state.activeRuntime\n  runtime.state.activeRuntime = runtime\n  try {\n    return runner()\n  } finally {\n    runtime.state.activeRuntime = previous\n  }\n}"
    },
    {
      "title": "4. runtime.mount 进入挂载入口",
      "text": "runtime.mount 不直接把所有事做完，而是把应用、容器和真正渲染根节点的回调交给 appController.mount。这样容器占用、挂载记录、错误处理可以集中管理。",
      "code": "mount(app, container) {\n  return appController.mount(app, container, (finish) => {\n    const input = typeof app === 'function' ? app({}) : app\n    const rootNode = renderContainer(input, container)\n    finish(rootNode)\n    state.lifecycle.call('mounted')\n  })\n}"
    },
    {
      "title": "5. appController.mount 管理容器所有权",
      "text": "这里检查容器是否存在、是否已经挂载，然后创建 record。真正渲染由回调完成，完成后 record 记录 root 和 mounted 状态。",
      "code": "mount(app, container, renderRoot) {\n  if (!container) throw new Error('mount container not found')\n  if (state.containers.has(container)) throw new Error('container already mounted')\n\n  const record = { app, container, mounted: false, root: null }\n  state.containers.set(container, record)\n\n  renderRoot((root) => {\n    record.root = root\n    record.mounted = true\n  })\n\n  return app\n}"
    },
    {
      "title": "6. renderContainer 把组件结果变成 DOM",
      "text": "最小模型只支持文本和普通标签。真实 Rue 源码还会处理组件、fragment、响应式 effect、anchor、props、事件和 DOM patch。",
      "code": "function renderContainer(input, container) {\n  container.textContent = ''\n  const node = renderValue(input)\n  container.appendChild(node)\n  return node\n}"
    },
    {
      "title": "7. mounted 生命周期最后触发",
      "text": "DOM 已经进入容器后再调用 mounted。这个顺序很关键：mounted 回调里读取 DOM，应该能读到已经挂好的节点。",
      "code": "finish(rootNode)\nstate.lifecycle.call('mounted')"
    }
  ],
  "fullCode": "// 应用挂载：最小可运行模型\n// 目标：把 useApp(RootApp).mount('#app') 这条链手写出来。\n\nfunction createRuntimeState() {\n  return {\n    activeRuntime: null,\n    containers: new Map(),\n    lifecycle: {\n      mounted: [],\n      call(name) {\n        for (const fn of this[name] ?? []) fn()\n      },\n      onMounted(fn) {\n        this.mounted.push(fn)\n      },\n    },\n  }\n}\n\nfunction createAppController(state) {\n  return {\n    mount(app, container, renderRoot) {\n      if (!container) throw new Error('mount container not found')\n      if (state.containers.has(container)) {\n        throw new Error('container already mounted')\n      }\n\n      const record = { app, container, mounted: false, root: null }\n      state.containers.set(container, record)\n\n      renderRoot((root) => {\n        record.root = root\n        record.mounted = true\n      })\n\n      return app\n    },\n  }\n}\n\nfunction createRueRuntime() {\n  const state = createRuntimeState()\n  const appController = createAppController(state)\n\n  function renderContainer(input, container) {\n    container.textContent = ''\n    const node = renderValue(input)\n    container.appendChild(node)\n    return node\n  }\n\n  function renderValue(value) {\n    if (typeof value === 'string' || typeof value === 'number') {\n      return document.createTextNode(String(value))\n    }\n\n    if (value && typeof value.type === 'string') {\n      const el = document.createElement(value.type)\n      for (const child of value.children ?? []) {\n        el.appendChild(renderValue(child))\n      }\n      return el\n    }\n\n    return document.createTextNode('')\n  }\n\n  return {\n    state,\n    onMounted(fn) {\n      state.lifecycle.onMounted(fn)\n    },\n    mount(app, container) {\n      return appController.mount(app, container, (finish) => {\n        const input = typeof app === 'function' ? app({}) : app\n        const rootNode = renderContainer(input, container)\n        finish(rootNode)\n        state.lifecycle.call('mounted')\n      })\n    },\n  }\n}\n\nconst runtimeCache = new WeakMap()\n\nfunction getClientRuntime(container) {\n  const owner = container.ownerDocument || document\n  let runtime = runtimeCache.get(owner)\n  if (!runtime) {\n    runtime = createRueRuntime()\n    runtimeCache.set(owner, runtime)\n  }\n  return runtime\n}\n\nfunction runWithRuntime(runtime, runner) {\n  const previous = runtime.state.activeRuntime\n  runtime.state.activeRuntime = runtime\n  try {\n    return runner()\n  } finally {\n    runtime.state.activeRuntime = previous\n  }\n}\n\nfunction runWithClientRuntime(runtime, runner, container) {\n  if (!container) throw new Error('missing container')\n  return runWithRuntime(runtime, runner)\n}\n\nfunction useApp(App) {\n  let appRue = null\n  let mountedContainer = null\n\n  return {\n    mount(selector) {\n      const container =\n        typeof selector === 'string' ? document.querySelector(selector) : selector\n\n      appRue = appRue || getClientRuntime(container)\n      mountedContainer = container\n\n      return runWithClientRuntime(\n        appRue,\n        () => appRue.mount(App, container),\n        container,\n      )\n    },\n  }\n}\n\n// 业务入口：这就是 main.ts 里最小形态的调用。\nfunction RootApp() {\n  return {\n    type: 'div',\n    children: ['hello rue mount'],\n  }\n}\n\nuseApp(RootApp).mount('#app')"
};
