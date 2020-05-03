import styled from "@emotion/styled"
import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

Blurb.propTypes = {}

const Styled = styled.div`
  padding: 48px 0;
  background: white;
  position: relative;

  .inner-blurb {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content {
      width: 33%;
      @media (max-width: 144px) {
        width: 40%;
      }

      h3 {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.8rem;
        letter-spacing: 1.5px;
        margin: 0;
      }
      p {
        font-size: 1rem;
        line-height: 2rem;
        font-weight: 300;
        margin: 40px 0 72px;
      }
      .btn-row {
        a {
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.875rem;
          letter-spacing: 1.5px;
          color: black;
          text-decoration: none;
        }
      }
    }
    .images {
      width: 50%;
      height: 1000px;
      position: relative;
      z-index: 50;
      @media (max-width: 1440px) {
        height: 800px;
      }

      .bottom-left {
        position: absolute;
        width: 410px;
        bottom: 0;
        left: 0;
        z-index: 40;
        @media (max-width: 1440px) {
          bottom: 110px;
          width: 310px;
        }
      }
      .top-right {
        position: absolute;
        width: 460px;
        top: 0;
        right: 0;
        z-index: 40;
        @media (max-width: 1440px) {
          top: 110px;
          width: 310px;
        }
      }
    }
  }
  .black-box {
    background-color: black;
    height: 418px;
    width: 836px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 1440px) {
      height: 340px;
      width: 636px;
    }

    &.overlay {
      z-index: 50;
      background: #83333e;
      mix-blend-mode: overlay;
    }
  }
`

function Blurb(props) {
  const data = useStaticQuery(graphql`
    query {
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
        <div className="inner-blurb">
          <div className="content">
            <h3>Building useful things</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for ‘lorem ipsum’ will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <div className="btn-row">
              <Link>View Series</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.bwSelfie.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.filmPhoto.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </Styled>
  )
}

export default Blurb
