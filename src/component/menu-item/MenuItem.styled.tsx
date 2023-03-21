import styled from '@emotion/styled'
import { smallAndBigger } from '../menu-nav/menu-nav.styled'
interface NavProps {
  fontSize: string
}
export const Item = styled.li<NavProps>(props => ({
  cursor: 'pointer',
  display: 'flex',
  gap: '16px',
  paddingBottom: '0.5rem',
  paddingTop: '0.5rem',
  paddingLeft: '0.5rem',
  borderRadius: '5px',
  fontSize: props.fontSize,
  transitionDuration: '200ms',
  width: '70%',
  '&:hover': {
    background: '#ffffff26'
  },
  [smallAndBigger]: {
    fontSize: '1.5rem'
  }
}))

export const ItemName = styled.span(() => ({
  [smallAndBigger]: {
    display: 'none'
  }
}))

export const AppIcon = styled.li(() => ({
  color: '#32383e !important'
}))
