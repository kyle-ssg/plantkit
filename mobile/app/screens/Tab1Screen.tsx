import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import plantData from '../plantData'
import { filter } from 'lodash'
import PlantSummary from 'components/PlantSummary'
import { useIsFocused } from '@react-navigation/native'
import { useSharedValue } from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { API } from 'project/api'
import { useTab } from 'common/hooks/useTab'
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
  const [month, setMonth] = useState('March')
  const { tab } = useTab()
  const isFocused = tab === 0
  const active = useSharedValue(isFocused ? 1 : 0)
  useEffect(() => {
    active.value = isFocused ? 1 : 0
  }, [isFocused])
  const data = useMemo(() => {
    return filter(plantData.plants, (plant, key) => {
      return plant.sow.includes(month)
    }).map((v, i) => (
      <PlantSummary
        delay={Math.floor(i / 6)}
        animatedValue={active}
        plant={v}
        key={v.title}
      />
    ))
  }, [month, active])
  const showMonthSelect = useCallback(() => {
    API.showOptions('Select a Month', months).then((res) => {
      active.value = 0
      setMonth(months[res])
      active.value = 1
    })
  }, [setMonth])
  // const month = moment().format('MMMM')
  return (
    <ScreenContainer style={[Styles.body]}>
      <View style={[Styles.container, Styles.mh15, Styles.mt10]}>
        <TouchableOpacity onPress={showMonthSelect}>
          <Text animated weight='bold' size='medium' muted>
            {month} <FA5Pro name='chevron-down' />
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView bounces={false}>
        <Row style={styles.container}>{data}</Row>
      </ScrollView>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },
})
export default withScreen(Tab1Screen)
