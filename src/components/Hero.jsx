import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

const STATS = [
  { l: 'Subjects', v: 'Maths + LR' },
  { l: 'Interviews', v: '2-3 rounds' },
  { l: 'Campus', v: 'Bengaluru' },
  { l: 'Focus', v: 'Software Dev' },
];

const Hero = memo(({ onCopy, hasCopied }) => (
  <section className="py-20 border-b border-white/10" id="top">
    <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)] grid grid-cols-1 md:grid-cols-[1fr_380px] gap-12 md:gap-16 items-start">
      {/* Left column */}
      <div className="order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-block text-[0.8rem] font-semibold tracking-widest uppercase text-primary-light mb-4 px-3 py-1.5 glass-sub-panel rounded-full relative overflow-hidden group"
        >
          <span className="relative z-10">Student-written guide</span>
          <div className="absolute inset-0 bg-primary-light/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight tracking-tight text-white"
        >
          Scaler NSET Guide<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-success">
            + Referral Code
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[1.1rem] max-w-[56ch] mb-8 leading-relaxed text-white/70"
        >
          This page is for students researching{' '}
          <strong className="text-white">Scaler School of Technology</strong>, the{' '}
          <strong className="text-white">NSET exam</strong>, and whether SST makes sense
          compared to more traditional college paths.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={onCopy}
            className="h-12 px-6 rounded-md font-semibold text-primary-dark bg-white hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            Get referral code
          </button>
          <a
            href="#nset"
            className="h-12 px-6 rounded-md font-semibold text-white glass-sub-panel hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center"
          >
            Read NSET guide
          </a>
        </motion.div>
      </div>

      {/* Right card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="glass-panel p-8 rounded-2xl order-1 md:order-2 hover:-translate-y-1 hover:border-primary-light/30 transition-all duration-300"
        id="code"
      >
        <div className="mb-6">
          <div className="text-[0.8rem] font-medium text-white/70 uppercase tracking-widest mb-3">
            NSET referral code
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="font-code text-3xl sm:text-4xl text-white tracking-[0.1em]">
              ARIYD8B6
            </div>
            <button
              onClick={onCopy}
              className="w-11 h-11 rounded-md glass-sub-panel hover:bg-white/10 flex items-center justify-center text-white transition-colors hover:scale-105 active:scale-95"
              aria-label="Copy referral code"
            >
              {hasCopied
                ? <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }}><Check size={18} className="text-success" /></motion.div>
                : <Copy size={18} />}
            </button>
          </div>
          <div className="text-[0.95rem] text-white/80 leading-relaxed">
            Use during registration for a{' '}
            <span className="inline-block text-success bg-success/15 px-2 py-0.5 rounded-full font-semibold">
              ₹500 off
            </span>{' '}
            the exam fee.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
          {STATS.map((stat) => (
            <div key={stat.l}>
              <span className="block text-[0.75rem] text-white/50 uppercase tracking-widest mb-1">
                {stat.l}
              </span>
              <span className="text-[0.9rem] text-white/90">{stat.v}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
));

Hero.displayName = 'Hero';
export default Hero;
