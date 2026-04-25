'use client'

import { useEffect, useState } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink">
      {/* Ink wash texture overlay */}
      <div className="absolute inset-0 ink-texture opacity-30 pointer-events-none" />
      
      {/* Dark ink-wash atmospheric gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink/80" />
      
      {/* Misty atmospheric layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ink/60 via-ink/80 to-ink opacity-90" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cream/5 via-transparent to-transparent" />
      
      {/* Decorative Chinese character */}
      <div className="absolute top-1/4 right-8 md:right-16 lg:right-24 opacity-[0.06] select-none pointer-events-none">
        <span className="font-serif text-[20rem] md:text-[30rem] text-cream leading-none">
          太
        </span>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Small decorative element */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-px bg-jade/60" />
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream tracking-wide mb-6 text-balance">
            Small Boat To China
          </h1>
          
          <p className="font-serif text-lg md:text-xl lg:text-2xl text-cream/70 italic mb-8 text-balance">
            A journey inward through Yang-style Taijiquan
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
      
      {/* Bottom brushstroke divider - fades to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-dark via-cream-dark/50 to-transparent" />
    </section>
  )
}
