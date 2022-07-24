<template>
  <div class="project-table-body-container">
    <div class="project-table-body-container__inner">
      <ProjectItem
        v-for="(projectItem, index) in projectList"
        :key="index"
        :dataset="projectItem"
      />
      <div
        v-if="!projectList.length"
        class="project-empty-box"
      >
        <img
          src="@/assets/images/project-empty.svg"
          alt="Empty"
        >
        <span>{{ _t('base.empty') }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import useBaseStore from '@/hooks/useBaseStore'

import ProjectItem from '@/modules/Project/components/ProjectItem.vue'

export default defineComponent({
  name: 'ProjectTableBody',
  components: {
    ProjectItem
  },
  setup () {
    const store = useBaseStore()
    const projectList = computed(() => store.state.Project.projectList)
    return {
      projectList
    }
  }
})
</script>

<style lang="scss" scoped>
.project-table-body-container {
  position: relative;
  flex: auto;

  .project-table-body-container__inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 10px 6px 0;
    scroll-behavior: smooth;

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    .project-empty-box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 171px;

      & > img {
        width: 140px;
      }

      & > span {
        font-size: 14px;
        line-height: 14px;
        color: #606266;
      }
    }
  }
}
</style>
