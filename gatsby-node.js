var path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query CreatePages {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulCause(filter: { completed: { eq: false } }) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    const slugPost = node.slug
    createPage({
      path: `/articles/${slugPost}/`,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        slug: slugPost,
      },
    })
  })
  result.data.allContentfulCause.edges.forEach(({ node }) => {
    const slugCause = node.slug
    createPage({
      path: `/causes/${slugCause}/`,
      component: path.resolve(`./src/templates/causes.js`),
      context: {
        slug: slugCause,
      },
    })
  })
}
