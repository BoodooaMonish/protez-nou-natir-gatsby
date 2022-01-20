import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Helmet } from "react-helmet"

// template for each article page

const options = {
  renderNode: {
    "embedded-entry-block": node => {
      const { image } = node.data.target
      if (!image) {
        return null
      }
      return (
        <img
          className="articles__article__banner"
          src={image.file.url}
          alt={image.title}
        />
      )
    },
  },
}

export default function Article({ data }) {
  const { content } = data.contentfulBlogPost
  const date = new Date(Date.parse(data.contentfulBlogPost.updatedAt))
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Protez Noz Natir - {data.contentfulBlogPost.title}</title>
        <meta name="keywords" content={data.contentfulBlogPost.metaKeywords} />
        <meta
          name="description"
          content={data.contentfulBlogPost.metaDescription}
        />
      </Helmet>
      <article className="articles">
        <h3 className="articles__heading">{data.contentfulBlogPost.title}</h3>
        <div className="articles__article__header">
          <p>Author: {data.contentfulBlogPost.author}</p>
          <p>
            Updated on: {date.getFullYear()}-{+date.getMonth() + 1}-
            {date.getDate()}
          </p>
        </div>
        <div className="articles__article__content">
          {renderRichText(content, options)}
        </div>
      </article>
    </>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      content {
        raw
        references {
          ... on ContentfulBannerImage {
            contentful_id
            title
            image {
              title
              file {
                url
              }
            }
          }
        }
      }
      author
      updatedAt
      metaDescription
      metaKeywords
    }
  }
`
