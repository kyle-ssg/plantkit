import { ComponentStory } from '@storybook/react-native'
import DateSelect from 'components/DateSelect'

export default {
  title: 'DateSelect',
  component: DateSelect,
}

const DefaultArgs = {
  value: new Date(),
  onChange: (d) => alert(d),
}

export const Default: ComponentStory<typeof DateSelect> = (
  args: typeof DefaultArgs,
) => (
  <>
    <DateSelect {...args} />
  </>
)

Default.args = DefaultArgs
