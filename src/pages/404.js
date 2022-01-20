import React from "react"
import { Link } from "gatsby"
import LogoNoPage from "../logos/logo_NoPage"
import { Helmet } from "react-helmet"

export default function NotFound() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Protez Noz Natir - 404 Page</title>
        <meta
          name="keywords"
          content="Mauris vel viverra magna Phasellus nec sagittis tortor eu tincidunt velit Pellentesque lectus erat"
        />
        <meta
          name="description"
          content="Curabitur sed vestibulum tortor. Donec placerat felis sit amet enim suscipit, sed molestie ex imperdiet. Aliquam sagittis turpis nec tempor lacinia. Etiam commodo arcu sapien, id malesuada lectus varius et. "
        />
      </Helmet>
      <div className="notFound">
        <LogoNoPage size="240px" className="notFound__logo" />
        <p className="notFound__text">Sorry, we couldn't find that page</p>
        <Link to="/" className="btn btn_primary notFound__btn">
          Go Back To HomePage
        </Link>
      </div>
    </>
  )
}
