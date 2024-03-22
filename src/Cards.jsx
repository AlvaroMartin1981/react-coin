import React from 'react';

function Card({ crypto }) {
  return (
    <div>
      <h2>{crypto.name}</h2>
      <p>Rank: {crypto.rank}</p>
      <p>Symbol: {crypto.symbol}</p>
      <p>Market Cap (USD): {crypto.marketCapUsd}</p>
      <p>Volume (USD) - 24Hr: {crypto.volumeUsd24Hr}</p>
      <p>Price (USD): {crypto.priceUsd}</p>
      <p>Change - 24Hr: {crypto.changePercent24Hr}%</p>
      <p>VWAP - 24Hr: {crypto.vwap24Hr}</p>
      <a href={crypto.explorer} target="_blank" rel="noopener noreferrer">Explorer</a>
    </div>
  );
}

export default Card;
