<template>
  <el-breadcrumb
    separator-class="el-icon-arrow-right"
    class="wrap-breadcrumb"
  >
    <el-breadcrumb-item
      :to="{ path: '/' }"
      class="wrap-index"
    >
      <img
        class="logo-img"
        src="@/assets/svg/user.svg"
        alt="user"
      >
      首页
    </el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="(breadCrumbItem, breadCrumbIndex) in breadCrumbList"
      :key="breadCrumbIndex"
      :to="breadCrumbItem"
      replace
    >
      {{ breadCrumbItem.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  watch
} from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const replaceParams = (params, path) => {
  Object.keys(params).forEach(paramsItem => {
    if (path.indexOf(`:${paramsItem}`) === -1) return
    path = path.replace(`:${paramsItem}`, params[paramsItem])
  })
  return path
}

export default defineComponent({
  name: 'BreadCrumbs',
  components: {},
  props: {},
  setup () {
    // Vuex store
    const store = useStore()

    const route = useRoute()

    // this
    // const { ctx } = getCurrentInstance()

    // watch route
    let breadCrumbList = reactive([])
    watch(
      () => route,
      () => {
        breadCrumbList = []
        route.matched.forEach(routeItem => {
          if (!routeItem.meta.title) return
          breadCrumbList.push(
            {
              title: routeItem.meta.title,
              path: replaceParams(route.params, routeItem.path)
            }
          )
        })
      },
      {
        immediate: true
      }
    )

    return {
      breadCrumbList
    }
  }
})
</script>

<style scoped lang="scss">
.wrap-breadcrumb {
  flex: 1;
  height: 18px;
  line-height: 18px;
  .wrap-index {
    img {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: #203062;
      vertical-align: top;
    }
  }
}
</style>
