import React, { useRef, useState } from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Helmet } from "react-helmet"
import LogoLock from "../logos/logo_lock"
import LogoPaypal from "../logos/logo_paypal"
import LogoVisa from "../logos/logo_visa"
import LogoMastercard from "../logos/logo_mastercard"

// template for cause page

export default function Cause({ data }) {
  const radioContainer = useRef(null)
  const amountTextInput = useRef(null)
  const [amount, setAmount] = useState(0)
  const handleAmountChange = e => {
    if (e.target.type === "radio") {
      switch (e.target.value) {
        case "one":
          amountTextInput.current.classList.remove("causes__cause__label_error")
          amountTextInput.current.value = ""
          return setAmount(1)
        case "five":
          amountTextInput.current.classList.remove("causes__cause__label_error")
          amountTextInput.current.value = ""
          return setAmount(5)
        case "ten":
          amountTextInput.current.classList.remove("causes__cause__label_error")
          amountTextInput.current.value = ""
          return setAmount(10)
        case "twentyFive":
          amountTextInput.current.classList.remove("causes__cause__label_error")
          amountTextInput.current.value = ""
          return setAmount(25)
        case "fifty":
          amountTextInput.current.classList.remove("causes__cause__label_error")
          amountTextInput.current.value = ""
          return setAmount(50)
        case "oneHundred":
          amountTextInput.current.classList.remove("causes__cause__label_error")
          amountTextInput.current.value = ""
          return setAmount(100)
        default:
          amountTextInput.current.classList.remove("causes__cause__label_error")
          amountTextInput.current.value = ""
          return setAmount(0)
      }
    } else if (e.target.type === "text") {
      if (
        +e.target.value !== 0 &&
        +e.target.value > 0 &&
        /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/.test(e.target.value)
      ) {
        amountTextInput.current.classList.remove("causes__cause__label_error")
        setAmount((+e.target.value).toFixed(2))
      } else {
        amountTextInput.current.classList.add("causes__cause__label_error")
        if (amount !== 0) {
          return setAmount(0)
        }
        return false
      }
    } else {
      return false
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
  }
  const handleChecked = e => {
    e.preventDefault()
    let checkedList = radioContainer.current.querySelectorAll("*:checked")
    if (checkedList.length === 0) return
    checkedList.forEach(item => {
      item.checked = false
    })
    setAmount(0)
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Protez Noz Natir - {data.contentfulCause.title}</title>
        <meta name="keywords" content={data.contentfulCause.metaKeywords} />
        <meta
          name="description"
          content={data.contentfulCause.metaDescription}
        />
      </Helmet>
      <article className="causes causes_paddingTop causes__cause">
        <div className="causes__cause__container">
          <h3 className="causes__cause__heading">
            {data.contentfulCause.title}
          </h3>
          <img
            className="causes__cause__image"
            src={data.contentfulCause.banner.file.url}
            alt={data.contentfulCause.title}
          />
          <div className="causes__cause__content">
            {renderRichText(data.contentfulCause.description)}
          </div>
          <div className="causes__card__price causes__cause__price">
            <p className="causes__card__price__raised">
              Raised: Rs.{data.contentfulCause.currentValue}
            </p>
            <p className="causes__card__price__target">
              Target: Rs.{data.contentfulCause.targetValue}
            </p>
            <div className="causes__card__price__meter">
              <div
                className="causes__card__price__meter__bar"
                style={{
                  width: `${Math.round(
                    (+data.contentfulCause.currentValue /
                      +data.contentfulCause.targetValue) *
                      100
                  )}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <form className="causes__cause__container" onSubmit={handleSubmit}>
          <h3 className="causes__cause__heading">Donate Now</h3>
          <fieldset className="causes__cause__radio" ref={radioContainer}>
            <legend className="causes__cause__radio__heading">
              Amount: Rs. {amount}
            </legend>
            <div className="causes__cause__radio__group">
              <input
                className="causes__cause__radio__input"
                type="radio"
                name="donation"
                value="one"
                id="donate-one"
                onChange={handleAmountChange}
              />
              <label
                htmlFor="donate-one"
                className="causes__cause__radio__label"
              >
                Rs.1
              </label>
            </div>
            <div className="causes__cause__radio__group">
              <input
                className="causes__cause__radio__input"
                type="radio"
                name="donation"
                value="five"
                id="donate-five"
                onChange={handleAmountChange}
              />
              <label
                htmlFor="donate-five"
                className="causes__cause__radio__label"
              >
                Rs. 5
              </label>
            </div>
            <div className="causes__cause__radio__group">
              <input
                className="causes__cause__radio__input"
                type="radio"
                name="donation"
                value="ten"
                id="donate-ten"
                onChange={handleAmountChange}
              />
              <label
                htmlFor="donate-ten"
                className="causes__cause__radio__label"
              >
                Rs. 10
              </label>
            </div>
            <div className="causes__cause__radio__group">
              <input
                className="causes__cause__radio__input"
                type="radio"
                name="donation"
                value="twentyFive"
                id="donate-twentyFive"
                onChange={handleAmountChange}
              />
              <label
                htmlFor="donate-twentyFive"
                className="causes__cause__radio__label"
              >
                Rs. 25
              </label>
            </div>
            <div className="causes__cause__radio__group">
              <input
                className="causes__cause__radio__input"
                type="radio"
                name="donation"
                value="fifty"
                id="donate-fifty"
                onChange={handleAmountChange}
              />
              <label
                htmlFor="donate-fifty"
                className="causes__cause__radio__label"
              >
                Rs. 50
              </label>
            </div>
            <div className="causes__cause__radio__group">
              <input
                className="causes__cause__radio__input"
                type="radio"
                name="donation"
                value="oneHundred"
                id="donate-oneHundred"
                onChange={handleAmountChange}
              />
              <label
                htmlFor="donate-oneHundred"
                className="causes__cause__radio__label"
              >
                Rs. 100
              </label>
            </div>
            <label className="causes__cause__label">
              <input
                onClick={handleChecked}
                onFocus={handleChecked}
                className="causes__cause__label__input"
                type="text"
                name="otherDonation"
                placeholder="Other Amount"
                onChange={handleAmountChange}
                ref={amountTextInput}
              />
            </label>
          </fieldset>
          <div className="causes__cause__checkout">
            <p className="causes__cause__checkout__text">
              Choose payment:{" "}
              <span>
                <LogoLock />
              </span>{" "}
              secure
            </p>
            <button
              className="btn btn_primary causes__cause__checkout__btn"
              type="submit"
              onClick={handleSubmit}
            >
              <span title="Mastercard">
                <LogoMastercard />
                Mastercard
              </span>
              <span title="Visa">
                <LogoVisa />
                VISA
              </span>
            </button>
            <button
              className="btn btn_primary causes__cause__checkout__btn"
              type="submit"
              onClick={handleSubmit}
            >
              <span>
                <LogoPaypal />
              </span>{" "}
              PayPal
            </button>
          </div>
          <div className="causes__cause__text">
            <p>
              Lorem Group is committed to your privacy. Please read our{" "}
              <Link to="/">privacy policy</Link> here. Your payment details will
              be processed by <a href="https://stripe.com/">Stripe</a> or{" "}
              <a href="https://www.paypal.com/">PayPal</a>, and a record of your
              donation will be stored by Lorem Group.
              <br />
              Problems donating? Visit our <Link to="/">FAQ</Link> for answers
              to most common questions.
            </p>
          </div>
        </form>
      </article>
    </>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulCause(slug: { eq: $slug }) {
      contentful_id
      slug
      banner {
        file {
          url
        }
      }
      currentValue
      description {
        raw
      }
      targetValue
      title
      metaDescription
      metaKeywords
    }
  }
`
