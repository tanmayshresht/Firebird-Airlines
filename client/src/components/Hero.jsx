import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        :root {
          --ink: #14110F;
          --ink-soft: #211C18;
          --ember: #FF6B35;
          --gold: #F7B32B;
          --ruby: #8B1E3F;
          --cream: #F4EDE4;
          --cream-dim: #C9BFB0;
          --line: rgba(244,237,228,0.14);
        }
        .firebird-landing {
          background: var(--ink);
          color: var(--cream);
          font-family: 'Manrope', sans-serif;
          overflow-x: hidden;
          min-height: 100vh;
        }
        .firebird-landing a { color: inherit; text-decoration: none; }
        
        .glow {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background: 
            radial-gradient(ellipse 900px 500px at 15% -5%, rgba(255,107,53,0.16), transparent 60%),
            radial-gradient(ellipse 700px 500px at 100% 10%, rgba(139,30,63,0.20), transparent 55%);
        }
        .hero-section {
          position: relative; z-index: 1;
          padding: 9vh 6vw 6vh;
          display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 40px;
          align-items: center;
        }
        .eyebrow {
          font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 22px;
          display: flex; align-items: center; gap: 10px;
        }
        .eyebrow::before { content: ''; width: 26px; height: 1px; background: var(--gold); }
        .hero-title {
          font-family: 'Fraunces', serif; font-weight: 500; font-style: italic;
          font-size: clamp(2.6rem, 5.4vw, 4.6rem); line-height: 1.04;
          letter-spacing: -0.01em;
        }
        .hero-title em {
          font-style: normal; font-weight: 600;
          background: linear-gradient(100deg, var(--ember), var(--gold));
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .hero-sub {
          margin-top: 22px; max-width: 460px; font-size: 1.06rem; line-height: 1.65;
          color: var(--cream-dim);
        }
        .hero-cta { display: flex; gap: 14px; margin-top: 34px; }
        .btn-custom {
          font-family: 'Manrope', sans-serif; font-weight: 700; font-size: 0.85rem;
          padding: 11px 22px; border-radius: 100px;
          background: var(--ember); color: var(--ink);
          border: 1px solid var(--ember);
          cursor: pointer; transition: transform .2s ease, box-shadow .2s ease;
          display: inline-block; text-align: center;
        }
        .btn-custom:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(255,107,53,0.35); }
        .btn-custom.ghost { background: transparent; color: var(--cream); border: 1px solid var(--line); }
        .btn-custom.ghost:hover { border-color: var(--ember); box-shadow: none; }

        .firebird-art { position: relative; height: 440px; }
        .firebird-art svg { width: 100%; height: 100%; }
        .path-line {
          fill: none; stroke: url(#trailGrad); stroke-width: 2;
          stroke-dasharray: 900; stroke-dashoffset: 900;
          animation: draw 2.4s ease forwards 0.4s;
        }
        @keyframes draw { to { stroke-dashoffset: 0; } }
        .plane-mark {
          transform-origin: center;
          animation: rise 2.4s ease forwards 0.4s;
          opacity: 0;
        }
        @keyframes rise {
          0% { opacity: 0; transform: translate(-40px,40px) rotate(-8deg); }
          100% { opacity: 1; transform: translate(0,0) rotate(0deg); }
        }

        .ticket-box {
          position: relative; z-index: 2;
          margin: 0 6vw 8vh;
          background: var(--cream); color: var(--ink);
          border-radius: 18px;
          display: grid; grid-template-columns: 1fr 1fr 1fr 1fr auto;
          box-shadow: 0 30px 60px rgba(0,0,0,0.45);
        }
        .ticket-field {
          padding: 20px 26px; border-right: 1px dashed rgba(20,17,15,0.2);
        }
        .ticket-field:last-of-type { border-right: none; }
        .ticket-field label {
          display: block; font-family: 'JetBrains Mono', monospace; font-size: 0.68rem;
          letter-spacing: 0.12em; text-transform: uppercase; color: rgba(20,17,15,0.5);
          margin-bottom: 6px;
        }
        .ticket-field .val { font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.15rem; }
        .ticket-field .sub2 { font-size: 0.78rem; color: rgba(20,17,15,0.55); margin-top: 2px; }
        .ticket-go {
          display: flex; align-items: center; justify-content: center;
          background: var(--ink); color: var(--cream); padding: 0 34px;
          border-radius: 0 18px 18px 0;
          font-weight: 700; font-size: 0.9rem; cursor: pointer; gap: 8px;
          transition: background .2s;
        }
        .ticket-go:hover { background: var(--ruby); }

        .board-section { padding: 10vh 6vw; position: relative; z-index: 1; }
        .section-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 44px; flex-wrap: wrap; gap: 16px; }
        .section-head h2 { font-family: 'Fraunces', serif; font-weight: 500; font-size: clamp(1.8rem,3vw,2.6rem); }
        .section-head p { color: var(--cream-dim); max-width: 360px; font-size: 0.95rem; line-height: 1.5; }

        .board {
          background: var(--ink-soft); border: 1px solid var(--line); border-radius: 14px;
          overflow: hidden;
        }
        .board-row {
          display: grid; grid-template-columns: 90px 1fr 110px 130px 110px;
          align-items: center; padding: 16px 26px;
          border-bottom: 1px solid var(--line);
          font-family: 'JetBrains Mono', monospace; font-size: 0.92rem;
        }
        .board-row:last-child { border-bottom: none; }
        .board-row.head {
          color: var(--cream-dim); font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase;
          padding-top: 14px; padding-bottom: 14px; background: rgba(255,255,255,0.02);
        }
        .flap {
          display: inline-block; background: var(--ink); border-radius: 4px;
          padding: 6px 10px; color: var(--gold); font-weight: 700;
          animation: flap 3.6s ease-in-out infinite;
        }
        @keyframes flap {
          0%, 92% { transform: none; filter: none; }
          94% { transform: scaleY(0.05); filter: blur(1px); }
          96% { transform: scaleY(1); }
        }
        .status-dot { display: inline-flex; align-items: center; gap: 7px; font-size: 0.82rem; }
        .status-dot .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--gold); }
        .status-dot.ok .dot { background: #7CC77E; }
        .status-dot.late .dot { background: var(--ember); }

        .features-grid { padding: 6vh 6vw 10vh; display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 18px; overflow: hidden; }
        .feature-item { background: var(--ink); padding: 44px 34px; }
        .feature-item .num { font-family: 'JetBrains Mono', monospace; color: var(--ember); font-size: 0.78rem; letter-spacing: 0.1em; }
        .feature-item h3 { font-family: 'Fraunces', serif; font-weight: 500; font-size: 1.4rem; margin: 18px 0 12px; }
        .feature-item p { color: var(--cream-dim); font-size: 0.92rem; line-height: 1.6; }

        .dest-section { padding: 6vh 6vw 10vh; }
        .dest-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-top: 40px; }
        .dest-card {
          position: relative; border-radius: 16px; padding: 26px 22px; min-height: 190px;
          display: flex; flex-direction: column; justify-content: space-between;
          border: 1px solid var(--line); overflow: hidden; cursor: pointer;
          transition: transform .3s ease, border-color .3s ease;
        }
        .dest-card:hover { transform: translateY(-6px); border-color: var(--ember); }
        .dest-card .content { position: relative; z-index: 1; }
        .dest-card .code { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--gold); letter-spacing: 0.1em; }
        .dest-card .city { font-family: 'Fraunces', serif; font-style: italic; font-size: 1.5rem; margin-top: 8px; }
        .dest-card .fare { font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--cream-dim); margin-top: auto; padding-top: 14px; }
        .dest-card .fare b { color: var(--cream); font-weight: 700; }

        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr; padding-top: 6vh; }
          .firebird-art { height: 280px; order: -1; }
          .ticket-box { grid-template-columns: 1fr 1fr; border-radius: 18px; }
          .ticket-field { border-right: none; border-bottom: 1px dashed rgba(20,17,15,0.2); }
          .ticket-go { grid-column: span 2; border-radius: 0 0 18px 18px; padding: 18px; }
          .features-grid { grid-template-columns: 1fr; }
          .dest-grid { grid-template-columns: 1fr 1fr; }
          .board-row { grid-template-columns: 60px 1fr 80px; font-size: 0.78rem; }
          .board-row :nth-child(4), .board-row :nth-child(5) { display: none; }
        }
      `}</style>

      <div className="firebird-landing">
        <div className="glow"></div>

        {/* HERO SECTION */}
        <section className="hero-section">
          <div>
            <div className="eyebrow">Now boarding · 42 cities</div>
            <h1 className="hero-title">
              Every flight <em>rises</em><br />from somewhere.
            </h1>
            <p className="hero-sub">
              Firebird Airlines connects Hyderabad, Chennai and Bengaluru to the rest of India — and a handful of places worth crossing an ocean for. No detours, no drama, just lift-off on time.
            </p>
            <div className="hero-cta">
              <a className="btn-custom" href="#board">See departures</a>
              <a className="btn-custom ghost" href="#destinations">Explore routes</a>
            </div>
          </div>
          <div className="firebird-art">
            <svg viewBox="0 0 400 400">
              <defs>
                <linearGradient id="trailGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8B1E3F" />
                  <stop offset="55%" stopColor="#FF6B35" />
                  <stop offset="100%" stopColor="#F7B32B" />
                </linearGradient>
              </defs>
              <path className="path-line" d="M50 340 C 120 320, 140 260, 190 230 S 290 150, 340 60" />
              <g className="plane-mark" transform="translate(320,50)">
                <path d="M0 0 L26 10 L0 20 L6 10 Z" fill="var(--gold)" />
              </g>
              <circle cx="50" cy="340" r="5" fill="var(--ruby)" />
            </svg>
          </div>
        </section>

        {/* TICKET WIDGET */}
        <div style={{ position: 'relative' }}>
          <div className="ticket-box">
            <div className="ticket-field">
              <label>From</label>
              <div className="val">HYD</div>
              <div className="sub2">Hyderabad</div>
            </div>
            <div className="ticket-field">
              <label>To</label>
              <div className="val">MAA</div>
              <div className="sub2">Chennai</div>
            </div>
            <div className="ticket-field">
              <label>Depart</label>
              <div className="val">14 Aug</div>
              <div className="sub2">Friday</div>
            </div>
            <div className="ticket-field">
              <label>Traveller</label>
              <div className="val">1 Adult</div>
              <div className="sub2">Economy</div>
            </div>
            <div className="ticket-go" onClick={() => navigate('/flights')}>
              Search flights →
            </div>
          </div>
        </div>

        {/* BOARD SECTION */}
        <section className="board-section" id="board">
          <div className="section-head">
            <div>
              <h2>Departures board</h2>
              <p>Live-style status for today's flights out of Hyderabad.</p>
            </div>
          </div>
          <div className="board">
            <div className="board-row head">
              <div>Flight</div><div>Destination</div><div>Gate</div><div>Time</div><div>Status</div>
            </div>
            <div className="board-row">
              <div><span className="flap">FB 204</span></div>
              <div>Chennai</div><div>Gate 4</div><div>06:20</div>
              <div className="status-dot ok"><span className="dot"></span>On time</div>
            </div>
            <div className="board-row">
              <div><span className="flap">FB 118</span></div>
              <div>Bengaluru</div><div>Gate 2</div><div>07:05</div>
              <div className="status-dot ok"><span className="dot"></span>On time</div>
            </div>
            <div className="board-row">
              <div><span className="flap">FB 331</span></div>
              <div>Delhi</div><div>Gate 9</div><div>08:40</div>
              <div className="status-dot late"><span className="dot"></span>Delayed 15m</div>
            </div>
            <div className="board-row">
              <div><span className="flap">FB 552</span></div>
              <div>Mumbai</div><div>Gate 6</div><div>09:15</div>
              <div className="status-dot ok"><span className="dot"></span>On time</div>
            </div>
            <div className="board-row">
              <div><span className="flap">FB 019</span></div>
              <div>Kolkata</div><div>Gate 1</div><div>10:00</div>
              <div className="status-dot ok"><span className="dot"></span>Boarding</div>
            </div>
            <div className="board-row">
              <div><span className="flap">FB 870</span></div>
              <div>Dubai</div><div>Gate 12</div><div>11:30</div>
              <div className="status-dot ok"><span className="dot"></span>On time</div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="features-grid" id="why" style={{ margin: '0 6vw' }}>
          <div className="feature-item">
            <div className="num">01</div>
            <h3>Fair fares, always shown whole</h3>
            <p>What you see at search is what you pay at checkout. No fees that appear at the last screen.</p>
          </div>
          <div className="feature-item">
            <div className="num">02</div>
            <h3>Built around short layovers</h3>
            <p>Our hub scheduling favours 45–60 minute connections, not two-hour waits at the gate.</p>
          </div>
          <div className="feature-item">
            <div className="num">03</div>
            <h3>One bag, no arguments</h3>
            <p>15kg check-in and a full-size cabin bag included in every fare, every route.</p>
          </div>
        </section>

        {/* DESTINATIONS SECTION */}
        <section className="dest-section" id="destinations">
          <div className="section-head">
            <div>
              <h2>Where we fly</h2>
              <p>Six domestic anchors and two routes across the water.</p>
            </div>
          </div>
          <div className="dest-grid">
            <div className="dest-card" style={{ background: 'linear-gradient(160deg, rgba(255,107,53,0.18), transparent)' }}>
              <div className="content">
                <div className="code">MAA</div>
                <div className="city">Chennai</div>
              </div>
              <div className="fare">From <b>₹2,199</b></div>
            </div>
            <div className="dest-card" style={{ background: 'linear-gradient(160deg, rgba(247,179,43,0.16), transparent)' }}>
              <div className="content">
                <div className="code">BLR</div>
                <div className="city">Bengaluru</div>
              </div>
              <div className="fare">From <b>₹1,899</b></div>
            </div>
            <div className="dest-card" style={{ background: 'linear-gradient(160deg, rgba(139,30,63,0.22), transparent)' }}>
              <div className="content">
                <div className="code">DEL</div>
                <div className="city">Delhi</div>
              </div>
              <div className="fare">From <b>₹3,450</b></div>
            </div>
            <div className="dest-card" style={{ background: 'linear-gradient(160deg, rgba(255,107,53,0.14), transparent)' }}>
              <div className="content">
                <div className="code">BOM</div>
                <div className="city">Mumbai</div>
              </div>
              <div className="fare">From <b>₹2,760</b></div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Hero;