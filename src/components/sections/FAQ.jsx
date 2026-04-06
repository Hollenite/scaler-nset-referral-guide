import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import RevealSection from '../RevealSection';

const FAQ_ITEMS = [
  {
    q: 'Is Scaler School of Technology worth it?',
    a: 'That depends on what you want. If you want a software-focused environment and are comfortable with a newer institution and higher fees, it can make sense. If you want a more traditional engineering college path, BTech may be the safer option.',
  },
  {
    q: 'Is NSET difficult?',
    a: 'The mathematics section can be fairly difficult, and logical reasoning is important as well. Balanced preparation matters.',
  },
  {
    q: 'Is there an interview after NSET?',
    a: 'Yes. Candidates typically go through multiple interview rounds after the written exam. A common pattern is 2 to 3 interviews.',
  },
  {
    q: 'What is the Scaler NSET referral code?',
    a: 'The code is ARIYD8B6. It gives ₹500 off the NSET registration fee.',
  },
];

const FAQItem = memo(({ item, isOpen, onToggle }) => (
  <div className="border-b border-white/10">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 text-left font-semibold text-[1.05rem] text-white focus:outline-none hover:text-primary-light transition-colors group"
    >
      {item.q}
      <div
        className={`p-1.5 rounded-full transition-colors shrink-0 ml-4 ${
          isOpen
            ? 'bg-primary-light/20 text-primary-light'
            : 'bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white'
        }`}
      >
        <ChevronDown
          className={`transform transition-transform w-5 h-5 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="answer"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-white/70 max-w-[72ch] text-[0.95rem] leading-relaxed">
            {item.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
));

FAQItem.displayName = 'FAQItem';

const FAQ = memo(() => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <RevealSection id="faq" num={6} title="FAQ">
      <div className="border-t border-white/10">
        {FAQ_ITEMS.map((item, i) => (
          <FAQItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </RevealSection>
  );
});

FAQ.displayName = 'FAQ';
export default FAQ;
