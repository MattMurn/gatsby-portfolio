import React from "react"
import Layout from "../components/Boilerplate/layout"
import SEO from "../components/Boilerplate/seo"
import About from "../components/About/About"

const AboutPage = () => (
  <Layout style="alt" previousLocation="/">
    <SEO title="About" />
    <About style="alt"/>
  </Layout>
)

export default AboutPage