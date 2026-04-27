'use client'

import { useEffect, useState } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep ocean gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.05_220)] via-[oklch(0.18_0.06_210)] to-[oklch(0.25_0.07_195)]" />
      
      {/* Teal mid-layer gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,oklch(0.30_0.10_185_/_0.4),transparent_70%)]" />
      
      {/* Blue-green atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_70%,oklch(0.22_0.08_200_/_0.5),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_40%,oklch(0.20_0.07_215_/_0.4),transparent_55%)]" />
      
      {/* Underwater light rays from above */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_-30%,oklch(0.35_0.09_190_/_0.2),transparent_60%)]" />
      
      {/* Drifting mist animation layer */}
      <div className="absolute inset-0 ocean-mist opacity-60" />
      
      {/* Subtle wave texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 900">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q30 0, 60 10 T120 10" stroke="oklch(0.50 0.08 195)" strokeWidth="0.5" fill="none" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>
      
      {/* Decorative Chinese character - boat/ship */}
      <div className="absolute top-1/4 right-8 md:right-16 lg:right-24 opacity-[0.03] select-none pointer-events-none">
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
          {/* Decorative wave element above title */}
          <div className="flex justify-center mb-8">
            <svg className="w-32 h-8 text-cream/40" viewBox="0 0 128 32" fill="none">
              <path 
                d="M0 20 C8 14, 16 14, 24 20 S40 26, 48 20 S64 14, 72 20 S88 26, 96 20 S112 14, 120 20 L128 20" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round"
              />
              <path 
                d="M8 24 C14 20, 20 20, 26 24 S38 28, 44 24 S56 20, 62 24 S74 28, 80 24 S92 20, 98 24 S110 28, 116 24" 
                stroke="currentColor" 
                strokeWidth="1" 
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
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
          <p className="text-2xl md:text-3xl text-[oklch(0.55_0.12_180)] tracking-widest mb-12">
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
              className="inline-flex flex-col items-center text-cream/40 hover:text-[oklch(0.55_0.12_180)] transition-colors group"
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
      
      {/* Subtle horizon shimmer line */}
      <div className="absolute bottom-36 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.50_0.10_190_/_0.2)] to-transparent" />
    </section>
  )
}
