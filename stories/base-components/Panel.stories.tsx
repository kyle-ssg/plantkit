import { ComponentStory } from '@storybook/react'
import '../../styles/Global.scss'
import Panel from 'components/extras/Panel'
import { Button } from 'components/base/forms/Button'

export default {
  title: 'Base/Panel',
  component: Panel,
}

export const Default: ComponentStory<typeof Panel> = (args) => (
  <Panel icon='fas fa-exclamation-circle' title='Panel with icon' {...args}>
    Content
  </Panel>
)
export const WithAction: ComponentStory<typeof Panel> = (args) => (
  <Panel action={<Button>Action</Button>} title='Panel with action' {...args}>
    Content
  </Panel>
)

//   <Panel
// action={<Button theme='primary'>Action</ButtonPrimary>}
// title='Panel with action'
//   >
//   Content
//   </Panel>
// ))
// .add('with icon', () => (
//   <Panel icon='ion-md-heart' title='Panel with icon'>
//     Content
//   </Panel>
// ))
