import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import RevealSection from '../RevealSection';

const Referral = memo(({ onCopy, hasCopied }) => (
  <RevealSection id="referral" num={5} title="Referral code for NSET registration">
    <p className="text-white/70 mb-6 max-w-[60ch]">
      If you were specifically searching for a{' '}
      <strong className="text-white">Scaler referral code</strong>,{' '}
      <strong className="text-white">NSET referral code</strong>, or a code for ₹500 off,
      the one used here is below.
    </p>

    <div className="glass-panel max-w-lg p-6 md:p-8 rounded-2xl group hover:-translate-y-1 border border-white/10 hover:border-success/30 transition-all duration-300 relative overflow-hidden">
      {/* Ambient glow — CSS only, no JS */}
      <div className="absolute top-0 right-0 w-56 h-56 bg-success/8 blur-[48px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="text-[0.75rem] uppercase tracking-widest text-primary-light mb-4 block font-semibold relative z-10">
        USE DURING NSET REGISTRATION
      </div>

      <div className="font-code text-4xl sm:text-5xl font-bold text-white tracking-[0.1em] mb-6 flex items-center justify-between relative z-10">
        <span>ARIYD8B6</span>
        <button
          onClick={onCopy}
          className="w-12 h-12 rounded-lg glass-sub-panel hover:bg-white/10 flex items-center justify-center text-white transition-colors hover:scale-110 active:scale-95"
          aria-label="Copy referral code"
        >
          {hasCopied
            ? <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }}><Check size={20} className="text-success" /></motion.div>
            : <Copy size={20} />}
        </button>
      </div>

      <p className="text-white/80 text-sm relative z-10">
        This gives <strong className="text-white">₹500 off</strong> the NSET registration fee.
      </p>
    </div>
  </RevealSection>
));

Referral.displayName = 'Referral';
export default Referral;
