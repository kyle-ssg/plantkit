import Text from 'components/base/type/Text'
import ScreenContainer from 'components/ScreenContainer'
import React from 'react'
import withScreen, { Screen } from './withScreen'

type PlantScreen = Screen & {}

const PlantScreen: React.FC<PlantScreen> = ({ children }) => {
  return (
    <ScreenContainer style={Styles.body}>
      <Text>I am the PlantScreen</Text>
    </ScreenContainer>
  )
}

export default withScreen(PlantScreen)
