// Vue Component Install

import { App } from 'vue'
import IconFont from '@/components/IconFont/index.vue'
import OptionsMenu from '@/components/OptionsMenu/index.vue'
import Tooltip from '@/components/Tooltip.vue'
import LayoutArea from '@/components/Layout/LayoutArea.vue'
import LayoutSection from '@/components/Layout/LayoutSection.vue'
import Footer from '@/components/Footer/index.vue'

const Components = {
  install (app: App<any>) {
    componentList.forEach((Comp) => {
      app.component(Comp.name, Comp)
    })
  }
}

const componentList = [
  IconFont,
  OptionsMenu,
  Tooltip,
  LayoutArea,
  LayoutSection,
  Footer
]

export default Components
