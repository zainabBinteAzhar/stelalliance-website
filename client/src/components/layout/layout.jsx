import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ background: "var(--bgColor)", overflow: "hidden" }}>
      <div>
        <Header />
        {/* outlet will automatically take the children */}
        <Outlet/>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
