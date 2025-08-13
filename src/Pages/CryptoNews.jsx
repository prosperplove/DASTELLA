// src/CryptoNewsRSS.jsx
import React, { useEffect, useState } from 'react';
import { parseString } from 'xml2js';

const CryptoNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const RSS_URL = 'https://www.coindesk.com/arc/outboundfeeds/rss/';

  useEffect(() => {
    fetch(RSS_URL)
      .then((response) => response.text())
      .then((str) => {
        parseString(str, (err, result) => {
          if (err) {
            setError('Failed to parse RSS feed');
            setLoading(false);
            return;
          }
          
          
          fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
          const items = result.rss.channel[0].item || [];
          // Map RSS items to a simpler format
          const newsItems = items.slice(0, 10).map((item) => ({
            title: item.title[0],
            link: item.link[0],
            pubDate: item.pubDate[0],
            description: item.description[0],
          }));
          setNews(newsItems);
          setLoading(false);
        });
      })
      .catch(() => {
        setError('Failed to fetch RSS feed');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading crypto news...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Crypto News from CoinDesk RSS</h1>
      {news.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
          <h2><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h2>
          <p><em>{new Date(item.pubDate).toLocaleString()}</em></p>
          <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
        </div>
      ))}
    </div>
  );
};

export default CryptoNews;