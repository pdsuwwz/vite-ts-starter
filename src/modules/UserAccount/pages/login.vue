<script lang="ts">

import { ElMessage, useLocale } from 'element-plus'
import { Promotion } from '@element-plus/icons-vue'

import UserAccountContainerLayout from '@/modules/UserAccount/components/ContainerLayout.vue'

import UserAccountModule from '@/modules/UserAccount/store'
import Translations from '@/locales/Translations.vue'

import Cookie from 'js-cookie'

export default defineComponent({
  name: 'UserAccountLogin',
  components: {
    UserAccountContainerLayout,
    Promotion,
    Translations
  },
  setup () {
    const { proxy } = useCurrentInstance()

    const store = useBaseStore()
    const route = useRoute()
    const router = useRouter()

    const isLoading = ref(true)
    const inputErrorEmail = ref('')
    const inputErrorPassword = ref('')
    const formData = reactive({
      email: 'vite.admin@gmail.com',
      password: '123456'
    })

    const localeInject = useLocale()

    const configLogin = computed(() => {
      return {
        title: localeInject.t('login.hydl'),
        actionList: [
          {
            attrs: {
              type: 'primary',
              loading: isLoading.value,
              size: 'large'
            },
            text: localeInject.t('login.signin'),
            on: {
              click (refForm: any) {
                onSubmit(refForm)
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
                    message: localeInject.t('login.plsemail')
                  }), proxy.getValidatorRules('', 'blur', {
                    type: 'email',
                    message: localeInject.t('login.plscurrentemail')
                  })
                ]
              }
            },
            label: localeInject.t('login.email'),
            prefixIcon: h('span', {
              class: 'text-16px i-ic:baseline-mail-lock'
            }),
            placeholder: localeInject.t('login.plsemail')
          },
          {
            attrs: {
              prop: 'password',
              error: inputErrorPassword.value,
              rules () {
                return proxy.getRequiredRules({
                  trigger: 'change',
                  message: localeInject.t('login.plspwd')
                })
              }
            },
            link: {
              text: localeInject.t('login.fgtpwd'),
              click () {
                console.log(proxy, localeInject.t('login.fgtpwd'))
              }
            },
            type: 'password',
            label: localeInject.t('login.pwd'),
            prefixIcon: h('span', {
              class: 'text-16px i-ri:lock-password-fill'
            }),
            placeholder: localeInject.t('login.plspwd')
          }
        ]
      }
    })

    function setLoading (loading = false) {
      isLoading.value = loading
    }

    function onSubmit (refForm: any) {
      if (isLoading.value) return

      refForm.validate(async (valid: boolean) => {
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
        console.log('🚀', data)
        Cookie.set('token', data.user.token)
        router
          .replace(`/${ route.params.locale || '' }`)
          .then(() => {
            ElMessage.success({
              message: localeInject.t('login.loginSuccess')
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

<template>
  <div
    class="user-account-login"
    :class="[
      'bgimage-images-logo-background-jpg',
      'bg-cover bg-no-repeat bg-center'
    ]"
  >
    <div class="user-account-nav">
      <div class="nav-left">
        <div
          class="nav-logo"
          :class="[
            'bgimage-images-vue-svg',
            'bg-contain bg-no-repeat bg-center'
          ]"
        ></div>
        <div class="nav-circle"></div>
        <div class="nav-title">
          {{ _t('base.systemTitle') }}
        </div>
      </div>
      <div class="nav-right">
        <Translations dark />
      </div>
    </div>
    <div class="user-account-body">
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
          <el-icon>
            <Promotion />
          </el-icon>
        </template>
      </UserAccountContainerLayout>
    </div>
    <FooterCustom />
  </div>
</template>

<style lang="scss" scoped>
.user-account-login {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .user-account-nav {
    display: flex;
    justify-content: space-between;
    color: #484848;
    padding: 0 16px;
    box-shadow: 0 -3px 8px 3px #c6c6c6;

    // box-shadow: 0 1px 4px 3px rgb(0 21 41 / 8%);

    background-color: rgba(#fff, 10%);

    .nav-left,
    .nav-right {
      display: flex;
      height: 48px;
      align-items: center;
    }

    .nav-logo {
      width: 56px;
      height: 32px;
    }

    .nav-circle {
      width: 6px;
      height: 6px;
      margin: 0 10px;
      border-radius: 50%;
      background: #484848;
    }

    .nav-title {
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;
    }
  }

  .user-account-body {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

@media screen and (width <= 600px) {

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
