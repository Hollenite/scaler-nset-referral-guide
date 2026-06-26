import React, { memo } from 'react';
import {
  REFERRAL_CODE_SLUG,
  MAIN_GUIDE_URL,
  GITHUB_GIST_URL,
  SCALER_OFFICIAL_URL,
} from '../lib/content';

const Footer = memo(({ onCopy }) => (
  <footer className="py-12 border-t border-white/5 bg-black/20 mt-12">
    <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)] flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="font-heading font-bold text-[1.2rem] text-white mb-1">
            Scaler NSET Guide
          </div>
          <p className="text-[0.9rem] text-white/50">Student-written guide to SST and NSET.</p>
        </div>
        <button
          onClick={onCopy}
          className="h-11 px-6 rounded-md glass-sub-panel text-white hover:bg-white/10 transition-colors font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] shrink-0"
        >
          See referral code
        </button>
      </div>

      <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50" aria-label="Footer links">
        <a href={REFERRAL_CODE_SLUG + '/'} className="hover:text-primary-light transition-colors">
          Referral code details
        </a>
        <a
          href={MAIN_GUIDE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-light transition-colors"
        >
          Full guide (scalernsetguide.xyz)
        </a>
        <a
          href={GITHUB_GIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-light transition-colors"
        >
          GitHub Gist
        </a>
        <a
          href={SCALER_OFFICIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-light transition-colors"
        >
          Scaler official admissions
        </a>
      </nav>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
