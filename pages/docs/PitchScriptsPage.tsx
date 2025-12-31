import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mic, 
  Copy, 
  Check, 
  ChevronRight,
  ArrowRight,
  Target,
  Users,
  DollarSign,
  Lightbulb,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Clock
} from 'lucide-react';

const pitchTemplates = [
  {
    name: 'The Problem-Solution Hook',
    description: 'Lead with a compelling problem that makes investors lean in',
    template: `"[Specific audience] waste [X hours/dollars] every [time period] on [problem]. 

[Company name] eliminates this by [unique solution in one sentence].

We've already [traction metric] and are on track to [future milestone]."`,
    example: `"Enterprise sales teams waste 12 hours per week on manual CRM data entry. 

SalesSync eliminates this by auto-capturing every customer interaction using AI.

We've already saved customers $2M in productivity and are on track to $5M ARR by Q4."`,
    tags: ['Early Stage', 'B2B', 'SaaS']
  },
  {
    name: 'The Traction Story',
    description: 'Let your numbers do the talking',
    template: `"In just [time period], we've achieved:
• [Metric 1]: [Number]
• [Metric 2]: [Number]  
• [Metric 3]: [Number]

Why? Because [insight about why traction is happening].

With [funding amount], we'll [specific use of funds] to reach [next milestone]."`,
    example: `"In just 8 months, we've achieved:
• 50,000 active users
• $80K MRR (growing 25% MoM)
• 4.8★ rating with 2,000+ reviews

Why? Because remote teams desperately need async video messaging that actually works.

With $3M, we'll expand to enterprise and reach $1M ARR by year end."`,
    tags: ['Growth Stage', 'Consumer', 'Product-Led']
  },
  {
    name: 'The Market Opportunity',
    description: 'Paint the picture of a massive, growing market',
    template: `"[Industry] is a $[X]B market growing [Y]% annually.

But here's the problem: [current solutions] are [pain points].

[Company] is the first to [unique approach]. We're not just building a product—we're defining a category.

[Traction proof point]."`,
    example: `"HR Tech is a $400B market growing 12% annually.

But here's the problem: traditional HR tools are designed for HR, not employees.

Lattice is the first to put employee experience at the center. We're not just building software—we're defining People Success as a category.

That's why 4,000+ companies trust us with their most important asset: their people."`,
    tags: ['Series A+', 'Enterprise', 'Category Creation']
  },
  {
    name: 'The Founder Story',
    description: 'Connect personally before pitching the business',
    template: `"I spent [X years] at [relevant company/role] where I saw [problem] firsthand.

After [specific incident/realization], I knew I had to build the solution.

[Company] is that solution. We [value proposition].

I'm the right person to build this because [founder-market fit]."`,
    example: `"I spent 7 years as a nurse practitioner where I saw patients struggle to understand their diagnoses.

After watching my own grandmother miss critical medication due to confusing instructions, I knew I had to build the solution.

Healthwise is that solution. We translate complex medical information into clear, actionable guidance.

I'm the right person because I've lived this problem from both sides of the stethoscope."`,
    tags: ['Seed', 'Healthcare', 'Founder Story']
  }
];

const conversionTips = [
  {
    icon: Target,
    title: 'Know Your Audience',
    description: 'Tailor your pitch to the specific investor. A seed fund cares about team and vision; a Series B fund cares about metrics and scalability.'
  },
  {
    icon: Clock,
    title: 'Respect the 30-Second Rule',
    description: 'If you can\'t explain your company in 30 seconds, you\'ll lose attention. Practice until your core message is crystal clear.'
  },
  {
    icon: TrendingUp,
    title: 'Lead with Traction',
    description: 'Nothing builds credibility faster than proof. If you have traction, lead with it. If not, lead with a compelling insight.'
  },
  {
    icon: MessageSquare,
    title: 'Tell Stories, Not Features',
    description: 'Investors remember stories, not bullet points. Wrap your pitch in a narrative that creates emotional connection.'
  },
  {
    icon: DollarSign,
    title: 'Be Specific About the Ask',
    description: 'Don\'t be vague. State exactly how much you\'re raising, what you\'ll do with it, and what milestones you\'ll hit.'
  },
  {
    icon: Sparkles,
    title: 'End with a Hook',
    description: 'Leave them wanting more. End with a compelling question, surprising insight, or bold vision that starts a conversation.'
  }
];

const PitchScriptsPage: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

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
            <span className="text-gray-900 dark:text-white">Pitch Scripts</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/30 border border-brand-200/50 dark:border-brand-800/30 mb-6"
          >
            <Mic className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">Fundraising Guide</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Pitch Scripts That Actually Convert
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl"
          >
            We analyzed 200 successful seed pitches to find the patterns that work. Here's what separates forgettable pitches from fundable ones.
          </motion.p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 px-6 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">200+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Successful pitches analyzed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">$2.3B</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total funding raised</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">47%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Higher conversion rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">30 sec</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Optimal hook length</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Templates */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Proven Pitch Templates
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Copy these frameworks and customize them for your startup.
          </p>

          <div className="space-y-8">
            {pitchTemplates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {template.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {template.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {template.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Template */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Template</span>
                    <button
                      onClick={() => copyToClipboard(template.template, index * 2)}
                      className="flex items-center gap-1 text-sm text-gray-500 hover:text-brand-500 transition-colors"
                    >
                      {copiedIndex === index * 2 ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 font-mono text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap border border-gray-200 dark:border-gray-700">
                    {template.template}
                  </div>
                </div>

                {/* Example */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Example</span>
                    <button
                      onClick={() => copyToClipboard(template.example, index * 2 + 1)}
                      className="flex items-center gap-1 text-sm text-gray-500 hover:text-brand-500 transition-colors"
                    >
                      {copiedIndex === index * 2 + 1 ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-brand-50 dark:bg-brand-950/20 rounded-xl p-4 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap border border-brand-200 dark:border-brand-800/30">
                    {template.example}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Tips */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              6 Tips for Higher Conversion
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The difference between a "We'll pass" and "Let's schedule a partner meeting."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conversionTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {tip.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Generate Your Custom Pitch Script
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Get pitch scripts tailored to your startup, stage, and target investors.
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

export default PitchScriptsPage;
