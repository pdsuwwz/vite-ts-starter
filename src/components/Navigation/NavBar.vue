<script lang="ts">
import Translations from '@/locales/Translations.vue'
import NavigationSideAction from '@/components/Navigation/Side/SideAction.vue'
import NavigationAvatar from '@/components/Navigation/Avatar.vue'

export default defineComponent({
  name: 'NavigationNavBar',
  components: {
    Translations,
    NavigationSideAction,
    NavigationAvatar
  },
  props: {
    fixed: {
      type: Boolean,
      default: true
    }
  }
})
</script>

<template>
  <div>
    <header
      class="navigation-navbar-header-container"
      :class="{
        'fixed-header': fixed
      }"
    >
      <div class="navbar-header-box">
        <slot></slot>
        <div style="flex: 1;"></div>
        <NavigationSideAction />
        <NavigationAvatar />
        <Translations dark />
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>

$headerHeight: 48px;

.navigation-navbar-header-container {
  height: $headerHeight;
  line-height: $headerHeight;
  box-shadow: 0 1px 4px rgba(#001529, 0.08);

  .navbar-header-box {
    display: flex;
    height: 100%;
    padding: 0 16px;
    background-color: #fff;
  }

  &.fixed-header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }
}
</style>
