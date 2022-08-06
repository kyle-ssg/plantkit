import { Component, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

class NeverUpdate extends Component<Props> {
  state = {}

  shouldComponentUpdate(): boolean {
    return false
  }

  render() {
    return this.props.children
  }
}

export default NeverUpdate
