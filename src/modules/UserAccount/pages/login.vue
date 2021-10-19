<template>
  <div class="user-account-login">
    <div class="user-account-nav">
      <div class="nav-logo"></div>
      <div class="nav-circle"></div>
      <div class="nav-title">
        信永中和
      </div>
    </div>
    <UserAccountContainerLayout
      v-bind="configLogin"
      :form-data="formData"
      @on-submit="onSubmit"
    >
      <template
        #titleIcon
      >
        <!-- <img
        src="@/assets/images/vue.svg"
        alt=""
      > -->
        <i
          class="el-icon-s-opportunity"
        ></i>
      </template>
    </UserAccountContainerLayout>
  </div>
</template>

<script>

import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onMounted,
  reactive,
  ref
} from 'vue'

import UserAccountContainerLayout from '@/modules/UserAccount/components/ContainerLayout.vue'

import UserAccountModule from '@/modules/UserAccount/store'

import Cookie from 'js-cookie'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'UserAccountLogin',
  components: {
    UserAccountContainerLayout
  },
  setup () {
    const { proxy } = getCurrentInstance()
    const store = useStore()
    const router = useRouter()

    const isLoading = ref(true)
    const inputErrorEmail = ref('')
    const inputErrorPassword = ref('')
    const formData = reactive({
      email: 'consult@shinewing.com',
      password: 'shinewing'
    })

    const configLogin = computed(() => {
      return {
        title: '欢迎登录',
        actionList: [
          {
            attrs: {
              type: 'primary',
              loading: isLoading.value,
              size: 'large'
            },
            text: '登录',
            on: {
              click (refForm) {
                proxy.onSubmit(refForm)
              }
            }
          }
        ],
        formConfig: [
          {
            attrs: {
              prop: 'email',
              error: inputErrorEmail.value,
              rules () {
                return [
                  proxy.getRequiredRules({
                    trigger: 'change',
                    message: '请填写登录邮箱'
                  }), proxy.getValidatorRules('', 'blur', {
                    type: 'email',
                    message: '请输入正确的邮箱地址'
                  })
                ]
              }
            },
            label: '邮箱',
            prefixIcon: 'user-tie',
            placeholder: '请填写登录邮箱'
          },
          {
            attrs: {
              prop: 'password',
              error: inputErrorPassword.value,
              rules () {
                return proxy.getRequiredRules({
                  trigger: 'change',
                  message: '请填写密码'
                })
              }
            },
            link: {
              text: '忘记密码',
              click () {
                console.log(proxy, 'wo 忘记密码了。。。。')
              }
            },
            type: 'password',
            label: '密码',
            prefixIcon: 'lock',
            placeholder: '请填写密码'
          }
        ]
      }
    })

    function setLoading (loading = false) {
      isLoading.value = loading
    }

    function onSubmit (refForm) {
      if (isLoading.value) return

      refForm.validate(async valid => {
        if (!valid) return
        inputErrorEmail.value = ''
        inputErrorPassword.value = ''

        setLoading(true)
        const { error, data, msg } = await store.dispatch(UserAccountModule.getAction('login'), formData)
        if (error) {
          inputErrorEmail.value = ' '
          inputErrorPassword.value = msg
          setLoading(false)
          return
        }

        Cookie.set('token', data.user.token)
        Cookie.set('name', data.user.username)
        router
          .replace('/')
          .then(() => {
            proxy.$message({
              type: 'success',
              message: '登录成功'
            })
          })
          .catch(() => {})
      })
    }

    setLoading(true)
    onMounted(() => {
      nextTick(() => {
        setLoading(false)
      })
      setTimeout(() => {
        Cookie.remove('name')
      }, 4000)
    })

    return {
      isLoading,
      inputErrorEmail,
      inputErrorPassword,
      formData,
      configLogin,

      setLoading,
      onSubmit
    }
  }
})

</script>

<style lang="scss" scoped>
.user-account-login {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 100vh;
  background-color: #f0f2f5;
  background-image: url('@/assets/images/logo-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .user-account-nav {
    position: absolute;
    top: 24px;
    left: 44px;
    display: flex;
    align-items: center;
    color: #f0f2f5;
    .nav-logo {
      width: 56px;
      height: 32px;
      background-image: url('@/assets/images/vue.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
    .nav-circle {
      width: 6px;
      height: 6px;
      margin: 0 10px;
      border-radius: 50%;
      background: #f0f2f5;
    }
    .nav-title {
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;
    }
  }
}

@media screen and (max-width: 600px) {
  .user-account-container-layout {
    justify-content: center;
    .user-account-nav {
      left: 0;
      right: 0;
      margin: auto;
      justify-content: center;
    }
  }
}
</style>
