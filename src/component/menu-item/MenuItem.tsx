import { useMenuStore } from '../../hooks/useMenu'
import { Item, ItemName } from './MenuItem.styled'
export default function MenuItem (): JSX.Element {
  const slider = useMenuStore(state => state.collapse)
  return (
    <Item
      className='pi pi-list'
      fontSize={slider ? '1.2rem' : '1.5rem'}
      title={slider ? undefined : 'App 1'}
    >
      {slider && <ItemName>App 1</ItemName>}
    </Item>
  )
}
