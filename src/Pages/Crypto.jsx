// App.js
import React, { useState, useEffect } from 'react';
import CryptoTable from './CryptoTable';
import CoinModal from './CoinModal';
import CryptoNews from './CryptoNews';


function Crypto() {
  const [allCoins, setAllCoins] = useState([]);
  const [displayedCoins, setDisplayedCoins] = useState([]);
  const [prevPrices, setPrevPrices] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 15;

  const fetchCryptoData = async () => {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false'
      );
      const data = await res.json();

      const updatedPrices = {};
      data.forEach((coin) => {
        updatedPrices[coin.id] = coin.current_price;
      });

      setPrevPrices((prev) => ({ ...prev }));
      setAllCoins(data);
      setPrevPrices(updatedPrices);

      const filtered = searchTerm.trim()
        ? data.filter((coin) =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : data;

      const start = (currentPage - 1) * coinsPerPage;
      const end = start + coinsPerPage;
      setDisplayedCoins(filtered.slice(start, end));
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  useEffect(() => {
    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 5000);
    return () => clearInterval(interval);
  }, [currentPage, searchTerm]);

  const handlePageChange = (direction) => {
    const filteredLength = searchTerm
      ? allCoins.filter((coin) =>
          coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        ).length
      : allCoins.length;

    const totalPages = Math.ceil(filteredLength / coinsPerPage);

    setCurrentPage((prev) => {
      if (direction === 'prev' && prev > 1) return prev - 1;
      if (direction === 'next' && prev < totalPages) return prev + 1;
      return prev;
    });
  };

  return (
    <div className="app-container">
      
      <h1>Markets</h1>
      <input
        type="text"
        placeholder="Search by name or symbol..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        className="search-input"
      />
      
      <CryptoTable
        coins={displayedCoins}
        prevPrices={prevPrices}
        onCoinClick={setSelectedCoin}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
      {selectedCoin && (
        <CoinModal coin={selectedCoin} onClose={() => setSelectedCoin(null)} />
      )}
      {/* <CryptoNews/> */}
    </div>
  );
}


export default Crypto;
