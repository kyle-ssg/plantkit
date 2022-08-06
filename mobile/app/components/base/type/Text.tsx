import { Text, TextProps } from 'react-native'
import { FC } from 'react'
import { cn, StylePropType } from '../../../style/_style_screen'
import Animated from 'react-native-reanimated'

export type TextType = TextProps & {
  muted?: boolean
  size?: 'regular' | 'medium' | 'small'
  weight?: 'bold' | 'regular'
  animated?: boolean
}
const textSizeClass: StylePropType<TextType['size']> = {
  regular: '',
  medium: 'textMedium',
  small: 'textSmall',
}
const textWeightClass: StylePropType<TextType['weight']> = {
  regular: '',
  bold: 'textBold',
}
const TextComponent: FC<TextType> = (props) => {
  // @ts-ignore
  const TextComponent: typeof Animated.Text = props.animated
    ? Animated.Text
    : Text
  return (
    <TextComponent
      {...props}
      style={cn(
        'text',
        {
          muted: props.muted,
        },
        Styles[textSizeClass[props.size]],
        Styles[textWeightClass[props.weight]],
        props.style,
      )}
    >
      {props.children}
    </TextComponent>
  )
}

export default TextComponent
