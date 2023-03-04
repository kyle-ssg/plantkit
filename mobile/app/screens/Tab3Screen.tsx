import ScreenContainer from 'components/ScreenContainer'
import React, { useEffect, useRef, useState } from 'react'
import withScreen, { Screen } from './withScreen'
import MD from 'react-native-markdown-display'
import { useDeviceOrientation } from '@react-native-community/hooks'
import { Dimensions, ScrollView, Share, TouchableOpacity } from 'react-native'
import _ from 'lodash'
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { easingConfigFade } from 'project/animation-util/reanimations'
import { useBreakpointSmaller } from 'components/base/BreakpointProvider'
import useInsets from 'components/base/useInset'
import {
  d2f,
  Ingredient,
  IngredientConversions,
} from 'common/recipes/Ingredient'
import { singular } from 'ssgrtk/dist/helpers/plural'

type Tab3Screen = Screen & {}

import Tooltip from 'components/Tooltip'
import { recipes } from 'common/recipes'
import Recipe from 'components/Recipe'
import { paddingBase } from '../style/style_grid'
import { useIsLandscape } from 'components/useIsLandscape'

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
  const tabs = useBreakpointSmaller('lg')
  const insets = useInsets()

  const columns = tabs ? 2 : 3
  const isLandscape = useIsLandscape()
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
            style={[
              styles.container,
              {
                width: isLandscape
                  ? Math.max(DeviceHeight, DeviceWidth)
                  : Math.min(DeviceHeight, DeviceWidth),
                height: Dimensions.get('window').height,
              },
            ]}
          >
            <Row
              style={{
                flexWrap: 'wrap',
                paddingTop: insets.top,
                width: isLandscape
                  ? Math.max(DeviceHeight, DeviceWidth)
                  : Math.min(DeviceHeight, DeviceWidth),
              }}
            >
              {recipes.map((v, i) => (
                <TouchableOpacity
                  onPress={() => {
                    ref.current.scrollTo({
                      y: DeviceHeight * (i + 1),
                    })
                  }}
                  style={{
                    paddingVertical: 20,
                    width: DeviceWidth / columns,
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
            <Recipe recipe={r} />
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
export default withScreen(Tab3Screen)
