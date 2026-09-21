import React from 'react';
import { 
  Milestone, 
  CheckCircle2, 
  Clock, 
  Rocket, 
  ArrowRight, 
  Sparkles, 
  Cloud, 
  Terminal, 
  Cpu, 
  Boxes 
} from 'lucide-react';
import { cloudJourneyData } from '../data/portfolioData';

export default function CloudJourney() {
  return (
    <section id="journey" className="py-20 relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-purple-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Milestone className="w-3.5 h-3.5" />
            <span>PROGRESSION ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            My Cloud <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From computer science fundamentals to targeted cloud infrastructure mastery and future DevOps specialization.
          </p>
        </div>

        {/* Journey Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {cloudJourneyData.map((phase, idx) => {
            const isCurrent = phase.status === "In Progress";
            const isCompleted = phase.status === "Completed";

            return (
              <div
                key={phase.year}
                className={`glass-panel rounded-2xl p-6 flex flex-col justify-between relative border transition-all duration-300 group ${
                  isCurrent 
                    ? 'border-cyan-500/60 bg-gradient-to-b from-cyan-950/40 via-dark-900/90 to-dark-900/90 shadow-glow-cyan scale-[1.02]' 
                    : isCompleted
                      ? 'border-slate-800/90 hover:border-slate-700 bg-dark-900/80'
                      : 'border-purple-500/40 hover:border-purple-500/70 bg-gradient-to-b from-purple-950/20 to-dark-900/90'
                }`}
              >
                {/* Active Phase Glowing indicator */}
                {isCurrent && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-cyan-500 text-dark-950 text-[10px] font-mono font-bold tracking-wider uppercase shadow-md animate-pulse">
                    Current Milestone
                  </div>
                )}

                <div>
                  {/* Top Bar: Year & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                    <span className="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-cyan-400 transition-colors">
                      {phase.year}
                    </span>

                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                      isCompleted 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                        : isCurrent
                          ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                          : 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                    }`}>
                      {phase.status}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                    {phase.badge}
                  </span>

                  <h3 className="text-base font-bold font-display text-white mb-4 leading-snug">
                    {phase.headline}
                  </h3>

                  {/* Bullet Points */}
                  <div className="space-y-2 border-t border-slate-800/80 pt-4">
                    {phase.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <ArrowRight className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isCurrent ? 'text-cyan-400' : isCompleted ? 'text-emerald-400' : 'text-purple-400'
                        }`} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Timeline Step indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Step {idx + 1} of 4</span>
                  {isCurrent && <span className="text-cyan-400 font-bold">Active Focus ●</span>}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
