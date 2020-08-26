import React, { useState } from "react";

const Movie = ({ title, year, imageUrl, likesCount, liked }) => {
  const [likedState, setLikedState] = useState(liked);
  const [likesCountState, setLikesCountState] = useState(likesCount);

  const handleLiked = () => {
    if (likedState) {
      setLikesCountState(likesCountState - 1);
    } else {
      setLikesCountState(likesCountState + 1);
    }
    setLikedState(!likedState);
  };
  return (
    <div className="movie-container">
      <h5>{likesCountState}</h5>
      <input type="checkbox" />
      <input type="checkbox" checked={likedState} onClick={handleLiked} />
      <h2>{`${title} (${year})`}</h2>
      <img src={imageUrl} alt={`${title} - Poster`} />
    </div>
  );
};

export default Movie;
