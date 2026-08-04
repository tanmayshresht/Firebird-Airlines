import React from 'react';

function Dashboard() {
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
        .dash-container { background: var(--ink); color: var(--cream); font-family: 'Manrope', sans-serif; min-height: 100vh; padding: 6vh 6vw; }
        .dash-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 30px; }
        .dash-card { background: var(--ink-soft); border: 1px solid var(--line); border-radius: 16px; padding: 24px; }
      `}</style>
      <div className="dash-container">
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '2.5rem', fontWeight: 500 }}>Traveler Dashboard</h2>
        <p style={{ color: 'var(--cream-dim)', marginTop: '8px' }}>Manage your upcoming flights and profile details.</p>

        <div className="dash-grid">
          <div className="dash-card">
            <h4 style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Active Bookings</h4>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: '2rem', marginTop: '10px' }}>1 Flight</div>
            <p style={{ color: 'var(--cream-dim)', fontSize: '0.85rem', marginTop: '8px' }}>HYD → MAA | FB 204</p>
          </div>
          <div className="dash-card">
            <h4 style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Loyalty Miles</h4>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: '2rem', marginTop: '10px' }}>4,250 pts</div>
            <p style={{ color: 'var(--cream-dim)', fontSize: '0.85rem', marginTop: '8px' }}>Firebird Horizon Tier</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;