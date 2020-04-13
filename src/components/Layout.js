import React from 'react'
import Footer from "./Footer"
import Navbar from "./Navbar"
import "./layout.css"
function Layout({children}) {
    
    return (
        <main>
      <Navbar />
      {children}
      <Footer />
    </main>
    )
}

export default Layout
