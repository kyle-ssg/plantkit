import Text from 'components/base/type/Text'
import React from 'react'
import withScreen, { Screen } from './withScreen'
import Button from 'components/base/forms/Button'
import openConfirm from 'components/utility-components/openConfirm'
import { useDeviceToken } from 'common/hooks/useDeviceToken'
import DeviceInfo from 'react-native-device-info'
type SettingsScreen = Screen & {}

const SettingsScreen: React.FC<SettingsScreen> = ({ children }) => {
  const { setDeviceToken, deviceToken } = useDeviceToken()
  const clearDeviceToken = () => {
    openConfirm(
      'Are you sure?',
      'This will clear your garden, you can access it again later by re-entering your key.',
      () => {
        setDeviceToken(null)
      },
    )
  }

  return (
    <Flex style={[Styles.container, Styles.mt20]}>
      <Text danger style={Styles.mb10} weight='bold' size='h2'>
        Danger Zone
      </Text>
      <Text>{DeviceInfo.getReadableVersion()}</Text>
      <Row>
        {!!deviceToken && (
          <Button
            onPress={clearDeviceToken}
            theme='outlinePrimary'
            style={Styles.ph20}
          >
            Clear API Key
          </Button>
        )}
      </Row>
    </Flex>
  )
}

export default withScreen(SettingsScreen)
