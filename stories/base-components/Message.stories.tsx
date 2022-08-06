import { ComponentStory } from '@storybook/react'
import '../../styles/Global.scss'
import Message, { ErrorMessage, SuccessMessage } from 'components/Messages'
import { Component } from 'react'

export default {
  title: 'Base/Message',
  component: Component,
}

export const Default: ComponentStory<typeof Message> = (
  args: typeof Default.args,
) => (
  <>
    <Message className='alert-primary' {...args} />
    <SuccessMessage {...args} />
    <ErrorMessage {...args} />
  </>
)

Default.args = {
  children: 'Message',
}
