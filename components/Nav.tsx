import { FC, useState } from 'react'
import ActiveLink from 'components/base/ActiveLink'
import Strings from '../project/localisation' // we need this to make JSX compile
import cx from 'classnames'
type ComponentType = {}

const Nav: FC<ComponentType> = ({}) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <div className='container-fluid'>
        <button
          onClick={() => setIsActive(!isActive)}
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={cx({ collapse: !isActive }, 'navbar-collapse')}
          id='navbarCollapse'
        >
          <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item'>
              <ActiveLink href='/'>
                <span className='nav-link cursor-pointer' aria-current='page'>
                  {Strings.home}
                </span>
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
