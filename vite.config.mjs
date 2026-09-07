import { defineConfig } from 'vite'
import VitePluginRue from '@rue-js/vite-plugin-rue'
import wasm from 'vite-plugin-wasm'
import tailwindcss from '@tailwindcss/vite'
import { createRequire } from 'node:module'
import { fileURLToPath, URL } from 'node:url'

const require = createRequire(import.meta.url)
const runtimeDomEntry = require.resolve('@rue-js/runtime/src/dom.ts')
const rueVersion = require('@rue-js/runtime/package.json').version
const rueEntry = fileURLToPath(new URL('./node_modules/@rue-js/rue/src/index.ts', import.meta.url))
const rueRuntimeEntry = fileURLToPath(
  new URL('./node_modules/@rue-js/runtime/src/index.ts', import.meta.url),
)

export default defineConfig(({ mode }) => {
  const isRueSourceDebug = mode === 'rue-debug'

  return {
    define: isRueSourceDebug
      ? {
          // Rue 源码依赖发布构建时注入的全局常量。
          __SSR__: 'true',
          __VERSION__: JSON.stringify(rueVersion),
        }
      : undefined,
    resolve: {
      alias: [
        { find: '@rue-js/runtime/dom', replacement: runtimeDomEntry },
        ...(isRueSourceDebug
          ? [
              { find: /^@rue-js\/rue$/, replacement: rueEntry },
              { find: /^@rue-js\/runtime$/, replacement: rueRuntimeEntry },
            ]
          : []),
      ],
      conditions: ['development', 'import', 'module', 'browser', 'default'],
      dedupe: ['@rue-js/rue', '@rue-js/runtime', '@rue-js/runtime-vapor'],
    },
    optimizeDeps: isRueSourceDebug
      ? {
          // 预打包会把源码合并进 .vite/deps，不利于逐文件打断点。
          exclude: [
            '@rue-js/rue',
            '@rue-js/runtime',
            '@rue-js/jsx-runtime',
            '@rue-js/jsx-dev-runtime',
            '@rue-js/router',
            '@rue-js/runtime-vapor',
            '@rue-js/runtime-vapor/reactive',
            '@rue-js/runtime-vapor/vapor',
            '@rue-js/runtime-vapor/protocol',
          ],
        }
      : undefined,
    server: {
      // 调试模式需要让浏览器和 VS Code 接受 node_modules 内的源码映射。
      sourcemapIgnoreList: isRueSourceDebug ? false : undefined,
    },
    build: {
      sourcemap: isRueSourceDebug,
    },
    plugins: [
      wasm(),
      tailwindcss(),
      VitePluginRue({
        include: ['/app/'],
        debug: isRueSourceDebug,
      }),
    ],
  }
})
