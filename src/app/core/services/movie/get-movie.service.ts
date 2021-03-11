import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {MovieDetails, moviesResponse} from "../../interfaces/movie.interface";
import {GenreResponse} from "../../interfaces/genre.interface";
import {ActorResponse} from "../../interfaces/actor.interface";
import {TrailerResponse} from "../../interfaces/trailer.interface";

@Injectable({
  providedIn: 'root'
})

export class GetMovieService {
  private key: string = environment.theMovieDbKey;

  constructor(private http: HttpClient) {
  }

  getMovies(type: string, page: number): Observable<moviesResponse> {
    const url = `movie/${type}?api_key=${this.key}&language=en-US&page=${page}`;
    return this.http.get<moviesResponse>(url);
  }

  getDetailInfo(id: number): Observable<MovieDetails> {
    const url = `movie/${id}?api_key=${this.key}&language=en-US`;
    return this.http.get<MovieDetails>(url);
  }

  getGenre(): Observable<GenreResponse> {
    const url = `genre/movie/list?api_key=${this.key}&language=en-US`
    return this.http.get<GenreResponse>(url);
  }

  getActors(movieId: number): Observable<ActorResponse> {
    const url = `movie/${movieId}/credits?api_key=${this.key}&language=en-US`;
    return this.http.get<ActorResponse>(url);
  }

  getTrailer(movieId: number): Observable<TrailerResponse> {
    const url = `movie/${movieId}/videos?api_key=${this.key}&language=en-US`;
    return this.http.get<TrailerResponse>(url);
  }
}
