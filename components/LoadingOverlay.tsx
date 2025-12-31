import React, { useEffect, useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoSvg from '../assets/logo.svg';

interface LoadingOverlayProps {
  isLoading: boolean;
}

const STEPS = [
  { text: "Analyzing your idea", duration: 3000 },
  { text: "Designing product strategy", duration: 2500 },
  { text: "Evaluating market viability", duration: 2500 },
  { text: "Planning execution roadmap", duration: 2500 },
  { text: "Crafting your pitch deck", duration: 2500 },
  { text: "Finalizing blueprint", duration: 2000 }
];

/**
 * LoadingOverlay Component - Apple-Level Premium Design
 * 
 * Features:
 * - Elegant progress animation
 * - Step completion indicators
 * - Smooth transitions
 * - Premium glassmorphism
 */
const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Cycle through steps while loading
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isLoading) {
      setCurrentStepIndex(0);
      setCompletedSteps([]);
      
      const advanceStep = (stepIndex: number) => {
        if (stepIndex < STEPS.length - 1) {
          timeout = setTimeout(() => {
            setCompletedSteps(prev => [...prev, stepIndex]);
            setCurrentStepIndex(stepIndex + 1);
            advanceStep(stepIndex + 1);
          }, STEPS[stepIndex].duration);
        }
      };
      
      advanceStep(0);
    }
    return () => clearTimeout(timeout);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/60 backdrop-blur-md"
      >
        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-500/20 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 max-w-md w-full mx-4 border border-white/20"
        >
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <motion.div 
              className="w-16 h-16 mx-auto mb-5 flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src={logoSvg} 
                alt="AutoFounder Logo" 
                className="w-16 h-16 drop-shadow-glow"
              />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Building Your Blueprint
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Our AI is crafting your comprehensive startup plan
            </p>
          </div>
          
          {/* Progress Steps */}
          <div className="space-y-3 mb-8">
            {STEPS.map((step, index) => {
              const isCompleted = completedSteps.includes(index);
              const isActive = index === currentStepIndex;
              const isPending = index > currentStepIndex;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    flex items-center gap-3 p-3 rounded-xl transition-all duration-300
                    ${isActive ? 'bg-brand-50 dark:bg-brand-900/20' : ''}
                    ${isPending ? 'opacity-40' : 'opacity-100'}
                  `}
                >
                  {/* Status indicator */}
                  <div className={`
                    w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300
                    ${isCompleted ? 'bg-emerald-500' : ''}
                    ${isActive ? 'bg-brand-500' : ''}
                    ${isPending ? 'bg-gray-200 dark:bg-gray-700' : ''}
                  `}>
                    {isCompleted ? (
                      <Check className="w-3.5 h-3.5 text-white" />
                    ) : isActive ? (
                      <Loader2 className="w-3.5 h-3.5 text-white animate-spin" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
                    )}
                  </div>
                  
                  {/* Step text */}
                  <span className={`
                    text-sm font-medium transition-colors duration-300
                    ${isActive ? 'text-brand-700 dark:text-brand-300' : ''}
                    ${isCompleted ? 'text-gray-700 dark:text-gray-300' : ''}
                    ${isPending ? 'text-gray-400 dark:text-gray-600' : ''}
                  `}>
                    {step.text}
                  </span>

                  {/* Progress bar for active step */}
                  {isActive && (
                    <motion.div 
                      className="flex-1 h-1 bg-brand-100 dark:bg-brand-900/30 rounded-full overflow-hidden ml-2"
                    >
                      <motion.div 
                        className="h-full bg-brand-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: step.duration / 1000, ease: "linear" }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom status */}
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="font-medium">Powered by Gemini AI</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingOverlay;