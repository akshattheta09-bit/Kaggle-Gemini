import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Code, TrendingUp, CheckCircle2, Rocket, Sparkles, LucideIcon, ArrowRight } from 'lucide-react';

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const capabilities: Capability[] = [
  {
    icon: Target,
    title: "Strategy & Market",
    description: "Comprehensive market analysis, positioning, TAM, competitive landscape, and defensible moat.",
    color: "brand"
  },
  {
    icon: Code,
    title: "Technical Scaffolding",
    description: "Recommended tech stack, API design, database schema, and project structure ready to build.",
    color: "blue"
  },
  {
    icon: TrendingUp,
    title: "Viability Scoring",
    description: "10-dimensional analysis: TAM, feasibility, competition, revenue potential, technical risk, and more.",
    color: "green"
  },
  {
    icon: CheckCircle2,
    title: "Product Definition",
    description: "Core features, user journey, MVP scope, and feature prioritization aligned to strategy.",
    color: "purple"
  },
  {
    icon: Rocket,
    title: "Execution Roadmap",
    description: "Week-by-week plan from Day 1 through Month 1, with clear priorities and milestones.",
    color: "orange"
  },
  {
    icon: Sparkles,
    title: "Pitch & Narrative",
    description: "Two versions of a compelling 1-minute pitch: one for investors, one in founder voice.",
    color: "pink"
  }
];

const colorClassMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  brand: { bg: 'bg-blue-50 dark:bg-blue-950/30', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800', glow: 'group-hover:shadow-lg group-hover:shadow-blue-500/10' },
  blue: { bg: 'bg-cyan-50 dark:bg-cyan-950/30', text: 'text-cyan-600 dark:text-cyan-400', border: 'border-cyan-200 dark:border-cyan-800', glow: 'group-hover:shadow-lg group-hover:shadow-cyan-500/10' },
  green: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800', glow: 'group-hover:shadow-lg group-hover:shadow-emerald-500/10' },
  purple: { bg: 'bg-purple-50 dark:bg-purple-950/30', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800', glow: 'group-hover:shadow-lg group-hover:shadow-purple-500/10' },
  orange: { bg: 'bg-orange-50 dark:bg-orange-950/30', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800', glow: 'group-hover:shadow-lg group-hover:shadow-orange-500/10' },
  pink: { bg: 'bg-pink-50 dark:bg-pink-950/30', text: 'text-pink-600 dark:text-pink-400', border: 'border-pink-200 dark:border-pink-800', glow: 'group-hover:shadow-lg group-hover:shadow-pink-500/10' }
};

/**
 * Capabilities Section - Apple Level Design
 * 
 * Clean, minimal showcase with:
 * - Simple, elegant cards
 * - Monochromatic icon treatment
 * - Subtle hover states
 * - Maximum clarity and readability
 */
const Capabilities: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-32 px-8 bg-white dark:bg-black">
      <motion.div className="max-w-6xl mx-auto" style={{ opacity }}>
        {/* Section Header */}
        <motion.div 
          className="mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
            Everything you need
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            A complete operating system for building companies. Every dimension, reasoned through from first principles.
          </p>
        </motion.div>

        {/* Capability Cards Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const colorClasses = colorClassMap[capability.color];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className={`relative p-6 rounded-2xl border ${colorClasses.border} bg-white dark:bg-slate-900 transition-all duration-500 ${colorClasses.glow} hover:border-opacity-80`}>
                  {/* Icon Container */}
                  <motion.div 
                    className={`w-14 h-14 rounded-xl ${colorClasses.bg} flex items-center justify-center mb-5 ${colorClasses.text}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-opacity-90 transition-colors">
                    {capability.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {capability.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <ArrowRight className={`w-5 h-5 ${colorClasses.text}`} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Capabilities;
