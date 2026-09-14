import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Check if the user is logged in (based on localStorage)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    // Clear session/local storage without any popup
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');

    // Redirect to login page
    navigate('/login');
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

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
        .nav-links-box a { transition: color 0.2s ease; text-decoration: none; color: inherit; }
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

        /* Hamburger button — hidden on desktop by default */
        .hamburger-btn {
          display: none;
          background: none; border: none; cursor: pointer;
          flex-direction: column; gap: 5px; padding: 6px;
          z-index: 60;
        }
        .hamburger-btn span {
          width: 24px; height: 2px; background: var(--cream);
          border-radius: 2px; transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .hamburger-btn.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger-btn.open span:nth-child(2) { opacity: 0; }
        .hamburger-btn.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile dropdown panel */
        .mobile-menu {
          position: fixed; top: 0; right: 0; height: 100vh; width: 75%; max-width: 320px;
          background: var(--ink); border-left: 1px solid var(--line);
          padding: 100px 32px 32px;
          display: flex; flex-direction: column; gap: 26px;
          transform: translateX(100%); transition: transform 0.3s ease;
          z-index: 55;
        }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-menu a { color: var(--cream); text-decoration: none; font-size: 1.1rem; }
        .mobile-menu a:hover { color: var(--ember); }
        .mobile-menu .btn-book { width: 100%; text-align: center; }
        .mobile-menu .btn-login { text-align: left; font-size: 1rem; }

        .menu-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.5);
          z-index: 54; opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
        }
        .menu-overlay.open { opacity: 1; pointer-events: auto; }

        @media (max-width: 900px) {
          .nav-links-box, .nav-actions { display: none; }
          .hamburger-btn { display: flex; }
        }
      `}</style>

      <nav className="navbar-custom">
        <Link to="/" style={{ textDecoration: 'none' }} onClick={closeMenu}>
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
          {isLoggedIn ? (
            <button className="btn-login" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="btn-login" onClick={() => navigate('/login')}>Login</button>
          )}
          <button className="btn-book" onClick={() => navigate('/flights')}>Book Now</button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Overlay + mobile menu */}
      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/flights" onClick={closeMenu}>Flights</Link>
        <Link to="/destinations" onClick={closeMenu}>Destinations</Link>
        <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        {isLoggedIn ? (
          <button className="btn-login" onClick={handleLogout}>Logout</button>
        ) : (
          <button className="btn-login" onClick={() => { navigate('/login'); closeMenu(); }}>Login</button>
        )}
        <button className="btn-book" onClick={() => { navigate('/flights'); closeMenu(); }}>Book Now</button>
      </div>
    </>
  );
}

export default Navbar;