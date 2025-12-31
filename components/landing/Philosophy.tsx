import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Boxes, Users, TrendingUp, Lock } from 'lucide-react';

interface Principle {
  icon: React.ElementType;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

const principles: Principle[] = [
  {
    icon: Shield,
    title: "First-Principles Thinking",
    description: "Every recommendation is grounded in proven startup frameworks and real market data, not generic templates.",
    stat: "500+",
    statLabel: "YC patterns analyzed"
  },
  {
    icon: Zap,
    title: "Brutally Honest",
    description: "Our AI pushes back on weak ideas and highlights genuine risks. No false validation—only actionable truth.",
    stat: "10/10",
    statLabel: "Viability dimensions"
  },
  {
    icon: Boxes,
    title: "Immediately Executable",
    description: "Outputs are ready-to-use blueprints you can hand to engineers, designers, and investors today.",
    stat: "< 3min",
    statLabel: "To full blueprint"
  }
];

const trustSignals = [
  { icon: Users, value: "18,400+", label: "Founders served" },
  { icon: TrendingUp, value: "$2.4B", label: "Raised by users" },
  { icon: Lock, value: "SOC 2", label: "Compliant" },
];

/**
 * Philosophy Section - Apple-Level Premium Design
 * 
 * Features:
 * - Trust-building content
 * - Clean card design
 * - Stats and social proof
 * - Elegant typography
 */
const Philosophy: React.FC = () => {
  return (
    <section 
      id="philosophy"
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-gray-100/80 dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-900" />
      
      {/* Subtle gradient accents */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-200 dark:bg-brand-900 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Shield className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Our principles</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Built by founders,{' '}
            <span className="gradient-text">for founders</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Designed by founders who've launched, raised capital, and scaled. This system embodies battle-tested patterns from companies that shipped.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group h-full p-8 rounded-3xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl border border-black/[0.04] dark:border-white/[0.06] shadow-glass transition-all duration-500 hover:bg-white/90 dark:hover:bg-gray-900/70 hover:shadow-apple-lg hover:-translate-y-2">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800/80 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Icon className="w-7 h-7 text-gray-700 dark:text-gray-300" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {principle.description}
                  </p>

                  {/* Stat */}
                  {principle.stat && (
                    <div className="pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {principle.stat}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {principle.statLabel}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Signals */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-gray-200/50 dark:border-gray-800/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {trustSignals.map((signal, index) => {
            const Icon = signal.icon;
            
            return (
              <motion.div
                key={signal.label}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">
                    {signal.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {signal.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
