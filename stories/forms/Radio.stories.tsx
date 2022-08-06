import React from 'react'
import { ComponentStory } from '@storybook/react'
import '../../styles/Global.scss'
import Radio from 'components/base/forms/Radio'
import InputGroup from 'components/base/forms/InputGroup'
export default {
  title: 'forms/Radio',
  component: Radio,
}
export const Default: ComponentStory<typeof Radio> = (args) => (
  <>
    <InputGroup id='radio' component={<Radio {...args} />} />
  </>
)

Default.args = {
  label: 'Default radio',
  name: 'flexRadioDefault',
  id: 'flexRadioDefault1',
}
