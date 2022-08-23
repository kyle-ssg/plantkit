import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import plantData from '../plantData'
import { filter } from 'lodash'
import { useSharedValue } from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { API } from 'project/api'
import { useTab } from 'common/hooks/useTab'
import PlantList from 'components/PlantList'
import moment from 'moment'

type Tab1Screen = Screen & {}
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const Tab1Screen: FC<Tab1Screen> = ({ push }) => {
  const [month, setMonth] = useState(moment().format('MMMM'))
  const { tab } = useTab()
  const isFocused = tab === 1
  const active = useSharedValue(isFocused ? 1 : 0)
  useEffect(() => {
    active.value = isFocused ? 1 : 0
  }, [isFocused, active])
  const data = useMemo(() => {
    return filter(plantData.plants, (plant) => {
      return plant.sow.includes(month)
    })
  }, [month])
  const showMonthSelect = useCallback(() => {
    API.showOptions('Select a Month', months).then((res) => {
      active.value = 0
      setMonth(months[res])
      active.value = 1
    })
  }, [setMonth, active])
  return (
    <ScreenContainer withTabs>
      <View style={[Styles.container, Styles.mh15, Styles.mt10]}>
        <TouchableOpacity onPress={showMonthSelect}>
          <Text animated weight='bold' size='medium' muted>
            {month} <FA5Pro name='chevron-down' />
          </Text>
        </TouchableOpacity>
      </View>
      <PlantList month={month} animatedValue={active} data={data} />
    </ScreenContainer>
  )
}

export default withScreen(Tab1Screen)
