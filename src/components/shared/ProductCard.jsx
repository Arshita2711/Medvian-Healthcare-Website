function ProductCard({ tag, title, imageSrc, imageAlt, description, Icon }) {
  return (
    <article className="product-card">
      <div className="product-card-media">
        <span className="product-chip">{tag}</span>
        {imageSrc ? (
          <img
            className="product-card-image"
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
          />
        ) : (
          <div className="product-card-fallback" aria-hidden="true" />
        )}
      </div>

      <div className="product-card-body">
        <div className="product-icon-box">
          <Icon />
        </div>

        <div className="product-card-copy">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
