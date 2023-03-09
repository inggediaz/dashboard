import { Suspense } from 'react'
import LayoutHeader from '../component/LayoutHeader'
import MenuNav from '../component/menu-nav/menu-nav'
import { Outlet } from 'react-router-dom'
import { LayoutSection, Content, Footer } from './Layout.styled'

export default function Layout (): JSX.Element {
  return (
    <>
      <MenuNav />
      <LayoutSection>
        <LayoutHeader />
        <Suspense fallback={<h2>Loading</h2>}>
          <Content>
            <Outlet />
          </Content>
        </Suspense>
        <Footer>Footer</Footer>
      </LayoutSection>
    </>
  )
}
