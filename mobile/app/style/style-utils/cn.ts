import { StyleProp, TextStyle, ViewStyle } from 'react-native'

type Argument<T> =
  | keyof T
  | (keyof T)[]
  | Record<keyof T, any>
  | StyleProp<TextStyle | TextStyle[]>
  | StyleProp<ViewStyle | ViewStyle[]>
  | number
  | boolean
  | null
  | undefined
export function classNames<T>(style: T) {
  const handleArgs = (args: Partial<Argument<T>>[]) => {
    let concatedStyles = []

    args.map((argument) => {
      const constructor = argument && argument.constructor

      if (constructor === String && style[argument]) {
        concatedStyles.push(style[argument])
      } else if (constructor === Array) {
        concatedStyles = concatedStyles.concat(...argument)
      } else if (constructor === Object) {
        if (style[Object.keys(argument)[0]] === undefined) {
          concatedStyles.push(argument)
          return
        }
        Object.entries(argument).map(([prop, value]) => {
          if (!!value && style[prop]) {
            concatedStyles.push(style[prop])
          }
        })
      }
    })

    return concatedStyles
  }

  return (...args: Partial<Argument<T>>[]) => handleArgs(args)
}
