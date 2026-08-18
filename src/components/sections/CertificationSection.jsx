import SectionHeader from '../shared/SectionHeader'

const certificationItems = [
  { src: '/certifications/img_54.jpeg', alt: 'Import Export Code certification badge' },
  { src: '/certifications/img_47.jpeg', alt: 'ISO 13485 certified badge' },
  { src: '/certifications/img_50.jpeg', alt: 'ISO 9001:2015 certified badge' },
  { src: '/certifications/img_51.jpeg', alt: 'ISO 15378:2017 certified badge' },
  { src: '/certifications/img_49.jpeg', alt: 'CE mark certification badge' },
  { src: '/certifications/img_53.jpeg', alt: 'FDA approved badge' },
  { src: '/certifications/img_46.jpeg', alt: 'GMP certified badge' },
  { src: '/certifications/img_52.jpeg', alt: 'Drugs licensed badge' },
]

function CertificationSection() {
  const loopItems = [...certificationItems, ...certificationItems]

  return (
    <section className="certification-section" id="certifications">
      <SectionHeader
        className="certification-heading"
        kicker="CERTIFICATIONS"
        title="Our Certifications & Compliance"
        description="Recognized standards and approvals that validate our quality systems and global supply readiness."
      />

      <div className="certification-carousel container" aria-label="Certifications carousel">
        <div className="certification-track">
          {loopItems.map(({ src, alt }, index) => (
            <article className="certification-card" key={`${src}-${index}`}>
              <img className="certification-image" src={src} alt={alt} loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationSection
