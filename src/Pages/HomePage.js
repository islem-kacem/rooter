import { useState } from "react";
import AddMovieModal from "../Components/AddMovieModal";
import MovieList from "../Components/MovieList";
import { movies } from "../Data/MoviesData";

const HomePage = ({ search }) => {
  const [moviesData, setMoviesData] = useState(movies);

  return (
    <div className="Cards">
      <AddMovieModal moviesData={moviesData} setMoviesData={setMoviesData} />
      <div className="flexCard">
      <MovieList
        search={search}
        moviesData={moviesData}
        setMoviesData={setMoviesData}
      />
      </div>
    </div>
  );
};

export default HomePage;