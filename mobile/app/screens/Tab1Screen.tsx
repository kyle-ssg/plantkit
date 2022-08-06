import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { FC, useEffect, useMemo, useState } from 'react'
import plantData from '../plantData'
import { filter } from 'lodash'
import PlantSummary from 'components/PlantSummary'
import { useIsFocused } from '@react-navigation/native'
import { useSharedValue } from 'react-native-reanimated'
type Tab1Screen = Screen & {}

const Tab1Screen: FC<Tab1Screen> = ({ push }) => {
  const [month, setMonth] = useState('March')
  const data = useMemo(() => {
    return filter(plantData.plants, (plant, key) => {
      return plant.sow.includes(month)
    })
  }, [month])
  const isFocused = useIsFocused()
  const active = useSharedValue(isFocused ? 1 : 0)
  useEffect(() => {
    active.value = isFocused ? 1 : 0
  }, [isFocused])
  // const month = moment().format('MMMM')
  return (
    <ScreenContainer style={[Styles.body]}>
      {/*<View style={[Styles.container, Styles.mh15, Styles.mt10]}>*/}
      {/*  <Text animated weight='bold' size='medium' muted>*/}
      {/*    What to plant in {month}*/}
      {/*  </Text>*/}
      {/*</View>*/}
      <ScrollView bounces={false}>
        <Row style={styles.container}>
          {data
            .concat(data)
            .concat(data)
            .concat(data)
            .concat(data)
            .concat(data)
            .concat(data)
            .concat(data)
            .concat(data)
            .concat(data)
            .map((v, i) => (
              <>
                <PlantSummary
                  delay={Math.floor(i / 6)}
                  animatedValue={active}
                  plant={v}
                  key={v.title}
                />
              </>
            ))}
        </Row>
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
