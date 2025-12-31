import React, { useRef, useEffect, useState } from 'react';
import { TabId } from '../types';
import { 
  Target, Layers, Rocket, Code, DollarSign, Palette, Download, Monitor, Activity, Map, Mic, CheckCircle2, ChevronLeft, ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
  onDownload: () => void;
  hasPlan: boolean;
}

// Configuration for the navigation tabs with categories
const tabs: { id: TabId; label: string; icon: React.ReactNode; category: 'business' | 'product' | 'tech' | 'validation' }[] = [
  { id: 'strategy', label: 'Strategy', icon: <Target className="w-4 h-4" />, category: 'business' },
  { id: 'viability', label: 'Viability', icon: <Activity className="w-4 h-4" />, category: 'business' },
  { id: 'execution-roadmap', label: 'Roadmap', icon: <Map className="w-4 h-4" />, category: 'business' },
  { id: 'pitch-script', label: 'Pitch', icon: <Mic className="w-4 h-4" />, category: 'business' },
  { id: 'product', label: 'Product', icon: <Layers className="w-4 h-4" />, category: 'product' },
  { id: 'mvp', label: 'MVP Spec', icon: <Rocket className="w-4 h-4" />, category: 'product' },
  { id: 'mockups', label: 'Mockups', icon: <Monitor className="w-4 h-4" />, category: 'product' },
  { id: 'app-scaffold', label: 'Scaffold', icon: <Code className="w-4 h-4" />, category: 'tech' },
  { id: 'financials', label: 'Financials', icon: <DollarSign className="w-4 h-4" />, category: 'business' },
  { id: 'assets', label: 'Assets', icon: <Palette className="w-4 h-4" />, category: 'tech' },
  { id: 'validation', label: 'Validation', icon: <CheckCircle2 className="w-4 h-4" />, category: 'validation' },
];

/**
 * Header Component - Apple-Level Premium Tab Navigation
 * 
 * Features:
 * - Smooth pill indicator animation
 * - Scroll arrows for overflow
 * - Premium glassmorphism design
 * - Category-based organization
 */
const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange, onDownload, hasPlan }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-0 z-20 border-b border-black/[0.04] dark:border-white/[0.06] bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
      <div className="px-4 md:px-6 py-3 flex items-center gap-3">
        
        {/* Left scroll arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll tabs left"
            className="shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Scrollable Tabs Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex-1 flex items-center gap-1 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`
                  relative group flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap
                  ${isActive
                    ? 'text-brand-700 dark:text-brand-300'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}
                `}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand-50 dark:bg-brand-900/30 rounded-xl ring-1 ring-brand-200 dark:ring-brand-800"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <span className={`relative z-10 transition-colors ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300'}`}>
                  {tab.icon}
                </span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right scroll arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll tabs right"
            className="shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {/* Divider */}
        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 shrink-0" />
        
        {/* Download Button */}
        <motion.button 
          onClick={onDownload}
          disabled={!hasPlan}
          whileHover={hasPlan ? { scale: 1.02 } : {}}
          whileTap={hasPlan ? { scale: 0.98 } : {}}
          className={`
            flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shrink-0
            ${hasPlan 
              ? 'bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 shadow-lg shadow-gray-900/10 dark:shadow-white/10' 
              : 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600 cursor-not-allowed'}
          `}
          title={hasPlan ? "Download Startup Blueprint as Markdown" : "Generate a plan first"}
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Export</span>
        </motion.button>

      </div>
    </div>
  );
};

export default Header;