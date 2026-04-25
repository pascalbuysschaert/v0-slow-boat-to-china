export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-ink text-cream/70 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Taiji symbol */}
        <div className="flex justify-center mb-8">
          <svg 
            viewBox="0 0 100 100" 
            className="w-16 h-16 text-cream/20"
            aria-label="Taiji (Yin-Yang) symbol"
          >
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
            <path
              d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2"
              fill="currentColor"
            />
            <circle cx="50" cy="26" r="6" fill="currentColor" className="text-ink" />
            <circle cx="50" cy="74" r="6" fill="currentColor" />
          </svg>
        </div>
        
        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-sm">
          <a href="#about" className="hover:text-jade transition-colors">
            About Taijiquan
          </a>
          <a href="#practice" className="hover:text-jade transition-colors">
            Practice
          </a>
          <a href="#lineage" className="hover:text-jade transition-colors">
            Lineage
          </a>
          <a href="#contact" className="hover:text-jade transition-colors">
            Contact
          </a>
          <a 
            href="https://taijiacademy.online" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-jade transition-colors"
          >
            Taiji Academy
          </a>
        </nav>
        
        {/* Divider */}
        <div className="w-24 h-px bg-cream/10 mx-auto mb-8" />
        
        {/* Bottom text */}
        <div className="text-center text-sm text-cream/40">
          <p className="mb-2">
            Small Boat To China · Yang-style Taijiquan · Leuven, Belgium
          </p>
          <p>
            © {currentYear} All rights reserved
          </p>
        </div>
        
        {/* Chinese characters accent */}
        <div className="text-center mt-8">
          <span className="text-cream/10 text-2xl tracking-[0.5em]">
            太極拳
          </span>
        </div>
      </div>
    </footer>
  )
}
