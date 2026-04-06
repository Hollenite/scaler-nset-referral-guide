import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ChevronDown } from 'lucide-react';

const Navbar = ({ onCopy }) => (
  <header className="sticky top-0 z-50 bg-primary-dark/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)] flex flex-col sm:flex-row items-center justify-between py-4 sm:h-16 gap-4 sm:gap-0">
      <a href="#top" className="font-heading font-bold text-[1.1rem] text-white flex items-center gap-2.5 tracking-tight">
        <span className="w-2 h-2 bg-success rounded-full shadow-[0_0_12px_rgba(34,197,94,0.6)]"></span>
        Scaler NSET Guide
      </a>
      <nav className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-6 items-center w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
        {['About SST', 'Experience', 'NSET Guide', 'FAQ'].map(item => (
          <a key={item} href={`#${item.split(' ')[0].toLowerCase()}`} className="text-[0.95rem] font-medium text-white/70 hover:text-primary-light transition-colors relative group whitespace-nowrap px-2 sm:px-0">
            {item}
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary-light scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        ))}
        <button onClick={onCopy} className="bg-white/10 hover:bg-white/20 text-white px-4 h-10 rounded-md font-semibold text-sm transition-colors border border-white/10 shrink-0 ml-2">
          Get Code
        </button>
      </nav>
    </div>
  </header>
);

const Hero = ({ onCopy, hasCopied }) => (
  <section className="py-20 border-b border-white/10" id="top">
    <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)] grid grid-cols-1 md:grid-cols-[1fr_380px] gap-12 md:gap-16 items-start">
      <div className="order-2 md:order-1">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block text-[0.8rem] font-semibold tracking-widest uppercase text-primary-light mb-4 px-3 py-1.5 glass-sub-panel rounded-full">
          Student-written guide
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight tracking-tight text-white">
          Scaler NSET Guide<br/><span className="text-primary-light">+ Referral Code</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-[1.1rem] max-w-[56ch] mb-8 leading-relaxed text-white/70">
          This page is for students researching <strong className="text-white">Scaler School of Technology</strong>, the <strong className="text-white">NSET exam</strong>,
          and whether SST makes sense compared to more traditional college paths. Instead of scattered threads and incomplete answers,
          this puts the key points in one place.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4">
          <button onClick={onCopy} className="h-12 px-6 rounded-md font-semibold text-primary-dark bg-white hover:bg-white/90 transition-colors flex items-center gap-2">
            Get referral code
          </button>
          <a href="#nset" className="h-12 px-6 rounded-md font-semibold text-white glass-sub-panel hover:bg-white/10 transition-colors flex items-center justify-center">
            Read NSET guide
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-panel p-8 rounded-2xl order-1 md:order-2" id="code">
        <div className="mb-6">
          <div className="text-[0.8rem] font-medium text-white/70 uppercase tracking-widest mb-3">NSET referral code</div>
          <div className="flex items-center gap-3 mb-4">
            <div className="font-code text-3xl sm:text-4xl text-white tracking-[0.1em] drop-shadow-[0_0_24px_rgba(34,197,94,0.3)]">
              ARIYD8B6
            </div>
            <button onClick={onCopy} className="w-11 h-11 rounded-md glass-sub-panel hover:bg-white/10 flex items-center justify-center text-white transition-colors" aria-label="Copy code">
              {hasCopied ? <Check size={18} className="text-success" /> : <Copy size={18} />}
            </button>
          </div>
          <div className="text-[0.95rem] text-white/80 leading-relaxed">
            Use during registration for a <span className="inline-block text-success bg-success/15 px-2 py-0.5 rounded-full font-semibold">₹500 off</span> the exam fee.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
          {[
            { l: 'Subjects', v: 'Maths + LR'},
            { l: 'Interviews', v: '2-3 rounds'},
            { l: 'Campus', v: 'Bengaluru'},
            { l: 'Focus', v: 'Software Dev'}
          ].map(stat => (
            <div key={stat.l}>
              <span className="block text-[0.75rem] text-white/50 uppercase tracking-widest mb-1">{stat.l}</span>
              <span className="text-[0.9rem] text-white/90">{stat.v}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const RevealSection = ({ id, num, title, children }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 30 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="py-16 md:py-20 border-b border-white/10"
  >
    <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)]">
      <span className="font-heading text-[0.9rem] text-primary-light mb-2 block font-bold leading-tight tracking-tight">0{num}.</span>
      <h2 className="font-heading text-3xl md:text-4xl mb-8 tracking-tight text-white">{title}</h2>
      {children}
    </div>
  </motion.section>
);

const Toast = ({ isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] glass-panel px-4 py-3 rounded-xl flex items-center gap-3 text-white shadow-2xl border-success/30"
      >
        <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success">
          <Check size={14} strokeWidth={3} />
        </div>
        <span className="font-medium text-sm">Code ARIYD8B6 copied to clipboard!</span>
      </motion.div>
    )}
  </AnimatePresence>
);

const App = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ARIYD8B6');
    setHasCopied(true);
    setToastVisible(true);
    setTimeout(() => {
      setHasCopied(false);
      setToastVisible(false);
    }, 3000);
  };

  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <>
      <Navbar onCopy={handleCopy} />
      <main>
        <Hero onCopy={handleCopy} hasCopied={hasCopied} />

        <RevealSection id="about" num={1} title="What is Scaler School of Technology?">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start glass-panel rounded-2xl p-6 md:p-8">
            <div className="text-white/70 space-y-4">
              <p>
                Scaler School of Technology is a software-focused undergraduate path based in <strong className="text-white">Bengaluru</strong>.
                The major difference from a traditional BTech route is the curriculum focus. SST is much more centered around
                software development, computer science fundamentals, and problem solving early on.
              </p>
              <p>
                For many students, the real comparison is not just "good or bad" but whether they want a broader engineering route,
                or a more direct software-oriented environment from the start.
              </p>
            </div>
            <ul className="space-y-4 border-l border-white/10 pl-6 text-white/80">
              {['Software-focused learning environment', 'Bengaluru-based campus with hostel accommodation nearby', 'Peer group that is generally more coding-oriented', 'Alternative route for students comparing JEE, CUET, private entrances, and other college options'].map((item, i) => (
                <li key={i} className="relative before:content-[''] before:absolute before:-left-[24px] before:top-2.5 before:w-2 before:h-px before:bg-primary-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        <RevealSection id="experience" num={2} title="Student Experience">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {tag: 'Learning environment', title: 'Coding-first peer group', desc: 'From a student perspective, one of the noticeable things about SST is that many students actually spend time on coding, projects, and development. That makes the peer environment feel more aligned with software engineering.'},
              {tag: 'Campus life', title: 'Campus and hostel', desc: 'The campus is smaller than large traditional universities, but the surrounding area is calm and green. The hostel is about 1.5 km away, which makes commuting manageable. Students also get Cult gym passes.'},
              {tag: 'Things to weigh', title: 'Important tradeoffs', desc: 'SST is still relatively new compared to older engineering colleges, and the fees are higher than many traditional options. Those are valid concerns and should be part of the decision.'}
            ].map(card => (
              <div key={card.title} className="glass-panel p-8 rounded-2xl">
                <span className="text-[0.75rem] uppercase tracking-widest text-primary-light mb-4 block font-semibold">{card.tag}</span>
                <h3 className="font-heading text-xl mb-3 text-white">{card.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection id="who" num={3} title="Who should consider SST?">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-2xl border-success/20 bg-success/5">
              <h3 className="font-heading text-xl mb-6 text-white border-b border-white/10 pb-4">SST may make sense if you:</h3>
              <ul className="space-y-3">
                {['are genuinely interested in coding and software development', 'enjoy building projects or solving programming problems', 'want a peer group where many students are focused on tech', 'are okay with joining a relatively new institution', 'can comfortably manage the fees'].map(t => (
                  <li key={t} className="flex gap-3 text-white/80"><span className="text-success font-bold">✓</span> {t}</li>
                ))}
              </ul>
            </div>
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="font-heading text-xl mb-6 text-white border-b border-white/10 pb-4">A traditional BTech may be safer if you:</h3>
              <ul className="space-y-3">
                {['want the security of a long-established college', 'prefer a broader engineering curriculum', 'care a lot about lower overall cost', 'want a larger and more conventional campus experience'].map(t => (
                  <li key={t} className="flex gap-3 text-white/80"><span className="text-white/40">→</span> {t}</li>
                ))}
              </ul>
            </div>
          </div>
        </RevealSection>

        <RevealSection id="nset" num={4} title="NSET Exam Guide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="font-heading text-xl mb-4 text-white">What is in NSET?</h3>
              <ul className="space-y-2 mb-4">
                <li className="text-white/80 pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-primary-light">Mathematics</li>
                <li className="text-white/80 pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-primary-light">Logical Reasoning</li>
              </ul>
              <p className="text-white/70 text-sm">The maths section can be fairly difficult, so it should not be ignored. Logical reasoning is also important because it helps maximize the overall score.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="font-heading text-xl mb-4 text-white">How to think about preparation</h3>
              <ul className="space-y-2">
                {['Practice mathematics consistently', 'Work on logical reasoning speed and accuracy', 'Remember there is an individual cutoff for mathematics', 'Be ready for interview rounds after the written exam'].map(t => (
                  <li key={t} className="text-white/80 pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-primary-light">{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="glass-sub-panel bg-primary-med/10 border-l-2 border-l-primary-light p-6 rounded-r-xl text-white/80 text-sm">
            After the written test, candidates usually go through multiple interview rounds. A common pattern is <strong className="text-white">2 to 3 interviews</strong>, depending on performance and process flow.
          </div>
        </RevealSection>

        <RevealSection id="referral" num={5} title="Referral code for NSET registration">
          <p className="text-white/70 mb-6 max-w-[60ch]">
            If you were specifically searching for a <strong className="text-white">Scaler referral code</strong>, <strong className="text-white">NSET referral code</strong>, 
            or a code for ₹500 off, the one used here is below.
          </p>
          <div className="glass-panel max-w-lg p-6 md:p-8 rounded-2xl">
            <div className="text-[0.75rem] uppercase tracking-widest text-primary-light mb-4 block font-semibold">USE DURING NSET REGISTRATION</div>
            <div className="font-code text-4xl sm:text-5xl font-bold text-white tracking-[0.1em] drop-shadow-[0_0_24px_rgba(34,197,94,0.3)] mb-6 flex items-center justify-between">
              <span>ARIYD8B6</span>
              <button onClick={onCopy} className="w-12 h-12 rounded-lg glass-sub-panel hover:bg-white/10 flex items-center justify-center text-white transition-colors" aria-label="Copy code">
                {hasCopied ? <Check size={20} className="text-success" /> : <Copy size={20} />}
              </button>
            </div>
            <p className="text-white/80 text-sm">This gives <strong className="text-white">₹500 off</strong> the NSET registration fee.</p>
          </div>
        </RevealSection>

        <RevealSection id="faq" num={6} title="FAQ">
          <div className="border-t border-white/10">
            {[
              { q: 'Is Scaler School of Technology worth it?', a: 'That depends on what you want. If you want a software-focused environment and are comfortable with a newer institution and higher fees, it can make sense. If you want a more traditional engineering college path, BTech may be the safer option.' },
              { q: 'Is NSET difficult?', a: 'The mathematics section can be fairly difficult, and logical reasoning is important as well. Balanced preparation matters.' },
              { q: 'Is there an interview after NSET?', a: 'Yes. Candidates typically go through multiple interview rounds after the written exam.' },
              { q: 'What is the Scaler NSET referral code?', a: 'The code is ARIYD8B6. It gives ₹500 off the NSET registration fee.' },
            ].map((item, i) => (
              <div key={i} className="border-b border-white/10">
                <button 
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left font-semibold text-[1.05rem] text-white focus:outline-none"
                >
                  {item.q}
                  <ChevronDown className={`transform transition-transform text-primary-light min-w-5 min-h-5 ml-4 ${faqOpen === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {faqOpen === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-white/70 max-w-[72ch]">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </RevealSection>
      </main>

      <footer className="py-12 border-t border-white/5 bg-black/20">
        <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="font-heading font-bold text-[1.2rem] text-white mb-1">Scaler NSET Guide</div>
            <p className="text-[0.9rem] text-white/50">Student-written guide to SST and NSET.</p>
          </div>
          <button onClick={onCopy} className="h-11 px-6 rounded-md glass-sub-panel text-white hover:bg-white/10 transition-colors font-semibold text-sm">
            See referral code
          </button>
        </div>
      </footer>

      <Toast isVisible={toastVisible} />
    </>
  );
};

export default App;
