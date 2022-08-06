import { StyleSheet } from 'react-native'
import Row from './base/grid/Row'
import FA5Pro from 'react-native-vector-icons/FontAwesome5Pro'
import { Strings } from 'project/localisation'
import { palette, styleVariables } from 'app/style/style_variables'
import { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
  style?: any
  testID?: string
}

const ErrorMessage: FC<Props> = ({ style, testID, children }) => {
  if (children === null || typeof children === 'undefined' || !children) {
    return null
  }
  return (
    <Row testID={testID} style={[style]}>
      <FA5Pro
        name='exclamation-circle'
        style={Styles.pr5}
        size={20}
        color={palette.danger}
      />
      <Text style={styles.ErrorMessageText}>
        {typeof children === 'string' ? children : 'Error processing request'}
      </Text>
    </Row>
  )
}

export const SuccessMessage: FC<Props> = ({ testID, style, children }) => {
  if (children === null || typeof children === 'undefined' || !children) {
    return null
  }
  return (
    <Row testID={testID} style={[style]}>
      <FA5Pro
        name='check-circle'
        style={Styles.pr5}
        size={20}
        color={palette.success}
      />
      <Text style={styles.SuccessMessageText}>
        {typeof children === 'string' ? children : Strings.defaultErrorMessage}
      </Text>
    </Row>
  )
}

export default ErrorMessage

const styles = StyleSheet.create({
  ErrorMessageText: {
    color: palette.danger,
    fontFamily: styleVariables.normalFontFamily,
  },
  SuccessMessageText: {
    color: palette.primary,
  },
})
