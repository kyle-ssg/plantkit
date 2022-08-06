// import SecuredStorage from 'react-native-secured-storage';
import { API } from './api'
import nookies from 'nookies'
import { NextPageContext } from 'next'

const StorageManager = class {
  clear = async () => {
    console.error('Web does not support clear cookies')
    return Promise.resolve(false)
  }
  getItem = function (key: string, ctx?: NextPageContext) {
    API.log('STORAGE', 'GET', key, ctx)
    return Promise.resolve(nookies.get(ctx)[key])
  }
  setItem = function (key: string, value: string, ctx?: NextPageContext) {
    API.log('STORAGE', 'SET', key, value)
    return Promise.resolve(nookies.set(ctx, key, value, { path: '/' }))
  }
  removeItem = function (key: string, ctx?: NextPageContext) {
    API.log('STORAGE', 'REMOVE', key, ctx)
    return Promise.resolve(nookies.destroy(null, key, { path: '/' }))
  }
  getItemSync = function (key: string, ctx?: NextPageContext) {
    API.log('STORAGE', 'GET', key, ctx)
    return nookies.get(ctx)[key]
  }
  setItemSync = function (key: string, value: string, ctx?: NextPageContext) {
    API.log('STORAGE', 'SET', key, value)
    return nookies.set(ctx, key, value, { path: '/' })
  }
  removeItemSync = function (key: string, ctx?: NextPageContext) {
    API.log('STORAGE', 'REMOVE', key, ctx)
    return nookies.destroy(ctx, key, { path: '/' })
  }
}
export default new StorageManager()
