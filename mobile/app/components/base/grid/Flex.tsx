import { FC, ReactNode } from 'react'
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native'

export type FlexType = {
  accessible?: boolean
  accessibilityLabel?: string
  value?: number
  children?: ReactNode
  style?: StyleProp<ViewStyle>
  pointerEvents?: ViewProps['pointerEvents']
  testID?: string
  space?: boolean
}

const Flex: FC<FlexType> = ({
  value = 1,
  accessible,
  accessibilityLabel,
  style,
  space,
  pointerEvents,
  testID,
  children,
}) => {
  // @ts-ignore
  const _style: ReactNative.ViewStyle = [
    { flex: value },
    space && { justifyContent: 'space-between' },
  ]
    // @ts-ignore
    .concat(style)
  return (
    <View
      pointerEvents={pointerEvents}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      style={_style}
      testID={testID}
    >
      {children}
    </View>
  )
}

export default Flex
