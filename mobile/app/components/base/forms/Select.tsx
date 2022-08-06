import { FC, ReactElement, useState } from 'react'
import { FlatList, StyleProp, ViewStyle } from 'react-native'
import Flex from '../grid/Flex'
import FormGroup from '../grid/FormGroup'
import TextInput from './TextInput'
import Container from 'components/base/grid/Container'

interface Props {
  onChange?: (argument: any) => void
  renderNoResults?: () => void
  items?: any
  multiple?: boolean
  style?: StyleProp<ViewStyle>
  value?: any
  filterItem?: (item: any) => void
  renderRow?: (
    item: any,
    isSelected: boolean,
    toggleItem: () => void,
  ) => ReactElement | null
  placeholder?: string
  searchTestID?: string
}

const Select: FC<Props> = ({
  onChange,
  renderNoResults,
  style,
  multiple,
  value = [],
  filterItem,
  placeholder,
  searchTestID,
  renderRow,
  items,
}) => {
  const [search, setSearch] = useState({})

  const isSelectedHandler = (i) =>
    multiple ? value.indexOf(i) !== -1 : value === i

  const setItem = (i, selected) => {
    if (multiple) {
      if (selected) {
        onChange((value || []).concat(i))
      } else {
        const index = value.findIndex((value) => value === i)
        value.splice(index, 1)
        onChange(value)
      }
    } else if (selected) {
      onChange(i)
    } else {
      onChange(null)
    }
  }

  const data = filterItem
    ? items.filter((item) => item !== search || filterItem(item))
    : items

  return (
    <Flex style={[Styles.body, style]}>
      {filterItem && (
        <FormGroup style={{ backgroundColor: '#FCF8F5' }}>
          <Container>
            <TextInput
              style={{
                shadowOpacity: 0,
                borderBottomWidth: 0,
              }}
              placeholder={placeholder}
              onChangeText={(searchNew) => setSearch(searchNew.toLowerCase())}
              testID={searchTestID}
            />
          </Container>
        </FormGroup>
      )}
      {data && data.length ? (
        <FlatList
          data={data}
          renderItem={({ item }) => {
            const isSelected = isSelectedHandler(item)
            const toggleItem = () => {
              setItem(item, !isSelected)
            }
            return renderRow(item, isSelected, toggleItem)
          }}
        />
      ) : renderNoResults ? (
        renderNoResults()
      ) : (
        <Text style={Styles.textCenter}>
          No Results Found for:
          <Text>{search}</Text>
        </Text>
      )}
    </Flex>
  )
}

export default Select
