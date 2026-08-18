function SectionHeader({ className, kicker, title, description }) {
  return (
    <div className={`${className} container`}>
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
      <span className="section-underline" aria-hidden="true" />
    </div>
  )
}

export default SectionHeader
