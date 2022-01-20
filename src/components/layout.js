import React from "react"
import Footer from "./footer"
import Navigation from "./navigation"
import ImageHero from "../logos/image_hero"
import Hero from "./hero"

// layout template which render on every page

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navigation />
      <div className="background-hero">
        <img
          src="//images.ctfassets.net/kkemqa78y6pu/3otqeCraX0qYjaRdgAZVW8/bcdd80a1bee31931d67b35a9da6ebdf9/12.jpg"
          alt="none"
          className="background-hero__image"
          aria-hidden="true"
        />
        <div className="background-hero__overlay" aria-hidden="true"></div>
        <ImageHero />
      </div>
      <main>
        <Hero />
        {children}
      </main>

      <div className="background-hero background-hero__bottom">
        <img
          src="//images.ctfassets.net/kkemqa78y6pu/3otqeCraX0qYjaRdgAZVW8/bcdd80a1bee31931d67b35a9da6ebdf9/12.jpg"
          alt="none"
          className="background-hero__image"
          aria-hidden="true"
        />
        <div className="background-hero__overlay" aria-hidden="true"></div>
        <ImageHero flip="true" />
      </div>
      <Footer />
    </div>
  )
}
