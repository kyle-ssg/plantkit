import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Res } from '../types/responses'
import { Req } from '../types/requests'
import { StoreStateType } from '../store'

type InitialStateType = Res['DeviceToken'] | null

const initialState = null as InitialStateType

export const DeviceTokenSlice = createSlice({
  name: 'DeviceToken',
  initialState,
  reducers: {
    setDeviceToken(state, action: PayloadAction<Req['setDeviceToken']>) {
      state = action.payload
      return state
    },
  },
})

export const DeviceTokenActions = DeviceTokenSlice.actions
export const useDeviceTokenActions = () => {
  const dispatch = useDispatch()
  const setDeviceToken = useCallback(
    (payload: Req['setDeviceToken']) => {
      return dispatch(DeviceTokenActions.setDeviceToken(payload))
    },
    [dispatch],
  )
  return { setDeviceToken }
}

const selectDeviceToken = (state: StoreStateType) => state.DeviceToken

export const useDeviceToken = () => {
  const { setDeviceToken } = useDeviceTokenActions()
  const deviceToken = useSelector(selectDeviceToken)
  return useMemo(
    () => ({ setDeviceToken, deviceToken }),
    [setDeviceToken, deviceToken],
  )
}
