import { FC, useCallback, useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { TextStyle, ViewStyle } from 'react-native'

type Props = {
  format?: string
  text: string
  textStyle?: TextStyle[]
  style?: ViewStyle
  onChange: (date: Date) => void
}

const DateSelectText: FC<Props> = ({ onChange, text, style, textStyle }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const toggleVisible = useCallback(() => {
    setIsVisible(!isVisible)
  }, [isVisible])
  const onConfirm = useCallback(
    (value) => {
      setIsVisible(false)
      onChange(value)
    },
    [onChange],
  )
  return (
    <>
      <TouchableOpacity onPress={toggleVisible} style={style}>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isVisible}
        mode='date'
        onConfirm={onConfirm}
        onCancel={toggleVisible}
      />
    </>
  )
}

export default DateSelectText
