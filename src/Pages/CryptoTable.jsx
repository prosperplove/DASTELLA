// components/CryptoTable.js
import React from 'react';


const CryptoTable = ({ coins, prevPrices, onCoinClick, handlePageChange, currentPage }) => {
  return (
    <div className='full-table'>
        <div className="container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Coin</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Market Cap</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            const prev = prevPrices[coin.id];
            const flashClass =
              prev !== undefined
                ? coin.current_price > prev
                  ? 'flash-green'
                  : coin.current_price < prev
                  ? 'flash-red'
                  : ''
                : '';

            return (
              <tr key={coin.id} onClick={() => onCoinClick(coin)}>
                <td>
                  <img src={coin.image} alt={coin.name} width={24} height={24} />
                </td>
                <td>{coin.name}</td>
                <td>{coin.symbol.toUpperCase()}</td>
                <td className={flashClass}>${coin.current_price.toLocaleString()}</td>
                <td>${coin.market_cap.toLocaleString()}</td>
                <td style={{ color: coin.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => handlePageChange('prev')}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={() => handlePageChange('next')}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default CryptoTable;
