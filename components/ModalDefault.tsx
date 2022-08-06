import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { FC, ReactNode } from 'react'

interface ModalDefault {
  title: ReactNode
  isOpen: boolean
  onDismiss: () => void
  toggle: () => void
}

const ModalDefault: FC<ModalDefault> = ({
  onDismiss,
  toggle,
  isOpen,
  title,
  children,
}) => {
  const onDismissClick = () => {
    if (onDismiss) {
      onDismiss()
    }
    toggle()
  }
  return (
    <Modal unmountOnClose isOpen={isOpen} toggle={onDismissClick}>
      <ModalHeader toggle={onDismissClick}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  )
}

export default ModalDefault
