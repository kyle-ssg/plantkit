import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userService, userSlice } from './hooks/useUser'
import { startupSlice } from './hooks/useStartup'
import { getApi } from './api'
import { localeSlice } from './hooks/useLocale'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { Persistor } from 'redux-persist/es/types'

import { tabSlice } from './hooks/useTab'
import { DeviceTokenSlice } from './hooks/useDeviceToken'
// END OF IMPORTS
const createStore = () => {
  const storage =
    getApi().reduxStorage ||
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('redux-persist/lib/storage').default
  const reducer = combineReducers({
    [userService.reducerPath]: userService.reducer,
    locale: localeSlice.reducer,
    startup: startupSlice.reducer,
    user: userSlice.reducer,
    tab: tabSlice.reducer,
    DeviceToken: DeviceTokenSlice.reducer,
    // END OF REDUCERS
  })

  return configureStore({
    reducer: persistReducer(
      {
        key: 'root',
        whitelist: ['user'],
        version: 1,
        storage,
      },
      reducer,
    ),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .concat(userService.middleware)
        // END OF MIDDLEWARE
        .concat(getApi().middlewares || []),
  })
}

type StoreType = ReturnType<typeof createStore>
let _store: StoreType
let _persistor: Persistor
export const getPersistor = () => _persistor
export const getStore = function (): StoreType {
  if (_store) return _store
  _store = createStore()
  _persistor = persistStore(_store)
  return _store
}

export type StoreStateType = ReturnType<StoreType['getState']>
