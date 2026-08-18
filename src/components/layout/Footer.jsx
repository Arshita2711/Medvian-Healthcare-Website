import { Link, useLocation } from 'react-router-dom'
import brandLogo from '../../assets/logo/medvian-logo.png'
import {
  footerContent,
  footerContactItems,
  footerCompanyLinks,
  footerProductLinks,
  footerSupportLinks,
  footerLegalLinks,
  footerSocialLinks,
} from '../../data/siteContent'
import FooterLinkGroup from '../shared/FooterLinkGroup'

function Footer() {
  const location = useLocation()
  const scrollHomeToTop = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-brand-block">
          <Link
            className="footer-brand"
            to="/"
            aria-label="Medvian Health Care"
            onClick={scrollHomeToTop}
          >
            <img className="footer-brand-logo" src={brandLogo} alt="Medvian Health Care" />
          </Link>

          <p className="footer-description">{footerContent.description}</p>

          <div className="footer-contact-list">
            {footerContactItems.map(({ text, href, Icon }) => {
              const content = (
                <>
                  <span className="footer-detail-icon">
                    <Icon />
                  </span>
                  <span>{text}</span>
                </>
              )

              return href ? (
                <a className="footer-contact-item" href={href} key={text}>
                  {content}
                </a>
              ) : (
                <div className="footer-contact-item" key={text}>
                  {content}
                </div>
              )
            })}
          </div>
        </div>

        <FooterLinkGroup title="Company" links={footerCompanyLinks} />
        <FooterLinkGroup title="Products" links={footerProductLinks} />
        <FooterLinkGroup title="Support" links={footerSupportLinks} />
        <FooterLinkGroup title="Legal" links={footerLegalLinks} />
      </div>

      <div className="footer-bottom container">
        <p>{footerContent.copyright}</p>

        <div className="footer-socials" aria-label="Social links">
          {footerSocialLinks.map(({ label, href, Icon }) => (
            <a className="footer-social-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={label} key={label}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
