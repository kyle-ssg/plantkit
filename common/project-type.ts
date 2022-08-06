export type CognitoConfig = {
  region: string
  userPoolId: string
  userPoolWebClientId: string
}
export default interface ProjectType {
  [extraProps: string]: any // Means that extra props are fine
  debug: boolean
  api: string
  ga: string
  cognito?: CognitoConfig
  cognitoMobile?: CognitoConfig
  logs: {
    DATA: boolean
    STORE: boolean
    STORAGE: boolean
    DISPATCHER: boolean
    SERVER: boolean
  }
  grecaptcher: string
  formly: string
  mobile: {
    useSecuredStorage: boolean
  }
}
