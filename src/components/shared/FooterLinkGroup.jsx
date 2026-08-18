import { Link, useLocation } from 'react-router-dom'

function FooterLinkGroup({ title, links }) {
  const location = useLocation()

  return (
    <div className="footer-link-group">
      <h3>{title}</h3>
      <ul>
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              onClick={
                location.pathname === href
                  ? () => window.scrollTo({ top: 0, behavior: 'smooth' })
                  : undefined
              }
              to={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinkGroup
