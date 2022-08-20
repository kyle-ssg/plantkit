import asStyle from './style-utils/asStyle'
import { palette, styleVariables } from './style_variables'
import { paddingBase } from './style_grid'

export default asStyle({
  textInput: {
    height: 48,
    fontSize: styleVariables.fontSizeH3,
    fontFamily: styleVariables.normalFontFamily,
    fontWeight: '300',
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.inputBorder,
    paddingLeft: styleVariables.gutterBase,
    borderRadius: styleVariables.baseBorderRadius,
  },

  textInputGrey: {},

  textArea: {
    height: 90,
  },

  textInputError: {
    borderColor: palette.danger,
  },

  textInputText: {
    color: palette.text,
  },
  inputLabel: {
    fontSize: styleVariables.fontSizeH3,
    marginBottom: paddingBase,
  },
  selectBoxContainer: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  textInputIcon: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
  textInputButton: {
    position: 'absolute',
    right: 0,
    width: 50,
    height: 48,
  },
  textInputContainer: {
    position: 'relative',
  },
})
