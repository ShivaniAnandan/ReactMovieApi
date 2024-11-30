import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark px-5">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <img src="https://cdn.vectopus.com/getillustrations/illustrations/BCF09A00DB3C/3C95AF784386/icons-app-icons-media-netflix-logo-website-movie-series-multimedia-streaming-stream-512.png" alt="logo" className="img" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to="/" class="nav-link active" aria-current="page">Home</Link>
        <Link to="/about" class="nav-link">About</Link>
        <Link to="/favorites" class="nav-link">Favorites</Link>
        <Link to="/contact" class="nav-link">Contact</Link>
      </div>
    </div>
  </div>
</nav> 
  );
};

export default Navbar;
