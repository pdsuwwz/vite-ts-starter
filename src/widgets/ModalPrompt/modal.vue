<template>
  <el-dialog
    v-model="visible"
    v-bind="getDialogAttrs"
    class="modal-prompt-container"
    :before-close="closeAction"
    :width="'439px'"
    @closed="handleRealClosed()"
  >
    <template
      #title
    >
      <div
        class="modal-prompt-title"
      >
        <i
          class="message-icon"
          :class="getMessageIconClassName"
        ></i>
        <span class="message-text">{{ getDialogAttrs.title }}</span>
      </div>
    </template>
    <div
      class="modal-prompt-container__body"
    >
      <div class="modal-prompt__message">
        <p class="message-title">
          {{ getDialogAttrs.content }}
        </p>
      </div>
    </div>
    <template
      #footer
    >
      <div
        class="modal-prompt-container__footer"
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
/**
// 示例：

this.$ModalPrompt({
  title: '删除项目',
  content: '此操作将永久删除该项目，确认删除吗？',
  textConfirm: '删除',
  async onConfirm () {
    await sleep(1000)
  }
})

 */
export default {
  name: 'ModalPrompt',
  data () {
    return {
      visible: false,
      footer: {
        confirmLoading: false
      }
    }
  },
  computed: {
    getDialogAttrs () {
      return {
        ...this.$options.propsData
      }
    },
    getMessageIconClassName () {
      return `el-icon-${this.getDialogAttrs.icon}`
    },
    getFooterAction () {
      const { footer } = this.getDialogAttrs
      const cancel = Object.assign({
        label: this.getDialogAttrs.textClose,
        on: {
          click: this.handleCancel
        }
      }, footer?.cancel)
      const confirm = Object.assign({
        label: this.getDialogAttrs.textConfirm,
        attrs: {
          loading: this.footer.confirmLoading,
          type: this.getDialogAttrs.confirmType
        },
        on: {
          click: this.handleConfirm
        }
      }, footer?.confirm)
      const actionList = []

      !this.getDialogAttrs.hideCancel && actionList.push(cancel)
      !this.getDialogAttrs.hideConfirm && actionList.push(confirm)

      return actionList
    }
  },
  created () {
  },
  methods: {
    closeAction () {
      this.visible = false
    },
    handleCancel () {
      this.getDialogAttrs.onClose()
      this.visible = false
    },
    async handleConfirm () {
      this.footer.confirmLoading = true
      await this.getDialogAttrs.onConfirm()
      this.footer.confirmLoading = false
      this.visible = false
    },
    handleRealClosed () {
      document.body.removeChild(this.$el)
    }
  }
}
</script>

<style lang="scss">
.modal-prompt-container {
  user-select: none;
  :deep() .el-dialog {
    border-radius: 6px;
    .el-dialog__body {
      padding: 15px 20px 0px;
    }
    .el-dialog__footer {
      padding-top: 39px;
      padding-bottom: 10px;
    }
  }
  :deep() .el-dialog__header {
    padding-top: 18px;
    .el-dialog__title {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .modal-prompt-title {
    font-size: 21px;
    .message-icon {
      margin-right: 10px;
      // color: $--color-warning;
    }
    .message-text {
      font-size: 18px;
      font-weight: 500;
      color: #303133;
    }
    font-size: 21px;
  }
  .modal-prompt-container__body {
    display: flex;
    flex-direction: column;
    .modal-prompt__message {
      display: flex;
      align-items: flex-start;
      .message-title {
        color: #606266;
      }
    }
  }
  .modal-prompt-container__footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
