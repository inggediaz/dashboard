import styled from '@emotion/styled'

interface NavProps {
  width: string
}
export const smallAndBigger = '@media only screen and (max-width: 500px)'
export const Nav = styled.nav<NavProps>(props => ({
  width: props.width,
  background: '#343a40',
  borderRight: '0 none',
  backgroundImage: 'linear-gradient(180deg, #343a40 10%, #2e3439 100%)',
  color: 'white',
  transitionDuration: '300ms',
  position: 'relative',
  [smallAndBigger]: {
    width: '5rem'
  }
}))

export const LogoSection = styled.section({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '.5rem',
  gap: '0.5rem',
  cursor: 'pointer'
})

export const LogoTitle = styled.h3({
  [smallAndBigger]: {
    display: 'none'
  }
})
