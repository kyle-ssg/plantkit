import { ComponentStory } from '@storybook/react-native'
import Button, {
  ButtonSecondary,
  ButtonTertiary,
  ButtonText,
} from 'components/base/forms/Button'

export default {
  title: 'Button',
  component: Button,
}

export const Default: ComponentStory<typeof Button> = (
  args: typeof Default.args,
) => (
  <>
    <Button {...args} style={Styles.mb5}>
      {args.children}
    </Button>
    <Button {...args} theme='secondary' style={Styles.mb5}>
      {args.children}
    </Button>
    <Button {...args} theme='text' style={Styles.mb5}>
      {args.children}
    </Button>
    <Button {...args} theme='link' style={Styles.mb5}>
      {args.children}
    </Button>
    <Button {...args} theme='outlinePrimary' style={Styles.mb5}>
      {args.children}
    </Button>
    <Button {...args} theme='secondary' style={Styles.mb5}>
      {args.children}
    </Button>
  </>
)

Default.args = {
  disabled: false,
  children: 'Message',
}
