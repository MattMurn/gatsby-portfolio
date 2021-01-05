import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from './Nav'
import Footer from './Footer'
import "./main.scss"
import "./layout.scss"

const Layout = ({ style, nextLocation, previousLocation, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  
  return (
    <div className="main__body">
      <main className="main__body-content">
        <Nav style={style} previousLocation={previousLocation} nextLocation={nextLocation}/>
        {children}
      </main>
      <Footer style={style}/>    
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
