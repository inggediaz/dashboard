import { ReactNode, FC, Suspense } from 'react'
import LayoutHeader from '../component/LayoutHeader'
import layout from './Layout.module.css'
// import Leads from './Leads'
import MenuNav from '../component/menu-nav/menu-nav'
import { Outlet } from 'react-router-dom'
interface Props {
  children?: ReactNode
}
export default function Layout ({ children }: Props): JSX.Element {
  const Footer = (): JSX.Element => {
    return <footer>Footer</footer>
  }

  interface Props {
    children?: ReactNode
  }
  const Content: FC<Props> = props => {
    return <aside className={layout.content}>{props.children}</aside>
  }

  const Spinner = (): JSX.Element => <h2>Loading</h2>
  return (
    <>
      <MenuNav />
      <section className={layout.layoutContent}>
        <LayoutHeader />
        <Suspense fallback={<Spinner />}>
          <Content>
            <Outlet />
          </Content>
        </Suspense>
        <Footer />
      </section>
    </>
  )
}
