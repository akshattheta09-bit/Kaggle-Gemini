import React, { useState } from 'react';
import { Sector } from '../types';
import { ChevronRight, RefreshCw, Trash2, Moon, Sun, ChevronDown, Zap } from 'lucide-react';
import logoSvg from '../assets/logo.svg';

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
 * Sidebar Component - Apple-Level Premium Design
 * 
 * Features:
 * - Glassmorphism design
 * - Premium form controls
 * - Smooth animations
 * - Clean typography
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
    <div className="w-full md:w-[380px] lg:w-[420px] h-full flex flex-col bg-white/50 dark:bg-gray-950/50 backdrop-blur-2xl border-r border-black/[0.04] dark:border-white/[0.06] relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 opacity-50 dark:opacity-30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100 dark:bg-brand-900/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Header */}
      <div className="relative p-6 border-b border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img 
                src={logoSvg} 
                alt="AutoFounder Logo" 
                className="w-10 h-10 drop-shadow-lg"
              />
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">AutoFounder</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">AI Startup Studio</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/30">
                <Zap className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Powered by Gemini Pro</span>
              </div>
            </div>
          </div>
          
          <button 
            onClick={onToggleTheme}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-colors focus-ring"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="relative flex-1 p-6 flex flex-col gap-6 overflow-y-auto">
        
        {/* Sector Selector */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Target Sector
          </label>
          <div className="relative">
            <select
              aria-label="Target Sector"
              value={sector}
              onChange={(e) => setSector(e.target.value as Sector)}
              className="w-full appearance-none input-premium pr-10 cursor-pointer font-medium"
            >
              {Object.values(Sector).map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200/80 dark:border-gray-800/80"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 text-xs text-gray-400 dark:text-gray-500 bg-white/80 dark:bg-gray-950/80 uppercase tracking-wider font-medium">
              Or start with
            </span>
          </div>
        </div>

        {/* Example Selector */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Example Ideas
          </label>
          <div className="relative">
            <select
              aria-label="Example Ideas"
              onChange={handleExampleChange}
              value=""
              className="w-full appearance-none input-premium pr-10 cursor-pointer"
            >
              <option value="" disabled>✨ Pick a generated idea...</option>
              {EXAMPLES.map((ex) => (
                <option key={ex.label} value={ex.label}>{ex.label}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-500">
              <RefreshCw className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Idea Text Area */}
        <div className="flex-1 flex flex-col min-h-[200px]">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Your Big Idea
          </label>
          <div className="flex-1 relative">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Describe your startup idea in detail...&#10;&#10;What problem are you solving?&#10;Who is your target customer?&#10;What makes your approach unique?"
              className="w-full h-full input-premium resize-none leading-relaxed"
              required
              minLength={10}
            />
            {idea.length > 0 && (
              <button 
                type="button" 
                onClick={handleClear}
                className="absolute bottom-3 right-3 p-2 rounded-lg bg-gray-100 dark:bg-gray-800/50 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                title="Clear idea"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-gray-400 dark:text-gray-500">Be specific for better results</span>
            <span className={`text-xs font-medium transition-colors ${
              idea.length > 0 ? 'text-gray-500 dark:text-gray-400' : 'text-transparent'
            }`}>
              {idea.length} chars
            </span>
          </div>
        </div>

        {/* Generate Button */}
        <button
          type="submit"
          disabled={isGenerating || !idea.trim()}
          className={`
            group relative w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-semibold text-base transition-all duration-300 overflow-hidden
            ${isGenerating || !idea.trim() 
              ? 'bg-gray-100 dark:bg-gray-800/50 text-gray-400 dark:text-gray-600 cursor-not-allowed' 
              : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-apple-lg hover:shadow-premium hover:-translate-y-0.5 active:translate-y-0'}
          `}
        >
          {isGenerating ? (
            <>
              <div className="spinner"></div>
              <span>Generating blueprint...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Generate Blueprint</span>
              <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Sidebar;