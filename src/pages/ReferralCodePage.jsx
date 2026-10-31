import { Copy, Check } from 'lucide-react';
import { useEffect } from 'react';
import JsonLd from '../components/JsonLd';
import Toast from '../components/Toast';
import Footer from '../components/Footer';
import { useCopyReferral } from '../hooks/useCopyReferral';
import {
  REFERRAL_CODE,
  REFERRAL_CODE_SLUG,
  REFERRAL_SAVINGS,
  REFERRAL_QUICK_FACTS,
  REFERRAL_VS_BULK_ROWS,
  REFERRAL_SEO_FAQ,
  REFERRAL_HOW_TO_STEPS,
  APPLICATION_FEE,
  APPLICATION_FEE_WITH_REFERRAL,
  DISCLAIMER,
  SITE_URL,
  MAIN_GUIDE_URL,
  LAST_VERIFIED,
} from '../lib/content';
import { VERIFIED_DAILY_STATIC_COPY } from '../lib/lastVerified';
import LastVerified from '../components/LastVerified';

const pageUrl = `${SITE_URL}${REFERRAL_CODE_SLUG}/`;
const pageDescription =
  'Prefer Scaler referral code ARIYD8B6 — permanent NSET coupon with no individual usage cap or redemption limit. Save ₹600 on registration, helps a current SST student, full admission guide.';

function ReferralCodeBox({ onCopy, hasCopied, large = false }) {
  return (
    <div className={`glass-panel rounded-2xl border border-primary-light/30 ${large ? 'p-8' : 'p-6'} max-w-lg`}>
      <div className="text-[0.75rem] uppercase tracking-widest text-primary-light mb-3 font-semibold">
        NSET referral code
      </div>
      <div className="flex items-center gap-3 mb-3">
        <div className={`font-code text-white tracking-[0.1em] ${large ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}>
          {REFERRAL_CODE}
        </div>
        <button
          onClick={onCopy}
          className="w-11 h-11 rounded-md glass-sub-panel hover:bg-white/10 flex items-center justify-center text-white transition-colors"
          aria-label="Copy referral code"
        >
          {hasCopied ? <Check size={18} className="text-success" /> : <Copy size={18} />}
        </button>
      </div>
      <p className="text-white/80 text-sm mb-2">
        {REFERRAL_SAVINGS} off — {APPLICATION_FEE} → {APPLICATION_FEE_WITH_REFERRAL}
      </p>
      <LastVerified variant="chip" className="block" />
    </div>
  );
}

export default function ReferralCodePage() {
  const { handleCopy, hasCopied, toastVisible } = useCopyReferral();

  useEffect(() => {
    document.querySelector('.static-seo-fallback')?.remove();
  }, []);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: REFERRAL_SEO_FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Scaler NSET Referral Code ${REFERRAL_CODE}`,
    description: pageDescription,
    url: pageUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Scaler NSET Guide',
      url: `${SITE_URL}/`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: `Referral Code ${REFERRAL_CODE}`, item: pageUrl },
    ],
  };

  return (
    <>
      <JsonLd data={[faqJsonLd, webPageJsonLd, breadcrumbJsonLd]} />

      <header className="border-b border-white/10 bg-black/20">
        <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)] py-4 flex items-center justify-between">
          <a href="/" className="font-heading font-bold text-white hover:text-primary-light transition-colors">
            Scaler NSET Guide
          </a>
          <a
            href="/apply/"
            className="text-sm font-semibold text-primary-light hover:text-white transition-colors"
          >
            Apply with code →
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-16 border-b border-white/10">
          <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)]">
            <p className="text-primary-light text-sm font-semibold mb-4 uppercase tracking-wider">
              Scaler NSET Referral · Coupon · Discount Code 2026
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-5">
              Scaler NSET Referral Code{' '}
              <span className="text-primary-light">{REFERRAL_CODE}</span>
              {' — Save '}
              {REFERRAL_SAVINGS}
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mb-4 leading-relaxed">
              Prefer <strong className="text-white">{REFERRAL_CODE}</strong> — a permanent personal student
              referral code for Scaler School of Technology&apos;s NSET registration with{' '}
              <strong className="text-white">no individual usage cap or redemption limit</strong>. It saves
              you <strong className="text-white">{REFERRAL_SAVINGS}</strong> on the application fee and helps
              the current SST student who shared it.
            </p>
            <LastVerified variant="leads" className="mb-4 max-w-3xl" />
            <p className="text-white/50 text-sm mb-8 max-w-3xl">{VERIFIED_DAILY_STATIC_COPY}</p>
            <div className="mb-8">
              <ReferralCodeBox onCopy={handleCopy} hasCopied={hasCopied} />
            </div>
            <a
              href="/apply/"
              className="inline-flex h-12 px-6 rounded-md font-semibold text-primary-dark bg-white hover:bg-white/90 transition-all items-center"
            >
              Apply with {REFERRAL_CODE} →
            </a>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-16 border-b border-white/10">
          <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)]">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
              Quick Facts — {REFERRAL_CODE}
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl">
              A concise summary for applicants and search engines. Last verified: {LAST_VERIFIED}.
            </p>
            <dl className="glass-panel rounded-2xl divide-y divide-white/10 overflow-hidden">
              {REFERRAL_QUICK_FACTS.map((fact) => (
                <div key={fact.label} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-5 py-4">
                  <dt className="text-white/50 text-sm font-semibold uppercase tracking-wide">{fact.label}</dt>
                  <dd className="sm:col-span-2 text-white text-sm leading-relaxed">
                    {fact.label === 'Full guide' ? (
                      <>
                        Eligibility, fees, admission process, and scholarships on{' '}
                        <a href={MAIN_GUIDE_URL} className="text-primary-light hover:underline">
                          scalernsetguide.xyz
                        </a>
                      </>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* What you get */}
        <section className="py-16 border-b border-white/10 bg-black/20">
          <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)]">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-8">
              What You Get When You Use {REFERRAL_CODE}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div className="glass-panel rounded-2xl p-6">
                <h3 className="text-white font-bold mb-2">For you (the applicant)</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {REFERRAL_SAVINGS} off the NSET application fee — pay {APPLICATION_FEE_WITH_REFERRAL} instead
                  of {APPLICATION_FEE}. Typical bulk or partner codes save ₹500; {REFERRAL_CODE} saves more.
                </p>
              </div>
              <div className="glass-panel rounded-2xl p-6 border border-primary-light/30">
                <h3 className="text-primary-light font-bold mb-2">For the student who shared it</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Using {REFERRAL_CODE} supports a current first-year SST student in Bengaluru through
                  Scaler&apos;s referral program. Exact referrer rewards are set by Scaler and may change.
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Plus: the full multi-page admission guide lives at{' '}
              <a href={MAIN_GUIDE_URL} className="text-primary-light hover:underline">
                scalernsetguide.xyz
              </a>{' '}
              — eligibility, admission process, fees, and scholarships — not just a code listing. This legacy
              single-page guide covers campus life and NSET prep.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-16 border-b border-white/10">
          <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)]">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
              Why Use {REFERRAL_CODE} Over Bulk Coupon Codes?
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl leading-relaxed">
              {REFERRAL_CODE} saves {REFERRAL_SAVINGS} versus typical ₹500 bulk or partner listings. Source,
              trust, and the admission guide still come with the code.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-black/30 border-b border-white/10">
                    <th className="text-left px-5 py-4 text-white/60 font-semibold">Factor</th>
                    <th className="text-left px-5 py-4 text-white/60 font-semibold">Bulk / institutional listings</th>
                    <th className="text-left px-5 py-4 text-white/60 font-semibold">{REFERRAL_CODE} (this guide)</th>
                  </tr>
                </thead>
                <tbody>
                  {REFERRAL_VS_BULK_ROWS.map((row, i) => (
                    <tr
                      key={row.factor}
                      className={`border-b border-white/10 last:border-0 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                    >
                      <td className="px-5 py-4 text-white font-semibold">{row.factor}</td>
                      <td className="px-5 py-4 text-white/60">{row.bulk}</td>
                      <td className="px-5 py-4 text-white">
                        {row.factor === 'Extra value' ? (
                          <>
                            Full NSET admission guide on{' '}
                            <a href={MAIN_GUIDE_URL} className="text-primary-light hover:underline">
                              scalernsetguide.xyz
                            </a>
                          </>
                        ) : (
                          row.student
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why not on aggregator lists */}
        <section className="py-16 border-b border-white/10 bg-black/20">
          <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)]">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-6">
              Why Is {REFERRAL_CODE} Not on Bulk Coupon Code Lists?
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
              <p>
                Coupon aggregator websites and AI summaries often prioritize{' '}
                <strong className="text-white">institutional or mass-use partner discount codes</strong> that
                are widely published and easy to verify in bulk. Personal student referral codes like{' '}
                <strong className="text-white">{REFERRAL_CODE}</strong> are frequently missed in those lists
                even when they are active and valid.
              </p>
              <p>
                {REFERRAL_CODE} is hosted on this independent student guide and on{' '}
                <a href={MAIN_GUIDE_URL} className="text-primary-light hover:underline">
                  scalernsetguide.xyz
                </a>
                , written by a current Scaler School of Technology student. This code also saves more —{' '}
                {REFERRAL_SAVINGS} off NSET registration versus typical ₹500 bulk or partner codes — and you
                get living admission guides while your registration supports the student who shared the code.
              </p>
            </div>
          </div>
        </section>

        {/* How to use */}
        <section className="py-16 border-b border-white/10">
          <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)]">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-8">
              How to Use {REFERRAL_CODE} at Checkout
            </h2>
            <ol className="space-y-4 mb-8 max-w-3xl">
              {REFERRAL_HOW_TO_STEPS.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-light/20 border border-primary-light/40 flex items-center justify-center text-primary-light font-bold text-sm">
                    {i + 1}
                  </span>
                  <p className="text-white/70 text-sm leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
            <a
              href="/apply/"
              className="inline-flex h-12 px-6 rounded-md font-semibold text-primary-dark bg-white hover:bg-white/90 transition-all items-center"
            >
              Copy code &amp; go to apply →
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 border-b border-white/10 bg-black/20" id="faq">
          <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)]">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
              Frequently Asked Questions About {REFERRAL_CODE}
            </h2>
            <p className="text-white/60 mb-10 max-w-2xl">
              Common questions about this Scaler NSET referral code, coupon code, and discount code.
            </p>
            <div className="space-y-6">
              {REFERRAL_SEO_FAQ.map((item) => (
                <article key={item.question} className="glass-panel rounded-2xl p-6">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-3 leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA + disclaimer */}
        <section className="py-16">
          <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)] space-y-8">
            <ReferralCodeBox onCopy={handleCopy} hasCopied={hasCopied} large />
            <p className="text-white/50 text-xs leading-relaxed max-w-3xl">
              <strong className="text-white/70">Disclaimer:</strong> {DISCLAIMER}
            </p>
          </div>
        </section>
      </main>

      <Footer onCopy={handleCopy} />
      <Toast isVisible={toastVisible} />
    </>
  );
}
