import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { productsContent } from '../../data/siteContent'
import { productsPageContent } from '../../data/productsPageContent'

const toSlug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function ProductsSection() {
  const [productIndex, setProductIndex] = useState(0)
  const featuredCategoriesLimit = 7
  const disposableProductsCategory = productsPageContent.categories.find(
    ({ folderName }) =>
      folderName === 'Disposable products (Used in Sea food industries ,Pharmaceuticals and Hospitals )',
  )

  const categories = [
    ...productsPageContent.categories.slice(0, featuredCategoriesLimit),
    ...(disposableProductsCategory ? [disposableProductsCategory] : []),
  ]
  const categoryNames = categories.map(({ folderName }) => folderName)

  useEffect(() => {
    const interval = setInterval(() => {
      setProductIndex((prev) => prev + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="products-section" id="products">
      <div className="container products-showcase">
        <div className="products-intro">
          <span className="section-kicker">{productsContent.kicker}</span>
          <h2>{productsContent.title}</h2>
          <p>{productsContent.description}</p>

          <div className="products-actions">
            <Link className="products-action products-action--primary" to="/products">
              Explore Full Range
            </Link>
            <Link className="products-action products-action--secondary" to="/contact">
              Get Product Enquiry
            </Link>
          </div>

          <div className="products-category-list" aria-label="Product categories">
            {categoryNames.map((category) => (
              <Link
                className="products-category-pill"
                key={category}
                to={`/products#${toSlug(category)}`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        <div className="products-grid" aria-label="Featured products">
          {categories.map(({ folderName, items }) => {
            if (!items || items.length === 0) {
              return null
            }

            const currentItem = items[productIndex % items.length]
            const title = currentItem?.title || folderName
            const productName = currentItem?.name || title
            const imageSrc = currentItem?.imageSrc || currentItem?.imageSrcs?.[0]
            const productId = toSlug(`${folderName}-${productName}`)

            return (
              <Link
                className="products-showcase-card"
                key={folderName}
                to={`/products#${productId}`}
                aria-label={`View ${productName}`}
              >
                <div className="products-showcase-media">
                  {imageSrc ? (
                    <img
                      className="products-showcase-image"
                      src={imageSrc}
                      alt={title}
                      loading="lazy"
                    />
                  ) : null}
                </div>

                <div className="products-showcase-body">
                  <h3>{title}</h3>
                  <span className="products-showcase-link">View product details</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
