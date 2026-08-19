export function Practice() {
  return (
    <section id="practice" className="py-24 md:py-32 bg-ink text-cream">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-jade text-sm tracking-[0.3em] uppercase">Doe mee</span>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mt-4 text-balance">
            Lessen
          </h2>
        </div>
        
        {/* Location and schedule */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Where */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-5 h-5 text-jade" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-serif text-xl text-cream">Waar</h3>
            </div>
            <p className="text-cream/70 leading-relaxed">
              We oefenen bij HH Heverlee in Leuven. Onze sessies vinden plaats in een 
              rustige, toegewijde ruimte die gefocuste, bewuste training mogelijk maakt.
            </p>
          </div>
          
          {/* When */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-5 h-5 text-jade" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-serif text-xl text-cream">Wanneer</h3>
            </div>
            <p className="text-cream/70 leading-relaxed">
              Regelmatige groepssessies vinden wekelijks plaats op vrijdagavond. 
              Privéles en intensieve workshops zijn eveneens mogelijk.
            </p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="my-16 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
        </div>
        
        {/* Welcome message */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-cream/80 leading-relaxed text-lg">
            Iedereen is welkom — beginners die hun reis aanvangen en ervaren beoefenaars 
            die hun kunst verdiepen. Wat telt is oprechtheid in de beoefening en openheid om te leren.
          </p>
          <p className="text-jade mt-6 font-serif italic">
            &ldquo;Een boom die je nauwelijks kunt omarmen komt voort uit een nietig zaadje.&rdquo;
          </p>
          <p className="text-jade/70 mt-2 text-sm">
            — Tao Te Ching, hoofdstuk 64
          </p>
        </div>
      </div>
    </section>
  )
}
