import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Gauge, ShieldCheck } from 'lucide-react';
import img1 from '../../assets/Gemini_Generated_Image_1jedny1jedny1jed.png';
import img2 from '../../assets/Gemini_Generated_Image_1o67fz1o67fz1o67.png';
import img3 from '../../assets/Gemini_Generated_Image_94648j94648j9464.png';
import img4 from '../../assets/Gemini_Generated_Image_ejg48gejg48gejg4.png';
import img5 from '../../assets/Gemini_Generated_Image_k8lls7k8lls7k8ll.png';
import img6 from '../../assets/Gemini_Generated_Image_kft5s5kft5s5kft5.png';

interface AnimatedHeroProps {
  onGetStarted: () => void;
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({ onGetStarted }) => {
  const showcaseImages = [img1, img2, img3, img4, img5, img6];
  const duplicatedImages = [...showcaseImages, ...showcaseImages];

  const stats = [
    { label: 'Build time saved', value: '10x' },
    { label: 'Confidence lift', value: '+37%' },
    { label: 'Blueprints shipped', value: '18,400' }
  ];

  const FADE_IN = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-20 px-6 md:px-10 lg:px-12">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-100 dark:from-black dark:via-slate-950 dark:to-slate-900" />
      <div className="pointer-events-none absolute inset-0 opacity-100 [background:radial-gradient(ellipse_at_20%_30%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(ellipse_at_80%_70%,rgba(168,85,247,0.08),transparent_45%)]" />

      {/* Animated gradient orbs - more subtle and refined */}
      <motion.div
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-blue-300/30 dark:bg-blue-600/15 blur-3xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-purple-300/20 dark:bg-purple-600/12 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
        <motion.div initial="hidden" animate="show" variants={FADE_IN} className="space-y-10">
          <motion.div
            variants={FADE_IN}
            className="inline-flex items-center gap-3 rounded-full border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 backdrop-blur-2xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            AI-powered startup studio
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } }
            }}
            className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-slate-900 dark:text-white"
          >
            <motion.span variants={FADE_IN} className="block">From zero</motion.span>
            <motion.span variants={FADE_IN} className="block">to investor-</motion.span>
            <motion.span variants={FADE_IN} className="block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">ready blueprint</span>
            </motion.span>
          </motion.h1>

          <motion.p
            variants={FADE_IN}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-normal"
          >
            Turn your startup idea into a complete business blueprint with strategy, product design, technical roadmap, and execution plan—in minutes.
          </motion.p>

          <motion.div
            variants={FADE_IN}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.button
              onClick={onGetStarted}
              className="relative px-8 py-4 rounded-full text-base font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 border border-slate-900 dark:border-white shadow-lg shadow-slate-900/20 dark:shadow-white/20 transition-all duration-300 overflow-hidden group hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative inline-flex items-center gap-2">
                Get your blueprint
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              className="px-8 py-4 rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold text-base transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-900"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              See how it works
            </motion.button>
          </motion.div>

          <motion.div
            variants={FADE_IN}
            transition={{ delay: 0.65 }}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 dark:border-white/10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Visual showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-blue-200/40 via-purple-200/20 to-transparent dark:from-blue-900/20 dark:via-purple-900/15 dark:to-transparent blur-3xl rounded-[40px]" />
          <div className="relative rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-2xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent" />
            <div className="relative p-8 space-y-8">
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">Your Blueprint Includes</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Market Strategy",
                    "Product Design",
                    "Tech Architecture",
                    "4-Week Roadmap",
                    "Financial Model",
                    "Pitch Deck"
                  ].map((item) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="border-t border-slate-200/60 dark:border-white/10 pt-6">
                <p className="text-xs text-slate-500 dark:text-slate-400">⚡ Average generation time: 22 seconds</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-slate-400 dark:text-slate-500">
          <path d="M10 3v10M3 10l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Animated Image Marquee */}
      <div className="absolute bottom-0 left-0 w-full h-72 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_80%,transparent)]">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ['-33.33%', '0%'],
            transition: {
              ease: 'linear',
              duration: 42,
              repeat: Infinity
            }
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className={`relative aspect-[3/4] h-48 md:h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur ${
                index % 3 === 0 ? '[transform:perspective(1000px)_rotateZ(-1.5deg)]' : 
                index % 3 === 1 ? '[transform:perspective(1000px)_rotateZ(1deg)]' : 
                '[transform:perspective(1000px)_rotateZ(-0.25deg)]'
              }`}
            >
              <img
                src={src}
                alt={`Showcase ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;
