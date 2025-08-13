// AnimatedCounter.jsx
import React, { useState, useEffect } from 'react';


const LockedCoin = ({ targetNumber, duration = 3000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * targetNumber));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(targetNumber); // ensure it ends exactly at target
      }
    };

    window.requestAnimationFrame(step);
  }, [targetNumber, duration]);

  return (
    <div className="counter">
      ${count.toLocaleString()}
    </div>
  );
};

export default function App() {
  return (
    <div className='total-count'>
    <div className="container py-4" id='app'>
        <h1>Total Value Locked</h1>
      <LockedCoin targetNumber={150250000} duration={3000} />
      </div>
      <div className="container py-4" id='app2'>
        <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
               <div className="card">
                <h1>Matrix Users</h1>
                 <LockedCoin targetNumber={345000} duration={3000} />
               </div>
            </div>
              <div className="col-12 col-md-6 col-lg-6">
               <div className="card">
                <h1>Transactions</h1>
                 <LockedCoin targetNumber={23456123} duration={3000} />
               </div>
            </div>
        </div>
      </div>
      <hr  style={{ color:"white" }}/>
      </div>
  );
}