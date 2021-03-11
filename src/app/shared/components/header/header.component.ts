import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchIsActive: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  toggleSearch(): void {
    this.searchIsActive = !this.searchIsActive;
    if (this.searchIsActive) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  closeSearch(event: boolean): void {
    this.searchIsActive = event;
  }
}
