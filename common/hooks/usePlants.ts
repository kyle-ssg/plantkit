import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Res } from '../types/responses'
import { Req } from '../types/requests'
import { StoreStateType } from '../store'

type InitialStateType = Res['plants'] | null

const initialState = null as InitialStateType

export const plantsSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    setPlants(state, action: PayloadAction<Req['setPlants']>) {
      state = action.payload
      return state
    },
    addPlant(state, action: PayloadAction<Req['addPlant']>) {
      state = (state || []).concat(action.payload)
      return state
    },
    removePlant(state, action: PayloadAction<Req['removePlant']>) {
      state = (state || []).filter((v, i) => i !== action.payload.index)
      return state
    },
    updatePlant(state, action: PayloadAction<Req['updatePlant']>) {
      state![action.payload.index] = action.payload.plant
      return state
    },
  },
})

export const plantsActions = plantsSlice.actions
export const usePlantsActions = () => {
  const dispatch = useDispatch()
  const setPlants = useCallback(
    (payload: Req['setPlants']) => {
      return dispatch(plantsActions.setPlants(payload))
    },
    [dispatch],
  )
  const addPlant = useCallback(
    (payload: Req['addPlant']) => {
      return dispatch(plantsActions.addPlant(payload))
    },
    [dispatch],
  )
  const removePlant = useCallback(
    (payload: Req['removePlant']) => {
      return dispatch(plantsActions.removePlant(payload))
    },
    [dispatch],
  )
  const updatePlant = useCallback(
    (payload: Req['updatePlant']) => {
      return dispatch(plantsActions.updatePlant(payload))
    },
    [dispatch],
  )
  return { setPlants, addPlant, removePlant, updatePlant }
}

const selectPlants = (state: StoreStateType) => state.plants

export const usePlants = () => {
  const { setPlants, addPlant, removePlant, updatePlant } = usePlantsActions()
  const plants = useSelector(selectPlants)
  return useMemo(
    () => ({ setPlants, plants, addPlant, removePlant, updatePlant }),
    [setPlants, plants, addPlant, removePlant, updatePlant],
  )
}
