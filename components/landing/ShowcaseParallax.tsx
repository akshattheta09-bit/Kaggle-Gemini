import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import img1 from '../../assets/Gemini_Generated_Image_1jedny1jedny1jed.png';
import img2 from '../../assets/Gemini_Generated_Image_1o67fz1o67fz1o67.png';
import img3 from '../../assets/Gemini_Generated_Image_94648j94648j9464.png';
import img4 from '../../assets/Gemini_Generated_Image_ejg48gejg48gejg4.png';
import img5 from '../../assets/Gemini_Generated_Image_k8lls7k8lls7k8ll.png';
import img6 from '../../assets/Gemini_Generated_Image_kft5s5kft5s5kft5.png';

/**
 * ShowcaseParallax Component - Apple Level Design
 * 
 * Stunning parallax showcase of AutoFounder capabilities with:
 * - 3D perspective transforms
 * - Smooth scroll animations
 * - High-quality product images
 * - Professional depth effects
 */

interface ShowcaseItem {
  title: string;
  shortTitle: string;
  description: string;
  detailedDescription: string;
  thumbnail: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Strategy & Market",
    shortTitle: "Market Strategy",
    description: "Comprehensive market analysis and positioning",
    detailedDescription: "Positioning, moat, TAM, and competitive map grounded in first-principles reasoning.",
    thumbnail: img1
  },
  {
    title: "Technical Scaffolding",
    shortTitle: "Product Design",
    description: "Complete product specs and user journeys",
    detailedDescription: "Architecture, API design, data model, and repo structure—ready for handoff to engineers.",
    thumbnail: img2
  },
  {
    title: "Viability Scoring",
    shortTitle: "Technical Roadmap",
    description: "Full tech stack and architecture plans",
    detailedDescription: "Multi-dimensional scoring across feasibility, timing, revenue potential, risk, and resourcing.",
    thumbnail: img3
  },
  {
    title: "Product Definition",
    shortTitle: "Viability Analysis",
    description: "10-dimensional feasibility scoring",
    detailedDescription: "User journeys, feature sequencing, acceptance criteria, and crisp release notes.",
    thumbnail: img4
  },
  {
    title: "Execution Roadmap",
    shortTitle: "Execution Plan",
    description: "Week-by-week roadmap with milestones",
    detailedDescription: "Week-by-week sprints with owners, milestones, and success metrics.",
    thumbnail: img5
  },
  {
    title: "Pitch & Narrative",
    shortTitle: "Financial Modeling",
    description: "Revenue projections and burn analysis",
    detailedDescription: "Investor and founder voice scripts plus a one-slide story spine.",
    thumbnail: img6
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
      className="h-[240vh] py-32 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Header */}
      <div className="max-w-6xl relative mx-auto py-24 md:py-40 px-6 md:px-8 w-full left-0 top-0">
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-7xl font-black text-white mb-8 leading-[1.05]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Complete startup system
        </motion.h2>
        <motion.p 
          className="max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed font-light"
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
      <div className="space-y-4">
        {/* Text Content - Always on top, never behind image */}
        <div className="relative z-20 px-6 pt-6 bg-gradient-to-b from-white/90 to-white/80 dark:from-slate-800/90 dark:to-slate-800/80 backdrop-blur-md rounded-2xl rounded-b-none border border-white/40 dark:border-slate-700/40">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 font-normal">
            {item.description}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pb-4 italic">
            {item.detailedDescription}
          </p>
        </div>

        {/* Image - Below text content */}
        <div className="relative z-10 h-64 w-full rounded-2xl rounded-t-none overflow-hidden shadow-lg shadow-black/20 border border-white/30 dark:border-slate-700/30">
          <img
            src={item.thumbnail}
            height="400"
            width="480"
            className="object-cover object-center w-full h-full"
            alt={item.title}
            loading="lazy"
          />
          {/* Gradient overlay - subtle, never covers text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 group-hover/product:opacity-30 transition-opacity duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default ShowcaseParallax;
