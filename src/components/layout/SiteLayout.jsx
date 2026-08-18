import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

function ScrollToTopOnRouteChange() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
      return
    }

    const targetId = decodeURIComponent(location.hash.replace('#', ''))
    if (!targetId) return

    let rafId = 0
    let attempts = 0
    const maxAttempts = 60

    const tryScroll = () => {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      attempts += 1
      if (attempts >= maxAttempts) return

      rafId = window.requestAnimationFrame(tryScroll)
    }

    rafId = window.requestAnimationFrame(tryScroll)

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [location.pathname, location.hash])

  return null
}

function SiteLayout() {
  return (
    <div className="page-shell">
      <ScrollToTopOnRouteChange />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SiteLayout
