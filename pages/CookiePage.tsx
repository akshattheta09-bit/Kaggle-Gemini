import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, BarChart3, Shield, Check, X, ArrowRight, Mail } from 'lucide-react';

interface CookiePageProps {
  lastUpdated?: string;
}

const cookieTypes = [
  {
    id: 'essential',
    name: 'Essential Cookies',
    description: 'Required for the website to function properly. Cannot be disabled.',
    required: true,
    examples: ['Session management', 'Security tokens', 'Load balancing'],
    retention: 'Session or up to 24 hours'
  },
  {
    id: 'functional',
    name: 'Functional Cookies',
    description: 'Remember your preferences and settings for a better experience.',
    required: false,
    examples: ['Language preferences', 'Theme settings', 'Saved form data'],
    retention: 'Up to 1 year'
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website.',
    required: false,
    examples: ['Page views', 'User journeys', 'Feature usage'],
    retention: 'Up to 2 years'
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'Used to deliver relevant advertisements and track campaign effectiveness.',
    required: false,
    examples: ['Ad targeting', 'Conversion tracking', 'Retargeting'],
    retention: 'Up to 2 years'
  }
];

const sections = [
  {
    id: 'what',
    title: 'What Are Cookies?',
    content: `Cookies are small text files stored on your device when you visit websites. They serve various purposes:

• Remember your login status
• Store your preferences
• Help us understand how you use our site
• Enable certain features to work properly

Cookies can be "first-party" (set by us) or "third-party" (set by our partners). They can also be "session" cookies (deleted when you close your browser) or "persistent" cookies (remain until they expire or you delete them).`
  },
  {
    id: 'how',
    title: 'How We Use Cookies',
    content: `AutoFounder uses cookies to:

• Keep you logged in to your account
• Remember your preferences (theme, language)
• Understand which features are most popular
• Improve our service based on usage patterns
• Measure the effectiveness of our marketing
• Prevent fraud and ensure security

We strive to use the minimum cookies necessary to provide a great experience.`
  },
  {
    id: 'third-party',
    title: 'Third-Party Cookies',
    content: `We use services that may set their own cookies:

• Google Analytics: Website traffic analysis
• Stripe: Payment processing
• Intercom: Customer support chat
• PostHog: Product analytics

These services have their own privacy policies. We recommend reviewing them:
• Google Privacy Policy
• Stripe Privacy Policy
• Intercom Privacy Policy
• PostHog Privacy Policy`
  },
  {
    id: 'manage',
    title: 'Managing Cookies',
    content: `You can control cookies in several ways:

Browser Settings:
Most browsers allow you to refuse or delete cookies. Here's how:
• Chrome: Settings → Privacy and Security → Cookies
• Firefox: Settings → Privacy & Security → Cookies
• Safari: Preferences → Privacy → Cookies
• Edge: Settings → Privacy → Cookies

Our Cookie Settings:
Use our cookie preferences center (accessible via the cookie banner or link in the footer) to customize which non-essential cookies we use.

Note: Blocking certain cookies may impact your experience and some features may not work properly.`
  },
  {
    id: 'dnt',
    title: 'Do Not Track',
    content: `We respect Do Not Track (DNT) browser signals. When DNT is enabled:

• We disable analytics cookies
• We disable marketing cookies
• Only essential cookies remain active

Some features that rely on tracking may not work when DNT is enabled.`
  },
  {
    id: 'updates',
    title: 'Updates to This Policy',
    content: `We may update this Cookie Policy to reflect changes in our practices or for legal reasons. When we make changes:

• We'll update the "Last Updated" date
• Material changes will be communicated via email or site notice
• Your continued use constitutes acceptance

We encourage you to review this policy periodically.`
  }
];

const CookiePage: React.FC<CookiePageProps> = ({ lastUpdated = 'December 15, 2025' }) => {
  const [preferences, setPreferences] = useState({
    essential: true,
    functional: true,
    analytics: false,
    marketing: false
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-6"
          >
            <Cookie className="w-3 h-3" />
            Legal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Cookie Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-4"
          >
            Learn how we use cookies and how you can control them.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-500"
          >
            Last updated: {lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* Cookie Preferences */}
      <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Your Cookie Preferences
          </h2>

          <div className="grid gap-4">
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={cookie.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {cookie.name}
                      </h3>
                      {cookie.required && (
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {cookie.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {cookie.examples.map((example) => (
                        <span
                          key={example}
                          className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-500 text-xs">
                      Retention: {cookie.retention}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      if (!cookie.required) {
                        setPreferences({
                          ...preferences,
                          [cookie.id]: !preferences[cookie.id as keyof typeof preferences]
                        });
                      }
                    }}
                    disabled={cookie.required}
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      preferences[cookie.id as keyof typeof preferences]
                        ? 'bg-brand-500'
                        : 'bg-gray-200 dark:bg-gray-700'
                    } ${cookie.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <span
                      className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-sm transition-transform ${
                        preferences[cookie.id as keyof typeof preferences]
                          ? 'translate-x-7'
                          : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-4"
          >
            <button className="px-6 py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors">
              Save Preferences
            </button>
            <button
              onClick={() => setPreferences({ essential: true, functional: true, analytics: true, marketing: true })}
              className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={() => setPreferences({ essential: true, functional: false, analytics: false, marketing: false })}
              className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              Essential Only
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line leading-relaxed">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 text-brand-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Questions about cookies?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Contact us at privacy@autofounder.io
          </p>
          <a
            href="mailto:privacy@autofounder.io"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CookiePage;
