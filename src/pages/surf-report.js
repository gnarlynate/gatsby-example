import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SurfReportPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Recent Surf report</h1>
    <p>Beacons Surf Report:</p>
    <a href="https://magicseaweed.com/Beacons-Surf-Report/4562/" target='_blank'>Magic Seaweed</a>

    <p>Surfline:</p>
    <a href="https://www.surfline.com/surf-report/beacons/5842041f4e65fad6a77088a0" target='_blank'>Surfline</a>
  </Layout>
)

export default SurfReportPage