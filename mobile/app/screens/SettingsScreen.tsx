import Text from 'components/base/type/Text'
import ScreenContainer from 'components/ScreenContainer'
import React from 'react'
import withScreen, { Screen } from './withScreen'

type SettingsScreen = Screen & {}

const SettingsScreen: React.FC<SettingsScreen> = ({ children }) => {
  return (
    <ScreenContainer style={Styles.body}>
      <Text>I am the SettingsScreen</Text>
    </ScreenContainer>
  )
}

export default withScreen(SettingsScreen)
