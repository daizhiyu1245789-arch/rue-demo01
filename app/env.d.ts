/// <reference types="vite/client" />

declare const __SSR__: boolean

interface RuntimeVaporSharedBridge {
  getCurrentRenderOwner?(): unknown
}

declare var __rue_runtime_vapor_shared_bridge: RuntimeVaporSharedBridge | undefined
