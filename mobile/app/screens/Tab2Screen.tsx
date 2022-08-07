import ScreenContainer from 'components/ScreenContainer'
import withScreen, { Screen } from './withScreen'
import { FC, useEffect } from 'react'
import { useDeviceToken } from 'common/hooks/useDeviceToken'
import OnboardingWall from 'components/OnboardingWall'
import { useTab } from 'common/hooks/useTab'
import { useSharedValue } from 'react-native-reanimated'
import Button from 'components/base/forms/Button'
import openConfirm from 'components/utility-components/openConfirm'

type Tab2Screen = Screen & {}

const Tab2Screen: FC<Tab2Screen> = ({}) => {
  const { deviceToken, setDeviceToken } = useDeviceToken()

  const { tab } = useTab()
  const isFocused = tab === 1
  const active = useSharedValue(isFocused ? 1 : 0)
  useEffect(() => {
    active.value = isFocused ? 1 : 0
  }, [isFocused])
  const clearDeviceToken = () => {
    openConfirm(
      'Are you sure?',
      'This will clear your garden, you can access it again later by re-entering your key.',
      () => {
        setDeviceToken(null)
      },
    )
  }

  if (!deviceToken)
    return (
      <ScreenContainer style={Styles.body}>
        <OnboardingWall animatedValue={active} />
      </ScreenContainer>
    )
  return (
    <ScreenContainer style={Styles.body}>
      <Button onPress={clearDeviceToken} theme='secondary'>
        Clear
      </Button>
    </ScreenContainer>
  )
}

export default withScreen(Tab2Screen)
