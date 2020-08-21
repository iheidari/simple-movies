import React from "react";

const Movie = (props) => {
  return (
    <div className="movie-container">
      <h2>{`${props.data.title} (${props.data.year})`}</h2>
      <img src={props.data.imageUrl} alt={`${props.data.title} - Poster`} />
    </div>
  );
};

export default Movie;
