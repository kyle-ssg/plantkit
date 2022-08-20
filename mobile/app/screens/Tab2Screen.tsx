import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { FC, useEffect } from 'react'
import { useDeviceToken } from 'common/hooks/useDeviceToken'
import OnboardingWall from 'components/OnboardingWall'
import { useTab } from 'common/hooks/useTab'
import { useSharedValue } from 'react-native-reanimated'
import usePlantData from '../usePlantData'
import Doughnut from 'components/Doughnut'

type Tab2Screen = Screen & {}

const plantNames = ['Tomatoes']

const Tab2Screen: FC<Tab2Screen> = ({}) => {
  const { deviceToken } = useDeviceToken()

  const { tab } = useTab()
  const isFocused = tab === 0
  const active = useSharedValue(isFocused ? 1 : 0)
  const data = usePlantData(deviceToken?.id)
  useEffect(() => {
    active.value = isFocused ? 1 : 0
  }, [isFocused])

  if (!deviceToken)
    return (
      <ScreenContainer>
        <OnboardingWall animatedValue={active} />
      </ScreenContainer>
    )
  return (
    <ScreenContainer withTabs>
      <Row style={Styles.p15}>
        {!!data &&
          Object.keys(data).map((v, i) => {
            const value = data[v]
            return (
              <View key={v} style={styles.card}>
                <Text style={Styles.mb10} size='h2'>
                  {plantNames[i]}
                </Text>
                <View style={Styles.centeredContainer}>
                  <Doughnut
                    radius={100}
                    percentage={
                      Math.ceil(Math.max(0, Math.min(100, value)) / 10) * 10
                    }
                  />
                </View>
              </View>
            )
          })}
      </Row>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 290,
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
})

export default withScreen(Tab2Screen)
