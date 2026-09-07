# rue-demo01

This template should help get you started developing with Rue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Rue (Official)](https://marketplace.visualstudio.com/items?itemName=Rue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Rue.js devtools](https://chromewebstore.google.com/detail/ruejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Rue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/rue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

## 调试 Rue 源码

源码调试模式会把 `@rue-js/rue` 与 `@rue-js/runtime` 指向包内 TypeScript 源码，
同时关闭相关依赖的 Vite 预打包。

1. 使用 VS Code 直接打开 `rue-demo01` 目录。
2. 在终端执行 `pnpm dev:rue`。
3. 按 `F5`，选择“调试 Rue 源码（Chrome）”或“调试 Rue 源码（Edge）”。
4. 工程会按照“应用入口 → Runtime 挂载 → 组件执行 → Vapor setup → DOM 创建 →
   提交 HTML”的顺序自动暂停。按 `F5` 继续到下一阶段，按 `F11` 进入当前调用。
5. 浏览器进入 `#/debug-rue` 后，可以点击“从第 1 步重新调试”重新播放完整链路。

自动断点和对应的中文说明直接写在当前工程的 `node_modules/@rue-js/runtime` 与
`node_modules/@rue-js/runtime-vapor` 源码中；断点控制器只会在 `rue-debug` 模式的
`#/debug-rue` 页面启用，所以普通 `pnpm dev` 不会暂停。重新执行 `pnpm install`
或升级 Rue 后，这些位于 `node_modules` 的改动可能被覆盖。

`@rue-js/rue/src/index.ts` 主要是公共 API 门面，实际组件、挂载与 DOM 实现位于
`@rue-js/runtime/src`。`runtime-vapor` 的 npm 包只包含可读 JavaScript 构建产物；
SWC 插件是 Wasm 文件，不能通过浏览器 JavaScript 调试器单步进入。

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```
