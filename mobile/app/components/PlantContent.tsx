import { FC } from 'react'
import { TPlantContent } from '../plantData' // we need this to make JSX compile

type PlantContentType = {
  content: TPlantContent
}

const PlantContent: FC<PlantContentType> = ({ content }) => {
  return (
    <View>
      <Text style={Styles.mb10} size='h2'>
        {content.category}
      </Text>
      <Text>
        {content.content.split('\\n').map(
          (v, i) =>
            !!v && (
              <View style={Styles.mb10} key={i}>
                <Text>{v}</Text>
              </View>
            ),
        )}
      </Text>
    </View>
  )
}

export default PlantContent
