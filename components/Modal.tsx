import {
  ModalHeader as _ModalHeader,
  ModalBody as _ModalBody,
  ModalProps,
  Modal as _Modal,
  ModalFooter as _ModalFooter,
} from 'reactstrap'
import { JSXElementConstructor, useCallback, useState } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Confirm from './ModalConfirm'
import ModalDefault from './ModalDefault'
import Alert from './ModalAlert'
import { getStore } from 'common/store'
import { Provider } from 'react-redux'

export const ModalHeader = _ModalHeader
export const ModalFooter = _ModalFooter
export const Modal = _Modal
export const ModalBody = _ModalBody

const withModal = (WrappedComponent: JSXElementConstructor<any>) => {
  return (props: ModalProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(true)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const toggle = useCallback(() => setIsOpen(false), [setIsOpen])
    global.closeModal = toggle

    return (
      <Provider store={getStore()}>
        <WrappedComponent toggle={toggle} {...props} isOpen={isOpen} />
      </Provider>
    )
  }
}

const _Confirm = withModal(Confirm)
const _Alert = withModal(Alert)
const _ModalDefault = withModal(ModalDefault)

export const openAlert = (global.openAlert = (title, children, onDismiss) => {
  document.getElementById('alert') &&
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    unmountComponentAtNode(document.getElementById('alert')!)
  render(
    <_Alert title={title} onDismiss={onDismiss}>
      {children}
    </_Alert>,
    document.getElementById('alert'),
  )
})

export const openConfirm = (global.openConfirm = (title, body, onYes, onNo) => {
  document.getElementById('confirm') &&
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    unmountComponentAtNode(document.getElementById('confirm')!)
  render(
    <_Confirm isOpen onNo={onNo} onYes={onYes} title={title}>
      {body}
    </_Confirm>,
    document.getElementById('confirm'),
  )
})

export const openModal = (global.openModal = (title, body) => {
  document.getElementById('modal') &&
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    unmountComponentAtNode(document.getElementById('modal')!)
  render(
    <_ModalDefault isOpen title={title}>
      {body}
    </_ModalDefault>,
    document.getElementById('modal'),
  )
})
