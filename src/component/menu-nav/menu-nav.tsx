import LogoComponent from '../../svg/Logo'
import { Nav } from './menu-nav.styled'
import { useMenuStore } from '../../hooks/useMenu'
import AppMenu from '../app-menu/AppMenu'

export default function MenuNav (): JSX.Element {
  const slider = useMenuStore(state => state.collapse)
  return (
    <Nav width={slider ? '15rem' : '5rem'}>
      <LogoComponent />
      <AppMenu />
    </Nav>
  )
}
