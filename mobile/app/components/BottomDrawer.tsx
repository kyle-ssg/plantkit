import { StyleSheet, TouchableOpacity } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import {
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import Fade from 'components/base/animation/Fade'

export type ModalType = {
  animatedValue?: Animated.SharedValue<number>
  visible: boolean
  preventDismiss?: boolean
  height: number
  onDismissPress?: () => void
}

type ComponentType = {
  children: ReactNode
  onDismissPress: () => void
  preventDismiss?: boolean
  visible?: boolean
  snapPoints: (number | string)[] // ['25%', '50%']
}

const BottomDrawer: FunctionComponent<ComponentType> = ({
  children,
  visible,
  onDismissPress,
  preventDismiss,
  snapPoints,
}) => {
  const sheetRef = useRef(null)

  useEffect(() => {
    if (visible) {
      sheetRef.current?.present()
    } else {
      sheetRef.current?.dismiss()
    }
  }, [visible])
  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onDismissPress()
      }
    },
    [onDismissPress],
  )
  const animatedIndex = useSharedValue(0)

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    opacity: interpolate(animatedIndex.value, [-1, 1], [0, 1]),
  }))
  return (
    <BottomSheetModal
      backgroundStyle={styles.drawer}
      handleStyle={styles.drawerIndicator}
      index={snapPoints.length - 1}
      enablePanDownToClose={!preventDismiss}
      backdropComponent={() => {
        // @ts-ignore
        return (
          <Fade autostart value={1} style={containerAnimatedStyle}>
            <TouchableOpacity
              disabled={preventDismiss}
              onPress={() => sheetRef.current?.dismiss()}
              style={StyleSheet.absoluteFill}
            />
          </Fade>
        )
      }}
      ref={sheetRef}
      contentHeight={500}
      animatedIndex={animatedIndex}
      snapPoints={snapPoints || ['100%']}
      onChange={handleSheetChanges}
    >
      {children}
    </BottomSheetModal>
  )
}
const styles = StyleSheet.create({
  drawerIndicator: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  drawer: {
    flex: 1,
    backgroundColor: 'white',
  },
})
export default BottomDrawer
