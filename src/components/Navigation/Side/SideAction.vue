<template>
  <div class="side-action-container">
    <ul class="action-list">
      <li
        v-for="item in 3"
        :key="item"
        class="action-item"
      >
        Action {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, ref } from 'vue'

export default defineComponent({
  name: 'NavigationSideAction',
  emits: [
    'click'
  ],
  setup () {
    const { proxy } = getCurrentInstance()
    const title = ref('信永中和')
    function handleClick () {
      proxy.$emit('click')
    }

    return {
      title,

      handleClick
    }
  }
})
</script>
<style lang="scss" scoped>
.side-action-container {
  position: relative;
  .action-list {
    display: flex;
    white-space: nowrap;
    .action-item {
      height: 100%;
      line-height: inherit;
      background-color: #eee;
      padding: 0 12px;
      margin-right: 5px;
      &:last-child {
        // margin-right: 0;
      }
    }
  }
}
</style>
