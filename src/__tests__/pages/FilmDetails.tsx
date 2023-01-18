import {render, screen} from "@testing-library/react";
import React from "react";
import * as router from 'react-router'
import FilmDetails from "../../pages/FilmDetails";
import { FullFilmInfo } from "../../poco/FullFilmInfo";

test("renders films details page", () =>{
  const filmInfo: FullFilmInfo = {
    adult: false,
    backdrop_path: 'backdrop',
    belongs_to_collection: {
      id: 2342342,
      name: "Family",
      poster_path: "Poster",
      backdrop_path: "Backdrop"
    },
    budget: 58,
    genres: [{ id: 25, name:"Action"}],
    homepage: "google.com",
    id: 2342342,
    imdb_id: "35659645",
    original_language: "en",
    original_title: "Hatiko",
    overview: "There was a dog",
    popularity: 23423,
    poster_path: "Poster",
    production_companies: [{
      id: 2512,
      logo_path: 'logo',
      name: "Warner",
      origin_country: "en"
    }],
    production_countries: [{
      iso_3166_1: "en",
      name: "England"
    }],
    release_date: "1992",
    revenue: 23434,
    runtime: 234234,
    spoken_languages: [{
      english_name: "en",
      iso_639_1: "en",
      name: "en",
    }],
    status: "released",
    tagline: "family",
    title: "Hatiko",
    video: false,
    vote_average: 33,
    vote_count: 333
  };

  jest.spyOn(React, 'useState').mockImplementationOnce(() => [[ filmInfo ], ()=> null]);
  jest.spyOn(React, 'useEffect').mockImplementationOnce(() => jest.fn());
  // jest.spyOn(router, 'useNavigate').mockImplementation(() => jest.fn());

  //render(<FilmDetails></FilmDetails>);
  
  // const title = screen.getByRole('film-page-title');
  // expect(title).toBeInTheDocument();
  // expect(title).toHaveTextContent(genre.name);

  // const moviesList = screen.getByRole('film-page-list');
  // expect(moviesList).toBeInTheDocument();
 

});