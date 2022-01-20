const React = require("react")
const Layout = require("./src/components/layout").default

// global styles
require("./src/styles/index.scss")

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
