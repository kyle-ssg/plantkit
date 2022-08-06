/**
 * Created by kylejohnson on 14/11/2015.
 */

import { FunctionComponent, useRef, useState } from 'react'
import FormGroup from 'components/base/grid/FormGroup'
import { palette } from 'app/style/style_variables'
import {
  Platform,
  StyleProp,
  TextInput as _TextInput,
  TextInputProps as _TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native'
import FA5Pro from 'react-native-vector-icons/FontAwesome5Pro'

export type TextInputProps = _TextInputProps & {
  title?: string
  style?: StyleProp<ViewStyle>
  invalid?: boolean
  disabled?: boolean
  textStyle?: TextStyle
  isLight?: boolean
  icon?: string
  iconColour?: string
}

const TextInput: FunctionComponent<TextInputProps> = (props) => {
  const inputRef = useRef<_TextInput>()
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(
    props.secureTextEntry,
  )

  const onFocus = (e) => {
    if (props.onFocus) {
      props.onFocus(e)
    }
  }

  const onBlur = (e) => {
    if (props.onBlur) {
      props.onBlur(e)
    }
  }

  const onChangeText = (text) => {
    if (!props.onChangeText) {
      return
    }
    props.onChangeText(text)
  }

  return (
    <>
      {props.title && (
        <FormGroup>
          <Text style={[Styles.textBold, props.textStyle]}>{props.title}</Text>
        </FormGroup>
      )}
      <View>
        <_TextInput
          {...props}
          secureTextEntry={isSecureTextEntry}
          onFocus={onFocus}
          editable={!props.disabled && props.editable !== false}
          onBlur={onBlur}
          onChangeText={onChangeText}
          style={[
            Styles.textInput,
            props.style,
            props.invalid && Styles.textInputError,
          ]}
          value={props.value}
          testID={props.testID}
          ref={inputRef}
          blurOnSubmit={Platform.OS === 'ios' && !props.multiline}
          placeholderTextColor={
            props.invalid ? palette.danger : 'rgba(11,16,46,0.5)'
          }
          selectionColor={palette.primary}
          multiline={props.multiline}
          textAlignVertical={props.textAlignVertical}
        />
        {props.icon ? (
          <>
            <FA5Pro
              solid
              style={Styles.textInputIcon}
              name={props.icon}
              size={20}
              color={props.iconColour || palette.primary}
            />
          </>
        ) : null}

        {props.secureTextEntry ? (
          <TouchableOpacity
            onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}
            style={[{ position: 'absolute', width: 50, right: 0, height: 50 }]}
          >
            <FA5Pro
              style={Styles.textInputIcon}
              name={isSecureTextEntry ? 'eye' : 'eye-slash'}
              size={20}
              color={palette.primary}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  )
}

export default TextInput
