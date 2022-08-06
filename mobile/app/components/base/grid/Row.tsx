import { StyleProp, View, ViewStyle } from 'react-native'
import { FC, ReactNode } from 'react'

export type RowType = {
  children?: ReactNode
  space?: boolean
  noWrap?: boolean
  style?: StyleProp<ViewStyle>
  testID?: string
}

const Row: FC<RowType> = ({ testID, space, style, children }) => (
  <View
    testID={testID}
    style={
      style
        ? [space ? styles.spacedRow : styles.row, style]
        : space
        ? styles.spacedRow
        : styles.row
    }
  >
    {children}
  </View>
)

const styles = StyleSheet.create({
  spacedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default Row
