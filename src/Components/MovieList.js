import { Box } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ search, moviesData, setMoviesData }) {
  // filter moviesData by title
  const filteredMovies = moviesData.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  // delete movie from moviesData
  const deleteMovie = (id) => {
    setMoviesData(moviesData.filter((movie) => movie.id !== id));
  };
  return (
    <Box sx={{ maxWidth: 3450 }} className="flexCard">
      {filteredMovies.map((movie) => {
        return (
          <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} />
        );
      })}
    </Box>
  );
}

export default MovieList;