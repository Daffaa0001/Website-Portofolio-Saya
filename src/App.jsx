import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Profile = lazy(() => import('./components/Profile'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Workflow = lazy(() => import('./components/Workflow')); 
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

const LoadingFallback = () => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FAFAFA', fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '1rem', backgroundColor: '#09090B' }}>
    <p>Memuat Portofolio...</p>
  </div>
);

function App() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const introRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to({ val: 0 }, {
        val: 100,
        duration: 2.5,
        ease: "power2.out",
        onUpdate: function() {
          setProgress(Math.round(this.targets()[0].val));
        },
        onComplete: () => {
          gsap.to(introRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
            delay: 0.8,
            onComplete: () => setIsLoaded(true)
          });
          gsap.fromTo(mainRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, delay: 0.8, ease: "power4.out" }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {!isLoaded && (
        <div ref={introRef} className="intro-screen">
          <div className="loader-content">
            <div className="counter">{progress}%</div>
            <div className={`loader-name ${progress === 100 ? 'visible' : ''}`}>
              Muhammad Daffa Adnaputra
            </div>
          </div>
        </div>
      )}
      
      <div style={{ visibility: isLoaded ? 'visible' : 'hidden', height: isLoaded ? 'auto' : '100vh', overflow: isLoaded ? 'visible' : 'hidden' }}>
        <Navbar />
        <div ref={mainRef}>
          <main>
            <Suspense fallback={<LoadingFallback />}>
              <Profile />
              <About />
              <Experience />
              <Skills />
              <Workflow />
              <Projects />
              <Contact />
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;