const pillars = [
  {
    title: 'Body',
    chinese: '身',
    description: 'Through precise postures and flowing movements, we cultivate a relaxed, aligned, and responsive physical body. The body becomes the vessel for deeper practice.',
  },
  {
    title: 'Energy',
    chinese: '氣',
    description: 'Qi, the vital life force, flows through all things. We learn to perceive, guide, and harmonize this subtle energy within ourselves and in connection with the world.',
  },
  {
    title: 'Mind',
    chinese: '心',
    description: 'A calm and present mind directs all practice. Through intention (Yi) and awareness, we refine our consciousness and integrate body, energy, and mind.',
  },
]

export function ThreePillars() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-jade text-sm tracking-[0.3em] uppercase">Foundation</span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4 text-balance">
            The Three Pillars
          </h2>
          <p className="text-ink/60 mt-4 max-w-xl mx-auto">
            Taijiquan cultivates the whole person through three inseparable aspects
          </p>
        </div>
        
        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
          {pillars.map((pillar, index) => (
            <article 
              key={pillar.title}
              className="group relative bg-cream-dark rounded-lg p-8 md:p-10 border border-border hover:border-jade/20 transition-all duration-500"
            >
              {/* Chinese character background */}
              <div className="absolute top-4 right-4 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 select-none pointer-events-none">
                <span className="font-serif text-8xl text-ink">
                  {pillar.chinese}
                </span>
              </div>
              
              {/* Number */}
              <div className="text-jade/40 text-sm tracking-widest mb-6">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Content */}
              <h3 className="font-serif text-2xl text-ink mb-4">
                {pillar.title}
              </h3>
              
              <p className="text-ink/70 leading-relaxed">
                {pillar.description}
              </p>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-jade/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
