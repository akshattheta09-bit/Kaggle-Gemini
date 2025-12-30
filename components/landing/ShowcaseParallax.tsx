import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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
  description: string;
  thumbnail: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Market Strategy",
    description: "Comprehensive market analysis and positioning",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop"
  },
  {
    title: "Product Design",
    description: "Complete product specs and user journeys",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=600&fit=crop"
  },
  {
    title: "Technical Roadmap",
    description: "Full tech stack and architecture plans",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=600&fit=crop"
  },
  {
    title: "Viability Analysis",
    description: "10-dimensional feasibility scoring",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop"
  },
  {
    title: "Execution Plan",
    description: "Week-by-week roadmap with milestones",
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=600&fit=crop"
  },
  {
    title: "Financial Modeling",
    description: "Revenue projections and burn analysis",
    thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=600&fit=crop"
  },
  {
    title: "Pitch Deck",
    description: "Investor-ready presentation materials",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=600&fit=crop"
  },
  {
    title: "Team Building",
    description: "Hiring strategy and org structure",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
  },
  {
    title: "Go-to-Market",
    description: "Launch strategy and growth tactics",
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=600&fit=crop"
  },
  {
    title: "Competitive Analysis",
    description: "Deep competitive intelligence",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop"
  },
  {
    title: "Risk Assessment",
    description: "Comprehensive risk identification",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop"
  },
  {
    title: "Legal Framework",
    description: "Entity structure and compliance",
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=600&fit=crop"
  },
  {
    title: "Brand Identity",
    description: "Core messaging and positioning",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop"
  },
  {
    title: "Customer Research",
    description: "User personas and pain points",
    thumbnail: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=600&fit=crop"
  },
  {
    title: "Metrics Dashboard",
    description: "KPIs and success metrics",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop"
  }
];

const ShowcaseParallax: React.FC = () => {
  const firstRow = showcaseItems.slice(0, 5);
  const secondRow = showcaseItems.slice(5, 10);
  const thirdRow = showcaseItems.slice(10, 15);
  
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
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-slate-950"
    >
      {/* Header */}
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-8 w-full left-0 top-0">
        <motion.h2 
          className="text-4xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Everything you need <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            in one system
          </span>
        </motion.h2>
        <motion.p 
          className="max-w-2xl text-base md:text-xl text-slate-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From market strategy to technical architecture, from financial modeling to execution roadmaps—AutoFounder generates every artifact you need to build a successful company.
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
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl rounded-2xl overflow-hidden h-full">
        <img
          src={item.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0"
          alt={item.title}
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-90 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none rounded-2xl transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
        <h2 className="text-white text-xl font-bold mb-1">
          {item.title}
        </h2>
        <p className="text-slate-300 text-sm">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ShowcaseParallax;
