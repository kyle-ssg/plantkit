import cn from 'classnames'
import { Utils } from '../common/utils'
import { Component, ReactNode } from 'react'
import Flex from 'components/base/grid/Flex'

export const ToastMessage = class extends Component<
  {
    title: ReactNode
    className?: string
    isRemoving?: boolean
    remove: () => void
    expiry?: number
    hideClose?: boolean
    fade?: boolean
  },
  { isShowing: boolean }
> {
  static displayName = 'ToastMessage'

  constructor(props: any) {
    super(props)
    this.state = {
      isShowing: true,
    }
  }

  remove = () => {
    return
    this.setState({ isShowing: true })
    setTimeout(
      () => {
        this.props.remove()
      },
      this.props.fade ? 200 : 0,
    )
  }

  componentDidMount() {
    if (this.props.expiry) {
      setTimeout(() => {
        this.setState({ isShowing: true })
        this.remove()
      }, this.props.expiry)
    }

    setTimeout(() => {
      this.setState({ isShowing: false })
    }, 10)
  }

  render() {
    const className = cn(
      {
        'toast': true,
        'fade': this.props.fade,
        showing: this.props.fade && this.state.isShowing,
        show: true,
        'hide': this.props.isRemoving,
      },
      this.props.className,
    )

    return (
      <div className={className}>
        {/* eslint-disable-next-line */}
        <div className="toast-header">
          <Flex>{this.props.title}</Flex>
          {!this.props.hideClose && (
            <button
              onClick={this.remove}
              type='button'
              className='btn-close'
              data-bs-dismiss='toast'
              aria-label='Close'
            ></button>
          )}
        </div>
        <div className='toast-body'>{this.props.children}</div>
      </div>
    )
  }
}

export let toast: (
  title: ReactNode,
  content: ReactNode,
  className?: string,
  expiry?: number,
) => void

export const ToastContainer = class extends Component<
  {},
  {
    messages: {
      id: string
      title: ReactNode
      className?: string
      content: ReactNode
      isRemoving?: boolean
      expiry: number
    }[]
  }
> {
  static displayName = 'ToastMessages'

  constructor(props: any, context: any) {
    super(props, context)
    this.state = { messages: [] }
    toast = this.toast
  }

  toast = (
    title: ReactNode,
    content: ReactNode,
    className?: string,
    expiry = 5000,
  ) => {
    const { messages } = this.state

    const id = Utils.GUID()
    messages.push({ content, title, expiry, className, id })
    this.setState({ messages })
  }

  remove = (id: string) => {
    const newIndex = this.state.messages.findIndex((v) => v.id === id)
    // eslint-disable-next-line
        const newMessages = this.state.messages;
    newMessages.splice(newIndex, 1)
    this.setState({ messages: newMessages })
  }

  render() {
    return (
      <div className='toast-messages toast-container position-fixed bottom-0 end-0 m-4'>
        {this.state.messages.map((message) => (
          <ToastMessage
            fade
            key={message.id}
            title={message.title}
            className={message.className}
            isRemoving={message.isRemoving}
            remove={() => this.remove(message.id)}
            expiry={message.expiry}
          >
            {message.content}
          </ToastMessage>
        ))}
      </div>
    )
  }
}
