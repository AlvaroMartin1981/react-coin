import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Cards';

function Coin() {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCoinData(data.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCoinData();

  }, [id]);

  const handleSearch = async () => {
    if (!searchQuery) return;

    try {
      const response = await fetch(`https://api.coincap.io/v2/assets?search=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (data.data.length > 0) {
        setCoinData(data.data[0]); // Solo tomamos la primera moneda encontrada
      } else {
        console.log('No se encontró ninguna moneda con ese nombre.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Enter cryptocurrency name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {coinData ? (
        <Card crypto={coinData} /> 
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Coin;
