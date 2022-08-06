import { ComponentStory } from '@storybook/react-native'
import Loader from 'components/base/Loader'
import Messages, { SuccessMessage } from 'components/Messages'
import H1 from 'components/base/type/H1'
import H2 from 'components/base/type/H2'
import H3 from 'components/base/type/H3'
import H4 from 'components/base/type/H4'

export default {
  title: 'Type',
  component: Loader,
}

export const Default: ComponentStory<typeof Loader> = (
  args: typeof Default.args,
) => (
  <>
    <H1 style={Styles.mb5}>{args.children}</H1>
    <H2 style={Styles.mb5}>{args.children}</H2>
    <H3 style={Styles.mb5}>{args.children}</H3>
    <H4 style={Styles.mb5}>{args.children}</H4>
    <Messages style={Styles.mb5}>{args.children}</Messages>
    <SuccessMessage style={Styles.mb5}>{args.children}</SuccessMessage>
  </>
)

Default.args = {
  children: 'Message',
}
