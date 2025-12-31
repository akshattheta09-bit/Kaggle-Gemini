import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Mic, MessageSquare, Presentation, Target, FileText, Zap, CheckCircle2 } from 'lucide-react';

const PitchScriptsPage: React.FC = () => {
  const features = [
    {
      icon: Presentation,
      title: 'Pitch Deck Outline',
      description: 'Investor-ready slide structure with key talking points for each section of your pitch.',
    },
    {
      icon: MessageSquare,
      title: 'Elevator Pitch',
      description: '30-second, 60-second, and 2-minute versions tailored for different contexts.',
    },
    {
      icon: Target,
      title: 'VC Scripts',
      description: 'Full conversation scripts for intro calls, deep dives, and partner meetings.',
    },
    {
      icon: FileText,
      title: 'Objection Handling',
      description: 'Prepared responses for the 15 most common investor objections in your space.',
    },
  ];

  const deliverables = [
    '10-slide pitch deck outline',
    '3 elevator pitch versions',
    'Intro call script',
    'Deep dive script',
    '15 objection responses',
    'Follow-up email templates',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-50 via-violet-50 to-white dark:from-indigo-950/30 dark:via-violet-950/20 dark:to-gray-950">
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
            <div className="hidden md:flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg">
              <Mic className="w-8 h-8" />
            </div>
            <div>
              <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">AI Module</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Pitch Scripts
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                Close every deal with AI-generated investor narratives, elevator pitches, and funding deck outlines.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">What You Get</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deliverables */}
      <div className="bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Deliverables</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to nail your pitch?</h2>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
            Generate your complete pitch toolkit in under 60 seconds with our AI-powered generator.
          </p>
          <Link
            to="/app?feature=pitch-scripts"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors"
          >
            Generate Pitch Scripts
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PitchScriptsPage;
