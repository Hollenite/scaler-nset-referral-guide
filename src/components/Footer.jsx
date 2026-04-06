import React, { memo } from 'react';

const Footer = memo(({ onCopy }) => (
  <footer className="py-12 border-t border-white/5 bg-black/20 mt-12">
    <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)] flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="text-center sm:text-left">
        <div className="font-heading font-bold text-[1.2rem] text-white mb-1">
          Scaler NSET Guide
        </div>
        <p className="text-[0.9rem] text-white/50">Student-written guide to SST and NSET.</p>
      </div>
      <button
        onClick={onCopy}
        className="h-11 px-6 rounded-md glass-sub-panel text-white hover:bg-white/10 transition-colors font-semibold text-sm hover:scale-[1.02] active:scale-[0.98]"
      >
        See referral code
      </button>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
