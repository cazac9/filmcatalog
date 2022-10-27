import { FilmInfo } from "../poco/FilmInfo";
import { useNavigate  } from "react-router-dom";
import Config from "../Config";
import ActionButton from "./controls/ActionButton";


interface FilmParam {
  film: FilmInfo;
}

function Film({film}: FilmParam) {
  const navigate = useNavigate();
  
  function handleDetailsNavigation(event: React.MouseEvent<HTMLElement>){
    event.preventDefault();
    navigate("/details/" + film.id);
  }

  return (
    <div className="w-48 bg-white m-1">
      <img src={ Config.ImagePath + "/w200" + film.poster_path} alt="loading" width="200" height="300"></img>
      <h1 className="text-l font-bold block mb-1 p-1 h-6 overflow-hidden">{film.title}</h1>
      <span className="block h-32 p-1 text-ellipsis overflow-hidden">{film.overview}</span>

      <div className="text-center mb-1">
        <ActionButton title="Details" action={handleDetailsNavigation}></ActionButton>
      </div>
    </div>
  );
}

export default Film;