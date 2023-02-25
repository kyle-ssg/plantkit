import { FC, useEffect, useRef, useState } from 'react'
import { enableScreens, enableFreeze } from 'react-native-screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'project/api'
import '../routes'
import { getStore } from 'common/store'
import defaultNavigationOptions from '../style/navigation_styles'
import { RouteUrls } from '../route-urls'
import LinkHandler from 'components/LinkHandler'
import { Strings } from 'project/localisation'
import Flex from 'components/base/grid/Flex'
import { Constants } from 'common/utils'
import Loader from 'components/base/Loader'
import { DevSettings } from 'react-native'
import { API } from 'project/api'
import StorybookUIRoot from '../../.storybook/Storybook'
import { startup } from 'common/hooks/useStartup'
enableFreeze(true)

// import Cognito from "common/cognito";

// API.auth.Cognito.init(Project.cognitoMobile)

enableScreens()
enableFreeze(true)
const Stack = createNativeStackNavigator()
const Navigator = Stack.Navigator

type ComponentType = {}
const _bootstrapAsync = async (): Promise<{
  user: boolean
  showStorybook: boolean
}> => {
  let user, token
  const showStorybook = !!(await API.storage.getItem('storybook'))
  try {
    // user = await API.auth.Cognito.getSession();
    // token = user.accessToken?.jwtToken;
  } catch (e) {
    console.log(e)
  }

  if (token) {
    await startup(getStore(), {
      token,
      // user,
      locale: user?.locale || Strings.getLanguage(),
    })
    return { user, showStorybook }
  }
  return {
    user: false,
    showStorybook,
  }
}

const AppNavigator: FC<ComponentType> = ({}) => {
  const [user, setUser] = useState<boolean | null>(null)
  const [showStorybook, setShowStorybook] = useState<boolean>(false)
  const storybookRef = useRef<boolean>(showStorybook)
  const toggleStorybook = () => {
    setShowStorybook(!storybookRef.current)
    storybookRef.current = !storybookRef.current
    if (storybookRef.current) {
      API.storage.setItem('storybook', `true`)
    } else {
      API.storage.removeItem('storybook')
    }
  }

  useEffect(() => {
    _bootstrapAsync().then(({ user, showStorybook }) => {
      if (showStorybook) {
        setShowStorybook(true)
        storybookRef.current = true
      }
      setUser(user)
    })
    if (__DEV__) {
      DevSettings.addMenuItem('Toggle Storybook', toggleStorybook)
    }
    // eslint-disable-next-line
  }, [])

  if (showStorybook) {
    return <StorybookUIRoot />
  }
  if (user === null)
    // app is loading
    return <Flex style={Styles.centeredContainer}>{<Loader />}</Flex>

  let initialRoute = user ? RouteUrls.mainApp : RouteUrls.mainApp

  if (Constants.simulate.FORCE_PAGE) {
    initialRoute = Constants.simulate.FORCE_PAGE
  }

  return (
    <>
      <Navigator
        screenOptions={defaultNavigationOptions}
        initialRouteName={initialRoute}
      >
        <Stack.Screen
          name={RouteUrls.mainApp}
          options={routes[RouteUrls.mainApp].options}
          component={routes[RouteUrls.mainApp].component}
        />
        {/*Modals*/}
        <Stack.Screen
          name={RouteUrls.web}
          options={{ presentation: 'modal', headerShown: false }}
          component={routes[RouteUrls.web].component}
        />

        <Stack.Screen
          name={RouteUrls.HomeScreen}
          options={routes[RouteUrls.HomeScreen].options}
          component={routes[RouteUrls.HomeScreen].component}
        />

        <Stack.Screen
          name={RouteUrls.Tab1Screen}
          options={routes[RouteUrls.Tab1Screen].options}
          component={routes[RouteUrls.Tab1Screen].component}
        />

        <Stack.Screen
          name={RouteUrls.Tab2Screen}
          options={routes[RouteUrls.Tab2Screen].options}
          component={routes[RouteUrls.Tab2Screen].component}
        />

        <Stack.Screen
          name={RouteUrls.ModalScreen}
          options={routes[RouteUrls.ModalScreen].options}
          component={routes[RouteUrls.ModalScreen].component}
        />

        <Stack.Screen
          name={RouteUrls.PlantScreen}
          options={routes[RouteUrls.PlantScreen].options}
          component={routes[RouteUrls.PlantScreen].component}
        />

        <Stack.Screen
          name={RouteUrls.SettingsScreen}
          options={routes[RouteUrls.SettingsScreen].options}
          component={routes[RouteUrls.SettingsScreen].component}
        />

        <Stack.Screen
          name={RouteUrls.SearchScreen}
          options={routes[RouteUrls.SearchScreen].options}
          component={routes[RouteUrls.SearchScreen].component}
        />

        {/* END OF ROUTES*/}
      </Navigator>
      <LinkHandler />
    </>
  )
}

export default AppNavigator
