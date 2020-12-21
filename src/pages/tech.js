import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tech from "../components/Tech/Tech"

const TechPage = () => (
  <Layout nextLocation="/" previousLocation="/about">
    <SEO title="Tech" />
    <Tech/>
  </Layout>
)

export default TechPage
