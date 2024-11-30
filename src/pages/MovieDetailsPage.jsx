import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/MovieDetailsPage.css";
import { FaHeart } from "react-icons/fa"; // Importing heart icon

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=7d5b89d5&i=${id}`
        );
        if (response.data.Response === "True") {
          setMovie(response.data);
          setError("");
        } else {
          setError(response.data.Error);
        }
      } catch (err) {
        setError("Failed to fetch movie details. Try again later.");
      }
    };
    fetchMovieDetails();
  }, [id]);

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Movie added to favorites!");
    } else {
      alert("Movie already in favorites!");
    }
  };

  if (error) return <p className="error">{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <div className="movie-details-container">
        <div className="movie-poster">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="movie-info">
          <h2 className="movie-title">
            {movie.Title} <span>({movie.Year})</span>
          </h2>
          <p className="movie-plot"><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <button className="favorite-button" onClick={addToFavorites}>
            <FaHeart className="heart-icon" /> Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
