import LogoComponent from '../../svg/Logo'
import { LogoSection, LogoTitle, Nav } from './menu-nav.styled'
import { useMenuStore } from '../../hooks/useMenu'
import AppMenu from '../app-menu/AppMenu'

export default function MenuNav (): JSX.Element {
  const slider = useMenuStore(state => state.collapse)
  return (
    <Nav width={slider ? '16rem' : '5rem'}>
      <LogoSection>
        <LogoComponent width='3rem' height='3rem' />
        {slider && <LogoTitle>LOGO</LogoTitle>}
      </LogoSection>
      <AppMenu />
    </Nav>
  )
}
