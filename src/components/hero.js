import React from "react"
import { Link } from "gatsby"

export default function Hero() {
  return (
    <article className="hero">
      <h1 className="hero__heading">PROTEZ NOU NATIR</h1>
      <p className="hero__text">
        Praesent tellus augue, consequat sit amet pulvinar et, congue nec mauris
      </p>
      <Link to="/articles" className="btn btn_secondary hero__btn">
        Check Our Recent Events...
      </Link>
    </article>
  )
}
