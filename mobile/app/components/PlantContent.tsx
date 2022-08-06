import { FC } from 'react'
import WebView from 'react-native-webview'
type PlantContentType = {
  content: string
}
const getCSS = () => {
  return `
app-header, app-nav, .heading-link--back, .usabilla-live-button, .article-action, .flag__body, lib-widget-plant-banner, .THX_IP, .ad-wrapper, .join-the-rhs, footer, .l-layout>.l-module:nth-child(1) {
    display: none;
}
.l-col-md-7 {
 width: 100% !important;
}
`
}
const PlantContent: FC<PlantContentType> = ({ content }) => {
  return (
    <WebView
      injectedJavaScript={`const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
// Usage: 
addCSS(\`${getCSS()}\`)`}
      style={styles.container}
      source={{ uri: content }}
    />
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default PlantContent
