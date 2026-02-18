import React, { useState, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import CinematicContainer from './components/cinematic/CinematicContainer';
import LoadingScreen from './components/cinematic/LoadingScreen';

// Lazy load heavy components below the fold
const PhilosophySection = lazy(() => import('./components/PhilosophySection'));
const OriginsSection = lazy(() => import('./components/OriginsSection'));
const FAQ = lazy(() => import('./components/FAQ'));
const FooterCTA = lazy(() => import('./components/FooterCTA'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <Suspense fallback={<div className="h-screen bg-white" />}>
          <div>
            <CinematicContainer />
            <PhilosophySection />
            <OriginsSection />
            <FAQ />
            <FooterCTA />
            <Footer />
          </div>
        </Suspense>
      )}
    </>
  );
}

export default App;
