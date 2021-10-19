<template>
  <div class="layout-basic-container">
    <NavigationNavBar />
    <NavigationMenuBar />
    <section class="section-container">
      <main class="main-content-box">
        <NavigationPageHeader />
        <div class="inner-content">
          <router-view />
        </div>
        <Settings />
      </main>
    </section>
  </div>
</template>

<script>
import NavigationMenuBar from '@/components/Navigation/MenuBar/index'
import NavigationNavBar from '@/components/Navigation/NavBar'
import NavigationPageHeader from '@/components/Navigation/PageHeader'
import Settings from '@/components/Layout/components/Settings'
export default {
  name: 'LayoutBasic',
  components: {
    NavigationMenuBar,
    NavigationNavBar,
    NavigationPageHeader,
    Settings
  }
}
</script>
<style lang="scss" scoped>
$headerHeight: 48px;
.layout-basic-container {
  min-height: 100%;
  display: flex;
  min-width: 100%;
  .section-container {
    display: flex;
    flex: auto;
    flex-direction: column;
    min-width: 0;
    background-color: #f0f2f5;
    .main-content-box {
      margin-top: $headerHeight;
      flex: auto;
      overflow: auto hidden;
      .inner-content {
        padding: 24px;
      }
    }
  }
}
</style>
