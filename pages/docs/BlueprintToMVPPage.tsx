import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Calendar,
  CheckCircle,
  Circle,
  ChevronRight,
  ArrowRight,
  Target,
  Code,
  Users,
  Megaphone,
  BarChart3,
  Zap
} from 'lucide-react';

const weeks = [
  {
    week: 1,
    title: 'Foundation & Validation',
    description: 'Set up your infrastructure and validate core assumptions',
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
    tasks: [
      { task: 'Review and refine your AutoFounder blueprint', critical: true },
      { task: 'Set up project management (Linear, Notion, or Asana)', critical: false },
      { task: 'Create development environment', critical: true },
      { task: 'Conduct 5 customer discovery interviews', critical: true },
      { task: 'Define success metrics for MVP', critical: true },
      { task: 'Set up analytics foundation (Mixpanel, Amplitude)', critical: false }
    ],
    deliverable: 'Validated problem statement + dev environment ready'
  },
  {
    week: 2,
    title: 'Core Architecture',
    description: 'Build the foundation your product will stand on',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    tasks: [
      { task: 'Finalize tech stack decisions', critical: true },
      { task: 'Set up CI/CD pipeline', critical: true },
      { task: 'Design database schema', critical: true },
      { task: 'Create API structure', critical: true },
      { task: 'Implement authentication', critical: true },
      { task: 'Set up error tracking (Sentry)', critical: false }
    ],
    deliverable: 'Working backend with auth + database'
  },
  {
    week: 3,
    title: 'Core Feature Build',
    description: 'Build the one feature that defines your MVP',
    icon: Zap,
    color: 'from-emerald-500 to-teal-500',
    tasks: [
      { task: 'Implement core value-delivery feature', critical: true },
      { task: 'Build essential UI components', critical: true },
      { task: 'Write integration tests for core flow', critical: true },
      { task: 'Conduct 3 more customer interviews', critical: false },
      { task: 'Create seed data for testing', critical: false },
      { task: 'Document API endpoints', critical: false }
    ],
    deliverable: 'Core feature working end-to-end'
  },
  {
    week: 4,
    title: 'User Experience Polish',
    description: 'Make it feel good, not just work',
    icon: Users,
    color: 'from-amber-500 to-orange-500',
    tasks: [
      { task: 'Implement onboarding flow', critical: true },
      { task: 'Add loading states and micro-interactions', critical: false },
      { task: 'Implement error handling UI', critical: true },
      { task: 'Add responsive design', critical: true },
      { task: 'Create empty states', critical: false },
      { task: 'Internal dogfooding—use your product daily', critical: true }
    ],
    deliverable: 'Polished user experience for core flow'
  },
  {
    week: 5,
    title: 'Beta Testing',
    description: 'Get real users and real feedback',
    icon: BarChart3,
    color: 'from-rose-500 to-red-500',
    tasks: [
      { task: 'Recruit 10-20 beta users', critical: true },
      { task: 'Set up feedback collection system', critical: true },
      { task: 'Monitor analytics daily', critical: true },
      { task: 'Fix critical bugs immediately', critical: true },
      { task: 'Conduct user interviews with beta testers', critical: true },
      { task: 'Prioritize feedback for launch version', critical: true }
    ],
    deliverable: 'Beta feedback synthesized + bugs fixed'
  },
  {
    week: 6,
    title: 'Launch Preparation',
    description: 'Everything needed for a successful launch',
    icon: Megaphone,
    color: 'from-indigo-500 to-violet-500',
    tasks: [
      { task: 'Create landing page', critical: true },
      { task: 'Write launch content (blog post, Twitter thread)', critical: true },
      { task: 'Set up payment processing (if applicable)', critical: true },
      { task: 'Prepare Product Hunt launch', critical: false },
      { task: 'Email beta users about launch', critical: true },
      { task: 'Final QA pass', critical: true }
    ],
    deliverable: 'Launch-ready product + marketing assets'
  }
];

const bonusTips = [
  {
    title: 'Cut Scope Ruthlessly',
    description: 'If you\'re not embarrassed by v1, you launched too late. Focus on one thing done well.'
  },
  {
    title: 'Ship Daily',
    description: 'Deploy to production every day. Small, frequent releases beat big bang launches.'
  },
  {
    title: 'Talk to Users Weekly',
    description: 'Schedule at least 3 user conversations per week. Real feedback beats assumptions.'
  },
  {
    title: 'Measure What Matters',
    description: 'Pick one north star metric and optimize for it. Ignore vanity metrics.'
  }
];

const BlueprintToMVPPage: React.FC = () => {
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
            <span className="text-gray-900 dark:text-white">Blueprint to MVP</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/30 border border-brand-200/50 dark:border-brand-800/30 mb-6"
          >
            <Rocket className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">Execution Guide</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            From Blueprint to MVP in 30 Days
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl"
          >
            A step-by-step guide to executing your AutoFounder roadmap. Week by week, task by task.
          </motion.p>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-12 px-6 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between overflow-x-auto pb-4">
            {weeks.map((week, index) => {
              const Icon = week.icon;
              return (
                <div key={week.week} className="flex items-center">
                  <div className="flex flex-col items-center min-w-[100px]">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${week.color} flex items-center justify-center text-white mb-2`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Week {week.week}</span>
                  </div>
                  {index < weeks.length - 1 && (
                    <div className="w-12 h-0.5 bg-gray-200 dark:bg-gray-700 mx-2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weekly Breakdown */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {weeks.map((week, weekIndex) => {
              const Icon = week.icon;
              return (
                <motion.div
                  key={week.week}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: weekIndex * 0.1 }}
                  className="relative"
                >
                  {/* Week Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${week.color} flex items-center justify-center text-white flex-shrink-0`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-bold text-brand-600 dark:text-brand-400">
                          WEEK {week.week}
                        </span>
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">Days {(week.week - 1) * 7 + 1}–{week.week * 7}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {week.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {week.description}
                      </p>
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="ml-[4.5rem] space-y-3">
                    {week.tasks.map((item, taskIndex) => (
                      <div 
                        key={taskIndex}
                        className={`flex items-start gap-3 p-3 rounded-xl ${
                          item.critical 
                            ? 'bg-brand-50 dark:bg-brand-950/20 border border-brand-200 dark:border-brand-800/30' 
                            : 'bg-gray-50 dark:bg-gray-900'
                        }`}
                      >
                        {item.critical ? (
                          <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${item.critical ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400'}`}>
                          {item.task}
                        </span>
                        {item.critical && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 ml-auto">
                            Critical
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Deliverable */}
                  <div className="ml-[4.5rem] mt-4 p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800/30">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                      Week {week.week} Deliverable
                    </span>
                    <p className="text-sm text-emerald-800 dark:text-emerald-200 mt-1">
                      {week.deliverable}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bonus Tips */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Execution Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bonusTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Build?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Generate your detailed execution roadmap with AutoFounder.
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

export default BlueprintToMVPPage;
