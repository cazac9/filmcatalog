import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmDescRow from "../components/FilmDescRow";
import Config from "../Config";
import { FullFilmInfo } from "../poco/FullFilmInfo";
import { getMovie } from "../services/apiService";

function FilmDetails() {
  const { filmId } = useParams();
  const [film, setFilm] = useState<FullFilmInfo>({} as FullFilmInfo);


  useEffect(() => {
    const getFilmAsync = async () => {
        const film = await getMovie(filmId ?? "");
        setFilm(film)
      };

      getFilmAsync();
  }, [filmId]);


  return (
    <div className="flex flex-row flex-wrap">
      <div className="w-1/3">
        {film?.poster_path && <img src={ Config.ImagePath + "/w500" + film.poster_path} alt="loading" width="500" height="750"></img>}
      </div>

      <div className="w-2/3">
        <span className="text-3xl font-bold mb-4 block text-orange-500">
          { film.title }
        </span>

        <div className="divide-y divide-black">
          <FilmDescRow title="Tag line:" value={film.tagline}></FilmDescRow>
          <FilmDescRow title="Year:" value={film.release_date}></FilmDescRow>
          <FilmDescRow title="Budget:" value={film.budget + "$"}></FilmDescRow>
          <FilmDescRow title="Popularity:" value={film.popularity?.toString()}></FilmDescRow>
          <FilmDescRow title="Homepage:" value={film.homepage }></FilmDescRow>
          <FilmDescRow title="Country:" value={film.production_countries?.map(t => t.name).join(", ")}></FilmDescRow>
          <FilmDescRow title="Genre:" value={film.genres?.map(t => t.name).join(", ")}></FilmDescRow>
          <FilmDescRow title="Produced By:" value={film.production_companies?.map(t => t.name).join(", ")}></FilmDescRow>
        </div>
       

        <span className="block text-white w-2/3">
          { film.overview }
        </span>
      </div>

    </div>
  );
}

export default FilmDetails;