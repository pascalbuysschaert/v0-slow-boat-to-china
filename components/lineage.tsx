'use client'

import { useState } from 'react'

interface LineageNode {
  name: string
  years?: string
  role?: string
  isMainLine?: boolean
  isActive?: boolean
  isBroadBranch?: boolean
  children?: LineageNode[]
}

const lineageTree: LineageNode = {
  name: 'Yang Luchan',
  years: '1799–1872',
  role: 'Founder Yang-style, 1st generation',
  isMainLine: true,
  children: [
    {
      name: 'Yang Banhou',
      years: '1837–1892',
      role: '2nd generation, limited transmission',
      isMainLine: false,
    },
    {
      name: 'Yang Jianhou',
      years: '1839–1917',
      role: '2nd generation',
      isMainLine: true,
      children: [
        {
          name: 'Yang Shaohou',
          years: '1862–1930',
          role: '3rd generation',
          isMainLine: true,
          children: [
            {
              name: 'Gu Lisheng / Gu Luping',
              years: '1903–1978',
              role: '4th generation',
              isMainLine: true,
              children: [
                {
                  name: 'Chi Qingsheng',
                  years: 'b. 1948',
                  role: '5th generation, last indoor student & lineage holder',
                  isMainLine: true,
                  children: [
                    {
                      name: 'Liang Dehua',
                      years: '197x–',
                      role: '6th generation, Chuan Cheng Academy',
                      isMainLine: true,
                      children: [
                        {
                          name: 'Elsemans',
                          role: 'Certified Instructor',
                          isMainLine: true,
                          children: [
                            {
                              name: 'Slow Boat To China',
                              role: 'Practice group in Leuven (Belgium)',
                              isMainLine: true,
                              isActive: true,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'Yang Chengfu',
          years: '1883–1936',
          role: '3rd generation',
          isBroadBranch: true,
          children: [
            {
              name: 'Zheng Manqing, Dong Yingjie, Yang Shouzhong, Fu Zhongwen et al.',
              role: 'Broad transmission branch',
              isBroadBranch: true,
            },
          ],
        },
      ],
    },
  ],
}

function TreeNode({ node, depth = 0, isLast = true }: { node: LineageNode; depth?: number; isLast?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(true)
  const hasChildren = node.children && node.children.length > 0

  return (
    <div className="relative">
      {/* Node content */}
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
          ${hasChildren ? 'cursor-pointer' : ''}
        `}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
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
            {hasChildren && (
              <span className={`text-xs transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>
                ▶
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

      {/* Children */}
      {hasChildren && isExpanded && (
        <div className="ml-6 mt-2 relative">
          {/* Vertical connector line */}
          <div className={`
            absolute left-2 top-0 bottom-4 w-0.5
            ${node.isMainLine ? 'bg-gradient-to-b from-jade/40 to-jade/10' : 'bg-ink/10'}
          `} />
          
          <div className="space-y-2">
            {node.children!.map((child, index) => (
              <div key={child.name} className="relative">
                {/* Horizontal connector */}
                <div className={`
                  absolute left-2 top-6 w-4 h-0.5
                  ${child.isMainLine ? 'bg-jade/40' : 'bg-ink/10'}
                `} />
                <div className="ml-6">
                  <TreeNode 
                    node={child} 
                    depth={depth + 1} 
                    isLast={index === node.children!.length - 1}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function Lineage() {
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
          <div className="flex justify-center gap-6 mt-6 text-xs">
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
        
        {/* Lineage tree */}
        <div className="bg-cream rounded-xl p-6 md:p-8 border border-border">
          <TreeNode node={lineageTree} />
        </div>

        {/* Footnote */}
        <div className="mt-8 p-4 bg-ink/5 rounded-lg border border-ink/10">
          <p className="text-sm text-ink/60 leading-relaxed">
            <span className="font-semibold text-ink/70">Note:</span> Gu Lisheng studied primarily under Yang Shaohou, 
            and after his death in 1930 also briefly under Yang Chengfu. Official lineage name: 
            <span className="italic"> Yang Family Taijiquan Shaohou Lineage of Gu&apos;s School.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
