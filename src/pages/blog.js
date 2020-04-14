import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const blog = ({data}) => {
  return (
    <Layout>
      <div>
  <h1> title : {data.site.siteMetadata.title}</h1>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`
export default blog
