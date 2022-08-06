import withScreen from './withScreen'
import ScreenContainer from 'components/ScreenContainer'
import { FC } from 'react'
import { ViewStyle } from 'react-native'

interface GenericScreen {
  text: string
  style: ViewStyle
  children?: any
}

const GenericScreen: FC<GenericScreen> = ({ children }) => {
  return (
    children || (
      <ScreenContainer testID='welcome'>
        <Text>I am a generic screen</Text>
      </ScreenContainer>
    )
  )
}

export default withScreen(GenericScreen)
