<template>
  <el-dialog
    v-model="visible"
    :title="title"
    :width="dialogWidth"
    :custom-class="getDialogClassName"
    v-bind="$attrs"
    @closed="handleRealClosed"
  >
    <template
      #title
    >
      <IconFont
        v-if="headerIcon"
        :icon="headerIcon"
        class="modal-header__icon"
      />
      <span
        class="modal-header__title"
      >{{ title }}</span>
      <span
        v-if="headerDescText"
        class="header-desc"
        :style="{
          paddingLeft: '16px',
          color: '#606266'
        }"
      >
        <i
          class="el-icon-warning"
          :style="{
            paddingRight: '6px',
          }"
        ></i>
        <span>{{ headerDescText }}</span>
      </span>
    </template>
    <div
      v-loading="fullLoading"
      class="modal-container__body"
    >
      <component
        :is="getComponent"
        ref="refComponent"
        v-model="componantData"
        class="modal-container__component"
      />
      <div class="modal-container__footer">
        <el-button
          plain
          round
          @click="handleCancel()"
        >
          取消
        </el-button>
        <el-button
          type="primary"
          round
          @click="handleConfirm()"
        >
          {{ confirmText || '确定' }}
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  ref,
  computed
} from 'vue'

export default defineComponent({
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: ''
    },
    headerDescText: {
      type: String,
      default: ''
    },
    headerIcon: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: ''
    },
    dialogWidth: {
      type: String,
      default: '500px'
    },
    disabledConfirmButton: {
      type: Boolean,
      default: false
    },
    componantData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  setup (props, { attrs }) {
    const { proxy } = getCurrentInstance()
    const visible = ref(false)

    const getDialogClassName = computed(() => {
      const classNames = 'modal-wrapper-containers-dialog'
      return classNames
    })

    const getComponent = computed(() => {
      const keys = Object.keys(attrs.components)
      const name = keys[0]
      return name
    })

    const refComponent = ref(null)
    const handleCancel = () => {
      visible.value = false
    }
    const handleConfirm = async () => {
      const instance = refComponent.value
      try {
        await attrs.onConfirm(instance, proxy)
        visible.value = false
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.dir(error)
        }
      }
    }

    const handleRealClosed = () => {
      proxy.$.vnode.destroy()
    }

    const fullLoading = ref(false)

    return {
      visible,
      getDialogClassName,
      getComponent,
      fullLoading,
      refComponent,
      handleCancel,
      handleConfirm,

      handleRealClosed
    }
  }
})
</script>

<style lang="scss" scoped>
:deep() {
  .modal-container__component {
    padding: 24px;
    .el-textarea__inner,
    .el-input__inner  {
      padding: 8px;
    }
  }
  .modal-container__footer {
      height: 54px;
      line-height: 54px;
      text-align: right;
      padding-right: 24px;
      border-top: 1px solid #DCDFE6FF;
  }
}
</style>
<style lang="scss">
.modal-wrapper-containers-dialog {
  width: 500px;
  border-radius: 8px;
  .el-dialog__header {
    height: 54px;
    border-bottom: 1px solid #DCDFE6FF;
    .modal-header__icon {
      width: 20px;
      height: 20px;
    }
    .modal-header__title {
      margin-left: 8px;
      font-size: 18px;
      color: #303133;
    }
  }
  .el-dialog__body {
    padding: 0;
  }
}
</style>
