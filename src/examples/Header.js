import React from 'react'
import {useStaticQuery , graphql} from 'gatsby'

const getSiteData = graphql`
{
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`

const Header = () => {

    const {site : {siteMetadata }} = useStaticQuery(getSiteData)
   // console.log('daaaaaaaaaaata' , siteMetadata)
    // console.log('data' , data.site.siteMetadata.title) ;
    return (
        <div>
            <h1>title : {siteMetadata.title} </h1>
            <h1> auhor : {siteMetadata.author} </h1>
            
        </div>
    )
}

export default Header
