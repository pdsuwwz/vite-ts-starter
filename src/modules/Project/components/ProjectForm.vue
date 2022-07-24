<template>
  <div class="project-form-container">
    <el-form
      ref="refForm"
      :model="modelValue"
      label-position="right"
      label-width="120px"
    >
      <el-form-item
        prop="name"
        :label="_t('project.name')"
        :rules="getRequiredRules({
          trigger: 'change',
          message: '请输入项目名称'
        })"
      >
        <el-input
          v-model="modelValue.name"
          maxlength="30"
          show-word-limit
          placeholder="请输入项目名称"
        />
      </el-form-item>
      <el-form-item
        prop="corpName"
        label="公司名称"
        :rules="getRequiredRules({
          trigger: 'change',
          message: '请输入公司名称'
        })"
      >
        <el-input
          v-model="modelValue.corpName"
          maxlength="30"
          show-word-limit
          placeholder="请输入公司名称"
        />
      </el-form-item>
      <el-form-item
        prop="notes"
        label="备注"
      >
        <el-input
          v-model="modelValue.notes"
          type="textarea"
          placeholder="请输入备注"
          maxlength="200"
          :autosize="{ minRows: 2 }"
          show-word-limit
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import useCurrentInstance from '@/hooks/useCurrentInstance'
import { defineComponent, getCurrentInstance, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ProjectForm',
  props: {
    modelValue: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  setup (props) {
    const { proxy } = useCurrentInstance()
    const store = useStore()

    const refForm = ref()

    const validateRules = async () => {
      return new Promise((resolve) => {
        refForm.value.validate((valid: boolean) => {
          if (valid) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
      })
    }

    return {
      refForm,
      validateRules
    }
  }
})
</script>

<style lang="scss" scoped>
.project-form-container {

  .footer-button-list {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
