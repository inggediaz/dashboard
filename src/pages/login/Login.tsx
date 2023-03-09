import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import './login.css'
import { Messages } from 'primereact/messages'
import { useLogin } from '../../hooks/useLogin'
import LogoComponent from '../../svg/Logo'
import { Header } from './Login.styled'

export default function Login (): JSX.Element {
  const { user, messages, loading, setUser, handleSubmit } = useLogin()

  const header = (
    <Header>
      <LogoComponent width='200px' height='200px' />
      <p className='flex justify-content-center'>Login App</p>
    </Header>
  )
  const footer = (
    <span>
      <Button
        loading={loading}
        disabled={user.username.length === 0 || user.password.length === 0}
        form='loginForm'
        type='submit'
        label='Login'
        style={{ width: '100%' }}
      />
    </span>
  )
  return (
    <div className='bodyApp flex flex-wrap align-items-center justify-content-center'>
      <div className='flex align-items-center justify-content-center vertical-align-middle'>
        <Card header={header} footer={footer}>
          <form id='loginForm' onSubmit={handleSubmit}>
            <span className='p-input-icon-left'>
              <i className='pi pi-user' />
              <InputText
                placeholder='Username'
                value={user.username}
                onChange={event => {
                  setUser({
                    ...user,
                    username: event.currentTarget.value
                  })
                }}
              />
            </span>
            <span className='p-input-icon-left'>
              <i className='pi pi-lock' />
              <InputText
                type='password'
                placeholder='Password'
                value={user.password}
                onChange={event => {
                  setUser({
                    ...user,
                    password: event.currentTarget.value
                  })
                }}
              />
            </span>
            <Messages ref={messages} />
          </form>
        </Card>
      </div>
    </div>
  )
}
