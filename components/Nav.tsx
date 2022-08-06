import { FC, useState } from 'react'
import ActiveLink from 'components/base/ActiveLink'
import Strings from '../project/localisation' // we need this to make JSX compile
import cx from 'classnames'
type ComponentType = {}

const Nav: FC<ComponentType> = ({}) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
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
            <li className='nav-item'>
              <ActiveLink href='/other/'>
                <span className='nav-link cursor-pointer'>{Strings.link}</span>
              </ActiveLink>
            </li>
            <li className='nav-item'>
              <span className='nav-link disabled'>{Strings.disabled}</span>
            </li>
          </ul>
          <form onSubmit={(e) => e.preventDefault()} className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              {Strings.search}
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Nav
