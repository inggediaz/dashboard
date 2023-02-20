import styled from '@emotion/styled'

export const Item = styled.li({
  cursor: 'pointer',
  display: 'flex',
  gap: '16px',
  paddingBottom: '5px',
  paddingTop: '5px',
  borderRadius: '',
  '&:hover': {
    background: 'grey'
  }
})

export const ItemName = styled.span(() => ({}))

export const AppIcon = styled.li(() => ({
  color: '#32383e !important'
}))
