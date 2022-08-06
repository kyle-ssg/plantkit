import {
  createContext,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Dimensions } from 'react-native'

const sm = 576
const md = 720
const lg = 960
const xl = 1140
const getBreakpoint = () => {
  const dimensions = Dimensions.get('window')
  const check = dimensions.width

  if (check < sm) {
    return 'xs'
  } else if (check < md) {
    return 'sm'
  } else if (check < lg) {
    return 'md'
  } else if (check < xl) {
    return 'lg'
  } else {
    return 'xl'
  }
}

export const breakpointValues = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
}

export const BreakpointContext = createContext<string>(getBreakpoint())

type ComponentType = {}

const TheComponent: FunctionComponent<ComponentType> = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState<string>(getBreakpoint())
  const breakpointRef = useRef<string>(breakpoint)
  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      const newBreakpoint = getBreakpoint()
      if (newBreakpoint !== breakpointRef.current) {
        breakpointRef.current = newBreakpoint
        setBreakpoint(newBreakpoint)
      }
    })
  }, [])
  return (
    <BreakpointContext.Provider value={breakpoint}>
      {children}
    </BreakpointContext.Provider>
  )
}

export default TheComponent
