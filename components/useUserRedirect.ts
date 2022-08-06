import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useUser } from 'common/hooks/useUser'
import { StoreStateType } from 'common/store'

export default function useUserRedirect(): {
  user: StoreStateType['user']
  isReady: boolean
} {
  const router = useRouter()
  const { user } = useUser()
  const [isReady, setIsReady] = useState<boolean>(!!user)
  useEffect(() => {
    if (isReady) return
    if (!user && typeof window !== 'undefined') {
      const redirect = encodeURIComponent(router.route)
      const as = encodeURIComponent(router.asPath)
      let path = `/?redirect=${redirect}`
      if (redirect !== as) {
        path += `&as=${as}`
      }
      router.replace(path)
    } else {
      setIsReady(true)
    }
  }, [router, user, isReady])
  return {
    user,
    isReady,
  }
}
