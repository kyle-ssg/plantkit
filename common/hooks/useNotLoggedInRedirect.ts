import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useUser } from './useUser'
import { getApi } from '../api'
import { StoreStateType } from '../store'

export default function useNotLoggedInRedirect(): {
  user: StoreStateType['user']
  isReady: boolean
} {
  const router = useRouter()
  const { user } = useUser()
  const [isReady, setIsReady] = useState<boolean>(!!user)
  useEffect(() => {
    if (isReady) return
    if (!user && typeof window !== 'undefined') {
      getApi().logoutRedirect?.()
    } else {
      setIsReady(true)
    }
  }, [router, user, isReady])
  return {
    user,
    isReady,
  }
}
