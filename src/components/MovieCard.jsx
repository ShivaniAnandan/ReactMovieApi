import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        className="movie-card-poster"
        src={movie.Poster !== "N/A" ? movie.Poster : "https://media.gettyimages.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=gi&k=20&c=8ClshQC50T-wPj6CPvnPnFq1Er6Fs8fbrreXWehvdgk="}
        alt={movie.Title}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.Title}</h3>
        <p className="movie-card-year">{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
