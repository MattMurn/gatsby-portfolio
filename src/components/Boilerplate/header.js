import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, description }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
      {siteTitle}
      </h1>
      <h6>{description}</h6>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
