'use client'

import { useState } from 'react'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    experience: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/mrervrkq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormState({ name: '', email: '', experience: '', message: '' })
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream-dark">
      <div className="max-w-2xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-jade text-sm tracking-[0.3em] uppercase">Begin</span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4 text-balance">
            Begin Je Reis
          </h2>
          <p className="text-ink/60 mt-4">
            Interesse om met ons te oefenen? Stuur ons een bericht.
          </p>
        </div>
        
        {/* Location info */}
        <div className="text-center mb-10 py-4 border-y border-border">
          <p className="text-ink/70">
            <span className="text-jade">✦</span> Based in <strong>Leuven, Belgium</strong>
          </p>
        </div>
        
        {/* Form */}
        {isSubmitted ? (
          <div className="text-center py-12 bg-cream rounded-lg border border-jade/20">
            <div className="text-jade text-4xl mb-4">☯</div>
            <h3 className="font-serif text-xl text-ink mb-2">Thank you for your message</h3>
            <p className="text-ink/60">We will be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm text-ink/70 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-cream border border-border rounded-lg focus:border-jade focus:ring-1 focus:ring-jade/20 outline-none transition-colors text-ink placeholder:text-ink/30"
                placeholder="Enter your name"
              />
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-ink/70 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-cream border border-border rounded-lg focus:border-jade focus:ring-1 focus:ring-jade/20 outline-none transition-colors text-ink placeholder:text-ink/30"
                placeholder="your@email.com"
              />
            </div>
            
            {/* Experience level */}
            <div>
              <label htmlFor="experience" className="block text-sm text-ink/70 mb-2">
                Experience with Taijiquan
              </label>
              <select
                id="experience"
                name="experience"
                value={formState.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-cream border border-border rounded-lg focus:border-jade focus:ring-1 focus:ring-jade/20 outline-none transition-colors text-ink"
              >
                <option value="">Select your experience level</option>
                <option value="none">Complete beginner</option>
                <option value="some">Some experience with Tai Chi</option>
                <option value="intermediate">Intermediate practitioner</option>
                <option value="advanced">Advanced / many years experience</option>
              </select>
            </div>
            
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-ink/70 mb-2">
                Message <span className="text-ink/40">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-cream border border-border rounded-lg focus:border-jade focus:ring-1 focus:ring-jade/20 outline-none transition-colors text-ink placeholder:text-ink/30 resize-none"
                placeholder="Tell us about yourself or ask any questions..."
              />
            </div>
            
            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-ink text-cream rounded-lg font-medium hover:bg-ink/90 focus:ring-2 focus:ring-jade focus:ring-offset-2 focus:ring-offset-cream-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
