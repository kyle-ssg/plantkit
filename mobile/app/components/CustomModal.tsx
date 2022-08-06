import { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { easingConfigModal } from 'project/animation-util/reanimations'
import { palette } from '../style/style_variables'

export type ModalType = {
  animatedValue?: Animated.SharedValue<number>
  controlledValue?: Animated.SharedValue<number>
  fadeContent?: boolean
  controlled?: boolean
  outsideChildren?: ReactNode
  backdropStyle?: ViewStyle
  visible: boolean
  style: ViewStyle
  onDismissPress?: () => void
  onShow?: () => void
  preventDismiss?: boolean
}

export type ModalInnerType = {
  fadeContent?: boolean
  style: ViewStyle
  onDismissPress?: () => void
  children: ReactNode
  opacityStyle: ViewStyle
}

const ModalInner = gestureHandlerRootHOC(function GestureExample({
  style,
  onDismissPress,
  fadeContent,
  children,
  opacityStyle,
}: ModalInnerType) {
  // We do this in order to support gestures within the modal
  return (
    <View
      style={style ? [style, StyleSheet.absoluteFill] : StyleSheet.absoluteFill}
    >
      <TouchableOpacity
        onPress={() => onDismissPress()}
        activeOpacity={1}
        style={StyleSheet.absoluteFill}
      />
      {fadeContent ? (
        <Animated.View style={style ? [style, opacityStyle] : opacityStyle}>
          {children}
        </Animated.View>
      ) : (
        children
      )}
    </View>
  )
})
const CustomModal: FunctionComponent<ModalType> = ({
  animatedValue: _animatedValue,
  controlledValue,
  children,
  fadeContent = true,
  onDismissPress,
  preventDismiss,
  outsideChildren,
  backdropStyle,
  style,
  visible,
  controlled,
  onShow,
}) => {
  const [modalVisible, setModalVisible] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const animationValue = controlledValue || useSharedValue(0)
  useEffect(() => {
    if (!controlled) {
      if (visible) setModalVisible(true)
      animationValue.value = withTiming(
        visible ? 1 : 0,
        easingConfigModal,
        () => {
          !visible && runOnJS(setModalVisible)(false)
        },
      )
      if (_animatedValue) {
        _animatedValue.value = withTiming(visible ? 1 : 0, easingConfigModal)
      }
    }
  }, [visible, _animatedValue, controlled, controlledValue, animationValue])

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: animationValue.value,
  }))
  const opacityStyle2 = useAnimatedStyle(() => ({
    opacity: animationValue.value,
  }))

  const isVisible = controlledValue ? visible : modalVisible
  return (
    <Modal onShow={onShow} visible={isVisible} transparent={true}>
      <Animated.View style={[styles.backdrop, opacityStyle2, backdropStyle]} />
      <ModalInner
        onDismissPress={preventDismiss ? null : onDismissPress}
        opacityStyle={opacityStyle}
        style={style}
        fadeContent={fadeContent}
      >
        {children}
      </ModalInner>

      {outsideChildren}
    </Modal>
  )
}

export default CustomModal

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: palette.backdrop,
  },
})
