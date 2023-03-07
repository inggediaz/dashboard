import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Image } from 'primereact/image'
import './login.css'
import { Messages } from 'primereact/messages'
import { useLogin } from '../hooks/useLogin'

export default function Login (): JSX.Element {
  const { user, setUSer, handleSubmit, messages, loading } = useLogin()

  const header = (
    <>
      <Image src='assets/images/erc-logo.png' />
      <p className='flex justify-content-center'>Login App</p>
    </>
  )
  const footer = (
    <span>
      <Button
        loading={loading}
        disabled={!user.username || !user.password}
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
                onChange={event =>
                  setUSer({
                    ...user,
                    username: event.target.value
                  })
                }
              />
            </span>
            <span className='p-input-icon-left'>
              <i className='pi pi-lock' />
              <InputText
                type={'password'}
                placeholder='Password'
                value={user.password}
                onChange={event =>
                  setUSer({
                    ...user,
                    password: event.target.value
                  })
                }
              />
            </span>
            <Messages ref={messages}></Messages>
          </form>
        </Card>
      </div>
    </div>
  )
}
