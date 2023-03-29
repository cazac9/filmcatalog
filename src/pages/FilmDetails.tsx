import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IconButton from "../components/controls/IconButton";
import FilmDescRow from "../components/FilmDescRow";
import Config from "../Config";
import { FullFilmInfo } from "../poco/FullFilmInfo";
import { getMovie } from "../services/apiService";
import { useAppDispatch, useAppSelector} from '../app/hooks'
import { incremented, decremented} from '../features/RatingCounter/RatingCounterSlice'

function FilmDetails() {
  const { fId } = useParams();
  const filmId = fId || '';

  const [film, setFilm] = useState<FullFilmInfo>({} as FullFilmInfo);

  const rating = useAppSelector((state) => state.ratingCounter.valueMap)[filmId] || 0;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getFilmAsync = async () => {
        const film = await getMovie(filmId);
        setFilm(film)
      };

      getFilmAsync();
  }, [filmId]);


  return (
    <div className="flex flex-row flex-wrap">
      <div className="w-2/6 mr-4">
        {film?.poster_path && <img  role="film-desc-poster" src={ Config.ImagePath + "/w500" + film.poster_path} alt="loading" width="500" height="750"></img>}
        <div className="mt-4 text-center">
          <IconButton icon="bi-hand-thumbs-up" action={() => dispatch(incremented({filmId: filmId}))}></IconButton>
          <span className= {"inline-block text-xl px-4 font-bold " + (rating > 0 ? "text-green-600" : "text-red-600")}>{rating}</span>
          <IconButton icon="bi-hand-thumbs-down" action={() => dispatch(decremented({filmId: filmId}))}></IconButton>
       </div>
      </div>

      <div className="w-3/6 ">
        <span role="film-desc-title" className="text-3xl font-bold mb-4 block text-orange-500">
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

        <span className="block text-white w-2/3" role="film-desc-overview">
          { film.overview }
        </span>

      </div>

    </div>
  );
}

export default FilmDetails;