import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './ProductsPage.css'
import { productsPageContent } from '../data/productsPageContent'
import TrustStrip from '../components/shared/TrustStrip'

function ProductsPage() {
  const { hero, categories, cta } = productsPageContent
  const location = useLocation()
  const categorySlugs = useMemo(
    () => categories.map(({ folderName }) => ({ folderName, slug: toSlug(folderName) })),
    [categories]
  )
  const productIdToCategorySlug = useMemo(() => {
    const map = new Map()

    categories.forEach(({ folderName, items }) => {
      const categorySlug = toSlug(folderName)
      items.forEach(({ name }) => {
        map.set(toSlug(`${folderName}-${name}`), categorySlug)
      })
    })

    return map
  }, [categories])
  const [activeCategorySlug, setActiveCategorySlug] = useState(() => categorySlugs[0]?.slug ?? '')

  useEffect(() => {
    const currentHash = location.hash?.slice(1)
    if (!currentHash) return

    const isValidCategoryHash = categorySlugs.some(({ slug }) => slug === currentHash)
    if (isValidCategoryHash) {
      setActiveCategorySlug(currentHash)
      return
    }

    const matchingCategorySlug = productIdToCategorySlug.get(currentHash)
    if (matchingCategorySlug) setActiveCategorySlug(matchingCategorySlug)
  }, [categorySlugs, location.hash, productIdToCategorySlug])

  useEffect(() => {
    if (categorySlugs.length === 0) return undefined

    const sections = categorySlugs
      .map(({ slug }) => document.getElementById(slug))
      .filter(Boolean)

    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const bestMatch = visibleEntries[0]
        if (!bestMatch) return

        setActiveCategorySlug(bestMatch.target.id)
      },
      {
        root: null,
        rootMargin: '-15% 0px -75% 0px',
        threshold: [0.1, 0.2, 0.35, 0.5],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [categorySlugs])

  return (
    <main className="products-page">
      <section className="products-page__hero">
        <div className="container">
          <div className="products-page__hero-shell">
            <div className="products-page__hero-copy">
              <span className="products-page__kicker">{hero.kicker}</span>
              <h1 className="products-page__title">{hero.title}</h1>
              <p className="products-page__description">{hero.description}</p>

              <div className="products-page__actions">
                <Link className="products-page__button products-page__button--primary" to={hero.primaryAction.href}>
                  {hero.primaryAction.label}
                </Link>
                <Link
                  className="products-page__button products-page__button--secondary"
                  to={hero.secondaryAction.href}
                >
                  {hero.secondaryAction.label}
                </Link>
              </div>

              <div className="products-page__hero-footer">
                <div className="page-trust">
                  <TrustStrip />
                </div>
                <img
                  alt="Trusted badge"
                  className="products-page__trusted-badge"
                  decoding="async"
                  loading="eager"
                  src="/images/trusted-badge.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products-page__catalog">
        <div className="container">
          <header className="products-page__section-header">
            <span className="products-page__section-kicker">PRODUCT CATALOGUE</span>
            <h2>Browse products by category with image previews and enquiry-ready details.</h2>
            <p>
              This catalogue is organized to help hospitals, distributors, pharma companies to have a quick scan on our available product range 
            </p>
          </header>

          <div className="products-page__layout">
            <aside className="products-page__sidebar">
              <div className="products-page__sidebar-card">
                <h3>Product Categories</h3>
                <div className="products-page__sidebar-list">
                  {categorySlugs.map(({ folderName, slug }) => {
                    const isActive = slug === activeCategorySlug

                    return (
                      <a
                        aria-current={isActive ? 'location' : undefined}
                        className={[
                          'products-page__sidebar-link',
                          isActive ? 'products-page__sidebar-link--active' : null,
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        href={`#${slug}`}
                        key={folderName}
                        onClick={() => setActiveCategorySlug(slug)}
                      >
                        <span>{folderName}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </aside>

            <div className="products-page__catalog-list">
              {categories.map(({ folderName, items }) => (
                <section className="products-page__category" id={toSlug(folderName)} key={folderName}>
                  <div className="products-page__category-head">
                    <div className="products-page__category-copy">
                      <h3 className="products-page__category-title">{folderName}</h3>
                      <p className="products-page__category-subtitle">
                        Suitable for healthcare supply, institutional procurement, and bulk order discussions.
                      </p>
                    </div>
                  </div>

                  <div className="products-page__list">
                    {items.map((product, index) => (
                      <ProductTile
                        category={folderName}
                        index={index}
                        key={`${folderName}-${product.name}`}
                        product={product}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="products-page__cta-section">
        <div className="container">
          <div className="products-page__cta-card">
            <div className="products-page__cta-copy">
              <span className="products-page__kicker products-page__kicker--soft">{cta.kicker}</span>
              <h2>{cta.title}</h2>
              <p>{cta.description}</p>
            </div>

            <div className="products-page__cta-actions">
              <Link className="products-page__button products-page__button--light" to={cta.primaryAction.href}>
                {cta.primaryAction.label}
              </Link>
              <Link className="products-page__button products-page__button--ghost" to={cta.secondaryAction.href}>
                {cta.secondaryAction.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function ProductTile({ category, product, index }) {
  const price = product.price ?? getProductPrice(category, product.name)
  const details = getProductDetails(category, product.name)
  const features = product.features ?? getProductFeatures(category, product.name)
  const productId = toSlug(`${category}-${product.name}`)
  const mediaRef = useRef(null)
  const imageRef = useRef(null)
  const badgeRef = useRef(null)
  const imageSources = useMemo(() => {
    const sources = []

    if (product?.imageSrc) sources.push(product.imageSrc)
    if (Array.isArray(product?.imageSrcs)) sources.push(...product.imageSrcs)

    return [...new Set(sources)].filter(Boolean)
  }, [product?.imageSrc, product?.imageSrcs])
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const activeImageSrc = imageSources[activeImageIndex]

  useEffect(() => {
    setActiveImageIndex(0)
  }, [imageSources])

  useEffect(() => {
    if (imageSources.length <= 1) return undefined

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % imageSources.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [imageSources])

  const updateTrustedBadgePosition = useCallback(() => {
    const mediaEl = mediaRef.current
    const imageEl = imageRef.current
    const badgeEl = badgeRef.current

    if (!mediaEl || !imageEl || !badgeEl) return

    const mediaRect = mediaEl.getBoundingClientRect()
    const imageRect = imageEl.getBoundingClientRect()
    const badgeWidth = badgeEl.offsetWidth || 35
    const badgeHeight = badgeEl.offsetHeight || 35
    const padding = 8

    const left = Math.max(
      padding,
      Math.min(mediaRect.width - badgeWidth - padding, imageRect.right - mediaRect.left - badgeWidth - padding)
    )
    const top = Math.max(
      padding,
      Math.min(mediaRect.height - badgeHeight - padding, imageRect.bottom - mediaRect.top - badgeHeight - padding)
    )

    badgeEl.style.setProperty('--badge-left', `${left}px`)
    badgeEl.style.setProperty('--badge-top', `${top}px`)
    badgeEl.style.setProperty('--badge-right', 'auto')
    badgeEl.style.setProperty('--badge-bottom', 'auto')
  }, [])

  useEffect(() => {
    const onResize = () => updateTrustedBadgePosition()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [updateTrustedBadgePosition])

  useEffect(() => {
    const imageEl = imageRef.current
    if (!imageEl) return

    if (imageEl.complete) requestAnimationFrame(updateTrustedBadgePosition)
  }, [activeImageSrc, updateTrustedBadgePosition])

  return (
    <article
      className="products-page__card products-page__card--simple"
      id={productId}
      style={{ '--card-delay': `${Math.min(index, 10) * 60}ms` }}
    >
      <div className="products-page__card-media" ref={mediaRef}>
        <span className="products-page__card-tag">{category}</span>
        {activeImageSrc ? (
          <div className="products-page__product-image-shell">
            <img
              alt={product.name}
              className="products-page__product-image"
              decoding="async"
              ref={imageRef}
              key={activeImageSrc}
              loading="lazy"
              onLoad={() => requestAnimationFrame(updateTrustedBadgePosition)}
              src={activeImageSrc}
            />
          </div>
        ) : null}
        {activeImageSrc ? (
          <img
            alt="Trusted badge"
            className="products-page__card-trusted-badge"
            decoding="async"
            loading="lazy"
            ref={badgeRef}
            src="/images/trusted-badge.png"
          />
        ) : null}
        {imageSources.length > 1 ? (
          <div className="products-page__image-dots" aria-hidden="true">
            {imageSources.map((imageSource, dotIndex) => (
              <span
                className={[
                  'products-page__image-dot',
                  dotIndex === activeImageIndex ? 'products-page__image-dot--active' : null,
                ]
                  .filter(Boolean)
                  .join(' ')}
                key={imageSource}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="products-page__card-body">
        <span className="products-page__card-category">{category}</span>
        <h3>{product.name}</h3>
        <div className="products-page__card-price">
          <span>Approx. Price</span>
          <strong>{price}</strong>
        </div>

        <dl className="products-page__card-details">
          {details.map(({ label, value }) => (
            <div className="products-page__card-detail" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <ul className="products-page__card-features">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="products-page__card-actions">
          <a
            className="products-page__card-link"
            href={`https://wa.me/919177770584?text=${encodeURIComponent(`I'm interested in this product: ${product.name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Interested
          </a>
        </div>
      </div>
    </article>
  )
}

function getProductDetails(category, name) {
  return [
    { label: 'Category', value: category },
    { label: 'Product', value: name },
    { label: 'Application', value: getApplicationLabel(category, name) },
    { label: 'Supply', value: 'Bulk orders and institutional enquiries supported' },
  ]
}

function getProductPrice(category, name) {
  const lowerName = name.toLowerCase()
  const lowerCategory = category.toLowerCase()

  if (lowerName.includes('glove')) return 'On Request / Box'
  if (lowerName.includes('mask')) return 'On Request / Piece'
  if (lowerName.includes('catheter') || lowerName.includes('tube')) return 'On Request / Piece'
  if (lowerName.includes('set') || lowerName.includes('burette') || lowerName.includes('cannula'))
    return 'On Request / Set'
  if (lowerName.includes('bag')) return 'On Request / Bag'
  if (
    lowerName.includes('diaper') ||
    lowerName.includes('pad') ||
    lowerName.includes('gown') ||
    lowerName.includes('cap') ||
    lowerName.includes('shoe cover') ||
    lowerName.includes('ppe')
  )
    return 'On Request / Pack'
  if (lowerName.includes('oxygen') || lowerName.includes('nebulizer') || lowerName.includes('ambu'))
    return 'On Request / Unit'
  if (lowerCategory.includes('iv')) return 'On Request / Set'

  return 'On Request'
}

function getApplicationLabel(category, name) {
  const lowerName = name.toLowerCase()
  const lowerCategory = category.toLowerCase()

  if (lowerCategory.includes('latex surgical gloves')) return 'Hand protection for surgical or utility use'
  if (lowerCategory.includes('latex') && lowerCategory.includes('surgical') && lowerCategory.includes('long cuff'))
    return 'Hand protection for surgical or utility use'
  if (lowerCategory.includes('latex examination gloves')) return 'Hand protection for examination or utility use'
  if (lowerCategory.includes('nitrile') && lowerCategory.includes('examination gloves'))
    return 'Hand protection for examination or utility use'
  if (lowerName.includes('glove')) return 'Hand protection for examination, surgical, or utility use'
  if (lowerName.includes('mask')) return 'Respiratory and clinical face protection support'
  if (lowerName.includes('catheter')) return 'Hospital and clinical procedure support'
  if (lowerName.includes('tube')) return 'Diagnostic and patient-care usage'
  if (lowerName.includes('oxygen')) return 'Respiratory care and oxygen support'
  if (lowerName.includes('gown') || lowerName.includes('cap') || lowerName.includes('shoe cover'))
    return 'Protective wear and hygiene control'
  if (lowerName.includes('ppe')) return 'Protective kit for high-contact care environments'
  if (lowerName.includes('syringe')) return 'Medical dosing and disposable procedure support'
  if (lowerName.includes('bag')) return 'Clinical collection and patient-care workflow'
  if (lowerCategory.includes('iv')) return 'Infusion and fluid delivery support'
  if (lowerCategory.includes('urology')) return 'Urology and patient drainage support'
  if (lowerCategory.includes('non woven')) return 'Disposable hygiene and protective care support'

  return 'General healthcare and institutional procurement use'
}

function getProductFeatures(category, name) {
  const lowerName = name.toLowerCase()
  const lowerCategory = category.toLowerCase()

  if (lowerName.includes('glove')) {
    return [
      'Powder-free, ambidextrous design for quick dispensing.',
      'Textured fingertips for grip during clinical handling.',
      'Suitable for hospital, lab, and industrial usage.',
    ]
  }

  if (lowerName.includes('mask')) {
    return [
      'Soft edges and elastic fit for patient comfort.',
      'Clear airflow support for respiratory therapy.',
      'Single-use, hygiene-focused clinical protection.',
    ]
  }

  if (lowerName.includes('catheter')) {
    return [
      'Smooth, rounded tip for patient comfort.',
      'Sterile single-use format for clinical safety.',
      'Multiple sizes available for procedural needs.',
    ]
  }

  if (lowerName.includes('tube')) {
    return [
      'Kink-resistant tubing for reliable flow.',
      'Soft, medical-grade material for patient comfort.',
      'Suitable for diagnostic and feeding procedures.',
    ]
  }

  if (lowerName.includes('bag')) {
    return [
      'Leak-resistant outlets for secure collection.',
      'Clear markings for easy volume monitoring.',
      'Designed for hospital and nursing care use.',
    ]
  }

  if (lowerName.includes('set') || lowerCategory.includes('iv')) {
    return [
      'Precision flow control for infusion safety.',
      'Transparent tubing for visual monitoring.',
      'Sterile, ready-to-use disposable set.',
    ]
  }

  if (lowerCategory.includes('non woven') || lowerName.includes('cap') || lowerName.includes('gown')) {
    return [
      'Breathable non-woven fabric for comfort.',
      'Lightweight protection for extended wear.',
      'Disposable, hygiene-focused material.',
    ]
  }

  if (lowerName.includes('ppe') || lowerName.includes('shoe cover')) {
    return [
      'Protective coverage for hygiene compliance.',
      'Quick to wear and dispose after use.',
      'Suitable for hospital and facility protocols.',
    ]
  }

  if (lowerName.includes('oxygen') || lowerName.includes('nebulizer') || lowerName.includes('ambu')) {
    return [
      'Reliable respiratory support for clinical care.',
      'Easy to operate with clear controls.',
      'Built for continuous or emergency use cases.',
    ]
  }

  return [
    'Designed for institutional procurement and hospitals.',
    'Quality-checked for safe medical usage.',
    'Available for bulk and repeat orders.',
  ]
}

function toSlug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default ProductsPage
