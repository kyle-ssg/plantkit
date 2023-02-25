import ScreenContainer from 'components/ScreenContainer'
import React, { useEffect, useRef } from 'react'
import withScreen, { Screen } from './withScreen'
import MD from 'react-native-markdown-display'
import { useDeviceOrientation } from '@react-native-community/hooks'
import { Dimensions, ScrollViewProps, ScrollView } from 'react-native'
import _ from 'lodash'
type Tab3Screen = Screen & {}
const recipes = _.sortBy(
  [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../recipes/pasta-alla-zozzona').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../recipes/bolognese').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../recipes/beurre-blanc').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../recipes/pasanda').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../recipes/curry-base').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../recipes/pizza-dough').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../recipes/cookies').default,
  ],
  'title',
)
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { easingConfigFade } from 'project/animation-util/reanimations'
const Tab3Screen: React.FC<Tab3Screen> = ({}) => {
  const orientation = useDeviceOrientation()
  const ref = useRef<ScrollView>()
  const scrollValue = useSharedValue(0)

  useEffect(() => {
    ref?.current?.scrollTo({ y: 0, animated: false })
  }, [orientation])
  const scrollHandler = useAnimatedScrollHandler((event) => {
    const newVal = event.contentOffset.y ? 1 : 0
    if (scrollValue.value !== newVal) {
      scrollValue.value = withTiming(newVal, {
        ...easingConfigFade,
      })
    }
  })
  const buttonStyle = useAnimatedStyle(() => {
    return {
      opacity: scrollValue.value,
    }
  }, [scrollValue])
  return (
    <Flex>
      <ScreenContainer withoutSafeAreaView withTabs>
        <Animated.ScrollView
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          pagingEnabled
          ref={ref}
          bounces={false}
        >
          <Flex
            value={2}
            style={[
              styles.container,
              { height: Dimensions.get('window').height },
            ]}
          >
            <Row style={{ flexWrap: 'wrap' }}>
              {recipes.map((v, i) => (
                <TouchableOpacity
                  onPress={() => {
                    ref.current.scrollTo({ y: DeviceHeight * (i + 1) })
                  }}
                  style={{
                    paddingVertical: 20,
                    width: DeviceWidth / 3 - 27,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text>{v.title}</Text>
                </TouchableOpacity>
              ))}
            </Row>
          </Flex>
          {recipes.map((r, i) => (
            <Row key={i} style={styles.slide}>
              <Flex
                value={2}
                style={[
                  styles.container,
                  { height: Dimensions.get('window').height },
                ]}
              >
                <MD style={mdStyle}>{r.instructions}</MD>
              </Flex>
              <Flex
                style={[
                  styles.container,
                  {
                    height: Dimensions.get('window').height,
                  },
                  styles.dark,
                ]}
              >
                <MD style={ingredientsStyle}>{r.ingredients}</MD>
              </Flex>
            </Row>
          ))}
        </Animated.ScrollView>
      </ScreenContainer>
      <Animated.View style={buttonStyle}>
        <TouchableOpacity
          onPress={() => {
            ref.current.scrollTo({ y: 0 })
          }}
          style={{
            position: 'absolute',
            bottom: 50,
            zIndex: 20,
            right: 50,
            width: 44,
            height: 44,
            borderRadius: 22,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: palette.primary,
          }}
        >
          <View>
            <FA5Pro style={{ color: 'white', fontSize: 20 }} name='arrow-up' />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </Flex>
  )
}

const styles = StyleSheet.create({
  slide: {
    alignItems: 'stretch',
  },
  container: {
    padding: 40,
    paddingTop: 70,
  },
  dark: {
    backgroundColor: '#eaeaea',
  },
  text: {
    fontSize: 20,
    letterSpacing: 1.25,
  },
})

const ingredientsStyle = {
  // @ts-ignore
  heading1: [Styles.h2, Styles.mb15, Styles.mt15],
  list_item: [styles.text, Styles.mb5],
}
const mdStyle = {
  // @ts-ignore
  heading1: [Styles.h1, Styles.mb5],
  heading3: [Styles.textBold, Styles.mb10, { fontSize: 24 }],
  heading2: [Styles.textBold, Styles.mv10, { fontSize: 24 }],
  list_item: [styles.text, Styles.mb5],
}
export default withScreen(Tab3Screen)
