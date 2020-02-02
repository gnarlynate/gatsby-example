import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql `
 query{ 
  file(relativePath: {eq: "longboard.jpeg"}){
    childImageSharp {
      fixed(width: 1000){
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`

const LongboardPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <Img fixed={data.file.childImageSharp.fixed}
    alt='hello'/>
    <h1>Recent Surf report</h1>
    <p>Beacons Surf Report:</p>
    <a href="https://magicseaweed.com/Beacons-Surf-Report/4562/" target='_blank'>Magic Seaweed</a>

    <p>Surfline:</p>
    <a href="https://www.surfline.com/surf-report/beacons/5842041f4e65fad6a77088a0" target='_blank'>Surfline</a>
  </Layout>
)

export default LongboardPage