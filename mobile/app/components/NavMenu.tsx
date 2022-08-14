import { FC } from 'react'
import { paddingBase } from '../style/style_grid'
import { RouteUrls } from '../route-urls'
import { useNavigation } from '@react-navigation/native' // we need this to make JSX compile

type NavMenuType = {
  index: number
}

const NavMenu: FC<NavMenuType> = ({ index }) => {
  const { push } = useNavigation()
  const goSearch = () => {
    push(RouteUrls.SearchScreen)
  }
  const goSettings = () => {
    push(RouteUrls.SettingsScreen)
  }
  switch (index) {
    default:
      return (
        <Row style={styles.navContainer}>
          <TouchableOpacity onPress={goSearch} style={styles.navItem}>
            <Text weight='bold' light>
              <FA5Pro style={Styles.navIcon} name='search' />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goSettings} style={styles.navItem}>
            <Text weight='bold' light>
              <FA5Pro style={Styles.navIcon} name='user-cog' />
            </Text>
          </TouchableOpacity>
        </Row>
      )
  }
}

const styles = StyleSheet.create({
  navContainer: {
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'flex-end',
  },
  navItem: {
    paddingHorizontal: paddingBase * 2,
  },
})

export default NavMenu
