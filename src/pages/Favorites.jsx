import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
 
  }, []);

  return (
    <div>
      <h1>Favorite Cryptocurrencies</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(favorite => (
            <li key={favorite.id}>
              <Link to={`/coin/${favorite.id}`}>{favorite.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite cryptocurrencies selected</p>
      )}
    </div>
  );
}

export default Favorites;
