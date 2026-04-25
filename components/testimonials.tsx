const testimonials = [
  {
    quote: "Taijiquan has become more than movement for me—it is a daily meditation, a way to understand myself and the world around me. The teaching here is patient and profound.",
    author: "Maria K.",
    years: "3 years of practice",
  },
  {
    quote: "I came for the health benefits but discovered something much deeper. The authentic lineage teaching makes all the difference—you can feel the depth of tradition in every movement.",
    author: "Thomas B.",
    years: "5 years of practice",
  },
  {
    quote: "As someone who had tried Tai Chi before, I was amazed at the difference authentic teaching makes. The attention to detail and philosophical depth have transformed my practice.",
    author: "Sophie L.",
    years: "2 years of practice",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-jade text-sm tracking-[0.3em] uppercase">Voices</span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4">
            From Our Practitioners
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
