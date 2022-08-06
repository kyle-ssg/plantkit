import { useAppState } from '@react-native-community/hooks'
import { FunctionComponent, useEffect } from 'react'
import codePush from 'react-native-code-push'
import { Constants } from 'common/utils'
import { Project } from 'common/project'
import { Platform } from 'react-native'

type ComponentType = {}
const codePushOptions = {
  checkFrequency: __DEV__
    ? codePush.CheckFrequency.MANUAL
    : codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: {},
}

const CodepushUpdater: FunctionComponent<ComponentType> = ({}) => {
  const currentAppState = useAppState()

  useEffect(() => {
    if (currentAppState === 'active' && !Constants.E2E && !__DEV__) {
      codePush.getUpdateMetadata().then((v) => {
        if (v) {
          codePush.sync({
            ...codePushOptions,
            deploymentKey: v.deploymentKey,
          })
        } else {
          codePush.sync({
            ...codePushOptions,
            deploymentKey: Project.codepush[Platform.OS].production,
          })
        }
      })
    }
  }, [currentAppState])
  return null
}

export const downloadStaging = () => {
  codePush.sync({
    ...codePushOptions,
    deploymentKey: Project.codepush[Platform.OS].staging,
  })
}

export const downloadProduction = () => {
  codePush.sync({
    ...codePushOptions,
    deploymentKey: Project.codepush[Platform.OS].production,
  })
}

export default CodepushUpdater
