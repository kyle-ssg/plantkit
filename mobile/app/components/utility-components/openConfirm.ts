import { Alert } from 'react-native'
export default function (
  title: string,
  message: string,
  onYes: () => void,
  onNo?: () => void,
  yesText = 'Ok',
  noText = 'Cancel',
) {
  Alert.alert(title, message, [
    {
      text: noText,
      onPress: onNo,
      style: 'cancel',
    },
    { text: yesText, onPress: onYes },
  ])
}
