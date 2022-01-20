import React from "react"
import { graphql } from "gatsby"
import Cause from "../components/cause"
import { Helmet } from "react-helmet"

export default function Causes({ data }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Protez Noz Natir - Causes</title>
        <meta
          name="keywords"
          content="Mauris vel viverra magna Phasellus nec sagittis tortor eu tincidunt velit Pellentesque lectus erat"
        />
        <meta
          name="description"
          content="Curabitur sed vestibulum tortor. Donec placerat felis sit amet enim suscipit, sed molestie ex imperdiet. Aliquam sagittis turpis nec tempor lacinia. Etiam commodo arcu sapien, id malesuada lectus varius et. "
        />
      </Helmet>
      <article className="causes causes_paddingTop">
        <h2 className="causes__heading">Causes</h2>
        <div className="cards">
          {data.allContentfulCause.edges.map(item => {
            return (
              <Cause
                title={item.node.title}
                text={item.node.summary}
                key={item.node.slug}
                slug={item.node.slug}
                image={item.node.thumbnail.file.url}
                raised={item.node.currentValue}
                target={item.node.targetValue}
              />
            )
          })}
        </div>
      </article>
    </>
  )
}

export const pageQuery = graphql`
  query getAllCauses {
    allContentfulCause(sort: { fields: completed, order: ASC }) {
      edges {
        node {
          currentValue
          slug
          summary
          title
          thumbnail {
            file {
              url
            }
          }
          targetValue
        }
      }
    }
  }
`
