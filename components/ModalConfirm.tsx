import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Button } from './base/forms/Button'
import { FC, ReactNode } from 'react'

interface Confirm {
  title: ReactNode
  isOpen: boolean
  isDanger?: boolean
  onYes?: () => void
  onNo?: () => void
  noText?: string
  disabled?: boolean
  disabledYes?: boolean
  yesText?: string
  toggle?: () => void
}

const Confirm: FC<Confirm> = ({
  onNo,
  isDanger,
  disabled,
  disabledYes,
  toggle,
  onYes,
  isOpen,
  title,
  children,
  yesText = 'OK',
  noText = 'Cancel',
}) => {
  const no = () => (onNo ? onNo() : toggle?.())
  const yes = () => (onYes ? onYes() : toggle?.())

  return (
    <Modal unmountOnClose isOpen={isOpen} toggle={no}>
      <ModalHeader toggle={no}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button
          theme='secondary'
          data-test='confirm-no'
          disabled={disabled}
          onClick={no}
        >
          {noText}
        </Button>
        {isDanger ? (
          <Button
            theme='danger'
            data-test='confirm-yes'
            disabled={disabled || disabledYes}
            iconRight='fas fa-trash'
            onClick={yes}
          >
            {yesText}
          </Button>
        ) : (
          <Button
            data-test='confirm-yes'
            disabled={disabled || disabledYes}
            onClick={yes}
          >
            {yesText}
          </Button>
        )}{' '}
      </ModalFooter>
    </Modal>
  )
}

export default Confirm
