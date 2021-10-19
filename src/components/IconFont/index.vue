<template>
  <svg
    class="icon-font"
    aria-hidden="true"
    :class="getClassName"
    @click="handleClick()"
  >
    <filter
      id="drop-shadow"
      xmlns="http://www.w3.org/2000/svg"
    >
      <feGaussianBlur
        in="SourceAlpha"
        stdDeviation="2"
      />
      <feOffset
        dx="1"
        dy="1"
        result="offsetblur"
      />
      <feComponentTransfer>
        <feFuncA
          type="linear"
          slope="0.2"
        />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <g
      v-bind="getAttrs()"
    >
      <use :xlink:href="'#' + icon" />
    </g>
  </svg>
</template>

<script>

export default {
  name: 'IconFont',
  props: {
    icon: {
      type: String,
      default: ''
    },
    shadow: {
      type: Boolean,
      default: false
    },
    verticalCenter: {
      type: Boolean,
      default: false
    },
    cursor: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  computed: {
    getClassName () {
      const className = []
      if (this.verticalCenter) {
        className.push('middle')
      }
      if (this.cursor) {
        className.push('cursor')
      }
      if (this.disabled) {
        className.push('disabled')
      }
      return className
    }
  },
  methods: {
    handleClick () {
      !this.disabled && this.$emit('click')
    },
    getAttrs () {
      const attrs = {}
      this.shadow &&
      (attrs.filter = 'url(#drop-shadow)')
      return attrs
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-font {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  &.middle {
    vertical-align: middle;
  }
  &.cursor {
    cursor: pointer;
  }
  &.disabled {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
</style>
