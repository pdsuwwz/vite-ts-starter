type EmptyObject = Record<string, never>
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<EmptyObject, EmptyObject, any>
  export default component
}
