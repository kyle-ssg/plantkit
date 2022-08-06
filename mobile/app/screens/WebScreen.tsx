import { Component, FunctionComponent } from 'react'
import withScreen, { Screen } from './withScreen'
import { WebView, WebViewProps } from 'react-native-webview'
import { NavigationContainer } from '@react-navigation/native'
import defaultNavigationOptions from '../style/navigation_styles'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Flex from 'components/base/grid/Flex'
import { palette } from '../style/style_variables'
import FA5Pro from 'react-native-vector-icons/FontAwesome5Pro'
import { SafeAreaView } from 'react-native'
import Loader from 'components/base/Loader'

type Props = Screen & {
  webViewProps: Partial<WebViewProps>
}
const safeAreaStyles = [Styles.body, Styles.flex]
const webScreenStyles = [StyleSheet.absoluteFill, Styles.centeredContainer]
class _WebScreen extends Component<Props> {
  state = {}
  webview = null
  onNavigationStateChange = (navState) => {
    this.props.setOptions({
      headerLeft: () =>
        navState.canGoBack ? (
          <TouchableOpacity onPress={() => this.webview?.goBack()}>
            <FA5Pro
              style={styles.icon}
              name='times'
              size={20}
              color={palette.primary}
            />
          </TouchableOpacity>
        ) : (
          <View />
        ),
    })
    this.props.webViewProps?.onNavigationStateChange &&
      this.props.webViewProps?.onNavigationStateChange(navState)
  }

  render() {
    return (
      <SafeAreaView style={safeAreaStyles}>
        <WebView
          ref={(webview) => (this.webview = webview)}
          renderLoading={() => (
            <Flex style={webScreenStyles}>
              <Loader />
            </Flex>
          )}
          startInLoadingState={true}
          {...this.props.webViewProps}
          onNavigationStateChange={this.onNavigationStateChange}
        />
      </SafeAreaView>
    )
  }
}

export const ConnectedWebScreen = withScreen(_WebScreen)

const Stack = createNativeStackNavigator()
const Navigator = Stack.Navigator

const TheComponent: FunctionComponent<Props> = ({ webViewProps }) => {
  return (
    <NavigationContainer independent>
      <Navigator
        screenOptions={defaultNavigationOptions}
        initialRouteName={'home'}
      >
        <Stack.Screen
          name={'home'}
          options={{ presentation: 'modal' }}
          component={ConnectedWebScreen}
          initialParams={{
            webViewProps: webViewProps || {
              source: { uri: 'https://google.com' },
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default withScreen(TheComponent)

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
  },
})
