import { FilmInfo } from "./FilmInfo";

export interface IDisconverResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: FilmInfo[];
}
