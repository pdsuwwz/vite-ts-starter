import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

import selfEn from '@/locales/lang/en'
import selfZhHans from '@/locales/lang/zh-hans'


/**
 * I18n language locale mappings
 *
 * 国际化语言映射表设置
 */
export const localesMapping = [
  {
    localeCode: 'zh-hans',
    localeName: '简体中文',
    localeLang: {
      ...zhCn,
      ...selfZhHans
    }
  },
  {
    localeCode: 'en',
    localeName: 'English',
    localeLang: {
      ...en,
      ...selfEn
    }
  }
] as const

export const currentLocaleMap = (targetLocaleCode) => {
  return localesMapping.find(
    localeItem => localeItem.localeCode === targetLocaleCode
  )
}

export type LangTypes = typeof localesMapping[number]['localeCode']

/**
 * Default language locale for the application
 *
 * 应用程序的默认语言设置
 */
export const defaultLanguageLocale: LangTypes = 'en'
