import { FC } from 'react'
import withScreen, { IRouteParams, Screen } from './withScreen'
import ScreenContainer from 'components/ScreenContainer'
import Styles from '../style/_style_screen'
import { RouteUrls } from '../route-urls'
import { Tabs } from 'components/extras/Tabs'
import { SceneMap } from 'react-native-tab-view'

type HomeScreen = Screen & {
  modalVisible: boolean
  modal?: boolean
  push: (name: string, routeParams?: Partial<IRouteParams>) => void
}
const FirstRoute = () => <View></View>

const SecondRoute = () => <View></View>

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
})
const HomeScreen: FC<HomeScreen> = ({
  push,
  modal,
  dismissModal,
  canGoBack,
  pop,
}) => {
  // const goGeneric = () => push(RouteUrls.mainApp, {})
  const click = () => {
    push(RouteUrls.mainApp)
  }
  const clickModal = () => {
    push('ModalScreen2')
  }
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ])

  return (
    <ScreenContainer withoutSafeAreaView style={Styles.body}>
      {/*{modal ? (*/}
      {/*  <>*/}
      {/*    <Row space>*/}
      {/*      {canGoBack && <Button onPress={pop}>Back</Button>}*/}
      {/*      <Button onPress={dismissModal}>Close</Button>*/}
      {/*    </Row>*/}
      {/*    <Button onPress={clickModal}>Push</Button>*/}
      {/*  </>*/}
      {/*) : (*/}
      {/*  <Button onPress={click}>Push</Button>*/}
      {/*)}*/}
    </ScreenContainer>
  )
}

export default withScreen(HomeScreen)
