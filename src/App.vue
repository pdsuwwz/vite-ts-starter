<script lang="ts" setup>
import { defaultLanguageLocale } from '@/locales'
const store = useBaseStore()
const route = useRoute()
const router = useRouter()

const { currentLocaleLang } = useLanguage()

watch(
  () => route.params,
  () => {
    if (route.name === '404') return

    store.dispatch('UserAccount/setLanguage', {
      locale: route.params.locale || defaultLanguageLocale
    })
  }
)
</script>

<template>
  <ElConfigProvider
    :locale="currentLocaleLang"
  >
    <router-view />
  </ElConfigProvider>
</template>

<style lang="scss">
@use "@/styles/index";
</style>
