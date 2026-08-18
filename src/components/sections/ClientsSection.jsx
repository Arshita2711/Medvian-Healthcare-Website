import SectionHeader from '../shared/SectionHeader'

const clientLogos = [
  { src: '/clients/img_26.jpeg', alt: 'Shilpa Medicare Limited logo' },
  { src: '/clients/img_30.jpeg', alt: 'Aurobindo logo' },
  { src: '/clients/img_34.jpeg', alt: 'LAXAI logo' },
  { src: '/clients/img_36.jpeg', alt: "Dr. Reddy's logo" },
  { src: '/clients/img_38.jpeg', alt: 'MSN logo' },
  { src: '/clients/img_44.jpeg', alt: 'KOYA Healthcare logo' },
]

function ClientsSection() {
  const loopLogos = [...clientLogos, ...clientLogos]

  return (
    <section className="clients-section" id="clients">
      <SectionHeader
        className="clients-heading"
        kicker="OUR CLIENTS"
        title="Trusted by Leading Healthcare Companies"
        description="We proudly serve hospitals, pharmaceutical, and biotech organizations across India and global markets."
      />

      <div className="clients-carousel container" aria-label="Client logos carousel">
        <div className="clients-track">
          {loopLogos.map(({ src, alt }, index) => (
            <article className="client-logo-card" key={`${src}-${index}`}>
              <img className="client-logo-image" src={src} alt={alt} loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
