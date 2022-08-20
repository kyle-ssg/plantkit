import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import defaultNavigationOptions from '../style/navigation_styles'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RouteUrls } from '../route-urls'
import BottomNav from 'components/BottomNav'
import useInsets from 'components/base/useInset'
import Flex from 'components/base/grid/Flex'
import { useMemo } from 'react'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Navigator = Stack.Navigator

const Stack1 = () => (
  <Navigator
    screenOptions={defaultNavigationOptions}
    initialRouteName={RouteUrls.Tab1Screen}
  >
    <Stack.Screen
      name={RouteUrls.Tab1Screen}
      options={routes[RouteUrls.Tab1Screen].options}
      component={routes[RouteUrls.Tab1Screen].component}
      initialParams={routes[RouteUrls.Tab1Screen].params}
    />
  </Navigator>
)

const Stack2 = () => (
  <Navigator
    screenOptions={defaultNavigationOptions}
    initialRouteName={RouteUrls.Tab2Screen}
  >
    <Stack.Screen
      name={RouteUrls.Tab2Screen}
      options={routes[RouteUrls.Tab2Screen].options}
      component={routes[RouteUrls.Tab2Screen].component}
      initialParams={routes[RouteUrls.Tab2Screen].params}
    />
  </Navigator>
)

const Stack3 = () => (
  <Navigator
    screenOptions={defaultNavigationOptions}
    initialRouteName={RouteUrls.Tab3Screen}
  >
    <Stack.Screen
      name={RouteUrls.Tab3Screen}
      options={routes[RouteUrls.Tab3Screen].options}
      component={routes[RouteUrls.Tab3Screen].component}
      initialParams={routes[RouteUrls.Tab3Screen].params}
    />
  </Navigator>
)

const MainAppNavigator = ({}) => {
  const insets = useInsets()
  const navStyle = useMemo(() => {
    return [Styles.body]
  }, [insets])
  return (
    <Flex style={navStyle}>
      <Tab.Navigator
        screenOptions={defaultNavigationOptions as any}
        initialRouteName={`${RouteUrls.Tab3Screen}Container`}
        tabBar={(props) => <BottomNav {...props} />}
      >
        <Tab.Screen
          name={`${RouteUrls.Tab3Screen}Container`}
          component={Stack3}
        />
        <Tab.Screen
          name={`${RouteUrls.Tab1Screen}Container`}
          component={Stack1}
        />
        <Tab.Screen
          name={`${RouteUrls.Tab2Screen}Container`}
          component={Stack2}
        />
      </Tab.Navigator>
    </Flex>
  )
}

// const styles = StyleSheet.create({})

export default MainAppNavigator
