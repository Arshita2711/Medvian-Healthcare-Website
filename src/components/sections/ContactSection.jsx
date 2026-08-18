import { useState } from 'react'
import { contactContent, contactInfoItems } from '../../data/siteContent'
import SectionHeader from '../shared/SectionHeader'

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  product: '',
  message: '',
  acceptCommunication: false,
}

const WHATSAPP_NUMBER = '919177770584'

function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validate = (nextValues) => {
    const nextErrors = {}
    const trimmedName = nextValues.fullName.trim()
    const trimmedEmail = nextValues.email.trim()
    const trimmedProduct = nextValues.product.trim()
    const trimmedMessage = nextValues.message.trim()
    const trimmedPhone = nextValues.phone.trim()

    if (!trimmedName) {
      nextErrors.fullName = 'Full name is required.'
    } else if (trimmedName.length < 2) {
      nextErrors.fullName = 'Full name should be at least 2 characters.'
    }

    if (!trimmedEmail) {
      nextErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!trimmedProduct) {
      nextErrors.product = 'Product name is required.'
    }

    if (!trimmedMessage) {
      nextErrors.message = 'Message is required.'
    } else if (trimmedMessage.length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.'
    }

    if (trimmedPhone) {
      const digits = trimmedPhone.replace(/\D/g, '')
      if (digits.length < 7 || digits.length > 15) {
        nextErrors.phone = 'Phone number should be 7-15 digits.'
      }
    }

    return nextErrors
  }

  const attemptSubmit = () => {
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setTouched({
        fullName: true,
        email: true,
        phone: true,
        product: true,
        message: true,
        acceptCommunication: true,
      })
      setIsSubmitted(false)
      return
    }

    const bodyLines = [
      `Full Name: ${values.fullName.trim()}`,
      `Email: ${values.email.trim()}`,
      values.phone.trim() ? `Phone: ${values.phone.trim()}` : null,
      `Product: ${values.product.trim()}`,
      `Accept Communication: ${values.acceptCommunication ? 'Yes' : 'No'}`,
      '',
      'Message:',
      values.message.trim(),
    ].filter(Boolean)

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bodyLines.join('\n'))}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setIsSubmitted(true)
    setValues(initialValues)
    setTouched({})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    attemptSubmit()
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    const nextValues = {
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    }
    setValues(nextValues)
    if (isSubmitted) {
      setIsSubmitted(false)
    }

    if (touched[name]) {
      setErrors(validate(nextValues))
    }
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors(validate(values))
  }

  const getFieldClassName = (fieldName) =>
    `form-field${errors[fieldName] && touched[fieldName] ? ' has-error' : ''}`

  return (
    <section className="contact-section" id="contact">
      <SectionHeader
        className="contact-heading"
        kicker={contactContent.kicker}
        title={contactContent.title}
        description={contactContent.description}
      />

      <div className="contact-layout container">
        <div className="contact-info-column" aria-label="Contact information">
          {contactInfoItems.map(({ title, Icon, entries }) => (
            <article className="contact-info-card" key={title}>
              <div className="contact-info-icon">
                <Icon />
              </div>

              <div className="contact-info-copy">
                <h3>{title}</h3>
                <div className="contact-info-lines">
                  {entries.map(({ text, href, featured }) =>
                    href ? (
                      <a className={featured ? 'is-featured' : ''} href={href} key={text}>
                        {text}
                      </a>
                    ) : (
                      <span className={featured ? 'is-featured' : ''} key={text}>
                        {text}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="contact-form-card">
          <h3>{contactContent.formTitle}</h3>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label className={getFieldClassName('fullName')}>
              <span>Full Name *</span>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Your Name"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                minLength={2}
                aria-invalid={Boolean(errors.fullName && touched.fullName)}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && touched.fullName ? (
                <span className="field-error" id="fullName-error" role="alert">
                  {errors.fullName}
                </span>
              ) : null}
            </label>

            <label className={getFieldClassName('email')}>
              <span>Email Address *</span>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-invalid={Boolean(errors.email && touched.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && touched.email ? (
                <span className="field-error" id="email-error" role="alert">
                  {errors.email}
                </span>
              ) : null}
            </label>

            <label className={getFieldClassName('phone')}>
              <span>Phone Number</span>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.phone && touched.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && touched.phone ? (
                <span className="field-error" id="phone-error" role="alert">
                  {errors.phone}
                </span>
              ) : null}
            </label>

            <label className={getFieldClassName('product')}>
              <span>Product Name *</span>
              <input
                type="text"
                name="product"
                placeholder="Enter Product"
                value={values.product}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-invalid={Boolean(errors.product && touched.product)}
                aria-describedby={errors.product ? 'product-error' : undefined}
              />
              {errors.product && touched.product ? (
                <span className="field-error" id="product-error" role="alert">
                  {errors.product}
                </span>
              ) : null}
            </label>

            <label className={`${getFieldClassName('message')} form-field-full`}>
              <span>Message *</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your requirements..."
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                minLength={10}
                aria-invalid={Boolean(errors.message && touched.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && touched.message ? (
                <span className="field-error" id="message-error" role="alert">
                  {errors.message}
                </span>
              ) : null}
            </label>

            <label className="form-field form-field-checkbox">
              <input
                type="checkbox"
                name="acceptCommunication"
                checked={values.acceptCommunication}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span>I accept to receive email and SMS communication from MEDVIAN Health Care.</span>
            </label>

            
            <button className="contact-action contact-action--whatsapp" type="submit">
              WhatsApp This Enquiry
            </button>
            {isSubmitted ? (
              <p className="contact-success" role="status" aria-live="polite">
                WhatsApp has been opened with your enquiry. Send it to complete.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
