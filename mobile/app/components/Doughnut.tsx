import * as React from 'react'
import { FC } from 'react' // we need this to make JSX compile
import { StyleSheet, TextInput, View } from 'react-native'

import Animated, {
  useAnimatedProps,
  useSharedValue,
  interpolateColor,
  withTiming,
} from 'react-native-reanimated'
import Svg, { Circle, G } from 'react-native-svg'

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)
const AnimatedCircle = Animated.createAnimatedComponent(Circle)

type DoughnutType = {
  percentage?: number
  radius?: number
  strokeWidth?: number
  max?: number
}

const Doughnut: FC<DoughnutType> = ({
  percentage = 0,
  radius = 40,
  strokeWidth = 10,
  max = 100,
}) => {
  const animated = useSharedValue(0)
  const circleRef = React.useRef()
  const inputRef = React.useRef()
  const circumference = 2 * Math.PI * radius
  const halfCircle = radius + strokeWidth
  const animation = (toValue: number) => {
    animated.value = withTiming(toValue, {
      duration: 1000,
    })
  }
  const animatedProps = useAnimatedProps(() => {
    const maxPerc = (100 * animated.value) / max
    const stroke = interpolateColor(
      animated.value,
      [0, 50, 70, 100],
      [palette.danger, palette.warn, palette.primaryLight, palette.primary],
    )
    const strokeDashoffset = circumference - (circumference * maxPerc) / 100
    return {
      strokeDashoffset,
      stroke,
    }
  })
  const animatedTextProps = useAnimatedProps(() => {
    return {
      text: `${Math.round(animated.value)}%`,
    }
  })

  React.useEffect(() => {
    animation(percentage)
  }, [percentage])

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
          <AnimatedCircle
            ref={circleRef}
            cx='50%'
            cy='50%'
            r={radius}
            fill='transparent'
            strokeWidth={strokeWidth}
            strokeLinecap='round'
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
            animatedProps={animatedProps}
          />
          <Circle
            cx='50%'
            cy='50%'
            r={radius}
            fill='transparent'
            strokeWidth={strokeWidth}
            strokeLinejoin='round'
            strokeOpacity='.1'
          />
        </G>
      </Svg>
      <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid='transparent'
        editable={false}
        defaultValue={0}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2, textAlign: 'center' },
        ]}
        animatedProps={animatedTextProps}
      />
    </View>
  )
}

export default Doughnut
