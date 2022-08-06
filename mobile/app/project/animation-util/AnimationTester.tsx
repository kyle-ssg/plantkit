import { FunctionComponent } from 'react'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

type ComponentType = {
  animatedValue: Animated.SharedValue<number>
  min?: number
  max?: number
}

const AnimationTester: FunctionComponent<ComponentType> = ({
  animatedValue,
  min = 0,
  max = 1,
}) => {
  const $min = useSharedValue(min)
  const $max = useSharedValue(max)
  const style = useAnimatedStyle(() => {
    return {
      width: 50,
      height: 50,
      position: 'absolute',
      right: 50,
      bottom: 50,
      backgroundColor: 'green',
      opacity: interpolate(
        animatedValue.value,
        [$min.value, $max.value],
        [0, 1],
      ),
      transform: [
        {
          rotate: `${interpolate(
            animatedValue.value,
            [min, (max - min) / 2, max],
            [0, 180, 360],
          )}deg`,
        },
      ],
    }
  })
  return <Animated.View style={style} />
}

export default AnimationTester
