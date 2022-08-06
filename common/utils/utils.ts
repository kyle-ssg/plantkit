import BaseUtils from './base/_utils'

export const Utils = {
  ...BaseUtils,
  getLocaleID: (locale: string) => {
    let matchingLocale = locale
    if (!locale.includes('-')) {
      switch (locale) {
        case 'en': {
          matchingLocale = 'gb'
          break
        }
        default: {
        }
      }
      return `${locale}-${matchingLocale}`
    }
    return locale
  },
}
