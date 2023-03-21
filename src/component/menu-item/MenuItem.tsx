import { useNavigate } from 'react-router-dom'
import { useBoundStore } from '../../stores'
import { Item, ItemName } from './MenuItem.styled'
export default function MenuItem (): JSX.Element {
  const navigate = useNavigate()
  const isCollapsed = useBoundStore(state => state.collapse)
  return (
    <Item
      className='pi pi-list'
      fontSize={isCollapsed ? '1.2rem' : '1.5rem'}
      title={isCollapsed ? undefined : 'App 1'}
      onClick={() => {
        navigate('/dashboard/app')
      }}
    >
      {isCollapsed && <ItemName>App 1</ItemName>}
    </Item>
  )
}
