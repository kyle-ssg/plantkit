import { Constants } from '../utils/constants'
import { LocalizedStringsMethods } from './types/string-types'

export type LanguageContent = typeof defaultContent

export type LocalizedStrings = LocalizedStringsMethods & LanguageContent

type StringsSingleton = {
  instance: LocalizedStrings | undefined
}

const defaultContent = {
  hello: 'Hello',
  link: 'Link',
  disabled: 'Disabled',
  search: 'Search',
  home: 'Home',
  login: 'Login',
  pleaseSelect: 'Please Select',
  defaultErrorMessage: 'An unexpected error has occurred',
  404: 'Request item not found',
}

const strings: StringsSingleton = {
  instance: undefined,
}

const getStrings: () => LocalizedStrings = () => {
  if (!strings.instance) {
    throw new Error(
      'Strings is not initialized. Make sure Web or Mobile sets strings.instance',
    )
  }
  return strings.instance
}

const setStrings = (stringsParam: LocalizedStrings) => {
  strings.instance = stringsParam
  initBlobby()
}

const stringRecords: Record<string, LanguageContent> = {
  en: defaultContent,
  de: {
    hello: 'Hello(de)',
    link: 'Link(de)',
    disabled: 'Disabled(de)',
    home: 'Home(de)',
    login: 'Login(de)',
    search: 'Search(de)',
    pleaseSelect: 'Please Select(de)',
    defaultErrorMessage: 'An unexpected error has occurred(de)',
    404: 'Request item not found(de)',
  },
}

const initBlobby = () => {
  if (Constants.simulate.FORCE_LANGUAGE === 'blobby') {
    const blobby = {} as LanguageContent
    Object.keys(defaultContent).map((key) => {
      // @ts-ignore
      const val = defaultContent[key]
      const words = val.split(' ')
      let idx = 0
      const newWordsBlobby = words.map((word: string, index: number) => {
        const arr = ['eeeee', 'blob', 'blobby', 'wuueeeeh']

        if (idx === arr.length - 1) {
          idx = 0
        } else {
          idx++
        }
        if (word.indexOf('{') !== -1) {
          // reserve params
          return word
        }
        return arr[index]
      })
      blobby[key as keyof LanguageContent] = `${newWordsBlobby
        .join(' ')
        .trim()}`
    })
    stringRecords.blobby = blobby
  }
}

export { stringRecords, getStrings, setStrings }
