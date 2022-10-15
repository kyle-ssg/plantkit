import { CurrentPlant } from './responses'

export type Req = {
  createThing: {}
  getTodo: { id: string }
  getUser: {}
  login: {}
  logout: {}
  setLocale: { value: string }
  startup: { locale: string; token?: string }
  setTab: { id: string }
  setDeviceToken: { id: string }
  setPlants: CurrentPlant[]
  addPlant: CurrentPlant
  removePlant: { index: number }
  updatePlant: { index: number; plant: CurrentPlant }
  // END OF TYPES
}
