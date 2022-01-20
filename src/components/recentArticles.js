import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Article from "./article"

export default function RecentArticles() {
  const data = useStaticQuery(graphql`
    query getLatestArticles {
      allContentfulBlogPost(
        limit: 4
        sort: { order: DESC, fields: createdAt }
      ) {
        edges {
          node {
            slug
            summary
            title
            thumbnail {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <article className="recentArticles">
      <h2 className="recentArticles__heading">RECENT ARTICLES</h2>
      <div className="cards">
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
      <Link to="/articles" className="btn btn_primary recentArticles__btn">
        View All Articles
      </Link>
    </article>
  )
}
