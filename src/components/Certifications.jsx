import React from 'react';
import { 
  GraduationCap, 
  Cloud, 
  Terminal, 
  GitBranch, 
  Cpu, 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const iconMap = {
  Cloud: Cloud,
  Terminal: Terminal,
  GitBranch: GitBranch,
  Cpu: Cpu,
  BarChart3: BarChart3
};

export default function Certifications() {
  return (
    <section className="py-20 relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5" />
            <span>CONTINUOUS EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            Learning & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Targeted coursework, self-paced technical learning tracks, and practical industry training modules.
          </p>
        </div>

        {/* Certifications & Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Cloud;
            const isLearning = item.status === "Currently Learning";

            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border-slate-800 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Top Bar with Icon & Status Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-850 border border-slate-700/80 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono border ${
                      isLearning
                        ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                        : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-mono mb-4">
                    {item.focus}
                  </p>

                  {/* Core Topics Covered */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono uppercase text-slate-500 font-semibold mb-1">
                      Key Competencies:
                    </div>
                    {item.topics.map((topic, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> Status
                  </span>
                  <span className={isLearning ? 'text-amber-400 font-medium' : 'text-cyan-400 font-medium'}>
                    {item.status}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
