// components/CoinModal.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { Chart as ChartJS, LineElement, TimeScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(LineElement, TimeScale, LinearScale, PointElement, Tooltip, Legend);

const CoinModal = ({ coin, onClose }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=7`
      );
      const data = await res.json();
      setHistory(data.prices);
    };
    fetchHistory();
  }, [coin]);

  const chartData = {
    labels: history.map((item) => new Date(item[0])),
    datasets: [
      {
        label: `${coin.name} Price (Last 7 Days)`,
        data: history.map((item) => item[1]),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { type: 'time', time: { unit: 'day' }, ticks: { autoSkip: true } },
      y: { beginAtZero: false },
    },
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
        <p><strong>Current Price:</strong> ${coin.current_price.toLocaleString()}</p>
        <p><strong>Market Cap:</strong> ${coin.market_cap.toLocaleString()}</p>
        <p><strong>Total Volume:</strong> ${coin.total_volume.toLocaleString()}</p>
        <Line data={chartData} options={chartOptions} />
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CoinModal;
