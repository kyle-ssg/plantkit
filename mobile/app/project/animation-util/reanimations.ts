import Animated, { Easing } from 'react-native-reanimated'

export type AnimationConfigType = {
  duration: number
  easing: Animated.EasingFunction
}

export const easingConfigDrawerIn: AnimationConfigType = {
  duration: 300,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1).factory(), //Easing.ease
}

export const easingConfigDrawerOut: AnimationConfigType = {
  duration: 300,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1).factory(), //Easing.ease
}

export const easingConfigSlide: AnimationConfigType = {
  duration: 400,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1).factory(), //Easing.ease
}

export const easingConfigModal: AnimationConfigType = {
  duration: 250,
  easing: Easing.ease,
}

export const easingConfigRotate: AnimationConfigType = {
  duration: 300,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1).factory(), //Easing.ease
}

export const easingConfigFade: AnimationConfigType = {
  duration: 100,
  easing: Easing.ease, //Easing.ease
}
