import { useRef } from 'react'
import { type MenuItem } from 'primereact/menuitem'
import { Toast } from 'primereact/toast'
import { Menu } from 'primereact/menu'
import { useNavigate } from 'react-router-dom'
import { useBoundStore } from '../../stores'
import { UserSettingSpan, UserSettingButton } from './UserSetting.styled'
import { Avatar } from 'primereact/avatar'

export default function UserSetting (): JSX.Element {
  const navigate = useNavigate()
  const resetUser = useBoundStore(state => state.resetUser)
  const username = useBoundStore(state => state.username)
  const menu = useRef<Menu>(null)
  const toast = useRef<Toast>(null)

  const logout = (): void => {
    resetUser()
    navigate('/')
  }

  const items: MenuItem[] = [
    {
      label: 'Profile',
      icon: 'pi pi-user',
      url: 'https://reactjs.org/'
    },
    {
      label: 'Logout',
      icon: 'pi pi-power-off',
      command: e => {
        logout()
      }
    }
  ]
  // TODO Add the button collapse the menu

  return (
    <div className='card flex justify-content-center'>
      <Toast ref={toast} />
      <Menu model={items} popup ref={menu} />
      <UserSettingButton
        className='p-link'
        onClick={e => menu.current?.toggle(e)}
      >
        {/* <Avatar image='https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp' /> */}
        <Avatar label='GD' size='large' shape='circle' />
        <UserSettingSpan>{username}</UserSettingSpan>
      </UserSettingButton>
    </div>
  )
}
