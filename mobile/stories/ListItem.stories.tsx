import { ComponentStory } from '@storybook/react-native'
import ListItem from 'components/base/ListItem'
import FA5Pro from 'react-native-vector-icons/FontAwesome5Pro'
import { palette } from '../app/style/style_variables'

export default {
  title: 'ListItem',
  component: ListItem,
}

const DefaultArgs = {
  active: false,
  onPress: () => alert(''),
  disabled: false,
}

export const Default: ComponentStory<typeof ListItem> = () => (
  <>
    <ListItem
      icon={<FA5Pro name='plus' size={20} color={palette.primary} light />}
    >
      <Text>List Item text</Text>
    </ListItem>
  </>
)

Default.args = DefaultArgs
