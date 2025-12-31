import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, PenLine, Brain, Download, Rocket, CheckCircle2 } from 'lucide-react';

interface HowItWorksPageProps {
  onGetStarted?: () => void;
}

const steps = [
  {
    number: '01',
    icon: PenLine,
    title: 'Describe Your Idea',
    description: 'Enter your sector and describe your startup idea in plain language. No templates, no forms—just tell us what you want to build.',
    details: [
      'Choose from 20+ industry sectors',
      'Free-form idea description',
      'Optional constraints and preferences',
      'Upload existing notes or research'
    ],
    color: 'brand'
  },
  {
    number: '02',
    icon: Brain,
    title: 'AI Generates Blueprint',
    description: 'Our Gemini-powered AI analyzes your input against thousands of successful startups and market data to create a comprehensive plan.',
    details: [
      '11 interconnected views generated',
      'Market-specific insights and data',
      'Viability scoring with rationale',
      'Pitch scripts ready for investors'
    ],
    color: 'purple'
  },
  {
    number: '03',
    icon: Download,
    title: 'Review & Export',
    description: 'Browse through strategy, product, tech, financials, and more. Edit inline, add notes, and export in your preferred format.',
    details: [
      'Edit any section inline',
      'Export to Markdown or PDF',
      'Share with team or advisors',
      'Version history for changes'
    ],
    color: 'emerald'
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Execute & Iterate',
    description: 'Use the roadmap to guide your first 30 days. Come back to validate assumptions and update your plan as you learn.',
    details: [
      'Day 1, Week 1, Month 1 milestones',
      'Validation experiment tracking',
      'Re-generate sections as you pivot',
      'Build-measure-learn feedback loop'
    ],
    color: 'amber'
  }
];

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <motion.div
          className="absolute top-20 left-1/3 w-96 h-96 rounded-full bg-brand-100/40 dark:bg-brand-900/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-6"
          >
            <Sparkles className="w-3 h-3" />
            Simple Process
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            From idea to blueprint{' '}
            <span className="gradient-text">in minutes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Four simple steps to transform your startup idea into a comprehensive, investor-ready business plan.
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-12 mb-24 last:mb-0 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual */}
                <div className="flex-1 relative">
                  <div className="absolute -top-8 -left-8 text-[120px] font-bold text-gray-100 dark:text-gray-800/50 select-none leading-none">
                    {step.number}
                  </div>
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12 border border-gray-200 dark:border-gray-700">
                    <div className={`w-20 h-20 rounded-3xl bg-${step.color}-100 dark:bg-${step.color}-900/30 flex items-center justify-center mx-auto`}>
                      <Icon className={`w-10 h-10 text-${step.color}-600 dark:text-${step.color}-400`} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Timeline visual */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Your first 30 days
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { day: 'Day 1', title: 'Generate & Review', desc: 'Create your blueprint and review all 11 views' },
              { day: 'Week 1', title: 'Validate & Refine', desc: 'Test key assumptions and update your plan' },
              { day: 'Month 1', title: 'Launch & Learn', desc: 'Ship your MVP and track metrics' }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
              >
                <div className="text-sm font-bold text-brand-600 dark:text-brand-400 mb-2">
                  {milestone.day}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to start building?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of founders who've accelerated their journey with AutoFounder.
          </p>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            Generate Your Blueprint
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
