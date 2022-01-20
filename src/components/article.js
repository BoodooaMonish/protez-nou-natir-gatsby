import React from "react"
import { Link } from "gatsby"

// Article Card component used for article templates

export default function Article({ title, text, image, slug }) {
  return (
    <article className="cards__card">
      <div className="cards__card__aside">
        <img className="cards__card__image" src={image} alt={title} />
      </div>
      <div className="cards__card__container">
        <h3 className="cards__card__heading">{title}</h3>
        <p className="cards__card__text">{text}</p>
        <Link
          to={`/articles/${slug}`}
          className="btn btn_primary cards__card__btn"
        >
          Read More
        </Link>
      </div>
    </article>
  )
}
