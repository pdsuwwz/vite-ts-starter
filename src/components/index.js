// Vue Component Install

import IconFont from '@/components/IconFont/index.vue'
import OptionsMenu from '@/components/OptionsMenu/index.vue'
import Calendar from '@/components/Calendar/index.vue'
import Navigation from '@/components/Navigation/index.vue'
import PagesFooter from '@/components/PagesFooter/index.vue'
import Tooltip from '@/components/Tooltip.vue'
import LayoutArea from '@/components/Layout/LayoutArea.vue'
import LayoutSection from '@/components/Layout/LayoutSection.vue'

const Components = {
  install (app) {
    componentList.forEach((Comp) => {
      app.component(Comp.name, Comp)
    })
  }
}

const componentList = [
  IconFont,
  OptionsMenu,
  Calendar,
  Navigation,
  PagesFooter,
  Tooltip,
  LayoutArea,
  LayoutSection
]

export default Components
