import React, { Suspense, lazy } from 'react';

// Komponen Utama
import Background from './components/Background';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Komponen Lazy Load
const Profile = lazy(() => import('./components/Profile'));
const About = lazy(() => import('./components/About')); // KOMPONEN BARU TENTANG SAYA
const Skills = lazy(() => import('./components/Skills'));
const Workflow = lazy(() => import('./components/Workflow')); 
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

const LoadingFallback = () => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#00ff88', fontFamily: 'monospace', fontSize: '1.5rem' }}>
    <p>{">"} INITIALIZING_SYSTEM...</p>
  </div>
);

function App() {
  return (
    <>
      <Background />
      <Navbar />
      
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Profile />
          <hr className="divider" />
          <About /> {/* Disisipkan di sini */}
          <hr className="divider" />
          <Skills />
          <hr className="divider" />
          <Workflow />
          <hr className="divider" />
          <Projects />
          <hr className="divider" />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;