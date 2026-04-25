export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream-dark">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-jade text-sm tracking-[0.3em] uppercase">The Art</span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4 text-balance">
            What is Taijiquan?
          </h2>
        </div>
        
        {/* Decorative divider */}
        <div className="flex justify-center mb-12">
          <div className="w-24 brushstroke-divider" />
        </div>
        
        {/* Content */}
        <div className="space-y-6 text-ink/80 leading-relaxed text-lg">
          <p>
            Taijiquan (太極拳) is an ancient Chinese internal martial art, rooted in 
            Daoist philosophy and the principles of Yin and Yang. More than a fighting system, 
            it is a path of self-cultivation—a practice that brings body, energy (Qi), and 
            mind into harmony.
          </p>
          
          <p>
            The Yang style, known for its elegant, flowing movements, makes this profound 
            art accessible to practitioners of all ages. Through patient practice, we develop 
            relaxation, awareness, and an ever-deepening understanding of our own nature.
          </p>
          
          <p className="text-ink/60 italic">
            Our group follows the authentic transmission of the Chuan Cheng Academy, studying 
            under the guidance of Master Liang Dehua, whose teaching traces directly back 
            to the lineage of Grandmaster Gu Lisheng.
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
