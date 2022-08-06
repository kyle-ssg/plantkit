import { ApiTypes } from './types/api-types'

type APISingleton<T extends ApiTypes = ApiTypes> = {
  instance: T | undefined
}

const api: APISingleton = {
  instance: undefined,
}

const getApi: () => ApiTypes = () => {
  if (!api.instance) {
    throw new Error(
      'API is not initialized. Make sure Web or Mobile sets api.instance',
    )
  }
  return api.instance
}

const setApi = <T extends ApiTypes>(apiParam: T) => {
  api.instance = apiParam
}

export { getApi, setApi }
