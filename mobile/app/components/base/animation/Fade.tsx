import { FunctionComponent, useEffect } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import useIsMount from 'common/hooks/useIsMount'
import { easingConfigFade } from 'project/animation-util/reanimations'
import { ViewProps } from 'react-native'

export type FadeType = ViewProps & {
  value?: number // between 0 and 1
  startValue?: number
  autostart?: boolean
  delay?: number
  duration?: number
  animatedValue?: number
}

const Fade: FunctionComponent<FadeType> = ({
  value,
  delay = 0,
  autostart,
  duration = easingConfigFade.duration,
  startValue = 0,
  ...props
}) => {
  const isMount = useIsMount()
  const animationValue = useSharedValue<number>(autostart ? startValue : value)

  useEffect(() => {
    if (isMount && !autostart) return // determine whether to start animation on mount
    if (!delay && value) {
      animationValue.value = withTiming(value, {
        ...easingConfigFade,
        duration,
      })
    } else {
      setTimeout(() => {
        animationValue.value = withTiming(value, {
          ...easingConfigFade,
          duration,
        }) // animate to new value
      }, delay)
    }
  }, [
    value,
    isMount,
    delay,
    duration,
    animationValue.value,
    autostart,
    animationValue,
  ])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animationValue.value,
    }
  })

  // @ts-ignore
  return <Animated.View {...props} style={[animatedStyle, props.style]} />
}

export default Fade
