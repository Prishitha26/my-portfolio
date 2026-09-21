import React, { useState } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const commandDatabase = {
  whoami: "prishitha — 3rd Year B.E. Computer Science Engineering Student @ RVS CET",
  role: "cloud-engineer-in-progress | Cloud Enthusiast | Developer",
  skills: "linux  aws-fundamentals  networking  git  github  devops-basics  python  react",
  status: "learning • building • improving (2024–2028 CSE)",
  education: "B.E. Computer Science & Engineering (2024-2028) | RVS College of Engineering & Technology",
  location: "Krishnagiri, Tamil Nadu, India",
  projects: "1. FundLedger (Blockchain Fund Tracker) | 2. NALAM (Maternal Health) | 3. EDUPILOT (AI EdTech)",
  internships: "• Cloud Computing Intern (Thozhil)\n• AI Data Engineering Intern\n• Power BI Intern",
  contact: "Email: prishiviayagam@gmail.com | Location: Krishnagiri, Tamil Nadu",
  help: "Available commands: whoami, role, skills, status, education, internships, projects, contact, clear"
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { cmd: "whoami", output: commandDatabase.whoami },
    { cmd: "role", output: commandDatabase.role },
    { cmd: "skills", output: commandDatabase.skills },
    { cmd: "status", output: commandDatabase.status }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === "clear") {
      setHistory([]);
      return;
    }

    const output = commandDatabase[cleanCmd] || `zsh: command not found: ${cleanCmd}. Type 'help' for available commands.`;
    setHistory(prev => [...prev, { cmd: cmdStr, output }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
    setInputVal("");
  };

  const handleCopy = () => {
    const textToCopy = history.map(h => `$ ${h.cmd}\n${h.output}`).join('\n\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickCommands = ["whoami", "role", "skills", "status", "projects", "internships", "help", "clear"];

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      {/* Terminal Window Frame */}
      <div className="rounded-2xl bg-dark-900/95 border border-slate-750/90 shadow-2xl backdrop-blur-xl overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-dark-850/90 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block"></span>
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              prishitha@cloud-node: ~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-slate-750 text-slate-400 hover:text-slate-200 transition-colors text-xs flex items-center gap-1 font-mono"
              title="Copy Terminal Logs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2.5 bg-dark-900 border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1 whitespace-nowrap">
            <Sparkles className="w-3 h-3 text-cyan-400" /> Quick Run:
          </span>
          {quickCommands.map(cmd => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-cyan-500/20 hover:border-cyan-500/40 border border-slate-700 text-slate-300 hover:text-cyan-300 text-[11px] font-mono whitespace-nowrap transition-colors"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-3 max-h-72 overflow-y-auto">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <span className="text-slate-500">$</span>
                <span>{item.cmd}</span>
              </div>
              <div className="text-slate-300 pl-4 whitespace-pre-line leading-relaxed border-l-2 border-slate-800">
                {item.output}
              </div>
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-cyan-400 font-semibold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help' or any command and press Enter..."
              className="flex-1 bg-transparent text-slate-200 focus:outline-none placeholder:text-slate-600 font-mono text-xs sm:text-sm"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className="p-1 text-slate-500 hover:text-cyan-400 transition-colors"
              title="Execute Command"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Status Bar */}
        <div className="px-4 py-1.5 bg-dark-950/80 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            SYS STATUS: ONLINE
          </span>
          <span>LINUX 6.6 • AWS US-EAST-1</span>
        </div>

      </div>
    </div>
  );
}
