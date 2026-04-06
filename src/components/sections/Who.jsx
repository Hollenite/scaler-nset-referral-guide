import React, { memo } from 'react';
import { motion } from 'framer-motion';
import RevealSection from '../RevealSection';

const YES_LIST = [
  'are genuinely interested in coding and software development',
  'enjoy building projects or solving programming problems',
  'want a peer group where many students are focused on tech',
  'are okay with joining a relatively new institution',
  'can comfortably manage the fees',
];

const NO_LIST = [
  'want the security of a long-established college',
  'prefer a broader engineering curriculum',
  'care a lot about lower overall cost',
  'want a larger and more conventional campus experience',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Who = memo(() => (
  <RevealSection id="who" num={3} title="Who should consider SST?">
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.div
        variants={itemVariants}
        className="glass-panel p-8 rounded-2xl border-success/20 bg-success/5 hover:-translate-y-1 hover:border-success/40 transition-all duration-300"
      >
        <h3 className="font-heading text-xl mb-6 text-white border-b border-white/10 pb-4">
          SST may make sense if you:
        </h3>
        <ul className="space-y-3">
          {YES_LIST.map((t) => (
            <li key={t} className="flex gap-3 text-white/80">
              <span className="text-success font-bold shrink-0">✓</span> {t}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="glass-panel p-8 rounded-2xl hover:-translate-y-1 hover:border-white/25 transition-all duration-300"
      >
        <h3 className="font-heading text-xl mb-6 text-white border-b border-white/10 pb-4">
          A traditional BTech may be safer if you:
        </h3>
        <ul className="space-y-3">
          {NO_LIST.map((t) => (
            <li key={t} className="flex gap-3 text-white/80">
              <span className="text-white/40 shrink-0">→</span> {t}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  </RevealSection>
));

Who.displayName = 'Who';
export default Who;
