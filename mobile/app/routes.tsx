import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { RouteUrls } from './route-urls'
import BottomTabsNavigator from 'navigation/BottomTabsNavigator'
import HomeScreen from 'screens/HomeScreen'
import WebScreen from 'screens/WebScreen'
import Tab1Screen from 'screens/Tab1Screen'
import Tab2Screen from 'screens/Tab2Screen'
import ModalScreen from 'screens/ModalScreen'
import PlantScreen from 'screens/PlantScreen'

import SettingsScreen from 'screens/SettingsScreen'

import SearchScreen from 'screens/SearchScreen'

import Tab3Screen from 'screens/Tab3Screen'

// END OF IMPORT

export interface IRoute {
  options?: Partial<NativeStackNavigationOptions>
  component: any
  params?: Record<string, any>
}

// Contains default route config and components
export const routes: Record<RouteUrls, IRoute> = {
  [RouteUrls.mainApp]: {
    options: {
      title: '',
      headerShown: false,
    },
    component: BottomTabsNavigator,
  },

  [RouteUrls.web]: {
    options: {
      title: '',
    },
    component: WebScreen,
  },

  [RouteUrls.HomeScreen]: {
    options: {},
    component: HomeScreen,
  },
  [RouteUrls.Tab1Screen]: {
    options: {
      headerShown: false,
    },
    component: Tab1Screen,
  },
  [RouteUrls.Tab2Screen]: {
    options: {
      headerShown: false,
    },
    component: Tab2Screen,
  },
  [RouteUrls.ModalScreen]: {
    options: {
      presentation: 'modal',
      headerShown: false,
    },
    params: {},
    component: ModalScreen,
  },
  [RouteUrls.PlantScreen]: {
    options: {},
    component: PlantScreen,
  },
  [RouteUrls.PlantScreen]: {
    options: {
      headerShown: true,
      headerBackTitle: '',
    },
    component: PlantScreen,
  },
  [RouteUrls.SettingsScreen]: {
    options: {
      headerShown: true,
      headerBackTitle: '',
      title: 'Settings',
    },
    component: SettingsScreen,
  },
  [RouteUrls.SearchScreen]: {
    options: {
      headerShown: true,
      headerBackTitle: '',
      title: 'Settings',
    },
    component: SearchScreen,
  },
  [RouteUrls.Tab3Screen]: {
    options: {},
    component: Tab3Screen,
  },
  // END OF SCREENS
}

// @ts-ignore
global.routes = routes
