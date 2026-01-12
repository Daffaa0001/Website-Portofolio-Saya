import React, { Suspense, lazy } from 'react';

// Komponen Utama (Diload langsung biar cepat muncul)
import Background from './components/Background';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Komponen Berat (Diload belakangan/Lazy)
// Ini bikin loading awal enteng karena browser gak perlu download semuanya langsung
const Profile = lazy(() => import('./components/Profile'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

// Tampilan Loading sementara (Spinner sederhana)
const LoadingFallback = () => (
  <div style={{ 
    height: '50vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    color: '#00c3ff',
    fontFamily: 'Outfit, sans-serif'
  }}>
    <p>Memuat konten...</p>
  </div>
);

function App() {
  return (
    <>
      <Background />
      <Navbar />
      
      <main>
        {/* Suspense menjaga agar web tidak error saat sedang download komponen */}
        <Suspense fallback={<LoadingFallback />}>
          <Profile />
          <hr className="divider" />
          <Skills />
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