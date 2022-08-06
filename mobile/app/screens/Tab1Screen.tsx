import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { FC } from 'react'
import moment from 'moment'

type Tab1Screen = Screen & {}
const month = moment().format('MMMM')
const Tab1Screen: FC<Tab1Screen> = ({ push }) => {
  return (
    <ScreenContainer style={Styles.body}>
      <View style={[Styles.container, Styles.mt10]}>
        <Text animated weight='bold' size='medium' muted>
          {month}
        </Text>
      </View>
    </ScreenContainer>
  )
}

export default withScreen(Tab1Screen)
