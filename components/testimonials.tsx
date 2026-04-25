const testimonials = [
  {
    quote: "Taijiquan is voor mij meer dan beweging geworden—het is een dagelijkse meditatie, een manier om mezelf en de wereld om me heen te begrijpen. Het onderwijs hier is geduldig en diepgaand.",
    author: "Maria K.",
    years: "3 jaar beoefening",
  },
  {
    quote: "Ik kwam voor de gezondheidsvoordelen maar ontdekte iets veel diepers. Het authentieke lijn-onderwijs maakt alle verschil—je voelt de diepte van de traditie in elke beweging.",
    author: "Thomas B.",
    years: "5 jaar beoefening",
  },
  {
    quote: "Als iemand die eerder Tai Chi had geprobeerd, was ik verbaasd over het verschil dat authentiek onderwijs maakt. De aandacht voor detail en de filosofische diepte hebben mijn beoefening getransformeerd.",
    author: "Sophie L.",
    years: "2 jaar beoefening",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-jade text-sm tracking-[0.3em] uppercase">Stemmen</span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4">
            Van Onze Beoefenaars
          </h2>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index}
              className="relative bg-cream-dark rounded-lg p-8 border border-border"
            >
              {/* Quote mark */}
              <div className="absolute -top-3 left-8 text-jade/20 text-6xl font-serif leading-none select-none">
                &ldquo;
              </div>
              
              {/* Quote */}
              <blockquote className="text-ink/80 leading-relaxed mb-6 relative z-10">
                {testimonial.quote}
              </blockquote>
              
              {/* Author */}
              <footer className="border-t border-border pt-4">
                <cite className="not-italic">
                  <span className="block text-ink font-medium">
                    {testimonial.author}
                  </span>
                  <span className="text-ink/50 text-sm">
                    {testimonial.years}
                  </span>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
