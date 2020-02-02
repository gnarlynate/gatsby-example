import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const ConfWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
`
const Description = styled.div`

`

const EventName = styled.div`
  marfing: 0 0 12px 0;
  padding: 0
`

const EventDate = styled.div`
  marfing: 0 0 12px 0;
  padding: 0
`

const Conference = props => (
  <ConfWrapper>
    <Description>
      <EventName>{props.eventName}</EventName>
      <EventDate>{props.eventDate}</EventDate>
    </Description>
  </ConfWrapper>
)

const SurfReportPage = () => (
  <Layout>
    <h1>Events:</h1>
    <Conference
    eventName="Demo Days"
    eventDate="March 13, 2020"
    />
    <SEO title="Page two" />
    <h1>Recent Surf report</h1>
    <p>
      <a href="https://magicseaweed.com/Beacons-Surf-Report/4562/" target='_blank'>Magic Seaweed</a>
    </p>
    <p>
      <a href="https://www.surfline.com/surf-report/beacons/5842041f4e65fad6a77088a0" target='_blank'>Surfline</a>
    </p>
  </Layout>
)

export default SurfReportPage