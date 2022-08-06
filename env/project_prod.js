export const Project = {
  debug: false,
  api: 'http://localhost:4000/',
  apiAuth: '',
  ga: '',
  logoutRedirect: '/',
  loginRedirect: '/account',
  cognito: {
    region: '',
    userPoolId: '',
    userPoolWebClientId: '',
  },
  cognitoMobile: {
    region: '',
    userPoolId: '',
    userPoolWebClientId: '',
  },
  codepush: {
    android: {
      production: 'yV-yBHA5oN37VcIbK6beYJpxEP5bwLnfxRFlg',
      staging: 'J0SLIPWal3apmqRASVN4GhKLhpOeRVsIZiemU',
    },
    ios: {
      production: 'cphbl2WbvVo3Maa_I8yW97-9W5RryaKklTWhx',
      staging: 'wP_hi3rhZrahFSetndAeBt2FAuLe-gzABtKys',
    },
  },
  logs: {
    EVENTS: true,
    DATA: false,
    STORE: false,
    DISPATCHER: false,
    COGNITO: false,
    STORAGE: false,
    SERVER: false,
    API: false,
    PUSH_NOTIFICATIONS: false,
  },
  grecaptcher: '6Lc1mf4UAAAAAC6uZ0HaGJ3ufgwCXY4GFoNhMeBD',
  formly: 'boilerplate',
}
