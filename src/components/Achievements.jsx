import React from 'react';
import { 
  Trophy, 
  Zap, 
  Flame, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Target,
  ArrowUpRight
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const iconMap = {
  Trophy: Trophy,
  Zap: Zap,
  Flame: Flame
};

export default function Achievements() {
  return (
    <section className="py-20 relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-amber-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Award className="w-3.5 h-3.5" />
            <span>MILESTONES & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            Hackathons & <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Active competitive coding participation, project pitching victories, and continuous hands-on technical workshops.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Trophy;

            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border-slate-800 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background ambient glow inside card */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/5 group-hover:bg-amber-500/10 rounded-full blur-2xl transition-all pointer-events-none" />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-slate-850 border border-slate-700 text-amber-400 group-hover:bg-amber-500 group-hover:text-dark-950 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium">
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                    {item.category}
                  </span>

                  <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" /> Verified Achievement
                  </span>
                  <span>RVS CET</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
