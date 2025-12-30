import React, { useState } from 'react';
import { ValidationLog, ExtractedAssumption } from '../types';
import SectionCard from './common/SectionCard';
import { Plus, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

interface ValidationTabProps {
  validationLogs: ValidationLog[];
  extractedAssumptions: ExtractedAssumption[];
  onAddLog: (log: Omit<ValidationLog, 'id' | 'timestamp'>) => void;
}

/**
 * ValidationTab Component
 * 
 * Allows founders to log validation observations and results.
 * Provides a simple interface to track assumption testing, market signals, and decisions.
 */
const ValidationTab: React.FC<ValidationTabProps> = ({
  validationLogs,
  extractedAssumptions,
  onAddLog
}) => {
  const [logType, setLogType] = useState<'assumption_result' | 'decision_point' | 'market_signal'>('assumption_result');
  const [selectedAssumptionId, setSelectedAssumptionId] = useState<string>('');
  const [founderObservation, setFounderObservation] = useState('');
  const [status, setStatus] = useState<'validating' | 'validated' | 'broken'>('validating');
  const [metrics, setMetrics] = useState('');
  const [decision, setDecision] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!founderObservation.trim()) {
      alert('Please enter an observation');
      return;
    }

    if (logType === 'assumption_result' && !selectedAssumptionId) {
      alert('Please select an assumption');
      return;
    }

    const newLog: Omit<ValidationLog, 'id' | 'timestamp'> = {
      type: logType,
      founderObservation: founderObservation.trim(),
      ...(logType === 'assumption_result' && {
        assumptionId: selectedAssumptionId,
        status: status as 'validating' | 'validated' | 'broken'
      }),
      ...(logType === 'decision_point' && { decision: decision.trim() }),
      ...(metrics.trim() && { metrics: parseMetricsInput(metrics) })
    };

    onAddLog(newLog);

    // Reset form
    setFounderObservation('');
    setMetrics('');
    setDecision('');
    setStatus('validating');
    setSelectedAssumptionId('');
  };

  const parseMetricsInput = (input: string): Record<string, string | number> => {
    const result: Record<string, string | number> = {};
    const pairs = input.split(',');
    pairs.forEach((pair) => {
      const [key, value] = pair.split(':').map((s) => s.trim());
      if (key && value) {
        const numValue = parseFloat(value);
        result[key] = isNaN(numValue) ? value : numValue;
      }
    });
    return result;
  };

  return (
    <div className="space-y-6">
      {/* Log Entry Form */}
      <SectionCard title="Log Validation Entry" icon={<Plus className="w-5 h-5 text-blue-500" />}>
        <div className="space-y-5">
          {/* Log Type Selection */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Entry Type
            </label>
            <div className="flex gap-3 flex-wrap">
              {[
                { value: 'assumption_result' as const, label: 'Assumption Result' },
                { value: 'decision_point' as const, label: 'Decision Point' },
                { value: 'market_signal' as const, label: 'Market Signal' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setLogType(option.value)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    logType === option.value
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Assumption Selection (for assumption_result) */}
          {logType === 'assumption_result' && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Which Assumption?
              </label>
              <select
                value={selectedAssumptionId}
                onChange={(e) => setSelectedAssumptionId(e.target.value)}
                className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select an assumption...</option>
                {extractedAssumptions.map((assumption) => (
                  <option key={assumption.id} value={assumption.id}>
                    {assumption.category}: {assumption.text.substring(0, 60)}...
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Status Selection (for assumption_result) */}
          {logType === 'assumption_result' && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                Status
              </label>
              <div className="flex gap-3">
                {[
                  { value: 'validating' as const, label: 'Validating', icon: AlertCircle, color: 'text-amber-500' },
                  { value: 'validated' as const, label: 'Validated', icon: CheckCircle2, color: 'text-green-500' },
                  { value: 'broken' as const, label: 'Broken', icon: XCircle, color: 'text-red-500' }
                ].map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.value}
                      onClick={() => setStatus(option.value)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                        status === option.value
                          ? 'bg-slate-200 dark:bg-slate-700 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-950'
                          : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-150 dark:hover:bg-slate-750'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${option.color}`} />
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Decision Input (for decision_point) */}
          {logType === 'decision_point' && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Decision Question
              </label>
              <input
                type="text"
                value={decision}
                onChange={(e) => setDecision(e.target.value)}
                placeholder="e.g., Should we pivot to B2B or stay B2C?"
                className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Founder Observation */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Your Observation
            </label>
            <textarea
              value={founderObservation}
              onChange={(e) => setFounderObservation(e.target.value)}
              placeholder="Describe what you learned, observed, or decided..."
              rows={4}
              className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Optional Metrics */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Metrics (Optional)
            </label>
            <input
              type="text"
              value={metrics}
              onChange={(e) => setMetrics(e.target.value)}
              placeholder="e.g., users_acquired: 42, conversion_rate: 3.2%, churn: 5"
              className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Format: key:value, key:value
            </p>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 shadow-sm"
          >
            {isSubmitting ? 'Adding...' : 'Log Entry'}
          </button>
        </div>
      </SectionCard>

      {/* Latest Entries Preview */}
      {validationLogs.length > 0 && (
        <SectionCard title={`Recent Entries (${validationLogs.length})`} icon={<AlertCircle className="w-5 h-5 text-slate-500" />}>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {validationLogs.slice().reverse().slice(0, 5).map((log, idx) => (
              <div
                key={log.id}
                className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 capitalize">
                    {log.type.replace('_', ' ')}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {new Date(log.timestamp).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{log.founderObservation}</p>
                {log.status && (
                  <div className="mt-2 flex items-center gap-2">
                    {log.status === 'validated' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                    {log.status === 'broken' && <XCircle className="w-4 h-4 text-red-500" />}
                    {log.status === 'validating' && <AlertCircle className="w-4 h-4 text-amber-500" />}
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 capitalize">
                      {log.status}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionCard>
      )}
    </div>
  );
};

export default ValidationTab;
