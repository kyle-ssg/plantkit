import { FC } from 'react'
import { useNavigationState } from '@react-navigation/core'
import { paddingBase } from '../style/style_grid'
import { RouteUrls } from '../route-urls'
import { useNavigation } from '@react-navigation/native' // we need this to make JSX compile

type NavMenuType = {
  index: number
}

const NavMenu: FC<NavMenuType> = ({ index }) => {
  const { push } = useNavigation()
  const goSettings = () => {
    push(RouteUrls.SettingsScreen)
  }
  switch (index) {
    default:
      return (
        <TouchableOpacity onPress={goSettings} style={styles.navItem}>
          <Text weight='bold' light>
            <FA5Pro style={Styles.navIcon} name='user-cog' />
          </Text>
        </TouchableOpacity>
      )
  }
}

const styles = StyleSheet.create({
  navItem: {
    position: 'absolute',
    paddingRight: paddingBase * 2,
    right: 0,
    width: 100,
    alignItems: 'flex-end',
  },
})

export default NavMenu
