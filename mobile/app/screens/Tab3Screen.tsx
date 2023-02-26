import ScreenContainer from 'components/ScreenContainer'
import React, { useEffect, useRef, useState } from 'react'
import withScreen, { Screen } from './withScreen'
import MD from 'react-native-markdown-display'
import { useDeviceOrientation } from '@react-native-community/hooks'
import { Dimensions, ScrollView, Share } from 'react-native'
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
  const [tab, setTab] = useState(0)
  const tabs = useBreakpointSmaller('lg')
  const columns = tabs ? 1 : 3
  const insets = useInsets()
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
            <Row style={{ flexWrap: 'wrap', width: DeviceWidth }}>
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
          {recipes.map((r, i) =>
            tabs ? (
              <Flex
                style={[
                  styles.container,
                  {
                    height: Dimensions.get('window').height,
                    paddingTop: insets.top + 50,
                  },
                ]}
              >
                <Row style={Styles.p10}>
                  <TouchableOpacity onPress={() => setTab(0)}>
                    <Text
                      weight={tab === 0 ? 'bold' : 'regular'}
                      style={[Styles.mr5]}
                    >
                      Ingredients
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setTab(1)}>
                    <Text
                      weight={tab === 1 ? 'bold' : 'regular'}
                      style={[Styles.ml5]}
                    >
                      Recipe
                    </Text>
                  </TouchableOpacity>
                </Row>
                <View style={[Styles.ph10]}>
                  <View style={!tab ? { display: 'none' } : null}>
                    <MD style={mdStyleSmall}>{r.instructions}</MD>
                  </View>
                  <View style={tab ? { display: 'none' } : null}>
                    <TouchableOpacity
                      onPress={() => {
                        Share.share({
                          title: r.title,
                          url: `https://plantkit.vercel.app/${encodeURIComponent(
                            r.title,
                          )}`,
                        })
                      }}
                    >
                      <Row>
                        <Text
                          weight='bold'
                          style={(tabs ? mdStyleSmall : mdStyle).heading1}
                        >
                          {r.title}
                        </Text>
                      </Row>
                    </TouchableOpacity>
                    {(r.ingredients as any[]).map(
                      (ingredient: Ingredient, i) => {
                        const moreInfo = IngredientConversions[
                          singular(
                            ingredient.name.toLowerCase().replace(/ /g, '_'),
                          )
                        ]?.(ingredient.qty)

                        return (
                          <Row key={i} style={Styles.mb10}>
                            <Text
                              weight='bold'
                              style={{
                                width: 80,
                                marginRight: 8,
                                textAlign: 'left',
                              }}
                            >
                              {d2f(ingredient.qty)} {ingredient.unit}
                            </Text>
                            <Row>
                              <Text>{ingredient.name}</Text>
                            </Row>
                            {!!moreInfo && (
                              <Tooltip>
                                <View style={Styles.ph10}>
                                  <Text
                                    style={Styles.mv10}
                                    size='h4'
                                    weight='bold'
                                    key={i}
                                  >
                                    {d2f(ingredient.qty)} {ingredient.unit}
                                    {ingredient.name}
                                  </Text>
                                  {moreInfo.map((v, i) => (
                                    <Text style={Styles.mb10} key={i}>
                                      {v}
                                    </Text>
                                  ))}
                                </View>
                              </Tooltip>
                            )}
                          </Row>
                        )
                      },
                    )}
                  </View>
                </View>
              </Flex>
            ) : (
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
            ),
          )}
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
const mdStyleSmall = {
  // @ts-ignore
  heading1: [Styles.h3, Styles.mb10],
  heading3: [Styles.textBold, Styles.mv5, { fontSize: 18 }],
  heading2: [Styles.textBold, Styles.mv5, { fontSize: 18 }],
  list_item: [
    {
      fontSize: 14,
      letterSpacing: 1.25,
    },
    Styles.mb5,
  ],
}
const ingredientsStyleSmall = {
  // @ts-ignore
  heading1: { display: 'none' },
  heading3: [Styles.textBold, Styles.mv5, { fontSize: 18 }],
  heading2: [Styles.textBold, Styles.mv5, { fontSize: 18 }],
  list_item: [
    {
      fontSize: 14,
      letterSpacing: 1.25,
    },
    Styles.mb5,
  ],
}
export default withScreen(Tab3Screen)
