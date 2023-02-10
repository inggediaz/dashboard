import { useRef } from 'react'
import { MenuItem } from 'primereact/menuitem'
import { Toast } from 'primereact/toast'
import { Menu } from 'primereact/menu'

import { UserSettingSpan, UserSettingButton } from './UserSetting.styled'
import { Avatar } from 'primereact/avatar'
export default function UserSetting (): JSX.Element {
  const menu = useRef<Menu>(null)
  const toast = useRef<Toast>(null)
  const items: MenuItem[] = [
    {
      label: 'Profile',
      icon: 'pi pi-user',
      url: 'https://reactjs.org/'
    },
    {
      label: 'Logout',
      icon: 'pi pi-power-off',
      command: e => console.log('Logout')
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
        <Avatar image='https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp' />
        <UserSettingSpan>Prime</UserSettingSpan>
      </UserSettingButton>
    </div>
  )
}
