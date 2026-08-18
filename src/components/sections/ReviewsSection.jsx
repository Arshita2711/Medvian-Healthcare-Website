import SectionHeader from '../shared/SectionHeader'

const reviews = [
  {
    quote:
      'Dependable delivery timelines and consistent quality. Their team makes bulk procurement feel simple and well managed.',
    author: 'Procurement Lead',
    role: 'Strategic sourcing',
    org: 'Multi-Specialty Hospital',
    badge: 'On-time delivery',
    rating: 5,
    timeframe: 'Last 3 months',
  },
  {
    quote:
      'The product range is well organized, and the response time for enquiries is very quick. Great support for repeat orders.',
    author: 'Operations Manager',
    role: 'Operations & compliance',
    org: 'Diagnostic Lab Network',
    badge: 'Fast response',
    rating: 5,
    timeframe: 'Ongoing partnership',
  },
  {
    quote:
      'Clean packaging, reliable documentation, and smooth coordination. We appreciate the clarity throughout the process.',
    author: 'Supply Chain Head',
    role: 'Supply chain',
    org: 'Healthcare Distributor',
    badge: 'Clear documentation',
    rating: 5,
    timeframe: 'Last 12 months',
  },
]

const getInitials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

function ReviewsSection() {
  return (
    <section className="reviews-section" id="reviews">
      <SectionHeader
        className="reviews-heading"
        kicker="CLIENT REVIEWS"
        title="Procurement teams rely on our speed, clarity, and consistency."
        description="Short feedback snapshots from hospital and distribution partners."
      />

      <div className="reviews-highlight container">
        <div className="reviews-score-card">
          <span className="reviews-score-label">Average partner rating</span>
          <div className="reviews-score-value">4.9</div>
          <div className="reviews-score-stars" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <p className="reviews-score-note">
            Based on ongoing procurement partnerships across hospitals, labs, and distributors.
          </p>
        </div>

        {/* Review highlight pills removed per request */}
      </div>

      <div className="reviews-grid container" aria-label="Client reviews">
        {reviews.map((review) => (
          <article className="review-card" key={review.quote}>
            <div className="review-card-top">
              <div className="review-avatar" aria-hidden="true">
                {getInitials(review.author)}
              </div>
              <div className="review-meta">
                <span className="review-author-name">{review.author}</span>
                <span className="review-author-role">{review.role}</span>
                <span className="review-author-org">{review.org}</span>
              </div>
              <span className="review-badge">{review.badge}</span>
            </div>

            <p className="review-quote">"{review.quote}"</p>

            <div className="review-footer">
              <div className="review-stars" aria-label={`Rated ${review.rating} out of 5`}>
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <span className="review-timeframe">{review.timeframe}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ReviewsSection
