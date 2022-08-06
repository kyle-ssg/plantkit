import { ComponentStory } from '@storybook/react'
import '../../styles/Global.scss'
import Button from 'components/base/forms/Button'

export default {
  title: 'forms/Button',
  component: Button,
  children: 'Button',
}

export const ButtonDefault: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
)

ButtonDefault.args = {
  disabled: false,
  theme: 'primary',
  children: 'Button',
}

export const ButtonPrimary: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

ButtonPrimary.args = {
  disabled: false,
  theme: 'primary',
  children: 'Button',
}

export const ButtonSecondary: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

ButtonSecondary.args = {
  disabled: false,
  theme: 'secondary',
  children: 'Button',
}

export const ButtonTertiary: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

ButtonTertiary.args = {
  disabled: false,
  theme: 'tertiary',
  children: 'Button',
}
