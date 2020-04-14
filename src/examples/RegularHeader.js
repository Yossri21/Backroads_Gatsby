import React from 'react'
import {StaticQuery , graphql} from 'gatsby'


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

const RegularHeader = () => {
    return (
        <StaticQuery query={getSiteData} render = {
            data => {
                console.log('here' , data)
            return (
            <h1> Helllooo  : {data.site.siteMetadata.author} </h1>
            )
            }
        } />

    )
             
}

export default RegularHeader
