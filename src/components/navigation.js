import React from "react"
import { useRef } from "react"
import LogoHamburger from "../logos/logo_hamburger"
import ImageMenu from "../logos/image_menu"
import { Link } from "gatsby"
import LogoCompany from "../logos/logo_company"

export default function Navigation() {
  const hamburgerBtn = useRef(null)
  const menuContainer = useRef(null)
  const backdrop = useRef(null)
  const handleBtnClick = e => {
    e.preventDefault()
    if (hamburgerBtn.current.getAttribute("aria-expanded") === "false") {
      toggleMenu("open")
    } else {
      toggleMenu("close")
    }
  }
  const handleBackdropClick = e => {
    e.preventDefault()
    toggleMenu("close")
  }
  const handleLinkClick = e => {
    if (
      window.getComputedStyle(menuContainer.current).flexDirection !== "column"
    )
      return
    if (e.target.classList.contains("navigation__menu__link")) {
      e.stopPropagation()
      toggleMenu("close")
    }
  }
  const handleMenuKeyDown = e => {
    if (
      window.getComputedStyle(menuContainer.current).flexDirection !== "column"
    )
      return
    switch (e.key) {
      case "Tab":
        e.preventDefault()
        // tab and there is an element next to the target
        if (!e.shiftKey && e.target.nextElementSibling) {
          e.target.nextElementSibling.focus()
        } else if (
          e.shiftKey &&
          e.target.previousElementSibling.tagName !== "svg"
        ) {
          // shift+tab and there is an element previous to the target
          e.target.previousElementSibling.focus()
        } else if (!e.shiftKey && !e.target.nextElementSibling) {
          // tab and there is not an element next to the target
          menuContainer.current.children[1].focus()
          // shift+tab and there is not an element previous to the target
        } else if (
          e.shiftKey &&
          e.target.previousElementSibling.tagName === "svg"
        ) {
          menuContainer.current.lastElementChild.focus()
        }
        break
      case "Escape":
        e.preventDefault()
        toggleMenu("close")
        break
      case "Enter":
        e.preventDefault()
        e.target.click()
        toggleMenu("close")
        break
      default:
        break
    }
  }
  const toggleMenu = action => {
    if (action === "open") {
      hamburgerBtn.current.setAttribute("aria-expanded", "true")
      menuContainer.current.classList.remove("navigation__menu_disabled")
      if (menuContainer.current.classList.contains("navigation__menu_close")) {
        menuContainer.current.classList.add("navigation__menu_open")
        menuContainer.current.classList.remove("navigation__menu_close")
      }
      backdrop.current.classList.remove("navigation__backdrop_hidden")
      menuContainer.current.children[1].focus()
    } else if (action === "close") {
      hamburgerBtn.current.setAttribute("aria-expanded", "false")
      menuContainer.current.classList.add("navigation__menu_close")
      menuContainer.current.classList.remove("navigation__menu_open")
      backdrop.current.classList.add("navigation__backdrop_hidden")
      hamburgerBtn.current.focus()
    }
  }
  const disableMenu = () => {
    if (menuContainer.current.classList.contains("navigation__menu_close")) {
      menuContainer.current.classList.add("navigation__menu_disabled")
    }
  }
  return (
    <header>
      <nav className="navigation" aria-label="main">
        <Link to="/" className="navigation__brand">
          Lorem Group
          <LogoCompany color="white" />
        </Link>
        <button
          className="navigation__btn"
          ref={hamburgerBtn}
          onClick={handleBtnClick}
          aria-expanded="false"
        >
          Toggle Menu
          <LogoHamburger />
        </button>
        <div
          className="navigation__menu navigation__menu_close navigation__menu_disabled"
          ref={menuContainer}
          onAnimationEnd={disableMenu}
          onClick={handleLinkClick}
          onKeyDown={handleMenuKeyDown}
          role="navigation"
        >
          <ImageMenu />
          <Link to="/" className="navigation__menu__link">
            Home
          </Link>
          <Link to="/articles" className="navigation__menu__link">
            Articles
          </Link>
          <Link to="/about" className="navigation__menu__link">
            About Us
          </Link>
          <Link
            to="/causes"
            className="btn btn_secondary navigation__menu__link"
          >
            Donate
          </Link>
        </div>
        <div
          className="navigation__backdrop navigation__backdrop_hidden"
          ref={backdrop}
          onClick={handleBackdropClick}
          aria-hidden="true"
        ></div>
      </nav>
    </header>
  )
}
