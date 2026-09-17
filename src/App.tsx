import { Navigation } from './components/Navigation';
import { FloatingContact } from './components/FloatingContact';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { motion, useScroll, useSpring } from 'motion/react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-brand-light relative">
      <ScrollToTop />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-brand-accent origin-left z-[100]"
        style={{ scaleX }}
      />
      <Navigation />
      {children}
      <Footer />
      <FloatingContact />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
