import { Global, css } from "@emotion/core"
import Banner from "../components/banner"
import Header from "../components/header"
import Blurb from "../components/blurb"
import Footer from "../components/footer"
import React from "react"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

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

const IndexPage = () => (
  <>
    <Global styles={style} />
    <Header />
    <Banner />
    <Blurb />
    <Footer />
  </>
)

export default IndexPage
