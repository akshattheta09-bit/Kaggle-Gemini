import React, { useState, useEffect } from 'react';
import { Rocket, Sparkles, CheckCircle2, TrendingUp, Code, Target, ChevronRight, ArrowRight } from 'lucide-react';

interface ScrollPosition {
  heroOpacity: number;
  heroScale: number;
  capabilitiesOffset: number;
  workflowOffset: number;
}

const LandingPage: React.FC<{ onGetStarted: () => void }> = ({ onGetStarted }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    heroOpacity: 1,
    heroScale: 1,
    capabilitiesOffset: 100,
    workflowOffset: 100
  });

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollProgress(scrolled);

      // Hero fade and scale
      const heroFade = Math.max(0, 1 - scrollTop / 400);
      const heroScale = Math.max(0.9, 1 - scrollTop / 2000);

      // Capabilities parallax
      const capabilitiesScroll = Math.max(0, scrollTop - 600);
      const capabilitiesOffset = Math.min(100, capabilitiesScroll / 4);

      // Workflow parallax
      const workflowScroll = Math.max(0, scrollTop - 1400);
      const workflowOffset = Math.min(100, workflowScroll / 5);

      setScrollPosition({
        heroOpacity: heroFade,
        heroScale,
        capabilitiesOffset: 100 - capabilitiesOffset,
        workflowOffset: 100 - workflowOffset
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 z-50" 
           style={{ width: `${scrollProgress}%`, transition: 'width 0.1s ease-out' }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/50 dark:bg-slate-950/50 border-b border-slate-200/30 dark:border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/30">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
              AutoFounder
            </span>
          </div>
          <button
            onClick={onGetStarted}
            className="px-6 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-brand-600/50 hover:-translate-y-0.5"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient orb */}
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-brand-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div 
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          style={{
            opacity: scrollPosition.heroOpacity,
            transform: `scale(${scrollPosition.heroScale})`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
          }}
        >
          {/* Main headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
            <span className="block text-slate-900 dark:text-white">From idea to</span>
            <span className="block bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 bg-clip-text text-transparent">
              execution-ready company
            </span>
            <span className="block text-slate-900 dark:text-white">in minutes.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            AutoFounder combines strategy, product design, viability analysis, and execution planning into one coherent system. It's the reasoning layer every founder needs.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-semibold text-lg transition-all duration-300 shadow-xl shadow-brand-600/30 hover:shadow-2xl hover:shadow-brand-600/50 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Start Building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight + 200, behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-slate-400 dark:hover:border-slate-600 font-semibold text-lg transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-900/50"
            >
              Learn More
            </button>
          </div>

          {/* Trust indicator */}
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              No credit card required
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-500" />
              Powered by AI reasoning
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-blue-500" />
              Ship faster
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Scroll to explore</span>
            <ChevronRight className="w-5 h-5 text-slate-400 rotate-90" />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 text-sm font-semibold mb-4">
              Capabilities
            </span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              A complete system for startup building
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Every dimension of building a company, reasoned through from first principles.
            </p>
          </div>

          {/* Capability Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-animation">
            {[
              {
                icon: Target,
                title: "Strategy & Market",
                description: "Comprehensive market analysis, positioning, TAM, competitive landscape, and defensible moat.",
                color: "brand"
              },
              {
                icon: Code,
                title: "Technical Scaffolding",
                description: "Recommended tech stack, API design, database schema, and project structure ready to build.",
                color: "blue"
              },
              {
                icon: TrendingUp,
                title: "Viability Scoring",
                description: "10-dimensional analysis: TAM, feasibility, competition, revenue potential, technical risk, and more.",
                color: "green"
              },
              {
                icon: CheckCircle2,
                title: "Product Definition",
                description: "Core features, user journey, MVP scope, and feature prioritization aligned to strategy.",
                color: "purple"
              },
              {
                icon: Rocket,
                title: "Execution Roadmap",
                description: "Week-by-week plan from Day 1 through Month 1, with clear priorities and milestones.",
                color: "orange"
              },
              {
                icon: Sparkles,
                title: "Pitch & Narrative",
                description: "Two versions of a compelling 1-minute pitch: one for investors, one in founder voice.",
                color: "pink"
              }
            ].map((item, i) => {
              const Icon = item.icon;
              const colorMap: Record<string, string> = {
                brand: 'brand-500',
                blue: 'blue-500',
                green: 'green-500',
                purple: 'purple-500',
                orange: 'orange-500',
                pink: 'pink-500'
              };

              return (
                <div
                  key={i}
                  className="group relative p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-brand-900/20"
                  style={{
                    opacity: Math.min(1, (scrollPosition.capabilitiesOffset - 20) / 80),
                    transform: `translateY(${Math.max(0, 50 - scrollPosition.capabilitiesOffset / 2)}px)`,
                    transition: 'all 0.3s ease-out'
                  }}
                >
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-100/0 to-brand-100/0 group-hover:from-brand-100/30 group-hover:to-transparent dark:group-hover:from-brand-500/10 dark:group-hover:to-transparent rounded-2xl transition-all duration-500 -z-10"></div>

                  <div className={`w-12 h-12 rounded-xl bg-${colorMap[item.color]} bg-opacity-10 dark:bg-opacity-10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`w-6 h-6 text-${colorMap[item.color]}`} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 text-sm font-semibold mb-4">
              Process
            </span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              One coherent system
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Strategy informs product. Product informs roadmap. Roadmap informs execution. Everything is threaded together.
            </p>
          </div>

          {/* Workflow steps */}
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Describe Your Idea",
                description: "Tell AutoFounder what you're building, why now, and what problem you're solving. Include your sector to ground the reasoning.",
                isEven: false
              },
              {
                step: "02",
                title: "System Reasons",
                description: "AutoFounder combines market analysis, product thinking, financial modeling, and technical feasibility into a single coherent blueprint.",
                isEven: true
              },
              {
                step: "03",
                title: "Get Your Blueprint",
                description: "Export a complete startup plan: strategy doc, product specs, tech scaffolding, execution timeline, viability analysis, and pitch scripts.",
                isEven: false
              },
              {
                step: "04",
                title: "Execute",
                description: "Everything you need to move from thinking to building. Share with co-founders, developers, or investors. Iterate from real data, not assumptions.",
                isEven: true
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-12 items-center py-12 opacity-animation ${item.isEven ? 'md:grid-flow-col-dense' : ''}`}
                style={{
                  opacity: Math.min(1, (scrollPosition.workflowOffset - 20) / 80),
                  transform: `translateY(${Math.max(0, 50 - scrollPosition.workflowOffset / 2)}px)`,
                  transition: 'all 0.3s ease-out'
                }}
              >
                {/* Number */}
                <div className={item.isEven ? 'md:col-start-2 order-2 md:order-none' : 'order-1'}>
                  <div className="relative">
                    <div className="text-8xl md:text-9xl font-bold text-slate-100 dark:text-slate-900 absolute -top-4 -left-4 leading-none">
                      {item.step}
                    </div>
                    <div className="relative z-10 space-y-4">
                      <h3 className="text-3xl font-bold">{item.title}</h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={`h-80 rounded-2xl bg-gradient-to-br from-brand-50 to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center ${item.isEven ? 'order-1 md:order-none' : 'order-2 md:order-none'}`}>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-10 h-10 text-brand-600 dark:text-brand-400 animate-pulse" />
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Step {item.step}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Built by people who've been there
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
            AutoFounder was created by founders and operators who've launched companies, raised capital, and scaled teams. This isn't a generic tool—it's a system built on patterns from real startups that succeeded.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "First-Principles Thinking",
                description: "Every decision in the system is grounded in how successful startups actually get built, not generic best practices."
              },
              {
                title: "Ruthlessly Honest",
                description: "AutoFounder pushes back when your idea has structural flaws. It highlights real risks. It doesn't encourage delusions."
              },
              {
                title: "Built for Execution",
                description: "The outputs aren't theory—they're actionable blueprints that founders can immediately hand to developers and investors."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-50 dark:opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Ready to turn your idea into a plan?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              Get a complete, reasoned startup blueprint in minutes. No fluff. No templates. Just clear direction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onGetStarted}
                className="group px-10 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-semibold text-lg transition-all duration-300 shadow-xl shadow-brand-600/30 hover:shadow-2xl hover:shadow-brand-600/50 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Start Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-10 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-slate-400 dark:hover:border-slate-600 font-semibold text-lg transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-900/50"
              >
                Back to top
              </button>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
              No credit card required. No commitment. Just clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold">AutoFounder</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                AI-powered startup operating system
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-600 dark:text-slate-400">
            <p>© 2025 AutoFounder. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
