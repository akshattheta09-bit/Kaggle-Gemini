import React from 'react';
import { TabId } from '../types';
import { 
  Target, Layers, Rocket, Code, DollarSign, Palette, Download, Monitor, Activity, Map, Mic
} from 'lucide-react';

interface HeaderProps {
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
  onDownload: () => void;
  hasPlan: boolean;
}

// Configuration for the navigation tabs
const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'strategy', label: 'Strategy', icon: <Target className="w-4 h-4" /> },
  { id: 'viability', label: 'Viability', icon: <Activity className="w-4 h-4" /> },
  { id: 'execution-roadmap', label: 'Roadmap', icon: <Map className="w-4 h-4" /> },
  { id: 'pitch-script', label: 'Pitch', icon: <Mic className="w-4 h-4" /> },
  { id: 'product', label: 'Product', icon: <Layers className="w-4 h-4" /> },
  { id: 'mvp', label: 'MVP Spec', icon: <Rocket className="w-4 h-4" /> },
  { id: 'mockups', label: 'Mockups', icon: <Monitor className="w-4 h-4" /> },
  { id: 'app-scaffold', label: 'Scaffold', icon: <Code className="w-4 h-4" /> },
  { id: 'financials', label: 'Financials', icon: <DollarSign className="w-4 h-4" /> },
  { id: 'assets', label: 'Assets', icon: <Palette className="w-4 h-4" /> },
];

/**
 * Header Component
 * 
 * Sticky header with glassmorphism effect.
 * Uses a refined pill-based navigation style.
 */
const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange, onDownload, hasPlan }) => {
  return (
    <div className="sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-colors duration-200">
      <div className="px-6 py-4 flex items-center justify-between gap-4">
        
        {/* Scrollable Tabs Container */}
        <div className="flex space-x-1 overflow-x-auto pb-0 hide-scrollbar flex-1 items-center mask-image-linear-to-r">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                group flex items-center gap-2 px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 whitespace-nowrap
                ${activeTab === tab.id
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 shadow-sm ring-1 ring-brand-500/10 dark:ring-brand-400/20'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'}
              `}
            >
              <span className={`transition-colors ${activeTab === tab.id ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`}>
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Download Button */}
        <div className="pl-4 border-l border-slate-200 dark:border-slate-800 shrink-0">
          <button 
            onClick={onDownload}
            disabled={!hasPlan}
            className={`
              flex items-center gap-2 px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all
              ${hasPlan 
                ? 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-md hover:shadow-lg active:scale-95' 
                : 'bg-slate-100 text-slate-300 dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed'}
            `}
            title={hasPlan ? "Download Startup Blueprint as Markdown" : "Generate a plan first"}
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export Plan</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Header;