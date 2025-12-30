import React, { useState } from 'react';
import { DecisionReasoning as DecisionReasoningType } from '../types';
import SectionCard from './common/SectionCard';
import { Brain, ArrowRight, Lightbulb, AlertCircle } from 'lucide-react';

interface DecisionReasoningProps {
  reasoning?: DecisionReasoningType;
  isLoading?: boolean;
  error?: string | null;
  onNewDecision?: () => void;
}

/**
 * DecisionReasoning Component
 * 
 * Displays AI-generated reasoning about a decision point in the startup's journey.
 * Presents two paths with recommendation and cascade effects.
 */
const DecisionReasoning: React.FC<DecisionReasoningProps> = ({
  reasoning,
  isLoading = false,
  error = null,
  onNewDecision
}) => {
  const [selectedPath, setSelectedPath] = useState<'A' | 'B' | null>(null);

  if (isLoading) {
    return (
      <SectionCard title="Decision Reasoning" icon={<Brain className="w-5 h-5 text-purple-500" />}>
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin mb-4">
            <Brain className="w-8 h-8 text-purple-500 opacity-50" />
          </div>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            Analyzing decision options...
          </p>
        </div>
      </SectionCard>
    );
  }

  if (error) {
    return (
      <SectionCard title="Decision Reasoning" icon={<Brain className="w-5 h-5 text-purple-500" />}>
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 flex gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900 dark:text-red-200 text-sm">Error generating reasoning</p>
            <p className="text-red-800 dark:text-red-300 text-sm mt-1">{error}</p>
          </div>
        </div>
      </SectionCard>
    );
  }

  if (!reasoning) {
    return (
      <SectionCard title="Decision Reasoning" icon={<Brain className="w-5 h-5 text-purple-500" />}>
        <div className="text-center py-8 text-slate-500 dark:text-slate-400">
          <Brain className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="font-medium">No decision to analyze yet</p>
          <p className="text-sm mt-1">Add a decision point to your validation logs to get AI-powered reasoning</p>
        </div>
      </SectionCard>
    );
  }

  return (
    <div className="space-y-6">
      {/* Decision Question */}
      <SectionCard title="Decision Analysis" icon={<Brain className="w-5 h-5 text-purple-500" />}>
        <div className="mb-6">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-lg">
            {reasoning.question}
          </h4>
        </div>

        {/* Two Paths */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Path A */}
          <div
            onClick={() => setSelectedPath('A')}
            className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
              selectedPath === 'A'
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
            }`}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                A
              </div>
              <p className="text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
                {reasoning.paths.pathA}
              </p>
            </div>
            {selectedPath === 'A' && (
              <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
                <p className="text-xs text-blue-700 dark:text-blue-300 font-semibold">Path Selected</p>
              </div>
            )}
          </div>

          {/* Path B */}
          <div
            onClick={() => setSelectedPath('B')}
            className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
              selectedPath === 'B'
                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
            }`}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                B
              </div>
              <p className="text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
                {reasoning.paths.pathB}
              </p>
            </div>
            {selectedPath === 'B' && (
              <div className="mt-4 pt-4 border-t border-emerald-200 dark:border-emerald-800">
                <p className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">Path Selected</p>
              </div>
            )}
          </div>
        </div>

        {/* Recommendation */}
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200 dark:border-purple-800">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">Recommendation</h4>
              <p className="text-purple-800 dark:text-purple-300 leading-relaxed">
                {reasoning.recommendation}
              </p>
            </div>
          </div>
        </div>

        {/* Cascade Effects */}
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-amber-500" />
            Cascade Effects
          </h4>
          <div className="space-y-3">
            {reasoning.cascadeEffects.map((effect, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 flex gap-3"
              >
                <span className="text-amber-600 dark:text-amber-400 font-bold flex-shrink-0">
                  {idx + 1}.
                </span>
                <p className="text-amber-900 dark:text-amber-200 text-sm leading-relaxed">{effect}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionCard>

      {/* Action Button */}
      {onNewDecision && (
        <div className="flex justify-center">
          <button
            onClick={onNewDecision}
            className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Analyze Another Decision
          </button>
        </div>
      )}
    </div>
  );
};

export default DecisionReasoning;
