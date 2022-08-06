// @ts-ignore
const DEV = global.__DEV__
  ? // @ts-ignore
    global.__DEV__
  : typeof __DEV__ === 'undefined'
  ? false
  : __DEV__

export const Constants = {
  E2E: DEV && false,
  REQUEST_TIMEOUT: 10000,
  E2E_NAMESPACE: null,
  simulate: !DEV
    ? {}
    : {
        CONFIRM_EMAIL: false,
        FORCE_LANGUAGE: '',
        FORCE_PAGE: null,
        FORCE_SUB_PAGE: null,
      },
  defaultLocale: 'en',
}
