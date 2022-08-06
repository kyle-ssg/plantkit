import useInsets from 'components/base/useInset'
import Flex from 'components/base/grid/Flex'
import { FC, useMemo } from 'react'
import { ViewStyle } from 'react-native'

//This component, for iOS, lets you draw a custom view where the navbar is, use with a backgroundColor:"transparent"
// This will be cross platform when the following is merged https://github.com/software-mansion/react-native-screens/pull/575

type Props = {
  style?: ViewStyle
  navbarStyle?: ViewStyle
}

const NavBackgroundHelper: FC<Props> = ({ navbarStyle, children }) => {
  const insets = useInsets()
  const style = useMemo(
    () => [{ minHeight: insets.top + 44 }, navbarStyle],
    [navbarStyle, insets],
  )
  return (
    <Flex>
      <View style={style} />
      {children}
    </Flex>
  )
}

// const styles = ReactNative.StyleSheet.create({
// })

export default NavBackgroundHelper
