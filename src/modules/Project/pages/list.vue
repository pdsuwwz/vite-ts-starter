<template>
  <LayoutArea>
    <template #top>
      <NavigationNavBar
        :fixed="false"
      >
        <NavigationSideLogo />
      </NavigationNavBar>
    </template>

    <template #side>
      <LayoutSection :title="localeInject.t('project.manageTitle')">
        <el-button
          type="primary"
          size="large"
          class="create-action"
          @click="handleCreateProject()"
        >
          <IconFont
            icon="iconestablish"
          />
          创建项目
        </el-button>
        <el-button
          @click="handlePrompt()"
        >
          测试 prompt
        </el-button>
      </LayoutSection>
    </template>

    <template #content>
      <LayoutSection
        has-divider
        flex-content
      >
        <template #head>
          <SearchCorporation
            @select="handleSelectSearch"
          />
        </template>

        <ProjectTableHeader />
        <ProjectTableBody />
      </LayoutSection>
    </template>
  </LayoutArea>
</template>

<script>
import { useStore } from 'vuex'
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onBeforeMount,
  onMounted
} from 'vue'
import { useLocaleInject } from 'element-plus'

import ProjectModule from '@/modules/Project/store'

import NavigationSideLogo from '@/components/Navigation/Side/SideLogo.vue'
import NavigationNavBar from '@/components/Navigation/NavBar.vue'

import ProjectForm from '@/modules/Project/components/ProjectForm.vue'
import ProjectTableHeader from '@/modules/Project/components/TableHeader.vue'
import ProjectTableBody from '@/modules/Project/components/TableBody.vue'

import SearchCorporation from '@/components/SearchSelect/SearchCorporation.vue'
import { sleep } from '@/utils/request'

export default defineComponent({
  name: 'ProjectList',
  components: {
    NavigationNavBar,
    NavigationSideLogo,
    ProjectTableHeader,
    ProjectTableBody,
    SearchCorporation
  },
  // https://github.com/vuejs/vue-next/issues/3649
  setup () {
    const { proxy } = getCurrentInstance()
    const store = useStore()
    const localeInject = useLocaleInject()

    function handlePrompt () {
      proxy.$ModalPrompt({
        title: '删除项目',
        content: '此操作将永久删除该项目，确认删除吗？',
        confirmType: 'primary',
        textConfirm: '删除',
        textClose: '放弃',
        async onConfirm () {
          await sleep(3000)
        }
      })
    }
    function handleCreateProject () {
      proxy.$modalWrapper({
        title: '创建项目',
        width: '50vw',
        'close-on-click-modal': false,
        hideFooter: true,
        renderComponent: {
          component: ProjectForm
        }
      })
    }
    function handleSelectSearch (name) {
      console.log('搜索项目名: ', name)
      store.dispatch(ProjectModule.getAction('getProjectList'), {
        kw: name
      })
    }
    handleSelectSearch()

    return {
      localeInject,
      handlePrompt,
      handleCreateProject,
      handleSelectSearch
    }
  }
})

</script>

<style lang="scss" scoped>
.create-action {
  padding: 13px 20px;
  width: 100%;
}
</style>
