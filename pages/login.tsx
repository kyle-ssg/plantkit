import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useEffect,
  useState,
} from 'react'
import { useRouter } from 'next/router'
import ErrorMessage from 'components/Messages'
import { Button } from 'components/base/forms/Button'
import { Utils } from 'common/utils'
import Input from 'components/base/forms/Input'
import useLoggedInRedirect from 'common/hooks/useLoggedInRedirect'
import { useUser } from 'common/hooks/useUser'

const LoginPage: FC<{}> = () => {
  const router = useRouter()

  const [loginData, setLoginData] = useState({
    email: 'a@a.com',
    password: 'password',
  })

  const { login, userLoading, userError, loginSuccess } = useUser()
  useLoggedInRedirect()

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setLoginData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))

  const replace = router.replace
  useEffect(() => {
    if (loginSuccess) {
      const redir = Utils.fromParam().redirect
      replace(redir || '/')
    }
  }, [loginSuccess, replace])

  const handleSubmit: FormEventHandler = (event) => {
    Utils.preventDefault(event)
    login(loginData)
  }

  return (
    <div>
      <div id='content'>
        <div className='container-fluid'>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
              <Input
                className='mb-2 full-width'
                placeholder='Username'
                name='email'
                value={loginData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Input
                className='mb-2 full-width'
                placeholder='Password'
                name='password'
                value={loginData.password}
                type='password'
                onChange={handleChange}
              />
            </div>
            {userError && <ErrorMessage>{userError}</ErrorMessage>}
            <div className='text-right'>
              <Button type='submit' disabled={userLoading}>
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
      <footer className='sticky-footer bg-white'>
        <div className='container my-auto'>
          <div className='copyright text-center my-auto'>
            {/*<span>Copyright &copy; Your Website 2019</span>*/}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LoginPage
