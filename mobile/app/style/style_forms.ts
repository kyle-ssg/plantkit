import asStyle from './style-utils/asStyle'
import { palette, styleVariables } from './style_variables'

export default asStyle({
  textInput: {
    height: 48,
    fontSize: styleVariables.fontSizeH3,
    fontFamily: styleVariables.normalFontFamily,
    backgroundColor: 'white',
    paddingLeft: styleVariables.gutterBase,
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
    fontSize: 16,
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
