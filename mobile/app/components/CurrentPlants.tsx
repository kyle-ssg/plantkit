import { FC } from 'react'
import Button from 'components/base/forms/Button'
import { useNavigation } from '@react-navigation/native'
import { RouteUrls } from '../route-urls'
import { TPlant } from '../plantData'
import { usePlants } from 'common/hooks/usePlants'
import PlantSummary from 'components/PlantSummary'
import { CurrentPlant } from 'common/types/responses' // we need this to make JSX compile
import dayjs from 'dayjs'
import DateTimePicker from 'components/DateSelect'

type CurrentPlantsType = {}

const CurrentPlants: FC<CurrentPlantsType> = ({}) => {
  const {
    addPlant,
    plants = [] as CurrentPlant[],
    updatePlant,
    removePlant,
  } = usePlants()
  const navigation = useNavigation()
  const onPress = () => {
    navigation.push(RouteUrls.SearchScreen, {
      onPress: (plant: TPlant) => {
        navigation.pop()
        addPlant({ plant, datePlanted: new Date().toISOString() })
      },
    })
  }
  return (
    <>
      <Button onPress={onPress} theme='text'>
        Add Plant
      </Button>
      <Row style={styles.container}>
        {plants?.map((plant, i) => (
          <View style={Styles.mr20} key={i}>
            <PlantSummary
              style={styles.summary}
              plant={plant.plant}
              delay={0}
            />
            <Row style={Styles.mb10}>
              <Text>Planted: </Text>
              <DateTimePicker
                onChange={(v) => {
                  updatePlant({
                    index: i,
                    plant: { ...plant, datePlanted: v.toISOString() },
                  })
                }}
                value={plant.datePlanted}
              />
            </Row>
            <View style={Styles.centeredContainer}>
              <Row>
                <Text>Harvest: </Text>
                <Flex>
                  <Text weight='bold'>
                    {dayjs(plant.datePlanted)
                      .add(plant.plant.durationMonths, 'month')
                      .format('Do MMM YY')}
                  </Text>
                </Flex>
                <Row>
                  <Button
                    onPress={() => removePlant({ index: i })}
                    style={Styles.ph10}
                    theme='text'
                  >
                    <FA5Pro
                      style={[Styles.h3, Styles.textDanger]}
                      name='trash'
                    />
                  </Button>
                </Row>
              </Row>
            </View>
          </View>
        ))}
      </Row>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },
  summary: {
    width: 300,
  },
  summaryContainer: {},
})
export default CurrentPlants
