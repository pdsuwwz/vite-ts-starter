<template>
  <el-autocomplete
    v-model.trim="searchValue"
    v-bind="$attrs"
    class="search-input-container"
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
      <el-icon class="search-loading-icon">
        <loading />
      </el-icon>
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

<script lang="ts">
import { ComponentPublicInstance, defineComponent, getCurrentInstance, nextTick, PropType, ref, watch } from 'vue'
import { Loading } from '@element-plus/icons-vue'

import { debounce } from 'lodash'
import useCurrentInstance from '@/hooks/useCurrentInstance'

export default defineComponent({
  name: 'SearchSelect',
  components: {
    Loading
  },
  props: {
    modelValue: {
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
  } as const,
  emits: [
    'update:modelValue',
    'change',
    'select'
  ],
  setup (props) {
    const { proxy } = useCurrentInstance()

    const loading = ref(false)
    const searchValue = ref('')

    watch(
      () => props.modelValue,
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
        proxy.$emit('update:modelValue', val)
        proxy.$emit('change', val)
      }, 300)
    )

    return {
      loading,
      searchValue
    }
  },
  methods: {
    keydown (event: KeyboardEvent) {
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
    getExecText (tags: string) {
      return tags.replace(
        // eslint-disable-next-line prefer-regex-literals
        new RegExp(/(<([^>]+)>)/, 'gi'),
        ''
      )
    },
    handleSelect ({ value }: any) {
      this.$emit('select', value)
    },
    async handleSearch (queryString: string, callback: any) {
      const query = queryString
        .toLowerCase()
        // eslint-disable-next-line prefer-regex-literals
        .replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g), '\\$&')

      let list: any[] = []
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
            (match: string) => {
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
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 4px;

    svg {
      animation: rotate-360 3s linear infinite;
    }
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
  color: $color-primary;
}
</style>
