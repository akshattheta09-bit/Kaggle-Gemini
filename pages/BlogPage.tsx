import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Tag, ChevronRight } from 'lucide-react';

// Import images from assets
import img1 from '../assets/Gemini_Generated_Image_1jedny1jedny1jed.png';
import img2 from '../assets/Gemini_Generated_Image_1o67fz1o67fz1o67.png';
import img3 from '../assets/Gemini_Generated_Image_94648j94648j9464.png';
import img4 from '../assets/Gemini_Generated_Image_ejg48gejg48gejg4.png';
import img5 from '../assets/Gemini_Generated_Image_k8lls7k8lls7k8ll.png';
import img6 from '../assets/Gemini_Generated_Image_kft5s5kft5s5kft5.png';
import img7 from '../assets/Gemini_Generated_Image_lmxt7nlmxt7nlmxt.png';

interface BlogPageProps {
  onReadPost?: (slug: string) => void;
}

const featuredPost = {
  slug: 'ai-startup-playbook-2025',
  title: 'The AI Startup Playbook for 2025',
  excerpt: 'What we learned from analyzing 10,000+ startup blueprints and talking to 500 founders who raised in the last 12 months.',
  author: 'Alex Chen',
  date: 'Dec 28, 2025',
  readTime: '12 min read',
  category: 'Strategy',
  image: img1,
  link: '/docs/viability-scoring'
};

const posts = [
  {
    slug: 'viability-scoring-explained',
    title: 'How Our Viability Scoring Works',
    excerpt: 'A deep dive into the 10 dimensions we use to evaluate startup ideas and why each one matters.',
    author: 'Sarah Kim',
    date: 'Dec 22, 2025',
    readTime: '8 min read',
    category: 'Product',
    image: img2,
    link: '/docs/viability-scoring'
  },
  {
    slug: 'pitch-scripts-that-convert',
    title: 'Pitch Scripts That Actually Convert',
    excerpt: 'We analyzed 200 successful seed pitches to find the patterns that work.',
    author: 'Marcus Johnson',
    date: 'Dec 18, 2025',
    readTime: '6 min read',
    category: 'Fundraising',
    image: img3,
    link: '/docs/pitch-scripts'
  },
  {
    slug: 'mvp-in-30-days',
    title: 'From Blueprint to MVP in 30 Days',
    excerpt: 'A step-by-step guide to executing your AutoFounder roadmap.',
    author: 'Elena Rodriguez',
    date: 'Dec 14, 2025',
    readTime: '10 min read',
    category: 'Execution',
    image: img4,
    link: '/docs/blueprint-to-mvp'
  },
  {
    slug: 'founder-market-fit',
    title: 'Finding Founder-Market Fit',
    excerpt: 'Why the best founders choose problems they\'re uniquely suited to solve.',
    author: 'Alex Chen',
    date: 'Dec 10, 2025',
    readTime: '7 min read',
    category: 'Strategy',
    image: img5,
    link: '/docs/founder-market-fit'
  },
  {
    slug: 'api-integration-guide',
    title: 'Integrating AutoFounder into Your Accelerator',
    excerpt: 'How top accelerators use our API to scale startup support.',
    author: 'Sarah Kim',
    date: 'Dec 6, 2025',
    readTime: '5 min read',
    category: 'Technical',
    image: img6,
    link: '/docs/accelerator-integration'
  },
  {
    slug: 'pricing-your-saas',
    title: 'The Science of SaaS Pricing',
    excerpt: 'Data-driven approaches to pricing that maximize growth and retention.',
    author: 'Marcus Johnson',
    date: 'Dec 2, 2025',
    readTime: '9 min read',
    category: 'Growth',
    image: img7,
    link: '/docs/saas-pricing'
  }
];

const categories = ['All', 'Strategy', 'Product', 'Fundraising', 'Execution', 'Technical', 'Growth'];

const BlogPage: React.FC<BlogPageProps> = ({ onReadPost }) => {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            The AutoFounder Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Insights on building, launching, and scaling startups from the frontier.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <Link to={featuredPost.link}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative group cursor-pointer rounded-3xl overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600/90 via-purple-600/80 to-purple-600/70 group-hover:from-brand-600/95 group-hover:via-purple-600/85 group-hover:to-purple-600/75 transition-colors" />
              </div>
              
              <div className="relative z-10 p-10 md:p-16 max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">
                    Featured
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:underline">
                  {featuredPost.title}
                </h2>

                <p className="text-lg text-white/80 mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-6 text-sm text-white/70">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>

              <ChevronRight className="absolute bottom-10 right-10 w-8 h-8 text-white/50 group-hover:text-white group-hover:translate-x-2 transition-all" />
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={post.link} className="block cursor-pointer">
                  <div className="relative rounded-2xl h-48 mb-5 overflow-hidden group-hover:scale-[1.02] transition-transform">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-3 h-3 text-brand-500" />
                    <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get the best insights weekly
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Join 12,000+ founders who get our newsletter every Tuesday.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
