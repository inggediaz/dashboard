import {
  Header,
  HeaderCard,
  ContentEnd,
  ContentStart,
  MenuToggleButton
} from './Header.styled'
import UserSetting from './user-settings/UserSetting'
import { useMenuStore } from '../hooks/useMenu'

export default function LayoutHeader (): JSX.Element {
  const isCollapsed = useMenuStore(state => state.collapse)
  return (
    <Header>
      <HeaderCard>
        <ContentStart>
          <MenuToggleButton
            onClick={useMenuStore(state => state.toggle)}
            icon={`pi pi-arrow-${isCollapsed ? 'left' : 'right'}`}
            className='p-button-secondary p-button-outlined p-button-rounded'
          />
        </ContentStart>
        <ContentEnd>
          <UserSetting />
        </ContentEnd>
      </HeaderCard>
    </Header>
  )
}
