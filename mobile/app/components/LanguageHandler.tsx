import { FC } from 'react'
import { Constants } from 'common/utils'
import { Strings } from 'project/localisation'

type LanguageHandlerType = {
  defaultLocale?: string
}
const LanguageHandler: FC<LanguageHandlerType> = ({
  children,
  defaultLocale,
}) => {
  const forceLanguage =
    Constants.simulate.FORCE_LANGUAGE ||
    defaultLocale ||
    Constants.defaultLocale
  if (Strings.getLanguage() !== forceLanguage) {
    Strings.setLanguage(forceLanguage)
  }
  return <>{children}</>
}

export default LanguageHandler
