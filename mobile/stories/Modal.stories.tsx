import { ComponentStory } from '@storybook/react-native'
import WithSetValue from 'project/animation-util/WithSetValue'
import CustomModal from 'components/CustomModal'
import Button from 'components/base/forms/Button'

export default {
  title: 'CustomModal',
  component: CustomModal,
}

const DefaultArgs = {}

export const Default: ComponentStory<typeof CustomModal> = () => (
  <>
    <WithSetValue defaultValue={false}>
      {({ value, setValue }) => (
        <View style={Styles.p10}>
          <CustomModal
            style={Styles.centeredContainer as any}
            onDismissPress={() => setValue(false)}
            visible={value}
          >
            <View style={{ width: 200, height: 100, backgroundColor: 'white' }}>
              <Text>Modal content</Text>
            </View>
          </CustomModal>
          <Button onPress={() => setValue(true)}>
            {`Toggle Modal(${value})`}
          </Button>
        </View>
      )}
    </WithSetValue>
  </>
)

Default.args = DefaultArgs
