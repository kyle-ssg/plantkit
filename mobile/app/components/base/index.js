// Forms
import Button, { ButtonNav } from './forms/Button'

import TextInput from './forms/TextInput'
import Select from './forms/Select'
import './forms/SelectBox'
import Checkbox from './forms/Checkbox'

// Grid
import './grid'
//Type
import './type'
//Base
import Loader from 'components/base/Loader.tsx'

import ListItem from 'components/base/ListItem'
// Animation
import Fade from 'components/base/animation/Fade'

global.Fade = Fade
global.Button = Button
global.ButtonNav = ButtonNav

global.Checkbox = Checkbox

global.TextInput = TextInput
global.Loader = Loader
global.Select = Select

// Navs
global.Delay = require('../utility-components/Delay')
global.ListItem = ListItem
