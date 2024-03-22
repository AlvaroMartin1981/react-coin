import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Cards'; 

function Home() {
  const [cryptos, setCryptos] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(null); // Nuevo estado para almacenar la criptomoneda seleccionada

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch('https://api.coincap.io/v2/assets');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCryptos(data.data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCryptos();
  }, []);

  const handleShowDetails = (crypto) => {
    setSelectedCrypto(crypto);
  };

  const handleAddToFavorites = (crypto) => {
       console.log(`${crypto.name} added to favorites`);
  };

  return (
    <div>
      <h1>Top Cryptocurrencies</h1>
      <ul>
        {cryptos.map(crypto => (
          <li key={crypto.id}>
            <div>
              <h3>{crypto.name}</h3>
              
              <Link to={`/coin/${crypto.id}`}>
                <button onClick={() => handleShowDetails(crypto)}>Show Details</button>
              </Link>
              <button onClick={() => handleAddToFavorites(crypto)}>Add to Favorites</button>
            </div>
          </li>
        ))}
      </ul>
     
      {selectedCrypto && <Card crypto={selectedCrypto} />}
    </div>
  );
}

export default Home;
