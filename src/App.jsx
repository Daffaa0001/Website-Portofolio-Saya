import React, { Suspense, lazy } from 'react';
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
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FAFAFA', fontFamily: '"Inter", sans-serif', fontSize: '1rem', backgroundColor: '#09090B' }}>
    <p>Memuat Portofolio...</p>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;