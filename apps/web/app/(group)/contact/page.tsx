'use client'

import { type FormEvent, useTransition, useState } from 'react'
import { submitContactForm } from './actions'

interface FormValues {
  firstName: string
  lastName: string
  email: string
  enquiryType: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  enquiryType?: string
  message?: string
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.firstName.trim()) {
    errors.firstName = 'First name is required.'
  }
  if (!values.lastName.trim()) {
    errors.lastName = 'Last name is required.'
  }
  if (!values.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.enquiryType) {
    errors.enquiryType = 'Please select an enquiry type.'
  }
  if (!values.message.trim()) {
    errors.message = 'Message is required.'
  }

  return errors
}

const INITIAL_VALUES: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  enquiryType: '',
  message: '',
}

const inputClass =
  'block w-full rounded-lg border px-4 py-2.5 text-sm text-scout-navy focus:outline-none focus:ring-2'
const validClass = 'border-gray-300 focus:border-scout-purple focus:ring-scout-purple/30'
const errorClass = 'border-red-400 focus:border-red-500 focus:ring-red-300'

const hero = (
  <section aria-label="Contact hero" className="bg-scout-purple py-20 text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/60">
        Get in touch
      </p>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Contact Us</h1>
      <p className="mt-4 max-w-xl text-lg text-white/80">
        Interested in joining or have a question? We&apos;d love to hear from you.
      </p>
    </div>
  </section>
)

export default function ContactPage() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({})
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [isPending, startTransition] = useTransition()

  function handleChange(field: keyof FormValues, value: string) {
    const next = { ...values, [field]: value }
    setValues(next)
    if (touched[field]) {
      setErrors(validate(next))
    }
  }

  function handleBlur(field: keyof FormValues) {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors(validate(values))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const allTouched = Object.fromEntries(
      (Object.keys(values) as (keyof FormValues)[]).map((k) => [k, true]),
    ) as Record<keyof FormValues, boolean>
    setTouched(allTouched)
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setSubmitError(null)
    startTransition(async () => {
      const result = await submitContactForm(values)
      if (result.ok) {
        setSubmitted(true)
      } else {
        setSubmitError(result.error)
      }
    })
  }

  const fieldError = (field: keyof FormValues) =>
    touched[field] ? errors[field] : undefined

  const fieldClass = (field: keyof FormValues) =>
    `${inputClass} ${fieldError(field) ? errorClass : validClass}`

  const sidebar = (
    <div className="space-y-6 lg:sticky lg:top-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-scout-navy">Joining the waiting list?</h3>
        <p className="mt-2 text-sm text-gray-500">
          Skip the form — apply directly to our waiting list in a couple of minutes.
        </p>
        <a
          href="/waiting-list"
          className="mt-4 inline-flex items-center text-sm font-semibold text-scout-purple hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple"
        >
          Join the waiting list →
        </a>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-scout-navy">Hiring a vehicle?</h3>
        <p className="mt-2 text-sm text-gray-500">
          See our fleet and hire rates, then get in touch to check availability.
        </p>
        <a
          href="/our-vehicles"
          className="mt-4 inline-flex items-center text-sm font-semibold text-scout-purple hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple"
        >
          View our vehicles →
        </a>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-scout-navy">Booking our hall?</h3>
        <p className="mt-2 text-sm text-gray-500">
          Check availability and pricing for hiring our hall for your event.
        </p>
        <a
          href="/hall-booking"
          className="mt-4 inline-flex items-center text-sm font-semibold text-scout-purple hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple"
        >
          Hall booking info →
        </a>
      </div>

      <div className="rounded-2xl bg-scout-purple p-6 text-white">
        <h3 className="text-lg font-bold">Prefer to email?</h3>
        <p className="mt-2 text-sm text-white/80">
          Woodlands Road, Allestree, Derby
        </p>
        <a
          href="mailto:GSL@73DerbyScouts.org.uk"
          className="mt-4 inline-block text-sm font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          GSL@73DerbyScouts.org.uk
        </a>
      </div>
    </div>
  )

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        {hero}
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8" aria-label="Message sent">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
            <p className="text-lg font-semibold text-green-800">Message sent!</p>
            <p className="mt-2 text-sm text-green-700">
              Thanks for getting in touch. We&apos;ll get back to you as soon as we can.
            </p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {hero}

      {/* Form + sidebar */}
      <section
        aria-labelledby="contact-form-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
        <h2 id="contact-form-heading" className="mb-8 text-2xl font-bold text-scout-navy">
          Send us a message
        </h2>
        <form className="space-y-6" noValidate onSubmit={handleSubmit}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="mb-1.5 block text-sm font-semibold text-scout-navy">
                First name <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <input
                id="first-name"
                type="text"
                autoComplete="given-name"
                required
                aria-required="true"
                aria-describedby={fieldError('firstName') ? 'first-name-error' : undefined}
                aria-invalid={!!fieldError('firstName')}
                value={values.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                onBlur={() => handleBlur('firstName')}
                className={fieldClass('firstName')}
              />
              {fieldError('firstName') && (
                <p id="first-name-error" role="alert" className="mt-1.5 text-xs text-red-600">
                  {fieldError('firstName')}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="last-name" className="mb-1.5 block text-sm font-semibold text-scout-navy">
                Last name <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <input
                id="last-name"
                type="text"
                autoComplete="family-name"
                required
                aria-required="true"
                aria-describedby={fieldError('lastName') ? 'last-name-error' : undefined}
                aria-invalid={!!fieldError('lastName')}
                value={values.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                onBlur={() => handleBlur('lastName')}
                className={fieldClass('lastName')}
              />
              {fieldError('lastName') && (
                <p id="last-name-error" role="alert" className="mt-1.5 text-xs text-red-600">
                  {fieldError('lastName')}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-scout-navy">
              Email address <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              aria-required="true"
              aria-describedby={fieldError('email') ? 'email-error' : undefined}
              aria-invalid={!!fieldError('email')}
              value={values.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              className={fieldClass('email')}
            />
            {fieldError('email') && (
              <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">
                {fieldError('email')}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="enquiry-type" className="mb-1.5 block text-sm font-semibold text-scout-navy">
              Enquiry type <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <select
              id="enquiry-type"
              required
              aria-required="true"
              aria-describedby={fieldError('enquiryType') ? 'enquiry-type-error' : undefined}
              aria-invalid={!!fieldError('enquiryType')}
              value={values.enquiryType}
              onChange={(e) => handleChange('enquiryType', e.target.value)}
              onBlur={() => handleBlur('enquiryType')}
              className={fieldClass('enquiryType')}
            >
              <option value="">Select an enquiry type…</option>
              <option value="squirrels">Joining — Squirrels (Ages 4–6)</option>
              <option value="beavers">Joining — Beavers (Ages 6–8)</option>
              <option value="cubs">Joining — Cubs (Ages 8–10.5)</option>
              <option value="scouts">Joining — Scouts (Ages 10.5–14)</option>
              <option value="hall-booking">Hall booking</option>
              <option value="vehicle-booking">Vehicle booking</option>
              <option value="general">General enquiry</option>
            </select>
            {fieldError('enquiryType') && (
              <p id="enquiry-type-error" role="alert" className="mt-1.5 text-xs text-red-600">
                {fieldError('enquiryType')}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-scout-navy">
              Message <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              required
              aria-required="true"
              aria-describedby={fieldError('message') ? 'message-error' : undefined}
              aria-invalid={!!fieldError('message')}
              value={values.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              className={fieldClass('message')}
            />
            {fieldError('message') && (
              <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600">
                {fieldError('message')}
              </p>
            )}
          </div>

          {submitError && (
            <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="rounded-lg bg-scout-purple px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? 'Sending…' : 'Send message'}
          </button>
        </form>
        </div>

        <div>{sidebar}</div>
        </div>
      </section>
    </div>
  )
}
