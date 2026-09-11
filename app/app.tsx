import { type FC } from '@rue-js/rue'
import { RouterView } from '@rue-js/router'
import SiteLayout from './pages/components/Layout'

/*
 * [RUE-MOUNT-064] 应用挂载 · 步骤 64：RootApp(props)：执行业务根组件
 * 对应指南：RUE_SOURCE_GUIDE.html#flow=mount&view=sequence&node=64
 * 所在阶段：D · 根容器 → 组件调用 → RootApp；节点类型：业务调用。
 *   1. 浏览器执行的是 Vite/Rue 编译后的模块，源 TSX 与实际执行的 helper 调用需要通过源码映射对应。
 *   2. RootApp 返回的 JSX 经编译参与创建 Vapor 描述或相应运行时输入，并不等于这里就完成了 #app 的 DOM 提交。
 *   3. SiteLayout、RouterView 的后续子树取决于组件实现、路由状态及编译产物，不能仅凭这几行 TSX 推断固定的全部 DOM 调用。
 * 执行结果：业务组件返回其渲染描述，先回到根包装函数，再由 component.js 的 value 接住。
 * 衔接说明：此处展示原始 TSX。浏览器执行的是编译后的组件；JSX 经编译创建 Vapor 描述。RootApp 包含 SiteLayout 和 RouterView，业务子树随路由变化。
 * 断点观察：同时看源码映射位置与实际返回值形态；区分 JSX 源码、编译后 setup 和真实 DOM。
 * [RUE-MOUNT-076] 应用挂载 · 步骤 76：编译 setup：递归执行 SiteLayout / RouterView 等业务子树
 * 对应指南：RUE_SOURCE_GUIDE.html#flow=mount&view=sequence&node=76
 * 所在阶段：E · 返回值为 Vapor：setup 执行与子树返回；节点类型：业务递归。
 *   1. RootApp 的业务结构包含 SiteLayout 和 RouterView。生成代码会通过相应 helper 创建节点、设置属性或事件，并处理子组件。
 *   2. 子组件需要挂载时会再次进入组件或 Vapor 挂载流程，形成递归，而不是从根入口重新运行整个 main.ts。
 *   3. 同步子调用返回后，当前 setup 才能结束。懒路由或 Promise 完成后的后续回调属于新的异步继续点。
 * 执行结果：这一段只说明源码明确存在的业务子树边界；具体 DOM helper 的逐条顺序需要结合实际编译模块与当时路由。
 * 衔接说明：此处是随页面而变的递归调用段，不伪造一个固定的 DOM helper 顺序。子组件会再次经过组件/挂载入口；它们的同步工作结束后才返回当前 setup。懒路由 Promise 的后续回调属于另一条执行线。
 * 断点观察：在生成 setup 内观察实际调用栈、当前路由和返回节点，不要将这几行原始 TSX 当作完整生成代码。
 */
const RootApp: FC = () => (
  <SiteLayout>
    <RouterView />
  </SiteLayout>
)

export default RootApp
