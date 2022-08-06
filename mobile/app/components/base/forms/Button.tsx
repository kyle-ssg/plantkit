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
import { cn } from '../../../style/_style_screen'

export type ButtonType = PressableProps & {
  children: ReactNode
  icon?: boolean
  iconColour?: string
  theme?:
    | 'text'
    | 'tertiary'
    | 'link'
    | 'outlinePrimary'
    | 'secondary'
    | 'primary'
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
  theme,
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
        textStyle,
        {
          buttonPrimaryText: theme === 'primary',
          buttonPrimaryTextPressed: pressed && theme === 'primary',

          buttonTextText: theme === 'text',
          buttonTextPressed: pressed && theme === 'text',

          buttonSecondaryText: theme === 'primary',
          buttonSecondaryTextPressed: pressed && theme === 'primary',

          buttonTertiaryText: theme === 'tertiary',
          buttonTertiaryTextPressed: pressed && theme === 'tertiary',

          buttonLinkText: theme === 'link',
          buttonLinkTextPressed: pressed && theme === 'link',

          buttonOutlinePrimaryText: theme === 'outlinePrimary',
          buttonOutlinePrimaryTextPressed:
            pressed && theme === 'outlinePrimary',
        },
        pressed ? pressedTextStyle : 0,
      ),
    [pressedTextStyle, textStyle, theme],
  )

  const pressableStyle = useCallback(
    ({ pressed }) =>
      cn(
        'buttonGroup',
        {
          buttonGroupPressed: pressed,
          buttonDisabled: disabled,

          buttonPrimary: theme === 'primary',
          buttonPrimaryPressed: pressed && theme === 'primary',

          buttonText: theme === 'text',

          buttonSecondary: theme === 'secondary',
          buttonSecondaryPressed: pressed && theme === 'secondary',

          buttonTertiary: theme === 'tertiary',
          buttonTertiaryPressed: pressed && theme === 'tertiary',

          buttonLink: theme === 'link',
          buttonLinkPressed: pressed && theme === 'link',

          buttonOutlinePrimary: theme === 'outlinePrimary',
          buttonOutlinePrimaryPressed: pressed && theme === 'outlinePrimary',
        },
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
        {Utils.reactChildIsString(children)
          ? ({ pressed }) => (
              // @ts-ignore
              <Text style={textStyles(pressed)}>
                {/*@ts-ignore*/}
                {children.length === 1 ? children[0] : children}
              </Text>
            )
          : children}
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
