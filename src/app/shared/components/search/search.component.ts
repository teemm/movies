import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, switchMap} from "rxjs/operators";
import {SearchService} from "../../../core/services/saerch/search.service";
import {movies, moviesResponse} from "../../../core/interfaces/movie.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  public searchForm: FormGroup;
  public searchData: movies[] | boolean = null;
  private subscription = new Subscription();
  public isTyped: boolean = false;
  @Output() public closeSearch: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder,
              private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['', Validators.required]
    });
    this.subscription.add(
      this.searchForm.get('search').valueChanges.pipe(
        debounceTime(150),
        distinctUntilChanged(),
        switchMap((res: string) => this.searchService.get(res))
      ).subscribe((res: moviesResponse) => {
          if (res.results.length > 0) {
            this.searchData = res.results
            this.isTyped = true;
          } else {
            this.searchData = false;
          }
        },
        error => {
          console.log(error);
        },
        () => {
          console.log('end');
        })
    )
  }

  resultClick(): void {
    this.closeSearch.emit(false);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
