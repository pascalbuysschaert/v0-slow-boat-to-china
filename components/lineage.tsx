'use client'

import { useState } from 'react'

interface LineageNode {
  name: string
  years?: string
  role?: string
  isMainLine?: boolean
  isActive?: boolean
  isBroadBranch?: boolean
}

const mainLineage: LineageNode[] = [
  {
    name: 'Yang Luchan',
    years: '1799–1872',
    role: 'Founder Yang-style, 1st generation',
    isMainLine: true,
  },
  {
    name: 'Yang Jianhou',
    years: '1839–1917',
    role: '2nd generation',
    isMainLine: true,
  },
  {
    name: 'Yang Shaohou',
    years: '1862–1930',
    role: '3rd generation',
    isMainLine: true,
  },
  {
    name: 'Gu Lisheng / Gu Luping',
    years: '1903–1978',
    role: '4th generation',
    isMainLine: true,
  },
  {
    name: 'Chi Qingsheng',
    years: 'b. 1948',
    role: '5th generation, last indoor student & lineage holder',
    isMainLine: true,
  },
  {
    name: 'Liang Dehua',
    years: '197x–',
    role: '6th generation, Chuan Cheng Academy',
    isMainLine: true,
  },
  {
    name: 'Erik Elsemans',
    role: 'Certified Instructor',
    isMainLine: true,
  },
  {
    name: 'Slow Boat To China',
    role: 'Practice group in Leuven (Belgium)',
    isMainLine: true,
    isActive: true,
  },
]

const otherBranches: LineageNode[] = [
  {
    name: 'Yang Banhou',
    years: '1837–1892',
    role: '2nd generation (from Yang Luchan), limited transmission',
  },
  {
    name: 'Yang Chengfu',
    years: '1883–1936',
    role: '3rd generation (from Yang Jianhou)',
    isBroadBranch: true,
  },
  {
    name: 'Zheng Manqing, Dong Yingjie, Yang Shouzhong, Fu Zhongwen et al.',
    role: 'Broad transmission branch (from Yang Chengfu)',
    isBroadBranch: true,
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
            Main Line
          </span>
        )}
        {node.isBroadBranch && (
          <span className="inline-block mt-1 text-[10px] uppercase tracking-wider text-ink/50 bg-ink/5 px-2 py-0.5 rounded">
            Broad Branch
          </span>
        )}
      </div>
    </div>
  )
}

export function Lineage() {
  const [activeTab, setActiveTab] = useState<'main' | 'current' | 'branches'>('main')

  const tabs = [
    { id: 'main' as const, label: 'Main Shaohou Line' },
    { id: 'current' as const, label: 'Current Group' },
    { id: 'branches' as const, label: 'Other Branches' },
  ]

  return (
    <section id="lineage" className="py-24 md:py-32 bg-cream-dark">
      <div className="max-w-4xl mx-auto px-6">
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
          
          {/* Legend */}
          <div className="flex justify-center gap-6 mt-6 text-xs flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-jade/20 border-2 border-jade" />
              <span className="text-ink/60">Main Shaohou Line</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-vermilion border-2 border-vermilion" />
              <span className="text-ink/60">Current Group</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cream border-2 border-ink/30" />
              <span className="text-ink/60">Other Branches</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${activeTab === tab.id
                  ? 'bg-jade text-cream'
                  : 'bg-cream border border-border text-ink/60 hover:border-jade/30 hover:text-ink'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Lineage list */}
        <div className="bg-cream rounded-xl p-4 md:p-6 border border-border">
          {activeTab === 'main' && (
            <div className="space-y-2">
              {mainLineage.map((node, index) => {
                const isIndented = node.name === 'Erik Elsemans' || node.name === 'Slow Boat To China'
                return (
                  <div key={node.name} className={`relative ${isIndented ? 'ml-6 md:ml-8' : ''}`}>
                    {index < mainLineage.length - 1 && !isIndented && (
                      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-jade/20 -mb-2" />
                    )}
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
          )}

          {activeTab === 'current' && (
            <div className="space-y-2">
              {mainLineage.slice(-2).map((node, index) => (
                <div key={node.name} className="relative">
                  {index > 0 && (
                    <div className="flex justify-start pl-5 py-1">
                      <span className="text-jade/40 text-xs">▶</span>
                    </div>
                  )}
                  <LineageEntry node={node} />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'branches' && (
            <div className="space-y-2">
              {otherBranches.map((node) => (
                <LineageEntry key={node.name} node={node} />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
