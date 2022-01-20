import React from "react"
import { Link } from "gatsby"
import LogoCompany from "../logos/logo_company"
import LogoFacebook from "../logos/logo_facebook"
import LogoLinkedin from "../logos/logo_linkedin"
import LogoTwitter from "../logos/logo_twitter"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <address className="footer__address">
          <LogoCompany color="white" />
          <h3>Lorem Group</h3>
          <span>Royal Road, Lorem Village</span>
          <span>lorem@group.mu</span>
          <span>932-546-NUM</span>
        </address>
        <nav className="footer__nav">
          <div className="footer__nav__links">
            <h3 className="footer__nav__heading">Menu Links</h3>
            <Link to="/" className="footer__nav__link">
              Home
            </Link>
            <Link to="/causes" className="footer__nav__link">
              Causes
            </Link>
            <Link to="/articles" className="footer__nav__link">
              Articles
            </Link>
            <Link to="/about" className="footer__nav__link">
              About Us
            </Link>
          </div>
          <div className="footer__nav__social-links">
            <h3 className="footer__nav__heading">Follow Us</h3>
            <a href="/" className="footer__nav__social-link" title="facebook">
              facebook
              <LogoLinkedin />
            </a>
            <a href="/" className="footer__nav__social-link" title="linkedIn">
              linkedIn
              <LogoFacebook />
            </a>
            <a href="/" className="footer__nav__social-link" title="twitter">
              twitter
              <LogoTwitter />
            </a>
          </div>
        </nav>
      </div>
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Boodooa Monish. All Rights Reserved.
      </p>
    </footer>
  )
}
