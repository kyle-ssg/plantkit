import { FC, ReactNode } from 'react'
import { TPlant } from '../plantData'
import PlantSummary from 'components/PlantSummary'
import { SharedValue } from 'react-native-reanimated'

type PlantListType = {
  data: TPlant[]
  animatedValue: SharedValue<number>
  HeaderComponent?: ReactNode
}

const PlantList: FC<PlantListType> = ({
  data,
  HeaderComponent,
  animatedValue,
}) => {
  const renderItems = (v, i) => {
    return (
      <PlantSummary
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
