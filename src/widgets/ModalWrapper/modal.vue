<template>
  <el-dialog
    v-model="visible"
    v-bind="getDialogAttrs"
    class="modal-wrapper-container"
    :class="{
      'no-footer': !isShowFooter
    }"
    :before-close="closeAction"
    @closed="handleRealClosed()"
  >
    <div
      class="modal-wrapper-container__body"
    >
      <div>
        {{ getDialogAttrs.content }}
      </div>
      <component
        :is="getComponent"
        v-model="getComponentAttributes"
      />
    </div>
    <template
      #footer
    >
      <div
        v-if="isShowFooter"
        class="modal-wrapper-container__footer"
      >
        <el-button
          v-for="(actionItem, index) in getFooterAction"
          :key="index"
          v-bind="actionItem.attrs"
          v-on="actionItem.on"
        >
          {{ actionItem.label }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import mitt from 'mitt'
const emitter = mitt()
export default {
  name: 'ModalWrapper',
  data () {
    return {
      visible: false,
      footer: {
        confirmLoading: false
      },
      // 注入组件的 props 数据
      componantData: {},
      // Footer Action 默认回调
      callbackList: {}
    }
  },
  computed: {
    getComponent () {
      const keys = Object.keys(this.$options.components)
      const name = keys[0]
      return name
    },
    getDialogAttrs () {
      return {
        ...this.$options.propsData
      }
    },
    isShowFooter () {
      return !this.getDialogAttrs.hideFooter
    },
    isFormization () {
      return this.getDialogAttrs.formization
    },
    getFooterAction () {
      const { footer } = this.getDialogAttrs
      const cancel = Object.assign({
        label: '取消',
        on: {
          click: this.handleCancel
        }
      }, footer?.cancel)
      const confirm = Object.assign({
        label: '确定',
        attrs: {
          loading: this.footer.confirmLoading,
          type: 'primary'
        },
        on: {
          click: this.handleConfirm
        }
      }, footer?.confirm)
      const actionList = []

      !this.getDialogAttrs.hideCancel && actionList.push(cancel)
      !this.getDialogAttrs.hideConfirm && actionList.push(confirm)

      return actionList
    },
    getComponentAttributes () {
      return this.componantData
    }
  },
  created () {
    this.setFooterStatusByFormization()
    emitter.on('modal.close', this.closeAction)
    emitter.on('modal.cancel', this.handleCancel)
    emitter.on('modal.confirm', this.handleConfirm)
  },
  methods: {
    async closeAction () {
      await this.callbackList.onClose()
      this.visible = false
    },
    async handleCancel () {
      await this.callbackList.onCancel()
      this.visible = false
    },
    async handleConfirm () {
      this.footer.confirmLoading = true
      await this.callbackList.onConfirm()
      this.visible = false
    },
    setFooterStatusByFormization () {
      this.isFormization &&
       (this.getDialogAttrs.hideFooter = true)
    },
    handleRealClosed () {
      document.body.removeChild(this.$el)
    }
  }
}
</script>

<style lang="scss">
.modal-wrapper-container {
  user-select: none;
  :deep() .el-dialog {
    border-radius: 6px;
  }
  &.no-footer {
    :deep() .el-dialog__body {
      padding-top: 15px;
      padding-bottom: 10px;
    }
  }
  :deep() .el-dialog__header {
    .el-dialog__title {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .modal-wrapper-container__body {
    display: flex;
    flex-direction: column;

  }
  .modal-wrapper-container__footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
