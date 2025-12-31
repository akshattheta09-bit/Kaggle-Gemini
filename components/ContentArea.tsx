import React, { useState } from 'react';
import { StartupPlan, TabId, ValidationLog, ExtractedAssumption } from '../types';
import Header from './Header';
import { 
  StrategyView, 
  ProductView, 
  MVPView, 
  AppScaffoldView, 
  FinancialsView, 
  AssetsView,
  MockupsView,
  ViabilityView,
  ExecutionRoadmapView,
  PitchScriptView,
  ValidationTabView
} from './TabViews';
import { AlertTriangle, Sparkles, Lightbulb, ArrowRight } from 'lucide-react';
import { downloadBlueprint } from '../services/exportService';
import { motion } from 'framer-motion';

interface ContentAreaProps {
  plan: StartupPlan | null;
  isGenerating: boolean;
  error: string | null;
  validationLogs?: ValidationLog[];
  extractedAssumptions?: ExtractedAssumption[];
  onAddValidationLog?: (log: Omit<ValidationLog, 'id' | 'timestamp'>) => void;
}

/**
 * ContentArea Component - Apple-Level Premium Design
 * 
 * Features:
 * - Elegant empty and error states
 * - Smooth tab transitions
 * - Premium card designs
 * - Clean typography
 */
const ContentArea: React.FC<ContentAreaProps> = ({ 
  plan, 
  error, 
  validationLogs = [],
  extractedAssumptions = [],
  onAddValidationLog
}) => {
  const [activeTab, setActiveTab] = useState<TabId>('strategy');

  const handleDownload = () => {
    if (plan) {
      downloadBlueprint(plan);
    }
  };

  // State 1: Error
  if (error) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center h-full mesh-bg">
        <motion.div 
          className="max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-red-500 dark:text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Generation Failed
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            We couldn't generate your startup blueprint. This might be due to a network issue or API limit. Please try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-opacity"
          >
            Try again
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    );
  }

  // State 2: Empty (User hasn't generated anything yet)
  if (!plan) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center h-full mesh-bg relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-100/50 dark:bg-brand-900/20 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-purple-100/40 dark:bg-purple-900/15 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
        </div>

        <motion.div 
          className="relative max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div 
            className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-glow"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-12 h-12 text-white" />
          </motion.div>

          {/* Text */}
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to build your blueprint
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Describe your startup idea in the sidebar to generate a comprehensive business plan—complete with strategy, product specs, technical architecture, and investor pitch.
          </p>

          {/* Tips */}
          <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-black/[0.04] dark:border-white/[0.06]">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <span className="font-semibold text-gray-900 dark:text-white">Tips for best results</span>
            </div>
            <ul className="text-left space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-brand-500 mt-1">•</span>
                <span>Be specific about the problem you're solving</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 mt-1">•</span>
                <span>Define your target customer clearly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 mt-1">•</span>
                <span>Mention what makes your approach unique</span>
              </li>
            </ul>
          </div>

          {/* Status */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            System ready
          </div>
        </motion.div>
      </div>
    );
  }

  // State 3: Displaying Results
  return (
    <div className="flex-1 flex flex-col h-full bg-gray-50/50 dark:bg-gray-950/50 overflow-hidden">
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        onDownload={handleDownload}
        hasPlan={!!plan}
      />

      {/* Main content scrollable area */}
      <div className="flex-1 overflow-y-auto">
        <motion.div 
          className="max-w-5xl mx-auto p-6 md:p-10 pb-20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          key={activeTab}
        >
          {activeTab === 'strategy' && <StrategyView data={plan.strategy} />}
          {activeTab === 'viability' && <ViabilityView data={plan.viability} />}
          {activeTab === 'execution-roadmap' && <ExecutionRoadmapView data={plan.executionRoadmap} />}
          {activeTab === 'pitch-script' && <PitchScriptView data={plan.pitchScript} />}
          {activeTab === 'product' && <ProductView data={plan.product} />}
          {activeTab === 'mvp' && <MVPView data={plan.mvp} />}
          {activeTab === 'mockups' && <MockupsView data={plan.mockups} />}
          {activeTab === 'app-scaffold' && <AppScaffoldView data={plan.appScaffold} />}
          {activeTab === 'financials' && <FinancialsView data={plan.financials} />}
          {activeTab === 'assets' && <AssetsView data={plan.assets} />}
          {activeTab === 'validation' && onAddValidationLog && (
            <ValidationTabView 
              data={plan} 
              validationLogs={validationLogs} 
              extractedAssumptions={extractedAssumptions} 
              onAddValidationLog={onAddValidationLog} 
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContentArea;