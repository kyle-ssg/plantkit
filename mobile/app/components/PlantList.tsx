import { FC, ReactNode } from 'react'
import { TPlant } from '../plantData'
import PlantSummary from 'components/PlantSummary'
import { SharedValue } from 'react-native-reanimated'

type PlantListType = {
  data: TPlant[]
  replace?: boolean
  month?: string
  onPress?: (plant: TPlant) => void
  animatedValue?: SharedValue<number>
  HeaderComponent?: ReactNode
}

const PlantList: FC<PlantListType> = ({
  data,
  HeaderComponent,
  animatedValue,
  onPress,
  replace,
  month,
}) => {
  const renderItems = (v, i) => {
    return (
      <PlantSummary
        onPress={onPress}
        month={month}
        replace={replace}
        delay={Math.floor(i / 6)}
        animatedValue={animatedValue}
        plant={v}
        key={v.title}
      />
    )
  }
  return (
    <ScrollView keyboardShouldPersistTaps='handled' bounces={false}>
      {HeaderComponent}
      <Row style={styles.container}>{data?.map(renderItems)}</Row>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },
})
export default PlantList
