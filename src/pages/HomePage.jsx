import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import "../styles/HomePage.css";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [defaultMovies, setDefaultMovies] = useState([]); // For default movies
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0); // For search results

  // Fetch default movies on initial load
  useEffect(() => {
    const fetchDefaultMovies = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=7d5b89d5&s=Avengers&page=1`
        );
        if (response.data.Response === "True") {
          setDefaultMovies(response.data.Search);
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

  // Fetch movies based on user query and page
  const fetchMovies = async (page = 1) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=7d5b89d5&s=${query}&page=${page}`
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setTotalResults(response.data.totalResults);
        setError("");
      } else {
        setError(response.data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError("Failed to fetch movies. Try again later.");
    }
  };

  // Handle search and reset pagination
  const handleSearch = () => {
    setCurrentPage(1);
    fetchMovies(1);
  };

  // Handle pagination navigation
  const paginate = (direction) => {
    if (query) {
      // Pagination for search results
      if (direction === "next" && currentPage < Math.ceil(totalResults / 10)) {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        fetchMovies(nextPage);
      } else if (direction === "prev" && currentPage > 1) {
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);
        fetchMovies(prevPage);
      }
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
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="results">
        {error && <p className="error">{error}</p>}
        <div className="movie-grid">
          {(query ? movies : defaultMovies).map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
        {query && totalResults > 0 && (
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => paginate("prev")}
              disabled={currentPage === 1}
            >
              &#8249; {/* Left Arrow Icon */}
            </button>
            <span className="page-number">
              Page {currentPage} of {Math.ceil(totalResults / 10)}
            </span>
            <button
              className="pagination-btn"
              onClick={() => paginate("next")}
              disabled={currentPage === Math.ceil(totalResults / 10)}
            >
              &#8250; {/* Right Arrow Icon */}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
