import {Component, OnInit} from '@angular/core';
import {GetMovieService} from "../../../core/services/movide/get-movie.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private subscription = new Subscription();
  public data: any[] = null;
  public loading: boolean = null;
  type: 'popular' | 'latest' | '';
  public activeFilter: string = 'popular';

  constructor(private movieService: GetMovieService) {
  }

  ngOnInit(): void {
    this.getData('popular')
  }

  filter(key: string): void {
    this.getData(key)
  }

  getData(key: string): void {
    this.activeFilter = key;
    this.loading = true;
    this.subscription.add(
      this.movieService.get(key, 1).subscribe((res) => {
        this.data = res.results;
        this.loading = false;
      })
    )
  }

  trackByFn(index, item): number {
    return item.id; // or item.id
  }

}
