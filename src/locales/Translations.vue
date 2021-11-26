<template>
  <el-dropdown
    class="translations-box"
    :class="{
      'is-dark': dark
    }"
    trigger="click"
    @command="handleChange"
  >
    <span>
      Translations<el-icon class="el-icon--right">
        <ArrowDown />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(localeItem, index) in localesList"
          :key="index"
          :command="localeItem"
        >
          {{ localeItem.localeName }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue'
import { localesMapping } from '@/locales'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import { ArrowDown } from '@element-plus/icons'

export default defineComponent({
  name: 'TranslationsBox',
  components: {
    ArrowDown
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const localesList = ref(localesMapping)
    const handleChange = (targetLocaleItem) => {
      setTimeout(() => {
        const { localeCode } = targetLocaleItem
        router.replace({
          params: {
            ...route.params,
            locale: localeCode
          }
        })
        store.dispatch('UserAccount/setLanguage', {
          locale: localeCode
        })
      })
    }
    return {
      localesList,
      handleChange
    }
  }
})
</script>
<style lang="scss">
.translations-box {
  display: flex;
  align-items: center;
  color: #fff;
  cursor: initial;
  user-select: none;
  &.is-dark {
    color: #495164;
  }
  .el-dropdown-selfdefine {
    display: flex;
    align-items: center;
    &:hover {
      color: $--color-primary;
    }
  }
}
</style>
