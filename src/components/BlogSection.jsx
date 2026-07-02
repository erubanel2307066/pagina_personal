import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/siteData';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const BlogSection = () => (
  <motion.section
    id="blog"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    className="section-space relative"
  >
    <div className="container-wrap">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} custom={-1} className="section-heading center">
          <span className="eyebrow">Artículos</span>
          <h2>Ideas, aprendizajes y técnicas.</h2>
        </motion.div>

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              custom={i}
              variants={itemVariants}
              className="blog-card"
            >
              <div className="blog-meta">
                <span className="blog-cat">{post.cat}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-link">
                Leer artículo <ArrowRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);
