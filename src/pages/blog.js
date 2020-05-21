import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import tw from "twin.macro"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Styled = styled.div`
  font-family: proxima-nova, "Helvetica Neue", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue";

  ${tw`max-w-6xl grid grid-cols-3`};

  @media (min-width: 50em) {
    column-gap: 1rem;
  }

  article {
    ${tw`mb-5`}
    grid-column: full-content;

    @media (min-width: 50em) {
      grid-column: main-content-start / outdent-end;
    }

    @media (min-width: 60em) {
      grid-column: main-content;
    }

    h3 {
      text-transform: unset;
    }
  }
`

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="All posts" />
      <Styled className="container" style={{ marginTop: "80px" }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3>
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Styled>
    </Layout>
  )
}
export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { hidden: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
