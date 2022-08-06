import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging'
import { getApi } from 'common/api'
import { ApiTypes } from 'common/api/types/api-types'
import { Platform } from 'react-native'

if (typeof messaging === 'undefined') {
  console.warn(
    'Install @react-native-firebase/messaging ^12.9.3 for push notification support',
  )
}
const PushManager = class {
  token = null
  onNotification = null
  refreshTokenListener = null

  getInitialNotification = () => messaging().getInitialNotification()

  getToken = async () => {
    if (Platform.OS === 'ios') {
      return messaging().getAPNSToken()
    }
    return messaging().getToken()
  }

  subscribe = (topic) => {
    getApi()?.log('PUSH_NOTIFICATIONS', `Subscribed to ${topic}`)
    return messaging().subscribeToTopic(topic)
  }

  unsubscribe = (topic) => {
    getApi()?.log('PUSH_NOTIFICATIONS', `Unsubscribed to ${topic}`)
    return messaging().unsubscribeFromTopic(topic)
  }

  stop = () => {
    this.token = null
    this._notificationListener = null
  } // remove old listener

  _notificationListener = (
    notification: FirebaseMessagingTypes.RemoteMessage,
    foreground?: boolean,
  ) => {
    this.onNotification && this.onNotification(notification, foreground)
  }

  init = async (onNotification, silent) => {
    this.onNotification = onNotification
    messaging().onNotificationOpenedApp((notification) => {
      if (this._notificationListener) {
        this._notificationListener(notification)
      }
    })
    messaging().onMessage((notification) => {
      if (this._notificationListener) {
        this._notificationListener(notification, true)
      }
    })

    messaging()
      .getInitialNotification()
      .then((res) => {
        if (res) {
          this._notificationListener(res)
        }
      })
    if (this.token) {
      return this.token
    }
    let token
    if (!silent) {
      await messaging().requestPermission()
      token = await messaging().getToken()
    }

    this.refreshTokenListener = messaging().onTokenRefresh((token) => {
      if (token) {
        this.token = token
      }
    })
    return token
  }
}
const pushManager: ApiTypes['push'] = new PushManager()
export default pushManager
