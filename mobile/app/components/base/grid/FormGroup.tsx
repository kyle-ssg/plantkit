import { FC, ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export type FormGroupType = {
  children: ReactNode
  style?: StyleProp<ViewStyle>
}

const FormGroup: FC<FormGroupType> = ({ style, children }) => (
  <View style={[Styles.pv5, style]}>{children}</View>
)

FormGroup.displayName = 'FormGroup'
export default FormGroup
