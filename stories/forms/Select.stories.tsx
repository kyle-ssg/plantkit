import React from 'react'
import { ComponentStory } from '@storybook/react'
import '../../styles/Global.scss'
import Select from 'components/base/forms/Select'
import InputGroup from 'components/base/forms/InputGroup'
export default {
  title: 'forms/Select',
  component: Select,
}
export const Default: ComponentStory<typeof Select> = (args) => (
  <InputGroup id='select' component={<Select {...args} />} />
)

export const Sizes: ComponentStory<typeof Select> = (args) => (
  <>
    <InputGroup component={<Select className='form-select-lg' {...args} />} />
    <InputGroup component={<Select {...args} />} />
    <InputGroup component={<Select className='form-select-sm' {...args} />} />
  </>
)

Default.args = {
  label: 'Select from the list',
  id: 'select',
}

Sizes.args = {
  label: 'Select from the list',
  id: 'select',
}
