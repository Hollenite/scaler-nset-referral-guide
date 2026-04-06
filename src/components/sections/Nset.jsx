import React, { memo } from 'react';
import { motion } from 'framer-motion';
import RevealSection from '../RevealSection';

const PREP_TIPS = [
  'Practice mathematics consistently',
  'Work on logical reasoning speed and accuracy',
  'Remember there is an individual cutoff for mathematics',
  'Be ready for interview rounds after the written exam',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Nset = memo(() => (
  <RevealSection id="nset" num={4} title="NSET Exam Guide">
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.div
        variants={itemVariants}
        className="glass-panel p-8 rounded-2xl hover:-translate-y-1 hover:border-primary-light/30 transition-all duration-300"
      >
        <h3 className="font-heading text-xl mb-4 text-white">What is in NSET?</h3>
        <ul className="space-y-2 mb-4">
          {['Mathematics', 'Logical Reasoning'].map((s) => (
            <li
              key={s}
              className="text-white/80 pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-primary-light"
            >
              {s}
            </li>
          ))}
        </ul>
        <p className="text-white/70 text-sm">
          The maths section can be fairly difficult, so it should not be ignored.
          Logical reasoning is also important because it helps maximize the overall score.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="glass-panel p-8 rounded-2xl hover:-translate-y-1 hover:border-primary-light/30 transition-all duration-300"
      >
        <h3 className="font-heading text-xl mb-4 text-white">How to think about preparation</h3>
        <ul className="space-y-2">
          {PREP_TIPS.map((t) => (
            <li
              key={t}
              className="text-white/80 pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-primary-light"
            >
              {t}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>

    <div className="glass-sub-panel bg-primary-med/10 border-l-2 border-l-primary-light p-6 rounded-r-xl text-white/80 text-sm">
      After the written test, candidates usually go through multiple interview rounds. A common
      pattern is <strong className="text-white">2 to 3 interviews</strong>, depending on
      performance and process flow.
    </div>
  </RevealSection>
));

Nset.displayName = 'Nset';
export default Nset;
