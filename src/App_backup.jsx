import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { CommandBarProvider } from './context/CommandBarContext';
import useSmoothScroll from './hooks/useSmoothScroll';

import AuroraBackground from './components/canvas/AuroraBackground';
import ParticleCanvas from './components/canvas/ParticleCanvas';
import MouseGlow from './components/canvas/MouseGlow';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import CommandPalette from './components/common/CommandPalette';
import LoadingScreen from './components/common/LoadingScreen';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  useSmoothScroll();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Suspense fallback={null}><Home /></Suspense></PageWrapper>} />
        <Route path="/product" element={<PageWrapper><Suspense fallback={null}><Product /></Suspense></PageWrapper>} />
        <Route path="/pricing" element={<PageWrapper><Suspense fallback={null}><Pricing /></Suspense></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><Suspense fallback={null}><About /></Suspense></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Suspense fallback={null}><Contact /></Suspense></PageWrapper>} />
        <Route path="*" element={<PageWrapper><Suspense fallback={null}><NotFound /></Suspense></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <HelmetProvider>
      <CommandBarProvider>
        <BrowserRouter>
          {/* Cinematic loading screen */}
          {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

          {loaded && (
            <>
              {/* Global ambient layers */}
              <AuroraBackground />
              <ParticleCanvas />
              <MouseGlow />

              {/* Scroll progress bar */}
              <ScrollProgress />

              {/* Command palette (Cmd+K) */}
              <CommandPalette />

              {/* Site layout */}
              <Navbar />
              <AnimatedRoutes />
              <Footer />
            </>
          )}
        </BrowserRouter>
      </CommandBarProvider>
    </HelmetProvider>
  );
}
