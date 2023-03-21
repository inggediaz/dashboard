import { useNavigate } from 'react-router-dom'
import LogoComponent from '../../svg/Logo'
import { LogoSection, LogoTitle, Nav } from './menu-nav.styled'
import { useBoundStore } from '../../stores'
import AppMenu from '../app-menu/AppMenu'

export default function MenuNav (): JSX.Element {
  const isCollapsed = useBoundStore(state => state.collapse)
  const navigate = useNavigate()
  return (
    <Nav width={isCollapsed ? '16rem' : '5rem'}>
      <LogoSection
        onClick={() => {
          navigate('/dashboard')
        }}
      >
        <LogoComponent width='3rem' height='3rem' />
        {isCollapsed && <LogoTitle>LOGO</LogoTitle>}
      </LogoSection>
      <AppMenu />
    </Nav>
  )
}
