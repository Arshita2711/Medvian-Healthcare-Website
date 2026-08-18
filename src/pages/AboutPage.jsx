import { Link } from 'react-router-dom'
import './AboutPage.css'
import { aboutPageContent } from '../data/aboutPageContent'
import TrustStrip from '../components/shared/TrustStrip'

function AboutPage() {
  const { hero, companyOverview, productExperience, inquiries } = aboutPageContent

  return (
    <main className="about-page">
      <section className="about-page__hero">
        <div className="container about-page__hero-grid">
          <div className="about-page__hero-copy">
            <span className="about-page__kicker">{hero.kicker}</span>
            <h1 className="about-page__title">
              {hero.titleParts
                ? hero.titleParts.map((part, index) =>
                    part.tone ? (
                      <span className={`about-page__title-tone about-page__title-tone--${part.tone}`} key={index}>
                        {part.text}
                      </span>
                    ) : (
                      <span key={index}>{part.text}</span>
                    )
                  )
                : hero.title}
            </h1>
            <p className="about-page__lead">{hero.lead}</p>
            <p className="about-page__supporting">{hero.supporting}</p>

            <div className="about-page__actions">
              <Link className="about-page__button about-page__button--primary" to={hero.primaryAction.href}>
                {hero.primaryAction.label}
              </Link>
              <Link className="about-page__button about-page__button--secondary" to={hero.secondaryAction.href}>
                {hero.secondaryAction.label}
              </Link>
            </div>

            <div className="page-trust">
              <TrustStrip />
            </div>
          </div>

          <div className="about-page__hero-visual">

            <div className="about-page__hero-panel">
              <span className="about-page__hero-panel-label">About Us</span>
              <h2>{hero.panelTitle}</h2>
              <p>{hero.panelText}</p>
            </div>

            <div className="about-page__highlight-grid">
              {hero.highlights.map(({ value, label }) => (
                <article className="about-page__highlight-card" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>

            <div className="about-page__tag-cloud" aria-label="Core sectors">
              {hero.panelTags.map((tag) => (
                <span className="about-page__tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-page__section">
        <div className="container">
          <PageSectionHeader
            kicker={companyOverview.kicker}
            title={companyOverview.title}
            description={companyOverview.intro}
          />

          <div className="about-page__story-grid">
            <article className="about-page__card about-page__card--story">
              <h3>About Us</h3>
              {companyOverview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>

            <article className="about-page__card about-page__card--spotlight">
              <h3>{companyOverview.spotlightTitle}</h3>
              <p>{companyOverview.spotlightText}</p>

              <div className="about-page__spotlight-tags">
                {companyOverview.spotlightTags.map((item) => (
                  <span className="about-page__spotlight-pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-page__section about-page__section--tinted">
        <div className="container">
          <PageSectionHeader
            kicker={productExperience.kicker}
            title={productExperience.title}
            description="We supply a practical range of healthcare products for hospital and institutional use."
          />

          <div className="about-page__experience-grid about-page__experience-grid--light">
            {productExperience.items.map((item) => (
              <article className="about-page__experience-tile about-page__experience-tile--light" key={item}>
                <span>{item}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page__section about-page__section--final">
        <div className="container">
          <div className="about-page__cta-card">
            <span className="about-page__kicker">{inquiries.kicker}</span>
            <h2>{inquiries.title}</h2>
            <p>{inquiries.text}</p>

            <div className="about-page__cta-actions">
              <a className="about-page__email-link" href={`mailto:${inquiries.email}`}>
                {inquiries.email}
              </a>
              <Link className="about-page__button about-page__button--primary" to="/contact">
                Open Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function PageSectionHeader({ kicker, title, description }) {
  return (
    <div className="about-page__section-header">
      <span className="about-page__kicker">{kicker}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default AboutPage
