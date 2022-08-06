import { useUser } from './useUser'
import { useEffect } from 'react'
import { getApi } from '../api'

export default function () {
  const { user } = useUser()
  useEffect(() => {
    if (user) {
      getApi().loginRedirect()
    }
  }, [user])
}
