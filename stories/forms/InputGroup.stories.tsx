import React from 'react'
import { ComponentStory } from '@storybook/react'
import '../../styles/Global.scss'
import InputGroup from 'components/base/forms/InputGroup'

export default {
  title: 'forms/Input',
  component: InputGroup,
}

export const Default: ComponentStory<typeof InputGroup> = (args) => (
  <>
    <>
      <InputGroup {...args} />
    </>
  </>
)

Default.args = {
  placeholder: 'Placeholder text',
  id: 'input',
  title: 'Email address',
}
