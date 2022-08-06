// import propTypes from 'prop-types';
import { FunctionComponent } from 'react'
import _HTML, { defaultSystemFonts } from 'react-native-render-html'
import { Linking, TextStyle, useWindowDimensions } from 'react-native'
import { paddingBase } from '../style/style_grid'
import { MixedStyleDeclaration } from '@native-html/transient-render-engine'
import { palette, styleVariables } from 'app/style/style_variables'

type ComponentType = {
  children: string
  textStyle?: TextStyle
  onLinkPress?: () => void
}

const HTML: FunctionComponent<ComponentType> = ({
  children,
  onLinkPress,
  textStyle,
}) => {
  const _onLinkPress = (e, uri) => {
    if (uri.includes('tel:') || uri.includes('mailto:')) {
      Linking.openURL(uri)
      return
    }
    onLinkPress && onLinkPress()
    Linking.openURL(uri)
  }

  const html =
    children &&
    children.replace(/&nbsp;/g, '').replace(/text-align: justify;/g, '')
  const { width } = useWindowDimensions()

  const systemFonts = [
    ...defaultSystemFonts,
    styleVariables.boldFontFamily,
    styleVariables.normalFontFamily,
  ]

  //@ts-ignore
  const baseStyle: MixedStyleDeclaration = {
    backgroundColor: 'transparent',
    color: palette.text,
    fontFamily: styleVariables.normalFontFamily,
    fontWeight: 'normal',
    ...(textStyle || {}),
  }
  return (
    <_HTML
      contentWidth={width}
      enableCSSInlineProcessing={false}
      enableExperimentalMarginCollapsing={true}
      systemFonts={systemFonts}
      tagsStyles={{
        a: {
          color: palette.primary,
          fontFamily: styleVariables.boldFontFamily,
          fontWeight: 'normal',
        },
        p: {
          fontFamily: styleVariables.normalFontFamily,
          fontWeight: 'normal',
        },
        pre: {
          fontFamily: styleVariables.normalFontFamily,
          fontWeight: 'normal',
        },
        li: {
          fontFamily: styleVariables.normalFontFamily,
          fontWeight: 'normal',
        },
        strong: {
          fontFamily: styleVariables.boldFontFamily,
          fontWeight: 'bold',
        },
        h1: { fontFamily: styleVariables.boldFontFamily, fontWeight: 'bold' },
        h2: { fontFamily: styleVariables.boldFontFamily, fontWeight: 'bold' },
        h3: { fontFamily: styleVariables.boldFontFamily, fontWeight: 'bold' },
        h4: { fontFamily: styleVariables.boldFontFamily, fontWeight: 'bold' },
        h5: { fontFamily: styleVariables.boldFontFamily, fontWeight: 'bold' },
        h6: { fontFamily: styleVariables.boldFontFamily, fontWeight: 'bold' },
        img: { maxWidth: width - paddingBase * 4, alignSelf: 'center' },
      }}
      baseStyle={baseStyle}
      source={{ html }}
      renderersProps={{
        a: {
          onPress: _onLinkPress,
        },
      }}
    />
  )
}

// const styles = StyleSheet.create({
//   img: {},
// })

export default HTML
