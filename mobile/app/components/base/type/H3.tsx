import { FC, ReactNode } from 'react'
import { TextStyle } from 'react-native'

interface Props {
  accessible?: boolean
  accessibilityLabel?: string
  style?: TextStyle | TextStyle[]
  children?: ReactNode
}

const h3: FC<Props> = ({ accessible, accessibilityLabel, style, children }) => (
  <Text
    accessible={accessible}
    accessibilityLabel={accessibilityLabel}
    style={style ? [Styles.h3, style] : Styles.h3}
  >
    {children}
  </Text>
)

export default h3
