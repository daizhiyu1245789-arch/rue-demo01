import { batch, computed, type FC, ref, useEffect, watch } from '@rue-js/rue'
import {
  replayRueRenderBreakpoints,
  rueRenderStages,
  takeRueRenderBreakpoint,
} from '../rue-render-debug'

const RueSourceDebug: FC = () => {
  // [09 页面组件] 调用链：renderComponent() -> RueSourceDebug() -> 返回 TSX/Vapor。
  // oxlint-disable-next-line no-debugger -- 用于定位路由页面组件的首次执行。
  if (takeRueRenderBreakpoint('09.page-component')) debugger

  const count = ref(0)
  const traces = ref<string[]>([])
  const doubled = computed(() => count.value * 2)

  const addTrace = (message: string) => {
    const time = new Date().toLocaleTimeString('zh-CN', { hour12: false })
    traces.value = [`${time}  ${message}`, ...traces.value].slice(0, 10)
  }

  watch(
    () => count.value,
    (value, previous) => addTrace(`watch: ${String(previous)} -> ${String(value)}`),
  )

  useEffect(() => {
    addTrace('useEffect: 组件已挂载')
    return () => console.info('[Rue source debug] component disposed')
  })

  const increaseInBatch = () => {
    batch(() => {
      count.value += 1
      count.value += 1
      count.value += 1
    })
  }

  return (
    <div className="space-y-6 pb-8">
      <section className="rounded-3xl border border-primary/20 bg-base-100 p-6 shadow-xl">
        <div className="badge badge-primary badge-outline">Rue core only</div>
        <h1 className="mt-3 text-3xl font-semibold">Rue 源码调试台</h1>
        <p className="mt-3 max-w-3xl leading-7 text-base-content/70">
          本页只触发 Rue 的挂载、响应式计算、侦听和 DOM 更新。先在 Rue 源码中打断点，再点击按钮。
        </p>

        <div className="mt-6 stats bg-base-200 shadow">
          <div className="stat">
            <div className="stat-title">count</div>
            <div className="stat-value text-primary">{count.value}</div>
          </div>
          <div className="stat">
            <div className="stat-title">computed × 2</div>
            <div className="stat-value text-secondary">{doubled.get()}</div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={() => (count.value += 1)}>
            +1：单次更新
          </button>
          <button className="btn btn-secondary" onClick={increaseInBatch}>
            +3：batch 更新
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => {
              count.value = 0
              traces.value = []
            }}
          >
            重置
          </button>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
        <article className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body text-sm leading-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="card-title">页面渲染到 HTML 的断点顺序</h2>
                <p className="mt-1 text-base-content/60">
                  调试模式会在每个阶段首次执行时自动暂停一次。
                </p>
              </div>
              <button className="btn btn-outline btn-sm" onClick={replayRueRenderBreakpoints}>
                从第 1 步重新调试
              </button>
            </div>
            <ol className="mt-4 space-y-3">
              {rueRenderStages.map(([id, title, file, detail, inspect], index) => (
                <li key={id} className="rounded-2xl border border-base-300 bg-base-200/50 p-3">
                  <div className="flex gap-3">
                    <span className="badge badge-primary badge-outline mt-0.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="font-semibold text-base-content">{title}</div>
                      <code className="text-xs text-primary">{file}</code>
                      <div className="text-base-content/65">{detail}</div>
                      <div className="mt-1 text-xs text-info">重点观察：{inspect}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </article>

        <article className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">触发记录</h2>
            <div className="mockup-code min-h-44 bg-neutral text-neutral-content">
              {traces.value.length === 0 ? (
                <pre data-prefix="$"><code>等待操作...</code></pre>
              ) : traces.value.map((item, index) => (
                <pre key={`${item}-${index}`} data-prefix={index === 0 ? '>' : ' '}>
                  <code>{item}</code>
                </pre>
              ))}
            </div>
          </div>
        </article>
      </section>

      <div className="alert alert-info">
        <span><code>@rue-js/rue/src/index.ts</code> 主要负责导出，核心实现位于 <code>@rue-js/runtime/src</code>。</span>
      </div>
    </div>
  )
}

export default RueSourceDebug
