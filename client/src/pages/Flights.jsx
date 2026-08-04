import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Flights() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [fromQuery, setFromQuery] = useState(searchParams.get("from") || "");
  const [toQuery, setToQuery] = useState(searchParams.get("to") || "");
  const [date, setDate] = useState(searchParams.get("date") || "2026-08-05");

  const [activeInput, setActiveInput] = useState(null);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [travellers, setTravellers] = useState({ adults: 1, children: 0, infants: 0 });
  const [cabinClass, setCabinClass] = useState('Economy');

  const [hasSearched, setHasSearched] = useState(false);
  const [generatedFlights, setGeneratedFlights] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveInput(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchAirports = async (query, setSuggestions) => {
      if (!query || query.trim().length < 2) {
        setSuggestions([]);
        return;
      }
      try {
        const response = await fetch(`https://autocomplete.travelpayouts.com/places?term=${encodeURIComponent(query)}&locale=en&types[]=city`);
        const data = await response.json();
        if (data && data.length > 0) {
          setSuggestions(data.map(item => `${item.name} (${item.code || 'INT'}) - ${item.country_name || ''}`));
        } else {
          setSuggestions([`${query.toUpperCase()} Airport (INT)`, `${query} Metropolitan Hub`]);
        }
      } catch {
        setSuggestions([`${query.toUpperCase()} International Hub`, `${query} City Center`]);
      }
    };

    const timer = setTimeout(() => {
      if (activeInput === 'from') fetchAirports(fromQuery, setFromSuggestions);
      if (activeInput === 'to') fetchAirports(toQuery, setToSuggestions);
    }, 300);

    return () => clearTimeout(timer);
  }, [fromQuery, toQuery, activeInput]);

  const handleSearchClick = () => {
    if (!fromQuery || !toQuery) {
      alert("Please enter both Origin and Destination cities.");
      return;
    }
    setHasSearched(true);
    const airlines = ["Firebird Global", "Firebird Express", "Firebird Executive", "Firebird Air"];
    const basePrices = [3200, 5400, 12500, 24000, 48000];
    const generated = [];

    for (let i = 1; i <= 4; i++) {
      const randomHour = (i * 4 + 2) % 24;
      const formattedHour = `${randomHour > 12 ? randomHour - 12 : randomHour}:00 ${randomHour >= 12 ? 'PM' : 'AM'}`;
      
      generated.push({
        id: `flight-${i}`,
        flightNumber: `FB ${100 + i * 7}`,
        airline: airlines[i % airlines.length],
        from: fromQuery,
        to: toQuery,
        date: date,
        time: formattedHour,
        duration: `${i + 1}h ${(i * 15) % 60}m`,
        seatsLeft: (i * 3) % 15 + 2,
        priceNum: basePrices[i % basePrices.length] + i * 350,
        price: `₹${(basePrices[i % basePrices.length] + i * 350).toLocaleString('en-IN')}`,
        baseHour: randomHour,
        travellersCount: travellers.adults + travellers.children + travellers.infants,
        cabinClass
      });
    }
    setGeneratedFlights(generated);
  };

  const getFlightStatus = (flightBaseHour, flightDateStr) => {
    const today = new Date();
    const selectedDate = new Date(flightDateStr);
    if (selectedDate < today && selectedDate.toDateString() !== today.toDateString()) {
      return { status: "Departed", color: "#8B1E3F" };
    }
    if (selectedDate.toDateString() === today.toDateString() && today.getHours() >= flightBaseHour) {
      return { status: "Departed", color: "#8B1E3F" };
    }
    return { status: "Available", color: "#7CC77E" };
  };

  const updateTravellerCount = (type, operation) => {
    setTravellers(prev => {
      const current = prev[type];
      if (operation === 'add') return { ...prev, [type]: current + 1 };
      if (operation === 'sub' && current > (type === 'adults' ? 1 : 0)) return { ...prev, [type]: current - 1 };
      return prev;
    });
  };

  const totalTravellersCount = travellers.adults + travellers.children + travellers.infants;

  return (
    <>
      <style>{`
        :root {
          --ink: #14110F; --ink-soft: #211C18; --ember: #FF6B35; --gold: #F7B32B;
          --ruby: #8B1E3F; --cream: #F4EDE4; --cream-dim: #C9BFB0; --line: rgba(244,237,228,0.14);
        }
        .page-container { background: var(--ink); color: var(--cream); font-family: 'Manrope', sans-serif; min-height: 100vh; padding: 6vh 6vw; }
        .search-card { background: var(--ink-soft); border: 1px solid var(--line); border-radius: 20px; padding: 30px; margin-bottom: 40px; box-shadow: 0 30px 60px rgba(0,0,0,0.5); }
        .search-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-bottom: 20px; position: relative; }
        .search-box-item { background: var(--ink); border: 1px solid var(--line); border-radius: 14px; padding: 14px 18px; position: relative; cursor: pointer; }
        .search-box-item label { display: block; font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cream-dim); margin-bottom: 4px; }
        .search-box-item input { width: 100%; background: transparent; border: none; color: var(--cream); font-family: 'Manrope', sans-serif; font-size: 1rem; font-weight: 600; outline: none; }
        .suggestions-list { position: absolute; top: 100%; left: 0; right: 0; background: var(--ink-soft); border: 1px solid var(--line); border-radius: 10px; margin-top: 5px; max-height: 200px; overflow-y: auto; z-index: 100; box-shadow: 0 15px 35px rgba(0,0,0,0.7); }
        .suggestion-item { padding: 12px 16px; font-size: 0.9rem; color: var(--cream); cursor: pointer; border-bottom: 1px solid var(--line); }
        .suggestion-item:hover { background: rgba(255,107,53,0.2); color: var(--ember); }
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(5px); display: flex; align-items: center; justify-content: center; z-index: 200; padding: 20px; }
        .modal-card { background: var(--ink-soft); border: 1px solid var(--line); border-radius: 20px; padding: 30px; width: 100%; max-width: 480px; box-shadow: 0 25px 50px rgba(0,0,0,0.8); }
        .counter-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid var(--line); padding-bottom: 15px; }
        .counter-controls { display: flex; align-items: center; gap: 15px; }
        .counter-btn { width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--line); background: var(--ink); color: var(--cream); font-size: 1.1rem; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .counter-btn:hover { border-color: var(--ember); color: var(--ember); }
        .class-chips-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 25px; }
        .class-chip { background: var(--ink); border: 1px solid var(--line); padding: 12px; border-radius: 10px; font-size: 0.85rem; font-weight: 600; color: var(--cream-dim); cursor: pointer; text-align: center; }
        .class-chip.active { border-color: var(--ember); color: var(--ember); background: rgba(255,107,53,0.1); }
        .btn-done { width: 100%; padding: 14px; border-radius: 100px; background: var(--ember); color: var(--ink); font-weight: 800; font-size: 0.95rem; border: none; cursor: pointer; }
        .btn-search-flights { width: 100%; padding: 16px; border-radius: 12px; background: linear-gradient(135deg, var(--ember), #e55a24); color: var(--cream); font-weight: 800; font-size: 1rem; border: none; cursor: pointer; box-shadow: 0 10px 25px rgba(255,107,53,0.3); transition: transform 0.2s; margin-top: 10px; }
        .btn-search-flights:hover { transform: translateY(-2px); }
        .board { background: var(--ink-soft); border: 1px solid var(--line); border-radius: 14px; overflow: hidden; margin-top: 20px; }
        .board-row { display: grid; grid-template-columns: 90px 1.2fr 1fr 90px 90px 100px 100px; align-items: center; padding: 18px 26px; border-bottom: 1px solid var(--line); font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; }
        .board-row.head { color: var(--cream-dim); font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; background: rgba(255,255,255,0.02); }
        .flap { display: inline-block; background: var(--ink); border-radius: 4px; padding: 5px 8px; color: var(--gold); font-weight: 700; }
        .btn-select { font-family: 'Manrope', sans-serif; font-weight: 700; font-size: 0.8rem; padding: 8px 16px; border-radius: 100px; background: var(--ember); color: var(--ink); border: none; cursor: pointer; }
      `}</style>

      <div className="page-container" ref={dropdownRef} onClick={() => setActiveInput(null)}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '2.5rem', fontWeight: 500, marginBottom: '8px' }}>Flight Search</h2>
        <p style={{ color: 'var(--cream-dim)', marginBottom: '25px' }}>Explore global routes with Goibibo style autocomplete.</p>

        <div className="search-card" onClick={(e) => e.stopPropagation()}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="search-grid">
              <div className="search-box-item">
                <label>From</label>
                <input 
                  type="text" 
                  placeholder="Type any city (e.g. Delhi, London)" 
                  value={fromQuery} 
                  onChange={(e) => { setFromQuery(e.target.value); setActiveInput('from'); }}
                  onFocus={() => setActiveInput('from')}
                />
                {activeInput === 'from' && fromSuggestions.length > 0 && (
                  <div className="suggestions-list">
                    {fromSuggestions.map((city, idx) => (
                      <div key={idx} className="suggestion-item" onClick={() => { setFromQuery(city); setActiveInput(null); }}>
                        ✈️ {city}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="search-box-item">
                <label>To</label>
                <input 
                  type="text" 
                  placeholder="Type destination (e.g. Tokyo, NY)" 
                  value={toQuery} 
                  onChange={(e) => { setToQuery(e.target.value); setActiveInput('to'); }}
                  onFocus={() => setActiveInput('to')}
                />
                {activeInput === 'to' && toSuggestions.length > 0 && (
                  <div className="suggestions-list">
                    {toSuggestions.map((city, idx) => (
                      <div key={idx} className="suggestion-item" onClick={() => { setToQuery(city); setActiveInput(null); }}>
                        📍 {city}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="search-box-item">
                <label>Departure Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </div>
            </div>

            <div className="search-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="search-box-item" onClick={() => setShowModal(true)}>
                <label>Travellers & Class</label>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--cream)', marginTop: '4px' }}>
                  {totalTravellersCount} Traveller{totalTravellersCount > 1 ? 's' : ''}, {cabinClass}
                </div>
              </div>
            </div>

            <button type="button" className="btn-search-flights" onClick={handleSearchClick}>
              SEARCH FLIGHTS
            </button>
          </form>
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.4rem' }}>Select Travellers & Class</h3>
                <span style={{ fontSize: '1.5rem', cursor: 'pointer', color: 'var(--cream-dim)' }} onClick={() => setShowModal(false)}>✕</span>
              </div>

              <div className="counter-row">
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>Adult</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--cream-dim)' }}>12 yrs & above</div>
                </div>
                <div className="counter-controls">
                  <button type="button" className="counter-btn" onClick={() => updateTravellerCount('adults', 'sub')}>-</button>
                  <span style={{ fontWeight: 'bold', fontSize: '1.1rem', width: '20px', textAlign: 'center' }}>{travellers.adults}</span>
                  <button type="button" className="counter-btn" onClick={() => updateTravellerCount('adults', 'add')}>+</button>
                </div>
              </div>

              <div className="counter-row">
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>Children</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--cream-dim)' }}>2 - 12 yrs</div>
                </div>
                <div className="counter-controls">
                  <button type="button" className="counter-btn" onClick={() => updateTravellerCount('children', 'sub')}>-</button>
                  <span style={{ fontWeight: 'bold', fontSize: '1.1rem', width: '20px', textAlign: 'center' }}>{travellers.children}</span>
                  <button type="button" className="counter-btn" onClick={() => updateTravellerCount('children', 'add')}>+</button>
                </div>
              </div>

              <div className="counter-row">
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>Infant</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--cream-dim)' }}>Under 2 yrs</div>
                </div>
                <div className="counter-controls">
                  <button type="button" className="counter-btn" onClick={() => updateTravellerCount('infants', 'sub')}>-</button>
                  <span style={{ fontWeight: 'bold', fontSize: '1.1rem', width: '20px', textAlign: 'center' }}>{travellers.infants}</span>
                  <button type="button" className="counter-btn" onClick={() => updateTravellerCount('infants', 'add')}>+</button>
                </div>
              </div>

              <div className="class-chips-grid">
                <div className={`class-chip ${cabinClass === 'Economy' ? 'active' : ''}`} onClick={() => setCabinClass('Economy')}>Economy</div>
                <div className={`class-chip ${cabinClass === 'Business Class' ? 'active' : ''}`} onClick={() => setCabinClass('Business Class')}>Business Class</div>
              </div>

              <button type="button" className="btn-done" onClick={() => setShowModal(false)}>DONE</button>
            </div>
          </div>
        )}

        {hasSearched && (
          <>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.8rem', fontWeight: 500, marginBottom: '15px' }}>
              Available Flights ({generatedFlights.length})
            </h3>
            <div className="board">
              <div className="board-row head">
                <div>Flight</div><div>Route</div><div>Time</div><div>Status</div><div>Seats</div><div>Price</div><div>Action</div>
              </div>
              {generatedFlights.map(f => {
                const statusInfo = getFlightStatus(f.baseHour, date);
                return (
                  <div className="board-row" key={f.id}>
                    <div><span className="flap">{f.flightNumber}</span></div>
                    <div>{f.from.split(' ')[0]} → {f.to.split(' ')[0]}</div>
                    <div>{f.time}</div>
                    <div style={{ color: statusInfo.color, fontWeight: 700 }}>{statusInfo.status}</div>
                    <div style={{ color: '#7CC77E', fontWeight: 700 }}>{f.seatsLeft} left</div>
                    <div style={{ color: 'var(--gold)', fontWeight: 700 }}>{f.price}</div>
                    <div>
                      <button className="btn-select" onClick={() => navigate('/booking', { state: { flight: f } })}>
                        Book
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Flights;