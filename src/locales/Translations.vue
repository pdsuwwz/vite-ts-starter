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
      Translations<i class="el-icon-arrow-down el-icon--right"></i>
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
<script>
import { defineComponent, nextTick, ref } from 'vue'
import { localesMapping } from '@/locales'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Translations',
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
    cursor: pointer;
    &:hover {
      color: $--color-primary;
    }
  }
}
</style>
