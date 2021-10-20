<template>
  <el-config-provider :locale="currentLocale">
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
  const currentLocale = computed(() => {
    let locale = null
    switch (store.state.UserAccount.locale) {
      case 'zh_CN':
        locale = {
          ...zhCn,
          ...selfzhCn
        }
        break
      case 'en':
        locale = {
          ...en,
          ...selfEn
        }
        break
    }
    return locale
  })

  return {
    currentLocale
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
          locale: route.params.locale || 'en'
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
