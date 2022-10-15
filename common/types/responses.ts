// eslint-disable-next-line @typescript-eslint/no-empty-interface
import { TPlant } from '../../mobile/app/plantData'
export type CurrentPlant = { plant: TPlant; datePlanted: string }
export type Res = {
  startup: { locale: string }
  user: { id: string; locale: string }
  locale: { value: string }
  todo: { id: string }
  thing: { id: string }
  tab: { id: string }
  DeviceToken: { id: string }
  plants: CurrentPlant[]
  // END OF TYPES
}
