import { FC } from 'react'
import { TPlant } from '../plantData'
import { Image } from 'react-native'
import { cn } from '../style/_style_screen'
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import {
  easingConfigSlideLong,
  immediateConfig,
} from 'project/animation-util/reanimations'

type PlantSummaryType = {
  plant: TPlant
  delay: number
  animatedValue: SharedValue<number>
}

const PlantSummary: FC<PlantSummaryType> = ({
  plant,
  delay,
  animatedValue,
}) => {
  const style = useAnimatedStyle(() => {
    const delayMultiple = (delay + 3) * (animatedValue.value ? 50 : 0)
    const translateY = withDelay(
      delayMultiple,
      withTiming(
        animatedValue.value ? 0 : 19,
        animatedValue.value ? easingConfigSlideLong : immediateConfig,
      ),
    )

    const opacity = withDelay(
      delayMultiple,
      withTiming(
        animatedValue.value ? 1 : 0,
        animatedValue.value ? easingConfigSlideLong : immediateConfig,
      ),
    )

    return {
      transform: [{ translateY }],
      opacity,
    }
  }, [])
  return (
    <Animated.View style={cn(styles.container, Styles.mb10, style)}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={plant.image} resizeMode='cover' />
      </View>
      <Text size='small'>{plant.title}</Text>
    </Animated.View>
  )
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    shadowColor: '#000',
  },
  container: {
    width: '16.6666666667%',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    padding: 9,
    aspectRatio: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.13,
    shadowRadius: 2.62,
    elevation: 3,
  },
})
export default PlantSummary
