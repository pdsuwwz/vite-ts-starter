<template>
  <div class="project-form-container">
    <el-form
      ref="refForm"
      :model="modelValue"
      label-position="right"
      label-width="145px"
    >
      <el-form-item
        prop="name"
        :label="_t('project.name')"
        :rules="getRequiredRules({
          trigger: 'change',
          message: _t('base.pleaseInput')
        })"
      >
        <el-input
          v-model="modelValue.name"
          maxlength="30"
          show-word-limit
          :placeholder="_t('project.name')"
        />
      </el-form-item>
      <el-form-item
        prop="corpName"
        :label="_t('project.corpName')"
        :rules="getRequiredRules({
          trigger: 'change',
          message: _t('base.pleaseInput')
        })"
      >
        <el-input
          v-model="modelValue.corpName"
          maxlength="30"
          show-word-limit
          :placeholder="_t('project.corpName')"
        />
      </el-form-item>
      <el-form-item
        prop="notes"
        :label="_t('project.notes')"
      >
        <el-input
          v-model="modelValue.notes"
          type="textarea"
          :placeholder="_t('project.notes')"
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
import { defineComponent, ref } from 'vue'
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

    console.log(props.modelValue)

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
