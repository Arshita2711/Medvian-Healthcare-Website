import { aboutContent, aboutStats } from '../../data/siteContent'
import SectionHeader from '../shared/SectionHeader'
import brandMark from '../../assets/logo/medvian-mark.png'

function AboutSection() {
  const AboutIcon = aboutContent.Icon

  return (
    <section className="about-section" id="about">
      <SectionHeader
        className="about-heading"
        kicker={aboutContent.kicker}
        title={aboutContent.title}
      />

      <div className="about-content container">
        <div className="about-copy">
          <div className="about-icon-box" aria-hidden="true">
            <AboutIcon />
          </div>

          <h3>{aboutContent.subtitle}</h3>

          {aboutContent.paragraphs.slice(0, 1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="cert-seal">
            <img className="cert-image" src={brandMark} alt="Medvian mark" />
          </div>
        </div>

        <div className="about-stats" aria-label="Company statistics">
          {aboutStats.map(({ value, label, Icon, featured }) => (
            <article
              className={`stat-card ${featured ? 'stat-card-featured' : ''}`}
              key={label}
            >
              <div className="stat-icon-wrap">
                <Icon />
              </div>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
