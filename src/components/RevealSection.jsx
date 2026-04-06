import React, { memo } from 'react';
import { motion } from 'framer-motion';

const RevealSection = memo(({ id, num, title, children }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.45, ease: 'easeOut' }}
    className="py-16 md:py-20 border-b border-white/10"
  >
    <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)]">
      <span className="font-heading text-[0.9rem] text-primary-light mb-2 block font-bold leading-tight tracking-tight">
        0{num}.
      </span>
      <h2 className="font-heading text-3xl md:text-4xl mb-8 tracking-tight text-white">
        {title}
      </h2>
      {children}
    </div>
  </motion.section>
));

RevealSection.displayName = 'RevealSection';
export default RevealSection;
