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
    <div className="w-full md:w-80 lg:w-96 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full flex-shrink-0 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-colors duration-200">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 p-2 rounded-xl shadow-lg shadow-brand-500/20">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">AutoFounder</h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium ml-[3.25rem]">AI Startup Incubator</p>
        </div>
        
        <button 
          onClick={onToggleTheme}
          className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 dark:bg-slate-800/50 dark:text-slate-500 dark:hover:text-slate-300 transition-all duration-200"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex-1 p-6 flex flex-col gap-8 overflow-y-auto">
        
        {/* Sector Selector */}
        <div className="space-y-3">
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Target Sector
          </label>
          <div className="relative group">
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value as Sector)}
              className="w-full appearance-none bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 block p-3.5 pr-8 transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-600 font-medium cursor-pointer"
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
            <div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white dark:bg-slate-900 px-3 text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Start with</span>
          </div>
        </div>

        {/* Example Selector */}
        <div className="space-y-3">
           <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Try an example
          </label>
          <div className="relative group">
            <select
              onChange={handleExampleChange}
              value=""
              className="w-full appearance-none bg-indigo-50/50 dark:bg-slate-800/50 border border-indigo-100 dark:border-slate-700 text-indigo-900 dark:text-indigo-300 text-sm rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 block p-3.5 pr-8 transition-all duration-200 hover:bg-indigo-50 hover:border-indigo-200 dark:hover:bg-slate-800 dark:hover:border-slate-600 cursor-pointer font-medium"
            >
              <option value="" disabled>✨ Pick a generated idea...</option>
              {EXAMPLES.map((ex) => (
                <option key={ex.label} value={ex.label}>{ex.label}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-indigo-400 dark:text-indigo-400">
               <RefreshCw className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Idea Text Area */}
        <div className="flex-1 flex flex-col min-h-[160px]">
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
            Your Big Idea
          </label>
          <div className="flex-1 relative">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Describe your startup idea in detail... What is the problem? Who is it for?"
              className="w-full h-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 block p-4 resize-none transition-all duration-200 placeholder-slate-400 dark:placeholder-slate-500 leading-relaxed"
              required
              minLength={10}
            />
            {idea.length > 0 && (
                <button 
                  type="button" 
                  onClick={handleClear}
                  className="absolute bottom-3 right-3 p-1.5 bg-white dark:bg-slate-700 text-slate-400 hover:text-red-500 dark:hover:text-red-400 rounded-md shadow-sm border border-slate-200 dark:border-slate-600 transition-colors"
                  title="Clear idea"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
            )}
          </div>
          <div className="flex justify-end mt-2">
            <p className={`text-[10px] font-medium transition-colors ${idea.length > 0 ? 'text-slate-400' : 'text-transparent'}`}>
              {idea.length} characters
            </p>
          </div>
        </div>

        {/* Generate Button */}
        <button
          type="submit"
          disabled={isGenerating || !idea.trim()}
          className={`
            group relative w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-semibold text-[15px] transition-all duration-300
            ${isGenerating || !idea.trim() 
              ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed' 
              : 'bg-gradient-to-r from-brand-600 to-brand-500 hover:to-brand-400 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0'}
          `}
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-[2.5px] border-white/30 border-t-white"></div>
              <span>Thinking...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Generate</span>
              <ChevronRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Sidebar;