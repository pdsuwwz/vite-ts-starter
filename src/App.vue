<template>
  <el-config-provider :locale="lang">
    <router-view />
  </el-config-provider>
</template>

<script>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { computed, reactive, ref } from '@vue/reactivity'
import { useStore } from 'vuex'

import selfEn from './language/en'
import selfzhCn from './language/zhcn'
import { useRoute, useRouter } from 'vue-router'
import { watch } from '@vue/runtime-core'

const useLanguage = (store, route) => {
  const lang = computed(() => {
    let lang = null
    switch (store.state.UserAccount.lang) {
      case 'zh_CN':
        lang = {
          ...zhCn,
          ...selfzhCn
        }
        break
      case 'en':
        lang = {
          ...en,
          ...selfEn
        }
        break
    }
    return lang
  })

  return {
    lang
  }
}

export default {
  name: 'App',
  components: {
    ElConfigProvider
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    watch(
      () => route.params,
      () => {
        if (route.name === '404') return

        store.dispatch('UserAccount/setLanguage', {
          lang: route.params.lang || 'en'
        })
      }
    )

    return {
      ...useLanguage(store, route)
    }
  }
}
</script>

<style lang="sass">
@import '@/styles/index.scss'
</style>
