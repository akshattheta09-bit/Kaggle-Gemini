import React from 'react';
import { motion } from 'framer-motion';

interface SectionCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

/**
 * SectionCard Component - Apple-Level Premium Design
 * 
 * Features:
 * - Elegant glassmorphism effect
 * - Smooth hover transitions
 * - Clean typography hierarchy
 * - Subtle gradient borders
 */
const SectionCard: React.FC<SectionCardProps> = ({ title, icon, children, className = '', noPadding = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className={`
      bg-white/80 dark:bg-gray-900/80 
      backdrop-blur-sm
      rounded-2xl 
      shadow-[0_1px_3px_rgba(0,0,0,0.05),0_20px_40px_-20px_rgba(0,0,0,0.1)]
      dark:shadow-[0_1px_3px_rgba(0,0,0,0.2),0_20px_40px_-20px_rgba(0,0,0,0.4)]
      border border-black/[0.04] dark:border-white/[0.06]
      overflow-hidden 
      transition-all duration-300
      hover:shadow-[0_1px_3px_rgba(0,0,0,0.05),0_30px_50px_-20px_rgba(0,0,0,0.15)]
      dark:hover:shadow-[0_1px_3px_rgba(0,0,0,0.2),0_30px_50px_-20px_rgba(0,0,0,0.5)]
      hover:border-black/[0.06] dark:hover:border-white/[0.08]
      ${className}
    `}
  >
    {/* Header */}
    <div className="px-6 py-4 border-b border-black/[0.04] dark:border-white/[0.06] flex items-center gap-3 bg-gray-50/50 dark:bg-gray-800/30">
      {icon && (
        <div className="w-8 h-8 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-black/[0.04] dark:border-white/[0.06] flex items-center justify-center">
          {icon}
        </div>
      )}
      <h3 className="font-semibold text-gray-900 dark:text-white tracking-tight">{title}</h3>
    </div>
    
    {/* Content */}
    <div className={noPadding ? '' : 'p-6'}>
      {children}
    </div>
  </motion.div>
);

export default SectionCard;