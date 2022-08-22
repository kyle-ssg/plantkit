import { FC } from 'react'
import Doughnut from 'components/Doughnut'
import usePlantData from '../usePlantData'
import { useDeviceToken } from 'common/hooks/useDeviceToken' // we need this to make JSX compile

type PlantDataType = {
  size: 'regular' | 'mini'
}
const plantNames = [
  {
    text: 'Tomatoes',
    short: '🍅',
  },
  {
    text: 'Strawberries',
    short: '🍓',
  },
]

const PlantData: FC<PlantDataType> = ({ size = 'regular' }) => {
  const { deviceToken } = useDeviceToken()
  const data = usePlantData(deviceToken?.id)

  return (
    <Row style={Styles.p15}>
      {!!data &&
        Object.keys(data).map((v, i) => {
          const value = data[v]
          return (
            <View key={v} style={[styles[`card${size}`], Styles.mr10]}>
              {size !== 'mini' && (
                <Text style={Styles.mb10} size='h2'>
                  {plantNames[i].text}
                </Text>
              )}
              <View style={Styles.centeredContainer}>
                <Doughnut
                  prefix={plantNames[i].short}
                  radius={size === 'regular' ? 100 : 40}
                  percentage={
                    Math.ceil(Math.max(0, Math.min(100, value)) / 10) * 10
                  }
                />
              </View>
            </View>
          )
        })}
    </Row>
  )
}

const styles = StyleSheet.create({
  cardregular: {
    height: 280,
    backgroundColor: 'white',
    padding: 20,
    aspectRatio: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 20,
  },
  cardmini: {
    height: 90,
    backgroundColor: 'white',
    padding: 5,
    aspectRatio: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 15,
  },
})
export default PlantData
