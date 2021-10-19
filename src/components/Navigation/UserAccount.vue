<template>
  <div class="wrap-user-account">
    <!-- <img
      class="logo-img"
      src="@/assets/svg/user.svg"
      alt="user"
    > -->
    <IconFont
      icon="icon-user"
      class="user-icon-account"
      :style="[adminUserInfo ? 'color: #303133' : '']"
    />
    <el-dropdown
      trigger="click"
      class="wrap-user-info"
      :style="[adminUserInfo ? 'color: #303133' : '']"
    >
      <span class="el-dropdown-link">
        {{ userInfo.username }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item class="wrap-user">
            <h1>{{ userInfo.username }}</h1>
            <p>{{ userInfo.email }}</p>
          </el-dropdown-item>
          <el-dropdown-item
            divided
            @click="changePassword"
          >
            {{ _t('base.chpa') }}
          </el-dropdown-item>
          <el-dropdown-item
            divided
            class="wrap-logout"
            @click="handleLogout"
          >
            {{ _t('base.exit') }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  getCurrentInstance,
  reactive,
  ref
} from 'vue'
import { useStore } from 'vuex'

import Cookie from 'js-cookie'
import { useRoute, useRouter } from 'vue-router'
import { ElMessageBox, ElMessage, useLocaleInject, ElLoading } from 'element-plus'
import ChangePassword from '@/components/Navigation/ChangePassword.vue'

// user
const useUserInfo = (store, router) => {
  const userInfo = computed(() => store.state.UserAccount.userInfo)

  return {
    userInfo
  }
}

const useLogout = (store, router, route) => {
  const handleLogout = async () => {
    console.log('退出')
    // const { error } = await store.dispatch(
    //   'UserAccount/setUserLogout'
    // )
    Cookie.remove('token')
    Cookie.remove('name')

    window.location.href = '/' + route.params.lang + '/login'
  }
  return {
    handleLogout
  }
}

const useChangePassword = (store, proxy, route) => {
  const setupUseLocaleInject = useLocaleInject()

  const changePassword = () => {
    console.log('changePassword')
    const data = reactive({
      inputOldPassword: '',
      inputNewPassword: ''
    })
    proxy.$ModalDialog({
      title: setupUseLocaleInject.t('base.chpa'),
      renderComponent: {
        data,
        component: ChangePassword
      },
      onConfirm: async (instance) => {
        const isValid = await instance.validationRules()
        if (isValid) {
          const { error } = await store.dispatch('UserAccount/changePassword',
            {
              oldpwd: data.inputOldPassword,
              newpwd: data.inputNewPassword
            })
          if (!error) {
            ElLoading.service()
            ElMessage.success(setupUseLocaleInject.t('base.mosc'))
            setTimeout(() => {
              window.location.href = '/' + route.params.lang + '/login'
            }, 1000)
          }
          return new Promise((resolve) => {
            if (!error) {
              resolve()
            }
          })
        } else {
          return Promise.reject(new Error('error'))
        }
      }
    })
  }

  return {
    changePassword

  }
}

export default defineComponent({
  name: 'UserAccount',
  components: {},
  props: {
    adminUserInfo: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    // Vuex store
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const { proxy } = getCurrentInstance()

    // this
    const { ctx } = getCurrentInstance()

    return {
      ...useUserInfo(store, router),
      ...useLogout(store, router, route),
      ...useChangePassword(store, proxy, route)
    }
  }
})
</script>

<style scoped lang="scss">
.wrap-user-account {
  min-width: 140px;
  display: flex;
  color: #fff;
  align-items: center;
  // .logo-img {
  //   width: 12px;
  //   height: 12px;
  //   color: #fff;
  // }
  .user-icon-account {
    width: 18px;
    height: 18px;
    color: #fff;
  }
  :deep() {
    .wrap-user-info {
      padding-left: 2px;
      color: #fff;
    }
  }
  .wrap-user-info {
    .el-dropdown-link {
      cursor: pointer;
    }
  }
}
</style>
