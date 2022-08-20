import { useEffect, useRef, useState } from 'react'
import firestore from '@react-native-firebase/firestore'

const usePlantData = (id: string) => {
  const snapRef = useRef<() => void>(null)
  const [data, setData] = useState()

  useEffect(() => {
    if (snapRef.current) {
      snapRef.current()
    }
    if (id) {
      snapRef.current = firestore()
        .collection('data')
        .doc(id)
        .onSnapshot((snapshot) => {
          const val = snapshot.data()
          setData(val)
        })
    }
    return () => snapRef.current?.()
  }, [id])
  return data
}

export default usePlantData
