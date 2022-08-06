import { getStrings } from '../strings'

export const errorHandler =
  (error: { status: number; data?: Record<string, any> }) => () => {
    switch (error?.status) {
      case 404: // Gateway timeout
        return getStrings()['404']
      default:
        break
    }
  }
