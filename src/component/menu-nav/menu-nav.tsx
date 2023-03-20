import { useNavigate } from 'react-router-dom'
import LogoComponent from '../../svg/Logo'
import { LogoSection, LogoTitle, Nav } from './menu-nav.styled'
import { useMenuStore } from '../../hooks/useMenu'
import AppMenu from '../app-menu/AppMenu'

export default function MenuNav (): JSX.Element {
  const slider = useMenuStore(state => state.collapse)
  const navigate = useNavigate()
  return (
    <Nav width={slider ? '16rem' : '5rem'}>
      <LogoSection
        onClick={() => {
          navigate('/dashboard')
        }}
      >
        <LogoComponent width='3rem' height='3rem' />
        {slider && <LogoTitle>LOGO</LogoTitle>}
      </LogoSection>
      <AppMenu />
    </Nav>
  )
}
