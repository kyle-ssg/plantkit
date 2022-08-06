// eslint-disable-next-line @typescript-eslint/no-unused-vars
import asStyle from './style-utils/asStyle'
import { palette, styleVariables } from './style_variables'

export default asStyle({
  button: {
    height: styleVariables.buttonHeight,
  },

  buttonPrimary: {
    backgroundColor: palette.primary,
  },
  buttonOutlinePrimary: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: palette.primaryOutline,
  },

  buttonOutlinePrimaryText: {
    color: palette.primary,
  },

  buttonOutlinePrimaryTextPressed: {},

  buttonOutlinePrimaryPressedText: {
    color: palette.primaryPressed,
  },

  buttonOutlinePrimaryPressed: {
    borderColor: palette.primary,
  },

  buttonLink: {
    backgroundColor: 'transparent',
    height: 'auto',
  },

  buttonLinkText: {
    color: palette.primary,
  },

  buttonLinkTextPressed: {
    color: palette.primaryPressed,
  },

  buttonLinkPressedText: {
    color: palette.primaryPressed,
  },

  buttonLinkPressed: {
    borderColor: palette.primary,
  },

  buttonPrimaryPressed: {
    backgroundColor: palette.primaryPressed,
  },

  buttonSecondary: {
    backgroundColor: palette.secondary,
  },

  buttonSecondaryPressed: {
    backgroundColor: palette.secondaryPressed,
  },

  buttonSecondaryText: {},
  buttonSecondaryTextPressed: {},

  buttonTertiary: {
    backgroundColor: 'white',
    borderColor: palette.primary,
    borderWidth: 1,
  },

  buttonDanger: {
    borderColor: palette.danger,
    borderRadius: styleVariables.baseBorderRadius,
    borderWidth: 1,
  },

  buttonDangerText: {
    color: palette.danger,
    fontSize: styleVariables.fontSizeH2,
  },

  buttonTertiaryPressed: {
    backgroundColor: '#eaeaea',
  },

  buttonText: {
    fontFamily: styleVariables.normalFontFamily,
    backgroundColor: 'transparent',
    color: 'white',
  },

  buttonTextText: {
    color: palette.primary,
    fontSize: styleVariables.fontSizeH2,
  },

  buttonTextPressed: {},

  buttonNav: {},

  buttonSmallText: {
    fontSize: styleVariables.fontSizeH4,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  buttonContainer: {
    overflow: 'hidden',
    position: 'relative',
  },
  buttonIcon: {
    position: 'absolute',
    right: 10,
    width: 30,
    height: 30,
    top: 10,
    borderRadius: styleVariables.baseBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primary,
    borderRadius: styleVariables.baseBorderRadius,
    height: styleVariables.buttonHeight,
  },
  buttonGroupPressed: {
    backgroundColor: palette.primaryPressed,
  },

  buttonTertiaryText: {
    color: palette.primary,
  },
  buttonTertiaryTextPressed: {},
  buttonPrimaryText: {
    color: 'white',
    fontSize: styleVariables.fontSizeH2,
  },
  buttonPrimaryTextPressed: {},
})
