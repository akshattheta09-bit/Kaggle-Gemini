import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export interface ContentPageData {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  sections: {
    title: string;
    body: string;
    bullets?: string[];
  }[];
  cta?: string;
  category?: string;
}

interface ContentPageProps {
  page: ContentPageData;
  onBack?: () => void;
  onCTA?: () => void;
}

/**
 * ContentPage Component - Premium Page Template
 * 
 * Renders any content page with consistent Apple-level styling
 */
const ContentPage: React.FC<ContentPageProps> = ({ page, onBack, onCTA }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <motion.div
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-brand-100/40 dark:bg-brand-900/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Back button */}
          {onBack && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={onBack}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </motion.button>
          )}

          {/* Category badge */}
          {page.category && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-6"
            >
              {page.category}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            {page.title}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-600 dark:text-brand-400 font-medium mb-6"
          >
            {page.tagline}
          </motion.p>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
          >
            {page.summary}
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {page.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Section number */}
              <div className="absolute -left-4 md:-left-16 top-0 text-7xl font-bold text-gray-100 dark:text-gray-800/50 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  {section.body}
                </p>

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-3">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {page.cta && (
        <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to get started?
              </h3>
              <button
                onClick={onCTA}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
              >
                {page.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ContentPage;
