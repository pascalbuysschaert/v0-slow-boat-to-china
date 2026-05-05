export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream-dark">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-jade text-sm tracking-[0.3em] uppercase">De Kunst</span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4 text-balance">
            Wat is Taijiquan?
          </h2>
        </div>
        
        {/* Decorative divider */}
        <div className="flex justify-center mb-12">
          <div className="w-24 brushstroke-divider" />
        </div>
        
        {/* Content */}
        <div className="space-y-6 text-ink/80 leading-relaxed text-lg">
          <p>
            Taijiquan (太極拳) is een oude Chinese interne vechtkunst, geworteld in de 
            daoïstische filosofie en de principes van Yin en Yang. Meer dan een vechtsysteem 
            is het een pad van zelfcultivering — een praktijk die lichaam, energie (Qi) en 
            geest in harmonie brengt.
          </p>
          
          <p>
            De Yang-stijl, bekend om zijn elegante, vloeiende bewegingen, maakt deze diepe 
            kunst toegankelijk voor beoefenaars van alle leeftijden. Door geduldige oefening 
            ontwikkelen we ontspanning, bewustzijn en een steeds dieper wordend begrip van 
            onze eigen aard.
          </p>
          
          <p className="text-ink/60 italic">
            Onze groep volgt de authentieke overdracht van de Chuan Cheng Academy, onder 
            begeleiding van meester Liang Dehua, wiens onderricht direct teruggaat op de 
            lijn van grootmeester Gu Lisheng.
          </p>
        </div>
        
        {/* Link to academy */}
        <div className="text-center mt-12">
          <a 
            href="https://taijiacademy.online" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-jade hover:text-jade/80 transition-colors text-sm tracking-wide"
          >
            <span>Visit Taiji Academy Online</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
