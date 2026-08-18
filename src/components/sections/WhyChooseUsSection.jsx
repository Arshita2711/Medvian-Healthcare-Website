import { whyChooseContent, whyChooseItems } from '../../data/siteContent'
import SectionHeader from '../shared/SectionHeader'

function WhyChooseUsSection() {
  return (
    <section className="why-section" id="why-choose-us">
      <SectionHeader
        className="why-heading"
        kicker={whyChooseContent.kicker}
        title={whyChooseContent.title}
        description={whyChooseContent.description}
      />

      <div className="why-grid container" aria-label="Reasons to choose Medvian">
        {whyChooseItems.map(({ title, description, Icon }) => (
          <article className="why-card" key={title}>
            <div className="why-icon-wrap">
              <Icon />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUsSection
