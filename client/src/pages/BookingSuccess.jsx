import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking || {
    bookingId: "BID882910", pnr: "FB-X9Q2L1", flightNumber: "FB 204", from: "New Delhi (DEL)",
    to: "Mumbai (BOM)", date: "2026-08-05", time: "09:00 AM", passengerName: "John Doe", seat: "12A", totalFare: "₹4,199"
  };

  return (
    <>
      <style>{`
        :root {
          --ink: #14110F; --ink-soft: #211C18; --ember: #FF6B35; --gold: #F7B32B;
          --cream: #F4EDE4; --cream-dim: #C9BFB0; --line: rgba(244,237,228,0.14);
        }
        .success-container { background: var(--ink); color: var(--cream); font-family: 'Manrope', sans-serif; min-height: 100vh; padding: 6vh 6vw; display: flex; justify-content: center; align-items: center; }
        .success-card { background: var(--ink-soft); border: 1px solid var(--line); border-radius: 20px; padding: 40px; width: 100%; max-width: 600px; text-align: center; box-shadow: 0 30px 60px rgba(0,0,0,0.5); }
        .ticket-box { background: var(--ink); border: 1px dashed var(--gold); border-radius: 14px; padding: 24px; text-align: left; margin: 20px 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; }
        .btn-group { display: flex; gap: 15px; margin-top: 25px; }
        .btn-primary { flex: 1; padding: 14px; border-radius: 100px; background: var(--ember); color: var(--ink); font-weight: 700; border: none; cursor: pointer; }
        .btn-secondary { flex: 1; padding: 14px; border-radius: 100px; background: transparent; border: 1px solid var(--line); color: var(--cream); font-weight: 700; cursor: pointer; }
      `}</style>

      <div className="success-container">
        <div className="success-card">
          <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🎉</div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '2rem', color: 'var(--gold)' }}>Booking Successful!</h2>
          <p style={{ color: 'var(--cream-dim)', fontSize: '0.9rem', marginTop: '6px' }}>Your e-ticket has been generated and saved to your history.</p>

          <div className="ticket-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
              <span>PNR: <b>{booking.pnr}</b></span>
              <span>Booking ID: <b>{booking.bookingId}</b></span>
            </div>
            <p><b>Passenger:</b> {booking.passengerName}</p>
            <p><b>Flight:</b> {booking.flightNumber} ({booking.airline})</p>
            <p><b>Route:</b> {booking.from} → {booking.to}</p>
            <p><b>Date & Time:</b> {booking.date} at {booking.time}</p>
            <p><b>Seat Number:</b> <span style={{ color: 'var(--ember)' }}>{booking.seat}</span></p>
            <p style={{ marginTop: '10px' }}><b>Total Paid:</b> <span style={{ color: 'var(--gold)' }}>{booking.totalFare}</span></p>
          </div>

          <div className="btn-group">
            <button className="btn-secondary" onClick={() => navigate('/my-bookings')}>View My Bookings</button>
            <button className="btn-primary" onClick={() => window.print()}>Download Ticket PDF</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingSuccess;