import { FC, ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export type ColumnType = {
  flexStyle?: any
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}

export const Column: FC<ColumnType> = ({ style, children }) => (
  <View style={[Styles.column, style]}>{children}</View>
)

export default Column
