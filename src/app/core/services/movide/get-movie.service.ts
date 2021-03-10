import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GetMovieService {
  private key: string = environment.theMovieDbKey;

  constructor(private http: HttpClient) {
  }

  get(type: string, page: number = 1): Observable<any> {
    const url = `movie/${type}?api_key=${this.key}&language=en-US&page=${page}`
    return this.http.get(url);
  }

  getDetailInfo(id: number): Observable<any> {
    const url = `movie/${id}?api_key=${this.key}&language=en-US`;
    return this.http.get(url);
  }
}
