<template>
  <div class="user-account-container-layout">
    <div class="form-title">
      <div class="form-title-icon">
        <IconFont
          v-if="titleIcon"
          :icon="titleIcon"
        />
        <slot name="titleIcon"></slot>
      </div>
      <p class="form-title-text">
        {{ title }}
      </p>
      <p class="form-desc-text">
        {{ desc }}
      </p>
    </div>
    <el-form
      ref="boxForm"
      :model="formData"
      label-position="top"
      hide-required-asterisk
      @keyup.enter="onSubmit()"
    >
      <template
        v-for="(formItem, index) in formConfig"
        :key="index"
      >
        <el-form-item
          v-bind="getFormItemAttrs(formItem.attrs)"
        >
          <div class="form-custom-label">
            <p>{{ formItem.label }}</p>
            <el-link
              v-if="formItem.link"
              type="primary"
              :underline="false"
              @click="handleClickLink(formItem.link)"
            >
              {{ formItem.link.text }}
            </el-link>
          </div>
          <el-input
            v-model="formData[formItem.attrs.prop]"
            v-bind="getInputItemAttrs(formItem)"
          >
            <template
              v-if="formItem.prefixIcon"
              #prefix
            >
              <FontAwesomeIcon
                class="input-icon-prefix"
                :icon="formItem.prefixIcon"
              />
            </template>
            <template
              v-if="formItem.type === 'password'"
              #suffix
            >
              <FontAwesomeIcon
                class="input-icon-lock"
                :icon="showPassword ? 'eye' : 'eye-slash'"
                @click="tooglePassword()"
              />
            </template>
          </el-input>
        </el-form-item>
      </template>
      <div
        v-for="(actionItem, index) in actionList"
        :key="`${index}-`"
        class="submit-form-action-list"
      >
        <el-button
          v-bind="actionItem.attrs"
          class="submit-form-action-button"
          v-on="getActionItemEvent(actionItem.on) || {}"
        >
          {{ actionItem.text }}
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">

import { defineComponent, getCurrentInstance, ref } from 'vue'

import { omit } from 'lodash'

import { isFunction } from '@/utils/type'
import useCurrentInstance from '@/hooks/useCurrentInstance'

export default defineComponent({
  name: 'UserAccountContainerLayout',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    titleIcon: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    actionList: {
      type: Array,
      default () {
        return []
      },
      required: true
    },
    formData: {
      type: Object,
      default () {
        return {}
      },
      required: true
    },
    formConfig: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  },
  emits: [
    'on-submit'
  ],
  setup () {
    const { proxy } = useCurrentInstance()
    const showPassword = ref(false)
    const boxForm = ref()

    function tooglePassword () {
      showPassword.value = !showPassword.value
    }
    function getInputItemAttrs (formItem: any) {
      const attrs: any = {}
      const isPassword = formItem.type === 'password'
      if (isPassword) {
        attrs.type = showPassword.value ? 'text' : 'password'
      } else {
        attrs.type = 'text'
      }

      return {
        clearable: !isPassword,
        placeholder: formItem.placeholder,
        ...attrs
      }
    }

    function getFormItemAttrs (attrs: any) {
      const rules = isFunction(attrs.rules)
        ? attrs.rules.call(proxy)
        : ''

      return {
        rules,
        ...omit(attrs, ['rules'])
      }
    }

    function getActionItemEvent (on: any) {
      const onEvent: any = {}
      Object.keys(on).forEach((onItem) => {
        onEvent[onItem] = on[onItem].bind(proxy.$parent, boxForm.value)
      })
      return onEvent
    }

    function handleClickLink (link: any) {
      link.click.call(proxy.$parent, boxForm.value)
    }

    function onSubmit () {
      proxy.$emit('on-submit', boxForm.value)
    }

    return {
      showPassword,
      boxForm,

      tooglePassword,
      getInputItemAttrs,
      getFormItemAttrs,
      getActionItemEvent,
      handleClickLink,
      onSubmit
    }
  }
})

</script>

<style lang="scss" scoped>
.user-account-container-layout {
  width: 438px;
  margin-right: 80px;
  padding: 50px 34px 60px;
  background: #fff;
  box-shadow: 3px 6px 12px 0 rgb(0 0 0 / 15%), 1px 4px 8px 0 rgb(0 0 0 / 15%);
  border-radius: 6px;
  user-select: none;

  :deep() .el-input .el-input__inner {
    letter-spacing: 1px;
  }

  .form-custom-label {
    flex: 1;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
  }

  &:deep() {

    .el-input__prefix-inner {
      margin-left: -4px;
      align-items: center;
    }

    .el-input__suffix-inner {
      align-items: center;
    }
  }

  .input-icon-prefix {
    padding-left: 6px;

    // height: 100%;
  }

  .input-icon-lock {
    cursor: pointer;

    // height: 100%;
  }

  .form-title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-bottom: 30px;

    .form-title-icon {
      width: 32px;
      font-size: 0;
      margin-right: 10px;

      &:deep() {

        & > * {
          font-size: 32px;
        }
      }
    }

    .form-title-text {
      font-size: 26px;
      font-weight: 600;
    }

    .form-desc-text {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      padding: 44px 0 0;
    }
  }

  .submit-form-action-list {
    display: flex;
    margin-top: 40px;

    .submit-form-action-button {
      flex: 1;
    }
  }
}

@media screen and (max-width: 600px) {

  .user-account-container-layout {
    width: 95%;
    margin: auto;
  }
}
</style>
