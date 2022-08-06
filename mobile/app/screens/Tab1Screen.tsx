import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { FC, useMemo, useState } from 'react'
import plantData from '../plantData'
import { filter } from 'lodash'
import PlantSummary from 'components/PlantSummary'
type Tab1Screen = Screen & {}

const Tab1Screen: FC<Tab1Screen> = ({ push }) => {
  const [month, setMonth] = useState('March')
  const data = useMemo(() => {
    return filter(plantData.plants, (plant) => {
      return plant.sow.includes(month)
    })
  }, [month])
  // const month = moment().format('MMMM')
  return (
    <ScreenContainer style={Styles.body}>
      {/*<View style={[Styles.container, Styles.mh15, Styles.mt10]}>*/}
      {/*  <Text animated weight='bold' size='medium' muted>*/}
      {/*    What to plant in {month}*/}
      {/*  </Text>*/}
      {/*</View>*/}
      <Row style={styles.container}>
        {data?.map((v) => (
          <>
            <PlantSummary plant={v} key={v.title} />
            <PlantSummary plant={v} key={v.title} />
            <PlantSummary plant={v} key={v.title} />
            <PlantSummary plant={v} key={v.title} />
            <PlantSummary plant={v} key={v.title} />
            <PlantSummary plant={v} key={v.title} />
            <PlantSummary plant={v} key={v.title} />
          </>
        ))}
      </Row>
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
