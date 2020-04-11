import React from 'react'
//import "bootstrap/dist/css/bootstrap.min.css"
//import "./layout.css"
import Footer from "./Footer"
import Navbar from "./Navbar"
import '../saas/layout.scss'
function Layout({children}) {
    return (
        <> 
        <Navbar />
        {children}
       <Footer />
       </>
    )
}

export default Layout
