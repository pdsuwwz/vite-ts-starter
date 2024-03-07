<template>
  <ElConfigProvider
    :locale="currentLocaleLang"
  >
    <router-view />
  </ElConfigProvider>
</template>

<script lang="ts">

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
          locale: route.params.locale || 'en'
        })
      }
    )

    return {
      ...useLanguage()
    }
  }
})
</script>

<style lang="scss">
@use "@/styles/index.scss";
</style>
