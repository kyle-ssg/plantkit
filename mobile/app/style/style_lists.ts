import { StyleSheet } from 'react-native'
import asStyle from './style-utils/asStyle'
import { styleVariables } from './style_variables'

export default asStyle({
  listItemDisabled: {
    opacity: 0.5,
  },
  listItemActive: {},
  listItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    minHeight: 44,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    paddingTop: styleVariables.paddingBase,
    paddingBottom: styleVariables.paddingBase,
  },
})
