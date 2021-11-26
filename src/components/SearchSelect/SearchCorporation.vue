<template>
  <SearchSelect
    v-model="searchValue"
    :fetch="handleFetchSearch"
    placeholder="搜索项目"
    select-when-unmatched
    highlight-first-item
    v-bind="$attrs"
    @select="handleSelectSearch"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import SearchSelect from '@/components/SearchSelect/index.vue'
import ProjectModule from '@/modules/Project/store'
import {
  corporationList
} from '@/modules/Project/data'

export default defineComponent({
  name: 'SearchCorporation',
  components: {
    SearchSelect
  },
  emits: [
    'select'
  ],
  setup () {
    const searchValue = ref('')
    return {
      searchValue
    }
  },
  methods: {
    async handleFetchSearch (query) {
      // const { error, data } = await this.$store.dispatch(ProjectModule.getAction('getSearchProjectByQuery'), query)

      // if (error) {
      //   return []
      // }

      // return data.projects.map(projectItem => {
      //   return {
      //     value: projectItem.corpName,
      //     label: projectItem.corpName
      //   }
      // })

      return corporationList.map(projectItem => {
        return {
          value: projectItem,
          label: projectItem
        }
      })
    },
    handleSelectSearch (name) {
      this.$emit('select', name)
    }
  }
})
</script>

<style>

</style>
