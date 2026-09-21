import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  ExternalLink,
  Phone
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitted(true);
    setTimeout(() => {
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            Let's Build <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Something Together</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I'm always interested in learning, building projects, participating in hackathons, and connecting with people in technology.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Info & Social Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Info Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border-slate-800 space-y-6">
              <h3 className="text-lg font-bold font-display text-white mb-2">
                Contact Information
              </h3>
              
              {/* Email Block with 1-click copy */}
              <div className="p-4 rounded-xl bg-dark-900/80 border border-slate-800 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-cyan-400 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Block */}
              <div className="p-4 rounded-xl bg-dark-900/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-glow-cyan"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me Directly</span>
                </a>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="glass-panel rounded-2xl p-6 border-slate-800">
              <div className="text-xs font-mono uppercase text-slate-400 mb-4">
                Professional Channels
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white flex items-center gap-2.5 text-xs font-semibold transition-all group"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-900/80 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white flex items-center gap-2.5 text-xs font-semibold transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border-slate-800 h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold font-display text-white">
                      Send a Message
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Have a query, collaboration idea, or internship opportunity?
                    </p>
                  </div>
                  <span className="p-2 rounded-xl bg-slate-800 text-cyan-400">
                    <Send className="w-4 h-4" />
                  </span>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-xl bg-cyan-950/30 border border-cyan-500/40 text-center space-y-3 animate-in fade-in">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">Opening Email Client...</h4>
                    <p className="text-xs text-slate-300">
                      Thank you for reaching out! You can also email directly at <span className="text-cyan-400 font-mono">{personalInfo.email}</span>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-cyan-400 hover:underline pt-2"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Smith"
                          className="w-full bg-dark-900/90 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. alex@company.com"
                          className="w-full bg-dark-900/90 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Internship Opportunity / Project Collaboration"
                        className="w-full bg-dark-900/90 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your note, feedback, or inquiry here..."
                        className="w-full bg-dark-900/90 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-glow-cyan transform hover:-translate-y-0.5"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Response expected within 24-48h</span>
                <span className="text-emerald-400 flex items-center gap-1">● Inquiries Open</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
