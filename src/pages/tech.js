import React from "react"
import Layout from "../components/Boilerplate/layout"
import SEO from "../components/Boilerplate/seo"
import TechSim from "../components/Tech/TechSim"


const TechPage = () => (
  <Layout previousLocation="/about">
    <SEO title="Tech" />
    <TechSim/>
  </Layout>
)

export default TechPage
