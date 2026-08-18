import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroContent } from '../../data/siteContent'
import { ArrowIcon } from '../icons/SiteIcons'

function HeroSection() {
  const heroSlides = [
    '/images/hero-surgery-1.jpg',
    '/images/hero-surgery-2.png'
  ]
  const [slideIndex, setSlideIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroSlides.length])

  return (
    <section className="hero-pane hero-pane--carousel">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url('${heroSlides[slideIndex]}')` }}
        aria-hidden="true"
      />
      <div className="hero-bg-overlay" aria-hidden="true" />
      <main className="hero-section container" id="home">
        <div className="hero-copy">
          <span className="hero-badge">{heroContent.badge}</span>

          <h1 className="hero-title">
            {heroContent.title.leading}
            <span>{heroContent.title.highlight}</span>
          </h1>

          <p className="hero-description">{heroContent.description}</p>

          <div className="hero-actions">
            <Link className="button button-primary" to={heroContent.primaryAction.href}>
              {heroContent.primaryAction.label}
              <ArrowIcon />
            </Link>

            <Link className="button button-secondary" to={heroContent.secondaryAction.href}>
              {heroContent.secondaryAction.label}
            </Link>
          </div>
        </div>
      </main>
    </section>
  )
}

export default HeroSection
