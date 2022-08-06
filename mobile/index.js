import { AppRegistry } from 'react-native'
import './app/route-urls'
import './app/project/globals'
import './app/style/_style_screen'
import './app/components/base'
import './app/project/project-components'
import App from './app/App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

console.log('New Version')
