import Animation from 'lottie-react-native'
import { StyleProp, ViewStyle } from 'react-native'
import { FC } from 'react'

const json = { ...require('./loader.lottie.json') }

json.assets[0].layers[0].shapes[0].it[1].c.k = [0.82, 0.79, 0.8, 1]

export interface LoaderProps {
  size?: number
  style?: StyleProp<ViewStyle>
}

export const Loader: FC<LoaderProps> = ({ size = 2.25, style }) => (
  <View style={styles.loader}>
    <Animation
      autoPlay
      style={[
        {
          width: 40 * size,
          height: 30 * size,
        },
        style,
      ]}
      loop
      source={json}
    />
  </View>
)
const styles = StyleSheet.create({
  loader: { opacity: 0.75 },
})

export default Loader
