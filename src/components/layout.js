import { Global, css } from "@emotion/core"
import PropTypes from "prop-types"
import Header from "../components/header"
import Footer from "../components/footer"
import React from "react"

const style = css`
  html,
  body {
    font-family: "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 16px;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  p {
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 300;
  }

  h3 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 1.5px;
    margin: 0;
  }

  .container {
    width: 1640px;
    min-width: 1640px;
    margin: 0 auto;

    @media (max-width: 1440px) {
      width: 1280px;
      min-width: 1280px;
    }
    @media (max-width: 1280px) {
      width: 976px;
      min-width: 976px;
    }
    @media (max-width: 976px) {
      width: 768px;
      min-width: 768px;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={style} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
