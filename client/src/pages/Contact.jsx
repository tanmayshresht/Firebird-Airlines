import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        .page-container { background: var(--ink); color: var(--cream); font-family: 'Manrope', sans-serif; min-height: 100vh; padding: 6vh 6vw; display: flex; flex-direction: column; align-items: center; }
        .contact-card { background: var(--ink-soft); border: 1px solid var(--line); border-radius: 20px; padding: 40px; width: 100%; max-width: 600px; box-shadow: 0 30px 60px rgba(0,0,0,0.5); margin-top: 30px; }
        .input-group { margin-bottom: 20px; }
        .input-group label { display: block; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cream-dim); margin-bottom: 8px; }
        .input-group input, .input-group textarea { width: 100%; padding: 12px 16px; background: var(--ink); border: 1px solid var(--line); border-radius: 10px; color: var(--cream); font-family: 'Manrope', sans-serif; outline: none; }
        .input-group input:focus, .input-group textarea:focus { border-color: var(--ember); }
        .btn-submit { width: 100%; padding: 14px; border-radius: 100px; background: var(--ember); color: var(--ink); font-weight: 700; border: none; cursor: pointer; transition: background .2s; }
        .btn-submit:hover { background: var(--gold); }
      `}</style>
      <div className="page-container">
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '2.5rem', fontWeight: 500 }}>Concierge Support</h2>
        <p style={{ color: 'var(--cream-dim)', marginTop: '8px' }}>We are available 24/7 to assist with your journeys.</p>

        <div className="contact-card">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 0' }}>
              <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.8rem', color: 'var(--gold)' }}>Message Received</h3>
              <p style={{ color: 'var(--cream-dim)', marginTop: '10px' }}>Our support team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="name@example.com" required />
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea rows="4" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;