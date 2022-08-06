import Text from 'components/base/type/Text'
import React, { useMemo } from 'react'
import withScreen, { Screen } from './withScreen'
import { TPlant } from '../plantData'
import { SuccessMessage } from 'components/Messages'
import PlantContent from 'components/PlantContent'

type PlantScreen = Screen & {
  plant: TPlant
}

const PlantScreen: React.FC<PlantScreen> = ({ children, plant, push }) => {
  const content = useMemo(() => {
    return plant.content.map((v) => (
      <PlantContent content={v} key={v.category} />
    ))
  }, [plant])
  return (
    <ScrollView bounces={false} style={Styles.p10}>
      <Row style={Styles.mv10}>
        <Text muted>
          <FA5Pro style={Styles.textMedium} name='hand-holding-seedling' />
          <Text> </Text>
          <Text muted weight='bold'>
            {plant.sow.join(', ')}
          </Text>
        </Text>
        <Text style={Styles.ml10} muted>
          <FA5Pro style={Styles.textMedium} name='calendar' />
          <Text> </Text>
          <Text muted weight='bold'>
            {plant.durationMonths} Months
          </Text>
        </Text>
        <Text style={Styles.ml10} muted>
          <FA5Pro style={Styles.textMedium} name='flask-potion' />
          <Text> </Text>
          <Text muted weight='bold'>
            {plant.ph}ph
          </Text>
        </Text>
      </Row>
      <SuccessMessage style={Styles.mv10}>{`${
        plant.warning ? `Tip: ${plant.warning}` : null
      }`}</SuccessMessage>
      <View>{content}</View>
    </ScrollView>
  )
}

export default withScreen(PlantScreen)
