import useNotLoggedInRedirect from 'common/hooks/useNotLoggedInRedirect'
import { useUser } from 'common/hooks/useUser'
import Button from 'components/base/forms/Button'

const SecuredPage = () => {
  useNotLoggedInRedirect()
  const { logout } = useUser()
  return (
    <div className='container-fluid'>
      Secret page
      <Button onClick={() => logout({})}>Logout</Button>
    </div>
  )
}

SecuredPage.displayName = 'SecuredPage'
export default SecuredPage
