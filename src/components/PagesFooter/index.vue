<template>
  <div class="mian-footer">
    <!-- sw 图标 -->
    <img
      class="logo-mini"
      src="@/assets/svg/mini-logo.svg"
      alt="sw-logo"
    >
    <div class="footer-list-span">
      <span class="footer-list"> {{ _t('base.hp') }} </span>
      <span class="footer-list-line"></span>
      <span class="footer-list"> {{ _t('base.py') }} </span>
      <span class="footer-list-line"></span>
      <span class="footer-list"> {{ _t('base.te') }} </span>
      <span class="footer-ICP">
        {{ _t('base.bq') }}
      </span>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'PagesFooter',
  components: {},
  props: {},
  setup () {
  // Vuex store
    const store = useStore()

    // this
    const { ctx } = getCurrentInstance()
    console.log(ctx)

    return {
    }
  }
})
</script>

<style scoped lang="scss">
.mian-footer {
 height: 50px;
//  line-height: 50px;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 12px;
 color: #909399ff;
    span {
      display: inline-block;
    }
    .footer-list-line {
      width: 1px;
      height: 12px;
      margin: 0 14px;
      background-color: #c0c4ccff;
    }
    .footer-ICP {
      margin-left: 36px;
    }
    .logo-mini {
      width: 68px;
      height: 29px;
      margin-right: 74px;
      vertical-align: baseline;
    }
  }

</style>
