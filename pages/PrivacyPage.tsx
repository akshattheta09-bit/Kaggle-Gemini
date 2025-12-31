import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Globe, Mail, ArrowRight } from 'lucide-react';

interface PrivacyPageProps {
  lastUpdated?: string;
}

const sections = [
  {
    id: 'collection',
    title: 'Information We Collect',
    content: `We collect information you provide directly to us when you:
    
• Create an account (email, name, company)
• Generate blueprints (startup ideas, sector information)
• Contact us for support
• Subscribe to our newsletter

We also automatically collect certain information when you use our services:

• Log data (IP address, browser type, pages visited)
• Device information (operating system, unique identifiers)
• Usage data (features used, time spent, interactions)`
  },
  {
    id: 'use',
    title: 'How We Use Your Information',
    content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Generate and customize your startup blueprints
• Process transactions and send related information
• Send technical notices and support messages
• Respond to your comments and questions
• Analyze usage patterns to improve user experience
• Detect and prevent fraudulent activity

We do NOT:
• Sell your personal data to third parties
• Use your startup ideas for any purpose other than generating your blueprint
• Share your data with advertisers`
  },
  {
    id: 'sharing',
    title: 'Information Sharing',
    content: `We may share your information only in the following circumstances:

• With your consent: When you explicitly agree to share information
• Service providers: With vendors who help us operate our services (cloud hosting, analytics), bound by confidentiality agreements
• Legal requirements: When required by law or to protect our rights
• Business transfers: In connection with a merger, acquisition, or sale of assets

We use industry-standard sub-processors:
• Google Cloud Platform (infrastructure)
• Stripe (payments)
• Intercom (customer support)
• Posthog (analytics)`
  },
  {
    id: 'security',
    title: 'Data Security',
    content: `We implement robust security measures to protect your data:

• Encryption in transit (TLS 1.3) and at rest (AES-256)
• Regular security audits and penetration testing
• SOC 2 Type II aligned controls
• Role-based access control for our team
• Automatic data backups with geographic redundancy

Despite these measures, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.`
  },
  {
    id: 'retention',
    title: 'Data Retention',
    content: `We retain your information for as long as your account is active or as needed to provide services:

• Account data: Until you delete your account
• Blueprint data: Until you delete it or close your account
• Usage logs: 90 days
• Support conversations: 2 years

After account deletion:
• Personal data is removed within 30 days
• Anonymized analytics may be retained indefinitely
• Backups are purged within 90 days`
  },
  {
    id: 'rights',
    title: 'Your Rights',
    content: `Depending on your location, you may have the following rights:

• Access: Request a copy of your personal data
• Correction: Update or correct inaccurate data
• Deletion: Request deletion of your data
• Portability: Export your data in a machine-readable format
• Objection: Opt out of certain processing activities
• Restriction: Limit how we use your data

To exercise these rights, contact privacy@autofounder.io. We respond to requests within 30 days.`
  },
  {
    id: 'international',
    title: 'International Transfers',
    content: `Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards:

• Standard Contractual Clauses (SCCs) for EU transfers
• Data Processing Agreements with all sub-processors
• Privacy Shield certification where applicable

We primarily process data in the United States and European Union.`
  },
  {
    id: 'children',
    title: 'Children\'s Privacy',
    content: `AutoFounder is not intended for users under 16 years of age. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.`
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by:

• Posting the new policy on this page
• Sending an email notification
• Displaying a prominent notice in the app

Your continued use of the service after changes constitutes acceptance of the updated policy.`
  }
];

const PrivacyPage: React.FC<PrivacyPageProps> = ({ lastUpdated = 'December 15, 2025' }) => {
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
            <Shield className="w-3 h-3" />
            Legal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-4"
          >
            Your privacy matters to us. This policy explains how we handle your data.
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

      {/* Table of Contents */}
      <section className="py-8 px-6 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
            On this page
          </h2>
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
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
            Questions about privacy?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Contact our privacy team at privacy@autofounder.io
          </p>
          <a
            href="mailto:privacy@autofounder.io"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all"
          >
            Contact Privacy Team
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
