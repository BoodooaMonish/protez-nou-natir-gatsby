import React from "react"
import Goals from "../components/goals"
import RecentCauses from "../components/recentCauses"
import RecentArticles from "../components/recentArticles"
import Newsletter from "../components/newsletter"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function Home({ data }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Protez Noz Natir - Homepage</title>
        <meta
          name="keywords"
          content="Mauris vel viverra magna Phasellus nec sagittis tortor eu tincidunt velit Pellentesque lectus erat"
        />
        <meta
          name="description"
          content="Curabitur sed vestibulum tortor. Donec placerat felis sit amet enim suscipit, sed molestie ex imperdiet. Aliquam sagittis turpis nec tempor lacinia. Etiam commodo arcu sapien, id malesuada lectus varius et. "
        />
      </Helmet>
      <Goals />
      <RecentCauses data={data} />
      <RecentArticles />
      <Newsletter />
    </>
  )
}

export const pageQuery = graphql`
  query getAllNonCompletedCauses {
    allContentfulCause(limit: 4, filter: { completed: { eq: false } }) {
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
