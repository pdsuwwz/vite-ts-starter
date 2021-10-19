<template>
  <el-autocomplete
    v-model.trim="searchValue"
    v-bind="$attrs"
    class="search-input-container"
    size="medium"
    popper-class="search-select-container"
    :trigger-on-focus="false"
    :fetch-suggestions="handleSearch"
    :placeholder="placeholder"
    @select="handleSelect"
    @keydown.capture="keydown($event)"
  >
    <template
      v-if="loading"
      #suffix
    >
      <i
        class="search-loading-icon el-input__icon el-icon-loading"
      ></i>
    </template>
    <template
      v-else
      #suffix
    >
      <i
        class="search-icon"
      >
        <IconFont
          icon="iconsearch"
        />
      </i>
    </template>
    <template #default="{ item }">
      <span
        :title="getExecText(item.label)"
        v-html="item.label"
      ></span>
    </template>
  </el-autocomplete>
</template>

<script>
import { defineComponent, getCurrentInstance, nextTick, ref, watch } from 'vue'

import { debounce } from 'lodash'

export default defineComponent({
  name: 'SearchSelect',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    fetch: {
      type: Function,
      default () {
        return () => {}
      }
    }
  },
  emits: [
    'input',
    'change',
    'select'
  ],
  setup (props) {
    const { ctx } = getCurrentInstance()

    const loading = ref(false)
    const searchValue = ref('')

    watch(
      () => props.value,
      (val) => {
        searchValue.value = val
      },
      {
        immediate: true
      }
    )

    watch(
      () => searchValue,
      debounce(function (val) {
        ctx.$emit('input', val)
        ctx.$emit('change', val)
      }, 300)
    )

    return {
      loading,
      searchValue
    }
  },
  methods: {
    keydown (event) {
      // 阻止中文输入法下的回车事件，避免触发 select 事件
      if (event.keyCode === 229) {
        event.returnValue = false
        event.stopPropagation()
      }
      // 修复按下空格匹配不到选项的 bug
      if (event.keyCode === 32) {
        event.returnValue = false
      }
    },
    getExecText (tags) {
      return tags.replace(
        // eslint-disable-next-line prefer-regex-literals
        new RegExp(/(<([^>]+)>)/, 'gi'),
        ''
      )
    },
    handleSelect ({ value }) {
      this.$emit('select', value)
    },
    async handleSearch (queryString, callback) {
      const query = queryString
        .toLowerCase()
        // eslint-disable-next-line prefer-regex-literals
        .replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g), '\\$&')

      let list = []
      if (!query) {
        callback(list)
        return
      }

      this.loading = true
      const res = await this.fetch(query)

      list = res || []

      list.forEach((item) => {
        item.label = item.label
          .replace(
            new RegExp(query, 'gi'),
            (match) => {
              return `<span class="search-select-highlight">${match}</span>`
            }
          )
      })
      callback(list)
      setTimeout(() => {
        nextTick(() => {
          this.loading = false
        })
      }, 200)
    }
  }
})
</script>

<style lang="scss">
.search-input-container {
  width: 240px;
  .search-loading-icon {
    color: #606266;
    font-size: 16px;
  }
  .search-icon {
    color: #606266;
    height: 100%;
    line-height: 40px;
    font-size: 16px;
    padding-right: 4px;
  }
  .el-input__inner {
    height: 40px;
    line-height: 40px;
  }
}
.search-select-container {
  .el-autocomplete-suggestion__list {
    li {
      &:active {
        background-color: #ecf3ff;
      }
    }
  }
}
.search-select-highlight {
  color: $--color-primary;
}
</style>
