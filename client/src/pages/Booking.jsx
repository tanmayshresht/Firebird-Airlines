import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Booking() {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state?.flight || {
    flightNumber: "FB 204", airline: "Firebird Express", from: "New Delhi (DEL)", 
    to: "Mumbai (BOM)", time: "09:00 AM", duration: "2h 10m", priceNum: 4199, price: "₹4,199", date: "2026-08-05"
  };

  const [step, setStep] = useState(1);
  const [passenger, setPassenger] = useState({ name: '', email: '', phone: '', gender: 'Male' });
  const [selectedSeat, setSelectedSeat] = useState('12A');
  const [baggage, setBaggage] = useState('Standard (15kg)');
  const [paymentMethod, setPaymentMethod] = useState('UPI');

  // Interactive Seat Grid Mock
  const seats = ['12A', '12B', '12C', '14A', '14B', '14C', '15A', '15B', '15C'];
  const bookedSeats = ['12B', '14C'];

  const handleCompletePayment = () => {
    const pnr = "FB-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    const bookingId = "BID" + Math.floor(100000 + Math.random() * 900000);
    
    const newBooking = {
      bookingId,
      pnr,
      flightNumber: flight.flightNumber,
      airline: flight.airline,
      from: flight.from,
      to: flight.to,
      date: flight.date,
      time: flight.time,
      duration: flight.duration,
      passengerName: passenger.name || "John Doe",
      email: passenger.email || "john@example.com",
      seat: selectedSeat,
      baggage,
      paymentMethod,
      totalFare: flight.price,
      bookingTime: new Date().toLocaleString(),
      status: "Confirmed",
      paymentStatus: "Paid Successfully"
    };

    // Save to LocalStorage
    const existingBookings = JSON.parse(localStorage.getItem('firebird_bookings') || '[]');
    localStorage.setItem('firebird_bookings', JSON.stringify([newBooking, ...existingBookings]));

    navigate('/booking-success', { state: { booking: newBooking } });
  };

  return (
    <>
      <style>{`
        :root {
          --ink: #14110F; --ink-soft: #211C18; --ember: #FF6B35; --gold: #F7B32B;
          --cream: #F4EDE4; --cream-dim: #C9BFB0; --line: rgba(244,237,228,0.14);
        }
        .booking-container { background: var(--ink); color: var(--cream); font-family: 'Manrope', sans-serif; min-height: 100vh; padding: 6vh 6vw; display: flex; justify-content: center; }
        .booking-card { background: var(--ink-soft); border: 1px solid var(--line); border-radius: 20px; padding: 40px; width: 100%; max-width: 700px; box-shadow: 0 30px 60px rgba(0,0,0,0.5); }
        .step-indicator { display: flex; justify-content: space-between; margin-bottom: 30px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--cream-dim); text-transform: uppercase; }
        .step-indicator span.active { color: var(--ember); font-weight: bold; }
        .input-group { margin-bottom: 20px; }
        .input-group label { display: block; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cream-dim); margin-bottom: 8px; }
        .input-group input, .input-group select { width: 100%; padding: 12px 16px; background: var(--ink); border: 1px solid var(--line); border-radius: 10px; color: var(--cream); font-family: 'Manrope', sans-serif; outline: none; }
        .seat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 20px 0; }
        .seat-btn { padding: 14px; background: var(--ink); border: 1px solid var(--line); border-radius: 8px; color: var(--cream); font-weight: bold; cursor: pointer; }
        .seat-btn.selected { background: var(--ember); color: var(--ink); border-color: var(--ember); }
        .seat-btn.booked { background: #332b26; color: var(--cream-dim); cursor: not-allowed; opacity: 0.5; }
        .btn-action { width: 100%; padding: 14px; border-radius: 100px; background: var(--ember); color: var(--ink); font-weight: 700; border: none; cursor: pointer; margin-top: 20px; }
        .btn-action:hover { background: var(--gold); }
      `}</style>

      <div className="booking-container">
        <div className="booking-card">
          <div className="step-indicator">
            <span className={step === 1 ? 'active' : ''}>1. Passenger</span>
            <span className={step === 2 ? 'active' : ''}>2. Seats</span>
            <span className={step === 3 ? 'active' : ''}>3. Summary</span>
            <span className={step === 4 ? 'active' : ''}>4. Payment</span>
          </div>

          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '2rem', marginBottom: '8px' }}>
            {step === 1 && "Passenger Details"}
            {step === 2 && "Select Your Seat"}
            {step === 3 && "Booking Summary"}
            {step === 4 && "Demo Payment Gateway"}
          </h2>
          <p style={{ color: 'var(--cream-dim)', fontSize: '0.9rem', marginBottom: '24px' }}>
            Flight: {flight.flightNumber} ({flight.from} → {flight.to})
          </p>

          {step === 1 && (
            <div>
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" value={passenger.name} onChange={e => setPassenger({...passenger, name: e.target.value})} required />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" value={passenger.email} onChange={e => setPassenger({...passenger, email: e.target.value})} required />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input type="text" placeholder="9876543210" value={passenger.phone} onChange={e => setPassenger({...passenger, phone: e.target.value})} required />
              </div>
              <button className="btn-action" onClick={() => setStep(2)}>Continue to Seats</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <p style={{ color: 'var(--cream-dim)', fontSize: '0.85rem' }}>Choose your preferred seat in Cabin:</p>
              <div className="seat-grid">
                {seats.map(s => {
                  const isBooked = bookedSeats.includes(s);
                  const isSelected = selectedSeat === s;
                  return (
                    <button 
                      key={s} 
                      className={`seat-btn ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}`}
                      disabled={isBooked}
                      onClick={() => setSelectedSeat(s)}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
              <button className="btn-action" onClick={() => setStep(3)}>Continue to Summary</button>
            </div>
          )}

          {step === 3 && (
            <div style={{ lineHeight: '1.8' }}>
              <p><b>Passenger:</b> {passenger.name || "John Doe"}</p>
              <p><b>Route:</b> {flight.from} to {flight.to}</p>
              <p><b>Date & Time:</b> {flight.date} | {flight.time}</p>
              <p><b>Seat Number:</b> {selectedSeat}</p>
              <p><b>Total Fare:</b> <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>{flight.price}</span></p>
              <button className="btn-action" onClick={() => setStep(4)}>Proceed to Payment</button>
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="input-group">
                <label>Select Payment Method</label>
                <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
                  <option value="UPI">UPI (Google Pay / PhonePe / Paytm)</option>
                  <option value="Card">Credit / Debit Card</option>
                  <option value="NetBanking">Net Banking</option>
                  <option value="Wallet">Digital Wallet</option>
                </select>
              </div>
              <div style={{ background: 'var(--ink)', padding: '16px', borderRadius: '10px', margin: '20px 0', border: '1px solid var(--line)' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--cream-dim)' }}>Demo Gateway Simulator: No actual funds will be charged.</p>
              </div>
              <button className="btn-action" onClick={handleCompletePayment}>Pay {flight.price} & Confirm</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Booking;