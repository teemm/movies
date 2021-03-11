import {Component, Input, OnInit} from '@angular/core';
import {movies} from "../../../core/interfaces/movie.interface";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() itemData: movies;
}
