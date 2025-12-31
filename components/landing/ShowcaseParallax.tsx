import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../../assets/Gemini_Generated_Image_1jedny1jedny1jed.png';
import img2 from '../../assets/Gemini_Generated_Image_1o67fz1o67fz1o67.png';
import img3 from '../../assets/Gemini_Generated_Image_94648j94648j9464.png';
import img4 from '../../assets/Gemini_Generated_Image_ejg48gejg48gejg4.png';
import img5 from '../../assets/Gemini_Generated_Image_k8lls7k8lls7k8ll.png';
import img6 from '../../assets/Gemini_Generated_Image_kft5s5kft5s5kft5.png';
import { Target, Code, Activity, Box, Map, Mic, ArrowRight, Sparkles } from 'lucide-react';

/**
 * ShowcaseParallax Component - Fixed Background Design
 * 
 * The showcase cards are fixed in the background while the header
 * content scrolls over them, creating a reveal effect.
 */

interface ShowcaseItem {
  title: string;
  shortTitle: string;
  description: string;
  thumbnail: string;
  icon: React.ReactNode;
  gradient: string;
  link: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Market Strategy",
    shortTitle: "Strategy",
    description: "TAM, positioning, and competitive analysis",
    thumbnail: img1,
    icon: <Target className="w-5 h-5" />,
    gradient: "from-blue-500 to-cyan-500",
    link: "/app?feature=market-strategy"
  },
  {
    title: "Product Design",
    shortTitle: "Product",
    description: "User journeys and feature specs",
    thumbnail: img2,
    icon: <Code className="w-5 h-5" />,
    gradient: "from-violet-500 to-purple-500",
    link: "/app?feature=product-design"
  },
  {
    title: "Tech Architecture",
    shortTitle: "Tech",
    description: "Stack and system design",
    thumbnail: img3,
    icon: <Activity className="w-5 h-5" />,
    gradient: "from-emerald-500 to-teal-500",
    link: "/app?feature=tech-architecture"
  },
  {
    title: "Viability Scoring",
    shortTitle: "Viability",
    description: "10-dimensional analysis",
    thumbnail: img4,
    icon: <Box className="w-5 h-5" />,
    gradient: "from-orange-500 to-amber-500",
    link: "/app?feature=viability-scoring"
  },
  {
    title: "Execution Roadmap",
    shortTitle: "Roadmap",
    description: "Sprint-by-sprint plan",
    thumbnail: img5,
    icon: <Map className="w-5 h-5" />,
    gradient: "from-pink-500 to-rose-500",
    link: "/app?feature=execution-roadmap"
  },
  {
    title: "Pitch Scripts",
    shortTitle: "Pitch",
    description: "VC-ready narratives",
    thumbnail: img6,
    icon: <Mic className="w-5 h-5" />,
    gradient: "from-indigo-500 to-blue-500",
    link: "/app?feature=pitch-scripts"
  }
];

const ShowcaseParallax: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Header scrolls away while cards remain fixed
  const headerY = useTransform(scrollYProgress, [0, 0.4], [0, -300]);
  const headerOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
  
  // Cards fade in and become more visible as header scrolls away
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 1]);
  const cardsScale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[200vh] bg-gray-950"
    >
      {/* Fixed Background Layer with Cards */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[150px]" />
        </div>

        {/* Cards Grid - Fixed in background */}
        <motion.div 
          style={{ opacity: cardsOpacity, scale: cardsScale }}
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          <div className="w-full max-w-7xl mx-auto px-6 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {showcaseItems.map((item, index) => (
                <ShowcaseCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Header Content - Scrolls over the cards */}
        <motion.div 
          style={{ y: headerY, opacity: headerOpacity }}
          className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-950/95 to-gray-950/70 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span className="text-sm font-medium text-white/80">Complete System</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Every artifact you need,
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
                generated in seconds
              </span>
            </motion.h2>
            
            <motion.p 
              className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Strategy, product design, technical architecture, financial models, pitch decks—AutoFounder generates every artifact needed to launch and scale.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Spacer for scroll effect */}
      <div className="h-screen" />
    </section>
  );
};

interface ShowcaseCardProps {
  item: ShowcaseItem;
  index: number;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link 
        to={item.link}
        className="group block relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 hover:bg-white/[0.06]"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
          
          {/* Icon Badge */}
          <div className={`absolute top-3 left-3 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg`}>
            {item.icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5">
          <h3 className="text-base md:text-lg font-semibold text-white mb-1 group-hover:text-brand-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-xs md:text-sm text-gray-400 mb-3">
            {item.description}
          </p>
          
          {/* Learn more */}
          <div className="flex items-center gap-1 text-xs md:text-sm font-medium text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Learn more</span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ShowcaseParallax;