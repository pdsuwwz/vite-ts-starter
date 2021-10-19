<template>
  <el-dialog
    v-model="visible"
    :title="title"
    :width="dialogWidth"
    :custom-class="getDialogClassName"
    v-bind="$attrs"
    @closed="handleClosed"
  >
    <template
      #title
    >
      <IconFont
        v-if="headreIcon"
        :icon="headreIcon"
        class="admin-back-icon"
      />
      <span
        class="admin-back-title"
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
        v-model="getComponentAttributes"
        class="modal-container__component"
      />
      <div class="modal-container__footer">
        <template v-if="!isPower">
          <el-button
            plain
            round
            class="dark-cancel-button"
            @click="clickCancle"
          >
            {{ _t('base.gb') }}
          </el-button>
        </template>
        <template v-if="isDark && isPower">
          <el-button
            plain
            round
            class="dark-cancel-button"
            @click="clickCancle"
          >
            {{ _t('base.ce') }}
          </el-button>
          <el-button
            type="primary"
            class="dark-button"
            round
            @click="clickConfirm"
          >
            {{ confirmText ? confirmText : _t('base.suc') }}
          </el-button>
        </template>
        <template v-else-if="!isDark && isPower">
          <el-button
            class="dialog-confirm-cancle"
            plain
            @click="clickCancle"
          >
            {{ _t('base.ce') }}
          </el-button>
          <el-button
            :type="backTemplate ? 'danger' : 'primary' && publicTemplate ? '' : 'primary'"
            :class="{ publicColor: publicTemplate }"
            round
            :disabled="disabledConfirmButton"
            @click="clickConfirm"
          >
            {{ confirmText ? confirmText : _t('base.suc') }}
          </el-button>
        </template>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  ref,
  computed,
  onMounted,
  nextTick
} from 'vue'
import { useStore } from 'vuex'

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
    headreIcon: {
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
    backTemplate: {
      type: Boolean,
      default: false
    },
    isDark: {
      type: Boolean,
      default: false
    },
    isPower: {
      type: Boolean,
      default: true
    },
    publicTemplate: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { attrs }) {
    const { proxy } = getCurrentInstance()
    const store = useStore()

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

    const getComponentAttributes = attrs.componantData

    const refComponent = ref(null)

    const clickCancle = () => {
      visible.value = false
    }

    const fullLoading = ref(false)
    const clickConfirm = async () => {
      const instance = refComponent.value
      try {
        await attrs.onConfirm(instance, proxy)
        visible.value = false
      } catch (error) {
        // console.dir(error)
      }
    }

    const handleClosed = () => {
      proxy.$.vnode.destroy()
    }

    return {
      visible,
      getDialogClassName,
      getComponent,
      fullLoading,
      refComponent,
      getComponentAttributes,
      clickCancle,
      clickConfirm,

      handleClosed
    }
  }
})
</script>

<style scoped lang="scss">
  :deep() {
      .modal-container__component {
        padding: 24px;
        .el-textarea__inner,.el-input__inner  {
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
    .admin-back-icon {
      width: 20px;
      height: 20px;
    }
    .admin-back-title {
      margin-left: 8px;
      font-size: 18px;
      color: #303133;
    }
  }
  .el-dialog__body {
    padding: 0;
  }
  .dark-cancel-button {
    color:#203062 !important;
    border: 1px solid #203062 !important;
  }
  .dark-cancel-button:hover {
    background-color: #fff;
  }
  .dark-button {
    background-color:#203062;
    border: none;
  }
  .el-button:focus {
    // color: #303133FF;
    // border-color: #DCDFE6FF;
    // background-color: #fff;
  }
    .dialog-confirm-cancle {
        border-radius: 15px;
    }
    .publicColor {
      color: #fff;
      background-color: #203062;
      border: none;
      &:hover {
        background-color: none;
      }
    }
    .dialog-confirm-confirm,.dialog-confirm-confirm:focus, .dialog-confirm-confirm:hover {
      // color: #fff;
      // background-color: #F37021FF;
      // border-radius: 15px;
    }

}
</style>
