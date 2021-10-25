<template>
  <div class="project-form-container">
    <el-form
      ref="refForm"
      :model="formData"
      label-position="right"
      label-width="80px"
      size="large"
    >
      <el-form-item
        prop="name"
        label="项目名称"
        :rules="getRequiredRules({
          trigger: 'change',
          message: '请输入项目名称'
        })"
      >
        <el-input
          v-model="formData.name"
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
          v-model="formData.corpName"
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
          v-model="formData.notes"
          type="textarea"
          placeholder="请输入备注"
          maxlength="200"
          :autosize="{ minRows: 2 }"
          show-word-limit
        />
      </el-form-item>
      <el-form-item
        class="footer-button-list"
        size="small"
      >
        <el-button
          @click="handleCancel()"
        >
          取消
        </el-button>
        <el-button
          type="primary"
          :loading="isLoading"
          @click="onSubmit()"
        >
          确定
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, reactive, ref } from 'vue'
import { sleep } from '@/utils/request'
import ProjectModule from '@/modules/Project/store'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ProjectForm',
  emits: [
    'modal.close',
    'modal.confirm'
  ],
  setup () {
    const { proxy } = getCurrentInstance()
    const store = useStore()

    const isLoading = ref(false)
    const formData = reactive({
      name: '',
      corpName: '',
      notes: ''
    })

    function handleCancel () {
      proxy.$emit('modal.close')
    }
    function onSubmit () {
      proxy.$refs.refForm.validate(async (valid) => {
        if (!valid) return
        isLoading.value = true

        await sleep(1000)
        const { error, data } = await store.dispatch(ProjectModule.getAction('createProject'), formData)

        if (error) {
          isLoading.value = false
          return
        }

        await store.dispatch(ProjectModule.getAction('getProjectList'))
        proxy.$message({
          message: '创建成功',
          type: 'success'
        })
        proxy.$emit('modal.confirm')
      })
    }

    return {
      isLoading,
      formData,

      handleCancel,
      onSubmit
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
