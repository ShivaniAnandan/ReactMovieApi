import React, { useState, useEffect } from "react";
import "../styles/FavoritesPage.css";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  if (favorites.length === 0)
    return <p className="no-favorites">No favorites yet!</p>;

  return (
    <div className="favorites">
      <h2 className="favorites-title">Your Favorite Movies</h2>
      <div className="favorites-grid">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="favorite-movie">
            <div className="movie-favorites-poster">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="movie-favorites-info">
              <p className="movie-favorites-title">
                {movie.Title} <span>({movie.Year})</span>
              </p>
              <button
                className="remove-button"
                onClick={() => removeFromFavorites(movie.imdbID)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
