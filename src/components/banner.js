import styled from "@emotion/styled"
import React from "react"
// import PropTypes from "prop-types"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

Banner.propTypes = {}

const Styled = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  position: relative;
  height: 100vh;

  .text-line {
    position: relative;

    .main-text {
      font-size: 5.8rem;
      text-transform: uppercase;
      letter-spacing: 42px;
      font-weight: 700;
      color: white;
      position: absolute;
      width: 100%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      mix-blend-mode: difference;
      z-index: 100;

      @media (max-width: 1440px) {
        font-size: 4.4rem;
        letter-spacing: 36px;
      }
    }
    .image-1 {
      width: 536px;
      margin: 0 auto;

      @media (max-width: 1440px) {
        width: 436px;
      }
    }
    .side-image {
      position: absolute;

      &.image-2 {
        width: 375px;
        left: 60px;
        top: -120px;
        @media (max-width: 1440px) {
          width: 280px;
          top: -75px;
        }
      }
      &.image-3 {
        width: 270px;
        right: 175px;
        bottom: -170px;
        @media (max-width: 1440px) {
          bottom: -135px;
          right: 130px;
          width: 215px;
        }
      }
    }
  }
  .scroll {
    font-weight: 700;
    font-size: 0.875rem;
    color: black;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    position: absolute;
    bottom: 32px;
  }
  .fixed-misc {
    position: fixed;
    top: 50%;
    right: -28px;
    transform: rotate(-90deg);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 1.5px;
    color: white;
    mix-blend-mode: difference;
    z-index: 99;
    @media (max-width: 1440px) {
      right: -40px;
    }
  }
`

function Banner(props) {
  const data = useStaticQuery(graphql`
    query {
      taiwan: file(relativePath: { eq: "taiwan.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bwSelfie: file(relativePath: { eq: "black-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      filmPhoto: file(relativePath: { eq: "film.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Styled>
      <div className="container">
        <div className="text-line">
          <div className="side-image image-2">
            <Img fluid={data.bwSelfie.childImageSharp.fluid} />
          </div>
          <div className="main-text">Nathaniel Cho</div>
          <div className="image-1">
            <Img fluid={data.filmPhoto.childImageSharp.fluid} />
          </div>
          <div className="side-image image-3">
            <Img fluid={data.taiwan.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>scroll down</span>
        </div>
        <div className="fixed-misc">Software Engineer</div>
      </div>
    </Styled>
  )
}

export default Banner
