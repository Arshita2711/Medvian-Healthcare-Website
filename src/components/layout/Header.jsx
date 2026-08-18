import { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/siteContent'
import { productsPageContent } from '../../data/productsPageContent'
import brandLogo from '../../assets/logo/medvian-logo.png'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const closeTimeoutRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 72)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isSolidHeader = location.pathname !== '/' || isScrolled
  const scrollHomeToTop = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    setIsMenuOpen(false)
    setIsProductsOpen(false)
    setHoveredCategory(null)
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }, [location.pathname])

  const handleMenuToggle = () => {
    setIsMenuOpen((previous) => !previous)
  }

  const openProductsMenu = () => {
    setIsProductsOpen(true)
    setHoveredCategory(null)
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }
  const closeProductsMenu = (event) => {
    if (event?.currentTarget && event?.relatedTarget) {
      if (event.currentTarget.contains(event.relatedTarget)) {
        return
      }
    }
    const timeout = setTimeout(() => {
      setIsProductsOpen(false)
      setHoveredCategory(null)
    }, 150) // 150ms delay
    closeTimeoutRef.current = timeout
  }

  const toSlug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const isMobileNav = () => window.matchMedia('(max-width: 860px)').matches
  const scrollToHashTargetIfAlreadyOnPage = (targetId) => {
    if (location.pathname !== '/products') return
    if (location.hash !== `#${targetId}`) return

    const element = document.getElementById(targetId)
    if (!element) return

    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={`topbar-wrap ${isSolidHeader ? 'is-scrolled' : ''}`}>
      <header className="topbar topbar-main container">
        <Link className="brand" to="/" aria-label="Medvian Health Care" onClick={scrollHomeToTop}>
          <img className="brand-logo" src={brandLogo} alt="Medvian Health Care" />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <ul className="nav-list">
            {navLinks.map(({ label, href }) => {
              if (label === 'Products') {
                return (
                  <li
                    className={`nav-item nav-item--products ${isProductsOpen ? 'is-open' : ''}`}
                    key={label}
                    onMouseEnter={openProductsMenu}
                    onMouseLeave={closeProductsMenu}
                    onFocus={openProductsMenu}
                    onBlur={closeProductsMenu}
                  >
                    <NavLink
                      className={({ isActive }) =>
                        [isActive ? 'is-active' : '', 'nav-list-link']
                          .filter(Boolean)
                          .join(' ')
                      }
                      aria-haspopup="menu"
                      aria-expanded={isProductsOpen}
                      end={href === '/'}
                      onClick={(event) => {
                        if (isMobileNav() && !isProductsOpen) {
                          event.preventDefault()
                          openProductsMenu()
                          return
                        }
                        if (href === '/') {
                          scrollHomeToTop()
                        }
                        setIsProductsOpen(false)
                        setIsMenuOpen(false)
                      }}
                      to={href}
                    >
                      {label}
                    </NavLink>
                    <div
                      className={`nav-products-dropdown ${hoveredCategory ? 'has-products' : ''}`}
                      aria-label="Products categories"
                    >
                      <div className="nav-products-categories">
                        {productsPageContent.categories.map(({ folderName }) => (
                          <div 
                            className="nav-products-category" 
                            key={folderName}
                            onMouseEnter={() => {
                              if (closeTimeoutRef.current) {
                                clearTimeout(closeTimeoutRef.current)
                                closeTimeoutRef.current = null
                              }
                              setHoveredCategory(folderName)
                            }}
                          >
                            <Link
                              className={[
                                'nav-products-category-link',
                                folderName === hoveredCategory ? 'nav-products-category-link--active' : null,
                              ]
                                .filter(Boolean)
                                .join(' ')}
                              onFocus={() => {
                                if (closeTimeoutRef.current) {
                                  clearTimeout(closeTimeoutRef.current)
                                  closeTimeoutRef.current = null
                                }
                                setHoveredCategory(folderName)
                              }}
                              onClick={() => {
                                scrollToHashTargetIfAlreadyOnPage(toSlug(folderName))
                                setIsMenuOpen(false)
                                setIsProductsOpen(false)
                                setHoveredCategory(null)
                              }}
                              to={`/products#${toSlug(folderName)}`}
                            >
                              {folderName}
                            </Link>
                          </div>
                        ))}
                      </div>
                      {hoveredCategory ? (
                        <div
                          className="nav-products-products is-visible"
                          onMouseEnter={() => {
                            if (closeTimeoutRef.current) {
                              clearTimeout(closeTimeoutRef.current)
                              closeTimeoutRef.current = null
                            }
                          }}
                        >
                          <>
                            <div className="nav-products-products-header">
                              <span>{hoveredCategory}</span>
                              <Link
                                className="nav-products-view-category"
                                to={`/products#${toSlug(hoveredCategory)}`}
                                onClick={() => {
                                  scrollToHashTargetIfAlreadyOnPage(toSlug(hoveredCategory))
                                  setIsMenuOpen(false)
                                  setIsProductsOpen(false)
                                  setHoveredCategory(null)
                                }}
                              >
                                View all →
                              </Link>
                            </div>
                            <div className="nav-products-products-list">
                              {productsPageContent.categories
                                .find(cat => cat.folderName === hoveredCategory)
                                ?.items
                                .map((product) => (
                                  <Link
                                    key={product.name}
                                    className="nav-products-product-link"
                                    onClick={() => {
                                      scrollToHashTargetIfAlreadyOnPage(
                                        toSlug(`${hoveredCategory}-${product.name}`)
                                      )
                                      setIsMenuOpen(false)
                                      setIsProductsOpen(false)
                                      setHoveredCategory(null)
                                    }}
                                    to={`/products#${toSlug(`${hoveredCategory}-${product.name}`)}`}
                                  >
                                    {product.name}
                                  </Link>
                                ))}
                            </div>
                          </>
                        </div>
                      ) : null}
                    </div>
                  </li>
                )
              }

              return (
                <li key={label}>
                  <NavLink
                    className={({ isActive }) =>
                      [isActive ? 'is-active' : '']
                        .filter(Boolean)
                        .join(' ')
                    }
                    end={href === '/'}
                    onClick={() => {
                      if (href === '/') {
                        scrollHomeToTop()
                      }
                      setIsMenuOpen(false)
                    }}
                    to={href}
                  >
                    {label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
