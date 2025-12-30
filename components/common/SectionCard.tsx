import React from 'react';

interface SectionCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

/**
 * SectionCard Component
 * 
 * A consistent card wrapper for different sections of the plan.
 * Uses a refined border and subtle shadow for a "premium" feel.
 */
const SectionCard: React.FC<SectionCardProps> = ({ title, icon, children, className = '', noPadding = false }) => (
  <div className={`
    bg-white dark:bg-slate-900 
    rounded-xl 
    shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-none
    border border-slate-200/60 dark:border-slate-800 
    overflow-hidden 
    transition-all duration-200 
    hover:border-slate-300 dark:hover:border-slate-700
    ${className}
  `}>
    <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3 bg-white dark:bg-slate-900">
      {icon && <div className="text-slate-500 dark:text-slate-400">{icon}</div>}
      <h3 className="font-semibold text-slate-800 dark:text-slate-100 tracking-tight text-[15px]">{title}</h3>
    </div>
    <div className={noPadding ? '' : 'p-6'}>
      {children}
    </div>
  </div>
);

export default SectionCard;