<template>
  <router-view v-slot="{ Component }">
    <Component :is="Component" />
  </router-view>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>
