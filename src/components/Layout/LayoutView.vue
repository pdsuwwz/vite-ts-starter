<template>
  <LayoutArea>
    <template #top>
      <NavigationNavBar
        :fixed="false"
      >
        <NavigationSideGoBack
          title="测试返回上一页面"
        />
      </NavigationNavBar>
    </template>
    <template #side>
      <LayoutSection
        has-divider
        :title="_t('manuscript.prt')"
      >
        <ul>
          <li>111</li>
          <li>222</li>
          <li>333</li>
        </ul>
      </LayoutSection>
    </template>
    <template #content>
      <router-view />
    </template>
  </LayoutArea>
</template>

<script>
import { defineComponent } from 'vue'

import NavigationSideGoBack from '@/components/Navigation/Side/SideGoBack.vue'
import NavigationNavBar from '@/components/Navigation/NavBar.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'LayoutView',
  components: {
    NavigationNavBar,
    NavigationSideGoBack
  },
  setup () {
    const router = useRouter()
    const store = useStore()

    return {
    }
  }
})

</script>

<style lang="scss" scoped>
</style>
