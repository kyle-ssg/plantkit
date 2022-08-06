export type Req = {
  createThing: {}
  getTodo: { id: string }
  getUser: {}
  login: {}
  logout: {}
  setLocale: { value: string }
  startup: { locale: string; token?: string }
  setTab: { id: string }
  // END OF TYPES
}
