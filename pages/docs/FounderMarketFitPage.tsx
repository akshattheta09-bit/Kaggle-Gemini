import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Heart,
  Target,
  Lightbulb,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Star,
  Compass
} from 'lucide-react';

const fitIndicators = [
  {
    category: 'Strong Fit Signals',
    icon: CheckCircle,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
    borderColor: 'border-emerald-200 dark:border-emerald-800/30',
    signals: [
      'You\'ve personally experienced the problem you\'re solving',
      'You have 5+ years of relevant industry experience',
      'Your network is filled with potential customers',
      'You wake up excited to work on this problem',
      'You have unfair advantages (skills, access, insights) others don\'t',
      'You\'ve already been building solutions to this problem (even informally)'
    ]
  },
  {
    category: 'Weak Fit Signals',
    icon: XCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-50 dark:bg-red-950/20',
    borderColor: 'border-red-200 dark:border-red-800/30',
    signals: [
      'You chose this idea primarily because it seems profitable',
      'You have no relevant experience or network in this space',
      'You can\'t articulate why YOU should build this vs. anyone else',
      'You\'re not excited about the customers you\'d serve',
      'Your motivation is external (impress others, prove something)',
      'You\'d quit if a better opportunity came along'
    ]
  },
  {
    category: 'Warning Signs',
    icon: AlertTriangle,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/20',
    borderColor: 'border-amber-200 dark:border-amber-800/30',
    signals: [
      'You\'re pursuing this to escape something (job, situation)',
      'You\'ve never talked to a potential customer',
      'Your co-founder has different vision or commitment level',
      'You\'re building what you think users want, not what they said they need',
      'You\'re avoiding hard parts of the business (sales, support)',
      'You can\'t commit to 3+ years on this problem'
    ]
  }
];

const foundersStories = [
  {
    name: 'Stewart Butterfield',
    company: 'Slack',
    story: 'Built internal tools for his gaming company. Realized the communication tool they built was more valuable than the game itself.',
    fit: 'Deep experience building remote teams + frustration with existing tools'
  },
  {
    name: 'Whitney Wolfe Herd',
    company: 'Bumble',
    story: 'After experiencing the dating app world at Tinder, saw how women were treated and built a platform that gave them control.',
    fit: 'Personal experience + insider knowledge + mission alignment'
  },
  {
    name: 'Brian Chesky',
    company: 'Airbnb',
    story: 'Couldn\'t afford rent and rented out air mattresses. Discovered a massive market hiding in plain sight.',
    fit: 'Personal pain point + design background + hospitality interest'
  },
  {
    name: 'Melanie Perkins',
    company: 'Canva',
    story: 'Taught design software and saw students struggle. Built what became Canva to make design accessible.',
    fit: 'Teacher perspective + design passion + observed user frustration daily'
  }
];

const questions = [
  {
    question: 'Why are you the right person to solve this problem?',
    subtext: 'Beyond skills—what unique experiences, insights, or access do you have?',
    icon: Star
  },
  {
    question: 'Would you work on this even if it wasn\'t a startup?',
    subtext: 'True founder-market fit means the problem matters to you intrinsically.',
    icon: Heart
  },
  {
    question: 'Can you commit 7-10 years to this space?',
    subtext: 'Building something meaningful takes time. Are you in for the long haul?',
    icon: Target
  },
  {
    question: 'Do you have unfair advantages in this market?',
    subtext: 'Network, expertise, patents, or access that competitors can\'t easily replicate.',
    icon: Compass
  },
  {
    question: 'Are your potential customers people you genuinely enjoy?',
    subtext: 'You\'ll spend thousands of hours with these people. Choose wisely.',
    icon: Users
  },
  {
    question: 'What insight do you have that others don\'t?',
    subtext: 'The best founders see something the market has missed.',
    icon: Lightbulb
  }
];

const FounderMarketFitPage: React.FC = () => {
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
            <span className="text-gray-900 dark:text-white">Founder-Market Fit</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/30 border border-brand-200/50 dark:border-brand-800/30 mb-6"
          >
            <Users className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">Strategy Guide</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Finding Founder-Market Fit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl"
          >
            Why the best founders choose problems they're uniquely suited to solve—and how to find yours.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What is Founder-Market Fit?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Founder-market fit is the alignment between a founder's background, skills, passion, and network—and the market they're entering. It's the reason why some founders seem to have an unfair advantage: they're not just building a business, they're solving a problem they were born to solve.
            </p>
            <div className="bg-brand-50 dark:bg-brand-950/20 rounded-2xl p-6 border border-brand-200 dark:border-brand-800/30">
              <p className="text-gray-700 dark:text-gray-300 italic mb-0">
                "The best founders don't find ideas—ideas find them. They've been living with the problem for years before they decide to solve it."
              </p>
              <p className="text-sm text-brand-600 dark:text-brand-400 mt-4 mb-0">
                — Research from 10,000+ startup analyses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fit Indicators */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Signals to Look For
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {fitIndicators.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${category.bgColor} rounded-2xl p-6 border ${category.borderColor}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-6 h-6 ${category.color}`} />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {category.signals.map((signal, signalIndex) => (
                      <li key={signalIndex} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className={`w-1.5 h-1.5 rounded-full ${category.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                        {signal}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Questions to Ask */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            6 Questions to Test Your Fit
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            Be honest with yourself. The answers matter more than you think.
          </p>

          <div className="space-y-4">
            {questions.map((q, index) => {
              const Icon = q.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {q.question}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {q.subtext}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Stories */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Founder-Market Fit in Action
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            Real examples of founders who found their perfect problem.
          </p>

          <div className="space-y-6">
            {foundersStories.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center text-white font-bold">
                    {founder.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {founder.name}
                    </h3>
                    <span className="text-sm text-brand-600 dark:text-brand-400">
                      {founder.company}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {founder.story}
                </p>
                <div className="bg-brand-50 dark:bg-brand-950/20 rounded-xl p-3">
                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
                    Their Fit:
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    {founder.fit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Analyze Your Founder-Market Fit
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            AutoFounder evaluates founder-market fit as part of every viability analysis.
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

export default FounderMarketFitPage;
