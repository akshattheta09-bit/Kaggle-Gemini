import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, MessageCircle, Calendar, Award, Hash, 
  ArrowRight, ExternalLink, Sparkles
} from 'lucide-react';

interface CommunityPageProps {
  onJoin?: () => void;
}

const channels = [
  {
    name: '#introductions',
    description: 'Introduce yourself and your startup',
    members: '4.2k'
  },
  {
    name: '#show-and-tell',
    description: 'Share your blueprints and launches',
    members: '3.8k'
  },
  {
    name: '#feedback',
    description: 'Get feedback on your ideas',
    members: '2.9k'
  },
  {
    name: '#technical',
    description: 'API questions and integrations',
    members: '1.5k'
  },
  {
    name: '#jobs',
    description: 'Hiring and opportunities',
    members: '1.2k'
  }
];

const events = [
  {
    title: 'Weekly Office Hours',
    description: 'Live Q&A with the AutoFounder team',
    schedule: 'Every Thursday, 2pm PST',
    type: 'recurring'
  },
  {
    title: 'Founder AMA: Sarah from Stripe',
    description: 'How she built and scaled developer tools',
    schedule: 'Jan 15, 2026 • 11am PST',
    type: 'upcoming'
  },
  {
    title: 'Blueprint Workshop',
    description: 'Live walkthrough of advanced features',
    schedule: 'Jan 22, 2026 • 10am PST',
    type: 'upcoming'
  }
];

const contributors = [
  { name: 'Alex M.', contributions: 47, badge: 'Top Contributor' },
  { name: 'Jessica K.', contributions: 38, badge: 'Template Creator' },
  { name: 'David R.', contributions: 31, badge: 'Community Helper' },
  { name: 'Maria L.', contributions: 28, badge: 'Bug Hunter' }
];

const stats = [
  { value: '12,400+', label: 'Community members' },
  { value: '5,200+', label: 'Blueprints shared' },
  { value: '890+', label: 'Templates created' },
  { value: '24/7', label: 'Active discussions' }
];

const CommunityPage: React.FC<CommunityPageProps> = ({ onJoin }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-purple-100/40 dark:bg-purple-900/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-6"
          >
            <Users className="w-3 h-3" />
            Community
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Build together with{' '}
            <span className="gradient-text">12,000+ founders</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Share ideas, get feedback, and learn from other builders in our active Slack community.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={onJoin}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4A154B] text-white font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
            </svg>
            Join Slack Community
          </motion.button>
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

      {/* Channels */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Active Channels
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Find the right conversation for your needs
            </p>
          </div>

          <div className="space-y-4">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Hash className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {channel.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {channel.description}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  {channel.members} members
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Live sessions to learn and connect
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-brand-500" />
                  <span className="text-xs font-medium text-brand-600 dark:text-brand-400">
                    {event.type === 'recurring' ? 'Recurring' : 'Upcoming'}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {event.description}
                </p>
                <p className="text-xs text-gray-400">
                  {event.schedule}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Top Contributors
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Community members who go above and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {contributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {contributor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {contributor.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2">
                  {contributor.contributions} contributions
                </p>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium">
                  <Award className="w-3 h-3" />
                  {contributor.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-brand-600">
        <div className="max-w-2xl mx-auto text-center">
          <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to join the conversation?
          </h3>
          <p className="text-white/80 mb-8">
            Connect with founders who understand the journey.
          </p>
          <button
            onClick={onJoin}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-purple-600 font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            Join the Community
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
