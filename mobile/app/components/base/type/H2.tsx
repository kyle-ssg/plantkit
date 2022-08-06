import { FC, ReactNode } from 'react'
import { TextStyle } from 'react-native'

interface Props {
  accessible?: boolean
  accessibilityLabel?: string
  style?: TextStyle | TextStyle[]
  children?: ReactNode
}

const h2: FC<Props> = ({ accessible, accessibilityLabel, style, children }) => (
  <Text
    accessible={accessible}
    accessibilityLabel={accessibilityLabel}
    style={style ? [Styles.h2, style] : Styles.h3}
  >
    {children}
  </Text>
)

export default h2
