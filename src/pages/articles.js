import React from "react"
import { graphql } from "gatsby"
import Article from "../components/article"
import { Helmet } from "react-helmet"

export default function Articles({ data }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Protez Noz Natir - Articles</title>
        <meta
          name="keywords"
          content="Mauris vel viverra magna Phasellus nec sagittis tortor eu tincidunt velit Pellentesque lectus erat"
        />
        <meta
          name="description"
          content="Curabitur sed vestibulum tortor. Donec placerat felis sit amet enim suscipit, sed molestie ex imperdiet. Aliquam sagittis turpis nec tempor lacinia. Etiam commodo arcu sapien, id malesuada lectus varius et. "
        />
      </Helmet>
      <article className="articles">
        <h2 className="articles__heading">ARTICLES</h2>
        <div className="cards articles__cards">
          {data.allContentfulBlogPost.edges.map(item => {
            return (
              <Article
                title={item.node.title}
                text={item.node.summary}
                key={item.node.slug}
                slug={item.node.slug}
                image={item.node.thumbnail.file.url}
              />
            )
          })}
        </div>
      </article>
    </>
  )
}

export const query = graphql`
  query getAllArticles {
    allContentfulBlogPost {
      edges {
        node {
          slug
          title
          summary
          thumbnail {
            file {
              url
            }
          }
        }
      }
    }
  }
`
