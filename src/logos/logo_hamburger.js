import React from "react"
export default function LogoHamburger() {
  return (
    <svg
      viewBox="0 0 26 26"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        className="hamburger__bar hamburger__bar_top"
        width="26"
        height="5"
        x="0"
        y="0"
      />
      <rect
        className="hamburger__bar hamburger__bar_bottom"
        width="26"
        height="5"
        x="0"
        y="21"
      />
      <rect
        className="hamburger__bar hamburger__bar_middle"
        width="26"
        height="5"
        x="0"
        y="10"
      />
    </svg>
  )
}
