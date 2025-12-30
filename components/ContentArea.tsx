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
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950/50 p-8 text-center h-full transition-colors duration-200 relative overflow-hidden">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)', backgroundSize: '32px 32px' }}>
        </div>

        {/* Minimal Empty State - No Card/Tile */}
        <div className="relative animate-fadeIn opacity-40 hover:opacity-60 transition-opacity duration-700 flex flex-col items-center">
          <div className="mb-6 p-4 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
             <Sparkles className="w-8 h-8 text-slate-400 dark:text-slate-500" />
          </div>
          <p className="text-sm font-medium text-slate-400 dark:text-slate-500 tracking-widest uppercase">
            Awaiting Input
          </p>
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