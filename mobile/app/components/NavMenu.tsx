import { FC } from 'react'
import { useNavigationState } from '@react-navigation/core' // we need this to make JSX compile

type NavMenuType = {
  index: number
}

const NavMenu: FC<NavMenuType> = ({ index }) => {
  return <Text light>{index}</Text>
}

export default NavMenu
