import {
  Header,
  HeaderCard,
  ContentEnd,
  ContentStart,
  MenuToggleButton
} from './Header.styled'
import UserSetting from './user-settings/UserSetting'
import { useBoundStore } from '../stores'

export default function LayoutHeader (): JSX.Element {
  const isCollapsed = useBoundStore(state => state.collapse)
  return (
    <Header>
      <HeaderCard>
        <ContentStart>
          <MenuToggleButton
            onClick={useBoundStore(state => state.toggle)}
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
