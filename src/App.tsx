
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { IGenre } from "./poco/IGenre";
import FilmsPage from "./pages/Films";
import Sidebar from "./components/Sidebar";
import FilmDetails from "./pages/FilmDetails";
import { getGenres } from "./services/apiService";

function App() {
  const [genres, setGenres] = useState<IGenre[]>([]);


  useEffect(() => {
    const getGenresAsync = async () => {
        const genres = await getGenres();
        setGenres(genres)
      };

    getGenresAsync();
  }, []);

  return (
    <>
      <div className="container flex max-w-full bg-slate-600">

            <aside>
              <Sidebar genres={genres}></Sidebar>
            </aside>
        
            <main role="main" className="pt-1 px-3">
              <Routes>
                  { genres.map( genre => <Route key={genre.id} path={"/" + genre.name } element={<FilmsPage genre={genre} />}/>) }
                  <Route path="/" element={<FilmsPage />}/>
                  <Route path="/details/:filmId" element={<FilmDetails/>}/>
              </Routes>
            </main>
      </div>
    </>
   
  );
}

export default App;
