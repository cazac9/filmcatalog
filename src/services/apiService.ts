import axios from "axios";
import Config from "../Config";
import { FilmInfo } from "../poco/FilmInfo";
import { FullFilmInfo } from "../poco/FullFilmInfo";
import { IDisconverResponse } from "../poco/IDisconverResponse";
import { IGenre } from "../poco/IGenre";
import { IGenres } from "../poco/IGenres"
import SecureConfig from "../SecureConfig";

axios.defaults.params = {}
axios.defaults.params['api_key'] = SecureConfig.ApiKey

export async function getGenres(): Promise<IGenre[]> {
  const response = await axios.get<IGenres>(`${Config.ApiPath}/genre/movie/list`);
  return response.data.genres
}

export async function dicsoverMoviesByGenre(genre?:IGenre): Promise<FilmInfo[]> {
  const response = await axios.get<IDisconverResponse>(`${Config.ApiPath}/discover/movie?sort_by=popularity.desc&include_adult=false&page=1&with_genres=${genre?.id ?? ''}`);
  return response.data.results
}

export async function getMovie(filmId:string):Promise<FullFilmInfo> {
  const response = await axios.get<FullFilmInfo>(`${Config.ApiPath}/movie/${filmId}`);
  return response.data
}

