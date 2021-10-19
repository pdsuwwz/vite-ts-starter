<template>
  <header
    class="wrap-navigation"
    :style="{
      height
    }"
  >
    <div class="navigation-content">
      <NavBar :admin-logo-info="adminUserInfos" />
      <slot name="content"></slot>
      <template
        v-if="false"
      >
        <el-dropdown
          v-if="!isIndex"
          trigger="click"
          class="wrap-project-name"
        >
          <div class="el-dropdown-link">
            <span class="el-dropdown-target">
              这是一个不知道叫啥的知道叫啥的知道叫啥的项目名字
            </span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>
                双皮奶
              </el-dropdown-item>
              <el-dropdown-item divided>
                蚵仔煎
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
      <div style="margin-left: 20px;"></div>
      <Tooltip
        v-if="!isIndex"
        placement="bottom"
        :enterable="false"
        :content="projectInfo.projectName"
      >
        <div
          class="project-info-name"
          @click="handleToSummary()"
        >
          {{ projectInfo.projectName }}
        </div>
      </Tooltip>
      <Menu v-if="!isIndex" />
      <Operation :admin-user-zn="adminUserInfos" />
      <UserAccount :admin-user-info="adminUserInfos" />
    </div>
    <slot></slot>
  </header>
</template>

<script>
import {
  computed,
  defineComponent,
  getCurrentInstance
} from 'vue'
import { useStore } from 'vuex'
import NavBar from '@/components/Navigation/NavBar.vue'
import Menu from '@/components/Navigation/Menu.vue'
import UserAccount from '@/components/Navigation/UserAccount.vue'
import Operation from '@/components/Navigation/Operation.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Navigation',
  components: {
    NavBar,
    Menu,
    UserAccount,
    Operation
  },
  props: {
    height: {
      type: String,
      default: '56px'
    },
    isIndex: {
      type: Boolean,
      default: false
    },
    adminUserInfos: {
      type: Boolean,
      default: false
    }

  },
  setup (props, context) {
    const store = useStore()
    const router = useRouter()
    const projectInfo = computed(() => store.state.Information.currentProjectInfo)

    const handleToSummary = () => {
      router.push({
        name: 'ProjectSummary'
      })
    }
    return {
      projectInfo,
      handleToSummary
    }
  }
})
</script>

<style scoped lang="scss">
.wrap-navigation {
  min-width: 1230px;
  padding: 0px 24px;
  background: linear-gradient(90deg, #203062 0%, #203062 64%, #FF6400 100%);
  .navigation-content {
    background-image: url("@/assets/images/header-bg.png");
    background-size: 1150px;
    background-repeat: no-repeat;
    background-position-x: center;
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    position: relative;
    &:deep() {
      .wrap-project-name.el-dropdown {
        padding-left: 20px;
        .el-dropdown-link {
          display: flex;
          .el-dropdown-target {
            max-width: 220px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
    }
  }
  .project-info-name {
    color: #fff;
    max-width: 211px;
    cursor: pointer;
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
  }
}
</style>
