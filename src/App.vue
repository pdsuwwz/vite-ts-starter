<script lang="ts">
import { defaultLanguageLocale } from '@/locales'


export default defineComponent({
  name: 'App',
  setup () {
    const store = useBaseStore()
    const route = useRoute()
    const router = useRouter()

    watch(
      () => route.params,
      () => {
        if (route.name === '404') return

        store.dispatch('UserAccount/setLanguage', {
          locale: route.params.locale || defaultLanguageLocale
        })
      }
    )

    return {
      ...useLanguage()
    }
  }
})
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
