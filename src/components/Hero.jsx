import React from 'react';
import { 
  Cloud, 
  Terminal, 
  FileText, 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Cpu, 
  Network, 
  ShieldCheck, 
  MapPin,
  GraduationCap
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden">
      
      {/* Background Decorative Cloud/Tech Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Calls to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status / Role pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>CSE Student (2024–2028) • Cloud Enthusiast</span>
            </div>

            {/* Greeting */}
            <div className="text-lg md:text-xl font-medium text-slate-300 mb-2 flex items-center gap-2">
              <span>Hi, I'm Prishitha</span>
              <span className="inline-block animate-bounce text-2xl">👋</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Building My Path in{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
                Cloud Engineering
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              {personalInfo.heroSubtitle}
            </p>

            {/* Key Quick Stats / Chips */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>RVS College of Eng & Tech</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Krishnagiri, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>3 Internships Completed</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 transition-all duration-300 shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social / Direct Connect Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full max-w-lg">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect:</span>
              
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-xs font-medium transition-all"
                title="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-xs font-medium transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.socialLinks.email}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-xs font-medium transition-all"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Premium Portrait Card with Floating Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Glowing Atmosphere */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 rounded-3xl opacity-40 blur-xl group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

              {/* Glassmorphism Frame Container */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-white/10 p-3 shadow-2xl backdrop-blur-xl">
                
                {/* Top mini terminal bar inside card */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 mb-3 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-cyan-400/90 flex items-center gap-1">
                    <Terminal className="w-3 h-3" /> prishitha@cloud-node:~$
                  </span>
                  <span className="text-slate-500">v2026</span>
                </div>

                {/* Profile Image with subtle hover zoom and exact non-distorted aspect ratio */}
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-950 border border-slate-800">
                  <img
                    src="/profile.jpg"
                    alt="Prishitha - Aspiring Cloud Engineer"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent pointer-events-none"></div>

                  {/* Role Title Bottom Banner inside Image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-dark-900/90 backdrop-blur-md border border-cyan-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-cyan-400 font-mono">ROLE TARGET</p>
                        <h4 className="text-sm font-bold text-white font-display">Cloud Engineer</h4>
                      </div>
                      <div className="px-2.5 py-1 rounded-md bg-cyan-500/20 border border-cyan-500/40 text-[11px] font-semibold text-cyan-300 flex items-center gap-1">
                        <Cloud className="w-3 h-3" /> AWS & Linux
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: Top Right */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-dark-900/95 border border-cyan-500/40 p-2.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2.5 animate-float">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Status</div>
                    <div className="text-xs font-bold text-white whitespace-nowrap">Cloud Engineering Enthusiast</div>
                  </div>
                </div>

                {/* Floating Badge 2: Bottom Left */}
                <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-dark-900/95 border border-blue-500/40 p-2.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2.5 animate-float-reverse">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Core Track</div>
                    <div className="text-xs font-bold text-slate-200 whitespace-nowrap">Linux • AWS • Networking</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
