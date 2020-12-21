import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/About/About"

const AboutPage = () => (
  <Layout style="alt" nextLocation="/tech" previousLocation="/">
    <SEO title="About" />
    <About style="alt"/>
  </Layout>
)

export default AboutPage