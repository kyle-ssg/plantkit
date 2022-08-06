import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Res } from '../types/responses'
import { Req } from '../types/requests'
import { StoreStateType } from '../store'

type InitialStateType = Res['tab'] | null

const initialState = null as InitialStateType

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setTab(state, action: PayloadAction<Req['setTab']>) {
      state = action.payload
      return state
    },
  },
})

export const tabActions = tabSlice.actions
export const useTabActions = () => {
  const dispatch = useDispatch()
  const setTab = useCallback(
    (payload: Req['setTab']) => {
      return dispatch(tabActions.setTab(payload))
    },
    [dispatch],
  )
  return { setTab }
}

const selectTab = (state: StoreStateType) => state.tab

export const useTab = () => {
  const { setTab } = useTabActions()
  const tab = useSelector(selectTab)
  return useMemo(() => ({ setTab, tab }), [setTab, tab])
}
