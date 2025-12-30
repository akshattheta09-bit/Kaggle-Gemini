import React from 'react';
import { ValidationDashboard as ValidationDashboardType, ExtractedAssumption } from '../types';
import SectionCard from './common/SectionCard';
import { AlertCircle, CheckCircle2, XCircle, TrendingDown } from 'lucide-react';

interface ValidationDashboardProps {
  dashboard: ValidationDashboardType;
  onSelectAssumption?: (assumption: ExtractedAssumption) => void;
}

/**
 * AssumptionItem Component
 * Displays a single assumption with its status and details.
 */
const AssumptionItem: React.FC<{
  assumption: ExtractedAssumption;
  status: 'validating' | 'at-risk' | 'broken';
  onClick?: () => void;
}> = ({ assumption, status, onClick }) => {
  const statusConfig = {
    validating: { icon: AlertCircle, color: 'text-amber-500', bgColor: 'bg-amber-50 dark:bg-amber-950/30', borderColor: 'border-amber-200 dark:border-amber-800' },
    'at-risk': { icon: AlertCircle, color: 'text-orange-500', bgColor: 'bg-orange-50 dark:bg-orange-950/30', borderColor: 'border-orange-200 dark:border-orange-800' },
    broken: { icon: XCircle, color: 'text-red-500', bgColor: 'bg-red-50 dark:bg-red-950/30', borderColor: 'border-red-200 dark:border-red-800' }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg border ${config.bgColor} ${config.borderColor} cursor-pointer hover:shadow-md transition-all duration-200`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${config.color} flex-shrink-0 mt-0.5`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1 gap-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
              {assumption.category}
            </span>
            <span className={`text-xs px-2 py-1 rounded font-medium ${
              assumption.criticality === 'core'
                ? 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-200'
                : 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200'
            }`}>
              {assumption.criticality === 'core' ? 'Core' : 'Helpful'}
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {assumption.text}
          </p>
          <div className="mt-2 text-xs text-slate-500 dark:text-slate-500">
            Confidence: {assumption.confidence}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * ValidationDashboard Component
 * 
 * Provides a high-level view of assumption status across three categories:
 * - Validating (green): Assumptions currently being tested
 * - At-Risk (orange): Assumptions with concerning signals
 * - Broken (red): Assumptions that have failed validation
 */
const ValidationDashboard: React.FC<ValidationDashboardProps> = ({ dashboard, onSelectAssumption }) => {
  const totalAssumptions =
    dashboard.validatingAssumptions.length +
    dashboard.atRiskAssumptions.length +
    dashboard.brokenAssumptions.length;

  const validatingCount = dashboard.validatingAssumptions.length;
  const atRiskCount = dashboard.atRiskAssumptions.length;
  const brokenCount = dashboard.brokenAssumptions.length;

  const healthScore = totalAssumptions === 0 ? 100 : ((validatingCount / totalAssumptions) * 100);

  return (
    <div className="space-y-6">
      {/* Health Overview */}
      <SectionCard
        title="Assumption Health Score"
        icon={<TrendingDown className="w-5 h-5 text-blue-500" />}
      >
        <div className="space-y-6">
          {/* Main Health Indicator */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90 drop-shadow-sm">
                  <circle cx="64" cy="64" r="56" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="8" fill="none" />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                    className={
                      healthScore >= 70
                        ? 'text-green-500'
                        : healthScore >= 40
                          ? 'text-amber-500'
                          : 'text-red-500'
                    }
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - healthScore / 100)}`}
                    style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">
                    {Math.round(healthScore)}%
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Healthy</span>
                </div>
              </div>
            </div>

            {/* Status Summary */}
            <div className="flex-1 grid grid-cols-3 gap-4 w-full md:w-auto">
              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">{validatingCount}</p>
                <p className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">Validating</p>
              </div>

              <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">{atRiskCount}</p>
                <p className="text-xs text-orange-600 dark:text-orange-400 font-medium mt-1">At Risk</p>
              </div>

              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <p className="text-2xl font-bold text-red-700 dark:text-red-300">{brokenCount}</p>
                <p className="text-xs text-red-600 dark:text-red-400 font-medium mt-1">Broken</p>
              </div>
            </div>
          </div>

          {/* Next Decision Point */}
          {dashboard.nextDecisionPoint && (
            <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 font-medium">
                Next Decision Point
              </p>
              <p className="text-slate-900 dark:text-slate-100 font-medium">
                {dashboard.nextDecisionPoint}
              </p>
            </div>
          )}
        </div>
      </SectionCard>

      {/* Validating Assumptions */}
      {validatingCount > 0 && (
        <SectionCard
          title={`Validating (${validatingCount})`}
          icon={<CheckCircle2 className="w-5 h-5 text-green-500" />}
        >
          <div className="space-y-3">
            {dashboard.validatingAssumptions.map((assumption) => (
              <AssumptionItem
                key={assumption.id}
                assumption={assumption}
                status="validating"
                onClick={() => onSelectAssumption?.(assumption)}
              />
            ))}
          </div>
        </SectionCard>
      )}

      {/* At-Risk Assumptions */}
      {atRiskCount > 0 && (
        <SectionCard
          title={`At Risk (${atRiskCount})`}
          icon={<AlertCircle className="w-5 h-5 text-orange-500" />}
        >
          <div className="space-y-3">
            <p className="text-sm text-orange-700 dark:text-orange-300 mb-4 p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
              These assumptions are showing warning signs. Prioritize gathering more data.
            </p>
            {dashboard.atRiskAssumptions.map((assumption) => (
              <AssumptionItem
                key={assumption.id}
                assumption={assumption}
                status="at-risk"
                onClick={() => onSelectAssumption?.(assumption)}
              />
            ))}
          </div>
        </SectionCard>
      )}

      {/* Broken Assumptions */}
      {brokenCount > 0 && (
        <SectionCard
          title={`Broken (${brokenCount})`}
          icon={<XCircle className="w-5 h-5 text-red-500" />}
        >
          <div className="space-y-3">
            <p className="text-sm text-red-700 dark:text-red-300 mb-4 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
              These core assumptions have been invalidated. Consider a pivot or major adjustment.
            </p>
            {dashboard.brokenAssumptions.map((assumption) => (
              <AssumptionItem
                key={assumption.id}
                assumption={assumption}
                status="broken"
                onClick={() => onSelectAssumption?.(assumption)}
              />
            ))}
          </div>
        </SectionCard>
      )}

      {/* Empty State */}
      {totalAssumptions === 0 && (
        <div className="text-center py-12 text-slate-500 dark:text-slate-400">
          <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p className="font-medium">No assumptions extracted yet</p>
          <p className="text-sm mt-1">Generate a plan to get started with validation tracking</p>
        </div>
      )}
    </div>
  );
};

export default ValidationDashboard;
