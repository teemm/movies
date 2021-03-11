import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GetMovieService} from "../../../core/services/movie/get-movie.service";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {ActorCast, ActorCrew, ActorResponse, CrewAndCast} from "../../../core/interfaces/actor.interface";
import {DragScrollComponent} from 'ngx-drag-scroll';
import {MovieDetails} from "../../../core/interfaces/movie.interface";
import {Trailer, TrailerResponse} from "../../../core/interfaces/trailer.interface";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  @ViewChild('nav', {read: DragScrollComponent, static: true}) ds: DragScrollComponent;
  private subscription = new Subscription();
  public data: MovieDetails = null;
  public actorCast: ActorCast = null;
  public actorCrew: ActorCrew = null;
  public trailerData: Trailer[] = null;
  public ActiveTrailer: Trailer = null;
  public openTrailerModal: boolean = false;

  constructor(private movieService: GetMovieService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.pipe(
        switchMap((res: Params) => this.movieService.getDetailInfo(res.id))
      ).subscribe(data => {
        this.data = data;
        this.getActors(this.data)
        this.getTrailerData();
      })
    )
  }

  getActors(data): void {
    this.movieService.getActors(data.id).subscribe((res: ActorResponse) => {
      this.actorCrew = res.crew ? res.crew : null;
      this.actorCast = res.cast ? res.cast : null;
    })
  }

  openTrailer(data: Trailer): void {
    this.ActiveTrailer = data;
    this.openTrailerModal = !this.openTrailerModal
  }

  getTrailerData(): void {
    this.movieService.getTrailer(this.data.id).subscribe((res: TrailerResponse) => {
      this.trailerData = res.results;
    })
  }

  closeModal(stats: boolean): void {
    this.openTrailerModal = stats;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
