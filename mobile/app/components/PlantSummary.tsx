import { FC } from 'react'
import { TPlant } from '../plantData'
import { Image } from 'react-native'
import { cn } from '../style/_style_screen' // we need this to make JSX compile

type PlantSummaryType = {
  plant: TPlant
}

const PlantSummary: FC<PlantSummaryType> = ({ plant }) => {
  return (
    <View style={cn(styles.container, Styles.mb10)}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={plant.image} resizeMode='cover' />
      </View>
      <Text size='small'>{plant.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    shadowColor: '#000',
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
