import styled from '@emotion/styled'

export const UserSettingButton = styled.button(() => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  '&:hover': {
    background: '#fff'
  }
}))

export const UserSettingSpan = styled.span(() => ({
  color: 'black',
  '&:hover': {
    backgroundColor: '#fff'
  }
}))
