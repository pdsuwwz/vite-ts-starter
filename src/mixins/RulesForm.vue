<script lang="ts">
import { defineComponent } from 'vue'

import {
  requiredRules,
  validatorRules,
  imageListRules,
  requiredRadioRules
} from '@/utils/formRules'
export default defineComponent({
  // name: 'RulesForm',
  methods: {
    getValidatorRules (...args: any[]) {
      return validatorRules(...args)
    },
    getRequiredRules (...args: any[]) {
      return requiredRules(...args)
    },
    getRequiredRadioRules (...args: any[]) {
      return requiredRadioRules(...args)
    },
    getImageListRules (...args: any[]) {
      return imageListRules(...args)
    }
  }
})
</script>
