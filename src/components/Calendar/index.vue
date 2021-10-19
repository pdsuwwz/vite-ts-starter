<template>
  <div
    v-if="controller"
    class="calendar-controller"
  >
    <span>选择年份:</span>
    <el-select
      v-model="currentYear"
      :placeholder="_t('base.sele')"
    >
      <el-option
        v-for="item in calendarYearList"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
  </div>
  <div
    :key="currentYear"
    class="wrap-year"
  >
    <CalendarMonth
      v-for="month in months"
      :key="month"
      :month="month"
      :year="currentYear"
      v-bind="attrs"
      @click="onClick($event, currentYear, month)"
    />
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  ref,
  toRefs,
  watch
} from 'vue'

import { useStore } from 'vuex'
import CalendarMonth from '@/components/Calendar/month/index.vue'

// 获取年份list
const useController = (startYear, endYear) => {
  const calendarYearList = reactive([])

  // 年份列表
  for (let i = 0; i <= (endYear - startYear); i++) {
    calendarYearList.push(startYear + i)
  }

  return {
    calendarYearList
  }
}

export default defineComponent({
  name: 'Calendar',
  components: {
    CalendarMonth
  },
  props: {
    modelValue: {
      type: Number,
      default: new Date().getFullYear()
    },
    year: {
      type: Number,
      default: new Date().getFullYear()
    },
    controller: {
      type: Boolean,
      default: false
    },
    calendarData: {
      type: Object,
      default: () => (reactive({}))
    }
  },
  emits: ['update:modelValue', 'dayClick'],
  setup (props) {
    // Vuex store
    const store = useStore()

    // this
    const { proxy } = getCurrentInstance()

    const onClick = (event, year, month) => {
      console.log(event)
      console.log(year, month)
      proxy.$emit('dayClick', year)
    }

    // v-model
    const { modelValue } = toRefs(props)
    const currentYear = ref()
    // 获取默认年份
    currentYear.value = modelValue.value

    watch(() => currentYear.value, () => {
      proxy.$emit('update:modelValue', currentYear.value)
    })

    let yearList = {}
    // 当不需要控制器的时候没有这些数据
    if (props.calendarData.startDay) {
      const { startDay, endDay } = toRefs(props.calendarData)
      yearList = useController(
        new Date(startDay.value).getFullYear(),
        new Date(endDay.value).getFullYear()
      )
    }

    return {
      onClick,
      ...yearList,
      currentYear,
      months: reactive([
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12'
      ]),
      attrs: {
        calendarData: props.calendarData,
        ...proxy.$attrs
      }
    }
  }
})
</script>

<style scoped lang="scss">
.calendar-controller {
  padding-bottom: 12px;
  padding-left: 26px;
  span {
    margin-right: 8px;
  }
  .el-input__inner {
    width: 100px;
  }
}
.wrap-year {
  display: grid;
  min-width: 785px;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(3, calc(33.33% - 18px));
  justify-items: center;
  align-items: center;
  grid-row-gap: 18px;
  // flex-wrap: wrap;
  &:deep(.wrap-calendar-month) {
    width: 175px;
    height: 200px;
  }
}
</style>
