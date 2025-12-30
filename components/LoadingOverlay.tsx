import React, { useEffect, useState } from 'react';
import { Rocket, Loader2 } from 'lucide-react';

interface LoadingOverlayProps {
  isLoading: boolean;
}

const STEPS = [
  "Analyzing your idea...",
  "Designing the product...",
  "Scoring viability...",
  "Planning the execution roadmap...",
  "Writing your pitch..."
];

/**
 * LoadingOverlay Component
 * 
 * Displays a full-screen semi-transparent overlay when the app is generating content.
 * Cycles through a list of "thinking" steps to keep the user engaged.
 */
const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Cycle through steps while loading
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      setCurrentStepIndex(0);
      interval = setInterval(() => {
        setCurrentStepIndex((prev) => (prev + 1) % STEPS.length);
      }, 2500); // Switch step every 2.5 seconds
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 dark:bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 border border-slate-100 dark:border-slate-800 flex flex-col items-center animate-[bounce_0.5s_ease-out_reverse]">
        
        {/* Logo & Header */}
        <div className="bg-brand-50 dark:bg-brand-900/20 p-4 rounded-full mb-4 ring-8 ring-brand-50/50 dark:ring-brand-900/20">
          <Rocket className="w-8 h-8 text-brand-600 dark:text-brand-400 animate-pulse" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">AutoFounder</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium">AutoFounder is building your startup...</p>
        
        {/* Animated Steps List */}
        <div className="w-full space-y-4 mb-8 pl-4 border-l-2 border-slate-100 dark:border-slate-800">
          {STEPS.map((step, index) => {
            const isActive = index === currentStepIndex;
            return (
              <div 
                key={index} 
                className={`flex items-center gap-3 transition-all duration-500 ${isActive ? 'opacity-100 translate-x-1' : 'opacity-40'}`}
              >
                <div className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${isActive ? 'bg-brand-600 dark:bg-brand-400 scale-125 shadow-[0_0_8px_rgba(14,165,233,0.6)]' : 'bg-slate-300 dark:bg-slate-600'}
                `}></div>
                <span className={`
                  text-sm font-medium transition-colors duration-300
                  ${isActive ? 'text-slate-800 dark:text-slate-200' : 'text-slate-400 dark:text-slate-600'}
                `}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom Spinner */}
        <div className="flex gap-2 items-center text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest bg-slate-50 dark:bg-slate-800 py-2 px-4 rounded-full">
           <Loader2 className="w-3 h-3 animate-spin" />
           <span>Processing</span>
        </div>

      </div>
    </div>
  );
};

export default LoadingOverlay;