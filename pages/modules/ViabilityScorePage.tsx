import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Activity, TrendingUp, Shield, AlertTriangle, BarChart3, Zap, CheckCircle2 } from 'lucide-react';

const ViabilityScorePage: React.FC = () => {
  const dimensions = [
    { name: 'Market Timing', description: 'Is the market ready for your solution?' },
    { name: 'Competition', description: 'How crowded is the space?' },
    { name: 'Funding Potential', description: 'How investable is your idea?' },
    { name: 'Technical Feasibility', description: 'Can you actually build it?' },
    { name: 'Team Fit', description: 'Do you have the right skills?' },
    { name: 'Revenue Model', description: 'Is monetization clear?' },
    { name: 'Scalability', description: 'Can it grow efficiently?' },
    { name: 'Defensibility', description: 'What\'s your moat?' },
    { name: 'Regulatory Risk', description: 'Any compliance concerns?' },
    { name: 'Exit Potential', description: 'What\'s the endgame?' },
  ];

  const features = [
    {
      icon: BarChart3,
      title: '10-Dimension Analysis',
      description: 'Comprehensive scoring across market, technical, financial, and strategic dimensions.',
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessment',
      description: 'Identify potential pitfalls and get actionable mitigation strategies.',
    },
    {
      icon: TrendingUp,
      title: 'Benchmark Comparison',
      description: 'See how your idea stacks up against similar successful startups.',
    },
    {
      icon: Shield,
      title: 'Confidence Intervals',
      description: 'Understand the certainty levels behind each score with transparent methodology.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-white dark:from-amber-950/30 dark:via-orange-950/20 dark:to-gray-950">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-6"
          >
            <div className="hidden md:flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg">
              <Activity className="w-8 h-8" />
            </div>
            <div>
              <div className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2">AI Module</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Viability Score
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                Data-driven validation with 10-dimensional scoring across market timing, competition, and funding potential.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 10 Dimensions */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">10 Scoring Dimensions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {dimensions.map((dim, i) => (
            <motion.div
              key={dim.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center"
            >
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">{i + 1}</div>
              <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{dim.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{dim.description}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-500 text-white text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to validate your idea?</h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto">
            Get your 10-dimension viability score in under 60 seconds with our AI-powered analyzer.
          </p>
          <Link
            to="/app?feature=viability-scoring"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-amber-600 font-semibold hover:bg-amber-50 transition-colors"
          >
            Get Viability Score
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViabilityScorePage;
