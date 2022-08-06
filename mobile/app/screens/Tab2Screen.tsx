import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { FC } from 'react'

type Tab2Screen = Screen & {}

const Tab2Screen: FC<Tab2Screen> = ({}) => {
  return (
    <ScreenContainer style={Styles.body}>
      <Text>I am the Tab2Screen</Text>
    </ScreenContainer>
  )
}

export default withScreen(Tab2Screen)
