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

  normalFontFamily: Platform.select({ ios: 'System', android: 'System' }),
  italicFontFamily: Platform.select({ ios: 'System', android: 'System' }),
  boldFontFamily: Platform.select({ ios: 'System', android: 'System' }),
  buttonFontFamily: Platform.select({ ios: 'System', android: 'System' }),

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
