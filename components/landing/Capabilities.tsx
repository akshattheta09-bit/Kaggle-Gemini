import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Code, TrendingUp, CheckCircle2, Rocket, Sparkles, LucideIcon } from 'lucide-react';

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

const colorClassMap: Record<string, { bg: string; text: string; glow: string }> = {
  brand: { bg: 'bg-brand-100 dark:bg-brand-500/10', text: 'text-brand-600 dark:text-brand-400', glow: 'group-hover:shadow-brand-500/20' },
  blue: { bg: 'bg-blue-100 dark:bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400', glow: 'group-hover:shadow-blue-500/20' },
  green: { bg: 'bg-green-100 dark:bg-green-500/10', text: 'text-green-600 dark:text-green-400', glow: 'group-hover:shadow-green-500/20' },
  purple: { bg: 'bg-purple-100 dark:bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400', glow: 'group-hover:shadow-purple-500/20' },
  orange: { bg: 'bg-orange-100 dark:bg-orange-500/10', text: 'text-orange-600 dark:text-orange-400', glow: 'group-hover:shadow-orange-500/20' },
  pink: { bg: 'bg-pink-100 dark:bg-pink-500/10', text: 'text-pink-600 dark:text-pink-400', glow: 'group-hover:shadow-pink-500/20' }
};

/**
 * Capabilities Section
 * 
 * Showcases AutoFounder's core features with:
 * - 3D card transformations on hover
 * - Parallax scroll effects
 * - Staggered animations
 * - Depth and layering
 */
const Capabilities: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <motion.div className="max-w-7xl mx-auto" style={{ opacity }}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Capabilities
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            A complete system for startup building
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Every dimension of building a company, reasoned through from first principles.
          </p>
        </motion.div>

        {/* Capability Cards Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ y }}>
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const colorClasses = colorClassMap[capability.color];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, rotateX: 5, rotateY: 5 }}
                className="group relative"
                style={{ perspective: "1000px" }}
              >
                <div className={`relative p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm transition-all duration-500 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-2xl ${colorClasses.glow}`}>
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 via-brand-50/0 to-brand-50/0 group-hover:from-brand-50/50 group-hover:via-brand-50/20 group-hover:to-transparent dark:group-hover:from-brand-500/10 dark:group-hover:via-brand-500/5 dark:group-hover:to-transparent rounded-2xl transition-all duration-500 -z-10"></div>

                  {/* Icon Container */}
                  <motion.div 
                    className={`w-14 h-14 rounded-xl ${colorClasses.bg} flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Icon className={`w-7 h-7 ${colorClasses.text}`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-brand-500">
                      <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
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
