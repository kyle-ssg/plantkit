// import SecuredStorage from 'react-native-secured-storage';
import MMKVStorage from 'react-native-mmkv-storage'
import { StorageType } from 'common/api/types/api-types'
import { getApi } from 'common/api'

export const MMKV = new MMKVStorage.Loader().withEncryption().initialize()

type CallbackType = (err: any, data: any) => void

const StorageManager = class {
  clear = async () => {
    getApi().log('STORAGE', 'CLEAR')
    return MMKV.clearStore()
  }

  getItem = async (key: string, cb: CallbackType) => {
    const str = MMKV.getString(key)
    cb && cb(null, str)
    return str
  }

  setItem = async (key: string, value) => {
    getApi().log('STORAGE', 'SET STRING', key, value)
    return MMKV.setStringAsync(key, value)
  }

  removeItem = async (key: string) => {
    getApi().log('STORAGE', 'REMOVE ITEM', key)
    MMKV.removeItem(key)
  }
}

export default new StorageManager() as StorageType
