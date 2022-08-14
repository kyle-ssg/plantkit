import Text from 'components/base/type/Text'
import ScreenContainer from 'components/ScreenContainer'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import withScreen, { Screen } from './withScreen'
import { useIsFocused } from '@react-navigation/native'
import { useSharedValue } from 'react-native-reanimated'
import TextInput from 'components/base/forms/TextInput'
import plantData from '../plantData'
import { filter } from 'lodash'
import PlantList from 'components/PlantList'
import { paddingBase } from '../style/style_grid'

type SearchScreen = Screen & {}

const SearchScreen: React.FC<SearchScreen> = ({ children }) => {
  const isFocused = useIsFocused()
  const ref = useRef()
  const active = useSharedValue(0)
  useEffect(() => {
    ref.current?.focus()
  }, [ref.current])
  useEffect(() => {
    active.value = isFocused ? 1 : 0
  }, [isFocused, active])
  const [search, setSearch] = useState('')
  const data = useMemo(() => {
    const searchLower = search.toLowerCase()
    return filter(plantData.plants, (v) =>
      v.title.toLowerCase().includes(searchLower),
    )
  }, [search])
  return (
    <ScreenContainer style={Styles.mt0}>
      <PlantList
        replace
        HeaderComponent={
          <View style={styles.searchContainer}>
            <TextInput
              inputRef={ref}
              placeholder='Search...'
              onChangeText={setSearch}
            />
          </View>
        }
        animatedValue={active}
        data={data}
      />
    </ScreenContainer>
  )
}
const styles = StyleSheet.create({
  searchContainer: {
    width: '50%',
    marginHorizontal: paddingBase * 2,
    marginTop: paddingBase * 2,
  },
})
export default withScreen(SearchScreen)
