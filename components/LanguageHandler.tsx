import { FunctionComponent } from 'react'
import { Constants } from '../common/utils'
import Strings from '../project/localisation'
import { useRouter } from 'next/router'
import { API } from '../project/api'

const findMatchingLocale = (locales: string[]) => {
  if (typeof navigator !== 'undefined') {
    const locale = navigator.language
    // find exact matching locale
    if (locales.includes(locale.toLowerCase())) return locale.toLowerCase()
    const localeShort = locale.split('-')[0]
    // find first part of locale
    if (locales.includes(localeShort)) return localeShort
    if (locales.includes(`${localeShort}-${localeShort}`))
      return `${localeShort}-${localeShort}`
    return locales.find((v) => {
      const short = v.split('-')[0]
      return localeShort === short
    })
  }
}
const LanguageHandler: FunctionComponent = ({ children }) => {
  const router = useRouter()
  const defaultLocale =
    router.locale !== router.defaultLocale // if you aren't on a default locale url, presume it's correct
      ? `${router.locale}`
      : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        findMatchingLocale(router.locales!) || `${router.locale}`
  const forceLanguage =
    Constants.simulate.FORCE_LANGUAGE || API.getStoredLocale(defaultLocale)
  if (router.locale?.toLowerCase() !== forceLanguage.toLowerCase()) {
    API.setStoredLocale(
      router.locales?.includes(forceLanguage) ? forceLanguage : defaultLocale,
    )
  }
  Strings.setLanguage(forceLanguage)
  return <>{children}</>
}

export default LanguageHandler
