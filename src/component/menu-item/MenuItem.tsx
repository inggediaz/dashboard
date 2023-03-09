import { useNavigate } from 'react-router-dom'
import { useMenuStore } from '../../hooks/useMenu'
import { Item, ItemName } from './MenuItem.styled'
export default function MenuItem (): JSX.Element {
  const navigate = useNavigate()
  const slider = useMenuStore(state => state.collapse)
  return (
    <Item
      className='pi pi-list'
      fontSize={slider ? '1.2rem' : '1.5rem'}
      title={slider ? undefined : 'App 1'}
      onClick={() => {
        navigate('/dashboard/app')
      }}
    >
      {slider && <ItemName>App 1</ItemName>}
    </Item>
  )
}
