import { FC, ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export type ContainerType = {
  children?: ReactNode
  ml0?: boolean
  ml5?: boolean
  ml10?: boolean
  ml15?: boolean
  ml20?: boolean
  mr0?: boolean
  mr5?: boolean
  mr10?: boolean
  mr15?: boolean
  mr20?: boolean
  style?: StyleProp<ViewStyle>
}

const Container: FC<ContainerType> = ({
  ml0,
  ml5,
  ml10 = true,
  ml15,
  ml20,
  mr0,
  mr5,
  mr10 = true,
  mr15,
  mr20,
  style,
  children,
}) => (
  <View
    style={[
      ml10 && Styles.ml10,
      mr10 && Styles.mr10,
      ml0 && Styles.ml0,
      ml5 && Styles.ml5,
      ml15 && Styles.ml15,
      ml20 && Styles.ml20,
      mr0 && Styles.mr0,
      mr5 && Styles.mr5,
      mr15 && Styles.mr15,
      mr20 && Styles.mr20,
      style,
    ]}
  >
    {children}
  </View>
)

export default Container
