import React from 'react'
import withScreen, { Screen } from './withScreen'
import { TPlant } from '../plantData'
import WebScreen from 'screens/WebScreen'
import { WebViewProps } from 'react-native-webview'

type PlantScreen = Screen & {
  plant: TPlant
}
const getCSS = () => {
  return `
app-header, app-nav, .heading-link--back, .usabilla-live-button, .article-action, .flag__body, lib-widget-plant-banner, .THX_IP, .ad-wrapper, section#join-the-rhs, footer, .l-layout>.l-module:nth-child(1) {
    display: none;
}
.l-col-md-7 {
 width: 100% !important;
}
`
}
const PlantScreen: React.FC<PlantScreen> = ({ plant }) => {
  const webViewProps: Partial<WebViewProps> = {
    source: {
      uri: plant.content,
    },
    injectedJavaScript: `const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
// Usage: 
addCSS(\`${getCSS()}\`)`,
  }

  return <WebScreen webViewProps={webViewProps} />
}

export default withScreen(PlantScreen)
