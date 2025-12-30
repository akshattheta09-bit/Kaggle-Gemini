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
import { AlertTriangle, Sparkles } from 'lucide-react';
import { downloadBlueprint } from '../services/exportService';

interface ContentAreaProps {
  plan: StartupPlan | null;
  isGenerating: boolean;
  error: string | null;
  validationLogs?: ValidationLog[];
  extractedAssumptions?: ExtractedAssumption[];
  onAddValidationLog?: (log: Omit<ValidationLog, 'id' | 'timestamp'>) => void;
}

/**
 * ContentArea Component
 * 
 * Displays the main results panel.
 * Features a refined empty state and error state.
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
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-8 text-center h-full transition-colors duration-200">
        <div className="bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-premium border border-red-100 dark:border-red-900/30 mb-6 max-w-md animate-fadeIn">
          <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500 dark:text-red-400" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Generation Failed</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
            We couldn't generate your startup plan this time. Please check your connection and try again.
          </p>
        </div>
      </div>
    );
  }

  // State 2: Empty (User hasn't generated anything yet)
  if (!plan) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-950/70 dark:to-slate-950 p-8 text-center h-full transition-colors duration-200 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_20%_20%,rgba(94,162,255,0.14),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(0,213,255,0.10),transparent_28%),radial-gradient(circle_at_70%_80%,rgba(97,165,255,0.10),transparent_30%)]" />

        <div className="relative animate-fadeIn flex flex-col items-center gap-4 px-8 py-10 rounded-3xl border border-white/70 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur shadow-[0_18px_70px_rgba(79,140,255,0.12)]">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/25">
             <Sparkles className="w-7 h-7 text-white" />
          </div>
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400 font-semibold">
              Awaiting Input
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
              Add your sector and idea on the left to generate a full blueprint—strategy, product, tech, roadmap, and pitch—in one pass.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
            <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
            <span>System ready</span>
          </div>
        </div>

      </div>
    );
  }

  // State 3: Displaying Results
  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-200">
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        onDownload={handleDownload}
        hasPlan={!!plan}
      />

      {/* Main content scrollable area */}
      <div className="flex-1 overflow-y-auto scroll-smooth">
        <div className="max-w-5xl mx-auto p-6 md:p-10 pb-20 animate-fadeIn space-y-8">
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
          {activeTab === 'validation' && onAddValidationLog && <ValidationTabView data={plan} validationLogs={validationLogs} extractedAssumptions={extractedAssumptions} onAddValidationLog={onAddValidationLog} />}
        </div>
      </div>
    </div>
  );
};

export default ContentArea;