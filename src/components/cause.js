import React from "react"
import { Link } from "gatsby"

//cause card used in cause templates

export default function Cause({ title, text, image, raised, target, slug }) {
  return (
    <article className="cards__card">
      <div className="cards__card__aside">
        <img className="cards__card__image" src={image} alt={title} />
      </div>
      <div className="cards__card__container">
        <h3 className="cards__card__heading">{title}</h3>
        <p className="cards__card__text">{text}</p>
        {+raised >= +target ? (
          <p className="cards__card__text">COMPLETED </p>
        ) : (
          <>
            <div className="causes__card__price">
              <p className="causes__card__price__raised">Raised: Rs.{raised}</p>
              <p className="causes__card__price__target">Target: Rs.{target}</p>
              <div className="causes__card__price__meter">
                <div
                  className="causes__card__price__meter__bar"
                  style={{ width: `${Math.round((+raised / +target) * 100)}%` }}
                ></div>
              </div>
            </div>
            <Link
              to={`/causes/${slug}`}
              className="btn btn_primary cards__card__btn"
            >
              Donate
            </Link>
          </>
        )}
      </div>
    </article>
  )
}
