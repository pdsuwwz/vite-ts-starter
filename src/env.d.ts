/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_BASE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
