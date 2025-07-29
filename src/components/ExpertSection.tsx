'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ExpertSection() {
  const [form, setForm] = useState({ name: '', email: '', expertise: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      alert('Application submitted! (placeholder)')
      setForm({ name: '', email: '', expertise: '', message: '' })
      setSubmitting(false)
    }, 800)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-dark-text mb-4 sm:mb-6 leading-tight">
            Join Our Expert Network
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Access quality projects with guaranteed payments and professional support
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg p-6 sm:p-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-dark-text mb-2">Guaranteed Payments</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary leading-relaxed">Get paid securely through our escrow system with milestone-based payments.</p>
          </div>
          
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg p-6 sm:p-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-dark-text mb-2">Quality Projects</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary leading-relaxed">Access pre-vetted clients and well-scoped projects that match your skills.</p>
          </div>
          
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg p-6 sm:p-8 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-dark-text mb-2">Professional Support</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary leading-relaxed">Get project management support and dispute resolution when needed.</p>
          </div>
        </div>
        {/* Expert Join Form */}
        <div className="max-w-xl mx-auto mt-12 bg-white dark:bg-dark-card rounded-lg shadow-lg p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-4 text-center">Apply to Join as an Expert</h3>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 dark:bg-dark-surface dark:text-dark-text"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 dark:bg-dark-surface dark:text-dark-text"
                required
              />
            </div>
            <div>
              <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">Expertise</label>
              <input
                type="text"
                id="expertise"
                name="expertise"
                value={form.expertise}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 dark:bg-dark-surface dark:text-dark-text"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 dark:bg-dark-surface dark:text-dark-text"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 dark:bg-primary-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/experts"
            className="bg-primary-600 dark:bg-primary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors mobile-touch-target inline-block"
          >
            Join as Expert
          </Link>
        </div>
      </div>
    </section>
  )
} 