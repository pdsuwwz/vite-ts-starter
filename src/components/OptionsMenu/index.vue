<template>
  <el-dropdown
    trigger="click"
    :placement="placement"
    @click.stop
    @visible-change="triggerMask"
    @command="handleCommand"
  >
    <span
      class="options-menu-action"
      :class="{
        'hide-border': hideBorder
      }"
    >
      <!-- <i :class="getCurrentIcon"></i> -->
      <IconFont icon="icon-more" />
    </span>
    <template
      #dropdown
    >
      <el-dropdown-menu
        class="options-menu-list"
      >
        <el-dropdown-item
          v-for="(optionItem, index) in options.filter(item => item)"
          :key="index"
          :command="optionItem.command"
          v-bind="optionItem.attrs"
        >
          <IconFont
            :icon="optionItem.icon"
          />
          <span class="option-text">
            {{ optionItem.title }}
          </span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">

// import { isString } from '@/utils/type'
import { isString } from '@/utils/type'

export default {
  name: 'OptionsMenu',
  props: {
    hideBorder: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'bottom-end'
    },
    icon: {
      type: [String, Array],
      default () {
        return [
          'el-icon-more',
          'el-icon-more'
        ]
      }
    },
    options: {
      type: Array,
      default () {
        return []
      }
    }
  },
  emits: ['change-visible', 'select'],
  data () {
    return {
      visible: false
    }
  },
  computed: {
    getIconList () {
      if (isString(this.icon)) {
        return [
          this.icon,
          this.icon
        ]
      }
      if (this.icon.length === 0) {
        return [
          'el-icon-more',
          'el-icon-more'
        ]
      }
      if (this.icon.length === 1) {
        return [
          this.icon[0],
          this.icon[0]
        ]
      }
      return this.icon
    },
    getCurrentIcon () {
      return this.getIconList[this.visible ? 1 : 0]
    }
  },
  methods: {
    handleCommand (command) {
      this.$emit('select', command)
    },
    triggerMask (visible) {
      this.visible = visible
      this.$emit('change-visible', this.visible)
      // TODO: development 下关闭
      const env = process.env.NODE_ENV
      if (env === 'development') return

      let mask = document.querySelector('#options-menu-mask')
      if (visible) {
        if (!mask) {
          mask = document.createElement('div')
          mask.id = 'options-menu-mask'
          mask.classList.add('global-options-menu-backdrop-mask')
          document.body.appendChild(mask)
        } else {
          mask.classList.remove('hide')
        }
        return
      }
      mask.classList.add('hide')
    }
  }
}
</script>

<style lang="scss" scoped>
.options-menu-action {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 20px;
  font-size: 16px;
  color: rgba(#495164, 0.7);
  border-radius: 2px;
  border: 1px solid transparent;
  transition: border 0.3s;
  outline: none;
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(#495164, 0.3);
  }

  &::after {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
  }

  &.hide-border {

    &:hover {
      border: 1px solid transparent;
    }
  }
}

.options-menu-list {

  :deep() .el-dropdown-menu__item {
    line-height: 34px;
    font-size: 14px;
    white-space: nowrap;
  }

  .option-text {
    padding-left: 8px;
    padding-right: 15px;
  }
}
</style>
<style lang="scss">
.global-options-menu-backdrop-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  &.hide {
    display: none;
  }
}
</style>
