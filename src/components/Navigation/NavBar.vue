<template>
  <!-- :to="`/${$store.state.UserAccount.lang}/`" -->
  <router-link
    :to="`/${$route.params.lang || ''}`"
    class="wrap-navbar"
  >
    <img
      v-if="!adminLogoInfo"
      class="logo-img"
      src="@/assets/svg/upro-white.svg"
      alt="LOGO"
    >
    <img
      v-else
      class="logo-img"
      src="@/assets/svg/upro.svg"
      alt="LOGO"
    >
    <!-- <h1
      v-if="!adminLogoInfo"
      class="logo-title"
      :class="{
        adminLogoTitle: adminLogoInfo
      }"
    >
      {{ _t('base.pns') }}
    </h1> -->
    <!-- <div
      v-if="adminLogoInfo"
      class="admin-title"
    >
      <span class="admin-logo-line">
      </span>
      <h1
        class="admin-title-manage"
      >
        管理端
      </h1>
    </div> -->
  </router-link>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'NavBar',
  components: {},
  props: {
    logoIcon: {
      type: Boolean,
      default: false
    },
    logoTitle: {
      type: Boolean,
      default: false
    },
    adminLogoInfo: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    // Vuex store
    const store = useStore()

    // this
    const { ctx } = getCurrentInstance()

    return {
    }
  }
})
</script>

<style scoped lang="scss">
.wrap-navbar {
  display: flex;
  line-height: 48px;
  .logo-img {
    width: 67px;
    height: 40px;
  }
  .logo-title {
    font-size: 12px;
    padding-left: 16px;
    color: #fff;
  }
    .adminLogoTitle {
      font-size: 14px;
      padding-left: 16px;
      color: #303133;
    }
  .admin-title {
    display: flex;
    align-items: center;
    color: #303133;

  .admin-logo-line {
    width: 1px;
    height: 14px;
    margin: 0 8px;
    background: #DCDFE6;
  }
  .admin-title-manage {
    font-size: 14px;
  }
  }
}
</style>
