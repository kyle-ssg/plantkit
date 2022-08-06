import { ComponentStory } from '@storybook/react'
import '../../styles/Global.scss'
import { toast, ToastContainer, ToastMessage } from 'components/Toast'
import { useState } from 'react'
import Button from 'components/base/forms/Button'

export default {
  title: 'Toast/Toast',
  component: ToastMessage,
}

export const Default: ComponentStory<typeof ToastMessage> = () => {
  return (
    <>
      <Button onClick={() => toast(<div>Title</div>, <div>Content</div>)}>
        Open Toast
      </Button>
      <ToastContainer />
    </>
  )
}
export const Static: ComponentStory<typeof ToastMessage> = () => {
  const [isActive, setIsActive] = useState<boolean>(true)
  const [useFade, setUseFade] = useState<boolean>(false)
  return (
    <>
      {isActive ? (
        <ToastMessage
          fade={useFade}
          remove={() => {
            setIsActive(false)
            setUseFade(true)
          }}
          title={<div>Title</div>}
        >
          Content
        </ToastMessage>
      ) : (
        <Button onClick={() => setIsActive(true)}>Show Toast</Button>
      )}
    </>
  )
}
export const NoClose: ComponentStory<typeof ToastMessage> = (args) => {
  const [isActive, setIsActive] = useState<boolean>(true)
  const [useFade, setUseFade] = useState<boolean>(false)
  return (
    <>
      {isActive ? (
        <ToastMessage
          fade={useFade}
          hideClose
          remove={() => {
            setIsActive(false)
            setUseFade(true)
          }}
          title={<div>Title</div>}
          {...args}
        >
          Content
        </ToastMessage>
      ) : (
        <Button onClick={() => setIsActive(true)}>Show Toast</Button>
      )}
    </>
  )
}
NoClose.args = {
  hideClose: true,
}

export const AutoHide: ComponentStory<typeof ToastMessage> = (args) => {
  const [isActive, setIsActive] = useState<boolean>(true)
  return (
    <>
      {isActive ? (
        <ToastMessage
          fade={true}
          expiry={5000}
          remove={() => {
            setIsActive(false)
          }}
          title={<div>Title</div>}
          {...args}
        >
          Content
        </ToastMessage>
      ) : (
        <Button onClick={() => setIsActive(true)}>Show Toast</Button>
      )}
    </>
  )
}

AutoHide.args = {
  expiry: 5000,
}
