# 源码阅读指南

入口是项目根目录的 RUE_SOURCE_GUIDE.html。它只保留页面结构和资源引用。

- reader.css：页面样式、左右面板高度及滚动边界。
- reader.js：渲染、复制和导航。
- data/：按主题拆分的源码快照（每份最多 15 个节点），definitions 文件保存完整函数。
- mount-explanations-*.ts：应用挂载的解读源文件。
- compile-explanations.ts：Rue.js、SWC 与 WebAssembly 编译交互的解读源文件。
- build-flow-explanations.mjs：根据源码节点生成其它主题的执行解读。
- build-minimal-implementations.mjs：根据源码节点生成每一步下面的最小手写实现。
- handwritten-implementations.js：按主题保存“手写完整实现”栏目，目前已补应用挂载。
- generated/：浏览器直接加载的解读产物和最小实现产物，请修改源数据后执行同步命令。

同步解读：

```sh
node source-guide/build-explanations.mjs
pnpm check:source-guide
```

资源使用有序 defer 脚本，同目录保留 source-guide 即可通过本地服务器或直接打开 HTML 阅读。使用浏览器原生滚动；没有阅读进度计算，也不保存或恢复滚动位置。复制和切换窗口不会触发滚动操作。

## 执行解读

mount 和 compile 保留手写解释；其它主题由 build-flow-explanations.mjs 根据节点源码、note、watch 与上下游节点生成右侧执行解读。

- lifecycle: 28 条执行解读
- cleanup: 36 条执行解读
- tracking: 21 条执行解读
- update: 31 条执行解读
- derived: 21 条执行解读
- domBinding: 12 条执行解读
- conditional: 19 条执行解读
- keyedList: 12 条执行解读
- componentPatch: 14 条执行解读
- router: 31 条执行解读
- context: 16 条执行解读
- errors: 15 条执行解读
- extensions: 16 条执行解读
- teleport: 16 条执行解读
- suspense: 20 条执行解读
- keepAlive: 21 条执行解读
- transition: 20 条执行解读
- ssr: 24 条执行解读

## 源码内标识注释

应用挂载流程已经在对应源码位置写入 [RUE-MOUNT-001] 到 [RUE-MOUNT-105]。编号和 RUE_SOURCE_GUIDE.html 的节点一一对应：

- [RUE-MOUNT-001] 对应 RUE_SOURCE_GUIDE.html#flow=mount&view=sequence&node=1
- [RUE-MOUNT-037] 对应 RUE_SOURCE_GUIDE.html#flow=mount&view=sequence&node=37
- [RUE-MOUNT-105] 对应 RUE_SOURCE_GUIDE.html#flow=mount&view=sequence&node=105

这些注释只用于源码阅读，不改变执行逻辑。后续如果更新 mount 节点，先同步 source-guide/data/mount-*.js，再重新运行标识脚本检查缺失编号。

