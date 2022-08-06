import LocalizedStrings from 'react-native-localization'
import { setStrings, stringRecords } from 'common/strings'

const strings = new LocalizedStrings(stringRecords)

// make strings available to common folder
setStrings(strings)

export { strings as Strings }
