import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {moviesResponse} from "../../interfaces/movie.interface";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private key: string = environment.theMovieDbKey;

  constructor(private http: HttpClient) {
  }

  get(key: string, page: number = 1): Observable<moviesResponse> {
    const url = `search/movie?api_key=${this.key}&language=en-US&query=${key}&page=${page}`
    return this.http.get<moviesResponse>(url);
  }
}
