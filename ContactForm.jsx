import { useState } from 'react'

const INITIAL = {
  fullname: '',
  email: '',
  phone: '',
  message: '',
}

function ContactForm() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    // Replace this URL with the endpoint provided by the course
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Submission failed. Please try again.')
        return res.json()
      })
      .then(() => {
        setSubmitted(true)
        setSubmitting(false)
      })
      .catch((err) => {
        setError(err.message)
        setSubmitting(false)
      })
  }

  if (submitted) {
    return (
      <section className="form-section" id="contact" aria-live="polite">
        <div className="success-message">
          <h2>Thank you!</h2>
          <p>Your message has been submitted. We'll be in touch soon.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="form-section" id="contact" aria-labelledby="form-title">
      <h2 id="form-title">Have Questions About Planetary Science?</h2>
      <p className="form-subtitle">
        Interested in learning more about space, astronomy, or how planetary
        data is collected and analyzed? Reach out and we'll get back to you.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="fullname">
              Full Name<span className="required">*</span>
            </label>
            <input
              id="fullname"
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              placeholder="Full name"
              required
              minLength={10}
              maxLength={20}
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">
              Email<span className="required">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@example.com"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">
              Phone Number<span className="required">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Please enter a valid phone number"
              required
              maxLength={11}
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">
              Message<span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              maxLength={100}
            />
            <span className="char-hint">100 characters</span>
          </div>
        </div>

        {error && <p className="error-msg" role="alert">{error}</p>}

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? 'Submitting…' : 'Submit'} {!submitting && '›'}
        </button>
      </form>
    </section>
  )
}

export default ContactForm
