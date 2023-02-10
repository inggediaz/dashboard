import styled from '@emotion/styled'
import { Button } from 'primereact/button'

export const Header = styled.header(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  backgroundColor: 'white',
  minHeight: '4rem'
}))

export const HeaderCard = styled.aside(() => ({
  width: '100%',
  height: '4rem',
  display: 'flex',
  alignItems: 'center'
}))

export const ContentStart = styled.div(() => ({
  display: 'flex',
  justifyContent: 'start',
  width: '100%',
  marginLeft: '1rem'
}))

export const ContentEnd = styled.div(() => ({
  display: 'flex',
  justifyContent: 'end',
  width: '100%',
  marginRight: '1rem'
}))

export const MenuToggleButton = styled(Button)(() => ({
  color: '#32383e !important'
}))
