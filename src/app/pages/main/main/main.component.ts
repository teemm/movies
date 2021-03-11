import {Component, OnDestroy, OnInit} from '@angular/core';
import {GetMovieService} from "../../../core/services/movie/get-movie.service";
import {Subscription, zip} from "rxjs";
import {FiltersService} from "../../../core/services/filters/filters.service";
import {Filters} from "../../../core/interfaces/filter.interface";
import {movies, moviesResponse} from "../../../core/interfaces/movie.interface";
import {Genre, GenreResponse} from "../../../core/interfaces/genre.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  public data: movies[] = null;
  public filterData: Filters[] = null;
  public genres: Genre[] = null;
  private readonly activeFilter: string = 'popular';
  private activePageId: number = 1;

  constructor(private movieService: GetMovieService,
              private filterService: FiltersService) {
  }

  ngOnInit(): void {
    this.getData(this.activeFilter);
    this.getFilters();
  }

  itemsFilter(item: Filters): void {
    this.filterData.filter((item: Filters) => item.isActive = false);
    item.isActive = true;
    this.getData(item.key)
  }

  getData(key: string): void {
    this.subscription.add(
      zip(
        this.movieService.getMovies(key, this.activePageId),
        this.movieService.getGenre()).subscribe((res) => {
        const movies = res[0] ? res[0] : null;
        const genres = res[1] ? res[1].genres : null;
        movies.results.forEach((data) => {
          let array = []
          data.genre_ids.forEach((genreId) => {
            array.push(this.returnGenreNames(genres, genreId).name);
            data.genres = array;
          })
        })
        this.data = movies.results;
      })
    )
  }

  getFilters(): void {
    this.filterData = this.filterService.get();
  }

  returnGenreNames(genres: Genre[], id: number): Genre {
    return genres.find((item: Genre) => item.id === id);
  }

  trackByFn(index, item): number {
    return item.id;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
