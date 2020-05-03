import React from "react"
import styled from "@emotion/styled"
import github from "../images/github.png"
import linkedIn from "../images/linkedIn.png"
import twitter from "../images/twitter.svg"

const Styled = styled.footer`
  background: #f2f4f5;
  height: 80px;
  .inner {
    padding: 0 120px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: start;

    a {
      display: flex;
      margin: 0 8px;
      height: 24px;
      width: 24px;
      text-decoration: none;
      color: black;

      img {
        margin-bottom: 0;
      }
    }
  }
`

const Footer = () => {
  return (
    <Styled>
      <div className="inner">
        <a
          href="https://twitter.com/natejcho"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/nathaniel-cho-99656b125/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedIn} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/natejcho"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" />
        </a>
        <a
          href="mailto:natejcho@gmail.com?"
          target="_blank"
          rel="noopener noreferrer"
        >
          natejcho@gmail.com
        </a>
      </div>
    </Styled>
  )
}

export default Footer
