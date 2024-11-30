import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import "../styles/HomePage.css";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5); // Display 5 movies per page

  // Fetch default movies on initial load
  useEffect(() => {
    const fetchDefaultMovies = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=7d5b89d5&s=Avengers`
        );
        if (response.data.Response === "True") {
          setMovies(response.data.Search);
          setError("");
        } else {
          setError(response.data.Error);
        }
      } catch (err) {
        setError("Failed to fetch initial movies. Try again later.");
      }
    };

    fetchDefaultMovies();
  }, []);

  // Fetch movies based on user query
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=7d5b89d5&s=${query}`
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setError("");
      } else {
        setError(response.data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError("Failed to fetch movies. Try again later.");
    }
  };

  // Get current page movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const paginate = (direction) => {
    if (direction === "next" && currentPage < Math.ceil(movies.length / moviesPerPage)) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="homepage">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchMovies}>Search</button>
      </div>
      <div className="results">
        {error && <p className="error">{error}</p>}
        <div className="movie-grid">
          {currentMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => paginate("prev")}
            disabled={currentPage === 1}
          >
            &#8249; {/* Left Arrow Icon */}
          </button>
          <span className="page-number">
            Page {currentPage} of {Math.ceil(movies.length / moviesPerPage)}
          </span>
          <button
            className="pagination-btn"
            onClick={() => paginate("next")}
            disabled={currentPage === Math.ceil(movies.length / moviesPerPage)}
          >
            &#8250; {/* Right Arrow Icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
