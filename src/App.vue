<template>
  <el-config-provider
    :locale="currentLocaleLang"
  >
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { ElConfigProvider } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { defineComponent, watch } from 'vue'

import useBaseStore from '@/hooks/useBaseStore'
import { useLanguage } from '@/hooks/useLanguage'

export default defineComponent({
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
      ...useLanguage()
    }
  }
})
</script>

<style lang="scss">
@use "@/styles/index.scss";
</style>
