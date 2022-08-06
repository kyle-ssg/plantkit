import { FC, useCallback } from 'react'
import { ButtonNav } from 'components/./base/forms/Button'
import { useNavigation } from '@react-navigation/native'
import { palette, styleVariables } from '../style/style_variables'
import FA5Pro from 'react-native-vector-icons/FontAwesome5Pro'

type ComponentType = { tintColor?: string }

const ModalCloseButton: FC<ComponentType> = ({}) => {
  const navigation = useNavigation()
  const pop = useCallback(() => {
    // @ts-ignore
    navigation.pop()
  }, [navigation])
  return (
    <ButtonNav onPress={pop}>
      <FA5Pro
        style={{
          color: palette.primary,
          fontSize: styleVariables.fontSizeH1,
        }}
        name='times'
      />
    </ButtonNav>
  )
}

export default ModalCloseButton
