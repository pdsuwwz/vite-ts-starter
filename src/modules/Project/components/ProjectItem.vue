<template>
  <router-link
    :to="`${$route.params.locale ? '/' + $route.params.locale + '/' : '/'}result/${dataset.id}/overview`"
  >
    <ul class="project-item-container">
      <li
        style="flex: 1; min-width: 0;"
      >
        <div class="project-item__name">
          <div class="project-item__name-left">
            <IconFont
              icon="iconfile"
            />
          </div>
          <div class="project-item__name-desc">
            <div class="project-item__name-desc__corpname">
              <span
                class="project-item__name-desc__corpname-maintext text_nowrap"
              >{{ dataset.corpName }}</span>
              <span
                @click.prevent
              >
                <TooltipCustom
                  v-if="dataset.notes"
                  :content="dataset.notes"
                >
                  <IconFont
                    icon="iconhelp"
                    class="corpname-notes"
                  />
                </TooltipCustom>
              </span>
            </div>
            <p class="project-item__name-desc__fullname text_nowrap">
              {{ dataset.name }}
            </p>
          </div>
        </div>
      </li>

      <li
        style="width: 18.5%; flex: initial;"
        class="text_nowrap"
      >
        {{ dataset.createTime }}
      </li>
      <li
        class="project-item-action text_nowrap"
        :class="{
          active: dataset.isPublished,
          loading: isLoading
        }"
        @click.prevent="handlePublish(dataset.id)"
      >
        <span class="project-item-action__icon">
          <IconFont
            v-if="!isLoading"
            :icon="getActionIcon"
          />
          <Loading
            v-else
            class="transform-rotate360"
          />
        </span>
        <span class="project-item-action__status">
          {{ dataset.isPublished ? _t('project.stop') : _t('project.publish') }}
        </span>
      </li>
    </ul>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, ref } from 'vue'
import { Loading } from '@element-plus/icons-vue'

import { sleep } from '@/utils/request'
import useCurrentInstance from '@/hooks/useCurrentInstance'
import { ElMessage } from 'element-plus'

// TODO: Hide it temporarily
// import ProjectModule from '@/modules/Project/store'

export default defineComponent({
  name: 'ProjectItem',
  components: {
    Loading
  },
  props: {
    dataset: {
      type: Object,
      default () {
        return {}
      }
    }
  } as const,
  setup (props) {
    const { proxy } = useCurrentInstance()
    const isLoading = ref(false)
    const getActionIcon = computed(() => {
      return props.dataset.isPublished
        ? 'iconstop'
        : 'iconplay'
    })

    async function handlePublish (projectId) {
      if (isLoading.value) return

      isLoading.value = true

      await sleep(300)

      // TODO: Hide it temporarily
      // const { error } = await this.$store.dispatch(
      //   ProjectModule.getAction('updateTogglePublishStatus'),
      //   {
      //     projectId
      //   }
      // )

      isLoading.value = false

      // TODO: Hide it temporarily
      // if (error) return

      ElMessage.success({
        message: 'Successful!'
      })

      props.dataset.isPublished = !props.dataset.isPublished
    }
    return {
      isLoading,
      getActionIcon,

      handlePublish
    }
  }
})
</script>

<style lang="scss" scoped>
.project-item-container {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  box-shadow: 0 1px 4px 0 rgba(#000, 0.08);
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
  transition: background 0.3s, border 0.3s, box-shadow 0.3s;
  color: #303133;
  user-select: none;
  border: 1px solid transparent;

  &:hover {
    box-shadow: 0 10px 30px -20px rgba(#000, 0.24);
    border: 1px solid #dcdfe6;
  }

  .project-item__name {
    display: flex;
    align-items: center;
    min-width: 0;

    .project-item__name-left {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 5px;
      background-color: #ecf3ff;
      margin-right: 16px;

      & > svg {
        width: 20px;
        font-size: 20px;
        color: $color-primary;
      }
    }

    .project-item__name-desc {
      flex: 1;
      overflow: hidden;

      .project-item__name-desc__corpname {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #303133;

        .project-item__name-desc__corpname-maintext {
          max-width: 80%;
          margin-right: 10px;
        }

        .corpname-notes {
          font-size: 15px;
          color: $color-info;
          cursor: pointer;
        }
      }

      .project-item__name-desc__fullname {
        font-size: 12px;
        color: $color-info;
      }
    }
  }

  .project-item-action {
    flex: initial;
    display: flex;
    align-items: center;
    width: 19%;
    height: 100%;
    font-size: 14px;
    transition: 0.3s;
    cursor: pointer;

    .project-item-action__icon {
      width: 20px;

      & > svg {
        width: 100%;
        font-size: 20px;
      }
    }

    .project-item-action__status {
      padding-left: 6px;
    }

    &.active {
      color: $color-primary;
    }

    &.loading {
      color: $color-primary;
    }

    &:hover {
      color: #6b9eff;
    }
  }
}
</style>
