import { SVGProps } from 'react'

const LogoComponent = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg style={{ backgroundColor: 'white', height: '4rem' }} {...props}>
    <g transform='translate(30,40)'>
      <text
        style={{
          fontSize: 24
        }}
      >
        Logo
      </text>
    </g>
  </svg>
)

export default LogoComponent
