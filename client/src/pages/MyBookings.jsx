import React, { useState, useEffect } from 'react';

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('firebird_bookings') || '[]');
    setBookings(saved);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --ink: #14110F; --ink-soft: #211C18; --ember: #FF6B35; --gold: #F7B32B;
          --cream: #F4EDE4; --cream-dim: #C9BFB0; --line: rgba(244,237,228,0.14);
        }
        .mybookings-container { background: var(--ink); color: var(--cream); font-family: 'Manrope', sans-serif; min-height: 100vh; padding: 6vh 6vw; }
        .booking-item-card { background: var(--ink-soft); border: 1px solid var(--line); border-radius: 16px; padding: 24px; margin-bottom: 20px; display: grid; grid-template-columns: 1fr auto; gap: 20px; }
        .meta-text { font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: var(--cream-dim); margin-top: 4px; }
      `}</style>

      <div className="mybookings-container">
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '2.5rem', fontWeight: 500, marginBottom: '8px' }}>My Bookings</h2>
        <p style={{ color: 'var(--cream-dim)', marginBottom: '30px' }}>Access all your ticket histories and PNR records stored securely.</p>

        {bookings.length > 0 ? (
          bookings.map((b, idx) => (
            <div key={idx} className="booking-item-card">
              <div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <span style={{ background: 'var(--ink)', padding: '6px 10px', borderRadius: '6px', color: 'var(--gold)', fontFamily: 'JetBrains Mono', fontWeight: 'bold' }}>{b.flightNumber}</span>
                  <h4 style={{ fontFamily: 'Fraunces', fontSize: '1.3rem' }}>{b.from} → {b.to}</h4>
                </div>
                <div className="meta-text" style={{ marginTop: '12px' }}>
                  PNR: <b>{b.pnr}</b> | Passenger: <b>{b.passengerName}</b> | Seat: <b style={{ color: 'var(--ember)' }}>{b.seat}</b>
                </div>
                <div className="meta-text">
                  Journey Date: {b.date} ({b.time}) | Booked on: {b.bookingTime}
                </div>
              </div>
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--gold)', fontFamily: 'JetBrains Mono', fontWeight: 'bold', fontSize: '1.1rem' }}>{b.totalFare}</span>
                <span style={{ background: 'rgba(124,199,126,0.15)', color: '#7CC77E', padding: '6px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 'bold', fontFamily: 'JetBrains Mono' }}>{b.status}</span>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '60px', color: 'var(--cream-dim)' }}>
            <p style={{ fontSize: '1.2rem' }}>No bookings found yet.</p>
            <p style={{ fontSize: '0.85rem', marginTop: '8px' }}>Book a flight from the search page to view records here!</p>
          </div>
        )}
      </div>
    </>
  );
}

export default MyBookings;