import { Copy, Check, Tag } from 'lucide-react';
import {
  REFERRAL_CODE,
  REFERRAL_SAVINGS,
  APPLICATION_FEE,
  APPLICATION_FEE_WITH_REFERRAL,
  SCALER_OFFICIAL_URL,
} from '../lib/content';
import { useCopyReferral } from '../hooks/useCopyReferral';
import Toast from '../components/Toast';

export default function ApplyPage() {
  const { handleCopy, hasCopied, toastVisible } = useCopyReferral();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 relative">
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-light/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-lg">
        <div className="glass-panel rounded-3xl overflow-hidden border border-white/10">
          <div className="h-1.5 bg-gradient-to-r from-primary-light via-success to-primary-light" />

          <div className="p-8 sm:p-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary-light/15 border border-primary-light/30 flex items-center justify-center">
                <Tag className="w-8 h-8 text-primary-light" strokeWidth={1.5} />
              </div>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-white text-center mb-2">
              One thing before you go
            </h1>
            <p className="text-white/70 text-center mb-8 leading-relaxed">
              Save <strong className="text-primary-light">{REFERRAL_SAVINGS}</strong> on your NSET application
              fee — copy this code first, then head to Scaler.
            </p>

            <div className="glass-sub-panel rounded-2xl p-6 mb-6 border border-primary-light/30">
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider text-center mb-3">
                Your Referral Code
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="font-code text-3xl sm:text-4xl font-bold tracking-widest text-primary-light select-all">
                  {REFERRAL_CODE}
                </div>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    hasCopied
                      ? 'bg-success text-white'
                      : 'glass-sub-panel text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {hasCopied ? (
                    <>
                      <Check size={16} strokeWidth={2.5} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy Code
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="glass-sub-panel rounded-xl p-4 text-center">
                <div className="text-white/50 text-xs mb-1">Normal fee</div>
                <div className="text-white/70 font-bold line-through">{APPLICATION_FEE}</div>
              </div>
              <div className="bg-success/10 border border-success/30 rounded-xl p-4 text-center">
                <div className="text-white/50 text-xs mb-1">With your code</div>
                <div className="text-success font-extrabold text-lg">{APPLICATION_FEE_WITH_REFERRAL}</div>
              </div>
            </div>

            <a
              href={SCALER_OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-4 rounded-xl bg-white text-primary-dark font-bold text-base hover:bg-white/90 transition-all mb-3"
            >
              {hasCopied ? 'Code copied — Take me to Scaler →' : 'I have my code — Take me to Scaler →'}
            </a>

            <div className="text-center">
              <a
                href={SCALER_OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 text-xs hover:text-white/70 transition-colors underline underline-offset-2"
              >
                Skip and go directly to Scaler
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <a href="/" className="text-white/50 text-sm hover:text-white/70 transition-colors inline-flex items-center gap-1.5">
            ← Back to the guide
          </a>
        </div>
      </div>

      <Toast isVisible={toastVisible} />
    </div>
  );
}
