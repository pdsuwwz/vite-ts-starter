<template>
  <div
    class="wrap-operation"
    :class="{
      adminUserOperation: adminUserZn
    }"
  >
    <!-- v-if="badgeValue" -->
    <el-popover
      v-if="!adminUserZn"
      placement="bottom"
      popper-class="operation-popover"
      :width="323"
      trigger="click"
    >
      <template #reference>
        <el-badge
          :value="badgeValue"
          class="link-badge-message"
          type="danger"
          @click="handleBadge"
        >
          <IconFont icon="icon-news1" />
        </el-badge>
      </template>
      <div class="wrap-popover-content">
        <h1 class="popover-content-title">
          <IconFont icon="icon-news1" />
          {{ _t('base.mess') }}
        </h1>
        <div class="popover-content">
          <div
            v-for="(badgeItem, badgeIndex) in badgeList"
            :key="badgeIndex"
            class="popover-item"
          >
            <p>{{ badgeItem.content }}</p>
            <span>{{ badgeItem.messageDttm }}</span>
          </div>
          <div
            v-if="!badgeList.length"
            class="not-data"
          >
            Not Data
          </div>
        </div>
      </div>
    </el-popover>

    <template v-if="showAdmins">
      <IconFont
        v-if="adminUserZn"
        icon="icon-home"
        class="user-link-admins"
        @click="handleToClient()"
      />
      <IconFont
        v-else
        icon="icon-back-end"
        class="wrap-link-admin"
        @click="handleToAdmins()"
      />
    </template>
    <el-dropdown
      trigger="click"
      @command="handleLanguage"
    >
      <div
        class="el-dropdown-link"
        :class="{
          adminLanguageChange: adminUserZn
        }"
      >
        <IconFont
          v-if="!adminUserZn"
          icon="icon-language"
        />
        <IconFont
          v-else
          icon="icon-language1"
        />
        <span class="el-dropdown-target">
          {{ currentLang }}
        </span>
        <i
          class="el-icon-arrow-down el-icon--right"
        ></i>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="中文">
            中文
          </el-dropdown-item>
          <el-dropdown-item command="English">
            English
          </el-dropdown-item>
          <!-- <el-dropdown-item command="繁体中文">
            繁体中文
          </el-dropdown-item> -->
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <!-- style="background-color: #fff;" -->
    <el-divider
      class="dividerNav"
      direction="vertical"
      :class="{
        adminUserLine: adminUserZn
      }"
    />
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  getCurrentInstance,
  reactive,
  ref
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const useBadge = (store, route) => {
  const badgeValue = ref('')
  const badgeList = ref([])

  store.dispatch('UserAccount/setNotificationSize')
    .then(({ error, data: { result } }) => {
      if (error) return

      badgeValue.value = result || ''
    })

  const handleBadge = () => {
    badgeValue.value = ''
    store.dispatch('UserAccount/setNotificationReadall')
      .then(({ error, data: { result } }) => {
        if (error) return

        badgeList.value = result
      })
  }

  return {
    badgeValue,
    handleBadge,
    badgeList
  }
}

const useLanguage = (store, route, router) => {
  const langMap = {
    zh_CN: '中文',
    en: 'English'
    // 'zh-Tw': '繁体中文'
  }

  const currentLang = computed(() => {
    let lang = null
    for (const key in langMap) {
      if (key === route.params.lang) {
        lang = langMap[key]
      }
    }
    return lang
  })

  const handleLanguage = async (lang) => {
    if (currentLang.value === langMap[lang]) return
    // currentLang.value = lang
    let storeLang = null

    for (const key in langMap) {
      if (langMap[key] === lang) {
        storeLang = key
      }
    }
    console.log(storeLang)
    await store.dispatch('UserAccount/setLanguageStore', {
      lang: storeLang
    })
    // 这里还需要同时告诉后端 前端更新了语言类型
    const res = await store.dispatch('UserAccount/setLanguage', {
      lang: storeLang
    })
    console.log(res)

    // 前端重定向
    const splitPathArr = route.path.split('/')
    router.replace({
      path: `/${storeLang}/${splitPathArr.slice(2).join('/')}`,
      query: route.query
    })
  }

  return {
    currentLang,
    handleLanguage
  }
}

export default defineComponent({
  name: 'Operation',
  components: {},
  props: {
    adminUserZn: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    // Vuex store
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    // this
    const { ctx } = getCurrentInstance()

    const userRoleList = computed(() => store.state.UserAccount.userRoleList)

    const showAdmins = computed(
      () => {
        return userRoleList.value.includes(1) ||
         userRoleList.value.includes(2)
      }
    )
    const handleToAdmins = () => {
      router.push({
        name: 'AdminsList'
      })
    }
    const handleToClient = () => {
      router.push({
        name: 'ProjectList'
      })
    }

    return {
      ...useLanguage(store, route, router),
      ...useBadge(store, route),
      showAdmins,
      handleToAdmins,
      handleToClient
    }
  }
})
</script>

<style lang="scss">
.operation-popover {
  padding: 0px !important;
  .wrap-popover-content {
    .popover-content-title {
      font-size: 16px;
      height: 45px;
      line-height: 45px;
      border-bottom: 1px solid #DCDFE6;
    }
    .popover-content {
      max-height: 366px;
      overflow: auto;
      .popover-item {
        padding: 12px 16px;
        border-bottom: 1px solid #DCDFE6;
        p {
          line-height: 32px;
          color: #303133;
          font-size: 14px;
          word-break: break-word;
        }
        span {
          line-height: 22px;
          font-size: 12px;
          color: #909399;
        }
      }
      .popover-item:last-child {
        border-bottom: none;
      }
      .not-data {
        text-align: center;
        line-height: 102px;
        font-size: 14px;
        color: #909399;
      }
    }
  }
}
</style>

<style scoped lang="scss">
.wrap-operation {
  flex: 1;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  &:deep() {
    .el-badge__content {
      padding: 0px 3px;
      line-height: 16px;
    }
    .el-dropdown-target {
      padding-left: 6px;
    }
    .el-dropdown {
      .icon-font {
        font-size: 18px;
      }
    }
  }
  .link-badge-message {
    margin-right: 12px;
    cursor: pointer;
    font-size: 18px;
  }
  .el-dropdown-link {
    color: #fff;
  }
  .adminLanguageChange {
    min-width: 90px;
    color: #303133;
  }
  .wrap-link-admin, .user-link-admins {
    margin-right: 22px;
    cursor: pointer;
    &.user-link-admins {
      width: 20px;
      height: 20px;
      color: #303133;
    }
  }
  .admin-to-user {
    color: #303133;
  }
  .dividerNav {
    background-color: #fff;
  }
  .adminUserLine {
    background-color: #303133;
  }
}
.adminUserOperation {
    max-width: 180px;
}
</style>
