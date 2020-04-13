import React, { Children } from 'react'

const SimpleHero = ({children}) => {
    return <header className="defaultHero">
{children}
    </header>
}

export default SimpleHero
