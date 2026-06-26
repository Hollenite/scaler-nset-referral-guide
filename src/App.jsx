import { motion, useScroll, useSpring } from 'framer-motion';

import { useActiveSection } from './hooks/useActiveSection';
import { useCopyReferral } from './hooks/useCopyReferral';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Toast from './components/Toast';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Who from './components/sections/Who';
import Nset from './components/sections/Nset';
import Referral from './components/sections/Referral';
import FAQ from './components/sections/FAQ';

const SECTION_IDS = ['top', 'about', 'experience', 'who', 'nset', 'referral', 'faq'];

export default function App() {
  const { handleCopy, hasCopied, toastVisible } = useCopyReferral();

  // Scroll progress bar — spring-smoothed
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-light to-success z-[60] origin-left pointer-events-none"
        style={{ scaleX }}
      />

      <Navbar onCopy={handleCopy} activeSection={activeSection} />

      <main>
        <Hero onCopy={handleCopy} hasCopied={hasCopied} />
        <About />
        <Experience />
        <Who />
        <Nset />
        <Referral onCopy={handleCopy} hasCopied={hasCopied} />
        <FAQ />
      </main>

      <Footer onCopy={handleCopy} />
      <Toast isVisible={toastVisible} />
    </>
  );
}
