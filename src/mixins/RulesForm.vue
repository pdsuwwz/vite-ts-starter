<script lang="ts">
import {
  imageListRules,
  requiredRadioRules,
  requiredRules,
  validatorRules
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
