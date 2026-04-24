import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Profile() {
  const profileRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".text-content, .profile-img-wrapper", {
        autoAlpha: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.3,
        delay: 0.5 
      });
    }, profileRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section id="home" className="profile section" ref={profileRef}>
      <div className="profile-content">
        <div className="text">
          <div className="terminal-welcome">
            <span className="typewriter-text">{">"} SYSTEM_BOOT... ACCESS GRANTED.</span>
          </div>

          <div className="text-content">
            <h1>Halo, Saya <br/><span>Muhammad Daffa</span></h1>
            <p className="subtitle-code">{"<FrontEnd_Engineer />"}</p>
            
            {/* Status Panel Terminal untuk mengisi ruang */}
            <ul className="hero-stats">
               <li><span>[STATUS]</span> ONLINE & READY</li>
               <li><span>[ROLE]</span> WEB DEVELOPMENT / UI DESIGN</li>
               <li><span>[BASE]</span> INDONESIA</li>
            </ul>

            <div className="btn-group">
              <a href="#about" className="btn">Tentang Saya</a>
              <a href="#projects" className="btn btn-outline">Lihat Proyek</a>
            </div>
          </div>
        </div>
        
        <div className="profile-img-wrapper">
          {/* FOTO ADA DI SINI. Pastikan file daps.png ada di dalam folder 'public/foto/' */}
          <img 
            src="/foto/daps.png" 
            alt="Profil Daffa" 
            className="profile-img" 
          />
          <div className="corner-tl"></div>
          <div className="corner-br"></div>
        </div>
      </div>
    </section>
  );
}

export default Profile;