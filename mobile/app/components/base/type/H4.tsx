import { TextStyle } from 'react-native'
import { FC, ReactNode } from 'react'

interface Props {
  accessible?: boolean
  accessibilityLabel?: string
  testID?: string
  style?: TextStyle | TextStyle[]
  children?: ReactNode
  numberOfLines?: number
}

const H4: FC<Props> = ({
  accessible,
  accessibilityLabel,
  testID,
  numberOfLines,
  style,
  children,
}) => (
  <Text
    testID={testID}
    accessible={accessible}
    accessibilityLabel={accessibilityLabel}
    numberOfLines={numberOfLines}
    style={style ? [Styles.h4, style] : Styles.h4}
  >
    {children}
  </Text>
)

export default H4
