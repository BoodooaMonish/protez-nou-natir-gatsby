import React from "react"

export default function Newsletter() {
  const handleClick = event => {
    event.preventDefault()
    return false
  }
  return (
    <article className="newsletter">
      <h2 className="newsletter__heading">
        WANT TO KNOW ABOUT MORE ON OUR QUEST TO PROTECT OUR NATURE?
      </h2>
      <p className="newsletter__text">
        Subscribe to us to receive news on our recent activities and
        achivements.
      </p>
      <form className="newsletter__form" onSubmit={handleClick}>
        <label className="newsletter__form__label">
          <input
            className="newsletter__form__input"
            type="email"
            id="newsletter-input"
            placeholder="Enter your email address"
            name="newsletter"
            required
          />
        </label>
        <button
          className="btn btn_primary newsletter__form__btn"
          type="submit"
          onClick={handleClick}
        >
          Subscribe
        </button>
      </form>
    </article>
  )
}
