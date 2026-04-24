import React from 'react';

function Background() {
  return (
    <div className="ambient-canvas">
      {/* 1. Grid Blueprint Dasar & CRT */}
      <div className="blueprint-grid"></div>
      <div className="crt-scanline"></div>
      <div className="vignette"></div>

      {/* 2. Lantai Cyberpunk 3D Bergerak di Bawah Layar */}
      <div className="cyber-grid-wrapper">
         <div className="cyber-grid-floor"></div>
      </div>

      {/* 3. Partikel Energi Melayang (Diperbanyak) */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle p-${i + 1}`}></div>
        ))}
      </div>
      
      {/* 4. Garis Sirkuit + DATA PACKETS (Sinyal Berjalan) */}
      <div className="circuit-lines">
        <div className="c-line horizontal hl-1">
            <div className="data-packet"></div>
        </div>
        <div className="c-line horizontal hl-2">
            <div className="data-packet reverse"></div>
        </div>
        <div className="c-line vertical vl-1">
            <div className="data-packet"></div>
        </div>
        <div className="c-line vertical vl-2">
            <div className="data-packet reverse"></div>
        </div>
      </div>

      {/* 5. Hujan Baris Kode */}
      <div className="floating-codes-container">
        <div className="float-code fc-1">{"const dev = new Engineer();"}</div>
        <div className="float-code fc-2">{"if(bug) { fix(); coffee++; }"}</div>
        <div className="float-code fc-3">{"while(alive) { code(); }"}</div>
        <div className="float-code fc-4">{"<MechanicUI />"}</div>
        <div className="float-code fc-5">{"sys.boot({ status: 'ONLINE' });"}</div>
        <div className="float-code fc-6">{"0x4D454348414E4943"}</div>
        <div className="float-code fc-7">{"function animateGears() { return true; }"}</div>
        <div className="float-code fc-8">{"[OK] SERVER CONNECTED"}</div>
      </div>

      {/* NEW: 6. ORNAMEN Hexagon Melayang */}
      <div className="floating-hexagons">
         <div className="hex hex-1"></div>
         <div className="hex hex-2"></div>
         <div className="hex hex-3"></div>
         <div className="hex hex-4"></div>
      </div>

      {/* 7. ORNAMEN: Radar Kiri Atas */}
      <div className="gear-group top-left">
        <svg className="gear gear-massive" viewBox="0 0 200 200" fill="none" stroke="rgba(0, 195, 255, 0.4)" strokeWidth="1">
          <circle cx="100" cy="100" r="90" strokeDasharray="4 12" strokeWidth="4"/>
          <circle cx="100" cy="100" r="70" strokeDasharray="20 10"/>
          <circle cx="100" cy="100" r="50" />
          <path d="M100 10 L100 190 M10 100 L190 100 M36 36 L164 164 M36 164 L164 36" stroke="rgba(0, 195, 255, 0.2)"/>
          <circle cx="100" cy="30" r="4" fill="rgba(0, 255, 136, 0.8)" stroke="none" />
        </svg>
      </div>

      {/* 8. ORNAMEN: Hexagon Tengah Kiri */}
      <div className="gear-group center-left">
         <svg className="gear gear-slow" viewBox="0 0 100 100" fill="none" stroke="rgba(0, 255, 136, 0.3)" strokeWidth="2">
            <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" strokeDasharray="5 5" />
            <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" />
            <circle cx="50" cy="50" r="5" fill="rgba(0, 255, 136, 0.6)"/>
         </svg>
      </div>

      {/* 9. ORNAMEN: Mesin Kanan Bawah */}
      <div className="gear-group bottom-right">
        <div className="radar-sweep"></div>
        <svg className="gear gear-large" viewBox="0 0 100 100" fill="none" stroke="rgba(0, 195, 255, 0.4)" strokeWidth="2">
          <circle cx="50" cy="50" r="35" strokeDasharray="4, 4" />
          <circle cx="50" cy="50" r="20" />
          <circle cx="50" cy="50" r="5" />
          <path d="M50 5 L55 15 M50 95 L45 85 M5 50 L15 45 M95 50 L85 55 M18 18 L28 28 M82 82 L72 72 M18 82 L28 72 M82 18 L72 28" />
        </svg>
        <svg className="gear gear-medium" viewBox="0 0 100 100" fill="none" stroke="rgba(0, 255, 136, 0.4)" strokeWidth="3">
          <circle cx="50" cy="50" r="25" />
          <circle cx="50" cy="50" r="10" />
          <path d="M50 15 L50 25 M50 75 L50 85 M15 50 L25 50 M75 50 L85 50 M25 25 L32 32 M68 68 L75 75 M25 75 L32 68 M68 25 L75 32" />
        </svg>
        <svg className="gear gear-small" viewBox="0 0 100 100" fill="none" stroke="rgba(0, 195, 255, 0.5)" strokeWidth="2">
          <circle cx="50" cy="50" r="15" />
          <circle cx="50" cy="50" r="4" />
          <path d="M50 25 L50 35 M50 65 L50 75 M25 50 L35 50 M65 50 L75 50" />
        </svg>
      </div>

    </div>
  );
}

export default Background;