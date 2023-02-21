import styled from '@emotion/styled'

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
  }
}))

export const ItemName = styled.span(() => ({}))

export const AppIcon = styled.li(() => ({
  color: '#32383e !important'
}))
