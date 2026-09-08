# 源码阅读指南

入口是项目根目录的 RUE_SOURCE_GUIDE.html。它只保留页面结构和资源引用。

- reader.css：页面样式、左右面板高度及滚动边界。
- reader.js：渲染、复制和导航。
- data/：按主题拆分的源码快照（每份最多 15 个节点），definitions 文件保存完整函数。
- mount-explanations-*.ts：应用挂载的解读源文件。
- generated/：浏览器直接加载的解读产物，请修改上面的 TS 源文件后执行同步命令。

同步解读：

```sh
node source-guide/build-explanations.mjs
pnpm check:source-guide
```

资源使用有序 defer 脚本，同目录保留 source-guide 即可通过本地服务器或直接打开 HTML 阅读。使用浏览器原生滚动；没有阅读进度计算，也不保存或恢复滚动位置。复制和切换窗口不会触发滚动操作。
