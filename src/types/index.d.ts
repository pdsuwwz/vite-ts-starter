import { Translator } from 'element-plus'
import {
  requiredRules,
  validatorRules,
  imageListRules,
  requiredRadioRules
} from '@/utils/formRules'

declare module 'vue' {
  interface ComponentCustomProperties {
    _t: Translator
    getValidatorRules: (...args: any[]) => ReturnType<typeof validatorRules>
    getRequiredRules: (...args: any[]) => ReturnType<typeof requiredRules>
    getRequiredRadioRules: (...args: any[]) => ReturnType<typeof requiredRadioRules>
    getImageListRules: (...args: any[]) => ReturnType<typeof imageListRules>
  }
}
