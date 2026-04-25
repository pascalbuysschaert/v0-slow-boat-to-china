const lineageMembers = [
  {
    name: 'Grandmaster Gu Lisheng',
    chinese: '顧麗生',
    role: 'Source of the transmission',
  },
  {
    name: 'Master Chi Qingsheng',
    chinese: '池慶生',
    role: 'Senior disciple',
  },
  {
    name: 'Master Liang Dehua',
    chinese: '梁德華',
    role: 'Chuan Cheng Academy',
  },
  {
    name: 'Erik Elsemans',
    chinese: null,
    role: 'Student of Master Liang',
  },
  {
    name: 'Small Boat To China',
    chinese: null,
    role: 'Practice group in Leuven',
  },
]

export function Lineage() {
  return (
    <section id="lineage" className="py-24 md:py-32 bg-cream-dark">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-jade text-sm tracking-[0.3em] uppercase">Transmission</span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4 text-balance">
            The Lineage
          </h2>
          <p className="text-ink/60 mt-4 max-w-xl mx-auto leading-relaxed">
            Authentic Taijiquan is transmitted from teacher to student in an 
            unbroken chain. We are honored to be part of this living tradition.
          </p>
        </div>
        
        {/* Lineage tree */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-jade/40 via-jade/20 to-jade/40 md:-translate-x-px" />
          
          {/* Members */}
          <div className="space-y-0">
            {lineageMembers.map((member, index) => (
              <div 
                key={member.name}
                className="relative pl-16 md:pl-0 py-8 md:py-10"
              >
                {/* Node marker */}
                <div className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 border-jade bg-cream-dark flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-jade" />
                </div>
                
                {/* Content card */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'}`}>
                  <div className="bg-cream rounded-lg p-6 border border-border hover:border-jade/20 transition-colors duration-300">
                    {/* Chinese name */}
                    {member.chinese && (
                      <p className="text-jade/60 text-lg mb-1 tracking-wider">
                        {member.chinese}
                      </p>
                    )}
                    
                    {/* Name */}
                    <h3 className="font-serif text-xl text-ink mb-1">
                      {member.name}
                    </h3>
                    
                    {/* Role */}
                    <p className="text-ink/50 text-sm">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
