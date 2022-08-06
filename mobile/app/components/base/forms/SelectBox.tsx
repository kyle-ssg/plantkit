import FormGroup from '../grid/FormGroup'
import { API } from 'project/api'
import Row from '../grid/Row'
import { FC, ReactNode } from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import FA5Pro from 'react-native-vector-icons/FontAwesome5Pro'

interface Props {
  disabled?: boolean
  hideIcon?: boolean
  onPress?: () => void
  textStyle?: TextStyle
  containerStyle?: ViewStyle
  iconStyle?: {}
  children?: ReactNode
  options?: string[]
  title?: string
  onChange?: (index: string, item: number) => void
  onBlur?: () => void
  titleStyle?: TextStyle
  destructiveButton?: boolean
  style?: StyleProp<ViewStyle>
  icon?: ReactNode
  dropIcon?: ReactNode
}

const SelectBox: FC<Props> = ({
  options,
  title,
  onChange,
  onBlur,
  destructiveButton,
  disabled,
  onPress,
  textStyle,
  containerStyle,
  icon,
  hideIcon,
  children,
  style,
  titleStyle,
  dropIcon,
}) => {
  const onPressHandler = () => {
    if (!options || !options.length) return
    API.showOptions(title, options, true, false, destructiveButton, true).then(
      (index: number) => {
        if (onBlur) onBlur()
        if (onChange && index != null)
          onChange(
            index < options.length ? options[index] : null,
            index < options.length ? index : null,
          )
      },
    )
  }

  return (
    <View style={[style, { opacity: disabled ? 0.5 : 1 }]}>
      {!!title && (
        <FormGroup>
          <Text style={[Styles.inputLabel, titleStyle || {}]}>{title}</Text>
        </FormGroup>
      )}
      <TouchableOpacity
        activeOpacity={disabled ? 1 : 0.8}
        onPress={!disabled && (onPress || onPressHandler)}
        style={[Styles.selectBoxContainer, containerStyle || {}]}
      >
        <Row>
          {icon ? (
            <View style={{ marginRight: 10, top: 2 }}>{icon}</View>
          ) : null}

          <View style={Styles.pr15}>
            <Text numberOfLines={1} style={[{ top: 2 }, textStyle || {}]}>
              {children}{' '}
            </Text>
          </View>
          {!hideIcon && (
            <View
              style={[
                {
                  position: 'absolute',
                  right: 0,
                  top: 1,
                  height: 20,
                  paddingLeft: 15,
                  justifyContent: 'center',
                },
                Styles.pr5,
              ]}
            >
              {dropIcon ? (
                dropIcon
              ) : (
                <>
                  <FA5Pro name='chevron-down' />
                </>
              )}
            </View>
          )}
        </Row>
      </TouchableOpacity>
    </View>
  )
}

export default SelectBox
