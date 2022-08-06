import { Component } from 'react'
import withScreen, { Screen } from '../withScreen'
import Flex from 'components/base/grid/Flex'
import { ViewStyle } from 'react-native'

export type GenericScreenType = {
  text: string
  style: ViewStyle
}
type ComponentType = Screen & GenericScreenType

class GenericScreen extends Component<ComponentType> {
  state = {}
  render() {
    return (
      this.props.children || (
        <Flex>
          <Text>I am a generic screen</Text>
        </Flex>
      )
    )
  }
}

export default withScreen(GenericScreen)
