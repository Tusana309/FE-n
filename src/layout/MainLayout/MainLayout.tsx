import React from 'react'
import Footer from 'src/component/Footer'
import Header from 'src/component/Header'
import HeaderMobile from 'src/component/HeaderMobile'
interface Props {
  children: React.ReactNode
}
const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default MainLayout
