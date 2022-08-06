import { AnyAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import { CreateApiOptions } from '@reduxjs/toolkit/dist/query/createApi'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { StoreStateType } from '../../store'
import { getStrings } from '../../strings'
import { Constants } from '../constants'

export function extractRehydrationInfo(
  action: AnyAction,
  {
    reducerPath,
  }: {
    reducerPath: string
  },
) {
  if (action.type === HYDRATE) {
    return action.payload[reducerPath]
  }
}

export const baseApiOptions = (queryArgs?: Partial<FetchBaseQueryArgs>) => {
  const res: Pick<
    CreateApiOptions<any, any, any, any>,
    | 'baseQuery'
    | 'refetchOnReconnect'
    | 'refetchOnFocus'
    | 'extractRehydrationInfo'
  > = {
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://jsonplaceholder.typicode.com/',
      prepareHeaders: (headers, { getState }) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const state = getState() as StoreStateType
        headers.set('Accept-Language', getStrings().getLanguage())
        if (Constants.E2E) {
          headers.set('E2E-Test', '1')
        }
        return headers
      },
      ...queryArgs,
    }),
    refetchOnFocus: true,
    refetchOnReconnect: true, // todo: we need to setup listeners
    extractRehydrationInfo: (action, { reducerPath }) => {
      if (action.type === HYDRATE) {
        return action.payload[reducerPath]
      }
    },
  }
  return res
}
