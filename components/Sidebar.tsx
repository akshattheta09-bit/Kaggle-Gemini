import React, { useState } from 'react';
import { Sector } from '../types';
import { Rocket, Sparkles, ChevronRight, RefreshCw, Trash2, Moon, Sun } from 'lucide-react';

interface SidebarProps {
  onGenerate: (idea: string, sector: Sector) => void;
  isGenerating: boolean;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const EXAMPLES = [
  {
    label: "Autonomous YouTube Channel Operator",
    sector: Sector.CreatorTools,
    description: "An AI agent system that autonomously researches trending topics, writes scripts, generates voiceovers, edits stock footage, and publishes videos to YouTube without human intervention. It includes analytics monitoring to iterate on content strategy."
  },
  {
    label: "RedFlag GPT – AI dating safety copilot",
    sector: Sector.Other,
    description: "A mobile app that analyzes screenshots of dating app chats (Tinder/Hinge) and detects potential red flags, manipulation tactics, or scams. It provides safety scores and suggested responses to help users stay safe."
  },
  {
    label: "AI Personal CFO for solopreneurs",
    sector: Sector.Fintech,
    description: "A financial dashboard that connects to bank accounts and uses AI to categorize expenses, estimate tax obligations in real-time, forecast cash flow, and suggest tax-saving strategies specifically for freelancers and one-person businesses."
  }
];

/**
 * Sidebar Component
 * 
 * Collects user input (Sector and Idea description).
 * Disables submission while the AI is thinking (isGenerating).
 */
const Sidebar: React.FC<SidebarProps> = ({ onGenerate, isGenerating, isDarkMode, onToggleTheme }) => {
  const [idea, setIdea] = useState('');
  const [sector, setSector] = useState<Sector>(Sector.SaaS);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      onGenerate(idea, sector);
    }
  };

  const handleExampleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLabel = e.target.value;
    const example = EXAMPLES.find(ex => ex.label === selectedLabel);
    if (example) {
      setIdea(example.description);
      setSector(example.sector);
    }
  };

  const handleClear = () => {
    setIdea('');
  };

  return (
    <div className="w-full md:w-80 lg:w-96 bg-gradient-to-b from-white via-brand-50/40 to-white dark:from-slate-950 dark:via-slate-950/70 dark:to-slate-950 border-r border-white/60 dark:border-slate-800 flex flex-col h-full flex-shrink-0 z-20 shadow-[6px_0_30px_rgba(79,140,255,0.12)] transition-colors duration-200 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_15%_10%,rgba(94,162,255,0.12),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(0,213,255,0.10),transparent_26%),radial-gradient(circle_at_70%_80%,rgba(97,165,255,0.10),transparent_28%)]" />
      {/* Sidebar Header */}
      <div className="relative p-6 border-b border-white/60 dark:border-slate-800 flex justify-between items-start backdrop-blur-xl">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 p-2 rounded-xl shadow-lg shadow-brand-500/25">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">AutoFounder</h1>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">AI Startup Incubator</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-brand-700 dark:text-brand-200 bg-white/70 dark:bg-white/5 border border-brand-100/80 dark:border-brand-900/40 px-3 py-1 rounded-full shadow-[0_6px_24px_rgba(79,140,255,0.16)] backdrop-blur">
            <Sparkles className="w-3.5 h-3.5" /> From idea to blueprint in under a minute
          </div>
        </div>
        
        <button 
          onClick={onToggleTheme}
          className="p-2 rounded-lg bg-white/70 hover:bg-white text-slate-500 hover:text-slate-700 dark:bg-slate-800/70 dark:text-slate-400 dark:hover:text-slate-200 transition-all duration-200 border border-white/60 dark:border-slate-700 shadow-sm backdrop-blur"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex-1 p-6 flex flex-col gap-8 overflow-y-auto">
        
        {/* Sector Selector */}
        <div className="space-y-3">
          <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            Target Sector
          </label>
          <div className="relative group">
            <select
              aria-label="Target Sector"
              value={sector}
              onChange={(e) => setSector(e.target.value as Sector)}
              className="w-full appearance-none bg-white/70 dark:bg-slate-800/60 border border-white/70 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 block p-3.5 pr-8 transition-all duration-200 hover:border-brand-200 dark:hover:border-brand-800 font-medium cursor-pointer backdrop-blur"
            >
              {Object.values(Sector).map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        {/* Separator / Helper */}
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/60 dark:border-slate-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white/80 dark:bg-slate-900 px-3 text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-[0.22em] font-semibold rounded-full shadow-sm border border-white/60 dark:border-slate-800">Start with</span>
          </div>
        </div>

        {/* Example Selector */}
        <div className="space-y-3">
           <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            Try an example
          </label>
          <div className="relative group">
            <select
              aria-label="Try an example"
              onChange={handleExampleChange}
              value=""
              className="w-full appearance-none bg-white/80 dark:bg-slate-800/60 border border-white/70 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 block p-3.5 pr-8 transition-all duration-200 hover:border-brand-200 dark:hover:border-brand-800 cursor-pointer font-medium backdrop-blur"
            >
              <option value="" disabled>✨ Pick a generated idea...</option>
              {EXAMPLES.map((ex) => (
                <option key={ex.label} value={ex.label}>{ex.label}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-400 dark:text-brand-300">
               <RefreshCw className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Idea Text Area */}
          <div className="flex-1 flex flex-col min-h-[160px]">
            <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
              Your Big Idea
            </label>
            <div className="flex-1 relative">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Describe your startup idea in detail... What is the problem? Who is it for?"
                className="w-full h-full bg-white/80 dark:bg-slate-800/60 border border-white/70 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm rounded-2xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 block p-4 resize-none transition-all duration-200 placeholder-slate-400 dark:placeholder-slate-500 leading-relaxed backdrop-blur shadow-[0_12px_40px_rgba(79,140,255,0.10)]"
                required
                minLength={10}
              />
              {idea.length > 0 && (
                <button 
                  type="button" 
                  onClick={handleClear}
                  className="absolute bottom-3 right-3 p-1.5 bg-white/90 dark:bg-slate-700 text-slate-400 hover:text-red-500 dark:hover:text-red-400 rounded-md shadow-sm border border-white/70 dark:border-slate-600 transition-colors backdrop-blur"
                  title="Clear idea"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            <div className="flex justify-between items-center mt-2 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
              <span className="uppercase tracking-[0.2em]">Clarity first</span>
              <p className={`text-[11px] font-semibold transition-colors ${idea.length > 0 ? 'text-slate-500 dark:text-slate-400' : 'text-transparent'}`}>
                {idea.length} characters
              </p>
            </div>
          </div>

        {/* Generate Button */}
        <button
          type="submit"
          disabled={isGenerating || !idea.trim()}
          className={`
            group relative w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-semibold text-[15px] transition-all duration-300 overflow-hidden
            ${isGenerating || !idea.trim() 
              ? 'bg-white/70 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed border border-white/60 dark:border-slate-700' 
              : 'text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 border border-transparent'}
          `}
        >
          {!isGenerating && idea.trim() && (
            <span className="absolute inset-0 bg-gradient-to-r from-brand-500 via-brand-600 to-brand-500 opacity-90" />
          )}
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-[2.5px] border-white/30 border-t-white"></div>
              <span>Thinking...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 relative" />
              <span className="relative">Generate</span>
              <ChevronRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform relative" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Sidebar;