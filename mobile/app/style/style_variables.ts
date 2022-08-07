import em from './style-utils/style_pxToEm'
import { Platform } from 'react-native'

export const palette = {
  bodyBackground: '#f9f9f9', // General app  background (overriding palette)
  primary: '#3BB874',
  primaryOutline: '#3BB873',
  primaryPressed: '#3ec078',
  secondary: '#406661',
  secondaryPressed: '#446c66',
  text: '#000000',
  textInactive: '#000000',
  textMuted: '#6A6A6A',
  inputBorder: '#e1e1e1',
  textLight: '#fff',
  textLightInactive: 'rgba(255,255,255,0.8)',
  backdrop: 'rgba(0,0,0,.2)',
  link: '#60A5FA',
  success: '#64CC8E',
  textHighlight: '#64CC8E',
  danger: '#B83B3B',
}

export type TProjectPalette = typeof palette

export const styleVariables = {
  defaultStatusBarColour: 'dark-content',
  //= = Typography
  fontSizeBase: em(1), //16px
  fontSizeSmall: em(0.8), //14px
  fontSizeH1: em(2), // 32px
  fontSizeH2: em(1.45), // 24px
  fontSizeH3: em(1.25), // 20px
  fontSizeH4: em(1), // 16px
  fontSizeH5: em(0.8),

  // rename font files to match their
  normalFontFamily: Platform.select({
    ios: 'Lato-Regular',
    android: 'Lato-Regular',
  }),
  italicFontFamily: Platform.select({
    ios: 'Lato-Italic',
    android: 'Lato-Italic',
  }),
  boldFontFamily: Platform.select({ ios: 'Lato-Bold', android: 'Lato-Bold' }),
  buttonFontFamily: Platform.select({
    ios: 'Lato-Regular',
    android: 'Lato-Regular',
  }),

  // Buttons
  buttonHeight: 48,

  // Border Radius
  baseBorderRadius: 6,
  BorderRadiusXL: 18,

  // Grid
  marginBaseVertical: 15,
  marginBaseHorizontal: 10,
  paddingBase: 15,
  gutterBase: 10,

  // Inputs
  inputFontSizeBase: em(1), //16px
  inputHeight: 44,
}

// @ts-ignore
global.styleVariables = styleVariables
// @ts-ignore
global.palette = palette
