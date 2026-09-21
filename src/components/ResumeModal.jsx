import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Phone, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Code2 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `PRISHITHA - Cloud Engineer
Location: Krishnagiri, Tamil Nadu
Email: prishiviayagam@gmail.com
Phone: +91 6385222573

EDUCATION:
RVS College of Engineering & Technology
B.E. Computer Science and Engineering (2024 – 2028)

SKILLS:
Cloud Computing, AWS Fundamentals, Linux Administration, Git & GitHub, Networking & Security, Virtualization & Storage

EXPERTISE:
Team Coordination, Project & Hackathon Presentation, Python Programming, DevOps Fundamentals

LANGUAGES:
English, Tamil, German

ABOUT ME:
${personalInfo.about}

INTERNSHIPS:
1. Cloud Computing Intern — Thozhil
Gained practical exposure to cloud infrastructure concepts, core cloud service deployment, resource management, networking basics, and cloud security principles.

2. AI Data Engineering Intern
Worked on data processing concepts, exploratory data analysis, pipeline workflows, and understanding how data infrastructure supports artificial intelligence workloads.

3. Power BI Intern
Learned data visualization, building interactive dashboards, transforming data, and extracting key analytical insights for structured reporting.

ACHIEVEMENTS:
• Project Winner: College Internal Project Presentation Winner
• Hackathons & Workshops: Active participant in technical workshops and intercollege hackathons`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-dark-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-dark-900 border border-slate-750 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col">
        
        {/* Modal Top Actions Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-dark-850/95 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white font-display">
              Prishitha's Resume
            </span>
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
              Cloud Engineer
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors border border-slate-700"
              title="Copy Plain Text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-glow-cyan"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Preview (Clean light theme inside sheet as requested by ATS/corporate standards) */}
        <div className="p-4 sm:p-8 bg-slate-900/50 flex justify-center">
          <div className="w-full max-w-3xl bg-white text-slate-800 rounded-xl shadow-2xl p-6 sm:p-12 print:p-0 print:shadow-none font-sans leading-normal">
            
            {/* Header */}
            <div className="text-center pb-6 border-b border-slate-200">
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-wider uppercase font-display">
                PRISHITHA
              </h1>
              <div className="text-sm font-semibold text-slate-600 tracking-wide mt-1 uppercase">
                Cloud Engineer
              </div>

              {/* Contact Bar */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 mt-4 pt-3 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  📞 +91 6385222573
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  📍 Krishnagiri, Tamil Nadu
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  ✉️ prishiviayagam@gmail.com
                </span>
              </div>
            </div>

            {/* 2-Column Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-6">
              
              {/* Left Column (4 cols) */}
              <div className="md:col-span-4 space-y-6 md:border-r md:border-slate-200 md:pr-6">
                
                {/* Education */}
                <div>
                  <h3 className="text-xs font-bold font-display uppercase tracking-widest text-slate-900 border-b-2 border-slate-300 pb-1 mb-2">
                    Education
                  </h3>
                  <div className="text-xs font-bold text-slate-900 uppercase">
                    RVS College of Engineering & Technology
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    B.E. Computer Science and Engineering
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-1">
                    2024 – 2028
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-xs font-bold font-display uppercase tracking-widest text-slate-900 border-b-2 border-slate-300 pb-1 mb-2">
                    Skills
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-1.5">
                    <li className="flex items-start gap-1.5">• <span>Cloud Computing</span></li>
                    <li className="flex items-start gap-1.5">• <span>AWS Fundamentals</span></li>
                    <li className="flex items-start gap-1.5">• <span>Linux Administration</span></li>
                    <li className="flex items-start gap-1.5">• <span>Git & GitHub</span></li>
                    <li className="flex items-start gap-1.5">• <span>Networking & Security</span></li>
                    <li className="flex items-start gap-1.5">• <span>Virtualization & Storage</span></li>
                  </ul>
                </div>

                {/* Expertise */}
                <div>
                  <h3 className="text-xs font-bold font-display uppercase tracking-widest text-slate-900 border-b-2 border-slate-300 pb-1 mb-2">
                    Expertise
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-1.5">
                    <li className="flex items-start gap-1.5">• <span>Team Coordination</span></li>
                    <li className="flex items-start gap-1.5">• <span>Project & Hackathon Presentation</span></li>
                    <li className="flex items-start gap-1.5">• <span>Python Programming</span></li>
                    <li className="flex items-start gap-1.5">• <span>DevOps Fundamentals</span></li>
                  </ul>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="text-xs font-bold font-display uppercase tracking-widest text-slate-900 border-b-2 border-slate-300 pb-1 mb-2">
                    Languages
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• English</li>
                    <li>• Tamil</li>
                    <li>• German</li>
                  </ul>
                </div>

              </div>

              {/* Right Column (8 cols) */}
              <div className="md:col-span-8 space-y-6">
                
                {/* About Me */}
                <div>
                  <h3 className="text-xs font-bold font-display uppercase tracking-widest text-slate-900 border-b-2 border-slate-300 pb-1 mb-2">
                    About Me
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed text-justify">
                    {personalInfo.about}
                  </p>
                </div>

                {/* Internships */}
                <div>
                  <h3 className="text-xs font-bold font-display uppercase tracking-widest text-slate-900 border-b-2 border-slate-300 pb-3 mb-3">
                    Internships
                  </h3>

                  <div className="space-y-4">
                    {/* Internship 1 */}
                    <div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-bold text-slate-900 uppercase">
                          Cloud Computing Intern — Thozhil
                        </span>
                        <span className="text-[11px] font-bold text-slate-600 uppercase">
                          Internship
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        Gained practical exposure to cloud infrastructure concepts, core cloud service deployment, resource management, networking basics, and cloud security principles.
                      </p>
                    </div>

                    {/* Internship 2 */}
                    <div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-bold text-slate-900 uppercase">
                          AI Data Engineering Intern
                        </span>
                        <span className="text-[11px] font-bold text-slate-600 uppercase">
                          Internship
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        Worked on data processing concepts, exploratory data analysis, pipeline workflows, and understanding how data infrastructure supports artificial intelligence workloads.
                      </p>
                    </div>

                    {/* Internship 3 */}
                    <div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-bold text-slate-900 uppercase">
                          Power BI Intern
                        </span>
                        <span className="text-[11px] font-bold text-slate-600 uppercase">
                          Internship
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        Learned data visualization, building interactive dashboards, transforming data, and extracting key analytical insights for structured reporting.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-xs font-bold font-display uppercase tracking-widest text-slate-900 border-b-2 border-slate-300 pb-2 mb-2">
                    Achievements
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                      <div className="font-bold text-slate-900 uppercase text-[11px]">
                        Project Winner
                      </div>
                      <div className="text-slate-600 text-[11px] mt-0.5">
                        College Internal Project Presentation Winner
                      </div>
                    </div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                      <div className="font-bold text-slate-900 uppercase text-[11px]">
                        Hackathons & Workshops
                      </div>
                      <div className="text-slate-600 text-[11px] mt-0.5">
                        Active participant in technical workshops and intercollege hackathons
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
