import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { FC, useEffect } from 'react'
import { useDeviceToken } from 'common/hooks/useDeviceToken'
import OnboardingWall from 'components/OnboardingWall'
import { useTab } from 'common/hooks/useTab'
import { useSharedValue } from 'react-native-reanimated'
import PlantData from 'components/PlantData'
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
      <Flex style={{ position: 'relative' }}>
        <PlantData />
      </Flex>
    </ScreenContainer>
  )
}

export default withScreen(Tab2Screen)
