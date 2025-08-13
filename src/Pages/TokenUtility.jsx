import React, { useEffect, useState } from 'react';
import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa6'

const TGE_DATE = new Date();
TGE_DATE.setDate(TGE_DATE.getDate() + 700); //700 days from now

const getTimeLeft = () => {
  const now = new Date();
  const difference = TGE_DATE - now;

  const timeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };

  return timeLeft;
};

const TokenUtility = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mtx-container">
      <h1>$MTX Token Utility</h1>
      <h2>Matrix Ecosystem</h2>

      <div className="countdown">
        <h3 style={{ color:"white" }}>Token Generation Event (TGE) Countdown</h3>
        <div className="timer">
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
          <span>{timeLeft.seconds}s</span>
        </div>
      </div>

      <section>
        <h3>What is $MTX?</h3>
        <p>$MTX is the native token of the Matrix ecosystem, enabling fast, secure, and scalable decentralized applications. It fuels operations, incentivizes participation, and grants governance rights.</p>
      </section>

      <section>
        <h3>Utilities</h3>
        <ul>
          <li><strong>Transaction Fees:</strong> Pay for network transactions using $MTX.</li>
          <li><strong>Staking & Governance:</strong> Stake to secure the network and vote on protocol decisions.</li>
          <li><strong>Ecosystem Incentives:</strong> Earn rewards, grants, and participate in airdrops.</li>
          <li><strong>Premium Access:</strong> Unlock advanced tools, analytics, and enterprise features.</li>
          <li><strong>Marketplace Currency:</strong> Buy, sell, and trade digital assets within the Matrix platform.</li>
          <li><strong>DeFi Collateral:</strong> Use $MTX in lending, yield farming, and stablecoin protocols.</li>
        </ul>
      </section>

      <section>
        <h3>Tokenomics</h3>
        <p><strong>Total Supply:</strong> 1,000,000,000 $MTX</p>
        <p><strong>Security:</strong> Audited smart contracts, controlled release, and burn mechanisms</p>
      </section>

      <section>
        <p><strong>Matrix:</strong> Powered by Possibility. Driven by $MTX.</p>
        <p>Follow us: 
         <a href="https://t.me/Prosperplove" style={{ textDecoration:"none" }}><FaTelegram size={30}/> Telegram</a>
        <a href="https://discord.gg/prosperplove" style={{ textDecoration:"none" }}> <FaDiscord size={30}/> Discord</a>
        <a href="https://x.com/properpLove" style={{ textDecoration:"none" }}><FaTwitter size={30}/> X (Twitter)</a>
        </p>
      </section>
    </div>
  );
};

export default TokenUtility;
