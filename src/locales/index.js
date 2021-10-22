export const localesMapping = [
  {
    localeCode: 'zh-hans',
    localeName: '简体中文'
  },
  {
    localeCode: 'en',
    localeName: 'English'
  }
]

export const isHasLocale = (targetLocaleCode) => {
  return localesMapping.find(localeItem => localeItem.localeCode === targetLocaleCode)
}
