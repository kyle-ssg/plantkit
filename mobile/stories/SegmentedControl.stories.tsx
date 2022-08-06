import { ComponentStory } from '@storybook/react-native'
import SegmentedControl from 'components/SegmentedControl'
import Flex from 'components/base/grid/Flex'
import WithSetValue from 'project/animation-util/WithSetValue'

export default {
  title: 'SegmentedControl',
  component: SegmentedControl,
}

const DefaultArgs = {
  items: [
    { label: 'First', value: 1 },
    { label: 'Second', value: 2 },
    { label: 'Third', value: 3 },
  ],
}
export const Default: ComponentStory<typeof SegmentedControl> = (
  args: typeof DefaultArgs,
) => (
  <Flex style={{ backgroundColor: 'white', padding: 20 }}>
    <WithSetValue defaultValue={args.items[1]}>
      {({ value, setValue }) => (
        <SegmentedControl
          onChange={setValue}
          value={value}
          items={args.items}
        />
      )}
    </WithSetValue>
    <View style={{ marginTop: 10, marginBottom: 20 }}>
      <WithSetValue defaultValue={args.items[2]}>
        {({ value, setValue }) => (
          <SegmentedControl
            paddingX={20}
            trackStyle={{
              paddingHorizontal: 20,
              backgroundColor: '#222',
              height: 64,
              paddingVertical: 10,
            }}
            textStyle={{ color: '#ccc' }}
            textPressedStyle={{ color: 'white' }}
            textActiveStyle={{ color: 'white' }}
            barStyle={{ backgroundColor: '#333' }}
            onChange={setValue}
            value={value}
            items={args.items}
          />
        )}
      </WithSetValue>
    </View>

    <SegmentedControl
      onChange={() => {}}
      disabled
      items={args.items}
      value={args.items[1]}
    />
  </Flex>
)

Default.args = DefaultArgs
