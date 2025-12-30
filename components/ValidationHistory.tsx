import React, { useState } from 'react';
import { ValidationLog } from '../types';
import SectionCard from './common/SectionCard';
import { Calendar, Filter, CheckCircle2, AlertCircle, XCircle, Target, TrendingUp } from 'lucide-react';

interface ValidationHistoryProps {
  logs: ValidationLog[];
  onSelectLog?: (log: ValidationLog) => void;
}

/**
 * ValidationHistory Component
 * 
 * Displays a timeline of all validation entries with filtering options.
 * Shows chronological progression of validation activities.
 */
const ValidationHistory: React.FC<ValidationHistoryProps> = ({ logs, onSelectLog }) => {
  const [filterType, setFilterType] = useState<'all' | 'assumption_result' | 'decision_point' | 'market_signal'>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  // Filter and sort logs
  const filteredLogs = logs
    .filter((log) => filterType === 'all' || log.type === filterType)
    .sort((a, b) => {
      return sortOrder === 'newest' ? b.timestamp - a.timestamp : a.timestamp - b.timestamp;
    });

  const getLogIcon = (type: ValidationLog['type'], status?: ValidationLog['status']) => {
    if (type === 'assumption_result') {
      if (status === 'validated') return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      if (status === 'broken') return <XCircle className="w-5 h-5 text-red-500" />;
      return <AlertCircle className="w-5 h-5 text-amber-500" />;
    }
    if (type === 'decision_point') return <Target className="w-5 h-5 text-blue-500" />;
    if (type === 'market_signal') return <TrendingUp className="w-5 h-5 text-purple-500" />;
    return <Calendar className="w-5 h-5 text-slate-500" />;
  };

  const getLogTypeLabel = (type: ValidationLog['type']) => {
    return {
      assumption_result: 'Assumption Result',
      decision_point: 'Decision Point',
      market_signal: 'Market Signal'
    }[type];
  };

  const getLogTypeColor = (type: ValidationLog['type']) => {
    return {
      assumption_result: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
      decision_point: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      market_signal: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
    }[type];
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <SectionCard title="Validation Timeline" icon={<Calendar className="w-5 h-5 text-blue-500" />}>
        <div className="space-y-4">
          {/* Filter and Sort Controls */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter by Type
              </label>
              <select
                aria-label="Filter by Type"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as typeof filterType)}
                className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="assumption_result">Assumption Results</option>
                <option value="decision_point">Decision Points</option>
                <option value="market_signal">Market Signals</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Sort Order
              </label>
              <select
                aria-label="Sort Order"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as typeof sortOrder)}
                className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Log Count */}
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Showing {filteredLogs.length} of {logs.length} entries
          </p>
        </div>
      </SectionCard>

      {/* Timeline */}
      {filteredLogs.length > 0 ? (
        <div className="relative space-y-4">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-30"></div>

          {/* Log entries */}
          {filteredLogs.map((log, idx) => (
            <div
              key={log.id}
              onClick={() => onSelectLog?.(log)}
              className="relative pl-16 cursor-pointer group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-12 h-12 flex items-center justify-center">
                <div className="absolute w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-all duration-200">
                  {getLogIcon(log.type, log.status)}
                </div>
              </div>

              {/* Log card */}
              <div className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200">
                {/* Header */}
                <div className="flex items-start justify-between mb-3 gap-3 flex-wrap">
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getLogTypeColor(log.type)}`}>
                    {getLogTypeLabel(log.type)}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {new Date(log.timestamp).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>

                {/* Observation */}
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
                  {log.founderObservation}
                </p>

                {/* Status badge (if applicable) */}
                {log.status && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Status:</span>
                    <span
                      className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 ${
                        log.status === 'validated'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : log.status === 'broken'
                            ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                            : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                      }`}
                    >
                      {log.status === 'validated' && <CheckCircle2 className="w-3 h-3" />}
                      {log.status === 'broken' && <XCircle className="w-3 h-3" />}
                      {log.status === 'validating' && <AlertCircle className="w-3 h-3" />}
                      {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                    </span>
                  </div>
                )}

                {/* Decision (if applicable) */}
                {log.decision && (
                  <div className="mb-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-800">
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">Decision:</p>
                    <p className="text-sm text-blue-900 dark:text-blue-200">{log.decision}</p>
                  </div>
                )}

                {/* Metrics (if applicable) */}
                {log.metrics && Object.keys(log.metrics).length > 0 && (
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Metrics:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {Object.entries(log.metrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
                        >
                          <p className="text-xs text-slate-600 dark:text-slate-400 font-medium capitalize">
                            {key.replace(/_/g, ' ')}
                          </p>
                          <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">
                            {String(value)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <SectionCard title="No Entries" icon={<Calendar className="w-5 h-5 text-slate-400" />}>
          <div className="text-center py-8 text-slate-500 dark:text-slate-400">
            <p className="font-medium">No validation entries found</p>
            <p className="text-sm mt-1">Start logging your validation observations in the Validation Tab</p>
          </div>
        </SectionCard>
      )}
    </div>
  );
};

export default ValidationHistory;
