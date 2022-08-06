import asStyle from './style-utils/asStyle'
import { palette, styleVariables } from './style_variables'

export default asStyle({
  //
  // Typography
  // --------------------------------------------------
  h1: {
    fontSize: styleVariables.fontSizeH1,
    fontFamily: styleVariables.boldFontFamily,
  },

  h2: {
    fontSize: styleVariables.fontSizeH2,
    fontFamily: styleVariables.boldFontFamily,
  },

  h3: {
    fontSize: styleVariables.fontSizeH3,
    fontFamily: styleVariables.boldFontFamily,
  },

  h4: {
    fontSize: styleVariables.fontSizeH4,
    fontFamily: styleVariables.boldFontFamily,
  },

  h5: {
    fontSize: styleVariables.fontSizeH5,
    fontFamily: styleVariables.boldFontFamily,
  },

  textMedium: {
    fontSize: styleVariables.fontSizeH4,
  },

  textSmall: {
    fontSize: styleVariables.fontSizeH5,
  },

  textBold: {
    fontFamily: styleVariables.boldFontFamily,
    fontWeight: 'bold',
  },

  text: {
    letterSpacing: 1.1,
    backgroundColor: 'transparent',
    color: palette.text,
    fontFamily: styleVariables.normalFontFamily,
    fontSize: styleVariables.fontSizeBase,
  },

  textCenter: {
    textAlign: 'center',
  },

  textLeft: {
    textAlign: 'left',
  },

  textRight: {
    textAlign: 'right',
  },

  textBottom: {
    textAlignVertical: 'bottom',
  },

  textWhite: {
    color: 'white',
  },

  muted: {
    color: palette.textMuted,
  },
})
