import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

const steps: WorkflowStep[] = [
  {
    number: "01",
    title: "Describe Your Idea",
    description: "Tell AutoFounder what you're building, why now, and what problem you're solving. Include your sector to ground the reasoning."
  },
  {
    number: "02",
    title: "System Reasons",
    description: "AutoFounder combines market analysis, product thinking, financial modeling, and technical feasibility into a single coherent blueprint."
  },
  {
    number: "03",
    title: "Get Your Blueprint",
    description: "Export a complete startup plan: strategy doc, product specs, tech scaffolding, execution timeline, viability analysis, and pitch scripts."
  },
  {
    number: "04",
    title: "Execute",
    description: "Everything you need to move from thinking to building. Share with co-founders, developers, or investors. Iterate from real data, not assumptions."
  }
];

/**
 * Workflow Section - Apple Level Design
 * 
 * Clean process with:
 * - Simple numbered steps
 * - Minimal visual elements
 * - Clear hierarchy and readability
 * - Elegant spacing
 */
const Workflow: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative py-32 px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="mb-24 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
            How it works
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            Strategy informs product. Product informs roadmap. Everything threads together into one coherent plan.
          </p>
        </motion.div>

        {/* Workflow Steps - Simplified */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-8 items-start"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-semibold text-sm">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
