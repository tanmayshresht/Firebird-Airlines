import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg(true);
    setTimeout(() => {
      navigate('/login'); // Registration ke baad login page par bhej rahe hain
    }, 1500);
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
        .auth-container { background: var(--ink); color: var(--cream); font-family: 'Manrope', sans-serif; min-height: calc(100vh - 75px); display: flex; align-items: center; justify-content: center; padding: 20px; }
        .auth-card { background: var(--ink-soft); border: 1px solid var(--line); border-radius: 20px; padding: 40px; width: 100%; max-width: 420px; box-shadow: 0 30px 60px rgba(0,0,0,0.5); position: relative; }
        .success-banner {
          background: linear-gradient(135deg, var(--ember), #e55a24); color: var(--ink);
          font-weight: 800; font-size: 0.9rem; padding: 12px 16px; border-radius: 10px; text-align: center;
          margin-bottom: 20px; box-shadow: 0 5px 15px rgba(255,107,53,0.4); animation: fadeIn 0.3s ease-in-out;
        }
        .input-group { margin-bottom: 20px; }
        .input-group label { display: block; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cream-dim); margin-bottom: 8px; }
        .input-group input { width: 100%; padding: 12px 16px; background: var(--ink); border: 1px solid var(--line); border-radius: 10px; color: var(--cream); font-family: 'Manrope', sans-serif; outline: none; }
        .input-group input:focus { border-color: var(--ember); }
        .btn-auth { width: 100%; padding: 14px; border-radius: 100px; background: var(--ember); color: var(--ink); font-weight: 700; border: none; cursor: pointer; transition: background .2s; }
        .btn-auth:hover { background: var(--gold); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      
      <div className="auth-container">
        <div className="auth-card">
          {successMsg && (
            <div className="success-banner">
              Registered Successfully! Redirecting to login...
            </div>
          )}

          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '2rem', marginBottom: '8px' }}>Create Account</h2>
          <p style={{ color: 'var(--cream-dim)', fontSize: '0.9rem', marginBottom: '24px' }}>Join Firebird Airlines for seamless travel experiences.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="name@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required />
            </div>
            <button type="submit" className="btn-auth">Register</button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.85rem', color: 'var(--cream-dim)' }}>
            Already have an account? <Link to="/login" style={{ color: 'var(--ember)', fontWeight: 600, textDecoration: 'none' }}>Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;