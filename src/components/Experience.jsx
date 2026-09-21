import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Cloud, 
  Cpu, 
  BarChart3, 
  CheckCircle2, 
  ArrowUpRight, 
  Building2,
  Sparkles
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const getExperienceIcon = (id) => {
  if (id.includes('cloud')) return Cloud;
  if (id.includes('ai')) return Cpu;
  return BarChart3;
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-5 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY IMMERSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            Internship <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical hands-on exposure across cloud infrastructure, artificial intelligence data engineering, and business analytics.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600/40 opacity-70" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const Icon = getExperienceIcon(item.id);
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  
                  {/* Timeline Center Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 w-9 h-9 rounded-xl bg-dark-900 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-glow-cyan z-10 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-dark-950 transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Content Card Container */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
                    <div className="glass-panel glass-panel-hover rounded-2xl p-6 border-slate-800 relative overflow-hidden">
                      
                      {/* Sub-header with Role & Company */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Building2 className="w-3 h-3 text-slate-500" />
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      <div className="text-sm font-semibold text-slate-300 mb-3">
                        {item.company}
                      </div>

                      {/* Main Paragraph */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 pt-3 border-t border-slate-800/80 mb-4">
                        {item.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-dark-900/80 border border-slate-700/60 text-[10px] font-mono text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Alternate Grid */}
                  <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
