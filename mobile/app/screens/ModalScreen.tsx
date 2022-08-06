import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { RouteUrls } from '../route-urls'
import ModalStack from 'navigation/ModalStack'
import Button from 'components/base/forms/Button'
import { FC } from 'react'
import { TypedNavigator } from '@react-navigation/core'

type ModalScreen = Screen & {}

const ModalScreen: FC<ModalScreen> = ({ pop, push }) => {
  return (
    <ScreenContainer style={Styles.body}>
      <Button onPress={() => push('ModalScreen2')}>Push</Button>

      <Button
        onPress={() => {
          pop()
        }}
      >
        Close
      </Button>
    </ScreenContainer>
  )
}

export default ModalStack(
  withScreen(ModalScreen),
  RouteUrls.ModalScreen,
  true,
  (Stack: TypedNavigator<any, any, any, any, any>) => (
    <>
      <Stack.Screen
        name={RouteUrls.ModalScreen}
        options={routes[RouteUrls.ModalScreen].options}
        component={routes[RouteUrls.ModalScreen].component}
      />
      <Stack.Screen
        name={'ModalScreen2'}
        initialParams={{ modal: true }}
        options={routes[RouteUrls.HomeScreen].options}
        component={routes[RouteUrls.HomeScreen].component}
      />
    </>
  ),
)
