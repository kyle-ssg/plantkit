import { CommonActions, NavigationContainerRef } from '@react-navigation/native'
import { Utils } from 'common/utils'
import { createRef } from 'react'

export const navigationRef = createRef<NavigationContainerRef<any>>()

type MenuType = {
  setShowMenu: (show: boolean) => void
  setNavigation: (navigation: any) => void
}
export const menuRef = createRef<MenuType>()

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params)
}
export function rootPush(name, params, key) {
  if (navigationRef.current) {
    // @ts-ignore
    navigationRef.current?.navigate({
      name,
      key: key ? `${key}` : Utils.GUID(),
      params,
    })
  }
}

export function resetTo(index, routes) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  )
}
