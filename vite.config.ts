import path from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml (html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        '<title>Vite TS Starter</title>'
      )
    }
  }
}

export default defineConfig({
  base: process.env.VITE_ROUTER_MODE === 'hash'
    ? ''
    : '/',
  plugins: [
    vue(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue\??/],
      imports: [
        'vue',
        'vue-router',
        'vuex',
        {
          vue: ['createVNode', 'render'],
          'vue-router': [
            'createRouter',
            'createWebHistory',
            'createWebHashHistory',
            'useRouter',
            'useRoute'
          ],
          uuid: [['v4', 'uuidv4']],
          // 全局使用 _.xxxx()
          'lodash-es': [
            // default imports
            ['*', '_'] // import { * as _ } from 'lodash-es',
          ]
        },
        // type import
        {
          from: 'vue',
          imports: [
            'App',
            'ComponentPublicInstance',
            'ComponentInternalInstance'
          ],
          type: true
        },
        {
          from: 'vue-router',
          imports: [
            'RouteRecordRaw'
          ],
          type: true
        }
      ],
      dirs: ['./src/hooks'],
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    }),
    htmlPlugin()
  ],
  // https://esbuild.github.io/api/#drop
  // https://github.com/vitejs/vite/discussions/7920#discussioncomment-2709119
  // https://www.google.com/search?q=vite+drop+console&sxsrf=ALiCzsa6WkY53gPLDvBTLVTfM7zaLJ1tjw%3A1662651252168&source=hp&ei=dAsaY9qpB4b70ATE85j4DQ&iflsig=AJiK0e8AAAAAYxoZhMtc6cBdw95TnMDcXKsgc3Hi7NqR&ved=0ahUKEwjas5LKwoX6AhWGPZQKHcQ5Bt8Q4dUDCAc&uact=5&oq=vite+drop+console&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEMsBOgUIABCABDoFCC4QgAQ6CwguEIAEEMcBENEDOgQIIxAnUABYkBVg0RZoAHAAeACAAYgDiAGXCpIBBTItMi4ymAEAoAEBoAEC&sclient=gws-wiz
  /**
   * Replace rollup-plugin-terser with drop of esbuild
   * 用 esbuild.drop 替换 rollup-plugin-terser
   */
  esbuild: {
    drop: [
      'console',
      'debugger'
    ]
  },
  // According to the need to open proxy
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
  define: {
    'process.env': process.env
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/styles/element-variables.scss' as *;`
      }
    }
  },
  test: {
    globals: true,
    dir: '__tests__',
    environment: 'jsdom',
    alias: [
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  }
})
