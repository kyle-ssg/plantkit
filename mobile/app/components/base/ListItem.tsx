import { Platform, TouchableNativeFeedback } from 'react-native'
import Flex from './grid/Flex'
import Container from 'components/base/grid/Container'
import Row from './grid/Row'
import {
  ComponentType,
  FC,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from 'react'

export type ListItemType = {
  accessible?: boolean
  accessibilityLabel?: string
  active?: boolean
  icon?: ReactNode
  rightElement?:
    | ComponentType<any>
    | ReactElement<any, string | JSXElementConstructor<any>>
  testID?: string
  index?: number
  onPress?: () => void
  style?: any
  disabled?: boolean
}

export const ListItem: FC<ListItemType> = ({
  accessible,
  active,
  testID,
  accessibilityLabel,
  style,
  icon,
  rightElement,
  disabled,
  children,
  onPress = null,
}) => {
  const content = (
    <View style={[disabled && Styles.listItemDisabled]}>
      <Container style={Styles.pb10}>
        <Row>
          {icon ? <View style={Styles.pr10}>{icon}</View> : null}
          <View>{children}</View>
          <Flex style={Styles.alignItemsEnd}>{rightElement}</Flex>
        </Row>
      </Container>
    </View>
  )

  return onPress ? (
    <View style={[Styles.listItem, style, active && Styles.listItemActive]}>
      {Platform.OS === 'android' ? (
        <TouchableNativeFeedback
          testID={testID}
          accessible={accessible}
          accessibilityLabel={accessibilityLabel}
          onPress={disabled ? null : onPress}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          {content}
        </TouchableNativeFeedback>
      ) : (
        <TouchableOpacity
          testID={testID}
          accessible={accessible}
          accessibilityLabel={accessibilityLabel}
          activeOpacity={0.8}
          onPress={disabled ? null : onPress}
        >
          {content}
        </TouchableOpacity>
      )}
    </View>
  ) : (
    <View style={[Styles.listItem, style, active && Styles.listItemActive]}>
      {content}
    </View>
  )
}

export default ListItem
