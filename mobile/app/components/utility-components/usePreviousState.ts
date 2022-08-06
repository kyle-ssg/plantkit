import { useEffect, useRef } from 'react'

export function usePreviousState(state: any) {
  const ref = useRef()
  useEffect(() => {
    ref.current = state
  })
  return ref.current
}
