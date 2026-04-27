'use client'

import { useEffect, useState } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ocean-deep">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/70 via-ocean-deep/50 to-ocean-deep/80" />
      
      {/* Subtle atmospheric overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.45_0.08_220_/_0.15),transparent)]" />
      
      {/* Decorative Chinese character - boat/ship */}
      <div className="absolute top-1/4 right-8 md:right-16 lg:right-24 opacity-[0.04] select-none pointer-events-none">
        <span className="font-serif text-[20rem] md:text-[30rem] text-cream leading-none">
          舟
        </span>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Small decorative wave element */}
          <div className="flex justify-center mb-8">
            <svg className="w-24 h-4 text-cream/30" viewBox="0 0 96 16" fill="none">
              <path 
                d="M0 8 Q12 2, 24 8 T48 8 T72 8 T96 8" 
                stroke="currentColor" 
                strokeWidth="1" 
                fill="none"
              />
            </svg>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream tracking-wide mb-6 text-balance">
            Slow Boat To China
          </h1>
          
          <p className="font-serif text-lg md:text-xl lg:text-2xl text-cream/70 italic mb-8 text-balance">
            A journey inward through authentic Yang-style Taijiquan
          </p>
          
          {/* Chinese characters accent */}
          <p className="text-2xl md:text-3xl text-jade tracking-widest mb-12">
            太極拳
          </p>
          
          {/* Scroll indicator */}
          <div 
            className={`transition-all duration-1500 delay-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a 
              href="#about" 
              className="inline-flex flex-col items-center text-cream/40 hover:text-jade transition-colors group"
              aria-label="Scroll to learn more"
            >
              <span className="text-sm tracking-widest uppercase mb-2">Discover</span>
              <svg 
                className="w-5 h-5 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom transition - fades to cream like emerging from water */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream-dark via-cream-dark/70 to-transparent" />
      
      {/* Subtle horizon line */}
      <div className="absolute bottom-36 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent" />
    </section>
  )
}
