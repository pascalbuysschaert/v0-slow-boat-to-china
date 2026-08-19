interface LineageNode {
  name: string
  years?: string
  role?: string
  isMainLine?: boolean
  isActive?: boolean
  isBroadBranch?: boolean
}

const allLineage: LineageNode[] = [
  {
    name: 'Yang Luchan',
    years: '1799–1872',
    role: 'Grondlegger Yang-stijl, 1e generatie',
    isMainLine: true,
  },
  {
    name: 'Yang Jianhou',
    years: '1839–1917',
    role: '2e generatie',
    isMainLine: true,
  },
  {
    name: 'Yang Shaohou',
    years: '1862–1930',
    role: '3e generatie',
    isMainLine: true,
  },
  {
    name: 'Gu Lisheng / Gu Luping',
    years: '1903–1978',
    role: '4e generatie',
    isMainLine: true,
  },
  {
    name: 'Chi Qingsheng',
    years: '°1948',
    role: '5e generatie, laatste indoorstudent & lijnhouder',
    isMainLine: true,
  },
  {
    name: 'Liang Dehua',
    years: '197x–',
    role: '6e generatie, Chuan Cheng Academy',
    isMainLine: true,
  },
  {
    name: 'Erik Elsemans',
    role: 'Gecertificeerd Instructeur',
    isMainLine: true,
  },
  {
    name: 'Slow Boat To China',
    role: 'Praktijkgroep in Leuven (België)',
    isMainLine: true,
    isActive: true,
  },
]

function LineageEntry({ node }: { node: LineageNode }) {
  return (
    <div 
      className={`
        relative flex items-start gap-3 py-3 px-4 rounded-lg transition-all duration-300
        ${node.isActive 
          ? 'bg-vermilion/10 border-2 border-vermilion shadow-lg' 
          : node.isMainLine 
            ? 'bg-jade/5 border border-jade/30 hover:border-jade/50' 
            : node.isBroadBranch
              ? 'bg-ink/5 border border-ink/10 hover:border-ink/20'
              : 'bg-cream border border-border hover:border-jade/20'
        }
      `}
    >
      {/* Main line indicator */}
      {node.isMainLine && !node.isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-jade rounded-l-lg" />
      )}
      {node.isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-vermilion rounded-l-lg" />
      )}

      {/* Node marker */}
      <div className={`
        flex-shrink-0 w-4 h-4 rounded-full border-2 mt-1
        ${node.isActive 
          ? 'border-vermilion bg-vermilion' 
          : node.isMainLine 
            ? 'border-jade bg-jade/20' 
            : 'border-ink/30 bg-cream'
        }
      `}>
        {node.isActive && (
          <div className="w-full h-full rounded-full animate-pulse bg-vermilion/50" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className={`
            font-serif text-base md:text-lg
            ${node.isActive ? 'text-vermilion font-semibold' : node.isMainLine ? 'text-ink' : 'text-ink/70'}
          `}>
            {node.name}
          </h4>
          {node.years && (
            <span className="text-xs text-ink/50 font-mono">
              ({node.years})
            </span>
          )}
        </div>
        {node.role && (
          <p className={`text-sm mt-0.5 ${node.isActive ? 'text-vermilion/70' : 'text-ink/50'}`}>
            {node.role}
          </p>
        )}
        {node.isMainLine && !node.isActive && !node.isBroadBranch && (
          <span className="inline-block mt-1 text-[10px] uppercase tracking-wider text-jade/70 bg-jade/10 px-2 py-0.5 rounded">
            Hoofdlijn
          </span>
        )}
        {node.isBroadBranch && (
          <span className="inline-block mt-1 text-[10px] uppercase tracking-wider text-ink/50 bg-ink/5 px-2 py-0.5 rounded">
            Brede Vertakking
          </span>
        )}
      </div>
    </div>
  )
}

export function Lineage() {
  return (
    <section id="lineage" className="py-24 md:py-32 bg-cream-dark">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-jade text-sm tracking-[0.3em] uppercase">Overdracht</span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4 text-balance">
            De Overlevering
          </h2>
          <p className="text-ink/60 mt-4 max-w-xl mx-auto leading-relaxed">
            Authentieke Taijiquan wordt van leraar op leerling overgedragen in een ononderbroken keten. Het is een eer om deel uit te maken van deze levende traditie.
          </p>
        </div>
        
        {/* Lineage list */}
        <div className="bg-cream rounded-xl p-4 md:p-6 border border-border">
          <div className="space-y-2">
            {allLineage.map((node, index) => {
              const isIndented = node.name === 'Erik Elsemans' || node.name === 'Slow Boat To China'
              return (
                <div key={node.name} className={`relative ${isIndented ? 'ml-6 md:ml-8' : ''}`}>
                  {index > 0 && (
                    <div className={`flex justify-start py-1 ${isIndented ? 'pl-0' : 'pl-5'}`}>
                      <span className="text-jade/40 text-xs">▶</span>
                    </div>
                  )}
                  <LineageEntry node={node} />
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
