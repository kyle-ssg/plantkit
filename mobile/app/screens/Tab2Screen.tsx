import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { FC, useEffect } from 'react'
import { useDeviceToken } from 'common/hooks/useDeviceToken'
import OnboardingWall from 'components/OnboardingWall'
import { useTab } from 'common/hooks/useTab'
import { useSharedValue } from 'react-native-reanimated'
import PlantData from 'components/PlantData'
import CurrentPlants from 'components/CurrentPlants'
type Tab2Screen = Screen & {}

const Tab2Screen: FC<Tab2Screen> = ({}) => {
  const { deviceToken } = useDeviceToken()

  const { tab } = useTab()

  const isFocused = tab === 2
  const active = useSharedValue(isFocused ? 1 : 0)
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
      <PlantData />
      <CurrentPlants />
    </ScreenContainer>
  )
}

export default withScreen(Tab2Screen)
