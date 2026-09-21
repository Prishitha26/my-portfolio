import React from 'react';
import { 
  User, 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  Target, 
  Terminal as TerminalIcon, 
  Cloud, 
  Network, 
  GitBranch, 
  Cpu, 
  ShieldCheck, 
  Server,
  Compass
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Terminal from './Terminal';

const iconMap = {
  Terminal: TerminalIcon,
  Cloud: Cloud,
  Network: Network,
  GitBranch: GitBranch,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Server: Server
};

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      
      {/* Background Section Glows */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
            <User className="w-3.5 h-3.5" />
            <span>DISCOVER MY BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Passionate CSE undergraduate shaping a career in scalable cloud infrastructure, virtualization, and modern deployment.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Bio & Education Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Narrative Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-all" />
              
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Engineer in the Making</span>
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
                {personalInfo.about}
              </p>

              <div className="pt-5 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Career Goal */}
                <div className="p-4 rounded-xl bg-dark-900/70 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase mb-1">
                    <Target className="w-4 h-4 text-cyan-400" />
                    <span>Career Goal</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {personalInfo.careerGoal}
                  </p>
                </div>

                {/* Academic Standing */}
                <div className="p-4 rounded-xl bg-dark-900/70 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase mb-1">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    <span>Education</span>
                  </div>
                  <div className="text-xs font-bold text-white">{personalInfo.education.degree}</div>
                  <div className="text-xs text-slate-400">{personalInfo.education.institution}</div>
                  <div className="text-[11px] font-mono text-cyan-400 mt-1">{personalInfo.education.years} • 3rd Year</div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-panel p-4 rounded-xl text-center">
                <div className="text-2xl font-bold font-display text-white">2024–28</div>
                <div className="text-[11px] text-slate-400 uppercase font-mono mt-0.5">B.E. CSE Batch</div>
              </div>
              <div className="glass-panel p-4 rounded-xl text-center">
                <div className="text-2xl font-bold font-display text-cyan-400">3</div>
                <div className="text-[11px] text-slate-400 uppercase font-mono mt-0.5">Internship Tracks</div>
              </div>
              <div className="glass-panel p-4 rounded-xl text-center">
                <div className="text-2xl font-bold font-display text-purple-400">3+</div>
                <div className="text-[11px] text-slate-400 uppercase font-mono mt-0.5">Major Projects</div>
              </div>
            </div>

          </div>

          {/* Right Column: "Currently Learning" Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 sm:p-7 relative border-slate-800">
              
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-display">Currently Learning</h4>
                    <p className="text-xs text-slate-400">Active skills & technologies in progress</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[11px] font-mono border border-cyan-500/20">
                  {personalInfo.currentlyLearning.length} Tracks
                </span>
              </div>

              <div className="space-y-3">
                {personalInfo.currentlyLearning.map((item, idx) => {
                  const Icon = iconMap[item.icon] || Cloud;
                  return (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-dark-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 group-hover:text-white group-hover:bg-cyan-600 transition-colors shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-mono text-cyan-400/80 uppercase">
                            Learning
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-snug mt-0.5 line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

        {/* Embedded Interactive Terminal Showcase */}
        <div className="mt-8">
          <Terminal />
        </div>

      </div>
    </section>
  );
}
