import React, { memo } from 'react';
import { motion } from 'framer-motion';
import RevealSection from '../RevealSection';

const CARDS = [
  {
    tag: 'Learning environment',
    title: 'Coding-first peer group',
    desc: 'From a student perspective, one of the noticeable things about SST is that many students actually spend time on coding, projects, and development. That makes the peer environment feel more aligned with software engineering.',
  },
  {
    tag: 'Campus life',
    title: 'Campus and hostel',
    desc: 'The campus is smaller than large traditional universities, but the surrounding area is calm and green. The hostel is about 1.5 km away. Students also get Cult gym passes, with multiple gyms nearby.',
  },
  {
    tag: 'Things to weigh',
    title: 'Important tradeoffs',
    desc: 'SST is still relatively new compared to older engineering colleges, and the fees are higher than many traditional options. Those are valid concerns and should be part of the decision.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Experience = memo(() => (
  <RevealSection id="experience" num={2} title="Student Experience">
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {CARDS.map((card) => (
        <motion.div
          key={card.title}
          variants={itemVariants}
          className="glass-panel p-8 rounded-2xl hover:-translate-y-2 hover:border-primary-light/30 transition-all duration-300"
        >
          <span className="text-[0.75rem] uppercase tracking-widest text-primary-light mb-4 block font-semibold">
            {card.tag}
          </span>
          <h3 className="font-heading text-xl mb-3 text-white">{card.title}</h3>
          <p className="text-white/70 text-sm leading-relaxed">{card.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </RevealSection>
));

Experience.displayName = 'Experience';
export default Experience;
