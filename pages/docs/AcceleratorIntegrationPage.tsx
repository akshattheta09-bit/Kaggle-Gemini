import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Copy,
  Check,
  ChevronRight,
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  Code,
  Shield,
  Clock,
  DollarSign
} from 'lucide-react';

const useCases = [
  {
    title: 'Batch Processing',
    description: 'Generate blueprints for entire cohorts at once',
    icon: Users,
    code: `// Process entire accelerator cohort
const cohort = await client.batches.create({
  startups: cohortData.map(startup => ({
    idea: startup.pitch,
    sector: startup.industry,
    founderBackground: startup.teamBio
  })),
  options: {
    compareWithCohort: true,
    generateRankings: true
  }
});

// Get cohort-wide insights
const insights = await cohort.getInsights();`
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor startup progress against their blueprints',
    icon: BarChart3,
    code: `// Track startup against their blueprint
const progress = await client.tracking.update({
  blueprintId: startup.blueprintId,
  milestones: {
    mvpLaunched: true,
    firstCustomer: true,
    revenue: 5000
  }
});

// Get updated recommendations
const nextSteps = progress.recommendations;`
  },
  {
    title: 'Custom Scoring Rubrics',
    description: 'Use your accelerator\'s own evaluation criteria',
    icon: Shield,
    code: `// Create custom scoring rubric
const rubric = await client.rubrics.create({
  name: "YC-Style Scoring",
  dimensions: [
    { name: "Team", weight: 0.3 },
    { name: "Market", weight: 0.25 },
    { name: "Product", weight: 0.25 },
    { name: "Traction", weight: 0.2 }
  ]
});

// Apply to blueprints
const scored = await client.blueprints.score({
  blueprintId: blueprint.id,
  rubricId: rubric.id
});`
  },
  {
    title: 'Automated Reporting',
    description: 'Generate investor-ready reports automatically',
    icon: DollarSign,
    code: `// Generate LP report
const report = await client.reports.create({
  type: "quarterly_lp_update",
  cohortId: cohort.id,
  metrics: [
    "total_blueprints_generated",
    "average_viability_score",
    "milestone_completion_rate",
    "portfolio_company_progress"
  ],
  format: "pdf"
});`
  }
];

const integrationSteps = [
  {
    step: 1,
    title: 'Get API Access',
    description: 'Contact our enterprise team for accelerator-tier API access with custom rate limits.',
    time: '1 day'
  },
  {
    step: 2,
    title: 'Configure Your Instance',
    description: 'Set up custom scoring rubrics, branding, and workflow automations.',
    time: '1-2 days'
  },
  {
    step: 3,
    title: 'Import Your Cohort',
    description: 'Bulk import your portfolio companies and historical data.',
    time: '1 day'
  },
  {
    step: 4,
    title: 'Train Your Team',
    description: 'We provide onboarding sessions for your team to maximize value.',
    time: '2-3 hours'
  },
  {
    step: 5,
    title: 'Go Live',
    description: 'Start generating blueprints and tracking progress.',
    time: 'Immediate'
  }
];

const metrics = [
  { value: '40%', label: 'Faster application review' },
  { value: '3x', label: 'More actionable feedback' },
  { value: '60%', label: 'Time saved on due diligence' },
  { value: '25%', label: 'Better cohort outcomes' }
];

const AcceleratorIntegrationPage: React.FC = () => {
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
            <span className="text-gray-900 dark:text-white">Accelerator Integration</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/30 border border-brand-200/50 dark:border-brand-800/30 mb-6"
          >
            <Building2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">Enterprise Guide</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Integrating AutoFounder into Your Accelerator
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl"
          >
            How top accelerators use our API to scale startup support and make better investment decisions.
          </motion.p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 px-6 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What You Can Build
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Common integration patterns used by accelerators and VCs.
          </p>

          <div className="space-y-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {useCase.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {useCase.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-500">JavaScript</span>
                      <button
                        onClick={() => copyToClipboard(useCase.code, index)}
                        className="flex items-center gap-1 text-xs text-gray-500 hover:text-brand-500 transition-colors"
                      >
                        {copiedIndex === index ? (
                          <>
                            <Check className="w-3 h-3" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="bg-gray-900 dark:bg-gray-800 rounded-xl p-4 overflow-x-auto">
                      <code className="text-sm text-gray-100 font-mono">
                        {useCase.code}
                      </code>
                    </pre>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Getting Started
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            From first contact to live integration in under a week.
          </p>

          <div className="space-y-6">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {step.time}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Enterprise Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: 'SSO & SAML', description: 'Single sign-on with your identity provider' },
              { icon: Users, title: 'Team Management', description: 'Role-based access for your entire team' },
              { icon: Code, title: 'Custom Webhooks', description: 'Real-time updates to your systems' },
              { icon: BarChart3, title: 'Analytics Dashboard', description: 'Cohort-wide insights and reporting' },
              { icon: Zap, title: 'Priority Support', description: 'Dedicated success manager' },
              { icon: DollarSign, title: 'Custom Pricing', description: 'Volume discounts for large cohorts' }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Scale Your Accelerator?
          </h2>
          <p className="text-white/80 mb-8">
            Talk to our enterprise team about a custom integration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:opacity-90 transition-all"
            >
              Contact Sales
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/docs/quickstart"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              View API Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcceleratorIntegrationPage;
