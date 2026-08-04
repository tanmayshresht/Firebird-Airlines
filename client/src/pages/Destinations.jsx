import React from 'react';
import { useNavigate } from 'react-router-dom';

function Destinations() {
  const navigate = useNavigate();

  const destinations = [
    { code: "MAA", city: "Chennai", fare: "₹2,199", gradient: "rgba(255,107,53,0.18)" },
    { code: "BLR", city: "Bengaluru", fare: "₹1,899", gradient: "rgba(247,179,43,0.16)" },
    { code: "DEL", city: "Delhi", fare: "₹3,450", gradient: "rgba(139,30,63,0.22)" },
    { code: "BOM", city: "Mumbai", fare: "₹2,760", gradient: "rgba(255,107,53,0.14)" },
    { code: "CCU", city: "Kolkata", fare: "₹3,120", gradient: "rgba(247,179,43,0.14)" },
    { code: "GOI", city: "Goa", fare: "₹2,410", gradient: "rgba(139,30,63,0.18)" },
    { code: "DXB", city: "Dubai", fare: "₹14,900", gradient: "rgba(255,107,53,0.2)" },
    { code: "SIN", city: "Singapore", fare: "₹18,300", gradient: "rgba(247,179,43,0.18)" },
  ];

  return (
    <>
      <style>{`
        :root {
          --ink: #14110F;
          --ink-soft: #211C18;
          --ember: #FF6B35;
          --gold: #F7B32B;
          --cream: #F4EDE4;
          --cream-dim: #C9BFB0;
          --line: rgba(244,237,228,0.14);
        }
        .page-container { background: var(--ink); color: var(--cream); font-family: 'Manrope', sans-serif; min-height: 100vh; padding: 6vh 6vw; }
        .dest-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; margin-top: 35px; }
        .dest-card {
          position: relative; border-radius: 16px; padding: 26px 22px; min-height: 190px;
          display: flex; flex-direction: column; justify-content: space-between;
          border: 1px solid var(--line); overflow: hidden; cursor: pointer;
          transition: transform .3s ease, border-color .3s ease;
        }
        .dest-card:hover { transform: translateY(-6px); border-color: var(--ember); }
      `}</style>
      <div className="page-container">
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '2.5rem', fontWeight: 500 }}>Where We Fly</h2>
        <p style={{ color: 'var(--cream-dim)', marginTop: '8px' }}>Six domestic anchors and two routes across the water.</p>

        <div className="dest-grid">
          {destinations.map((d, index) => (
            <div 
              key={index} 
              className="dest-card" 
              style={{ background: `linear-gradient(160deg, ${d.gradient}, transparent)` }}
              onClick={() => navigate(`/flights?to=${d.city}`)}
            >
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.1em' }}>{d.code}</div>
                <div style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '1.5rem', marginTop: '8px' }}>{d.city}</div>
              </div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: 'var(--cream-dim)', paddingTop: '14px' }}>
                From <b style={{ color: 'var(--cream)', fontWeight: 700 }}>{d.fare}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Destinations;