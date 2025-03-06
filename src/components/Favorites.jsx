import React from "react";
import useFavoriteStore from "../ZustandStores/useFavoriteStore";


const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavoriteStore();

  return (
    <div>
      <h1>Favoris</h1>
      {favorites.length === 0 ? (
        <p>Aucun élément en favoris</p>
      ) : (
        <ul>
          {favorites.map((event) => (
            <li key={event.id}>
              {event.name}
              <button onClick={() => removeFromFavorites(event.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
