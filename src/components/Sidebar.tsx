import { IGenre } from "../poco/IGenre";
import SidebarItem from "./SidebarItem";

interface SidebarParam {
  genres: IGenre[];
}

function Sidebar({genres}: SidebarParam){
  return (
    <>
      <div className="sidebar p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">Films Catalog</h1>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        { genres.map( genre => <SidebarItem key={genre.id} genre={genre}></SidebarItem>)}

      </div>
    </>
  );
}

export default Sidebar;