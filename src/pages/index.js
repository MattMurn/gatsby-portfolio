import React from "react"
import Layout from "../components/Boilerplate/layout"
import SEO from "../components/Boilerplate/seo"
import {Name} from "../components/Name/Name"
const IndexPage = () => (
  <Layout nextLocation='/about'>
    <SEO title="Home" />
    <Name first="Matthew" last="Murnighan"/>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
