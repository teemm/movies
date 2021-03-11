import {Genre} from "./genre.interface";

export interface movies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number;
  vote_count: number;
  genres: string[];
}

export interface moviesResponse {
  page: number;
  results: movies[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: any[];
  status: string
  tagline: string;
  title: string;
  video: boolean
  vote_average: number
  vote_count: number;
}
