// src/components/CoinDetail.js
import React, { useState, useEffect } from 'react';
import { fetchCoinDetails, fetchCoinHistory } from '../api.js';
import { Line } from 'react-chartjs-2';

import 'chart.js/auto';

export default function CoinDetail({ coinId, onClose }) {
  const [details, setDetails] = useState(null);
  const [history, setHistory] = useState(null);

  useEffect(() => {
    fetchCoinDetails(coinId).then(setDetails);
    fetchCoinHistory(coinId, 90).then(setHistory);
  }, [coinId]);

  if (!details || !history) return <div>Loading...</div>;

  const prices = history.prices.map(([ts, p]) => ({ x: new Date(ts), y: p }));

  const chartData = {
    datasets: [{
      label: `${details.name} price (USD)`,
      data: prices,
      borderColor: 'blue',
      pointRadius: 0,
    }]
  };

  return (
    <div className="detail-overlay">
      <button onClick={onClose}>Close</button>
      <h2>{details.name} ({details.symbol.toUpperCase()})</h2>
      <p>Current Price: ${details.market_data.current_price.usd}</p>
      <p>Market Cap Rank: {details.market_cap_rank}</p>
      <p>Total Supply: {details.market_data.total_supply?.toLocaleString() ?? 'N/A'}</p>
      <div style={{ width: '100%', maxWidth: 800, height: 400 }}>
        <Line
          data={chartData}
          options={{
            parsing: false,
            scales: {
              x: { type: 'time', time: { unit: 'day' } },
              y: { beginAtZero: false }
            }
          }}
        />
      </div>
    </div>
  );
}
