import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null); 
  
  // ID Formspree Anda
  const [state, handleSubmit] = useForm("mrbrgdgp"); 

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-form, .socials", { 
        scrollTrigger: {
          trigger: ".contact",
          start: "top 80%",
        },
        autoAlpha: 0, 
        y: 80,
        duration: 1.2,
        stagger: 0.3,
      });
    }, contactRef); 

    return () => ctx.revert();
    
  }, []);

  return (
    <section id="contact" className="contact section" ref={contactRef}>
      <h2>Hubungi Saya</h2>
      <div className="contact-container">
        
        {/* FORMULIR */}
        <form onSubmit={handleSubmit} className="contact-form">
          {state.succeeded ? (
            <div style={{padding: '1rem', textAlign: 'center', color: '#00c3ff'}}>
              <h3>Terima kasih!</h3>
              <p>Pesan Anda telah terkirim. Saya akan segera merespon.</p>
            </div>
          ) : (
            <>
              <input 
                id="nama"
                type="text" 
                name="Nama" 
                placeholder="Nama Anda" 
                required 
              />
              <input 
                id="email"
                type="email" 
                name="Email" 
                placeholder="Email Anda" 
                required 
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <textarea 
                id="message"
                name="Pesan" 
                placeholder="Pesan Anda..." 
                required
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              <button type="submit" disabled={state.submitting}>
                {state.submitting ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </>
          )}
        </form>
        
        {/* SOCIAL MEDIA */}
        <div className="socials">
          <h3>Media Sosial</h3>
          <div className="icons">
            <a href="https://www.linkedin.com/in/muhammad-daffa-adnaputra-b659a4310/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/mdaffaa_a/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@daffaadnaputra" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.tiktok.com/@daapss__" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Contact;