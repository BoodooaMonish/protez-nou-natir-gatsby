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
          image="//images.ctfassets.net/kkemqa78y6pu/7ltZTYjXNWXqIVImIO1Dhm/f6ba7641c215ad63a9e19ec4fb2168a8/pexels-matthew-montrone-1179229.jpg"
        />
        <Goal
          title="Inform Public"
          text="nteger sed odio commodo purus dapibus egestas ut nec lacus. Sed pu rus tortor, molestie eget augue vel, luctus iaculis nisl. In dignissim laoreet ligula, veli."
          image="//images.ctfassets.net/kkemqa78y6pu/2YrgpeYs25QHBeWYhpdemD/4cccdf52d134ab2c48954f25da7b0c87/pexels-hert-niks-3224225.jpg"
        />
        <Goal
          title="Stop Pollution"
          text="nteger sed odio commodo purus dapibus egestas ut nec lacus. Sed pu rus tortor, molestie eget augue vel, luctus iaculis nisl. In dignissim laoreet ligula, veli."
          image="//images.ctfassets.net/kkemqa78y6pu/4vZoQSsfM1nGHcKLVduftn/f9111f356468f8d4a3090369c3e0c4b5/pexels-chris-leboutillier-929385.jpg"
        />
        <Goal
          title="Fight Global Warming"
          text="nteger sed odio commodo purus dapibus egestas ut nec lacus. Sed pu rus tortor, molestie eget augue vel, luctus iaculis nisl. In dignissim laoreet ligula, veli."
          image="//images.ctfassets.net/kkemqa78y6pu/4FTDhCnxUbndgasMA7DWBy/7d2c529979482ce650fe3daa0f9a1a6b/pexels-landon-parenteau-6554499.jpg"
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
