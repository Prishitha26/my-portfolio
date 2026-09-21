import React, { useState } from 'react';
import { 
  Cloud, 
  Cpu, 
  Network, 
  Code2, 
  Layers, 
  Terminal, 
  GitBranch, 
  Workflow, 
  Globe, 
  Shield, 
  Radio, 
  Code, 
  Layout, 
  Palette, 
  Zap, 
  Boxes, 
  Compass, 
  HardDrive, 
  Server,
  Search,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { Github } from './Icons';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Cloud: Cloud,
  Cpu: Cpu,
  Server: Server,
  HardDrive: HardDrive,
  Layers: Layers,
  Terminal: Terminal,
  GitBranch: GitBranch,
  Github: Github,
  Workflow: Workflow,
  Code2: Code2,
  Network: Network,
  Globe: Globe,
  Shield: Shield,
  Radio: Radio,
  Code: Code,
  Layout: Layout,
  Palette: Palette,
  Zap: Zap,
  Boxes: Boxes,
  Compass: Compass
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...skillsData.map(c => c.category)];

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'Practicing':
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
      case 'Learning':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      case 'Familiar':
        return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
      default:
        return 'bg-slate-700/50 text-slate-300 border-slate-600';
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Proficiencies categorized by cloud infrastructure, DevOps tooling, computer networking, and software development foundations.
          </p>

          {/* Level Legend */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <span className="text-xs text-slate-400 font-mono">Proficiency Guide:</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border bg-cyan-500/10 text-cyan-300 border-cyan-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Practicing
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border bg-amber-500/10 text-amber-300 border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Learning
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border bg-purple-500/10 text-purple-300 border-purple-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Familiar
            </span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-dark-900/90 rounded-2xl border border-slate-800 backdrop-blur-md w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g. Linux, AWS)..."
              className="w-full bg-dark-900/90 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

        </div>

        {/* Skills Group / Grid Display */}
        <div className="space-y-10">
          {skillsData
            .filter(group => activeCategory === 'All' || group.category === activeCategory)
            .map((group) => {
              const filteredSkills = group.skills.filter(s => 
                s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.desc.toLowerCase().includes(searchQuery.toLowerCase())
              );

              if (filteredSkills.length === 0) return null;

              return (
                <div key={group.category} className="space-y-4">
                  {/* Category Title & Icon */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-cyan-400">
                        {group.category === 'Cloud & Infrastructure' && <Cloud className="w-4 h-4" />}
                        {group.category === 'DevOps & Tools' && <Cpu className="w-4 h-4" />}
                        {group.category === 'Networking' && <Network className="w-4 h-4" />}
                        {group.category === 'Programming & Development' && <Code2 className="w-4 h-4" />}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-white font-display">
                          {group.category}
                        </h3>
                        <p className="text-xs text-slate-400">{group.description}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {filteredSkills.length} {filteredSkills.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </div>

                  {/* Skill Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredSkills.map((skill) => {
                      const Icon = iconMap[skill.icon] || Code2;
                      return (
                        <div
                          key={skill.name}
                          className="glass-panel glass-panel-hover rounded-xl p-4.5 border-slate-800/80 flex flex-col justify-between group transition-all"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2.5">
                              <div className="flex items-center gap-2.5">
                                <div className="p-2 rounded-lg bg-slate-850 border border-slate-700/80 text-cyan-400 group-hover:text-cyan-300 group-hover:bg-cyan-950/40 transition-colors">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                                  {skill.name}
                                </h4>
                              </div>

                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border ${getLevelBadgeClass(skill.level)}`}>
                                {skill.level}
                              </span>
                            </div>

                            <p className="text-xs text-slate-400 leading-relaxed">
                              {skill.desc}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                            <span>Track: {group.category.split('&')[0].trim()}</span>
                            <span className="text-cyan-400/80 group-hover:translate-x-0.5 transition-transform">●</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
}
