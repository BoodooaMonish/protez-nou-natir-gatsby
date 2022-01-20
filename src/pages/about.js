import React from "react"
import AboutUs from "../components/aboutUs"
import { Helmet } from "react-helmet"

export default function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Protez Noz Natir - About</title>
        <meta
          name="keywords"
          content="Mauris vel viverra magna Phasellus nec sagittis tortor eu tincidunt velit Pellentesque lectus erat"
        />
        <meta
          name="description"
          content="Curabitur sed vestibulum tortor. Donec placerat felis sit amet enim suscipit, sed molestie ex imperdiet. Aliquam sagittis turpis nec tempor lacinia. Etiam commodo arcu sapien, id malesuada lectus varius et. "
        />
      </Helmet>
      <AboutUs />
    </>
  )
}
