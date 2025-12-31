import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PenLine, Brain, Download, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

interface WorkflowStep {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  accentColor: string;
}

const steps: WorkflowStep[] = [
  {
    number: "01",
    icon: PenLine,
    title: "Describe your vision",
    description: "Share your startup idea in plain language. Include the problem, your target audience, and what makes your approach unique.",
    details: ["Problem statement", "Target market", "Unique angle"],
    accentColor: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    icon: Brain,
    title: "AI analyzes & creates",
    description: "Our AI synthesizes market intelligence, product frameworks, and technical patterns to build your comprehensive blueprint.",
    details: ["Market analysis", "Product strategy", "Technical planning"],
    accentColor: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    icon: Download,
    title: "Review your blueprint",
    description: "Get a complete, investor-ready package with strategy docs, technical specs, financial models, and pitch scripts.",
    details: ["Strategy deck", "Tech architecture", "Pitch scripts"],
    accentColor: "from-emerald-500 to-teal-500"
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch with confidence",
    description: "Execute your roadmap with clear milestones, KPIs, and a week-by-week action plan designed for rapid iteration.",
    details: ["Sprint planning", "KPI tracking", "Growth loops"],
    accentColor: "from-amber-500 to-orange-500"
  }
];

/**
 * Workflow Section - Apple-Level Premium Design
 * 
 * Features:
 * - Elegant vertical timeline
 * - Interactive step cards
 * - Smooth scroll animations
 * - Clean typography hierarchy
 */
const Workflow: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section 
      ref={sectionRef} 
      id="workflow"
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/30 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Simple process</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Four steps to your{' '}
            <span className="gradient-text">blueprint</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            From idea to execution-ready plan in minutes. Each step builds on the previous, creating a coherent strategy.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800" />
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-brand-500 to-purple-500"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  className={`relative flex items-start gap-8 md:gap-16 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.accentColor} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 ml-24 md:ml-0 ${isEven ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'}`}>
                    <motion.div
                      className="group relative p-8 rounded-3xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-black/[0.04] dark:border-white/[0.06] shadow-glass transition-all duration-500 hover:bg-white/80 dark:hover:bg-gray-900/60 hover:shadow-apple-lg hover:-translate-y-1"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Step number */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${step.accentColor} bg-opacity-10 mb-4`}>
                        <span className={`text-xs font-bold bg-gradient-to-r ${step.accentColor} bg-clip-text text-transparent`}>
                          STEP {step.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Details */}
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800/50 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Average time from idea to blueprint: <span className="font-semibold text-gray-900 dark:text-white">2 minutes</span>
          </p>
          <Link to="/app">
            <motion.button
              className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold hover:gap-3 transition-all"
              whileHover={{ x: 5 }}
            >
              Start building now
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
