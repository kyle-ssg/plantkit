import { ComponentStory } from '@storybook/react-native'
import Loader from 'components/base/Loader'

export default {
  title: 'Loader',
  component: Loader,
}

export const Default: ComponentStory<typeof Loader> = (
  args: typeof Default.args,
) => (
  <>
    <Loader {...args} />
  </>
)

Default.args = {}
