import {
  CommonActions,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { styleVariables } from 'app/style/style_variables'
import {
  ComponentType,
  ReactChildren,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react'
import {
  StatusBar,
  StatusBarProps,
  StatusBarStyle,
  ViewStyle,
} from 'react-native'
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { ScreenErrorBoundary } from 'screens/ScreenErrorBoundary'

export interface IRouteParams {
  [extraProps: string]: any // Means that extra props are fine
  statusBar: StatusBarProps
  screenOptions: Partial<NativeStackNavigationOptions>
}
export type Screen = {
  push: (name: string, routeParams?: Partial<IRouteParams>) => void
  navigate: (name: string, routeParams?: Partial<IRouteParams>) => void
  pop: () => void
  dismissModal: () => void
  canGoBack: () => boolean
  replace: (name: string, routeParams?: Partial<IRouteParams>) => void
  resetTo: (name: string, routeParams?: Partial<IRouteParams>) => void
  setOptions: (options: Partial<NativeStackNavigationOptions>) => void
  setStatusBar: (colour: StatusBarStyle) => void
  style: ViewStyle
  children: ReactChildren
}

interface IRouteProps extends RouteProp<ParamListBase, string> {
  params: IRouteParams
}

export type ScreenProps = {
  navigation: NativeStackNavigationProp<any> & {
    replace: (name: string, params: IRouteParams) => void
  }
  route: {
    params?: IRouteParams
    name: string
  }
}

const withScreen = (Component: ComponentType) => {
  return function WithScreen(props: ScreenProps) {
    const route = useRoute<IRouteProps>()
    const statusColour = useRef(
      route?.params?.statusBar?.barStyle ||
        styleVariables.defaultStatusBarColour,
    )
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    useEffect(() => {
      if (
        (route?.params?.statusBar?.barStyle ||
          styleVariables.defaultStatusBarColour) !== statusColour.current
      ) {
        statusColour.current =
          route?.params?.statusBar?.barStyle ||
          styleVariables.defaultStatusBarColour
        StatusBar.setBarStyle(statusColour.current as StatusBarStyle, true)
      }
    }, [route])

    const resetTo = useCallback(
      (name, params) => {
        // @ts-ignore
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name, params }],
          }),
        )
      },
      [navigation],
    )

    const setStatusBar = useCallback((colour: StatusBarStyle) => {
      statusColour.current = colour
      StatusBar.setBarStyle(statusColour.current as StatusBarStyle, true)
    }, [])

    const screenOptions = route?.params?.screenOptions
    useLayoutEffect(() => {
      if (screenOptions) {
        navigation.setOptions(screenOptions)
      }
    }, [navigation, screenOptions])

    const push = useCallback(
      (name, params) => {
        navigation.push(name, params)
      },
      [navigation],
    )

    const navigate = useCallback(
      (name, params) => {
        navigation.navigate(name, params)
      },
      [navigation],
    )

    const replace = useCallback(
      (name, params) => {
        navigation.replace(name, params)
      },
      [navigation],
    )

    const pop = useCallback(() => {
      navigation.pop()
    }, [navigation])

    const dismissModal = useCallback(() => {
      // @ts-ignore
      navigation.getParent()?.pop()
    }, [navigation])

    const setOptions = useCallback(
      (options) => {
        navigation.setOptions(options)
      },
      [navigation],
    )

    return (
      <ScreenErrorBoundary>
        <Component
          // @ts-ignore
          push={push}
          navigate={navigate}
          pop={pop}
          dismissModal={dismissModal}
          resetTo={resetTo}
          replace={replace}
          setStatusBar={setStatusBar}
          canGoBack={navigation.canGoBack}
          setOptions={setOptions}
          {...route.params}
          {...props}
        />
      </ScreenErrorBoundary>
    )
  }
}

export default withScreen
