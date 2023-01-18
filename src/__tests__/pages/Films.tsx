import {render, screen} from "@testing-library/react";
import React from "react";
import * as router from 'react-router'
import FilmsPage from "../../pages/Films";
import { FilmInfo } from "../../poco/FilmInfo";

test("renders films page", () =>{
  const filmInfo: FilmInfo = {
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

  jest.spyOn(React, 'useState').mockImplementationOnce(() => [[ filmInfo ], ()=> null]);
  jest.spyOn(React, 'useEffect').mockImplementationOnce(() => jest.fn());
  jest.spyOn(router, 'useNavigate').mockImplementation(() => jest.fn())

  const genre={
    id: 12345,
    name: "Horror"
  }

  render(<FilmsPage genre={genre}></FilmsPage>);
  
  const title = screen.getByRole('film-page-title');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent(genre.name);

  const moviesList = screen.getByRole('film-page-list');
  expect(moviesList).toBeInTheDocument();
 

});