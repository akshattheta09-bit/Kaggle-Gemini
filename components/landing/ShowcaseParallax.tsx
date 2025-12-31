import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import img1 from '../../assets/Gemini_Generated_Image_1jedny1jedny1jed.png';
import img2 from '../../assets/Gemini_Generated_Image_1o67fz1o67fz1o67.png';
import img3 from '../../assets/Gemini_Generated_Image_94648j94648j9464.png';
import img4 from '../../assets/Gemini_Generated_Image_ejg48gejg48gejg4.png';
import img5 from '../../assets/Gemini_Generated_Image_k8lls7k8lls7k8ll.png';
import img6 from '../../assets/Gemini_Generated_Image_kft5s5kft5s5kft5.png';
import { Target, Code, Activity, Box, Map, Mic } from 'lucide-react';

/**
 * ShowcaseParallax Component - Apple Level Premium Design
 * 
 * Stunning parallax showcase with:
 * - 3D perspective transforms
 * - Smooth scroll animations
 * - High-quality product images
 * - Professional depth effects
 * - Premium glassmorphism cards
 */

interface ShowcaseItem {
  title: string;
  shortTitle: string;
  description: string;
  detailedDescription: string;
  thumbnail: string;
  icon: React.ReactNode;
  gradient: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Strategy & Market",
    shortTitle: "Market Strategy",
    description: "Comprehensive market analysis and positioning",
    detailedDescription: "Positioning, moat, TAM, and competitive map grounded in first-principles reasoning.",
    thumbnail: img1,
    icon: <Target className="w-5 h-5" />,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Technical Scaffolding",
    shortTitle: "Product Design",
    description: "Complete product specs and user journeys",
    detailedDescription: "Architecture, API design, data model, and repo structure—ready for handoff to engineers.",
    thumbnail: img2,
    icon: <Code className="w-5 h-5" />,
    gradient: "from-violet-500 to-purple-500"
  },
  {
    title: "Viability Scoring",
    shortTitle: "Technical Roadmap",
    description: "Full tech stack and architecture plans",
    detailedDescription: "Multi-dimensional scoring across feasibility, timing, revenue potential, risk, and resourcing.",
    thumbnail: img3,
    icon: <Activity className="w-5 h-5" />,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Product Definition",
    shortTitle: "Viability Analysis",
    description: "10-dimensional feasibility scoring",
    detailedDescription: "User journeys, feature sequencing, acceptance criteria, and crisp release notes.",
    thumbnail: img4,
    icon: <Box className="w-5 h-5" />,
    gradient: "from-orange-500 to-amber-500"
  },
  {
    title: "Execution Roadmap",
    shortTitle: "Execution Plan",
    description: "Week-by-week roadmap with milestones",
    detailedDescription: "Week-by-week sprints with owners, milestones, and success metrics.",
    thumbnail: img5,
    icon: <Map className="w-5 h-5" />,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Pitch & Narrative",
    shortTitle: "Financial Modeling",
    description: "Revenue projections and burn analysis",
    detailedDescription: "Investor and founder voice scripts plus a one-slide story spine.",
    thumbnail: img6,
    icon: <Mic className="w-5 h-5" />,
    gradient: "from-indigo-500 to-blue-500"
  }
];

const ShowcaseParallax: React.FC = () => {
  const firstRow = showcaseItems.slice(0, 2);
  const secondRow = showcaseItems.slice(2, 4);
  const thirdRow = showcaseItems.slice(4, 6);
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[240vh] py-32 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-gray-950"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[150px]" />
      </div>

      {/* Header */}
      <div className="max-w-6xl relative mx-auto py-24 md:py-40 px-6 md:px-8 w-full left-0 top-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-white/80">Complete System</span>
        </motion.div>
        
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Every artifact you need,
          <br />
          <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">generated in seconds</span>
        </motion.h2>
        <motion.p 
          className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Strategy, product design, technical architecture, financial models, pitch decks—AutoFounder generates every artifact needed to launch and scale.
        </motion.p>
      </div>

      {/* Parallax Grid */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((item, index) => (
            <ShowcaseCard key={index} item={item} translate={translateX} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((item, index) => (
            <ShowcaseCard key={index} item={item} translate={translateXReverse} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((item, index) => (
            <ShowcaseCard key={index} item={item} translate={translateX} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

interface ShowcaseCardProps {
  item: ShowcaseItem;
  translate: any;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ item, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product w-[30rem] relative flex-shrink-0"
    >
      <div className="space-y-0">
        {/* Premium Card with Glass Effect */}
        <div className="relative z-20 p-6 bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/[0.08] overflow-hidden transition-all duration-500 group-hover/product:bg-white/[0.06] group-hover/product:border-white/[0.12]">
          
          {/* Gradient glow on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover/product:opacity-5 transition-opacity duration-500`} />
          
          {/* Icon Badge */}
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 text-white shadow-lg`}>
            {item.icon}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            {item.description}
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            {item.detailedDescription}
          </p>

          {/* Image */}
          <div className="relative mt-5 h-52 w-full rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img
              src={item.thumbnail}
              height="400"
              width="480"
              className="object-cover object-center w-full h-full transition-transform duration-700 group-hover/product:scale-105"
              alt={item.title}
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowcaseParallax;