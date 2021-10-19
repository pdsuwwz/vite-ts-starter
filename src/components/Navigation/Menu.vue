<template>
  <div class="wrap-navigation-menu">
    <div class="wrap-menu">
      <div
        v-for="(menuItem, menuIndex) in menuList"
        :key="menuIndex"
        class="menu-item"
        :class="{
          active: menuActive === menuItem.mapActive
        }"
      >
        <img
          src="@/assets/svg/left.svg"
          alt=""
        >
        <div
          class="menu-content"
          @click="linkRouter(menuItem.mapActive)"
        >
          <IconFont :icon="menuItem.icon" />
          <span>
            {{ menuItem.name }}
          </span>
        </div>
        <img
          src="@/assets/svg/left.svg"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  getCurrentInstance
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useLocaleInject } from 'element-plus'

export default defineComponent({
  name: 'Menu',
  components: {},
  props: {},
  setup () {
    // Vuex store
    const store = useStore()
    const setupUseLocaleInject = useLocaleInject()

    // this
    const { ctx } = getCurrentInstance()

    const route = useRoute()
    const router = useRouter()

    const menuActive = computed(
      () => {
        console.log(route.name)
        return route.name
      }
    )

    const linkRouter = (routerName) => {
      router.push({
        name: routerName
      })
    }
    const menuList = computed(() => {
      return [
        {
          name: setupUseLocaleInject.t('base.hz'),
          icon: 'icon-xiangmuhuizong',
          mapActive: 'ProjectSummary'
        },
        {
          name: setupUseLocaleInject.t('base.xi'),
          icon: 'icon-xiangmuxinxi',
          mapActive: 'ProjectInformation'
        },
        {
          name: setupUseLocaleInject.t('base.gz'),
          icon: 'icon-gongzuodigao',
          mapActive: 'ProjectManuscript'
        }
      ]
    })

    return {
      menuList,
      menuActive,
      linkRouter
    }
  }
})
</script>

<style scoped lang="scss">
.wrap-navigation-menu {
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
  .wrap-menu {
    display: flex;
    .menu-item {
      color: #fff;
      &.active {
        color: #4273B2;
        .menu-content {
          background-color: #fff;
        }
        img {
          visibility: initial;
        }
      }
      width: 138px;
      height: 44px;
      line-height: 44px;
      display: flex;
      align-items: flex-end;
      .menu-content {
        cursor: pointer;
        width: 118px;
        text-align: center;
        font-weight: 500;
        border-radius: 12px 12px 0px 0px;
        span {
          padding-left: 4px;
        }
      }
      img {
        width: 10px;
          visibility: hidden;
      }
      img:last-child {
        transform: rotateY(180deg);
      }
    }
  }
}
</style>
