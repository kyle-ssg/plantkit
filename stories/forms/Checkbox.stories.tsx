import React from 'react'
import { ComponentStory } from '@storybook/react'
import '../../styles/Global.scss'
import InputGroup from 'components/base/forms/InputGroup'
import Checkbox from 'components/base/forms/Checkbox'
export default {
  title: 'forms/Checkbox',
  component: Checkbox,
}
export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <>
    <InputGroup id='radio' component={<Checkbox {...args} />} />
  </>
)

Default.args = {
  label: 'Default checkbox',
  id: 'flexCheckDefault',
}
