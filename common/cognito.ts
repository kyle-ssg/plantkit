// import Amplify, { Auth } from 'aws-amplify'
// import { CognitoUser } from 'amazon-cognito-identity-js'
//
// const Cognito = {
//     init: (config) => {
//         Amplify.configure({
//             Auth: config,
//         })
//     },
//     signUp: async function (
//         username: string,
//         password: string,
//         attributes?: Record<any, any>,
//     ) {
//         try {
//             const { user, userConfirmed } = await Auth.signUp({
//                 username,
//                 password,
//                 attributes,
//             })
//             return {
//                 user,
//                 userConfirmed,
//             }
//         } catch (error) {
//             console.log('error signing up:', error)
//             throw error
//         }
//     },
//     getSession: async function () {
//         await Auth.currentAuthenticatedUser()
//         return await Auth.currentSession()
//     },
//     confirmSignUp: async function (username: string, code: string) {
//         return await Auth.confirmSignUp(username, code)
//     },
//     confirmSignIn: async function (code: string) {
//         return await Auth.confirmSignIn(this.user, code, 'SOFTWARE_TOKEN_MFA')
//     },
//
//     user: null,
//     login: async function (username: string, password: string): Promise<string> {
//         this.user = await Auth.signIn({
//             username,
//             password,
//         })
//         return this.user
//     },
//     currentAuthenticatedUser: async function (): Promise<CognitoUser> {
//         return await Auth.currentAuthenticatedUser()
//     },
//     completeNewPassword: async function (newPassword: string) {
//         return await Auth.completeNewPassword(this.user, newPassword)
//     },
//     resetPassword: async function (email: string) {
//         return await Auth.forgotPassword(email)
//     },
//     changePassword: async function (
//         username: string,
//         code: string,
//         password: string,
//     ) {
//         return await Auth.forgotPasswordSubmit(username, code, password)
//     },
//     logout: async function () {
//         return await Auth.signOut()
//     },
//     resendConfirmSignUp: async function (username: string) {
//         return await Auth.resendSignUp(username)
//     },
//     resendConfimationCode: async function (email: string) {
//         return await Auth.forgotPassword(email)
//     },
//     setupMfa: async function () {
//         return await Auth.setupTOTP(this.user)
//     },
//     verifyMfa: async function (authCode: string) {
//         const user = await this.currentAuthenticatedUser()
//         const res = await Auth.verifyTotpToken(user, authCode)
//         await Auth.setPreferredMFA(user, 'TOTP')
//         return res
//     },
// }
//
// export default Cognito
export default {}
