<script lang="ts">
import NavigationSideGoBack from '@/components/Navigation/Side/SideGoBack.vue'
import NavigationNavBar from '@/components/Navigation/NavBar.vue'

export default defineComponent({
  name: 'LayoutView',
  components: {
    NavigationNavBar,
    NavigationSideGoBack
  },
  setup () {
    const router = useRouter()
    const store = useBaseStore()

    return {
    }
  }
})

</script>

<template>
  <LayoutArea>
    <template #top>
      <NavigationNavBar
        :fixed="false"
      >
        <NavigationSideGoBack
          :title="_t('base.goback')"
        />
      </NavigationNavBar>
    </template>
    <template #side>
      <LayoutSection
        has-divider
        :title="_t('result.title')"
      >
        <ul>
          <li>Test Menu 这里放菜单1</li>
          <li>Test Menu 这里放菜单2</li>
          <li>Test Menu 这里放菜单3</li>
        </ul>
      </LayoutSection>
    </template>
    <template #content>
      <router-view />
    </template>
  </LayoutArea>
</template>

<style lang="scss" scoped>
</style>
