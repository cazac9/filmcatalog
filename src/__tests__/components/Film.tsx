
import {render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Film from "../../components/Film";
import Config from "../../Config";

test("renders film", () =>{
  const film = {
    adult: false,
    backdrop_path: "/backdrop",
    genre_ids: [56789],
    id: 12345,
    original_language: "en",
    original_title: "Hatiko",
    overview: "Film about dog",
    popularity: 10,
    poster_path: "/poster",
    release_date: "2012",
    title: "Hatiko",
    video: true,
    vote_average: 7,
    vote_count: 595
  };

  render(<Film film={film}></Film>, {wrapper: MemoryRouter});
  
  const filmDiv = screen.getByRole('film');
  expect(filmDiv).toBeInTheDocument();

  const img = filmDiv.children[0];
  expect(img).toHaveAttribute("src", Config.ImagePath + "/w200" + film.poster_path);
  expect(img).toHaveAttribute("width", "200");
  expect(img).toHaveAttribute("height", "300");

  const title = filmDiv.children[1];
  expect(title).toHaveTextContent(film.title);

  const overview = filmDiv.children[2];
  expect(overview).toHaveTextContent(film.overview);

  const details = filmDiv.children[3];
  expect(details).toHaveTextContent("Details");
});