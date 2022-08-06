import { FC, ReactElement, useState } from 'react'
import { Loader } from 'components/base/Loader'
import Select from './forms/Select'
import FormGroup from './grid/FormGroup'
import Column from './grid/Column'
import Button from './forms/Button'
import Flex from 'components/base/grid/Flex'
import Fade from 'components/base/animation/Fade'

interface Props {
  componentId?: string
  value?: {}
  isLoading?: boolean
  multiple?: boolean
  items?: any
  onChange: (value: {}) => void
  placeholder?: string
  filterItem?: () => void
  renderRow?: (item, isSelected, toggleItem) => ReactElement
  autoclose?: boolean
}

const NativeModal: FC<Props> = ({
  autoclose,
  value,
  isLoading,
  multiple,
  items,
  placeholder,
  filterItem,
  renderRow,
  onChange,
}) => {
  const [modalStatus, setModalStatus] = useState({
    isLoading: true,
    value: value,
  })

  const onDone = () => onChange(modalStatus.value)

  const onChangeHandler = (value: {}) => {
    if (autoclose) {
      onChange(value)
    } else {
      setModalStatus((prevState) => ({
        ...prevState,
        value: value,
      }))
    }
  }

  return (
    <Flex style={[Styles.body]}>
      {isLoading && (
        <Flex style={Styles.centeredContainer}>
          <Loader />
        </Flex>
      )}
      {items && (
        <Fade style={{ flex: 1 }} autostart value={1}>
          <Select
            placeholder={placeholder || 'Search'}
            items={items}
            value={value}
            onChange={onChangeHandler}
            multiple={multiple}
            style={{ backgroundColor: 'black' }}
            renderRow={(item, isSelected, toggleItem) =>
              renderRow(item, isSelected, toggleItem)
            }
            filterItem={filterItem}
          />
        </Fade>
      )}
      <FormGroup>
        <Column>
          <Button style={Styles.mb5} onPress={onDone}>
            Done
          </Button>
        </Column>
      </FormGroup>
    </Flex>
  )
}

export default NativeModal
