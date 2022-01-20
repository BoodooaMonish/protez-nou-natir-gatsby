import React from "react"

// Mission Statement/ Goals component

export default function Goals() {
  return (
    <article className="goals">
      <h2 className="goals__heading">OUR GOALS</h2>
      <div className="cards goals__cards">
        <Goal
          title="Save Environment"
          text="nteger sed odio commodo purus dapibus egestas ut nec lacus. Sed pu rus tortor, molestie eget augue vel, luctus iaculis nisl. In dignissim laoreet ligula, veli."
          image="/environment.jpg"
        />
        <Goal
          title="Inform Public"
          text="nteger sed odio commodo purus dapibus egestas ut nec lacus. Sed pu rus tortor, molestie eget augue vel, luctus iaculis nisl. In dignissim laoreet ligula, veli."
          image="/public.jpg"
        />
        <Goal
          title="Stop Pollution"
          text="nteger sed odio commodo purus dapibus egestas ut nec lacus. Sed pu rus tortor, molestie eget augue vel, luctus iaculis nisl. In dignissim laoreet ligula, veli."
          image="/pollution.jpg"
        />
        <Goal
          title="Fight Global Warming"
          text="nteger sed odio commodo purus dapibus egestas ut nec lacus. Sed pu rus tortor, molestie eget augue vel, luctus iaculis nisl. In dignissim laoreet ligula, veli."
          image="/warming.jpg"
        />
      </div>
    </article>
  )
}

function Goal({ title, text, image }) {
  return (
    <article className="cards__card goals__cards__card">
      <div className="cards__card__aside">
        <img className="cards__card__image" src={image} alt={title} />
      </div>
      <div className="cards__card__container">
        <h3 className="cards__card__heading">{title}</h3>
        <p className="cards__card__text">{text}</p>
      </div>
    </article>
  )
}
