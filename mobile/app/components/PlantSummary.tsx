import { FC, useCallback } from 'react'
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
import { useNavigation } from '@react-navigation/native'
import { RouteUrls } from '../route-urls'
import { paddingBase } from '../style/style_grid'

type PlantSummaryType = {
  plant: TPlant
  delay: number
  replace?: boolean
  month?: string
  animatedValue?: SharedValue<number>
}

const PlantSummary: FC<PlantSummaryType> = ({
  plant,
  delay,
  animatedValue,
  month,
  replace: _replace,
}) => {
  // @ts-ignore
  const { push, replace } = useNavigation()
  const onPress = useCallback(() => {
    const func = _replace ? replace : push
    func(RouteUrls.PlantScreen, {
      plant,
      screenOptions: { title: plant.title },
    })
  }, [plant, push])
  const style =
    !!animatedValue &&
    useAnimatedStyle(() => {
      const delayMultiple = (delay + 3) * (animatedValue.value ? 50 : 0)
      const translateY = withDelay(
        delayMultiple,
        withTiming(
          animatedValue.value ? 0 : 19,
          animatedValue.value ? easingConfigSlideLong : immediateConfig,
        ),
      )

      const opacity =
        !!animatedValue &&
        withDelay(
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
  const indoors =
    !!plant.indoorsUntil && !!month && !plant.indoorsUntil.includes(month)
  return (
    <Animated.View style={cn(styles.container, Styles.mb10, style)}>
      <TouchableOpacity onPress={onPress} style={Styles.centeredContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={plant.image} resizeMode='cover' />
        </View>
        <Row style={Styles.centeredContainer}>
          <Text size='small'>{plant.title}</Text>
          {indoors && <FA5Pro style={styles.icon} name='house' />}
        </Row>
      </TouchableOpacity>
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
  icon: {
    color: palette.textMuted,
    marginLeft: paddingBase / 2,
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
