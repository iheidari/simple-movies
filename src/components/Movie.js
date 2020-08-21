import React from "react";

const Movie = ({ title, year, imageUrl }) => {
  return (
    <div className="movie-container">
      <h2>{`${title} (${year})`}</h2>
      <img src={imageUrl} alt={`${title} - Poster`} />
    </div>
  );
};

export default Movie;
