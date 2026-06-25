import { useEffect, useMemo, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { Contact, Faq, Hero, Portfolio, Process, Services, Stats, Testimonials, WhyChoose } from './sections.jsx';
import { Footer, Header, Loader } from './layout.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -90]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [mouseX, mouseY]);

  const glowStyle = useMemo(
    () => ({
      left: mouseX,
      top: mouseY,
    }),
    [mouseX, mouseY],
  );

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <motion.div className="cursor-glow" style={glowStyle} aria-hidden="true" />
      {loading && <Loader />}
      <div className="site-shell">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
        <main>
          <Hero scrollTo={scrollTo} heroY={heroY} />
          <Services />
          <WhyChoose />
          <Process />
          <Portfolio />
          <Stats />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <Footer scrollTo={scrollTo} />
      </div>
    </>
  );
}
