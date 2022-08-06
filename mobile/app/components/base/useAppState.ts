import { useCallback, useEffect } from 'react'
import { AppState } from 'react-native'

export default function useAppState(
  onActive: () => void,
  onInactive?: () => void,
) {
  const handleChange = useCallback(
    (newState) => {
      if (newState === 'active') {
        onActive()
      } else {
        !!onInactive && onInactive()
      }
    },
    [onActive, onInactive],
  )

  useEffect(() => {
    AppState.addEventListener('change', handleChange)

    return () => {
      AppState.removeEventListener('change', handleChange)
    }
  }, [handleChange])
}
