<template>
  <div
    class="side-logo-container"
  >
    <router-link
      :to="`/${$route.params.locale || ''}`"
    >
      <img
        class="side-logo-img"
        src="@/assets/images/vue.svg"
        alt="商标"
      >
      <h1 class="side-logo-title">
        {{ title }}
      </h1>
    </router-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useLocale } from 'element-plus'

export default defineComponent({
  name: 'NavigationSideLogo',
  setup () {
    const localeInject = useLocale()

    const title = computed(() => localeInject.t('base.systemTitle'))

    return {
      title
    }
  }
})
</script>
<style lang="scss" scoped>
.side-logo-container {
  position: relative;
  height: 100%;
  white-space: nowrap;

  & > a {
    display: flex;
    align-items: center;
    height: 100%;
    color: #303133;

    .side-logo-img {
      width: 40px;
    }

    .side-logo-title {
      height: 32px;
      line-height: 32px;
      font-size: 16px;
      font-weight: 600;
      margin-left: 12px;
    }
  }
}
</style>
