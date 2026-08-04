import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        :root {
          --ink: #14110F;
          --ember: #FF6B35;
          --gold: #F7B32B;
          --cream: #F4EDE4;
          --cream-dim: #C9BFB0;
          --line: rgba(244,237,228,0.14);
        }
        .navbar-custom {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 6vw;
          background: rgba(20, 17, 15, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line);
          font-family: 'Manrope', sans-serif;
        }
        .logo-box {
          display: flex; align-items: center; gap: 12px;
          font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.25rem;
          color: var(--cream); cursor: text;
        }
        .logo-icon {
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(135deg, var(--ember), var(--gold));
          color: var(--ink); font-weight: bold;
        }
        .nav-links-box { display: flex; align-items: center; gap: 32px; font-size: 0.92rem; color: var(--cream-dim); }
        .nav-links-box a { transition: color 0.2s ease; }
        .nav-links-box a:hover { color: var(--ember); }
        .nav-actions { display: flex; align-items: center; gap: 20px; }
        .btn-login { font-size: 0.9rem; color: var(--cream-dim); background: none; border: none; cursor: pointer; transition: color 0.2s; }
        .btn-login:hover { color: var(--cream); }
        .btn-book {
          font-family: 'Manrope', sans-serif; font-weight: 700; font-size: 0.85rem;
          padding: 10px 22px; border-radius: 100px;
          background: var(--ember); color: var(--ink);
          border: none; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-book:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(255,107,53,0.35); }
      `}</style>

      <nav className="navbar-custom">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo-box">
            <div className="logo-icon">✈</div>
            <div>
              <div style={{ lineHeight: '1.1' }}>FIREBIRD</div>
              <div style={{ fontSize: '9px', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.2em', color: 'var(--gold)' }}>AIRLINES</div>
            </div>
          </div>
        </Link>

        <div className="nav-links-box">
          <Link to="/">Home</Link>
          <Link to="/flights">Flights</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-actions">
          <button className="btn-login" onClick={() => navigate('/login')}>Login</button>
          <button className="btn-book" onClick={() => navigate('/flights')}>Book Now</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;