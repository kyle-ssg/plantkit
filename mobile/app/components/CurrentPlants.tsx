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
          <Row style={[Styles.mr20, Styles.alignStart]} key={i}>
            <PlantSummary
              hideData
              style={styles.summary}
              plant={plant.plant}
              delay={0}
            />
            <View style={Styles.m10}>
              <View style={styles.removeContainer}>
                <Button
                  onPress={() => removePlant({ index: i })}
                  style={Styles.ph10}
                  theme='text'
                >
                  <FA5Pro style={[Styles.h3, Styles.textDanger]} name='trash' />
                </Button>
              </View>

              <Text size='h3' weight='bold' style={Styles.mb5}>
                {plant.plant.title}
              </Text>
              <Text style={Styles.mb5}>Planted</Text>
              <DateTimePicker
                onChange={(v) => {
                  updatePlant({
                    index: i,
                    plant: { ...plant, datePlanted: v.toISOString() },
                  })
                }}
                value={plant.datePlanted}
              />
              <View style={Styles.mt10}>
                <Text style={Styles.mb5}>Harvest</Text>
                <View>
                  <Text weight='bold'>
                    {dayjs(plant.datePlanted)
                      .add(plant.plant.durationMonths, 'month')
                      .format('Do MMM YY')}
                  </Text>
                </View>
              </View>
            </View>
          </Row>
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
  removeContainer: {
    position: 'absolute',
    right: 0,
    top: -10,
  },
  summary: {
    width: 200,
  },
  summaryContainer: {},
})
export default CurrentPlants
