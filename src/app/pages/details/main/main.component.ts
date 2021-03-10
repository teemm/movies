import {Component, OnInit} from '@angular/core';
import {GetMovieService} from "../../../core/services/movide/get-movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data: any = null;

  constructor(private movieService: GetMovieService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.movieService.getDetailInfo(id).subscribe((res) => {
      // console.log(res, 'tt2');
      this.data = res;
    })
  }

}
