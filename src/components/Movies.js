import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
  //  MVC -> Model View Controller

  //   const components = [];
  //   for (let i = 0; i < movieData.length; i++) {
  //     components.push(<Movie data={movieData[i]} />);
  //   }

  // movieData -> <Movie
  const components = props.data
    .sort((m, n) => n.year - m.year)
    .map((m) => <Movie data={m} />);

  return <div>{components}</div>;
};

export default Movies;
