import { FC } from 'react'
import Animated, { AnimateStyle } from 'react-native-reanimated'
import { StyleProp } from 'react-native'
import { cn } from '../style/_style_screen' // we need this to make JSX compile

type CardType = {
  style?: StyleProp<AnimateStyle<any>>
}

const Card: FC<CardType> = ({ style, children }) => {
  return (
    <Animated.View style={cn(styles.container, style)}>
      {children}
    </Animated.View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
})
export default Card
