import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerAttributifyJsx,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons()
  ],
  transformers: [
    transformerDirectives(),
    transformerAttributifyJsx()
  ],
  theme: {
    colors: {
      primary: 'rgba(32, 48, 98, %alpha)',
      success: 'rgba(82, 196, 26, %alpha)',
      warning: 'rgba(250, 173, 20, %alpha)',
      danger: 'rgba(250, 85, 85, %alpha)',
      info: 'rgba(144, 147, 153, %alpha)'
    }
  },
  rules: [
    ['navbar-shadow', { 'box-shadow': '0 1px 4px rgb(0 21 41 / 8%)' }]
  ],
  shortcuts: {}
})
