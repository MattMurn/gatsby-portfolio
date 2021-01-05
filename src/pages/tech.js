import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TechSim from "../components/Tech/TechSim"


const TechPage = () => (
  <Layout nextLocation="/" previousLocation="/about">
    <SEO title="Tech" />
    <TechSim/>
  </Layout>
)

export default TechPage
