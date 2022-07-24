<template>
  <el-dialog
    ref="dialogRef"
    :model-value="modelValue"
    destroy-on-close
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="1020px"
    top="12vh"
    custom-class="dialog-modal"
    v-bind="$attrs"
    @closed="handleDestroy()"
  >
    <template #default>
      <div class="dialog-modal__box">
        <div
          v-if="$slots.left"
          class="dialog-modal__box-left"
        >
          <!-- 左侧菜单 -->
          <slot name="left"></slot>
        </div>
        <div class="dialog-modal__box-right">
          <div class="dialog-modal__box-right__header">
            <!-- 右侧顶部 -->
            <div class="left-title">
              <span class="header-title">
                {{ headerTitle }}
              </span>
            </div>
            <div
              class="right-close"
              @click="handleClose()"
            >
              <i class="el-icon-close"></i>
            </div>
          </div>
          <div class="dialog-modal__box-right__body">
            <!-- 右侧中间 -->
            <slot name="default"></slot>
          </div>
          <div class="dialog-modal__box-right__footer">
            <!-- 右侧底部 -->
            <el-button
              plain
              round
              :loading="cancelLoading"
              @click="handleClose()"
            >
              {{ _t('base.ce') }}
            </el-button>
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'DialogModal',
  components: {
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    headerTitle: {
      type: String,
      default: ''
    },
    headerDescType: {
      type: String,
      default: '' // null, warning
    },
    cancelLoading: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    'update:modelValue'
  ],
  setup (props, { emit }) {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const dialogRef = ref()
    const handleClose = () => {
      nextTick(() => {
        dialogRef.value.visible = false
      })
    }
    const handleDestroy = () => {
      emit('update:modelValue', false)
    }
    const handleConfirm = () => {

    }
    return {
      dialogRef,

      handleClose,
      handleDestroy,
      handleConfirm
    }
  }
})
</script>

<style lang="scss">
.dialog-modal {
  background: #fff;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 8%);
  border-radius: 8px;
  border: 1px solid #fff;
  font-family: PingFangSC-Medium, "PingFang SC";
  overflow: hidden;

  & > .el-dialog__header {
    display: none;
  }

  & > .el-dialog__body {
    padding: 0;
  }

  & > .el-dialog__footer {
    display: none;
  }

  .dialog-modal__box {
    display: flex;
    height: 627px;

    .dialog-modal__box-left {
      min-width: 118px;
      background-color: #1e3264;
      color: #fff;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .dialog-modal__box-right {
      flex: 1;
      display: flex;
      min-width: 0;
      flex-direction: column;

      .dialog-modal__box-right__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 50px;
        border-bottom: 1px solid #dcdfe6;
        padding: 0 16px 0 24px;

        .left-title {
          display: flex;
          align-items: center;

          .header-title {
            font-size: 18px;
            font-weight: 500;
            color: #303133;
          }
        }

        .right-close {
          cursor: pointer;
        }
      }

      .dialog-modal__box-right__body {
        flex: 1;
        min-height: 0;
        overflow-y: auto;
      }

      .dialog-modal__box-right__footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        min-height: 54px;
        border-top: 1px solid #dcdfe6;
        padding: 0 16px;
      }
    }
  }
}
</style>
