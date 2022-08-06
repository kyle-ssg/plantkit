import Flex from './base/grid/Flex'
import Row from './base/grid/Row'
import { TouchableOpacity, View } from 'react-native'
import Text from 'components/base/type/Text'
import { palette, styleVariables } from '../style/style_variables'
import { FC, useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {
  easingConfigFade,
  easingConfigSlide,
} from 'project/animation-util/reanimations'
import Logo from 'components/Logo'
type TabItemType = {
  isActive: boolean
  index: number
  onPress: (index: number) => void
}

const TabItem: FC<TabItemType> = ({ children, isActive, index, onPress }) => {
  const handlePress = () => {
    onPress(index)
  }
  const animatedValue = useSharedValue(
    isActive ? palette.textLight : palette.textLightInactive,
  )
  const style = useAnimatedStyle(() => {
    return {
      fontSize: styleVariables.fontSizeH4,
      fontWeight: 'bold',
      color: withTiming(animatedValue.value, easingConfigFade),
    }
  }, [isActive])
  useEffect(() => {
    animatedValue.value = isActive
      ? palette.textLight
      : palette.textLightInactive
  }, [isActive])
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={isActive ? [styles.tab, styles.activeTab] : styles.tab}
      onPress={handlePress}
    >
      <Text animated size='medium' style={style}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}
const tabWidth = 100
const TabLine: FC<{ index: number }> = ({ index }) => {
  const animatedValue = useSharedValue(index * tabWidth)
  const style = useAnimatedStyle(() => {
    return {
      height: 3,
      width: tabWidth - 40,
      backgroundColor: palette.textLight,
      position: 'absolute',
      top: 64,
      left: withTiming(animatedValue.value, easingConfigSlide),
    }
  }, [index])
  useEffect(() => {
    animatedValue.value = index * tabWidth
  }, [index])
  return <Animated.View style={style} />
}

const BottomNav = ({ state, navigation }) => {
  const onPress = (index) => {
    const route = state.routes[index]
    const isFocused = state.index === index
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    })

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name)
    }
  }
  return (
    <View style={styles.container}>
      <TabLine index={state.index} />
      <Row>
        <Flex>
          <Row>
            <TabItem onPress={onPress} index={0} isActive={state.index === 0}>
              Grow
            </TabItem>
            <TabItem onPress={onPress} index={1} isActive={state.index === 1}>
              Plants
            </TabItem>
            <Flex
              pointerEvents='none'
              style={[
                Styles.centeredContainer,
                {
                  position: 'absolute',
                  left: 0,
                  right: 0,
                },
              ]}
            >
              <View>
                <Logo />
              </View>
            </Flex>
          </Row>
        </Flex>
      </Row>
    </View>
  )
}

const styles = StyleSheet.create({
  activeTabText: {},
  activeTab: {},
  tab: {
    height: 45,
    overflow: 'visible',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: styleVariables.paddingBase,
    paddingRight: styleVariables.paddingBase,
    width: tabWidth,
  },
  lastTab: {
    paddingRight: 0,
  },
  container: {
    borderTopWidth: 1,
    borderColor: '#aaa',
    backgroundColor: palette.primary,
    paddingTop: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
})

export default BottomNav
