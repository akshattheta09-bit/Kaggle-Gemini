import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Rocket, Target, Users, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onContact?: () => void;
}

const values = [
  {
    icon: Heart,
    title: 'Founder Obsession',
    description: 'We build for builders. Every feature ships because a founder asked for it.'
  },
  {
    icon: Target,
    title: 'Clarity Over Complexity',
    description: 'Simple tools that do one thing exceptionally well. No feature bloat.'
  },
  {
    icon: Rocket,
    title: 'Speed as a Feature',
    description: 'Founders are time-poor. We optimize for minutes, not hours.'
  },
  {
    icon: Users,
    title: 'Trust by Default',
    description: 'Your data is yours. Security and privacy are non-negotiable.'
  }
];

const team = [
  {
    name: 'Alex Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former YC founder. Built and sold two B2B SaaS companies.',
    image: 'AC'
  },
  {
    name: 'Sarah Kim',
    role: 'CTO & Co-Founder',
    bio: 'Ex-Google AI. Led ML teams at Scale AI and Anthropic.',
    image: 'SK'
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Product',
    bio: 'Product at Notion and Figma. Obsessed with craft.',
    image: 'MJ'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Growth',
    bio: 'Growth at Stripe and Segment. Loves founder stories.',
    image: 'ER'
  }
];

const stats = [
  { value: '18,400+', label: 'Founders served' },
  { value: '$2.4B', label: 'Raised by users' },
  { value: '127', label: 'Countries' },
  { value: '4.9/5', label: 'Satisfaction' }
];

const AboutPage: React.FC<AboutPageProps> = ({ onContact }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-brand-100/40 dark:bg-brand-900/20 blur-3xl"
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
            Our Story
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Built by founders,{' '}
            <span className="gradient-text">for founders</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            We started AutoFounder because we wished it existed when we were building our first companies. Now it does.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Make world-class startup strategy accessible to every builder on the planet. We believe the best ideas can come from anywhere—and they deserve the same quality planning that well-funded startups get.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What we believe
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet the team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A small team with big ambitions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {member.image}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-brand-600 dark:text-brand-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {member.bio}
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
            Want to join us?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            We're always looking for exceptional people who care deeply about helping founders succeed.
          </p>
          <button
            onClick={onContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            View Open Roles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
