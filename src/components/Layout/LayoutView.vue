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

export default defineComponent({
  name: 'LayoutView',
  components: {
    NavigationNavBar,
    NavigationSideGoBack
  }
})

</script>

<style lang="scss" scoped>
</style>
