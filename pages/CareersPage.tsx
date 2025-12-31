import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Briefcase, MapPin, Clock, Users, Heart, 
  Zap, Globe, Coffee, Sparkles, ChevronRight
} from 'lucide-react';

interface CareersPageProps {
  onApply?: (role: string) => void;
}

const openRoles = [
  {
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    description: 'Build the core product that thousands of founders rely on daily.'
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Craft intuitive experiences that make complex planning feel effortless.'
  },
  {
    title: 'ML Engineer',
    department: 'Engineering',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    description: 'Improve our AI models and build new capabilities for blueprint generation.'
  },
  {
    title: 'Growth Marketing Manager',
    department: 'Marketing',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Own acquisition channels and help more founders discover AutoFounder.'
  },
  {
    title: 'Customer Success Lead',
    department: 'Operations',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Help enterprise customers and accelerators get maximum value from the platform.'
  }
];

const benefits = [
  {
    icon: Globe,
    title: 'Remote-First',
    description: 'Work from anywhere. We optimize for async and outcomes, not hours.'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Premium health, dental, and vision. Plus $500/month wellness stipend.'
  },
  {
    icon: Zap,
    title: 'Learning Budget',
    description: '$2,000/year for books, courses, and conferences.'
  },
  {
    icon: Coffee,
    title: 'Home Office',
    description: '$1,500 setup budget and $100/month for coworking if you want it.'
  },
  {
    icon: Users,
    title: 'Team Gatherings',
    description: 'Quarterly off-sites in great locations to connect in person.'
  },
  {
    icon: Sparkles,
    title: 'Meaningful Equity',
    description: 'Early employees get significant ownership. We win together.'
  }
];

const CareersPage: React.FC<CareersPageProps> = ({ onApply }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <motion.div
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-amber-100/40 dark:bg-amber-900/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-6"
          >
            <Briefcase className="w-3 h-3" />
            We're Hiring
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Build the future of{' '}
            <span className="gradient-text">startup planning</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Join a small, high-impact team helping thousands of founders turn ideas into successful companies.
          </motion.p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                How we work
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  We're a team of 12 spread across 8 time zones. We ship fast, 
                  communicate clearly, and trust each other to do great work.
                </p>
                <p>
                  No politics, no meetings-that-should-have-been-emails, no 
                  arbitrary deadlines. Just focused work on problems that matter.
                </p>
                <p>
                  We hire people who take ownership, move fast, and care deeply 
                  about the founders we serve.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-50 dark:bg-brand-900/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-brand-600 dark:text-brand-400 mb-1">12</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Team members</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Time zones</div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Remote</div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-1">4x</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Yearly off-sites</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We take care of our team so they can take care of founders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {openRoles.length} roles open across the company
            </p>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onApply?.(role.title)}
                className="group cursor-pointer p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {role.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Don't see the right role?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            We're always interested in meeting exceptional people. Send us a note and tell us how you'd contribute.
          </p>
          <button
            onClick={() => onApply?.('general')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            Send Open Application
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
