import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { terser } from 'rollup-plugin-terser'
const path = require('path')

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml (html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        '<title>Vite Starter</title>'
      )
    }
  }
}
export default defineConfig({
  plugins: [
    vue(),
    htmlPlugin(),
    terser(
      {
        compress: {
          drop_console: true
        }
      }
    )
  ],
  // API 代理，如果需要请打开
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://172.xx.xxx.xx/xxxxxxx/api',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/styles/element-variables.scss';"
      }
    }
  }
})
