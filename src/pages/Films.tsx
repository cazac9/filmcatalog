import { useEffect, useState } from "react";
import { IGenre } from "../poco/IGenre";
import { FilmInfo } from "../poco/FilmInfo";
import Film from "../components/Film";
import { dicsoverMoviesByGenre } from "../services/apiService";

interface GenreParam {
  genre?: IGenre;
}

function FilmsPage({genre}: GenreParam) {
  const [movies, setMovies] = useState<FilmInfo[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await dicsoverMoviesByGenre(genre);
      setMovies(movies)
    };

    fetchMovies();
  }, [genre]);

  return (
    <>
      <span className="text-3xl font-bold mb-4 inline-block">
        { genre?.name }
      </span>

      <div className="flex flex-row flex-wrap">
        {movies.map(movie => <Film key={movie.id} film={movie}></Film>)}
      </div>
    </>
   
  );
}

export default FilmsPage;