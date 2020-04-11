import React from 'react'
import styles from "./navbar.module.css"

function Navbar() {
    return (
        <div className={styles.navbar}>
         <h1 style={{color:'yellow'}}> I am Navbar</h1>  
         <div className={styles.links}>  Navbar links </div>
        </div>
    )
}

export default Navbar
