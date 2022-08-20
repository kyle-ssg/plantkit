import em from './style-utils/style_pxToEm'
import { Platform } from 'react-native'

export const palette = {
  bodyBackground: '#f6f6f6', // General app  background (overriding palette)
  primary: '#3BB874',
  primaryOutline: '#3BB873',
  primaryPressed: '#3ec078',
  secondary: '#406661',
  secondaryPressed: '#446c66',
  text: '#020202',
  textInactive: '#000000',
  textMuted: '#6A6A6A',
  inputBorder: '#e1e1e1',
  textLight: '#fff',
  textLightInactive: 'rgba(255,255,255,0.8)',
  backdrop: 'rgba(0,0,0,.2)',
  link: '#60A5FA',
  success: '#64CC8E',
  textHighlight: '#64CC8E',
  warn: '#ec8441',
  primaryLight: '#9acc64',
  danger: '#e04958',
}

export type TProjectPalette = typeof palette

export const styleVariables = {
  defaultStatusBarColour: 'dark-content',
  //= = Typography
  fontSizeBase: em(1), //16px
  fontSizeSmall: em(0.8), //14px
  fontSizeH1: em(3), // 32px
  fontSizeH2: em(1.45), // 24px
  fontSizeH3: em(1.25), // 20px
  fontSizeH4: em(1), // 16px
  fontSizeH5: em(0.8),

  // rename font files to match their
  normalFontFamily: Platform.select({
    ios: 'JosefinSans-SemiBold',
    android: 'JosefinSans-SemiBold',
  }),
  italicFontFamily: Platform.select({
    ios: 'JosefinSans-Italic',
    android: 'JosefinSans-Italic',
  }),
  boldFontFamily: Platform.select({
    ios: 'JosefinSans-Bold',
    android: 'JosefinSans-Bold',
  }),
  headingFontFamily: Platform.select({
    ios: 'Allura-Regular',
    android: 'Allura-Regular',
  }),
  buttonFontFamily: Platform.select({
    ios: 'JosefinSans-SemiBold',
    android: 'JosefinSans-SemiBold',
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
