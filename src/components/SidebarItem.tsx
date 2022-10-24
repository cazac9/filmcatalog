import { Link } from "react-router-dom";
import { IGenre } from "../poco/IGenre";

interface GenreParam {
  genre: IGenre;
}

function SidebarItem({genre}: GenreParam){
  return (
    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" >
      <Link className="text-[15px] ml-4 text-gray-200 font-bold"  to={"/" + genre.name }> {genre.name} </Link>
    </div>
  );
}

export default SidebarItem;