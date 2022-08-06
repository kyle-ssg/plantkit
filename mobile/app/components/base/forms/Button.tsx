import Text from 'components/base/type/Text'
import {
  Pressable,
  PressableAndroidRippleConfig,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native'
import Utils from 'common/utils/base/_utils'
import { debounce } from 'lodash'
import { FunctionComponent, ReactNode, useCallback, useMemo } from 'react'
import FA5Pro from 'react-native-vector-icons/FontAwesome5Pro'
import { asStyleProp, cn } from '../../../style/_style_screen'

const themeClass = asStyleProp({
  text: 'buttonText',
  tertiary: 'buttonTertiary',
  link: 'buttonLink',
  outlinePrimary: 'buttonOutlinePrimary',
  secondary: 'buttonSecondary',
  primary: 'buttonPrimary',
})

export type ButtonType = PressableProps & {
  children: ReactNode
  icon?: boolean
  iconColour?: string
  theme?: keyof typeof themeClass
  textStyle?: StyleProp<TextStyle | TextStyle[]>
  pressedStyle?: StyleProp<ViewStyle> | ViewStyle[]
  pressedTextStyle?: TextStyle | TextStyle[]
  style?: StyleProp<ViewStyle>
  throttle?: number
}

const circleButtonRipple: PressableAndroidRippleConfig = {
  color: 'rgba(0,0,0,.15)',
  borderless: true,
}

export const darkAndroidRipple: PressableAndroidRippleConfig = {
  color: 'rgba(0,0,0,.05)',
  borderless: false,
}

const Button: FunctionComponent<ButtonType> = ({
  disabled,
  android_ripple,
  children,
  style,
  pressedStyle,
  pressedTextStyle,
  textStyle,
  icon,
  theme = 'primary',
  iconColour,
  onPress,
  throttle: _throttle = 500,
  ...rest
}) => {
  const onPressThrottle =
    onPress && debounce(onPress, _throttle, { leading: true })

  const textStyles = useCallback(
    (pressed) =>
      cn(
        'buttonText',
        `${themeClass[theme]}Text`,
        textStyle,
        pressed ? `${themeClass[theme]}TextPressed` : 0,
        pressed && pressedTextStyle,
      ),
    [pressedTextStyle, textStyle, theme],
  )

  const pressableStyle = useCallback(
    ({ pressed }) =>
      cn(
        'buttonGroup',
        themeClass[theme],
        pressed ? `${themeClass[theme]}Pressed` : 0,
        pressed && pressedStyle,
        style,
      ),
    [style, disabled, pressedStyle, theme],
  )

  return (
    <View style={Styles.buttonContainer}>
      <Pressable
        {...rest}
        onPress={onPressThrottle}
        style={pressableStyle}
        disabled={disabled}
        android_ripple={android_ripple || darkAndroidRipple}
      >
        {({ pressed }) => (
          // @ts-ignore
          <Text style={textStyles(pressed)}>
            {/*@ts-ignore*/}
            {children}
          </Text>
        )}
      </Pressable>
      {icon ? (
        <View style={Styles.buttonIcon}>
          <FA5Pro solid name={icon} size={18} color={iconColour || 'white'} />
        </View>
      ) : null}
    </View>
  )
}

export const ButtonNav: FunctionComponent<ButtonType> = (props) => {
  return (
    <Button
      {...props}
      android_ripple={circleButtonRipple}
      style={[props.style, Styles.buttonNav]}
    />
  )
}

export default Button
