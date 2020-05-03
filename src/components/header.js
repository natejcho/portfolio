// import PropTypes from "prop-types"
import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const Styled = styled.header`
  height: 80px;
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: 1000;

  .inner-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;

    a {
      text-decoration: none;
      color: black;
    }
    .logo {
      a {
        font-weight: 700;
        letter-spacing: 1.5px;
      }
    }
    .navigation {
      nav {
        a {
          margin: 0 20px;
          letter-spacing: 1.75px;
          text-transform: uppercase;
          font-size: 0.75rem;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
`

const Header = () => (
  <Styled>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">natejcho</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
          </nav>
        </div>
      </div>
    </div>
  </Styled>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
