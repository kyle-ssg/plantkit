import { Text, TextProps } from 'react-native'
import { FC } from 'react'
import { asStyleProp, cn } from '../../../style/_style_screen'
import Animated from 'react-native-reanimated'

const textSizeClass = asStyleProp({
  regular: '',
  medium: 'textMedium',
  small: 'textSmall',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
})

const textWeightClass = asStyleProp({
  regular: '',
  bold: 'textBold',
})

export type TextType = TextProps & {
  muted?: boolean
  light?: boolean
  size?: keyof typeof textSizeClass
  weight?: keyof typeof textWeightClass
  animated?: boolean
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
        {
          text: true,
          textMuted: props.muted,
          textWhite: props.light,
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
