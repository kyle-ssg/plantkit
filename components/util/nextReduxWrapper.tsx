import { createWrapper } from 'next-redux-wrapper'
import { getStore, StoreStateType } from 'common/store'
import { Store } from 'redux'
import { Project } from 'common/project'

export const nextReduxWrapper = createWrapper<Store<StoreStateType>>(getStore, {
  debug: Project.logs.DISPATCHER,
})
