<template>
  <div
    class="change-password"
  >
    <el-form
      ref="dialogFormRef"
      :rules="dialogFormRules"
      :model="modelValue"
      label-position="top"
    >
      <el-form-item
        :label="_t('base.oldpa')"
        prop="inputOldPassword"
      >
        <el-input
          v-model="modelValue.inputOldPassword"
          type="password"
          :placeholder="_t('base.inpu')"
          class="dialog-input"
        />
      </el-form-item>
      <el-form-item
        :label="_t('base.newps')"
        prop="inputNewPassword"
      >
        <el-input
          v-model="modelValue.inputNewPassword"
          :placeholder="_t('base.inpu')"
          type="password"
          class="dialog-input"
        />
      </el-form-item>
      <el-form-item
        :label="_t('base.repa')"
        prop="inputRePassword"
      >
        <el-input
          v-model="modelValue.inputRePassword"
          :placeholder="_t('base.inpu')"
          type="password"
          class="dialog-input"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  getCurrentInstance
} from 'vue'
import { useStore } from 'vuex'
import { useLocaleInject } from 'element-plus'

export default defineComponent({
  name: 'ChangePassword',
  components: {},
  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup (props, { attrs }) {
  // Vuex store
    const store = useStore()

    const value = ref(null)
    const { proxy } = getCurrentInstance()

    const setupUseLocaleInject = useLocaleInject()

    const dialogFormRef = ref(null)
    // 新密码校验规则
    const validateNewPass = (rule, value, callback) => {
      console.log('inputNewPassword', proxy.modelValue.inputNewPassword)
      console.log('rule = ', value)

      if (value === '' || value === undefined) {
        callback(new Error(setupUseLocaleInject.t('base.plnew')))
      } else if (value.length < 6 && value.length >= 0) {
        callback(new Error(setupUseLocaleInject.t('base.nptip')))
      } else {
        callback()
      }
    }
    // 再次输入新密码校验规则
    const validateRePass = (rule, value, callback) => {
      console.log('inputNewPassword', proxy.modelValue.inputNewPassword)
      console.log('reInput ', value)

      if (value === '' || value === undefined) {
        callback(new Error(setupUseLocaleInject.t('base.plreps')))
      } else if (value !== proxy.modelValue.inputNewPassword) {
        callback(new Error(setupUseLocaleInject.t('base.nops')))
      } else {
        callback()
      }
    }

    const dialogFormRules = reactive({
      inputOldPassword: [{ required: true, message: setupUseLocaleInject.t('base.plop'), trigger: 'blur' }],
      inputNewPassword: [{ validator: validateNewPass, trigger: 'blur' }],
      inputRePassword: [{ validator: validateRePass, trigger: 'blur' }]
    })

    const validationRules = async () => {
      return new Promise((resolve) => {
        dialogFormRef.value.validate(async (valid) => {
          if (valid) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
      })
    }

    return {
      dialogFormRef,
      dialogFormRules,
      validationRules,
      ...attrs.modelValue
    }
  }
})
</script>

<style scoped lang="scss">
.ChangePassword {

    :deep() {
      .el-form-item {
        margin-bottom: 0;
      }
        .el-form-item__label{
          padding: 0 0 8px 0!important;
      }
      .dialog-input {
        .el-textarea__inner {
          height: 64px;
          padding: 8px;
        }
        .el-textarea__inner:focus {
          outline: none;
          border-color: #DCDFE6;;
        }
      }
      .el-form-item__error {
        padding-top: 6px;
      }
    }
  }

</style>
