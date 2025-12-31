import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Book, MessageCircle, Video, FileText, 
  ChevronRight, ChevronDown, HelpCircle, Zap, ArrowRight
} from 'lucide-react';

interface HelpCenterPageProps {
  onContact?: () => void;
}

const categories = [
  {
    title: 'Getting Started',
    icon: Zap,
    articles: [
      { title: 'Creating your first blueprint', views: '2.4k' },
      { title: 'Understanding viability scores', views: '1.8k' },
      { title: 'Navigating the dashboard', views: '1.2k' },
      { title: 'Exporting your plan', views: '980' }
    ]
  },
  {
    title: 'Account & Billing',
    icon: FileText,
    articles: [
      { title: 'Managing your subscription', views: '1.5k' },
      { title: 'Updating payment methods', views: '890' },
      { title: 'Understanding plan limits', views: '760' },
      { title: 'Canceling your account', views: '540' }
    ]
  },
  {
    title: 'Features & Usage',
    icon: Book,
    articles: [
      { title: 'Using the pitch script generator', views: '2.1k' },
      { title: 'Customizing your roadmap', views: '1.7k' },
      { title: 'Working with financial projections', views: '1.4k' },
      { title: 'Sharing blueprints with your team', views: '1.1k' }
    ]
  },
  {
    title: 'Troubleshooting',
    icon: HelpCircle,
    articles: [
      { title: 'Blueprint generation taking too long', views: '890' },
      { title: 'Export not downloading', views: '670' },
      { title: 'API rate limit errors', views: '540' },
      { title: 'Login and authentication issues', views: '450' }
    ]
  }
];

const popularArticles = [
  'How to generate a complete startup blueprint',
  'Understanding the 10-dimension viability scoring',
  'Best practices for pitch scripts',
  'Integrating with Notion',
  'Team collaboration features'
];

const HelpCenterPage: React.FC<HelpCenterPageProps> = ({ onContact }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('Getting Started');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-brand-50 to-white dark:from-brand-950/20 dark:to-gray-950">
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            How can we help?
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto relative"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help articles..."
              className="w-full pl-14 pr-4 py-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-xl text-lg transition-all"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-6 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Book, label: 'Documentation', href: '/docs' },
              { icon: MessageCircle, label: 'Contact Us', href: '/contact' },
              { icon: Video, label: 'Video Tutorials', href: '#videos' },
              { icon: HelpCircle, label: 'FAQs', href: '#faqs' }
            ].map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white text-sm">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
            Popular Articles
          </h2>
          <div className="flex flex-wrap gap-3">
            {popularArticles.map((article, index) => (
              <motion.a
                key={article}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm hover:bg-brand-100 dark:hover:bg-brand-900/30 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
              >
                {article}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Browse by Category
          </h2>
          
          <div className="space-y-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isExpanded = expandedCategory === category.title;
              
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? null : category.title)}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {category.articles.length} articles
                        </p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-gray-100 dark:border-gray-800"
                    >
                      {category.articles.map((article, articleIndex) => (
                        <a
                          key={article.title}
                          href="#"
                          className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                        >
                          <span className="text-gray-700 dark:text-gray-300">
                            {article.title}
                          </span>
                          <span className="text-xs text-gray-400">
                            {article.views} views
                          </span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still need help?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Our support team is available Monday-Friday, 9am-6pm PST.
          </p>
          <button
            onClick={onContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            Contact Support
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HelpCenterPage;
