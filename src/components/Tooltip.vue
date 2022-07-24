<template>
  <el-tooltip
    effect="dark"
    :tabindex="-1"
    :placement="placement"
    popper-class="custom-tooltip"
    v-bind="$attrs"
  >
    <template
      #content
    >
      <div
        class="tooltip-inner"
      >
        {{ content }}
      </div>
    </template>
    <span>
      <slot></slot>
    </span>
  </el-tooltip>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TooltipCustom',
  props: {
    content: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'top'
    }
  }
})
</script>

<style lang="scss" scoped>
.tooltip-inner {
  max-width: 400px;
  max-height: 50px;
  line-height: 18px;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 14px;

  &::-webkit-scrollbar-thumb {
    background: rgba(#fff, 0.4);
    border-radius: 3px;
  }
}
</style>

<style lang="scss">
.custom-tooltip {
  background-color: #0b1a2f !important;
  color: #fff;
  border-radius: 4px !important;
  padding-top: 6px !important;
  padding-bottom: 6px !important;

  .el-popper__arrow {
    height: 14px;

    &::before {
      background-color: #0b1a2f !important;
    }
  }
}
</style>
