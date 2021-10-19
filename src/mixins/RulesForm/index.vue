<script>
// import {
//   requiredRules,
//   validatorRules,
//   imageListRules,
//   requiredRadioRules
// } from '@/utils/formRules'
import {
  requiredRules,
  validatorRules,
  imageListRules,
  requiredRadioRules
} from '@/utils/formRules'
export default {
  methods: {
    getValidatorRules (...args) {
      return validatorRules(...args)
    },
    getRequiredRules (...args) {
      return requiredRules(...args)
    },
    getRequiredRadioRules (...args) {
      return requiredRadioRules(...args)
    },
    getImageListRules (...args) {
      return imageListRules(...args)
    }
  }
}
</script>
