import React from "react"
// import PropTypes from 'prop-types'
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { Link, graphql } from "gatsby"

const Styled = styled.div`
font-family: proxima-nova, "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue";
  sans-serif;
  margin-top: 80px;

  article {
    ${tw`max-w-6xl grid grid-cols-4`};
    
    @media (min-width: 50em) {
      column-gap: 1rem;
    }

    header {
      grid-column: full-content;
      ${tw`mb-5`};

      h1 {
        ${tw`my-3 text-3xl`};
      }
    }

    section {
      max-width: 100%;
      grid-column: full-content;
      font-size: 0.75rem;
      display: contents;

      @media (min-width: 30em) {
        font-size: 0.875rem;
      }

      > * {
        grid-column: full-content;

        @media (min-width: 50em) {
          grid-column: main-content-start / outdent-end;
        }

        @media (min-width: 60em) {
          grid-column: main-content;
        }
      }
      > :not(img) {
        max-width: 30em;
        @media (min-width: 50em) {
          max-width: inherit;
        }
      }
    }
  }

  hr {
    ${tw`mt-3`}
  }

  nav {
    display: flex;
    justify-content: space-between;
    ${tw`h-16 flex justify-between items-center`};

    a {
      margin: 0 20px;
      letter-spacing: 1.75px;
      text-transform: uppercase;
      font-size: 0.75rem;
    }
  }
`

const Post = props => {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Styled className="container">
        <article>
          <header>
            <h1>{post.frontmatter.title}</h1>
            <small>{post.frontmatter.date}</small>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
        </article>
        <hr />
        <nav>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </nav>
      </Styled>
    </Layout>
  )
}

Post.propTypes = {
  // html: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // description: PropTypes.string,
  // excerpt: PropTypes.string,
}

export default Post

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
