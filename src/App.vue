<template>
  <el-config-provider
    :locale="currentLocale"
  >
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { ElConfigProvider } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { computed, watch } from 'vue'
import { Store } from 'vuex'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

import selfEn from '@/locales/lang/en'
import selfZhHans from '@/locales/lang/zh-hans'
import useBaseStore from './hooks/useBaseStore'
import { IGlobalState } from '@/store'

const useLanguage = (store: Store<IGlobalState>) => {
  const currentLocale = computed(() => {
    let locale: any = null

    switch (store.state.UserAccount.locale) {
      case 'zh-hans':
        locale = {
          ...zhCn,
          ...selfZhHans
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
    const store = useBaseStore()
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
      ...useLanguage(store)
    }
  }
}
</script>

<style lang="scss">
@use "@/styles/index.scss";
</style>
