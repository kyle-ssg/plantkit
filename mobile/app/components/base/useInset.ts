type InsetType = {
  top: number
  bottom: number
  left: number
  right: number
}
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function useInsets(): InsetType {
  const { top, bottom, left, right } = useSafeAreaInsets()
  return {
    top: top || 0,
    bottom: bottom || 0,
    left: left || 0,
    right: right || 0,
  }
}
