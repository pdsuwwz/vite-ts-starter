<script lang="ts">
export default defineComponent({
  name: 'AppMain'
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <Component :is="Component" />
  </router-view>
</template>
