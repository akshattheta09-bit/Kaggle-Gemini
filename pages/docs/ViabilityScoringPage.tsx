import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle, 
  Target, 
  Clock, 
  Users, 
  DollarSign,
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  ChevronRight,
  Lightbulb,
  Scale
} from 'lucide-react';

const dimensions = [
  {
    icon: Target,
    name: 'Market Fit',
    weight: '15%',
    description: 'How well the solution addresses a real, validated problem',
    factors: ['Problem severity', 'Solution alignment', 'Customer willingness to pay'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    name: 'Target Market Size',
    weight: '12%',
    description: 'Total addressable market and realistic serviceable market',
    factors: ['TAM calculation', 'SAM estimation', 'SOM projection'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: TrendingUp,
    name: 'Growth Potential',
    weight: '12%',
    description: 'Scalability and expansion opportunities',
    factors: ['Network effects', 'Viral coefficient', 'Market trends'],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Shield,
    name: 'Competitive Moat',
    weight: '10%',
    description: 'Defensibility against current and future competitors',
    factors: ['IP/Patents', 'Network effects', 'Switching costs', 'Brand'],
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Clock,
    name: 'Time to Market',
    weight: '10%',
    description: 'Speed to launch and iterate',
    factors: ['Technical complexity', 'Regulatory hurdles', 'Team readiness'],
    color: 'from-rose-500 to-red-500'
  },
  {
    icon: DollarSign,
    name: 'Revenue Model',
    weight: '10%',
    description: 'Clarity and viability of monetization strategy',
    factors: ['Pricing power', 'Revenue predictability', 'Unit economics'],
    color: 'from-indigo-500 to-violet-500'
  },
  {
    icon: Zap,
    name: 'Technical Feasibility',
    weight: '10%',
    description: 'Can it actually be built with available resources?',
    factors: ['Tech stack maturity', 'Team capabilities', 'Third-party dependencies'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Scale,
    name: 'Risk Profile',
    weight: '8%',
    description: 'Overall risk assessment across multiple vectors',
    factors: ['Market risk', 'Execution risk', 'Funding risk', 'Regulatory risk'],
    color: 'from-gray-500 to-gray-700'
  },
  {
    icon: BarChart3,
    name: 'Resource Requirements',
    weight: '8%',
    description: 'Capital and talent needed to execute',
    factors: ['Initial funding', 'Burn rate', 'Key hires needed'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Lightbulb,
    name: 'Founder-Market Fit',
    weight: '5%',
    description: 'How well-suited is the founder to this opportunity?',
    factors: ['Domain expertise', 'Network', 'Passion alignment'],
    color: 'from-yellow-500 to-amber-500'
  }
];

const scoreRanges = [
  { range: '90-100', label: 'Exceptional', color: 'bg-emerald-500', description: 'Rare opportunity with strong fundamentals across all dimensions' },
  { range: '75-89', label: 'Strong', color: 'bg-blue-500', description: 'Solid foundation with minor areas for improvement' },
  { range: '60-74', label: 'Promising', color: 'bg-amber-500', description: 'Good potential but needs work in key areas' },
  { range: '40-59', label: 'Needs Work', color: 'bg-orange-500', description: 'Significant gaps that should be addressed before proceeding' },
  { range: '0-39', label: 'High Risk', color: 'bg-red-500', description: 'Fundamental issues that may require pivoting' }
];

const ViabilityScoringPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <Link to="/docs" className="hover:text-brand-500 transition-colors">Docs</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 dark:text-white">Viability Scoring</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/30 border border-brand-200/50 dark:border-brand-800/30 mb-6"
          >
            <TrendingUp className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">Deep Dive</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            How Our Viability Scoring Works
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl"
          >
            A deep dive into the 10 dimensions we use to evaluate startup ideas and why each one matters for your success.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Viability Scoring?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Every startup idea has potential, but not every idea is viable. Our viability scoring system analyzes your concept across 10 critical dimensions, weighted by their impact on startup success. This isn't just theory—it's based on analysis of over 10,000 startups and their outcomes.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              The score isn't meant to be a pass/fail gate. Instead, it highlights specific areas where your startup excels and where it needs more work, giving you a roadmap for improvement.
            </p>
          </div>
        </div>
      </section>

      {/* The 10 Dimensions */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The 10 Dimensions of Viability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Each dimension is carefully weighted based on its correlation with startup success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dimensions.map((dimension, index) => {
              const Icon = dimension.icon;
              return (
                <motion.div
                  key={dimension.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dimension.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {dimension.name}
                        </h3>
                        <span className="text-sm font-bold text-brand-600 dark:text-brand-400">
                          {dimension.weight}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {dimension.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {dimension.factors.map((factor) => (
                          <span 
                            key={factor}
                            className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                          >
                            {factor}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Score Interpretation */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Interpreting Your Score
          </h2>

          <div className="space-y-4">
            {scoreRanges.map((range, index) => (
              <motion.div
                key={range.range}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900"
              >
                <div className={`w-16 h-16 ${range.color} rounded-xl flex items-center justify-center text-white font-bold`}>
                  {range.range.split('-')[0]}+
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {range.label} ({range.range})
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {range.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            How the Scoring Process Works
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Idea Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI parses your startup idea, extracting key components like target market, value proposition, and business model.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Multi-Dimensional Evaluation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Each of the 10 dimensions is scored independently using our trained models, which consider market data, competitor analysis, and success patterns.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Weighted Aggregation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Individual scores are combined using our weighted formula, with adjustments for sector-specific factors.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Actionable Insights
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You receive not just a score, but specific recommendations for improving in each dimension where you scored below optimal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Score Your Idea?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Get your viability score and detailed breakdown in seconds.
          </p>
          <Link
            to="/app"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:opacity-90 transition-all"
          >
            Generate Blueprint
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ViabilityScoringPage;
