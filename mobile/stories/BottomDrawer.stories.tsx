import { ComponentStory } from '@storybook/react-native'
import BottomDrawer from 'components/BottomDrawer'
import Button from 'components/base/forms/Button'
import WithSetValue from 'project/animation-util/WithSetValue'

export default {
  title: 'BottomDrawer',
  component: BottomDrawer,
}

const DefaultArgs = {}

export const Default: ComponentStory<typeof BottomDrawer> = () => (
  <WithSetValue defaultValue={false}>
    {({ value, setValue }) => (
      <View style={Styles.p10}>
        <BottomDrawer
          snapPoints={[200]}
          onDismissPress={() => setValue(false)}
          visible={value}
        >
          <Text>2</Text>
        </BottomDrawer>
        <Button onPress={() => setValue(true)}>
          {`Toggle Modal(${value})`}
        </Button>
      </View>
    )}
  </WithSetValue>
)

Default.args = DefaultArgs

export const SnapPoints: ComponentStory<typeof BottomDrawer> = () => (
  <WithSetValue defaultValue={false}>
    {({ value, setValue }) => (
      <View style={Styles.p10}>
        <BottomDrawer
          snapPoints={[200, 400]}
          onDismissPress={() => setValue(false)}
          visible={value}
        >
          <Text>2</Text>
        </BottomDrawer>
        <Button onPress={() => setValue(true)}>
          {`Toggle Modal(${value})`}
        </Button>
      </View>
    )}
  </WithSetValue>
)

SnapPoints.args = DefaultArgs
