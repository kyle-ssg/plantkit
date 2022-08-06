import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

export default function asStyle<
  T extends {
    [key: string]: ViewStyle | ImageStyle | TextStyle
  },
>(arg: T): T {
  return arg
}
