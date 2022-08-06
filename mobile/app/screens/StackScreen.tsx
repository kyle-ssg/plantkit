import { FunctionComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import defaultNavigationOptions from '../style/navigation_styles'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RouteUrls } from '../route-urls'
import withScreen, { Screen } from './withScreen'

type ComponentType = Screen & {}
const Stack = createNativeStackNavigator()
const Navigator = Stack.Navigator

const StackScreen: FunctionComponent<ComponentType> = () => {
  return (
    <NavigationContainer independent>
      <Navigator
        screenOptions={defaultNavigationOptions}
        initialRouteName={RouteUrls.HomeScreen}
      >
        <Stack.Screen
          name={RouteUrls.HomeScreen}
          options={routes[RouteUrls.HomeScreen].options}
          component={routes[RouteUrls.HomeScreen].component}
        />
        <Stack.Screen
          name={RouteUrls.Tab2Screen}
          options={routes[RouteUrls.Tab2Screen].options}
          component={routes[RouteUrls.Tab2Screen].component}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default withScreen(StackScreen)
